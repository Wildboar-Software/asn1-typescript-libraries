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
import { EstablishmentCause, _enum_for_EstablishmentCause, EstablishmentCause_emergency /* IMPORTED_LONG_ENUMERATION_ITEM */, emergency /* IMPORTED_SHORT_ENUMERATION_ITEM */, EstablishmentCause_highPriorityAccess /* IMPORTED_LONG_ENUMERATION_ITEM */, highPriorityAccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, EstablishmentCause_mtAccess /* IMPORTED_LONG_ENUMERATION_ITEM */, mtAccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, EstablishmentCause_moSignalling /* IMPORTED_LONG_ENUMERATION_ITEM */, moSignalling /* IMPORTED_SHORT_ENUMERATION_ITEM */, EstablishmentCause_moData /* IMPORTED_LONG_ENUMERATION_ITEM */, moData /* IMPORTED_SHORT_ENUMERATION_ITEM */, EstablishmentCause_moVoiceCall /* IMPORTED_LONG_ENUMERATION_ITEM */, moVoiceCall /* IMPORTED_SHORT_ENUMERATION_ITEM */, EstablishmentCause_moVideoCall /* IMPORTED_LONG_ENUMERATION_ITEM */, moVideoCall /* IMPORTED_SHORT_ENUMERATION_ITEM */, EstablishmentCause_moSMS /* IMPORTED_LONG_ENUMERATION_ITEM */, moSMS /* IMPORTED_SHORT_ENUMERATION_ITEM */, EstablishmentCause_mpsPriorityAccess /* IMPORTED_LONG_ENUMERATION_ITEM */, mpsPriorityAccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, EstablishmentCause_mcsPriorityAccess /* IMPORTED_LONG_ENUMERATION_ITEM */, mcsPriorityAccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, EstablishmentCause_notAvailable /* IMPORTED_LONG_ENUMERATION_ITEM */, notAvailable /* IMPORTED_SHORT_ENUMERATION_ITEM */, EstablishmentCause_exceptionData /* IMPORTED_LONG_ENUMERATION_ITEM */, exceptionData /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_EstablishmentCause, _encode_EstablishmentCause } from "../TS33128Payloads/EstablishmentCause.ta.mjs";
// export { EstablishmentCause, _enum_for_EstablishmentCause, EstablishmentCause_emergency /* IMPORTED_LONG_ENUMERATION_ITEM */, emergency /* IMPORTED_SHORT_ENUMERATION_ITEM */, EstablishmentCause_highPriorityAccess /* IMPORTED_LONG_ENUMERATION_ITEM */, highPriorityAccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, EstablishmentCause_mtAccess /* IMPORTED_LONG_ENUMERATION_ITEM */, mtAccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, EstablishmentCause_moSignalling /* IMPORTED_LONG_ENUMERATION_ITEM */, moSignalling /* IMPORTED_SHORT_ENUMERATION_ITEM */, EstablishmentCause_moData /* IMPORTED_LONG_ENUMERATION_ITEM */, moData /* IMPORTED_SHORT_ENUMERATION_ITEM */, EstablishmentCause_moVoiceCall /* IMPORTED_LONG_ENUMERATION_ITEM */, moVoiceCall /* IMPORTED_SHORT_ENUMERATION_ITEM */, EstablishmentCause_moVideoCall /* IMPORTED_LONG_ENUMERATION_ITEM */, moVideoCall /* IMPORTED_SHORT_ENUMERATION_ITEM */, EstablishmentCause_moSMS /* IMPORTED_LONG_ENUMERATION_ITEM */, moSMS /* IMPORTED_SHORT_ENUMERATION_ITEM */, EstablishmentCause_mpsPriorityAccess /* IMPORTED_LONG_ENUMERATION_ITEM */, mpsPriorityAccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, EstablishmentCause_mcsPriorityAccess /* IMPORTED_LONG_ENUMERATION_ITEM */, mcsPriorityAccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, EstablishmentCause_notAvailable /* IMPORTED_LONG_ENUMERATION_ITEM */, notAvailable /* IMPORTED_SHORT_ENUMERATION_ITEM */, EstablishmentCause_exceptionData /* IMPORTED_LONG_ENUMERATION_ITEM */, exceptionData /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_EstablishmentCause, _encode_EstablishmentCause } from "../TS33128Payloads/EstablishmentCause.ta.mjs";


/**
 * @summary RRCEstablishmentCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RRCEstablishmentCause  ::=  CHOICE
 * {
 *     ePCEstablishmentCause    [1] EstablishmentCause,
 *     fiveGCEstablishmentCause [2] EstablishmentCause
 * }
 * ```
 */
export
type RRCEstablishmentCause =
    { ePCEstablishmentCause: EstablishmentCause } /* CHOICE_ALT_ROOT */
    | { fiveGCEstablishmentCause: EstablishmentCause } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_RRCEstablishmentCause: $.ASN1Decoder<RRCEstablishmentCause> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RRCEstablishmentCause
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RRCEstablishmentCause (el: _Element): RRCEstablishmentCause {
    if (!_cached_decoder_for_RRCEstablishmentCause) { _cached_decoder_for_RRCEstablishmentCause = $._decode_inextensible_choice<RRCEstablishmentCause>({
    "CONTEXT 1": [ "ePCEstablishmentCause", $._decode_implicit<EstablishmentCause>(() => _decode_EstablishmentCause) ],
    "CONTEXT 2": [ "fiveGCEstablishmentCause", $._decode_implicit<EstablishmentCause>(() => _decode_EstablishmentCause) ]
}); }
    return _cached_decoder_for_RRCEstablishmentCause(el);
}

let _cached_encoder_for_RRCEstablishmentCause: $.ASN1Encoder<RRCEstablishmentCause> | null = null;

/**
 * @summary Encodes a(n) RRCEstablishmentCause into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RRCEstablishmentCause, encoded as an ASN.1 Element.
 */
export
function _encode_RRCEstablishmentCause (value: RRCEstablishmentCause, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RRCEstablishmentCause) { _cached_encoder_for_RRCEstablishmentCause = $._encode_choice<RRCEstablishmentCause>({
    "ePCEstablishmentCause": $._encode_implicit(_TagClass.context, 1, () => _encode_EstablishmentCause, $.BER),
    "fiveGCEstablishmentCause": $._encode_implicit(_TagClass.context, 2, () => _encode_EstablishmentCause, $.BER),
}, $.BER); }
    return _cached_encoder_for_RRCEstablishmentCause(value, elGetter);
}


/* eslint-enable */
