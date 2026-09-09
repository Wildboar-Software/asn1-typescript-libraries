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
import { AdjacentAccessRestrictionData, _decode_AdjacentAccessRestrictionData, _encode_AdjacentAccessRestrictionData } from "../MAP-MS-DataTypes/AdjacentAccessRestrictionData.ta.mjs";
// export { AdjacentAccessRestrictionData, _decode_AdjacentAccessRestrictionData, _encode_AdjacentAccessRestrictionData } from "../MAP-MS-DataTypes/AdjacentAccessRestrictionData.ta.mjs";


/**
 * @summary AdjacentAccessRestrictionDataList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AdjacentAccessRestrictionDataList  ::=  SEQUENCE SIZE (1..50) OF
 *     AdjacentAccessRestrictionData
 * ```
 */
export
type AdjacentAccessRestrictionDataList = AdjacentAccessRestrictionData[]; // SequenceOfType

let _cached_decoder_for_AdjacentAccessRestrictionDataList: $.ASN1Decoder<AdjacentAccessRestrictionDataList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AdjacentAccessRestrictionDataList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AdjacentAccessRestrictionDataList (el: _Element): AdjacentAccessRestrictionDataList {
    if (!_cached_decoder_for_AdjacentAccessRestrictionDataList) { _cached_decoder_for_AdjacentAccessRestrictionDataList = $._decodeSequenceOf<AdjacentAccessRestrictionData>(() => _decode_AdjacentAccessRestrictionData); }
    return _cached_decoder_for_AdjacentAccessRestrictionDataList(el);
}

let _cached_encoder_for_AdjacentAccessRestrictionDataList: $.ASN1Encoder<AdjacentAccessRestrictionDataList> | null = null;

/**
 * @summary Encodes a(n) AdjacentAccessRestrictionDataList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AdjacentAccessRestrictionDataList, encoded as an ASN.1 Element.
 */
export
function _encode_AdjacentAccessRestrictionDataList (value: AdjacentAccessRestrictionDataList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AdjacentAccessRestrictionDataList) { _cached_encoder_for_AdjacentAccessRestrictionDataList = $._encodeSequenceOf<AdjacentAccessRestrictionData>(() => _encode_AdjacentAccessRestrictionData, $.BER); }
    return _cached_encoder_for_AdjacentAccessRestrictionDataList(value, elGetter);
}


/* eslint-enable */
