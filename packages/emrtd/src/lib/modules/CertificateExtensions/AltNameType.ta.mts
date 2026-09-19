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
import { AltNameType_builtinNameForm, _enum_for_AltNameType_builtinNameForm, AltNameType_builtinNameForm_rfc822Name /* IMPORTED_LONG_ENUMERATION_ITEM */, rfc822Name /* IMPORTED_SHORT_ENUMERATION_ITEM */, AltNameType_builtinNameForm_dNSName /* IMPORTED_LONG_ENUMERATION_ITEM */, dNSName /* IMPORTED_SHORT_ENUMERATION_ITEM */, AltNameType_builtinNameForm_x400Address /* IMPORTED_LONG_ENUMERATION_ITEM */, x400Address /* IMPORTED_SHORT_ENUMERATION_ITEM */, AltNameType_builtinNameForm_directoryName /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryName /* IMPORTED_SHORT_ENUMERATION_ITEM */, AltNameType_builtinNameForm_ediPartyName /* IMPORTED_LONG_ENUMERATION_ITEM */, ediPartyName /* IMPORTED_SHORT_ENUMERATION_ITEM */, AltNameType_builtinNameForm_uniformResourceIdentifier /* IMPORTED_LONG_ENUMERATION_ITEM */, uniformResourceIdentifier /* IMPORTED_SHORT_ENUMERATION_ITEM */, AltNameType_builtinNameForm_iPAddress /* IMPORTED_LONG_ENUMERATION_ITEM */, iPAddress /* IMPORTED_SHORT_ENUMERATION_ITEM */, AltNameType_builtinNameForm_registeredId /* IMPORTED_LONG_ENUMERATION_ITEM */, registeredId /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AltNameType_builtinNameForm, _encode_AltNameType_builtinNameForm } from "../CertificateExtensions/AltNameType-builtinNameForm.ta.mjs";
// export { AltNameType_builtinNameForm, _enum_for_AltNameType_builtinNameForm, AltNameType_builtinNameForm_rfc822Name /* IMPORTED_LONG_ENUMERATION_ITEM */, rfc822Name /* IMPORTED_SHORT_ENUMERATION_ITEM */, AltNameType_builtinNameForm_dNSName /* IMPORTED_LONG_ENUMERATION_ITEM */, dNSName /* IMPORTED_SHORT_ENUMERATION_ITEM */, AltNameType_builtinNameForm_x400Address /* IMPORTED_LONG_ENUMERATION_ITEM */, x400Address /* IMPORTED_SHORT_ENUMERATION_ITEM */, AltNameType_builtinNameForm_directoryName /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryName /* IMPORTED_SHORT_ENUMERATION_ITEM */, AltNameType_builtinNameForm_ediPartyName /* IMPORTED_LONG_ENUMERATION_ITEM */, ediPartyName /* IMPORTED_SHORT_ENUMERATION_ITEM */, AltNameType_builtinNameForm_uniformResourceIdentifier /* IMPORTED_LONG_ENUMERATION_ITEM */, uniformResourceIdentifier /* IMPORTED_SHORT_ENUMERATION_ITEM */, AltNameType_builtinNameForm_iPAddress /* IMPORTED_LONG_ENUMERATION_ITEM */, iPAddress /* IMPORTED_SHORT_ENUMERATION_ITEM */, AltNameType_builtinNameForm_registeredId /* IMPORTED_LONG_ENUMERATION_ITEM */, registeredId /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AltNameType_builtinNameForm, _encode_AltNameType_builtinNameForm } from "../CertificateExtensions/AltNameType-builtinNameForm.ta.mjs";


/**
 * @summary AltNameType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AltNameType  ::=  CHOICE {
 *   builtinNameForm  ENUMERATED {
 *     rfc822Name                (1),
 *     dNSName                   (2),
 *     x400Address               (3),
 *     directoryName             (4),
 *     ediPartyName              (5),
 *     uniformResourceIdentifier (6),
 *     iPAddress                 (7),
 *     registeredId              (8),
 *     ...},
 *   otherNameForm    OBJECT IDENTIFIER,
 *   ... }
 * ```
 */
export
type AltNameType =
    { builtinNameForm: AltNameType_builtinNameForm } /* CHOICE_ALT_ROOT */
    | { otherNameForm: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_AltNameType: $.ASN1Decoder<AltNameType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AltNameType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AltNameType (el: _Element): AltNameType {
    if (!_cached_decoder_for_AltNameType) { _cached_decoder_for_AltNameType = $._decode_extensible_choice<AltNameType>({
    "UNIVERSAL 10": [ "builtinNameForm", _decode_AltNameType_builtinNameForm ],
    "UNIVERSAL 6": [ "otherNameForm", $._decodeObjectIdentifier ]
}); }
    return _cached_decoder_for_AltNameType(el);
}

let _cached_encoder_for_AltNameType: $.ASN1Encoder<AltNameType> | null = null;

/**
 * @summary Encodes a(n) AltNameType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AltNameType, encoded as an ASN.1 Element.
 */
export
function _encode_AltNameType (value: AltNameType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AltNameType) { _cached_encoder_for_AltNameType = $._encode_choice<AltNameType>({
    "builtinNameForm": _encode_AltNameType_builtinNameForm,
    "otherNameForm": $._encodeObjectIdentifier,
}, $.BER); }
    return _cached_encoder_for_AltNameType(value, elGetter);
}


/* eslint-enable */
