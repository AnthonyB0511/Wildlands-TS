import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "../pages/scss/Contact.module.scss";
import { useNavigate } from "react-router-dom";
interface FormValues {
    name: string;
    firstname: string;
    email: string;
    subject: string;
    message: string;
    rules: boolean;
}

const Contact = () => {
    const [feedbackGood, setFeedbackGood] = useState("");
    const navigate = useNavigate()
    const yupSchema = yup.object().shape({
        name: yup.string().required("Ce champ est obligatoire"),
        firstname: yup.string().required("Ce champ est obligatoire "),
        email: yup
            .string()
            .required("Ce champ est obligatoire")
            .matches(
                /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                "Votre email n'est pas valide"
            ),
        subject: yup.string().required("Ce champ est obligatoire "),
        message: yup.string().required("Ce champ est obligatoire"),
        rules: yup
            .boolean()
            .oneOf([true], "Veuillez cocher la case si vous souhaitez envoyer votre message")
            .required("Ce champ est obligatoire"),
    });

    const defaultValues: FormValues = {
        name: "",
        firstname: "",
        email: "",
        subject: "",
        message: "",
        rules: false,
    };

    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>({
        defaultValues,
        resolver: yupResolver(yupSchema),
    });

    const submit: SubmitHandler<FormValues> = (values) => {
        console.log("values" + values);
        setFeedbackGood("Votre message a été envoyé.");
        setTimeout(() => {
            setFeedbackGood("")
            reset(defaultValues)
            navigate("/")
        }, 4000)


    };

    return (
        <>
            <form onSubmit={handleSubmit(submit)} className={styles.contact}>
                <h1>Contact</h1>
                <input type="text" id="name" {...register("name")} title="Nom" placeholder="Nom" />
                {errors?.name && <p className="form-error">{errors.name?.message}</p>}

                <input type="text" id="firstname" {...register("firstname")} title="Prénom" placeholder="Prénom" />
                {errors?.firstname && <p className="form-error">{errors.firstname?.message}</p>}

                <input type="text" id="email" {...register("email")} title="Email" placeholder="Email" />
                {errors?.email && <p className="form-error">{errors.email?.message}</p>}

                <input type="text" id="subject" {...register("subject")} title="Sujet de votre demande" placeholder="Sujet de votre demande" />
                {errors?.subject && <p className="form-error">{errors.subject?.message}</p>}

                <textarea id="message" {...register("message")} title="Message" placeholder="Votre message" />
                {errors?.message && <p className="form-error">{errors.message?.message}</p>}

                <section className={styles.rules}>
                    <input type="checkbox" id="rules" {...register("rules")} />
                    <p>En soumettant ce formulaire, j’accepte que mes informations soient utilisées exclusivement dans le cadre de ma demande</p>
                </section>
                {errors?.rules && <p className="form-error text-center">{errors.rules?.message}</p>}

                <button className="mt20" title="Soumettre le formulaire">Envoyer votre message</button>
                {feedbackGood && <p className="feedbackGood">{feedbackGood}</p>}
            </form>
        </>
    );
};

export default Contact;
