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
import { OldACSEUserInformationForCSTA, _decode_OldACSEUserInformationForCSTA, _encode_OldACSEUserInformationForCSTA } from "../CSTA-application-context-information-csta3/OldACSEUserInformationForCSTA.ta.mjs";
// export { OldACSEUserInformationForCSTA, _decode_OldACSEUserInformationForCSTA, _encode_OldACSEUserInformationForCSTA } from "../CSTA-application-context-information-csta3/OldACSEUserInformationForCSTA.ta.mjs";
import { NewACSEUserInformationForCSTA, _decode_NewACSEUserInformationForCSTA, _encode_NewACSEUserInformationForCSTA } from "../CSTA-application-context-information-csta3/NewACSEUserInformationForCSTA.ta.mjs";
// export { NewACSEUserInformationForCSTA, _decode_NewACSEUserInformationForCSTA, _encode_NewACSEUserInformationForCSTA } from "../CSTA-application-context-information-csta3/NewACSEUserInformationForCSTA.ta.mjs";


/**
 * @summary ACSEUserInformationForCSTA
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ACSEUserInformationForCSTA  ::=  CHOICE
 * {    oldDefinition                 OldACSEUserInformationForCSTA,
 *     newDefinition         [0] IMPLICIT    NewACSEUserInformationForCSTA }
 * ```
 */
export
type ACSEUserInformationForCSTA =
    { oldDefinition: OldACSEUserInformationForCSTA } /* CHOICE_ALT_ROOT */
    | { newDefinition: NewACSEUserInformationForCSTA } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ACSEUserInformationForCSTA: $.ASN1Decoder<ACSEUserInformationForCSTA> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ACSEUserInformationForCSTA
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ACSEUserInformationForCSTA (el: _Element): ACSEUserInformationForCSTA {
    if (!_cached_decoder_for_ACSEUserInformationForCSTA) { _cached_decoder_for_ACSEUserInformationForCSTA = $._decode_inextensible_choice<ACSEUserInformationForCSTA>({
    "UNIVERSAL 16": [ "oldDefinition", _decode_OldACSEUserInformationForCSTA ],
    "CONTEXT 0": [ "newDefinition", $._decode_implicit<NewACSEUserInformationForCSTA>(() => _decode_NewACSEUserInformationForCSTA) ]
}); }
    return _cached_decoder_for_ACSEUserInformationForCSTA(el);
}

let _cached_encoder_for_ACSEUserInformationForCSTA: $.ASN1Encoder<ACSEUserInformationForCSTA> | null = null;

/**
 * @summary Encodes a(n) ACSEUserInformationForCSTA into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ACSEUserInformationForCSTA, encoded as an ASN.1 Element.
 */
export
function _encode_ACSEUserInformationForCSTA (value: ACSEUserInformationForCSTA, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ACSEUserInformationForCSTA) { _cached_encoder_for_ACSEUserInformationForCSTA = $._encode_choice<ACSEUserInformationForCSTA>({
    "oldDefinition": _encode_OldACSEUserInformationForCSTA,
    "newDefinition": $._encode_implicit(_TagClass.context, 0, () => _encode_NewACSEUserInformationForCSTA, $.BER),
}, $.BER); }
    return _cached_encoder_for_ACSEUserInformationForCSTA(value, elGetter);
}


/* eslint-enable */
