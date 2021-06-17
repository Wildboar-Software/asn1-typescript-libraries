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
import * as $ from 'asn1-ts/dist/node/functional';
import {
    DateTranslationList_Item,
    _decode_DateTranslationList_Item,
    _encode_DateTranslationList_Item,
} from '../Schedulerev1-ASN1Module/DateTranslationList-Item.ta';
export {
    DateTranslationList_Item,
    _decode_DateTranslationList_Item,
    _encode_DateTranslationList_Item,
} from '../Schedulerev1-ASN1Module/DateTranslationList-Item.ta';

/* START_OF_SYMBOL_DEFINITION DateTranslationList */
/**
 * @summary DateTranslationList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DateTranslationList  ::=
 *   SET OF SEQUENCE {date       [1]  Date,
 *                    typeOfDay  [2]  TypeOfDay}
 * ```
 */
export type DateTranslationList = DateTranslationList_Item[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION DateTranslationList */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DateTranslationList */
let _cached_decoder_for_DateTranslationList: $.ASN1Decoder<DateTranslationList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DateTranslationList */

/* START_OF_SYMBOL_DEFINITION _decode_DateTranslationList */
/**
 * @summary Decodes an ASN.1 element into a(n) DateTranslationList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DateTranslationList} The decoded data structure.
 */
export function _decode_DateTranslationList(el: _Element) {
    if (!_cached_decoder_for_DateTranslationList) {
        _cached_decoder_for_DateTranslationList = $._decodeSetOf<DateTranslationList_Item>(
            () => _decode_DateTranslationList_Item
        );
    }
    return _cached_decoder_for_DateTranslationList(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DateTranslationList */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DateTranslationList */
let _cached_encoder_for_DateTranslationList: $.ASN1Encoder<DateTranslationList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DateTranslationList */

/* START_OF_SYMBOL_DEFINITION _encode_DateTranslationList */
/**
 * @summary Encodes a(n) DateTranslationList into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DateTranslationList, encoded as an ASN.1 Element.
 */
export function _encode_DateTranslationList(
    value: DateTranslationList,
    elGetter: $.ASN1Encoder<DateTranslationList>
) {
    if (!_cached_encoder_for_DateTranslationList) {
        _cached_encoder_for_DateTranslationList = $._encodeSetOf<DateTranslationList_Item>(
            () => _encode_DateTranslationList_Item,
            $.BER
        );
    }
    return _cached_encoder_for_DateTranslationList(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DateTranslationList */

/* eslint-enable */
