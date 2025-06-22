/* eslint-disable */
import {
    TeletexString,
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
 * @summary IdentificationCode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IdentificationCode  ::=  TeletexString(SIZE (1..ub-identification-code))
 * ```
 */
export type IdentificationCode = TeletexString; // TeletexString


export const _decode_IdentificationCode = $._decodeTeletexString;


export const _encode_IdentificationCode = $._encodeTeletexString;


/* eslint-enable */
