import "./mylabel.css";
export interface MyLabelProps {
    label: string;
    /**
     * El tamaño del label
     */
    size?: "normal" | "h1" | "h2" | "h3";
    /**
     * Mayúsculas
     */
    allCaps?: boolean;
    /**
     * Colores básicos del botón
     */
    color?: "primary" | "secondary" | "tertiary";
    /**
     * Probar colores fuentes
     */
    fontColor?: string;
}
export declare const MyLabel: ({ label, size, allCaps, color, fontColor, }: MyLabelProps) => import("react/jsx-runtime").JSX.Element;
