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
import { LSAIdentity, _decode_LSAIdentity, _encode_LSAIdentity } from "../MAP-MS-DataTypes/LSAIdentity.ta.mjs";
// export { LSAIdentity, _decode_LSAIdentity, _encode_LSAIdentity } from "../MAP-MS-DataTypes/LSAIdentity.ta.mjs";


/**
 * @summary LSAIdentityList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LSAIdentityList  ::=  SEQUENCE SIZE (1..maxNumOfLSAs) OF
 *     LSAIdentity
 * ```
 */
export
type LSAIdentityList = LSAIdentity[]; // SequenceOfType

let _cached_decoder_for_LSAIdentityList: $.ASN1Decoder<LSAIdentityList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LSAIdentityList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LSAIdentityList (el: _Element): LSAIdentityList {
    if (!_cached_decoder_for_LSAIdentityList) { _cached_decoder_for_LSAIdentityList = $._decodeSequenceOf<LSAIdentity>(() => _decode_LSAIdentity); }
    return _cached_decoder_for_LSAIdentityList(el);
}

let _cached_encoder_for_LSAIdentityList: $.ASN1Encoder<LSAIdentityList> | null = null;

/**
 * @summary Encodes a(n) LSAIdentityList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LSAIdentityList, encoded as an ASN.1 Element.
 */
export
function _encode_LSAIdentityList (value: LSAIdentityList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LSAIdentityList) { _cached_encoder_for_LSAIdentityList = $._encodeSequenceOf<LSAIdentity>(() => _encode_LSAIdentity, $.BER); }
    return _cached_encoder_for_LSAIdentityList(value, elGetter);
}


/* eslint-enable */
