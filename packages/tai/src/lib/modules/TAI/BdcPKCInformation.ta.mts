/* eslint-disable */
import {
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
import { Certificate, _decode_Certificate, _encode_Certificate } from "@wildboar/x500/src/lib/modules/AuthenticationFramework/Certificate.ta.mjs";
import { URI, _decode_URI, _encode_URI } from "../TAI/URI.ta.mjs";
/**
 * @summary BdcPKCInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BdcPKCInformation  ::=  CHOICE {
 *   bdcPublicKeyCertificate  Certificate,
 *   -- Certificate is imported from [ITU-T X.509]
 *   bpuCertificateReference  URI
 * }
 * ```
 */
export
type BdcPKCInformation =
    { bdcPublicKeyCertificate: Certificate } /* CHOICE_ALT_ROOT */
    | { bpuCertificateReference: URI } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_BdcPKCInformation: $.ASN1Decoder<BdcPKCInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BdcPKCInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BdcPKCInformation} The decoded data structure.
 */
export
function _decode_BdcPKCInformation (el: _Element) {
    if (!_cached_decoder_for_BdcPKCInformation) { _cached_decoder_for_BdcPKCInformation = $._decode_inextensible_choice<BdcPKCInformation>({
    "CONTEXT 0": [ "bdcPublicKeyCertificate", _decode_Certificate ],
    "CONTEXT 1": [ "bpuCertificateReference", _decode_URI ]
}); }
    return _cached_decoder_for_BdcPKCInformation(el);
}

let _cached_encoder_for_BdcPKCInformation: $.ASN1Encoder<BdcPKCInformation> | null = null;

/**
 * @summary Encodes a(n) BdcPKCInformation into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BdcPKCInformation, encoded as an ASN.1 Element.
 */
export
function _encode_BdcPKCInformation (value: BdcPKCInformation, elGetter: $.ASN1Encoder<BdcPKCInformation>) {
    if (!_cached_encoder_for_BdcPKCInformation) { _cached_encoder_for_BdcPKCInformation = $._encode_choice<BdcPKCInformation>({
    "bdcPublicKeyCertificate": _encode_Certificate,
    "bpuCertificateReference": _encode_URI,
}, $.BER); }
    return _cached_encoder_for_BdcPKCInformation(value, elGetter);
}


/* eslint-enable */
