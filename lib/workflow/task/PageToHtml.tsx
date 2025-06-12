import { TaskParamType, TaskType } from "@/types/task";
import {GlobeIcon, LucideProps } from "lucide-react";
import { useEffect } from "react";
import lottie from 'lottie-web';
import {defineElement} from 'lord-icon-element';
import CodeIcon from "@/components/icons/CodeIcon";
import { WorkflowTask } from "@/types/workflow";

export const PageToHtmlTask = {
    type: TaskType.PAGE_TO_HTML,
    label: "Get Html from Page",
    icon: CodeIcon,
    isEntryPoint: false,
    credits: 2,
    inputs: [
        {
            name: "Web page",
            type: TaskParamType.BROWSER_INSTANCE,
            required: true,
        }
    ],
    outputs:[
        {name: "Html",
        type: TaskParamType.STRING},
        {
            name: "Web page",
            type: TaskParamType.BROWSER_INSTANCE,
        }
    ],
} satisfies WorkflowTask;