/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { ASN1Element as _Element } from "@wildboar/asn1";
import { VolAbs, _decode_VolAbs, _encode_VolAbs } from "../CSTA-physical-device-feature/VolAbs.ta.mjs";

import { VolInc, _decode_VolInc, _encode_VolInc } from "../CSTA-physical-device-feature/VolInc.ta.mjs";



/**
 * @summary Volume
 * @description
 *
 * Speaker volume as an absolute 0–100 value or a relative increment/decrement.
 * ECMA-285 §9.16.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/ ECMA-285}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Volume  ::=  CHOICE
 * {     volAbs                     VolAbs,
 *     volInc                     VolInc }
 * ```
 */
export
type Volume =
    { volAbs: VolAbs } /* CHOICE_ALT_ROOT */
    | { volInc: VolInc } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Volume: $.ASN1Decoder<Volume> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Volume
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Volume (el: _Element): Volume {
    if (!_cached_decoder_for_Volume) { _cached_decoder_for_Volume = $._decode_inextensible_choice<Volume>({
    "UNIVERSAL 2": [ "volAbs", _decode_VolAbs ],
    "UNIVERSAL 10": [ "volInc", _decode_VolInc ]
}); }
    return _cached_decoder_for_Volume(el);
}

let _cached_encoder_for_Volume: $.ASN1Encoder<Volume> | null = null;

/**
 * @summary Encodes a(n) Volume into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Volume, encoded as an ASN.1 Element.
 */
export
function _encode_Volume (value: Volume, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Volume) { _cached_encoder_for_Volume = $._encode_choice<Volume>({
    "volAbs": _encode_VolAbs,
    "volInc": _encode_VolInc,
}, $.BER); }
    return _cached_encoder_for_Volume(value, elGetter);
}


/* eslint-enable */
