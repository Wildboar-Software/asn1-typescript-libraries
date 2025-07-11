/* eslint-disable */
import {
    IA5String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    Certificate,
    _decode_Certificate,
    _encode_Certificate,
} from "@wildboar/x500/AuthenticationFramework";



/**
 * @summary CertData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertData  ::=  CHOICE {
 *     certificateSet     SET SIZE (1..MAX) OF Certificate,
 *     certURL            IA5String,
 *     ... -- For future extensions
 * }
 * ```
 */
export
type CertData =
    { certificateSet: Certificate[] } /* CHOICE_ALT_ROOT */
    | { certURL: IA5String } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;


let _cached_decoder_for_CertData: $.ASN1Decoder<CertData> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) CertData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertData} The decoded data structure.
 */
export
function _decode_CertData (el: _Element): CertData {
    if (!_cached_decoder_for_CertData) { _cached_decoder_for_CertData = $._decode_extensible_choice<CertData>({
    "UNIVERSAL 17": [ "certificateSet", $._decodeSetOf<Certificate>(() => _decode_Certificate) ],
    "UNIVERSAL 22": [ "certURL", $._decodeIA5String ]
}); }
    return _cached_decoder_for_CertData(el);
}


let _cached_encoder_for_CertData: $.ASN1Encoder<CertData> | null = null;


/**
 * @summary Encodes a(n) CertData into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertData, encoded as an ASN.1 Element.
 */
export
function _encode_CertData (value: CertData, elGetter: $.ASN1Encoder<CertData>): _Element {
    if (!_cached_encoder_for_CertData) { _cached_encoder_for_CertData = $._encode_choice<CertData>({
    "certificateSet": $._encodeSetOf<Certificate>(() => _encode_Certificate, $.BER),
    "certURL": $._encodeIA5String,
}, $.BER); }
    return _cached_encoder_for_CertData(value, elGetter);
}


/* eslint-enable */
