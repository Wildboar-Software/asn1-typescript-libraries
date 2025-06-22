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
 * @summary OtherActions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OtherActions  ::=  BIT STRING {redirected(0), dl-operation(1)
 * }(SIZE (0..ub-bit-options))
 * ```
 */
export type OtherActions = BIT_STRING;

/**
 * @summary OtherActions_redirected
 * @constant
 */
export const OtherActions_redirected: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary redirected
 * @constant
 */
export const redirected: number = OtherActions_redirected; /* SHORT_NAMED_BIT */

/**
 * @summary OtherActions_dl_operation
 * @constant
 */
export const OtherActions_dl_operation: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary dl_operation
 * @constant
 */
export const dl_operation: number = OtherActions_dl_operation; /* SHORT_NAMED_BIT */


export const _decode_OtherActions = $._decodeBitString;


export const _encode_OtherActions = $._encodeBitString;


/* eslint-enable */
