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
import { MSISDN_BS, _decode_MSISDN_BS, _encode_MSISDN_BS } from "../MAP-MS-DataTypes/MSISDN-BS.ta.mjs";
// export { MSISDN_BS, _decode_MSISDN_BS, _encode_MSISDN_BS } from "../MAP-MS-DataTypes/MSISDN-BS.ta.mjs";


/**
 * @summary MSISDN_BS_List
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MSISDN-BS-List  ::=  SEQUENCE SIZE (1..maxNumOfMSISDN) OF
 *     MSISDN-BS
 * ```
 */
export
type MSISDN_BS_List = MSISDN_BS[]; // SequenceOfType

let _cached_decoder_for_MSISDN_BS_List: $.ASN1Decoder<MSISDN_BS_List> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MSISDN_BS_List
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MSISDN_BS_List (el: _Element): MSISDN_BS_List {
    if (!_cached_decoder_for_MSISDN_BS_List) { _cached_decoder_for_MSISDN_BS_List = $._decodeSequenceOf<MSISDN_BS>(() => _decode_MSISDN_BS); }
    return _cached_decoder_for_MSISDN_BS_List(el);
}

let _cached_encoder_for_MSISDN_BS_List: $.ASN1Encoder<MSISDN_BS_List> | null = null;

/**
 * @summary Encodes a(n) MSISDN_BS_List into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MSISDN_BS_List, encoded as an ASN.1 Element.
 */
export
function _encode_MSISDN_BS_List (value: MSISDN_BS_List, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MSISDN_BS_List) { _cached_encoder_for_MSISDN_BS_List = $._encodeSequenceOf<MSISDN_BS>(() => _encode_MSISDN_BS, $.BER); }
    return _cached_encoder_for_MSISDN_BS_List(value, elGetter);
}


/* eslint-enable */
