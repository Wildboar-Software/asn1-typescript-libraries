/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { UiiFilter, _decode_UiiFilter, _encode_UiiFilter } from "../SelectedAttributeTypes/UiiFilter.ta.mjs";
// export { UiiFilter, _decode_UiiFilter, _encode_UiiFilter } from "../SelectedAttributeTypes/UiiFilter.ta.mjs";


/**
 * @summary UiiFormat_next
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UiiFormat-next ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type UiiFormat_next =
    { length: INTEGER } /* CHOICE_ALT_ROOT */
    | { filter: UiiFilter } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_UiiFormat_next: $.ASN1Decoder<UiiFormat_next> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UiiFormat_next
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UiiFormat_next (el: _Element): UiiFormat_next {
    if (!_cached_decoder_for_UiiFormat_next) { _cached_decoder_for_UiiFormat_next = $._decode_inextensible_choice<UiiFormat_next>({
    "UNIVERSAL 2": [ "length", $._decodeInteger ],
    "CONTEXT 0": [ "filter", _decode_UiiFilter ],
    "CONTEXT 1": [ "filter", _decode_UiiFilter ],
    "CONTEXT 2": [ "filter", _decode_UiiFilter ],
    "CONTEXT 3": [ "filter", _decode_UiiFilter ]
}); }
    return _cached_decoder_for_UiiFormat_next(el);
}

let _cached_encoder_for_UiiFormat_next: $.ASN1Encoder<UiiFormat_next> | null = null;

/**
 * @summary Encodes a(n) UiiFormat_next into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UiiFormat_next, encoded as an ASN.1 Element.
 */
export
function _encode_UiiFormat_next (value: UiiFormat_next, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UiiFormat_next) { _cached_encoder_for_UiiFormat_next = $._encode_choice<UiiFormat_next>({
    "length": $._encodeInteger,
    "filter": _encode_UiiFilter,
}, $.BER); }
    return _cached_encoder_for_UiiFormat_next(value, elGetter);
}


/* eslint-enable */
