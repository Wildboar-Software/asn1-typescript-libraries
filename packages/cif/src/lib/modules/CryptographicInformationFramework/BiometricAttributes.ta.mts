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
import { BiometricTemplateAttributes, _decode_BiometricTemplateAttributes, _encode_BiometricTemplateAttributes } from "../CryptographicInformationFramework/BiometricTemplateAttributes.ta.mjs";
// export { BiometricTemplateAttributes, _decode_BiometricTemplateAttributes, _encode_BiometricTemplateAttributes } from "../CryptographicInformationFramework/BiometricTemplateAttributes.ta.mjs";
import { BiometricInformationTemplate, _decode_BiometricInformationTemplate, _encode_BiometricInformationTemplate } from "../CryptographicInformationFramework/BiometricInformationTemplate.ta.mjs";
// export { BiometricInformationTemplate, _decode_BiometricInformationTemplate, _encode_BiometricInformationTemplate } from "../CryptographicInformationFramework/BiometricInformationTemplate.ta.mjs";
import { BiometricInformationTemplateGroup, _decode_BiometricInformationTemplateGroup, _encode_BiometricInformationTemplateGroup } from "../CryptographicInformationFramework/BiometricInformationTemplateGroup.ta.mjs";
// export { BiometricInformationTemplateGroup, _decode_BiometricInformationTemplateGroup, _encode_BiometricInformationTemplateGroup } from "../CryptographicInformationFramework/BiometricInformationTemplateGroup.ta.mjs";


/**
 * @summary BiometricAttributes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BiometricAttributes  ::=  CHOICE {
 *     biometricTemplateAttributes BiometricTemplateAttributes,
 *     bit                         [APPLICATION 96] BiometricInformationTemplate,
 *     bitGroup                    [APPLICATION 97] BiometricInformationTemplateGroup
 * }
 * ```
 */
export
type BiometricAttributes =
    { biometricTemplateAttributes: BiometricTemplateAttributes } /* CHOICE_ALT_ROOT */
    | { bit: BiometricInformationTemplate } /* CHOICE_ALT_ROOT */
    | { bitGroup: BiometricInformationTemplateGroup } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_BiometricAttributes: $.ASN1Decoder<BiometricAttributes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BiometricAttributes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BiometricAttributes (el: _Element): BiometricAttributes {
    if (!_cached_decoder_for_BiometricAttributes) { _cached_decoder_for_BiometricAttributes = $._decode_inextensible_choice<BiometricAttributes>({
    "UNIVERSAL 16": [ "biometricTemplateAttributes", _decode_BiometricTemplateAttributes ],
    "APPLICATION 96": [ "bit", $._decode_explicit<BiometricInformationTemplate>(() => _decode_BiometricInformationTemplate) ],
    "APPLICATION 97": [ "bitGroup", $._decode_implicit<BiometricInformationTemplateGroup>(() => _decode_BiometricInformationTemplateGroup) ]
}); }
    return _cached_decoder_for_BiometricAttributes(el);
}

let _cached_encoder_for_BiometricAttributes: $.ASN1Encoder<BiometricAttributes> | null = null;

/**
 * @summary Encodes a(n) BiometricAttributes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BiometricAttributes, encoded as an ASN.1 Element.
 */
export
function _encode_BiometricAttributes (value: BiometricAttributes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BiometricAttributes) { _cached_encoder_for_BiometricAttributes = $._encode_choice<BiometricAttributes>({
    "biometricTemplateAttributes": _encode_BiometricTemplateAttributes,
    "bit": $._encode_explicit(_TagClass.application, 96, () => _encode_BiometricInformationTemplate, $.BER),
    "bitGroup": $._encode_implicit(_TagClass.application, 97, () => _encode_BiometricInformationTemplateGroup, $.BER),
}, $.BER); }
    return _cached_encoder_for_BiometricAttributes(value, elGetter);
}


/* eslint-enable */
