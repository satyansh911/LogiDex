import { TaskParamType, TaskType } from "@/types/task";
import {GlobeIcon, LucideProps } from "lucide-react";
import { useEffect } from "react";
import lottie from 'lottie-web';
import {defineElement} from 'lord-icon-element';
import LaunchBrowserIcon from "@/components/icons/LaunchBrowserIcon";
import { WorkflowTask } from "@/types/workflow";

export const LaunchBrowserTask = {
    type: TaskType.LAUNCH_BROWSER,
    label: "Launch Browser",
    icon: LaunchBrowserIcon,
    isEntryPoint: true,
    credits: 5,
    inputs: [
        {
            name: "Website URL",
            type: TaskParamType.STRING,
            helperText: "Eg: https://www.google.com",
            required: true,
            hideHandle: true,
        }
    ],
    outputs: [
        { name: "Web page", type: TaskParamType.BROWSER_INSTANCE }
    ],
} satisfies WorkflowTask;
