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

/* START_OF_SYMBOL_DEFINITION _enum_for_PreferredPriority */
export enum _enum_for_PreferredPriority {
    undefined = 0,
    minor = 1,
    major = 2,
    serious = 3,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_PreferredPriority */

/* START_OF_SYMBOL_DEFINITION PreferredPriority */
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
/* END_OF_SYMBOL_DEFINITION PreferredPriority */

/* START_OF_SYMBOL_DEFINITION PreferredPriority_undefined */
/**
 * @summary PreferredPriority_undefined
 * @constant
 * @type {number}
 */
export const PreferredPriority_undefined: PreferredPriority = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION PreferredPriority_undefined */

/* START_OF_SYMBOL_DEFINITION undefined */
/**
 * @summary undefined
 * @constant
 * @type {number}
 */
export const undefined: PreferredPriority = PreferredPriority_undefined; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION undefined */

/* START_OF_SYMBOL_DEFINITION PreferredPriority_minor */
/**
 * @summary PreferredPriority_minor
 * @constant
 * @type {number}
 */
export const PreferredPriority_minor: PreferredPriority = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION PreferredPriority_minor */

/* START_OF_SYMBOL_DEFINITION minor */
/**
 * @summary minor
 * @constant
 * @type {number}
 */
export const minor: PreferredPriority = PreferredPriority_minor; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION minor */

/* START_OF_SYMBOL_DEFINITION PreferredPriority_major */
/**
 * @summary PreferredPriority_major
 * @constant
 * @type {number}
 */
export const PreferredPriority_major: PreferredPriority = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION PreferredPriority_major */

/* START_OF_SYMBOL_DEFINITION major */
/**
 * @summary major
 * @constant
 * @type {number}
 */
export const major: PreferredPriority = PreferredPriority_major; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION major */

/* START_OF_SYMBOL_DEFINITION PreferredPriority_serious */
/**
 * @summary PreferredPriority_serious
 * @constant
 * @type {number}
 */
export const PreferredPriority_serious: PreferredPriority = 3; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION PreferredPriority_serious */

/* START_OF_SYMBOL_DEFINITION serious */
/**
 * @summary serious
 * @constant
 * @type {number}
 */
export const serious: PreferredPriority = PreferredPriority_serious; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION serious */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PreferredPriority */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PreferredPriority */

/* START_OF_SYMBOL_DEFINITION _decode_PreferredPriority */
export const _decode_PreferredPriority = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_PreferredPriority */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PreferredPriority */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PreferredPriority */

/* START_OF_SYMBOL_DEFINITION _encode_PreferredPriority */
export const _encode_PreferredPriority = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_PreferredPriority */

/* eslint-enable */
