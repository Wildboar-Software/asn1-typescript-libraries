/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AdditionalSignalling
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AdditionalSignalling  ::=  CHOICE
 * {
 *     sipHeaderLine               [0] OCTET STRING,
 *         -- A SIP header line, eg: "Contact: tel:+123456789".
 *     ...
 * }
 * ```
 */
export
type AdditionalSignalling =
    { sipHeaderLine: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_AdditionalSignalling: $.ASN1Decoder<AdditionalSignalling> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AdditionalSignalling
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AdditionalSignalling (el: _Element): AdditionalSignalling {
    if (!_cached_decoder_for_AdditionalSignalling) { _cached_decoder_for_AdditionalSignalling = $._decode_extensible_choice<AdditionalSignalling>({
    "CONTEXT 0": [ "sipHeaderLine", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ]
}); }
    return _cached_decoder_for_AdditionalSignalling(el);
}

let _cached_encoder_for_AdditionalSignalling: $.ASN1Encoder<AdditionalSignalling> | null = null;

/**
 * @summary Encodes a(n) AdditionalSignalling into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AdditionalSignalling, encoded as an ASN.1 Element.
 */
export
function _encode_AdditionalSignalling (value: AdditionalSignalling, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AdditionalSignalling) { _cached_encoder_for_AdditionalSignalling = $._encode_choice<AdditionalSignalling>({
    "sipHeaderLine": $._encode_implicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER),
}, $.BER); }
    return _cached_encoder_for_AdditionalSignalling(value, elGetter);
}


/* eslint-enable */
