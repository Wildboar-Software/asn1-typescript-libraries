/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { ENUMERATED, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary RejectCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RejectCause  ::=  ENUMERATED
 * {    busyOverflow            (1),
 *     queueTimeOverflow        (2),
 *     capacityOverflow        (3),
 *     calendarOverflow        (4),
 *     unknownOverflow            (5) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_RejectCause {
    busyOverflow = 1,
    queueTimeOverflow = 2,
    capacityOverflow = 3,
    calendarOverflow = 4,
    unknownOverflow = 5,
}

/**
 * @summary RejectCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RejectCause  ::=  ENUMERATED
 * {    busyOverflow            (1),
 *     queueTimeOverflow        (2),
 *     capacityOverflow        (3),
 *     calendarOverflow        (4),
 *     unknownOverflow            (5) }
 * ```
 * 
 * @enum {number}
 */
export
type RejectCause = _enum_for_RejectCause;

/**
 * @summary RejectCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RejectCause  ::=  ENUMERATED
 * {    busyOverflow            (1),
 *     queueTimeOverflow        (2),
 *     capacityOverflow        (3),
 *     calendarOverflow        (4),
 *     unknownOverflow            (5) }
 * ```
 * 
 * @enum {number}
 */
export
const RejectCause = _enum_for_RejectCause;

/**
 * @summary RejectCause_busyOverflow
 * @constant
 * @type {number}
 */
export
const RejectCause_busyOverflow: RejectCause = RejectCause.busyOverflow; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary busyOverflow
 * @constant
 * @type {number}
 */
export
const busyOverflow: RejectCause = RejectCause.busyOverflow; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RejectCause_queueTimeOverflow
 * @constant
 * @type {number}
 */
export
const RejectCause_queueTimeOverflow: RejectCause = RejectCause.queueTimeOverflow; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary queueTimeOverflow
 * @constant
 * @type {number}
 */
export
const queueTimeOverflow: RejectCause = RejectCause.queueTimeOverflow; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RejectCause_capacityOverflow
 * @constant
 * @type {number}
 */
export
const RejectCause_capacityOverflow: RejectCause = RejectCause.capacityOverflow; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary capacityOverflow
 * @constant
 * @type {number}
 */
export
const capacityOverflow: RejectCause = RejectCause.capacityOverflow; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RejectCause_calendarOverflow
 * @constant
 * @type {number}
 */
export
const RejectCause_calendarOverflow: RejectCause = RejectCause.calendarOverflow; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary calendarOverflow
 * @constant
 * @type {number}
 */
export
const calendarOverflow: RejectCause = RejectCause.calendarOverflow; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RejectCause_unknownOverflow
 * @constant
 * @type {number}
 */
export
const RejectCause_unknownOverflow: RejectCause = RejectCause.unknownOverflow; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknownOverflow
 * @constant
 * @type {number}
 */
export
const unknownOverflow: RejectCause = RejectCause.unknownOverflow; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_RejectCause: $.ASN1Decoder<RejectCause> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RejectCause
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RejectCause (el: _Element): RejectCause {
    if (!_cached_decoder_for_RejectCause) { _cached_decoder_for_RejectCause = $._decodeEnumerated; }
    return _cached_decoder_for_RejectCause(el);
}

let _cached_encoder_for_RejectCause: $.ASN1Encoder<RejectCause> | null = null;

/**
 * @summary Encodes a(n) RejectCause into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RejectCause, encoded as an ASN.1 Element.
 */
export
function _encode_RejectCause (value: RejectCause, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RejectCause) { _cached_encoder_for_RejectCause = $._encodeEnumerated; }
    return _cached_encoder_for_RejectCause(value, elGetter);
}


/* eslint-enable */
