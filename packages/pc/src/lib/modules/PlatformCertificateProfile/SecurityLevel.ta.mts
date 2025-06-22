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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



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
 * ```
 *
 * @enum {number}
 */
export
enum _enum_for_SecurityLevel {
    level1 = 1,
    level2 = 2,
    level3 = 3,
    level4 = 4,
}

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
 * ```
 *
 * @enum {number}
 */
export
type SecurityLevel = _enum_for_SecurityLevel;

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
 * ```
 *
 * @enum {number}
 */
export
const SecurityLevel = _enum_for_SecurityLevel;

/**
 * @summary SecurityLevel_level1
 * @constant
 * @type {number}
 */
export
const SecurityLevel_level1: SecurityLevel = SecurityLevel.level1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary level1
 * @constant
 * @type {number}
 */
export
const level1: SecurityLevel = SecurityLevel.level1; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SecurityLevel_level2
 * @constant
 * @type {number}
 */
export
const SecurityLevel_level2: SecurityLevel = SecurityLevel.level2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary level2
 * @constant
 * @type {number}
 */
export
const level2: SecurityLevel = SecurityLevel.level2; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SecurityLevel_level3
 * @constant
 * @type {number}
 */
export
const SecurityLevel_level3: SecurityLevel = SecurityLevel.level3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary level3
 * @constant
 * @type {number}
 */
export
const level3: SecurityLevel = SecurityLevel.level3; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SecurityLevel_level4
 * @constant
 * @type {number}
 */
export
const SecurityLevel_level4: SecurityLevel = SecurityLevel.level4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary level4
 * @constant
 * @type {number}
 */
export
const level4: SecurityLevel = SecurityLevel.level4; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_SecurityLevel = $._decodeEnumerated;


export const _encode_SecurityLevel = $._encodeEnumerated;


/* eslint-enable */
