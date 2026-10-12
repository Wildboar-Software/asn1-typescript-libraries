/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_Messaging_Property_Message_Status {
    indeterminate = 0,
    expired = 1,
    retrieved = 2,
    rejected = 3,
    deferred = 4,
    forwarded = 5,
    unrecognized = 6,
    unreachable = 7,
    read = 8,
    deleted_without_being_read = 9,
    delivery_condition_not_met = 10,
}

/**
 * @summary Messaging_Property_Message_Status
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Messaging-Property-Message-Status  ::=  ENUMERATED
 * {
 *     indeterminate(0),
 *     expired(1),
 *     retrieved(2),
 *     rejected(3),
 *     deferred(4),
 *     forwarded(5),
 *     unrecognized(6),
 *     unreachable(7),
 *     read(8),
 *     deleted-without-being-read(9),
 *     delivery-condition-not-met(10),
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type Messaging_Property_Message_Status = _enum_for_Messaging_Property_Message_Status | ENUMERATED;

/**
 * @summary Messaging_Property_Message_Status_indeterminate
 * @constant
 * @type {number}
 */
export
const Messaging_Property_Message_Status_indeterminate: Messaging_Property_Message_Status = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary indeterminate
 * @constant
 * @type {number}
 */
export
const indeterminate: Messaging_Property_Message_Status = Messaging_Property_Message_Status_indeterminate; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Property_Message_Status_expired
 * @constant
 * @type {number}
 */
export
const Messaging_Property_Message_Status_expired: Messaging_Property_Message_Status = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary expired
 * @constant
 * @type {number}
 */
export
const expired: Messaging_Property_Message_Status = Messaging_Property_Message_Status_expired; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Property_Message_Status_retrieved
 * @constant
 * @type {number}
 */
export
const Messaging_Property_Message_Status_retrieved: Messaging_Property_Message_Status = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary retrieved
 * @constant
 * @type {number}
 */
export
const retrieved: Messaging_Property_Message_Status = Messaging_Property_Message_Status_retrieved; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Property_Message_Status_rejected
 * @constant
 * @type {number}
 */
export
const Messaging_Property_Message_Status_rejected: Messaging_Property_Message_Status = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rejected
 * @constant
 * @type {number}
 */
export
const rejected: Messaging_Property_Message_Status = Messaging_Property_Message_Status_rejected; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Property_Message_Status_deferred
 * @constant
 * @type {number}
 */
export
const Messaging_Property_Message_Status_deferred: Messaging_Property_Message_Status = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary deferred
 * @constant
 * @type {number}
 */
export
const deferred: Messaging_Property_Message_Status = Messaging_Property_Message_Status_deferred; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Property_Message_Status_forwarded
 * @constant
 * @type {number}
 */
export
const Messaging_Property_Message_Status_forwarded: Messaging_Property_Message_Status = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary forwarded
 * @constant
 * @type {number}
 */
export
const forwarded: Messaging_Property_Message_Status = Messaging_Property_Message_Status_forwarded; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Property_Message_Status_unrecognized
 * @constant
 * @type {number}
 */
export
const Messaging_Property_Message_Status_unrecognized: Messaging_Property_Message_Status = 6; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unrecognized
 * @constant
 * @type {number}
 */
export
const unrecognized: Messaging_Property_Message_Status = Messaging_Property_Message_Status_unrecognized; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Property_Message_Status_unreachable
 * @constant
 * @type {number}
 */
export
const Messaging_Property_Message_Status_unreachable: Messaging_Property_Message_Status = 7; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unreachable
 * @constant
 * @type {number}
 */
export
const unreachable: Messaging_Property_Message_Status = Messaging_Property_Message_Status_unreachable; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Property_Message_Status_read
 * @constant
 * @type {number}
 */
export
const Messaging_Property_Message_Status_read: Messaging_Property_Message_Status = 8; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary read
 * @constant
 * @type {number}
 */
export
const read: Messaging_Property_Message_Status = Messaging_Property_Message_Status_read; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Property_Message_Status_deleted_without_being_read
 * @constant
 * @type {number}
 */
export
const Messaging_Property_Message_Status_deleted_without_being_read: Messaging_Property_Message_Status = 9; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary deleted_without_being_read
 * @constant
 * @type {number}
 */
export
const deleted_without_being_read: Messaging_Property_Message_Status = Messaging_Property_Message_Status_deleted_without_being_read; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Property_Message_Status_delivery_condition_not_met
 * @constant
 * @type {number}
 */
export
const Messaging_Property_Message_Status_delivery_condition_not_met: Messaging_Property_Message_Status = 10; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary delivery_condition_not_met
 * @constant
 * @type {number}
 */
export
const delivery_condition_not_met: Messaging_Property_Message_Status = Messaging_Property_Message_Status_delivery_condition_not_met; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_Messaging_Property_Message_Status: $.ASN1Decoder<Messaging_Property_Message_Status> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Messaging_Property_Message_Status
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Messaging_Property_Message_Status (el: _Element): Messaging_Property_Message_Status {
    if (!_cached_decoder_for_Messaging_Property_Message_Status) { _cached_decoder_for_Messaging_Property_Message_Status = $._decodeEnumerated; }
    return _cached_decoder_for_Messaging_Property_Message_Status(el);
}

let _cached_encoder_for_Messaging_Property_Message_Status: $.ASN1Encoder<Messaging_Property_Message_Status> | null = null;

/**
 * @summary Encodes a(n) Messaging_Property_Message_Status into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Messaging_Property_Message_Status, encoded as an ASN.1 Element.
 */
export
function _encode_Messaging_Property_Message_Status (value: Messaging_Property_Message_Status, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Messaging_Property_Message_Status) { _cached_encoder_for_Messaging_Property_Message_Status = $._encodeEnumerated; }
    return _cached_encoder_for_Messaging_Property_Message_Status(value, elGetter);
}


/* eslint-enable */
