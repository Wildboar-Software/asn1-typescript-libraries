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
import { SIGNED, _get_decoder_for_SIGNED, _get_encoder_for_SIGNED } from "@wildboar/x500/src/lib/modules/AuthenticationFramework/SIGNED.ta.mjs";
import { BCBiometricInformationTemplateContent, _decode_BCBiometricInformationTemplateContent, _encode_BCBiometricInformationTemplateContent } from "../TAI/BCBiometricInformationTemplateContent.ta.mjs";
/**
 * @summary BCBiometricInformationTemplate
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BCBiometricInformationTemplate  ::= 
 *   SIGNED{BCBiometricInformationTemplateContent}
 * ```
 */
export
type BCBiometricInformationTemplate = SIGNED<BCBiometricInformationTemplateContent>; // DefinedType

let _cached_decoder_for_BCBiometricInformationTemplate: $.ASN1Decoder<BCBiometricInformationTemplate> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BCBiometricInformationTemplate
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BCBiometricInformationTemplate} The decoded data structure.
 */
export
function _decode_BCBiometricInformationTemplate (el: _Element) {
    if (!_cached_decoder_for_BCBiometricInformationTemplate) { _cached_decoder_for_BCBiometricInformationTemplate = _get_decoder_for_SIGNED<BCBiometricInformationTemplateContent>(_decode_BCBiometricInformationTemplateContent); }
    return _cached_decoder_for_BCBiometricInformationTemplate(el);
}

let _cached_encoder_for_BCBiometricInformationTemplate: $.ASN1Encoder<BCBiometricInformationTemplate> | null = null;

/**
 * @summary Encodes a(n) BCBiometricInformationTemplate into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BCBiometricInformationTemplate, encoded as an ASN.1 Element.
 */
export
function _encode_BCBiometricInformationTemplate (value: BCBiometricInformationTemplate, elGetter: $.ASN1Encoder<BCBiometricInformationTemplate>) {
    if (!_cached_encoder_for_BCBiometricInformationTemplate) { _cached_encoder_for_BCBiometricInformationTemplate = _get_encoder_for_SIGNED<BCBiometricInformationTemplateContent>(_encode_BCBiometricInformationTemplateContent); }
    return _cached_encoder_for_BCBiometricInformationTemplate(value, elGetter);
}


/* eslint-enable */
