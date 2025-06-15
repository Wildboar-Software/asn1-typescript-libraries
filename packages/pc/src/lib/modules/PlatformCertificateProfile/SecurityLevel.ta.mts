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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";



/* START_OF_SYMBOL_DEFINITION _enum_for_SecurityLevel */
/**
 * @summary SecurityLevel
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SecurityLevel  ::=  ENUMERATED {
 *     level1 (1),
 *     level2 (2),
 *     level3 (3),
 *     level4 (4) }
 * ```@enum {number}
 */
export
enum _enum_for_SecurityLevel {
    level1 = 1,
    level2 = 2,
    level3 = 3,
    level4 = 4,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_SecurityLevel */

/* START_OF_SYMBOL_DEFINITION SecurityLevel */
/**
 * @summary SecurityLevel
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SecurityLevel  ::=  ENUMERATED {
 *     level1 (1),
 *     level2 (2),
 *     level3 (3),
 *     level4 (4) }
 * ```@enum {number}
 */
export
type SecurityLevel = _enum_for_SecurityLevel;
/* END_OF_SYMBOL_DEFINITION SecurityLevel */

/* START_OF_SYMBOL_DEFINITION SecurityLevel */
/**
 * @summary SecurityLevel
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SecurityLevel  ::=  ENUMERATED {
 *     level1 (1),
 *     level2 (2),
 *     level3 (3),
 *     level4 (4) }
 * ```@enum {number}
 */
export
const SecurityLevel = _enum_for_SecurityLevel;
/* END_OF_SYMBOL_DEFINITION SecurityLevel */

/* START_OF_SYMBOL_DEFINITION SecurityLevel_level1 */
/**
 * @summary SecurityLevel_level1
 * @constant
 * @type {number}
 */
export
const SecurityLevel_level1: SecurityLevel = SecurityLevel.level1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SecurityLevel_level1 */

/* START_OF_SYMBOL_DEFINITION level1 */
/**
 * @summary level1
 * @constant
 * @type {number}
 */
export
const level1: SecurityLevel = SecurityLevel.level1; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION level1 */

/* START_OF_SYMBOL_DEFINITION SecurityLevel_level2 */
/**
 * @summary SecurityLevel_level2
 * @constant
 * @type {number}
 */
export
const SecurityLevel_level2: SecurityLevel = SecurityLevel.level2; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SecurityLevel_level2 */

/* START_OF_SYMBOL_DEFINITION level2 */
/**
 * @summary level2
 * @constant
 * @type {number}
 */
export
const level2: SecurityLevel = SecurityLevel.level2; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION level2 */

/* START_OF_SYMBOL_DEFINITION SecurityLevel_level3 */
/**
 * @summary SecurityLevel_level3
 * @constant
 * @type {number}
 */
export
const SecurityLevel_level3: SecurityLevel = SecurityLevel.level3; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SecurityLevel_level3 */

/* START_OF_SYMBOL_DEFINITION level3 */
/**
 * @summary level3
 * @constant
 * @type {number}
 */
export
const level3: SecurityLevel = SecurityLevel.level3; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION level3 */

/* START_OF_SYMBOL_DEFINITION SecurityLevel_level4 */
/**
 * @summary SecurityLevel_level4
 * @constant
 * @type {number}
 */
export
const SecurityLevel_level4: SecurityLevel = SecurityLevel.level4; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SecurityLevel_level4 */

/* START_OF_SYMBOL_DEFINITION level4 */
/**
 * @summary level4
 * @constant
 * @type {number}
 */
export
const level4: SecurityLevel = SecurityLevel.level4; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION level4 */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SecurityLevel */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SecurityLevel */

/* START_OF_SYMBOL_DEFINITION _decode_SecurityLevel */
export const _decode_SecurityLevel = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_SecurityLevel */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SecurityLevel */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SecurityLevel */

/* START_OF_SYMBOL_DEFINITION _encode_SecurityLevel */
export const _encode_SecurityLevel = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_SecurityLevel */

/* eslint-enable */
