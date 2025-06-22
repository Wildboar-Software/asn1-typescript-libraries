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
} from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";
import { BiometricInformationTemplate, _decode_BiometricInformationTemplate, _encode_BiometricInformationTemplate } from "@wildboar/cbeff/src/lib/modules/CBEFF-SMARTCARD-BIDO/BiometricInformationTemplate.ta.mjs";
/**
 * @summary BiometricTemplateInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BiometricTemplateInfo  ::=  CHOICE {
 *   biometricTemplateInfo19785  BiometricInformationTemplate,
 *   ...
 * }
 * ```
 */
export
type BiometricTemplateInfo =
    { biometricTemplateInfo19785: BiometricInformationTemplate } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_BiometricTemplateInfo: $.ASN1Decoder<BiometricTemplateInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BiometricTemplateInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BiometricTemplateInfo} The decoded data structure.
 */
export
function _decode_BiometricTemplateInfo (el: _Element) {
    if (!_cached_decoder_for_BiometricTemplateInfo) { _cached_decoder_for_BiometricTemplateInfo = $._decode_extensible_choice<BiometricTemplateInfo>({
    "CONTEXT 0": [ "biometricTemplateInfo19785", _decode_BiometricInformationTemplate ]
}); }
    return _cached_decoder_for_BiometricTemplateInfo(el);
}

let _cached_encoder_for_BiometricTemplateInfo: $.ASN1Encoder<BiometricTemplateInfo> | null = null;

/**
 * @summary Encodes a(n) BiometricTemplateInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BiometricTemplateInfo, encoded as an ASN.1 Element.
 */
export
function _encode_BiometricTemplateInfo (value: BiometricTemplateInfo, elGetter: $.ASN1Encoder<BiometricTemplateInfo>) {
    if (!_cached_encoder_for_BiometricTemplateInfo) { _cached_encoder_for_BiometricTemplateInfo = $._encode_choice<BiometricTemplateInfo>({
    "biometricTemplateInfo19785": _encode_BiometricInformationTemplate,
}, $.BER); }
    return _cached_encoder_for_BiometricTemplateInfo(value, elGetter);
}


/* eslint-enable */
