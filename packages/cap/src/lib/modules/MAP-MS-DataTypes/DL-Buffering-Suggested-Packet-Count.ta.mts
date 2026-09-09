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



/**
 * @summary DL_Buffering_Suggested_Packet_Count
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DL-Buffering-Suggested-Packet-Count  ::=  INTEGER (-1..2147483647)
 * ```
 */
export
type DL_Buffering_Suggested_Packet_Count = INTEGER;

let _cached_decoder_for_DL_Buffering_Suggested_Packet_Count: $.ASN1Decoder<DL_Buffering_Suggested_Packet_Count> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DL_Buffering_Suggested_Packet_Count
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DL_Buffering_Suggested_Packet_Count (el: _Element): DL_Buffering_Suggested_Packet_Count {
    if (!_cached_decoder_for_DL_Buffering_Suggested_Packet_Count) { _cached_decoder_for_DL_Buffering_Suggested_Packet_Count = $._decodeInteger; }
    return _cached_decoder_for_DL_Buffering_Suggested_Packet_Count(el);
}

let _cached_encoder_for_DL_Buffering_Suggested_Packet_Count: $.ASN1Encoder<DL_Buffering_Suggested_Packet_Count> | null = null;

/**
 * @summary Encodes a(n) DL_Buffering_Suggested_Packet_Count into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DL_Buffering_Suggested_Packet_Count, encoded as an ASN.1 Element.
 */
export
function _encode_DL_Buffering_Suggested_Packet_Count (value: DL_Buffering_Suggested_Packet_Count, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DL_Buffering_Suggested_Packet_Count) { _cached_encoder_for_DL_Buffering_Suggested_Packet_Count = $._encodeInteger; }
    return _cached_encoder_for_DL_Buffering_Suggested_Packet_Count(value, elGetter);
}


/* eslint-enable */
