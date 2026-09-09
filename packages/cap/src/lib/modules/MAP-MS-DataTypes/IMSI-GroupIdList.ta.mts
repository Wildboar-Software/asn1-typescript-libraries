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
import { IMSI_GroupId, _decode_IMSI_GroupId, _encode_IMSI_GroupId } from "../MAP-MS-DataTypes/IMSI-GroupId.ta.mjs";
// export { IMSI_GroupId, _decode_IMSI_GroupId, _encode_IMSI_GroupId } from "../MAP-MS-DataTypes/IMSI-GroupId.ta.mjs";


/**
 * @summary IMSI_GroupIdList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IMSI-GroupIdList  ::=  SEQUENCE SIZE (1..50) OF
 *     IMSI-GroupId
 * ```
 */
export
type IMSI_GroupIdList = IMSI_GroupId[]; // SequenceOfType

let _cached_decoder_for_IMSI_GroupIdList: $.ASN1Decoder<IMSI_GroupIdList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IMSI_GroupIdList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IMSI_GroupIdList (el: _Element): IMSI_GroupIdList {
    if (!_cached_decoder_for_IMSI_GroupIdList) { _cached_decoder_for_IMSI_GroupIdList = $._decodeSequenceOf<IMSI_GroupId>(() => _decode_IMSI_GroupId); }
    return _cached_decoder_for_IMSI_GroupIdList(el);
}

let _cached_encoder_for_IMSI_GroupIdList: $.ASN1Encoder<IMSI_GroupIdList> | null = null;

/**
 * @summary Encodes a(n) IMSI_GroupIdList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IMSI_GroupIdList, encoded as an ASN.1 Element.
 */
export
function _encode_IMSI_GroupIdList (value: IMSI_GroupIdList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IMSI_GroupIdList) { _cached_encoder_for_IMSI_GroupIdList = $._encodeSequenceOf<IMSI_GroupId>(() => _encode_IMSI_GroupId, $.BER); }
    return _cached_encoder_for_IMSI_GroupIdList(value, elGetter);
}


/* eslint-enable */
