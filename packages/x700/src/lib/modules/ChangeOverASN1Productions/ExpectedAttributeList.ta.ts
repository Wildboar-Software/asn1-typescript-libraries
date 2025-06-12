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
    ExpectedAttributeList_Item,
    _decode_ExpectedAttributeList_Item,
    _encode_ExpectedAttributeList_Item,
} from '../ChangeOverASN1Productions/ExpectedAttributeList-Item.ta.js';
export {
    ExpectedAttributeList_Item,
    _decode_ExpectedAttributeList_Item,
    _encode_ExpectedAttributeList_Item,
} from '../ChangeOverASN1Productions/ExpectedAttributeList-Item.ta.js';

/* START_OF_SYMBOL_DEFINITION ExpectedAttributeList */
/**
 * @summary ExpectedAttributeList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ExpectedAttributeList  ::=
 *   SET OF
 *     SEQUENCE {modifyOperator  [0] IMPLICIT ModifyOperator DEFAULT replace,
 *               attributeId     [1]  CMIP-ATTRIBUTE.&id({AttributeSet}),
 *               attributeValue
 *                 [2]  CMIP-ATTRIBUTE.&Value({AttributeSet}{@.attributeId})
 *                   OPTIONAL}
 * ```
 */
export type ExpectedAttributeList = ExpectedAttributeList_Item[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION ExpectedAttributeList */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ExpectedAttributeList */
let _cached_decoder_for_ExpectedAttributeList: $.ASN1Decoder<ExpectedAttributeList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ExpectedAttributeList */

/* START_OF_SYMBOL_DEFINITION _decode_ExpectedAttributeList */
/**
 * @summary Decodes an ASN.1 element into a(n) ExpectedAttributeList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ExpectedAttributeList} The decoded data structure.
 */
export function _decode_ExpectedAttributeList(el: _Element) {
    if (!_cached_decoder_for_ExpectedAttributeList) {
        _cached_decoder_for_ExpectedAttributeList = $._decodeSetOf<ExpectedAttributeList_Item>(
            () => _decode_ExpectedAttributeList_Item
        );
    }
    return _cached_decoder_for_ExpectedAttributeList(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ExpectedAttributeList */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ExpectedAttributeList */
let _cached_encoder_for_ExpectedAttributeList: $.ASN1Encoder<ExpectedAttributeList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ExpectedAttributeList */

/* START_OF_SYMBOL_DEFINITION _encode_ExpectedAttributeList */
/**
 * @summary Encodes a(n) ExpectedAttributeList into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExpectedAttributeList, encoded as an ASN.1 Element.
 */
export function _encode_ExpectedAttributeList(
    value: ExpectedAttributeList,
    elGetter: $.ASN1Encoder<ExpectedAttributeList>
) {
    if (!_cached_encoder_for_ExpectedAttributeList) {
        _cached_encoder_for_ExpectedAttributeList = $._encodeSetOf<ExpectedAttributeList_Item>(
            () => _encode_ExpectedAttributeList_Item,
            $.BER
        );
    }
    return _cached_encoder_for_ExpectedAttributeList(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ExpectedAttributeList */

/* eslint-enable */
