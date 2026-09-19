/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Name, _decode_Name, _encode_Name } from "../MEDIA-GATEWAY-CONTROL/Name.ta.mjs";
// export { Name, _decode_Name, _encode_Name } from "../MEDIA-GATEWAY-CONTROL/Name.ta.mjs";


/**
 * @summary DigitMapName
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DigitMapName  ::=  Name
 * ```
 */
export
type DigitMapName = Name; // DefinedType

let _cached_decoder_for_DigitMapName: $.ASN1Decoder<DigitMapName> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DigitMapName
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DigitMapName (el: _Element): DigitMapName {
    if (!_cached_decoder_for_DigitMapName) { _cached_decoder_for_DigitMapName = _decode_Name; }
    return _cached_decoder_for_DigitMapName(el);
}

let _cached_encoder_for_DigitMapName: $.ASN1Encoder<DigitMapName> | null = null;

/**
 * @summary Encodes a(n) DigitMapName into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DigitMapName, encoded as an ASN.1 Element.
 */
export
function _encode_DigitMapName (value: DigitMapName, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DigitMapName) { _cached_encoder_for_DigitMapName = _encode_Name; }
    return _cached_encoder_for_DigitMapName(value, elGetter);
}


/* eslint-enable */
