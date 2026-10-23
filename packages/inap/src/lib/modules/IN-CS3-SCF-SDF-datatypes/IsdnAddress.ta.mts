/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Digits, _decode_Digits, _encode_Digits } from "../IN-CS3-SSF-SCF-datatypes/Digits.ta.mjs";
// export { Digits, _decode_Digits, _encode_Digits } from "../IN-CS3-SSF-SCF-datatypes/Digits.ta.mjs";


/**
 * @summary IsdnAddress
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IsdnAddress  ::=  Digits
 * ```
 */
export
type IsdnAddress = Digits; // DefinedType

let _cached_decoder_for_IsdnAddress: $.ASN1Decoder<IsdnAddress> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IsdnAddress
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IsdnAddress (el: _Element): IsdnAddress {
    if (!_cached_decoder_for_IsdnAddress) { _cached_decoder_for_IsdnAddress = _decode_Digits; }
    return _cached_decoder_for_IsdnAddress(el);
}

let _cached_encoder_for_IsdnAddress: $.ASN1Encoder<IsdnAddress> | null = null;

/**
 * @summary Encodes a(n) IsdnAddress into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IsdnAddress, encoded as an ASN.1 Element.
 */
export
function _encode_IsdnAddress (value: IsdnAddress, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IsdnAddress) { _cached_encoder_for_IsdnAddress = _encode_Digits; }
    return _cached_encoder_for_IsdnAddress(value, elGetter);
}


/* eslint-enable */
