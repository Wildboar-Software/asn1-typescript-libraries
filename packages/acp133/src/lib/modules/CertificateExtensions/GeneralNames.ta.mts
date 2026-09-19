/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { GeneralName, _decode_GeneralName, _encode_GeneralName } from "../CertificateExtensions/GeneralName.ta.mjs";
// export { GeneralName, _decode_GeneralName, _encode_GeneralName } from "../CertificateExtensions/GeneralName.ta.mjs";


/**
 * @summary GeneralNames
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GeneralNames  ::=  SEQUENCE SIZE (1..MAX) OF GeneralName
 * ```
 */
export
type GeneralNames = GeneralName[]; // SequenceOfType

let _cached_decoder_for_GeneralNames: $.ASN1Decoder<GeneralNames> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GeneralNames
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GeneralNames (el: _Element): GeneralNames {
    if (!_cached_decoder_for_GeneralNames) { _cached_decoder_for_GeneralNames = $._decodeSequenceOf<GeneralName>(() => _decode_GeneralName); }
    return _cached_decoder_for_GeneralNames(el);
}

let _cached_encoder_for_GeneralNames: $.ASN1Encoder<GeneralNames> | null = null;

/**
 * @summary Encodes a(n) GeneralNames into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GeneralNames, encoded as an ASN.1 Element.
 */
export
function _encode_GeneralNames (value: GeneralNames, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GeneralNames) { _cached_encoder_for_GeneralNames = $._encodeSequenceOf<GeneralName>(() => _encode_GeneralName, $.BER); }
    return _cached_encoder_for_GeneralNames(value, elGetter);
}


/* eslint-enable */
