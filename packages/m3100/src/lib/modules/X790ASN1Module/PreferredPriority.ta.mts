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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';


export enum _enum_for_PreferredPriority {
    undefined = 0,
    minor = 1,
    major = 2,
    serious = 3,
}


/**
 * @summary PreferredPriority
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PreferredPriority  ::=  ENUMERATED {
 *   undefined(0), minor(1), major(2), serious(3), ...
 *   }
 * ```@enum {number}
 */
export type PreferredPriority = _enum_for_PreferredPriority | ENUMERATED;


/**
 * @summary PreferredPriority_undefined
 * @constant
 * @type {number}
 */
export const PreferredPriority_undefined: PreferredPriority = 0; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary undefined
 * @constant
 * @type {number}
 */
export const undefined: PreferredPriority = PreferredPriority_undefined; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary PreferredPriority_minor
 * @constant
 * @type {number}
 */
export const PreferredPriority_minor: PreferredPriority = 1; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary minor
 * @constant
 * @type {number}
 */
export const minor: PreferredPriority = PreferredPriority_minor; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary PreferredPriority_major
 * @constant
 * @type {number}
 */
export const PreferredPriority_major: PreferredPriority = 2; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary major
 * @constant
 * @type {number}
 */
export const major: PreferredPriority = PreferredPriority_major; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary PreferredPriority_serious
 * @constant
 * @type {number}
 */
export const PreferredPriority_serious: PreferredPriority = 3; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary serious
 * @constant
 * @type {number}
 */
export const serious: PreferredPriority = PreferredPriority_serious; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_PreferredPriority = $._decodeEnumerated;




export const _encode_PreferredPriority = $._encodeEnumerated;


/* eslint-enable */
