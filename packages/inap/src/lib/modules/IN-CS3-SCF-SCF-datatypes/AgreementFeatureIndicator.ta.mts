/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";


/**
 * @summary AgreementFeatureIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AgreementFeatureIndicator  ::=  Code
 * ```
 */
export
type AgreementFeatureIndicator = Code; // DefinedType

let _cached_decoder_for_AgreementFeatureIndicator: $.ASN1Decoder<AgreementFeatureIndicator> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AgreementFeatureIndicator
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AgreementFeatureIndicator (el: _Element): AgreementFeatureIndicator {
    if (!_cached_decoder_for_AgreementFeatureIndicator) { _cached_decoder_for_AgreementFeatureIndicator = _decode_Code; }
    return _cached_decoder_for_AgreementFeatureIndicator(el);
}

let _cached_encoder_for_AgreementFeatureIndicator: $.ASN1Encoder<AgreementFeatureIndicator> | null = null;

/**
 * @summary Encodes a(n) AgreementFeatureIndicator into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AgreementFeatureIndicator, encoded as an ASN.1 Element.
 */
export
function _encode_AgreementFeatureIndicator (value: AgreementFeatureIndicator, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AgreementFeatureIndicator) { _cached_encoder_for_AgreementFeatureIndicator = _encode_Code; }
    return _cached_encoder_for_AgreementFeatureIndicator(value, elGetter);
}


/* eslint-enable */
