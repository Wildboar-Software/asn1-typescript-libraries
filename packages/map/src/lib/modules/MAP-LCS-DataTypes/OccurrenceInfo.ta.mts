/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_OccurrenceInfo {
    oneTimeEvent = 0,
    multipleTimeEvent = 1,
}

/**
 * @summary OccurrenceInfo
 * @description
 *
 * oneTimeEvent or multipleTimeEvent (3GPP TS 29.002 V19.1.0 clause 17.7.13).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OccurrenceInfo  ::=  ENUMERATED {
 *     oneTimeEvent    (0),
 *     multipleTimeEvent    (1),
 *     ...}
 * ```
 * 
 * @enum {number}
 */
export
type OccurrenceInfo = _enum_for_OccurrenceInfo | ENUMERATED;

/**
 * @summary OccurrenceInfo_oneTimeEvent
 * @description
 *
 * `oneTimeEvent (0)` (3GPP TS 29.002 V19.1.0 clause 17.7.13).
 *
 * @constant
 * @type {number}
 */
export
const OccurrenceInfo_oneTimeEvent: OccurrenceInfo = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oneTimeEvent
 * @description
 *
 * `oneTimeEvent (0)` (3GPP TS 29.002 V19.1.0 clause 17.7.13).
 *
 * @constant
 * @type {number}
 */
export
const oneTimeEvent: OccurrenceInfo = OccurrenceInfo_oneTimeEvent; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OccurrenceInfo_multipleTimeEvent
 * @description
 *
 * `multipleTimeEvent (1)` (3GPP TS 29.002 V19.1.0 clause 17.7.13).
 *
 * @constant
 * @type {number}
 */
export
const OccurrenceInfo_multipleTimeEvent: OccurrenceInfo = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary multipleTimeEvent
 * @description
 *
 * `multipleTimeEvent (1)` (3GPP TS 29.002 V19.1.0 clause 17.7.13).
 *
 * @constant
 * @type {number}
 */
export
const multipleTimeEvent: OccurrenceInfo = OccurrenceInfo_multipleTimeEvent; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) OccurrenceInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_OccurrenceInfo = $._decodeEnumerated;

/**
 * @summary Encodes a(n) OccurrenceInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OccurrenceInfo, encoded as an ASN.1 Element.
 */
export const _encode_OccurrenceInfo = $._encodeEnumerated;


/* eslint-enable */
