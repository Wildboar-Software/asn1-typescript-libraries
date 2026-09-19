/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PDSParameter, _decode_PDSParameter, _encode_PDSParameter } from "../PKIX1Explicit88/PDSParameter.ta.mjs";
// export { PDSParameter, _decode_PDSParameter, _encode_PDSParameter } from "../PKIX1Explicit88/PDSParameter.ta.mjs";


/**
 * @summary UniquePostalName
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UniquePostalName  ::=  PDSParameter
 * ```
 */
export
type UniquePostalName = PDSParameter; // DefinedType

let _cached_decoder_for_UniquePostalName: $.ASN1Decoder<UniquePostalName> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UniquePostalName
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UniquePostalName (el: _Element): UniquePostalName {
    if (!_cached_decoder_for_UniquePostalName) { _cached_decoder_for_UniquePostalName = _decode_PDSParameter; }
    return _cached_decoder_for_UniquePostalName(el);
}

let _cached_encoder_for_UniquePostalName: $.ASN1Encoder<UniquePostalName> | null = null;

/**
 * @summary Encodes a(n) UniquePostalName into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UniquePostalName, encoded as an ASN.1 Element.
 */
export
function _encode_UniquePostalName (value: UniquePostalName, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UniquePostalName) { _cached_encoder_for_UniquePostalName = _encode_PDSParameter; }
    return _cached_encoder_for_UniquePostalName(value, elGetter);
}


/* eslint-enable */
