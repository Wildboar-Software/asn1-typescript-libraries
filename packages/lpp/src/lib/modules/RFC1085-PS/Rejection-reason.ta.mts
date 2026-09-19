/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Rejection_reason
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Rejection-reason  ::=  INTEGER {
 *     rejected-by-responder               (0),
 *     called-presentation-address-unknown (1),
 *     local-limit-exceeded                (3),
 *     protocol-version-not-supported      (4)
 * }
 * ```
 */
export
type Rejection_reason = INTEGER;

/**
 * @summary Rejection_reason_rejected_by_responder
 * @constant
 * @type {number}
 */
export
const Rejection_reason_rejected_by_responder: Rejection_reason = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Rejection_reason_rejected_by_responder
 * @constant
 * @type {number}
 */
export
const rejected_by_responder: Rejection_reason = Rejection_reason_rejected_by_responder; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Rejection_reason_called_presentation_address_unknown
 * @constant
 * @type {number}
 */
export
const Rejection_reason_called_presentation_address_unknown: Rejection_reason = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Rejection_reason_called_presentation_address_unknown
 * @constant
 * @type {number}
 */
export
const called_presentation_address_unknown: Rejection_reason = Rejection_reason_called_presentation_address_unknown; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Rejection_reason_local_limit_exceeded
 * @constant
 * @type {number}
 */
export
const Rejection_reason_local_limit_exceeded: Rejection_reason = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Rejection_reason_local_limit_exceeded
 * @constant
 * @type {number}
 */
export
const local_limit_exceeded: Rejection_reason = Rejection_reason_local_limit_exceeded; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Rejection_reason_protocol_version_not_supported
 * @constant
 * @type {number}
 */
export
const Rejection_reason_protocol_version_not_supported: Rejection_reason = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Rejection_reason_protocol_version_not_supported
 * @constant
 * @type {number}
 */
export
const protocol_version_not_supported: Rejection_reason = Rejection_reason_protocol_version_not_supported; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_Rejection_reason: $.ASN1Decoder<Rejection_reason> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Rejection_reason
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Rejection_reason (el: _Element): Rejection_reason {
    if (!_cached_decoder_for_Rejection_reason) { _cached_decoder_for_Rejection_reason = $._decodeInteger; }
    return _cached_decoder_for_Rejection_reason(el);
}

let _cached_encoder_for_Rejection_reason: $.ASN1Encoder<Rejection_reason> | null = null;

/**
 * @summary Encodes a(n) Rejection_reason into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Rejection_reason, encoded as an ASN.1 Element.
 */
export
function _encode_Rejection_reason (value: Rejection_reason, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Rejection_reason) { _cached_encoder_for_Rejection_reason = $._encodeInteger; }
    return _cached_encoder_for_Rejection_reason(value, elGetter);
}


/* eslint-enable */
