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
import { ContextIdList, _decode_ContextIdList, _encode_ContextIdList } from "../MAP-MS-DataTypes/ContextIdList.ta.mjs";
// export { ContextIdList, _decode_ContextIdList, _encode_ContextIdList } from "../MAP-MS-DataTypes/ContextIdList.ta.mjs";


/**
 * @summary EPS_SubscriptionDataWithdraw
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPS-SubscriptionDataWithdraw  ::=  CHOICE {
 *     allEPS-Data    NULL,
 *     contextIdList    ContextIdList}
 * ```
 */
export
type EPS_SubscriptionDataWithdraw =
    { allEPS_Data: NULL } /* CHOICE_ALT_ROOT */
    | { contextIdList: ContextIdList } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_EPS_SubscriptionDataWithdraw: $.ASN1Decoder<EPS_SubscriptionDataWithdraw> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EPS_SubscriptionDataWithdraw
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EPS_SubscriptionDataWithdraw (el: _Element): EPS_SubscriptionDataWithdraw {
    if (!_cached_decoder_for_EPS_SubscriptionDataWithdraw) { _cached_decoder_for_EPS_SubscriptionDataWithdraw = $._decode_inextensible_choice<EPS_SubscriptionDataWithdraw>({
    "UNIVERSAL 5": [ "allEPS_Data", $._decodeNull ],
    "UNIVERSAL 16": [ "contextIdList", _decode_ContextIdList ]
}); }
    return _cached_decoder_for_EPS_SubscriptionDataWithdraw(el);
}

let _cached_encoder_for_EPS_SubscriptionDataWithdraw: $.ASN1Encoder<EPS_SubscriptionDataWithdraw> | null = null;

/**
 * @summary Encodes a(n) EPS_SubscriptionDataWithdraw into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EPS_SubscriptionDataWithdraw, encoded as an ASN.1 Element.
 */
export
function _encode_EPS_SubscriptionDataWithdraw (value: EPS_SubscriptionDataWithdraw, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EPS_SubscriptionDataWithdraw) { _cached_encoder_for_EPS_SubscriptionDataWithdraw = $._encode_choice<EPS_SubscriptionDataWithdraw>({
    "allEPS_Data": $._encodeNull,
    "contextIdList": _encode_ContextIdList,
}, $.BER); }
    return _cached_encoder_for_EPS_SubscriptionDataWithdraw(value, elGetter);
}


/* eslint-enable */
