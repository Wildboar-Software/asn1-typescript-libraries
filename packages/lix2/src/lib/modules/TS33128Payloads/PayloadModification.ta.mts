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
import { PredefinedPayloadModification, _enum_for_PredefinedPayloadModification, PredefinedPayloadModification_pANILocationRemoval /* IMPORTED_LONG_ENUMERATION_ITEM */, pANILocationRemoval /* IMPORTED_SHORT_ENUMERATION_ITEM */, PredefinedPayloadModification_cNILocationRemoval /* IMPORTED_LONG_ENUMERATION_ITEM */, cNILocationRemoval /* IMPORTED_SHORT_ENUMERATION_ITEM */, PredefinedPayloadModification_sIPGeolocationInfoRemoval /* IMPORTED_LONG_ENUMERATION_ITEM */, sIPGeolocationInfoRemoval /* IMPORTED_SHORT_ENUMERATION_ITEM */, PredefinedPayloadModification_presenceInformationLocationRemoval /* IMPORTED_LONG_ENUMERATION_ITEM */, presenceInformationLocationRemoval /* IMPORTED_SHORT_ENUMERATION_ITEM */, PredefinedPayloadModification_tS33128SMSTPDURedaction /* IMPORTED_LONG_ENUMERATION_ITEM */, tS33128SMSTPDURedaction /* IMPORTED_SHORT_ENUMERATION_ITEM */, PredefinedPayloadModification_tS33128TruncatedSMSTPDU /* IMPORTED_LONG_ENUMERATION_ITEM */, tS33128TruncatedSMSTPDU /* IMPORTED_SHORT_ENUMERATION_ITEM */, PredefinedPayloadModification_iMSTextContentRemoval /* IMPORTED_LONG_ENUMERATION_ITEM */, iMSTextContentRemoval /* IMPORTED_SHORT_ENUMERATION_ITEM */, PredefinedPayloadModification_iMSSubjectContentRemoval /* IMPORTED_LONG_ENUMERATION_ITEM */, iMSSubjectContentRemoval /* IMPORTED_SHORT_ENUMERATION_ITEM */, PredefinedPayloadModification_rCSPresenceLocationRemoval /* IMPORTED_LONG_ENUMERATION_ITEM */, rCSPresenceLocationRemoval /* IMPORTED_SHORT_ENUMERATION_ITEM */, PredefinedPayloadModification_rCSCPIMLocationRemoval /* IMPORTED_LONG_ENUMERATION_ITEM */, rCSCPIMLocationRemoval /* IMPORTED_SHORT_ENUMERATION_ITEM */, PredefinedPayloadModification_rCSTextContentRemoval /* IMPORTED_LONG_ENUMERATION_ITEM */, rCSTextContentRemoval /* IMPORTED_SHORT_ENUMERATION_ITEM */, PredefinedPayloadModification_rCSSubjectContentRemoval /* IMPORTED_LONG_ENUMERATION_ITEM */, rCSSubjectContentRemoval /* IMPORTED_SHORT_ENUMERATION_ITEM */, PredefinedPayloadModification_rCSGeolocationPUSHContentRemoval /* IMPORTED_LONG_ENUMERATION_ITEM */, rCSGeolocationPUSHContentRemoval /* IMPORTED_SHORT_ENUMERATION_ITEM */, PredefinedPayloadModification_rCSFileURLContentRemoval /* IMPORTED_LONG_ENUMERATION_ITEM */, rCSFileURLContentRemoval /* IMPORTED_SHORT_ENUMERATION_ITEM */, PredefinedPayloadModification_threeGPP2SMSUserDataRedaction /* IMPORTED_LONG_ENUMERATION_ITEM */, threeGPP2SMSUserDataRedaction /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_PredefinedPayloadModification, _encode_PredefinedPayloadModification } from "../TS33128Payloads/PredefinedPayloadModification.ta.mjs";
// export { PredefinedPayloadModification, _enum_for_PredefinedPayloadModification, PredefinedPayloadModification_pANILocationRemoval /* IMPORTED_LONG_ENUMERATION_ITEM */, pANILocationRemoval /* IMPORTED_SHORT_ENUMERATION_ITEM */, PredefinedPayloadModification_cNILocationRemoval /* IMPORTED_LONG_ENUMERATION_ITEM */, cNILocationRemoval /* IMPORTED_SHORT_ENUMERATION_ITEM */, PredefinedPayloadModification_sIPGeolocationInfoRemoval /* IMPORTED_LONG_ENUMERATION_ITEM */, sIPGeolocationInfoRemoval /* IMPORTED_SHORT_ENUMERATION_ITEM */, PredefinedPayloadModification_presenceInformationLocationRemoval /* IMPORTED_LONG_ENUMERATION_ITEM */, presenceInformationLocationRemoval /* IMPORTED_SHORT_ENUMERATION_ITEM */, PredefinedPayloadModification_tS33128SMSTPDURedaction /* IMPORTED_LONG_ENUMERATION_ITEM */, tS33128SMSTPDURedaction /* IMPORTED_SHORT_ENUMERATION_ITEM */, PredefinedPayloadModification_tS33128TruncatedSMSTPDU /* IMPORTED_LONG_ENUMERATION_ITEM */, tS33128TruncatedSMSTPDU /* IMPORTED_SHORT_ENUMERATION_ITEM */, PredefinedPayloadModification_iMSTextContentRemoval /* IMPORTED_LONG_ENUMERATION_ITEM */, iMSTextContentRemoval /* IMPORTED_SHORT_ENUMERATION_ITEM */, PredefinedPayloadModification_iMSSubjectContentRemoval /* IMPORTED_LONG_ENUMERATION_ITEM */, iMSSubjectContentRemoval /* IMPORTED_SHORT_ENUMERATION_ITEM */, PredefinedPayloadModification_rCSPresenceLocationRemoval /* IMPORTED_LONG_ENUMERATION_ITEM */, rCSPresenceLocationRemoval /* IMPORTED_SHORT_ENUMERATION_ITEM */, PredefinedPayloadModification_rCSCPIMLocationRemoval /* IMPORTED_LONG_ENUMERATION_ITEM */, rCSCPIMLocationRemoval /* IMPORTED_SHORT_ENUMERATION_ITEM */, PredefinedPayloadModification_rCSTextContentRemoval /* IMPORTED_LONG_ENUMERATION_ITEM */, rCSTextContentRemoval /* IMPORTED_SHORT_ENUMERATION_ITEM */, PredefinedPayloadModification_rCSSubjectContentRemoval /* IMPORTED_LONG_ENUMERATION_ITEM */, rCSSubjectContentRemoval /* IMPORTED_SHORT_ENUMERATION_ITEM */, PredefinedPayloadModification_rCSGeolocationPUSHContentRemoval /* IMPORTED_LONG_ENUMERATION_ITEM */, rCSGeolocationPUSHContentRemoval /* IMPORTED_SHORT_ENUMERATION_ITEM */, PredefinedPayloadModification_rCSFileURLContentRemoval /* IMPORTED_LONG_ENUMERATION_ITEM */, rCSFileURLContentRemoval /* IMPORTED_SHORT_ENUMERATION_ITEM */, PredefinedPayloadModification_threeGPP2SMSUserDataRedaction /* IMPORTED_LONG_ENUMERATION_ITEM */, threeGPP2SMSUserDataRedaction /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_PredefinedPayloadModification, _encode_PredefinedPayloadModification } from "../TS33128Payloads/PredefinedPayloadModification.ta.mjs";
import { PayloadModificationDescription, _decode_PayloadModificationDescription, _encode_PayloadModificationDescription } from "../TS33128Payloads/PayloadModificationDescription.ta.mjs";
// export { PayloadModificationDescription, _decode_PayloadModificationDescription, _encode_PayloadModificationDescription } from "../TS33128Payloads/PayloadModificationDescription.ta.mjs";


/**
 * @summary PayloadModification
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PayloadModification  ::=  CHOICE
 * {
 *     predefinedModification [1] PredefinedPayloadModification,
 *     describedModification  [2] PayloadModificationDescription
 * }
 * ```
 */
export
type PayloadModification =
    { predefinedModification: PredefinedPayloadModification } /* CHOICE_ALT_ROOT */
    | { describedModification: PayloadModificationDescription } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_PayloadModification: $.ASN1Decoder<PayloadModification> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PayloadModification
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PayloadModification (el: _Element): PayloadModification {
    if (!_cached_decoder_for_PayloadModification) { _cached_decoder_for_PayloadModification = $._decode_inextensible_choice<PayloadModification>({
    "CONTEXT 1": [ "predefinedModification", $._decode_implicit<PredefinedPayloadModification>(() => _decode_PredefinedPayloadModification) ],
    "CONTEXT 2": [ "describedModification", $._decode_implicit<PayloadModificationDescription>(() => _decode_PayloadModificationDescription) ]
}); }
    return _cached_decoder_for_PayloadModification(el);
}

let _cached_encoder_for_PayloadModification: $.ASN1Encoder<PayloadModification> | null = null;

/**
 * @summary Encodes a(n) PayloadModification into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PayloadModification, encoded as an ASN.1 Element.
 */
export
function _encode_PayloadModification (value: PayloadModification, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PayloadModification) { _cached_encoder_for_PayloadModification = $._encode_choice<PayloadModification>({
    "predefinedModification": $._encode_implicit(_TagClass.context, 1, () => _encode_PredefinedPayloadModification, $.BER),
    "describedModification": $._encode_implicit(_TagClass.context, 2, () => _encode_PayloadModificationDescription, $.BER),
}, $.BER); }
    return _cached_encoder_for_PayloadModification(value, elGetter);
}


/* eslint-enable */
