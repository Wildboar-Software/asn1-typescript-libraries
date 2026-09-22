/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SubjectPublicKeyInfo, _decode_SubjectPublicKeyInfo, _encode_SubjectPublicKeyInfo } from "../PKIX1Explicit88/SubjectPublicKeyInfo.ta.mjs";
// export { SubjectPublicKeyInfo, _decode_SubjectPublicKeyInfo, _encode_SubjectPublicKeyInfo } from "../PKIX1Explicit88/SubjectPublicKeyInfo.ta.mjs";
import { Certificate, _decode_Certificate, _encode_Certificate } from "../PKIX1Explicit88/Certificate.ta.mjs";
// export { Certificate, _decode_Certificate, _encode_Certificate } from "../PKIX1Explicit88/Certificate.ta.mjs";


/**
 * @summary EimConfigurationData_eimPublicKeyData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EimConfigurationData-eimPublicKeyData ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type EimConfigurationData_eimPublicKeyData =
    { eimPublicKey: SubjectPublicKeyInfo } /* CHOICE_ALT_ROOT */
    | { eimCertificate: Certificate } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_EimConfigurationData_eimPublicKeyData: $.ASN1Decoder<EimConfigurationData_eimPublicKeyData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EimConfigurationData_eimPublicKeyData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EimConfigurationData_eimPublicKeyData (el: _Element): EimConfigurationData_eimPublicKeyData {
    if (!_cached_decoder_for_EimConfigurationData_eimPublicKeyData) { _cached_decoder_for_EimConfigurationData_eimPublicKeyData = $._decode_inextensible_choice<EimConfigurationData_eimPublicKeyData>({
    "CONTEXT 0": [ "eimPublicKey", _decode_SubjectPublicKeyInfo ],
    "CONTEXT 1": [ "eimCertificate", _decode_Certificate ]
}); }
    return _cached_decoder_for_EimConfigurationData_eimPublicKeyData(el);
}

let _cached_encoder_for_EimConfigurationData_eimPublicKeyData: $.ASN1Encoder<EimConfigurationData_eimPublicKeyData> | null = null;

/**
 * @summary Encodes a(n) EimConfigurationData_eimPublicKeyData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EimConfigurationData_eimPublicKeyData, encoded as an ASN.1 Element.
 */
export
function _encode_EimConfigurationData_eimPublicKeyData (value: EimConfigurationData_eimPublicKeyData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EimConfigurationData_eimPublicKeyData) { _cached_encoder_for_EimConfigurationData_eimPublicKeyData = $._encode_choice<EimConfigurationData_eimPublicKeyData>({
    "eimPublicKey": _encode_SubjectPublicKeyInfo,
    "eimCertificate": _encode_Certificate,
}, $.BER); }
    return _cached_encoder_for_EimConfigurationData_eimPublicKeyData(value, elGetter);
}


/* eslint-enable */
