/* eslint-disable */
import {
    BIT_STRING,
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
 * @summary RandomNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RandomNumber  ::=  BIT STRING
 * ```
 */
export type RandomNumber = BIT_STRING;


export const _decode_RandomNumber = $._decodeBitString;


export const _encode_RandomNumber = $._encodeBitString;


/* eslint-enable */
