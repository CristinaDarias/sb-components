import './MyLabel.css'


export interface MyLabelProps {
    /**
     * Si quiere todo en mayúsculas.
     */
    allCaps?: boolean;
    /**
     * Colores básicos de la etiqueta.
     */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * Texto de la etiqueta.
     */
    label?: string;
    /**
     * Tamaño de la etiqueta.
     */
    size?: 'normal'|'h1'|'h2'|'h3';

    /**
     * Color de la fuente custom.
     */
    fontColor?: string;
    /**
     * Color del background custom.
     */
     backgroundColor?: string;
}

/**
 * Componente primario para las etiquetas personalizadas.
 * @param param0
 * @returns 
 */
export const MyLabel = ({
    allCaps = false,
    color   = 'primary',
    label   = 'No label', 
    size    = 'normal',
    fontColor,
    backgroundColor = 'transparent'
}: MyLabelProps) => {
  
    return (
        <span 
            className={ `label ${size} text-${color}`}
            style={{color: fontColor, backgroundColor: backgroundColor}}>
            {allCaps ? label.toUpperCase() : label}
        </span>
    )
}
