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
import { CSG_SubscriptionData, _decode_CSG_SubscriptionData, _encode_CSG_SubscriptionData } from "../MAP-MS-DataTypes/CSG-SubscriptionData.ta.mjs";
// export { CSG_SubscriptionData, _decode_CSG_SubscriptionData, _encode_CSG_SubscriptionData } from "../MAP-MS-DataTypes/CSG-SubscriptionData.ta.mjs";


/**
 * @summary VPLMN_CSG_SubscriptionDataList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VPLMN-CSG-SubscriptionDataList  ::=  SEQUENCE SIZE (1..50) OF
 *     CSG-SubscriptionData
 * ```
 */
export
type VPLMN_CSG_SubscriptionDataList = CSG_SubscriptionData[]; // SequenceOfType

let _cached_decoder_for_VPLMN_CSG_SubscriptionDataList: $.ASN1Decoder<VPLMN_CSG_SubscriptionDataList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) VPLMN_CSG_SubscriptionDataList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_VPLMN_CSG_SubscriptionDataList (el: _Element): VPLMN_CSG_SubscriptionDataList {
    if (!_cached_decoder_for_VPLMN_CSG_SubscriptionDataList) { _cached_decoder_for_VPLMN_CSG_SubscriptionDataList = $._decodeSequenceOf<CSG_SubscriptionData>(() => _decode_CSG_SubscriptionData); }
    return _cached_decoder_for_VPLMN_CSG_SubscriptionDataList(el);
}

let _cached_encoder_for_VPLMN_CSG_SubscriptionDataList: $.ASN1Encoder<VPLMN_CSG_SubscriptionDataList> | null = null;

/**
 * @summary Encodes a(n) VPLMN_CSG_SubscriptionDataList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The VPLMN_CSG_SubscriptionDataList, encoded as an ASN.1 Element.
 */
export
function _encode_VPLMN_CSG_SubscriptionDataList (value: VPLMN_CSG_SubscriptionDataList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_VPLMN_CSG_SubscriptionDataList) { _cached_encoder_for_VPLMN_CSG_SubscriptionDataList = $._encodeSequenceOf<CSG_SubscriptionData>(() => _encode_CSG_SubscriptionData, $.BER); }
    return _cached_encoder_for_VPLMN_CSG_SubscriptionDataList(value, elGetter);
}


/* eslint-enable */
