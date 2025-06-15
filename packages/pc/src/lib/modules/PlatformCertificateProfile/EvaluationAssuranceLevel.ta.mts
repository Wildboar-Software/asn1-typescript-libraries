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



/* START_OF_SYMBOL_DEFINITION _enum_for_EvaluationAssuranceLevel */
/**
 * @summary EvaluationAssuranceLevel
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EvaluationAssuranceLevel  ::=  ENUMERATED {
 *     level1 (1),
 *     level2 (2),
 *     level3 (3),
 *     level4 (4),
 *     level5 (5),
 *     level6 (6),
 *     level7 (7) }
 * ```@enum {number}
 */
export
enum _enum_for_EvaluationAssuranceLevel {
    level1 = 1,
    level2 = 2,
    level3 = 3,
    level4 = 4,
    level5 = 5,
    level6 = 6,
    level7 = 7,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_EvaluationAssuranceLevel */

/* START_OF_SYMBOL_DEFINITION EvaluationAssuranceLevel */
/**
 * @summary EvaluationAssuranceLevel
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EvaluationAssuranceLevel  ::=  ENUMERATED {
 *     level1 (1),
 *     level2 (2),
 *     level3 (3),
 *     level4 (4),
 *     level5 (5),
 *     level6 (6),
 *     level7 (7) }
 * ```@enum {number}
 */
export
type EvaluationAssuranceLevel = _enum_for_EvaluationAssuranceLevel;
/* END_OF_SYMBOL_DEFINITION EvaluationAssuranceLevel */

/* START_OF_SYMBOL_DEFINITION EvaluationAssuranceLevel */
/**
 * @summary EvaluationAssuranceLevel
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EvaluationAssuranceLevel  ::=  ENUMERATED {
 *     level1 (1),
 *     level2 (2),
 *     level3 (3),
 *     level4 (4),
 *     level5 (5),
 *     level6 (6),
 *     level7 (7) }
 * ```@enum {number}
 */
export
const EvaluationAssuranceLevel = _enum_for_EvaluationAssuranceLevel;
/* END_OF_SYMBOL_DEFINITION EvaluationAssuranceLevel */

/* START_OF_SYMBOL_DEFINITION EvaluationAssuranceLevel_level1 */
/**
 * @summary EvaluationAssuranceLevel_level1
 * @constant
 * @type {number}
 */
export
const EvaluationAssuranceLevel_level1: EvaluationAssuranceLevel = EvaluationAssuranceLevel.level1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION EvaluationAssuranceLevel_level1 */

/* START_OF_SYMBOL_DEFINITION level1 */
/**
 * @summary level1
 * @constant
 * @type {number}
 */
export
const level1: EvaluationAssuranceLevel = EvaluationAssuranceLevel.level1; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION level1 */

/* START_OF_SYMBOL_DEFINITION EvaluationAssuranceLevel_level2 */
/**
 * @summary EvaluationAssuranceLevel_level2
 * @constant
 * @type {number}
 */
export
const EvaluationAssuranceLevel_level2: EvaluationAssuranceLevel = EvaluationAssuranceLevel.level2; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION EvaluationAssuranceLevel_level2 */

/* START_OF_SYMBOL_DEFINITION level2 */
/**
 * @summary level2
 * @constant
 * @type {number}
 */
export
const level2: EvaluationAssuranceLevel = EvaluationAssuranceLevel.level2; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION level2 */

/* START_OF_SYMBOL_DEFINITION EvaluationAssuranceLevel_level3 */
/**
 * @summary EvaluationAssuranceLevel_level3
 * @constant
 * @type {number}
 */
export
const EvaluationAssuranceLevel_level3: EvaluationAssuranceLevel = EvaluationAssuranceLevel.level3; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION EvaluationAssuranceLevel_level3 */

/* START_OF_SYMBOL_DEFINITION level3 */
/**
 * @summary level3
 * @constant
 * @type {number}
 */
export
const level3: EvaluationAssuranceLevel = EvaluationAssuranceLevel.level3; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION level3 */

/* START_OF_SYMBOL_DEFINITION EvaluationAssuranceLevel_level4 */
/**
 * @summary EvaluationAssuranceLevel_level4
 * @constant
 * @type {number}
 */
export
const EvaluationAssuranceLevel_level4: EvaluationAssuranceLevel = EvaluationAssuranceLevel.level4; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION EvaluationAssuranceLevel_level4 */

/* START_OF_SYMBOL_DEFINITION level4 */
/**
 * @summary level4
 * @constant
 * @type {number}
 */
export
const level4: EvaluationAssuranceLevel = EvaluationAssuranceLevel.level4; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION level4 */

/* START_OF_SYMBOL_DEFINITION EvaluationAssuranceLevel_level5 */
/**
 * @summary EvaluationAssuranceLevel_level5
 * @constant
 * @type {number}
 */
export
const EvaluationAssuranceLevel_level5: EvaluationAssuranceLevel = EvaluationAssuranceLevel.level5; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION EvaluationAssuranceLevel_level5 */

/* START_OF_SYMBOL_DEFINITION level5 */
/**
 * @summary level5
 * @constant
 * @type {number}
 */
export
const level5: EvaluationAssuranceLevel = EvaluationAssuranceLevel.level5; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION level5 */

/* START_OF_SYMBOL_DEFINITION EvaluationAssuranceLevel_level6 */
/**
 * @summary EvaluationAssuranceLevel_level6
 * @constant
 * @type {number}
 */
export
const EvaluationAssuranceLevel_level6: EvaluationAssuranceLevel = EvaluationAssuranceLevel.level6; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION EvaluationAssuranceLevel_level6 */

/* START_OF_SYMBOL_DEFINITION level6 */
/**
 * @summary level6
 * @constant
 * @type {number}
 */
export
const level6: EvaluationAssuranceLevel = EvaluationAssuranceLevel.level6; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION level6 */

/* START_OF_SYMBOL_DEFINITION EvaluationAssuranceLevel_level7 */
/**
 * @summary EvaluationAssuranceLevel_level7
 * @constant
 * @type {number}
 */
export
const EvaluationAssuranceLevel_level7: EvaluationAssuranceLevel = EvaluationAssuranceLevel.level7; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION EvaluationAssuranceLevel_level7 */

/* START_OF_SYMBOL_DEFINITION level7 */
/**
 * @summary level7
 * @constant
 * @type {number}
 */
export
const level7: EvaluationAssuranceLevel = EvaluationAssuranceLevel.level7; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION level7 */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EvaluationAssuranceLevel */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EvaluationAssuranceLevel */

/* START_OF_SYMBOL_DEFINITION _decode_EvaluationAssuranceLevel */
export const _decode_EvaluationAssuranceLevel = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_EvaluationAssuranceLevel */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EvaluationAssuranceLevel */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EvaluationAssuranceLevel */

/* START_OF_SYMBOL_DEFINITION _encode_EvaluationAssuranceLevel */
export const _encode_EvaluationAssuranceLevel = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_EvaluationAssuranceLevel */

/* eslint-enable */
