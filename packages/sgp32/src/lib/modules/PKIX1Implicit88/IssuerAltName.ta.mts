/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { GeneralNames, _decode_GeneralNames, _encode_GeneralNames } from "../PKIX1Implicit88/GeneralNames.ta.mjs";
// export { GeneralNames, _decode_GeneralNames, _encode_GeneralNames } from "../PKIX1Implicit88/GeneralNames.ta.mjs";


/**
 * @summary IssuerAltName
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IssuerAltName  ::=  GeneralNames
 * ```
 */
export
type IssuerAltName = GeneralNames; // DefinedType

let _cached_decoder_for_IssuerAltName: $.ASN1Decoder<IssuerAltName> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IssuerAltName
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IssuerAltName (el: _Element): IssuerAltName {
    if (!_cached_decoder_for_IssuerAltName) { _cached_decoder_for_IssuerAltName = _decode_GeneralNames; }
    return _cached_decoder_for_IssuerAltName(el);
}

let _cached_encoder_for_IssuerAltName: $.ASN1Encoder<IssuerAltName> | null = null;

/**
 * @summary Encodes a(n) IssuerAltName into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IssuerAltName, encoded as an ASN.1 Element.
 */
export
function _encode_IssuerAltName (value: IssuerAltName, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IssuerAltName) { _cached_encoder_for_IssuerAltName = _encode_GeneralNames; }
    return _cached_encoder_for_IssuerAltName(value, elGetter);
}


/* eslint-enable */
