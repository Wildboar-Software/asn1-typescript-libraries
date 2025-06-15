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
import * as $ from 'asn1-ts/dist/functional.mjs';

/**
 * @summary ASN1Version
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ASN1Version  ::=  BIT STRING {v1990(0), v1994(1)}
 * ```
 */
export type ASN1Version = BIT_STRING;

/**
 * @summary ASN1Version_v1990
 * @constant
 */
export const ASN1Version_v1990: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary v1990
 * @constant
 */
export const v1990: number = ASN1Version_v1990; /* SHORT_NAMED_BIT */

/**
 * @summary ASN1Version_v1994
 * @constant
 */
export const ASN1Version_v1994: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary v1994
 * @constant
 */
export const v1994: number = ASN1Version_v1994; /* SHORT_NAMED_BIT */


export const _decode_ASN1Version = $._decodeBitString;


export const _encode_ASN1Version = $._encodeBitString;


/* eslint-enable */
