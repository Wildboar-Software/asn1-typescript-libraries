/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { XMLType, _decode_XMLType, _encode_XMLType } from "../TS33128Payloads/XMLType.ta.mjs";
// export { XMLType, _decode_XMLType, _encode_XMLType } from "../TS33128Payloads/XMLType.ta.mjs";


/**
 * @summary KMSRequestBody
 * @description
 * 
 * Provides the content of the KMS request type encoded as a "KmsRequestType" or
 * "SignedKmsRequestType" structure according to TS 33.180 [154] clause D.3.5.
 * The XMLType.namespace for this parameter shall be set to the namespace of the
 * root element of the XML document, e.g., urn:3gpp:ns:mcsecKMSInterface:1.0.
 *
 * 3GPP TS 33.128, clause 7.20.2.4.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * KMSRequestBody  ::=  CHOICE
 * {
 *     kMSRequest        [1] XMLType,
 *     signedKMSRequest  [2] XMLType
 * }
 * ```
 */
export
type KMSRequestBody =
    { kMSRequest: XMLType } /* CHOICE_ALT_ROOT */
    | { signedKMSRequest: XMLType } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_KMSRequestBody: $.ASN1Decoder<KMSRequestBody> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) KMSRequestBody
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_KMSRequestBody (el: _Element): KMSRequestBody {
    if (!_cached_decoder_for_KMSRequestBody) { _cached_decoder_for_KMSRequestBody = $._decode_extensible_choice<KMSRequestBody>({
    "CONTEXT 1": [ "kMSRequest", $._decode_implicit<XMLType>(() => _decode_XMLType) ],
    "CONTEXT 2": [ "signedKMSRequest", $._decode_implicit<XMLType>(() => _decode_XMLType) ]
}); }
    return _cached_decoder_for_KMSRequestBody(el);
}

let _cached_encoder_for_KMSRequestBody: $.ASN1Encoder<KMSRequestBody> | null = null;

/**
 * @summary Encodes a(n) KMSRequestBody into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KMSRequestBody, encoded as an ASN.1 Element.
 */
export
function _encode_KMSRequestBody (value: KMSRequestBody, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_KMSRequestBody) { _cached_encoder_for_KMSRequestBody = $._encode_choice<KMSRequestBody>({
    "kMSRequest": $._encode_implicit(_TagClass.context, 1, () => _encode_XMLType, $.BER),
    "signedKMSRequest": $._encode_implicit(_TagClass.context, 2, () => _encode_XMLType, $.BER),
}, $.BER); }
    return _cached_encoder_for_KMSRequestBody(value, elGetter);
}


/* eslint-enable */
