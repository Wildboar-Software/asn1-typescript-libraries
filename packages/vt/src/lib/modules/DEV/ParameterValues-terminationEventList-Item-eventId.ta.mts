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



/**
 * @summary ParameterValues_terminationEventList_Item_eventId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ParameterValues-terminationEventList-Item-eventId ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type ParameterValues_terminationEventList_Item_eventId =
    { integer: INTEGER } /* CHOICE_ALT_ROOT */
    | { nul: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ParameterValues_terminationEventList_Item_eventId: $.ASN1Decoder<ParameterValues_terminationEventList_Item_eventId> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ParameterValues_terminationEventList_Item_eventId
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ParameterValues_terminationEventList_Item_eventId (el: _Element): ParameterValues_terminationEventList_Item_eventId {
    if (!_cached_decoder_for_ParameterValues_terminationEventList_Item_eventId) { _cached_decoder_for_ParameterValues_terminationEventList_Item_eventId = $._decode_inextensible_choice<ParameterValues_terminationEventList_Item_eventId>({
    "UNIVERSAL 2": [ "integer", $._decodeInteger ],
    "UNIVERSAL 5": [ "nul", $._decodeNull ]
}); }
    return _cached_decoder_for_ParameterValues_terminationEventList_Item_eventId(el);
}

let _cached_encoder_for_ParameterValues_terminationEventList_Item_eventId: $.ASN1Encoder<ParameterValues_terminationEventList_Item_eventId> | null = null;

/**
 * @summary Encodes a(n) ParameterValues_terminationEventList_Item_eventId into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ParameterValues_terminationEventList_Item_eventId, encoded as an ASN.1 Element.
 */
export
function _encode_ParameterValues_terminationEventList_Item_eventId (value: ParameterValues_terminationEventList_Item_eventId, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ParameterValues_terminationEventList_Item_eventId) { _cached_encoder_for_ParameterValues_terminationEventList_Item_eventId = $._encode_choice<ParameterValues_terminationEventList_Item_eventId>({
    "integer": $._encodeInteger,
    "nul": $._encodeNull,
}, $.BER); }
    return _cached_encoder_for_ParameterValues_terminationEventList_Item_eventId(value, elGetter);
}


/* eslint-enable */
