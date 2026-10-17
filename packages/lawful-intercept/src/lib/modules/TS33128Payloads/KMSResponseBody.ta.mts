/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { XMLType, _decode_XMLType, _encode_XMLType } from "../TS33128Payloads/XMLType.ta.mjs";
// export { XMLType, _decode_XMLType, _encode_XMLType } from "../TS33128Payloads/XMLType.ta.mjs";


/**
 * @summary KMSResponseBody
 * @description
 * 
 * Provides the content of the KMS response type for any response type except
 * for KMS Redirect Response type, encoded as a "KmsResponseType" or
 * "SignedKmsResponseType" structure according to TS 33.180 [154] clause D.3.5.
 * The XMLType.namespace for this parameter shall be set to the namespace of the
 * root element of the XML document, e.g., urn:3gpp:ns:mcsecKMSInterface:1.0.
 *
 * 3GPP TS 33.128, clause 7.20.2.4.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * KMSResponseBody  ::=  CHOICE
 * {
 *     kMSResponse       [1] XMLType,
 *     signedKMSResponse [2] XMLType
 * }
 * ```
 */
export
type KMSResponseBody =
    { kMSResponse: XMLType } /* CHOICE_ALT_ROOT */
    | { signedKMSResponse: XMLType } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_KMSResponseBody: $.ASN1Decoder<KMSResponseBody> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) KMSResponseBody
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_KMSResponseBody (el: _Element): KMSResponseBody {
    if (!_cached_decoder_for_KMSResponseBody) { _cached_decoder_for_KMSResponseBody = $._decode_extensible_choice<KMSResponseBody>({
    "CONTEXT 1": [ "kMSResponse", $._decode_implicit<XMLType>(() => _decode_XMLType) ],
    "CONTEXT 2": [ "signedKMSResponse", $._decode_implicit<XMLType>(() => _decode_XMLType) ]
}); }
    return _cached_decoder_for_KMSResponseBody(el);
}

let _cached_encoder_for_KMSResponseBody: $.ASN1Encoder<KMSResponseBody> | null = null;

/**
 * @summary Encodes a(n) KMSResponseBody into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KMSResponseBody, encoded as an ASN.1 Element.
 */
export
function _encode_KMSResponseBody (value: KMSResponseBody, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_KMSResponseBody) { _cached_encoder_for_KMSResponseBody = $._encode_choice<KMSResponseBody>({
    "kMSResponse": $._encode_implicit(_TagClass.context, 1, () => _encode_XMLType, $.BER),
    "signedKMSResponse": $._encode_implicit(_TagClass.context, 2, () => _encode_XMLType, $.BER),
}, $.BER); }
    return _cached_encoder_for_KMSResponseBody(value, elGetter);
}


/* eslint-enable */
