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
import { ExternalClient, _decode_ExternalClient, _encode_ExternalClient } from "../MAP-MS-DataTypes/ExternalClient.ta.mjs";


import { maxNumOfExternalClient } from "./maxNumOfExternalClient.va.mjs";

/**
 * @summary ExternalClientList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ExternalClientList  ::=  SEQUENCE SIZE (0..maxNumOfExternalClient) OF
 *     ExternalClient
 * ```
 */
export
type ExternalClientList = ExternalClient[]; // SequenceOfType

let _cached_decoder_for_ExternalClientList: $.ASN1Decoder<ExternalClientList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ExternalClientList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ExternalClientList (el: _Element): ExternalClientList {
    if (!_cached_decoder_for_ExternalClientList) { _cached_decoder_for_ExternalClientList = $._decodeSequenceOf<ExternalClient>(() => _decode_ExternalClient); }
    const value = _cached_decoder_for_ExternalClientList(el);
    if (value.length < 0 || value.length > maxNumOfExternalClient) {
        throw new ASN1SizeError("ExternalClientList violates SIZE constraint");
    }
    return value;
}

let _cached_encoder_for_ExternalClientList: $.ASN1Encoder<ExternalClientList> | null = null;

/**
 * @summary Encodes a(n) ExternalClientList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExternalClientList, encoded as an ASN.1 Element.
 */
export
function _encode_ExternalClientList (value: ExternalClientList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ExternalClientList) { _cached_encoder_for_ExternalClientList = $._encodeSequenceOf<ExternalClient>(() => _encode_ExternalClient, $.BER); }
    return _cached_encoder_for_ExternalClientList(value, elGetter);
}


/* eslint-enable */
