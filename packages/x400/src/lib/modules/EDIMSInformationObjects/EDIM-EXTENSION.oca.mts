/* eslint-disable */
import {
    BOOLEAN,
    OBJECT_IDENTIFIER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary EDIM_EXTENSION
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EDIM-EXTENSION ::= CLASS {
 *   &id           OBJECT IDENTIFIER UNIQUE,
 *   &criticality  BOOLEAN DEFAULT FALSE,
 *   &Type         DEFAULT NULL
 * }
 * WITH SYNTAX {
 *   [VALUE &Type,]
 *   [CRITICALITY &criticality]
 *   IDENTIFIED BY &id
 * }
 * ```
 *
 * @interface
 */
export interface EDIM_EXTENSION<
    Type = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */
> {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: 'EDIM-EXTENSION';
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof EDIM_EXTENSION<Type>]: $.ASN1Decoder<
                EDIM_EXTENSION<Type>[_K]
            >;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof EDIM_EXTENSION<Type>]: $.ASN1Encoder<
                EDIM_EXTENSION<Type>[_K]
            >;
        }
    >;
    /**
     * @summary &id
     */
    readonly '&id'?: OBJECT_IDENTIFIER;
    /**
     * @summary &criticality
     */
    readonly '&criticality'?: BOOLEAN;
    /**
     * @summary &Type
     */
    readonly '&Type': Type;
}

/* eslint-enable */
