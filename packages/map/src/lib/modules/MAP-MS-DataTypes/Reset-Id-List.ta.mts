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
import { Reset_Id, _decode_Reset_Id, _encode_Reset_Id } from "../MAP-MS-DataTypes/Reset-Id.ta.mjs";


/**
 * @summary Reset_Id_List
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Reset-Id-List  ::=  SEQUENCE SIZE (1..50) OF
 *     Reset-Id
 * ```
 */
export
type Reset_Id_List = Reset_Id[]; // SequenceOfType

let _cached_decoder_for_Reset_Id_List: $.ASN1Decoder<Reset_Id_List> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Reset_Id_List
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Reset_Id_List (el: _Element): Reset_Id_List {
    if (!_cached_decoder_for_Reset_Id_List) { _cached_decoder_for_Reset_Id_List = $._decodeSequenceOf<Reset_Id>(() => _decode_Reset_Id); }
    const value = _cached_decoder_for_Reset_Id_List(el);
    if (value.length < 1 || value.length > 50) {
        throw new ASN1SizeError("Reset_Id_List violates SIZE constraint");
    }
    return value;
}

let _cached_encoder_for_Reset_Id_List: $.ASN1Encoder<Reset_Id_List> | null = null;

/**
 * @summary Encodes a(n) Reset_Id_List into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Reset_Id_List, encoded as an ASN.1 Element.
 */
export
function _encode_Reset_Id_List (value: Reset_Id_List, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Reset_Id_List) { _cached_encoder_for_Reset_Id_List = $._encodeSequenceOf<Reset_Id>(() => _encode_Reset_Id, $.BER); }
    return _cached_encoder_for_Reset_Id_List(value, elGetter);
}


/* eslint-enable */
