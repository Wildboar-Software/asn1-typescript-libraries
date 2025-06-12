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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    CallBackInfoList_Item,
    _decode_CallBackInfoList_Item,
    _encode_CallBackInfoList_Item,
} from '../X790ASN1Module/CallBackInfoList-Item.ta.js';
export {
    CallBackInfoList_Item,
    _decode_CallBackInfoList_Item,
    _encode_CallBackInfoList_Item,
} from '../X790ASN1Module/CallBackInfoList-Item.ta.js';

/* START_OF_SYMBOL_DEFINITION CallBackInfoList */
/**
 * @summary CallBackInfoList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CallBackInfoList  ::=
 *   SET OF
 *     CHOICE {escalation      [0]  PersonReach,
 *             beforeAutoTest  [1]  PersonReach,
 *             afterCleared    [2]  PersonReach,
 *             ...}
 * ```
 */
export type CallBackInfoList = CallBackInfoList_Item[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION CallBackInfoList */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CallBackInfoList */
let _cached_decoder_for_CallBackInfoList: $.ASN1Decoder<CallBackInfoList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CallBackInfoList */

/* START_OF_SYMBOL_DEFINITION _decode_CallBackInfoList */
/**
 * @summary Decodes an ASN.1 element into a(n) CallBackInfoList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CallBackInfoList} The decoded data structure.
 */
export function _decode_CallBackInfoList(el: _Element) {
    if (!_cached_decoder_for_CallBackInfoList) {
        _cached_decoder_for_CallBackInfoList = $._decodeSetOf<CallBackInfoList_Item>(
            () => _decode_CallBackInfoList_Item
        );
    }
    return _cached_decoder_for_CallBackInfoList(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CallBackInfoList */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CallBackInfoList */
let _cached_encoder_for_CallBackInfoList: $.ASN1Encoder<CallBackInfoList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CallBackInfoList */

/* START_OF_SYMBOL_DEFINITION _encode_CallBackInfoList */
/**
 * @summary Encodes a(n) CallBackInfoList into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallBackInfoList, encoded as an ASN.1 Element.
 */
export function _encode_CallBackInfoList(
    value: CallBackInfoList,
    elGetter: $.ASN1Encoder<CallBackInfoList>
) {
    if (!_cached_encoder_for_CallBackInfoList) {
        _cached_encoder_for_CallBackInfoList = $._encodeSetOf<CallBackInfoList_Item>(
            () => _encode_CallBackInfoList_Item,
            $.BER
        );
    }
    return _cached_encoder_for_CallBackInfoList(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CallBackInfoList */

/* eslint-enable */
