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
} from 'asn1-ts';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary IPMEntryType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IPMEntryType  ::=  ENUMERATED {ipm(0), rn(1), nrn(2), on(3)}
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_IPMEntryType {
    ipm = 0,
    rn = 1,
    nrn = 2,
    on = 3,
}

/**
 * @summary IPMEntryType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IPMEntryType  ::=  ENUMERATED {ipm(0), rn(1), nrn(2), on(3)}
 * ```
 *
 * @enum {number}
 */
export type IPMEntryType = _enum_for_IPMEntryType;

/**
 * @summary IPMEntryType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IPMEntryType  ::=  ENUMERATED {ipm(0), rn(1), nrn(2), on(3)}
 * ```
 *
 * @enum {number}
 */
export const IPMEntryType = _enum_for_IPMEntryType;

/**
 * @summary IPMEntryType_ipm
 * @constant
 * @type {number}
 */
export const IPMEntryType_ipm: IPMEntryType =
    IPMEntryType.ipm; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ipm
 * @constant
 * @type {number}
 */
export const ipm: IPMEntryType =
    IPMEntryType.ipm; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IPMEntryType_rn
 * @constant
 * @type {number}
 */
export const IPMEntryType_rn: IPMEntryType =
    IPMEntryType.rn; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rn
 * @constant
 * @type {number}
 */
export const rn: IPMEntryType =
    IPMEntryType.rn; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IPMEntryType_nrn
 * @constant
 * @type {number}
 */
export const IPMEntryType_nrn: IPMEntryType =
    IPMEntryType.nrn; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nrn
 * @constant
 * @type {number}
 */
export const nrn: IPMEntryType =
    IPMEntryType.nrn; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IPMEntryType_on
 * @constant
 * @type {number}
 */
export const IPMEntryType_on: IPMEntryType =
    IPMEntryType.on; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary on
 * @constant
 * @type {number}
 */
export const on: IPMEntryType =
    IPMEntryType.on; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_IPMEntryType = $._decodeEnumerated;


export const _encode_IPMEntryType = $._encodeEnumerated;


/* eslint-enable */
