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
    ModificationList_Item,
    _decode_ModificationList_Item,
    _encode_ModificationList_Item,
} from '../CSModule/ModificationList-Item.ta.js';
export {
    ModificationList_Item,
    _decode_ModificationList_Item,
    _encode_ModificationList_Item,
} from '../CSModule/ModificationList-Item.ta.js';

/* START_OF_SYMBOL_DEFINITION ModificationList */
/**
 * @summary ModificationList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ModificationList  ::=
 *   SET OF
 *     SEQUENCE {modifyOperator  [2] IMPLICIT ModifyOperator DEFAULT replace,
 *               attributeId     TYPE-IDENTIFIER.&id({ModificationLists}),
 *               attributeValue
 *                 TYPE-IDENTIFIER.&Type({ModificationLists}{@.attributeId})
 *                   OPTIONAL}
 * ```
 */
export type ModificationList = ModificationList_Item[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION ModificationList */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ModificationList */
let _cached_decoder_for_ModificationList: $.ASN1Decoder<ModificationList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ModificationList */

/* START_OF_SYMBOL_DEFINITION _decode_ModificationList */
/**
 * @summary Decodes an ASN.1 element into a(n) ModificationList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ModificationList} The decoded data structure.
 */
export function _decode_ModificationList(el: _Element) {
    if (!_cached_decoder_for_ModificationList) {
        _cached_decoder_for_ModificationList = $._decodeSetOf<ModificationList_Item>(
            () => _decode_ModificationList_Item
        );
    }
    return _cached_decoder_for_ModificationList(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ModificationList */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ModificationList */
let _cached_encoder_for_ModificationList: $.ASN1Encoder<ModificationList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ModificationList */

/* START_OF_SYMBOL_DEFINITION _encode_ModificationList */
/**
 * @summary Encodes a(n) ModificationList into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ModificationList, encoded as an ASN.1 Element.
 */
export function _encode_ModificationList(
    value: ModificationList,
    elGetter: $.ASN1Encoder<ModificationList>
) {
    if (!_cached_encoder_for_ModificationList) {
        _cached_encoder_for_ModificationList = $._encodeSetOf<ModificationList_Item>(
            () => _encode_ModificationList_Item,
            $.BER
        );
    }
    return _cached_encoder_for_ModificationList(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ModificationList */

/* eslint-enable */
