/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_StoreStatus {
    success = 0,
    errorTransient = 1,
    high = 2,
}

/**
 * @summary StoreStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StoreStatus  ::=  ENUMERATED
 * {
 *     success         (0),
 *     errorTransient     (1),
 *     high            (2),
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type StoreStatus = _enum_for_StoreStatus | ENUMERATED;

/**
 * @summary StoreStatus_success
 * @constant
 * @type {number}
 */
export
const StoreStatus_success: StoreStatus = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary success
 * @constant
 * @type {number}
 */
export
const success: StoreStatus = StoreStatus_success; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary StoreStatus_errorTransient
 * @constant
 * @type {number}
 */
export
const StoreStatus_errorTransient: StoreStatus = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorTransient
 * @constant
 * @type {number}
 */
export
const errorTransient: StoreStatus = StoreStatus_errorTransient; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary StoreStatus_high
 * @constant
 * @type {number}
 */
export
const StoreStatus_high: StoreStatus = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary high
 * @constant
 * @type {number}
 */
export
const high: StoreStatus = StoreStatus_high; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_StoreStatus: $.ASN1Decoder<StoreStatus> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) StoreStatus
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_StoreStatus (el: _Element): StoreStatus {
    if (!_cached_decoder_for_StoreStatus) { _cached_decoder_for_StoreStatus = $._decodeEnumerated; }
    return _cached_decoder_for_StoreStatus(el);
}

let _cached_encoder_for_StoreStatus: $.ASN1Encoder<StoreStatus> | null = null;

/**
 * @summary Encodes a(n) StoreStatus into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StoreStatus, encoded as an ASN.1 Element.
 */
export
function _encode_StoreStatus (value: StoreStatus, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_StoreStatus) { _cached_encoder_for_StoreStatus = $._encodeEnumerated; }
    return _cached_encoder_for_StoreStatus(value, elGetter);
}


/* eslint-enable */
