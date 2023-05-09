import { Formik, FormikHelpers, Field, ErrorMessage } from 'formik';
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup';
import socketio from "../../socketio";

interface JoinRequest {
    code: number | null
    name: string
}

export default function() {
    const navigate = useNavigate()
    const initialValues: JoinRequest = {
        code: null,
        name: '',
    }

    const handleSubmit = (values: JoinRequest, { setSubmitting }: FormikHelpers<JoinRequest>) => {
        console.log(values)

        socketio.emit('joinGame', {
            code: values.code,
            name: values.name,
        }, (response: any) => {
            console.log(response)
            if (response.success) {
                console.log(response)
            }
            setSubmitting(false);
        });
    }

    const schema = Yup.object({
        code: Yup.number().required('Je moet een code invullen').min(100000, 'De code moet 6 cijfers lang zijn').max(999999, 'De code moet 6 cijfers lang zijn'),
        name: Yup.string().required('Je moet een naam invullen').min(3, 'De naam moet minimaal 3 tekens lang zijn').max(20, 'De naam mag maximaal 20 tekens lang zijn'),
    })
    
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={handleSubmit}
        >
            {(form) => (
                <form onSubmit={form.handleSubmit} className="grid grid-cols-1 grid-flow-row gap-2 mx-auto">
                    <div>
                        <Field type="text" placeholder='Naam' name="name" className="rounded border-gray-700 border-b-4 shadow bg-gray-800 text-gray-200 p-2 mx-auto"/>
                        <ErrorMessage name="name" component="div" className="text-xs text-red-500 mt-1"/>
                    </div>
                    
                    <div>
                        <Field type="text" placeholder='Code' name="code" className="rounded border-gray-700 border-b-4 shadow bg-gray-800 text-gray-200 p-2 mx-auto"/>
                        <ErrorMessage name="code" component="div" className="text-xs text-red-500 mt-1"/>
                    </div>

                    <div className="flex flex-col">
                        <button type="submit" disabled={form.isSubmitting} className='p-2 rounded border-b-4 border-gray-800 hover:border-gray-900 shadow bg-gray-700 hover:bg-gray-800 transition-colors'>
                            Spelen
                        </button>

                        <button onClick={() => navigate('/new')} className='p-2 mt-8 rounded border-b-4 border-gray-800 hover:border-gray-900 shadow bg-gray-700 hover:bg-gray-800 transition-colors'>
                            Spel Maken
                        </button>
                    </div>
                </form>
            )}
        </Formik>
    )
}