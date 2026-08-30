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
import { LSAIdentityList, _decode_LSAIdentityList, _encode_LSAIdentityList } from "../MAP-MS-DataTypes/LSAIdentityList.ta.mjs";


/**
 * @summary LSAInformationWithdraw
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LSAInformationWithdraw  ::=  CHOICE {
 *     allLSAData    NULL,
 *     lsaIdentityList    LSAIdentityList }
 * ```
 */
export
type LSAInformationWithdraw =
    { allLSAData: NULL } /* CHOICE_ALT_ROOT */
    | { lsaIdentityList: LSAIdentityList } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_LSAInformationWithdraw: $.ASN1Decoder<LSAInformationWithdraw> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LSAInformationWithdraw
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LSAInformationWithdraw (el: _Element): LSAInformationWithdraw {
    if (!_cached_decoder_for_LSAInformationWithdraw) { _cached_decoder_for_LSAInformationWithdraw = $._decode_inextensible_choice<LSAInformationWithdraw>({
    "UNIVERSAL 5": [ "allLSAData", $._decodeNull ],
    "UNIVERSAL 16": [ "lsaIdentityList", _decode_LSAIdentityList ]
}); }
    return _cached_decoder_for_LSAInformationWithdraw(el);
}

let _cached_encoder_for_LSAInformationWithdraw: $.ASN1Encoder<LSAInformationWithdraw> | null = null;

/**
 * @summary Encodes a(n) LSAInformationWithdraw into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LSAInformationWithdraw, encoded as an ASN.1 Element.
 */
export
function _encode_LSAInformationWithdraw (value: LSAInformationWithdraw, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LSAInformationWithdraw) { _cached_encoder_for_LSAInformationWithdraw = $._encode_choice<LSAInformationWithdraw>({
    "allLSAData": $._encodeNull,
    "lsaIdentityList": _encode_LSAIdentityList,
}, $.BER); }
    return _cached_encoder_for_LSAInformationWithdraw(value, elGetter);
}


/* eslint-enable */
