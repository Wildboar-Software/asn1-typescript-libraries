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
import * as $ from 'asn1-ts/dist/functional.mjs';

/* START_OF_SYMBOL_DEFINITION TOKEN_DATA */
/**
 * @summary TOKEN_DATA
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TOKEN-DATA ::= CLASS {&id    INTEGER UNIQUE,
 *                       &Type
 * }WITH SYNTAX {&Type
 *               IDENTIFIED BY &id
 * }
 * ```
 *
 * @interface
 */
export interface TOKEN_DATA<
    Type = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */
> {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: 'TOKEN-DATA';
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof TOKEN_DATA<Type>]: $.ASN1Decoder<TOKEN_DATA<Type>[_K]>;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof TOKEN_DATA<Type>]: $.ASN1Encoder<TOKEN_DATA<Type>[_K]>;
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
/* END_OF_SYMBOL_DEFINITION TOKEN_DATA */

/* eslint-enable */
