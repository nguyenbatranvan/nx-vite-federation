import {ReactNode} from "react";
import * as ReactDOM from "react-dom/client";

interface IProps {
  urlConfig?: string;
  children: ReactNode;
  id: string;
}

export const ConfigWrapper = async (props: IProps) => {
  const {urlConfig = '/config.json', id, children} = props;
  const res = await fetch(urlConfig);
  const data = await res.json();
  for (const key in data) {
    window[key] = data[key]
  }
  const root = ReactDOM.createRoot(
    document.getElementById(id) as HTMLElement
  );
  root.render(
    children
  )
}
