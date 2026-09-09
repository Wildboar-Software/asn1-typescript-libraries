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
import { RequestedInformation, _decode_RequestedInformation, _encode_RequestedInformation } from "../Core-INAP-CS1-DataTypes/RequestedInformation.ta.mjs";
// export { RequestedInformation, _decode_RequestedInformation, _encode_RequestedInformation } from "../Core-INAP-CS1-DataTypes/RequestedInformation.ta.mjs";


/**
 * @summary RequestedInformationList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RequestedInformationList      ::=  SEQUENCE SIZE(1..numOfInfoItems) OF RequestedInformation
 * ```
 */
export
type RequestedInformationList = RequestedInformation[]; // SequenceOfType

let _cached_decoder_for_RequestedInformationList: $.ASN1Decoder<RequestedInformationList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RequestedInformationList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RequestedInformationList (el: _Element): RequestedInformationList {
    if (!_cached_decoder_for_RequestedInformationList) { _cached_decoder_for_RequestedInformationList = $._decodeSequenceOf<RequestedInformation>(() => _decode_RequestedInformation); }
    return _cached_decoder_for_RequestedInformationList(el);
}

let _cached_encoder_for_RequestedInformationList: $.ASN1Encoder<RequestedInformationList> | null = null;

/**
 * @summary Encodes a(n) RequestedInformationList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RequestedInformationList, encoded as an ASN.1 Element.
 */
export
function _encode_RequestedInformationList (value: RequestedInformationList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RequestedInformationList) { _cached_encoder_for_RequestedInformationList = $._encodeSequenceOf<RequestedInformation>(() => _encode_RequestedInformation, $.BER); }
    return _cached_encoder_for_RequestedInformationList(value, elGetter);
}


/* eslint-enable */
