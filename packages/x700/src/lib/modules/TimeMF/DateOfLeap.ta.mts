/* eslint-disable */
import {
    GeneralizedTime,
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
 * @summary DateOfLeap
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DateOfLeap  ::=  GeneralizedTime
 * ```
 */
export type DateOfLeap = GeneralizedTime; // GeneralizedTime


export const _decode_DateOfLeap = $._decodeGeneralizedTime;


export const _encode_DateOfLeap = $._encodeGeneralizedTime;


/* eslint-enable */
