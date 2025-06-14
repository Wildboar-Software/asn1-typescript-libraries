/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

/* START_OF_SYMBOL_DEFINITION COMPRESSION_ALGORITHM */
/**
 * @summary COMPRESSION_ALGORITHM
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * COMPRESSION-ALGORITHM ::= CLASS {
 *   &id    OBJECT IDENTIFIER UNIQUE,
 *   &Type  OPTIONAL
 * }WITH SYNTAX {[VALUE &Type]
 *               IDENTIFIED BY &id
 * }
 * ```
 *
 * @interface
 */
export interface COMPRESSION_ALGORITHM<
    Type = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */
> {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: 'COMPRESSION-ALGORITHM';
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof COMPRESSION_ALGORITHM<Type>]: $.ASN1Decoder<
                COMPRESSION_ALGORITHM<Type>[_K]
            >;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof COMPRESSION_ALGORITHM<Type>]: $.ASN1Encoder<
                COMPRESSION_ALGORITHM<Type>[_K]
            >;
        }
    >;
    /**
     * @summary &id
     */
    readonly '&id'?: OBJECT_IDENTIFIER;
    /**
     * @summary &Type
     */
    readonly '&Type': Type;
}
/* END_OF_SYMBOL_DEFINITION COMPRESSION_ALGORITHM */

/* eslint-enable */
