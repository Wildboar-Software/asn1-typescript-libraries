/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { SIGNED, _get_decoder_for_SIGNED, _get_encoder_for_SIGNED } from "../AuthenticationFramework/SIGNED.ta.mjs";
// export { SIGNED, _get_decoder_for_SIGNED, _get_encoder_for_SIGNED } from "../AuthenticationFramework/SIGNED.ta.mjs";
import { BCBiometricInformationTemplateContent, _decode_BCBiometricInformationTemplateContent, _encode_BCBiometricInformationTemplateContent } from "../TAI/BCBiometricInformationTemplateContent.ta.mjs";
// export { BCBiometricInformationTemplateContent, _decode_BCBiometricInformationTemplateContent, _encode_BCBiometricInformationTemplateContent } from "../TAI/BCBiometricInformationTemplateContent.ta.mjs";


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
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BCBiometricInformationTemplate (el: _Element): BCBiometricInformationTemplate {
    if (!_cached_decoder_for_BCBiometricInformationTemplate) { _cached_decoder_for_BCBiometricInformationTemplate = _get_decoder_for_SIGNED<BCBiometricInformationTemplateContent>(_decode_BCBiometricInformationTemplateContent); }
    return _cached_decoder_for_BCBiometricInformationTemplate(el);
}

let _cached_encoder_for_BCBiometricInformationTemplate: $.ASN1Encoder<BCBiometricInformationTemplate> | null = null;

/**
 * @summary Encodes a(n) BCBiometricInformationTemplate into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BCBiometricInformationTemplate, encoded as an ASN.1 Element.
 */
export
function _encode_BCBiometricInformationTemplate (value: BCBiometricInformationTemplate, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BCBiometricInformationTemplate) { _cached_encoder_for_BCBiometricInformationTemplate = _get_encoder_for_SIGNED<BCBiometricInformationTemplateContent>(_encode_BCBiometricInformationTemplateContent); }
    return _cached_encoder_for_BCBiometricInformationTemplate(value, elGetter);
}


/* eslint-enable */
