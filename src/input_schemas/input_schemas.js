import * as yup from 'yup'

export const edit_schema = yup.object({
    title: yup.string()
        .required('This field is required')
        .max(100, 'Title can"t be more that 100 characters'),
    description: yup.string()
        .required('This field is required')
        .max(1000, 'Description can"t be more that 1000 characters')
})