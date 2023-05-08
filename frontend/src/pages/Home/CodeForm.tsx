import { CodeRequest } from "@/api/AuthEntities";
import { Formik, FormikHelpers, Field, ErrorMessage } from 'formik';
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup';

export default function() {
    const navigate = useNavigate()

    const handleSubmit = (values: CodeRequest, { setSubmitting }: FormikHelpers<CodeRequest>) => {
        console.log(values)
        setSubmitting(false)
    }

    const schema = Yup.object({
        code: Yup.number().required('Je moet een code invullen').min(100000, 'De code moet 6 cijfers lang zijn').max(999999, 'De code moet 6 cijfers lang zijn'),
    })
    
    return (
        <Formik
            initialValues={{ code: null }}
            validationSchema={schema}
            onSubmit={handleSubmit}
        >
            {(form) => (
                <form className="grid grid-cols-1 grid-flow-row gap-2 mx-auto">
                    <div>
                        <Field type="text" placeholder='Code' name="code" className="rounded border-gray-700 border-b-2 shadow bg-gray-800 text-gray-200 p-2 mx-auto"/>
                        <ErrorMessage name="code" component="div" className="text-xs text-red-500 mt-1"/>
                    </div>

                    <div className="flex flex-col">
                        <button type="submit" disabled={form.isSubmitting} className='p-2 rounded border-b-2 border-gray-800 shadow bg-gray-700'>
                            Spelen
                        </button>
                        
                        <button onClick={() => navigate('/new')} className='p-2 mt-8 rounded border-b-2 border-gray-800 shadow bg-gray-700'>
                            Spel Maken
                        </button>
                    </div>
                </form>
            )}
        </Formik>
    )
}