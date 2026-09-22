/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { GeneralNames, _decode_GeneralNames, _encode_GeneralNames } from "../PKIX1Implicit88/GeneralNames.ta.mjs";
// export { GeneralNames, _decode_GeneralNames, _encode_GeneralNames } from "../PKIX1Implicit88/GeneralNames.ta.mjs";


/**
 * @summary SubjectAltName
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SubjectAltName  ::=  GeneralNames
 * ```
 */
export
type SubjectAltName = GeneralNames; // DefinedType

let _cached_decoder_for_SubjectAltName: $.ASN1Decoder<SubjectAltName> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SubjectAltName
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SubjectAltName (el: _Element): SubjectAltName {
    if (!_cached_decoder_for_SubjectAltName) { _cached_decoder_for_SubjectAltName = _decode_GeneralNames; }
    return _cached_decoder_for_SubjectAltName(el);
}

let _cached_encoder_for_SubjectAltName: $.ASN1Encoder<SubjectAltName> | null = null;

/**
 * @summary Encodes a(n) SubjectAltName into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubjectAltName, encoded as an ASN.1 Element.
 */
export
function _encode_SubjectAltName (value: SubjectAltName, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SubjectAltName) { _cached_encoder_for_SubjectAltName = _encode_GeneralNames; }
    return _cached_encoder_for_SubjectAltName(value, elGetter);
}


/* eslint-enable */
