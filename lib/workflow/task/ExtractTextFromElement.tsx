import { TaskParamType, TaskType } from "@/types/task";
import {GlobeIcon, LucideProps } from "lucide-react";
import { useEffect } from "react";
import lottie from 'lottie-web';
import {defineElement} from 'lord-icon-element';
import TextIcon from "@/components/icons/TextIcon";

export const ExtractTextFromElementTask = {
    type: TaskType.EXTRACT_TEXT_FROM_ELEMENT,
    label: "Extract text from element",
    icons: TextIcon,
    isEntryPoint: false,
    inputs: [
        {
            name: "Html",
            type: TaskParamType.STRING,
            required: true,
            variant: "textarea",
        },
        {
            name: "Selector",
            type: TaskParamType.STRING,
            required: true,
        }
    ],
    outputs:[
        {
            name: "Extracted text",
            type: TaskParamType.STRING
        }
    ],
};