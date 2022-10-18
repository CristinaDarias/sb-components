import './MyLabel.css'


export interface MyLabelProps {
    /**
     * Texto que aparece en la etiqueta.
     */
    label?: string;
    /**
     * Qué tamaño quieres?
     */
    size?: 'normal'|'h1'|'h2'|'h3';
}

/**
 * Componente primario para las etiquetas personalizadas.
 * @param label Texto que aparece en la etiqueta.
 * @param size Tamaño para la etiqueta.
 * @returns 
 */
export const MyLabel = ({
    label = 'No label', 
    size  = 'normal'
}: MyLabelProps) => {
  
    return (
    <span className={ `${size}` }>
        {label}
    </span>
  )
}
