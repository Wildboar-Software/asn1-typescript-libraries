/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_Emergency {
    imminent = 1,
    peril = 2,
    cancel = 3,
}

/**
 * @summary Emergency
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Emergency  ::=  ENUMERATED
 * {
 *  -- MCPTT services indication of peril condition.
 *  imminent (1),
 *  peril (2),
 *  cancel (3),
 *  ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type Emergency = _enum_for_Emergency | ENUMERATED;

/**
 * @summary Emergency_imminent
 * @constant
 * @type {number}
 */
export
const Emergency_imminent: Emergency = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary imminent
 * @constant
 * @type {number}
 */
export
const imminent: Emergency = Emergency_imminent; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Emergency_peril
 * @constant
 * @type {number}
 */
export
const Emergency_peril: Emergency = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary peril
 * @constant
 * @type {number}
 */
export
const peril: Emergency = Emergency_peril; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Emergency_cancel
 * @constant
 * @type {number}
 */
export
const Emergency_cancel: Emergency = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cancel
 * @constant
 * @type {number}
 */
export
const cancel: Emergency = Emergency_cancel; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_Emergency: $.ASN1Decoder<Emergency> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Emergency
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Emergency (el: _Element): Emergency {
    if (!_cached_decoder_for_Emergency) { _cached_decoder_for_Emergency = $._decodeEnumerated; }
    return _cached_decoder_for_Emergency(el);
}

let _cached_encoder_for_Emergency: $.ASN1Encoder<Emergency> | null = null;

/**
 * @summary Encodes a(n) Emergency into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Emergency, encoded as an ASN.1 Element.
 */
export
function _encode_Emergency (value: Emergency, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Emergency) { _cached_encoder_for_Emergency = $._encodeEnumerated; }
    return _cached_encoder_for_Emergency(value, elGetter);
}


/* eslint-enable */
