/* eslint-disable */
import {
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
import {
    BilateralDomain,
    _decode_BilateralDomain,
    _encode_BilateralDomain,
} from '../MTAAbstractService/BilateralDomain.ta.mjs';
/**
 * @summary BILATERAL
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BILATERAL ::= CLASS {&id    BilateralDomain UNIQUE,
 *                      &Type
 * }WITH SYNTAX {&Type,
 *               IDENTIFIED BY &id
 * }
 * ```
 *
 * @interface
 */
export interface BILATERAL<Type = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */> {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: 'BILATERAL';
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof BILATERAL<Type>]: $.ASN1Decoder<BILATERAL<Type>[_K]>;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof BILATERAL<Type>]: $.ASN1Encoder<BILATERAL<Type>[_K]>;
        }
    >;
    /**
     * @summary &id
     */
    readonly '&id'?: BilateralDomain;
    /**
     * @summary &Type
     */
    readonly '&Type': Type;
}

/* eslint-enable */
