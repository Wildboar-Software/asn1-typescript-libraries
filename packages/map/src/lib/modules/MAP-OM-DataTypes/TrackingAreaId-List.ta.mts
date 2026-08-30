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
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TA_Id, _decode_TA_Id, _encode_TA_Id } from "../MAP-CommonDataTypes/TA-Id.ta.mjs";


/**
 * @summary TrackingAreaId_List
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TrackingAreaId-List  ::=  SEQUENCE SIZE (1..8) OF
 *     TA-Id
 * ```
 */
export
type TrackingAreaId_List = TA_Id[]; // SequenceOfType

let _cached_decoder_for_TrackingAreaId_List: $.ASN1Decoder<TrackingAreaId_List> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TrackingAreaId_List
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TrackingAreaId_List (el: _Element): TrackingAreaId_List {
    if (!_cached_decoder_for_TrackingAreaId_List) { _cached_decoder_for_TrackingAreaId_List = $._decodeSequenceOf<TA_Id>(() => _decode_TA_Id); }
    const value = _cached_decoder_for_TrackingAreaId_List(el);
    if (value.length < 1 || value.length > 8) {
        throw new ASN1SizeError("TrackingAreaId_List violates SIZE constraint");
    }
    return value;
}

let _cached_encoder_for_TrackingAreaId_List: $.ASN1Encoder<TrackingAreaId_List> | null = null;

/**
 * @summary Encodes a(n) TrackingAreaId_List into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TrackingAreaId_List, encoded as an ASN.1 Element.
 */
export
function _encode_TrackingAreaId_List (value: TrackingAreaId_List, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TrackingAreaId_List) { _cached_encoder_for_TrackingAreaId_List = $._encodeSequenceOf<TA_Id>(() => _encode_TA_Id, $.BER); }
    return _cached_encoder_for_TrackingAreaId_List(value, elGetter);
}


/* eslint-enable */
