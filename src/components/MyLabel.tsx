import React from "react";
import "./mylabel.css";

export interface MyLabelProps {
  /*
   *Es el texto que va en el label custom
   */
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

export const MyLabel = ({
  label = "No label",
  size = "normal",
  allCaps = false,
  color = "primary",
  fontColor,
}: MyLabelProps) => {
  return (
    <span
      className={`label ${size}  text-${color}`}
      style={{ color: fontColor }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};
