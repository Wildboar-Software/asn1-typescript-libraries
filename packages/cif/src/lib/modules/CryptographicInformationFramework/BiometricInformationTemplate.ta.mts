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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { BiometricInformationTemplate_templateAndMaxBitLength, _decode_BiometricInformationTemplate_templateAndMaxBitLength, _encode_BiometricInformationTemplate_templateAndMaxBitLength } from "../CryptographicInformationFramework/BiometricInformationTemplate-templateAndMaxBitLength.ta.mjs";
// export { BiometricInformationTemplate_templateAndMaxBitLength, _decode_BiometricInformationTemplate_templateAndMaxBitLength, _encode_BiometricInformationTemplate_templateAndMaxBitLength } from "../CryptographicInformationFramework/BiometricInformationTemplate-templateAndMaxBitLength.ta.mjs";


/**
 * @summary BiometricInformationTemplate
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BiometricInformationTemplate  ::=  CHOICE {
 *     biometricInformationTemplate        OCTET STRING,
 *     -- Shall contain an ISO/IEC 7816-11 Biometric Information Template value
 *     templateAndMaxBitLength             SEQUENCE {
 *         maxBITLength                    INTEGER OPTIONAL,
 *         biometricInformationTemplate    OCTET STRING
 *         -- Shall contain an ISO/IEC 7816-11 BiometricInformationTemplate value
 *     }
 * }
 * ```
 */
export
type BiometricInformationTemplate =
    { biometricInformationTemplate: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { templateAndMaxBitLength: BiometricInformationTemplate_templateAndMaxBitLength } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_BiometricInformationTemplate: $.ASN1Decoder<BiometricInformationTemplate> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BiometricInformationTemplate
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BiometricInformationTemplate (el: _Element): BiometricInformationTemplate {
    if (!_cached_decoder_for_BiometricInformationTemplate) { _cached_decoder_for_BiometricInformationTemplate = $._decode_inextensible_choice<BiometricInformationTemplate>({
    "UNIVERSAL 4": [ "biometricInformationTemplate", $._decodeOctetString ],
    "UNIVERSAL 16": [ "templateAndMaxBitLength", _decode_BiometricInformationTemplate_templateAndMaxBitLength ]
}); }
    return _cached_decoder_for_BiometricInformationTemplate(el);
}

let _cached_encoder_for_BiometricInformationTemplate: $.ASN1Encoder<BiometricInformationTemplate> | null = null;

/**
 * @summary Encodes a(n) BiometricInformationTemplate into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BiometricInformationTemplate, encoded as an ASN.1 Element.
 */
export
function _encode_BiometricInformationTemplate (value: BiometricInformationTemplate, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BiometricInformationTemplate) { _cached_encoder_for_BiometricInformationTemplate = $._encode_choice<BiometricInformationTemplate>({
    "biometricInformationTemplate": $._encodeOctetString,
    "templateAndMaxBitLength": _encode_BiometricInformationTemplate_templateAndMaxBitLength,
}, $.BER); }
    return _cached_encoder_for_BiometricInformationTemplate(value, elGetter);
}


/* eslint-enable */
