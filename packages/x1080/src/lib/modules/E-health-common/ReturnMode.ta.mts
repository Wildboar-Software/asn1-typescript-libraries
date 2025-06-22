/* eslint-disable */
import {
    ENUMERATED,
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


export enum _enum_for_ReturnMode {
    continuous = 0,
    batch = 1,
}


/**
 * @summary ReturnMode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReturnMode  ::=  ENUMERATED {
 *   continuous,
 *   batch,
 *   ... }
 * ```
 *
 * @enum {number}
 */
export type ReturnMode = _enum_for_ReturnMode | ENUMERATED;


/**
 * @summary ReturnMode_continuous
 * @constant
 * @type {number}
 */
export const ReturnMode_continuous: ReturnMode = 0; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary continuous
 * @constant
 * @type {number}
 */
export const continuous: ReturnMode = ReturnMode_continuous; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary ReturnMode_batch
 * @constant
 * @type {number}
 */
export const ReturnMode_batch: ReturnMode = 1; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary batch
 * @constant
 * @type {number}
 */
export const batch: ReturnMode = ReturnMode_batch; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_ReturnMode = $._decodeEnumerated;




export const _encode_ReturnMode = $._encodeEnumerated;


/* eslint-enable */
