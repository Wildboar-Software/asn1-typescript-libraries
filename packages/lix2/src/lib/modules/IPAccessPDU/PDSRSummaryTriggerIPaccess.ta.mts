/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_PDSRSummaryTriggerIPaccess {
    startOfFlow = 0,
    timerExpiry = 1,
    packetCount = 2,
    byteCount = 3,
    endOfFlow = 4,
}

/**
 * @summary PDSRSummaryTriggerIPaccess
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PDSRSummaryTriggerIPaccess ::= ENUMERATED
 * {
 *     startOfFlow(0),
 *     timerExpiry(1),
 *     packetCount(2),
 *     byteCount(3),
 *     endOfFlow(4),
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type PDSRSummaryTriggerIPaccess = _enum_for_PDSRSummaryTriggerIPaccess | ENUMERATED;

/**
 * @summary PDSRSummaryTriggerIPaccess_startOfFlow
 * @constant
 * @type {number}
 */
export
const PDSRSummaryTriggerIPaccess_startOfFlow: PDSRSummaryTriggerIPaccess = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary startOfFlow
 * @constant
 * @type {number}
 */
export
const startOfFlow: PDSRSummaryTriggerIPaccess = PDSRSummaryTriggerIPaccess_startOfFlow; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PDSRSummaryTriggerIPaccess_timerExpiry
 * @constant
 * @type {number}
 */
export
const PDSRSummaryTriggerIPaccess_timerExpiry: PDSRSummaryTriggerIPaccess = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary timerExpiry
 * @constant
 * @type {number}
 */
export
const timerExpiry: PDSRSummaryTriggerIPaccess = PDSRSummaryTriggerIPaccess_timerExpiry; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PDSRSummaryTriggerIPaccess_packetCount
 * @constant
 * @type {number}
 */
export
const PDSRSummaryTriggerIPaccess_packetCount: PDSRSummaryTriggerIPaccess = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary packetCount
 * @constant
 * @type {number}
 */
export
const packetCount: PDSRSummaryTriggerIPaccess = PDSRSummaryTriggerIPaccess_packetCount; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PDSRSummaryTriggerIPaccess_byteCount
 * @constant
 * @type {number}
 */
export
const PDSRSummaryTriggerIPaccess_byteCount: PDSRSummaryTriggerIPaccess = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary byteCount
 * @constant
 * @type {number}
 */
export
const byteCount: PDSRSummaryTriggerIPaccess = PDSRSummaryTriggerIPaccess_byteCount; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PDSRSummaryTriggerIPaccess_endOfFlow
 * @constant
 * @type {number}
 */
export
const PDSRSummaryTriggerIPaccess_endOfFlow: PDSRSummaryTriggerIPaccess = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary endOfFlow
 * @constant
 * @type {number}
 */
export
const endOfFlow: PDSRSummaryTriggerIPaccess = PDSRSummaryTriggerIPaccess_endOfFlow; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) PDSRSummaryTriggerIPaccess
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_PDSRSummaryTriggerIPaccess = $._decodeEnumerated;

/**
 * @summary Encodes a(n) PDSRSummaryTriggerIPaccess into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PDSRSummaryTriggerIPaccess, encoded as an ASN.1 Element.
 */
export const _encode_PDSRSummaryTriggerIPaccess = $._encodeEnumerated;


/* eslint-enable */
