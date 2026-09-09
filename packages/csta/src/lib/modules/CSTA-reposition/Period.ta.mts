/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { INTEGER, ENUMERATED, ASN1Element as _Element } from "@wildboar/asn1";
import {
    Period_absolutePosition,
    startOfMessage /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    endOfMessage /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_Period_absolutePosition,
    _encode_Period_absolutePosition
} from "../CSTA-reposition/Period-absolutePosition.ta.mjs";



/**
 * @summary Period
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Period  ::=  CHOICE
 * {    absolutePosition        ENUMERATED
 *     {    startOfMessage        (0),
 *         endOfMessage        (1) },
 *     relativePosition        INTEGER }
 * ```
 */
export
type Period =
    { absolutePosition: Period_absolutePosition } /* CHOICE_ALT_ROOT */
    | { relativePosition: INTEGER } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Period: $.ASN1Decoder<Period> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Period
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Period (el: _Element): Period {
    if (!_cached_decoder_for_Period) { _cached_decoder_for_Period = $._decode_inextensible_choice<Period>({
    "UNIVERSAL 10": [ "absolutePosition", _decode_Period_absolutePosition ],
    "UNIVERSAL 2": [ "relativePosition", $._decodeInteger ]
}); }
    return _cached_decoder_for_Period(el);
}

let _cached_encoder_for_Period: $.ASN1Encoder<Period> | null = null;

/**
 * @summary Encodes a(n) Period into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Period, encoded as an ASN.1 Element.
 */
export
function _encode_Period (value: Period, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Period) { _cached_encoder_for_Period = $._encode_choice<Period>({
    "absolutePosition": _encode_Period_absolutePosition,
    "relativePosition": $._encodeInteger,
}, $.BER); }
    return _cached_encoder_for_Period(value, elGetter);
}


/* eslint-enable */
