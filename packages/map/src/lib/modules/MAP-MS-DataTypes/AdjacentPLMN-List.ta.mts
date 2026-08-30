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
import { PLMN_Id, _decode_PLMN_Id, _encode_PLMN_Id } from "../MAP-CommonDataTypes/PLMN-Id.ta.mjs";
// export { PLMN_Id, _decode_PLMN_Id, _encode_PLMN_Id } from "../MAP-CommonDataTypes/PLMN-Id.ta.mjs";


/**
 * @summary AdjacentPLMN_List
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AdjacentPLMN-List  ::=  SEQUENCE SIZE (1..50) OF
 *     PLMN-Id
 * ```
 */
export
type AdjacentPLMN_List = PLMN_Id[]; // SequenceOfType

let _cached_decoder_for_AdjacentPLMN_List: $.ASN1Decoder<AdjacentPLMN_List> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AdjacentPLMN_List
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AdjacentPLMN_List (el: _Element): AdjacentPLMN_List {
    if (!_cached_decoder_for_AdjacentPLMN_List) { _cached_decoder_for_AdjacentPLMN_List = $._decodeSequenceOf<PLMN_Id>(() => _decode_PLMN_Id); }
    return _cached_decoder_for_AdjacentPLMN_List(el);
}

let _cached_encoder_for_AdjacentPLMN_List: $.ASN1Encoder<AdjacentPLMN_List> | null = null;

/**
 * @summary Encodes a(n) AdjacentPLMN_List into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AdjacentPLMN_List, encoded as an ASN.1 Element.
 */
export
function _encode_AdjacentPLMN_List (value: AdjacentPLMN_List, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AdjacentPLMN_List) { _cached_encoder_for_AdjacentPLMN_List = $._encodeSequenceOf<PLMN_Id>(() => _encode_PLMN_Id, $.BER); }
    return _cached_encoder_for_AdjacentPLMN_List(value, elGetter);
}


/* eslint-enable */
