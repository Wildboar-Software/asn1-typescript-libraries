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

/**
 * @summary Decodes an ASN.1 element into a(n) AgreementFeatureIndicator
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_AgreementFeatureIndicator: $.ASN1Decoder<AgreementFeatureIndicator> = _decode_Code;

/**
 * @summary Encodes a(n) AgreementFeatureIndicator into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AgreementFeatureIndicator, encoded as an ASN.1 Element.
 */
export const _encode_AgreementFeatureIndicator: $.ASN1Encoder<AgreementFeatureIndicator> = _encode_Code;


/* eslint-enable */
