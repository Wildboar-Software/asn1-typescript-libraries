/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary EXTENSION_ATTRIBUTE
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EXTENSION-ATTRIBUTE ::= CLASS {
 *   &id    INTEGER(0..ub-extension-attributes) UNIQUE,
 *   &Type
 * }WITH SYNTAX {&Type
 *               IDENTIFIED BY &id
 * }
 * ```
 *
 * @interface
 */
export interface EXTENSION_ATTRIBUTE<
    Type = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */
> {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: 'EXTENSION-ATTRIBUTE';
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof EXTENSION_ATTRIBUTE<Type>]: $.ASN1Decoder<
                EXTENSION_ATTRIBUTE<Type>[_K]
            >;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof EXTENSION_ATTRIBUTE<Type>]: $.ASN1Encoder<
                EXTENSION_ATTRIBUTE<Type>[_K]
            >;
        }
    >;
    /**
     * @summary &id
     */
    readonly '&id'?: INTEGER;
    /**
     * @summary &Type
     */
    readonly '&Type': Type;
}

/* eslint-enable */
