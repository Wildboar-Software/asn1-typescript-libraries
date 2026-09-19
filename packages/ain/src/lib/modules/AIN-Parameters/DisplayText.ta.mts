/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DisplayInformation, _decode_DisplayInformation, _encode_DisplayInformation } from "../AIN-Parameters/DisplayInformation.ta.mjs";
// export { DisplayInformation, _decode_DisplayInformation, _encode_DisplayInformation } from "../AIN-Parameters/DisplayInformation.ta.mjs";


/**
 * @summary DisplayText
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DisplayText  ::=  [26] IMPLICIT SEQUENCE SIZE(1..15) OF DisplayInformation
 * ```
 */
export
type DisplayText = DisplayInformation[]; // SequenceOfType

let _cached_decoder_for_DisplayText: $.ASN1Decoder<DisplayText> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DisplayText
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DisplayText (el: _Element): DisplayText {
    if (!_cached_decoder_for_DisplayText) { _cached_decoder_for_DisplayText = $._decode_implicit<DisplayText>(() => $._decodeSequenceOf<DisplayInformation>(() => _decode_DisplayInformation)); }
    return _cached_decoder_for_DisplayText(el);
}

let _cached_encoder_for_DisplayText: $.ASN1Encoder<DisplayText> | null = null;

/**
 * @summary Encodes a(n) DisplayText into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DisplayText, encoded as an ASN.1 Element.
 */
export
function _encode_DisplayText (value: DisplayText, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DisplayText) { _cached_encoder_for_DisplayText = $._encode_implicit(_TagClass.context, 26, () => $._encodeSequenceOf<DisplayInformation>(() => _encode_DisplayInformation, $.BER), $.BER); }
    return _cached_encoder_for_DisplayText(value, elGetter);
}


/* eslint-enable */
