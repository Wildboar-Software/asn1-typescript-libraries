/* eslint-disable */
import {
    type INTEGER,
    type ASN1Element as _Element,
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
 * @summary ServiceAccessCharge
 * @description
 *
 * Defined in ITU-T X.411 (1999) (accounting objects).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ServiceAccessCharge  ::=  INTEGER
 * ```
 */
export type ServiceAccessCharge = INTEGER;


export const _decode_ServiceAccessCharge: $.ASN1Decoder<INTEGER> = $._decodeInteger;


export const _encode_ServiceAccessCharge: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
