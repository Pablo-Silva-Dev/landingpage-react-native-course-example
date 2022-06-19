import React, { CSSProperties } from 'react';
import { NextImage as NextImageComponent, Container } from './styles';

import { useAmp } from 'next/amp'

interface NextImageProps {
    imgUrl: string;
    width: string;
    height: string;
    style?: CSSProperties;
    className?: string;
}

export function NextImage({
    imgUrl,
    width,
    height,
    style,
    className
}: NextImageProps) {

    const isAmp = useAmp()

    return (
        <Container>

            {isAmp ? (
                <NextImageComponent
                    width={width}
                    height={height}
                    src={imgUrl}
                    style={style}
                    className={className}
                    layout="responsive"
                />
            ) : (
                <NextImageComponent
                    width={width}
                    height={height}
                    src={imgUrl}
                />
            )}
        </Container>
    )
}