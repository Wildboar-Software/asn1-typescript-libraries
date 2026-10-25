/* eslint-disable */
import {
    type ASN1Element as _Element,
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
 * @summary Priority
 * @description
 *
 * DFR operational priority (`low`/`medium`/`high`), not ROSE INTEGER Priority.
 * Bind default is medium; an operation may override it. Granting it is
 * server-specific. ISO/IEC 10166-1:1991 §8.1.3.4.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Priority  ::=  ENUMERATED {
 *     low         (0),
 *     medium      (1),
 *     high        (2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_Priority {
    low = 0,
    medium = 1,
    high = 2,
}

/**
 * @summary Priority
 * @description
 *
 * DFR operational priority (`low`/`medium`/`high`), not ROSE INTEGER Priority.
 * Bind default is medium; an operation may override it. Granting it is
 * server-specific. ISO/IEC 10166-1:1991 §8.1.3.4.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Priority  ::=  ENUMERATED {
 *     low         (0),
 *     medium      (1),
 *     high        (2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type Priority = _enum_for_Priority;

/**
 * @summary Priority
 * @description
 *
 * DFR operational priority (`low`/`medium`/`high`), not ROSE INTEGER Priority.
 * Bind default is medium; an operation may override it. Granting it is
 * server-specific. ISO/IEC 10166-1:1991 §8.1.3.4.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Priority  ::=  ENUMERATED {
 *     low         (0),
 *     medium      (1),
 *     high        (2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const Priority = _enum_for_Priority;

/**
 * @summary Priority_low
 * @description
 *
 * Lowest DFR operational priority.
 * @constant
 * @type {number}
 */
export
const Priority_low = Priority.low; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary low
 * @description
 *
 * Lowest DFR operational priority.
 * @constant
 * @type {number}
 */
export
const low = Priority.low; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Priority_medium
 * @description
 *
 * Default at bind and on operations.
 * @constant
 * @type {number}
 */
export
const Priority_medium = Priority.medium; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary medium
 * @description
 *
 * Default at bind and on operations.
 * @constant
 * @type {number}
 */
export
const medium = Priority.medium; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Priority_high
 * @description
 *
 * Highest DFR operational priority.
 * @constant
 * @type {number}
 */
export
const Priority_high = Priority.high; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary high
 * @description
 *
 * Highest DFR operational priority.
 * @constant
 * @type {number}
 */
export
const high = Priority.high; /* SHORT_NAMED_ENUMERATED_VALUE */
export function _decode_Priority(el: _Element): Priority {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case Priority.low: return Priority.low;
        case Priority.medium: return Priority.medium;
        case Priority.high: return Priority.high;
        default:
            throw new _ConstructionError(
                "Invalid ENUMERATED value " + enumerated + " for Priority.",
                el,
            );
    }
}
export const _encode_Priority: $.ASN1Encoder<Priority> = $._encodeEnumerated as $.ASN1Encoder<Priority>;


/* eslint-enable */
