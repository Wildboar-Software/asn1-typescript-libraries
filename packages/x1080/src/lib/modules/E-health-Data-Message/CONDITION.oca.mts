/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
    UniversalString,
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


/**
 * @summary CONDITION
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CONDITION ::= CLASS {
 *   &name  UniversalString,
 *   &id    OBJECT IDENTIFIER,
 *   &Type
 * }WITH SYNTAX {&name
 *               TYPE &Type
 *               IDENTIFIED BY &id
 * }
 * ```
 *
 * @interface
 */
export interface CONDITION<Type = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */> {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: 'CONDITION';
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof CONDITION<Type>]: $.ASN1Decoder<CONDITION<Type>[_K]>;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof CONDITION<Type>]: $.ASN1Encoder<CONDITION<Type>[_K]>;
        }
    >;
    /**
     * @summary &name
     */
    readonly '&name'?: UniversalString;
    /**
     * @summary &id
     */
    readonly '&id'?: OBJECT_IDENTIFIER;
    /**
     * @summary &Type
     */
    readonly '&Type': Type;
}

/* eslint-enable */
