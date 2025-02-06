import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useFormik } from 'formik'
import { object, string } from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { addcategory, deletecategory, editecategory } from '../../../redux/action/Category.action';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function Category(props) {
    const [open, setOpen] = React.useState(false);
    const [update, setupdate] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
        formik.resetForm()
        setupdate(false)
    };

    const handleClose = () => {
        setOpen(false);
    };
    const dispatch = useDispatch();

    const category = useSelector(state => state.category)
    console.log(category);


    let categorySchema = object({
        name: string().required(),
        description: string().required()
    });
    const formik = useFormik({
        initialValues: {
            name: '',
            description: ''
        },
        validationSchema: categorySchema,
        onSubmit: (values, { resetForm }) => {
            if (update) {
                dispatch(editecategory(values))
            } else {
                dispatch(addcategory(values))
            }


            resetForm()
            handleClose();
        }
    });
    const { handleSubmit, handleBlur, handleChange, touched, errors, values, setValues } = formik;

    const columns = [

        { field: 'name', headerName: 'Name', width: 200 },
        { field: 'description', headerName: 'Description', width: 200 },
        {
            field: 'action',
            headerName: 'Action',
            width: 100,
            renderCell: (params) => (
                <>
                    <IconButton onClick={() => handledelete(params.row.id)}>
                        <DeleteIcon />
                    </IconButton>

                    <IconButton onClick={() => handleedite(params.row)}>
                        <EditIcon />
                    </IconButton>
                </>
            )
        }
    ]


    const handledelete = (id) => {
        dispatch(deletecategory(id))
    }
    const handleedite = (data) => {
      
        setOpen(true)
        setupdate(true)
        setValues(data)
    }
    return (
        <div>
            <React.Fragment>
                <Button variant="outlined" onClick={handleClickOpen}>
                    Add category
                </Button>
                <Dialog
                    open={open}
                    onClose={handleClose}
                >
                    <DialogTitle>category</DialogTitle>
                    <form onSubmit={handleSubmit}>
                        <DialogContent>

                            <TextField
                                margin="dense"
                                id="name"
                                name="name"
                                label="name"
                                type="text"
                                fullWidth
                                variant="standard"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                                error={errors.name && touched.name ? true : false}
                                helperText={errors.name && errors.name ? errors.name : ''}
                            />

                            <TextField
                                margin="dense"
                                id="description"
                                name="description"
                                label="description"
                                type="text"
                                fullWidth
                                variant="standard"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.description}
                                error={errors.description && touched.description ? true : false}
                                helperText={errors.description && errors.description ? errors.description : ''}
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button type="submit">{update ? 'update' : 'Add'}</Button>
                        </DialogActions>
                    </form>
                </Dialog>
            </React.Fragment>

            <DataGrid
                rows={category.category}
                columns={columns}
                initialState={{ pagination: { paginationModel: { page: 0, pageSize: 5 } } }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
                sx={{ border: 0 }}
            />
        </div>
    );
}

export default Category;