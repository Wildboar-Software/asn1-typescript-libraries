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
import { BCBiometricInformationTemplate, _decode_BCBiometricInformationTemplate, _encode_BCBiometricInformationTemplate } from "../TAI/BCBiometricInformationTemplate.ta.mjs";
import { URI, _decode_URI, _encode_URI } from "../TAI/URI.ta.mjs";
/**
 * @summary BiometricInformationTemplateorPointer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BiometricInformationTemplateorPointer  ::=  CHOICE {
 *   bcBiometricInformationTemplate             BCBiometricInformationTemplate,
 *   referenceToBCBiometricInformationTemplate  URI,
 *   ...
 * }
 * ```
 */
export
type BiometricInformationTemplateorPointer =
    { bcBiometricInformationTemplate: BCBiometricInformationTemplate } /* CHOICE_ALT_ROOT */
    | { referenceToBCBiometricInformationTemplate: URI } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_BiometricInformationTemplateorPointer: $.ASN1Decoder<BiometricInformationTemplateorPointer> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BiometricInformationTemplateorPointer
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BiometricInformationTemplateorPointer} The decoded data structure.
 */
export
function _decode_BiometricInformationTemplateorPointer (el: _Element): BiometricInformationTemplateorPointer {
    if (!_cached_decoder_for_BiometricInformationTemplateorPointer) { _cached_decoder_for_BiometricInformationTemplateorPointer = $._decode_extensible_choice<BiometricInformationTemplateorPointer>({
    "CONTEXT 0": [ "bcBiometricInformationTemplate", _decode_BCBiometricInformationTemplate ],
    "CONTEXT 1": [ "referenceToBCBiometricInformationTemplate", _decode_URI ]
}); }
    return _cached_decoder_for_BiometricInformationTemplateorPointer(el);
}

let _cached_encoder_for_BiometricInformationTemplateorPointer: $.ASN1Encoder<BiometricInformationTemplateorPointer> | null = null;

/**
 * @summary Encodes a(n) BiometricInformationTemplateorPointer into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BiometricInformationTemplateorPointer, encoded as an ASN.1 Element.
 */
export
function _encode_BiometricInformationTemplateorPointer (value: BiometricInformationTemplateorPointer, elGetter: $.ASN1Encoder<BiometricInformationTemplateorPointer>): _Element {
    if (!_cached_encoder_for_BiometricInformationTemplateorPointer) { _cached_encoder_for_BiometricInformationTemplateorPointer = $._encode_choice<BiometricInformationTemplateorPointer>({
    "bcBiometricInformationTemplate": _encode_BCBiometricInformationTemplate,
    "referenceToBCBiometricInformationTemplate": _encode_URI,
}, $.BER); }
    return _cached_encoder_for_BiometricInformationTemplateorPointer(value, elGetter);
}


/* eslint-enable */
