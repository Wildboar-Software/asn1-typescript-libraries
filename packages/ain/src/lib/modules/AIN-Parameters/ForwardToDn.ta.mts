/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Dn, _decode_Dn, _encode_Dn } from "../AIN-Parameters/Dn.ta.mjs";
// export { Dn, _decode_Dn, _encode_Dn } from "../AIN-Parameters/Dn.ta.mjs";


/**
 * @summary ForwardToDn
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ForwardToDn  ::=  Dn
 * ```
 */
export
type ForwardToDn = Dn; // DefinedType

let _cached_decoder_for_ForwardToDn: $.ASN1Decoder<ForwardToDn> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ForwardToDn
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ForwardToDn (el: _Element): ForwardToDn {
    if (!_cached_decoder_for_ForwardToDn) { _cached_decoder_for_ForwardToDn = _decode_Dn; }
    return _cached_decoder_for_ForwardToDn(el);
}

let _cached_encoder_for_ForwardToDn: $.ASN1Encoder<ForwardToDn> | null = null;

/**
 * @summary Encodes a(n) ForwardToDn into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ForwardToDn, encoded as an ASN.1 Element.
 */
export
function _encode_ForwardToDn (value: ForwardToDn, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ForwardToDn) { _cached_encoder_for_ForwardToDn = _encode_Dn; }
    return _cached_encoder_for_ForwardToDn(value, elGetter);
}


/* eslint-enable */
