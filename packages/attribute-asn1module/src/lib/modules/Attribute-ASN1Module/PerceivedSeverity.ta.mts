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
 * @summary PerceivedSeverity
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PerceivedSeverity  ::=  ENUMERATED {
 *   indeterminate(0),
 *   -- used when it is not possible to assign the following values
 *   critical(1), major(2), minor(3), warning(4), cleared(5)}
 * ```
 *
 * @enum {number}
 */
export
enum _enum_for_PerceivedSeverity {
    indeterminate = 0,
    critical = 1,
    major = 2,
    minor = 3,
    warning = 4,
    cleared = 5,
}

/**
 * @summary PerceivedSeverity
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PerceivedSeverity  ::=  ENUMERATED {
 *   indeterminate(0),
 *   -- used when it is not possible to assign the following values
 *   critical(1), major(2), minor(3), warning(4), cleared(5)}
 * ```
 *
 * @enum {number}
 */
export
type PerceivedSeverity = _enum_for_PerceivedSeverity;

/**
 * @summary PerceivedSeverity
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PerceivedSeverity  ::=  ENUMERATED {
 *   indeterminate(0),
 *   -- used when it is not possible to assign the following values
 *   critical(1), major(2), minor(3), warning(4), cleared(5)}
 * ```
 *
 * @enum {number}
 */
export
const PerceivedSeverity = _enum_for_PerceivedSeverity;

/**
 * @summary PerceivedSeverity_indeterminate
 * @constant
 * @type {number}
 */
export
const PerceivedSeverity_indeterminate: PerceivedSeverity = PerceivedSeverity.indeterminate; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary indeterminate
 * @constant
 * @type {number}
 */
export
const indeterminate: PerceivedSeverity = PerceivedSeverity.indeterminate; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PerceivedSeverity_critical
 * @constant
 * @type {number}
 */
export
const PerceivedSeverity_critical: PerceivedSeverity = PerceivedSeverity.critical; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary critical
 * @constant
 * @type {number}
 */
export
const critical: PerceivedSeverity = PerceivedSeverity.critical; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PerceivedSeverity_major
 * @constant
 * @type {number}
 */
export
const PerceivedSeverity_major: PerceivedSeverity = PerceivedSeverity.major; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary major
 * @constant
 * @type {number}
 */
export
const major: PerceivedSeverity = PerceivedSeverity.major; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PerceivedSeverity_minor
 * @constant
 * @type {number}
 */
export
const PerceivedSeverity_minor: PerceivedSeverity = PerceivedSeverity.minor; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary minor
 * @constant
 * @type {number}
 */
export
const minor: PerceivedSeverity = PerceivedSeverity.minor; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PerceivedSeverity_warning
 * @constant
 * @type {number}
 */
export
const PerceivedSeverity_warning: PerceivedSeverity = PerceivedSeverity.warning; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary warning
 * @constant
 * @type {number}
 */
export
const warning: PerceivedSeverity = PerceivedSeverity.warning; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PerceivedSeverity_cleared
 * @constant
 * @type {number}
 */
export
const PerceivedSeverity_cleared: PerceivedSeverity = PerceivedSeverity.cleared; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cleared
 * @constant
 * @type {number}
 */
export
const cleared: PerceivedSeverity = PerceivedSeverity.cleared; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_PerceivedSeverity = $._decodeEnumerated;


export const _encode_PerceivedSeverity = $._encodeEnumerated;


/* eslint-enable */
