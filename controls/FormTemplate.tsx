import React, { ReactElement }  from "react";
import { Form,Table } from "antd";

type AllowedChildren = ReactElement<typeof Form>;

interface FormTemplateProps
{
    children:AllowedChildren
}

const FormTemplate:React.FC<FormTemplateProps>=()=>{

}

export default FormTemplate;