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
import { SS_Code, _decode_SS_Code, _encode_SS_Code } from "../MAP-SS-Code/SS-Code.ta.mjs";
// export { SS_Code, _decode_SS_Code, _encode_SS_Code } from "../MAP-SS-Code/SS-Code.ta.mjs";


/**
 * @summary SS_EventList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SS-EventList   ::=  SEQUENCE SIZE (1..maxNumOfCamelSSEvents) OF SS-Code
 * ```
 */
export
type SS_EventList = SS_Code[]; // SequenceOfType

let _cached_decoder_for_SS_EventList: $.ASN1Decoder<SS_EventList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SS_EventList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SS_EventList (el: _Element): SS_EventList {
    if (!_cached_decoder_for_SS_EventList) { _cached_decoder_for_SS_EventList = $._decodeSequenceOf<SS_Code>(() => _decode_SS_Code); }
    return _cached_decoder_for_SS_EventList(el);
}

let _cached_encoder_for_SS_EventList: $.ASN1Encoder<SS_EventList> | null = null;

/**
 * @summary Encodes a(n) SS_EventList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SS_EventList, encoded as an ASN.1 Element.
 */
export
function _encode_SS_EventList (value: SS_EventList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SS_EventList) { _cached_encoder_for_SS_EventList = $._encodeSequenceOf<SS_Code>(() => _encode_SS_Code, $.BER); }
    return _cached_encoder_for_SS_EventList(value, elGetter);
}


/* eslint-enable */
