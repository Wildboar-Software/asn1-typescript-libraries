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
import { Ext_TeleserviceCode, _decode_Ext_TeleserviceCode, _encode_Ext_TeleserviceCode } from "../MAP-TS-Code/Ext-TeleserviceCode.ta.mjs";
// export { Ext_TeleserviceCode, _decode_Ext_TeleserviceCode, _encode_Ext_TeleserviceCode } from "../MAP-TS-Code/Ext-TeleserviceCode.ta.mjs";


/**
 * @summary TeleserviceList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TeleserviceList  ::=  SEQUENCE SIZE (1..maxNumOfTeleservices) OF
 *     Ext-TeleserviceCode
 * ```
 */
export
type TeleserviceList = Ext_TeleserviceCode[]; // SequenceOfType

let _cached_decoder_for_TeleserviceList: $.ASN1Decoder<TeleserviceList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TeleserviceList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TeleserviceList (el: _Element): TeleserviceList {
    if (!_cached_decoder_for_TeleserviceList) { _cached_decoder_for_TeleserviceList = $._decodeSequenceOf<Ext_TeleserviceCode>(() => _decode_Ext_TeleserviceCode); }
    return _cached_decoder_for_TeleserviceList(el);
}

let _cached_encoder_for_TeleserviceList: $.ASN1Encoder<TeleserviceList> | null = null;

/**
 * @summary Encodes a(n) TeleserviceList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TeleserviceList, encoded as an ASN.1 Element.
 */
export
function _encode_TeleserviceList (value: TeleserviceList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TeleserviceList) { _cached_encoder_for_TeleserviceList = $._encodeSequenceOf<Ext_TeleserviceCode>(() => _encode_Ext_TeleserviceCode, $.BER); }
    return _cached_encoder_for_TeleserviceList(value, elGetter);
}


/* eslint-enable */
