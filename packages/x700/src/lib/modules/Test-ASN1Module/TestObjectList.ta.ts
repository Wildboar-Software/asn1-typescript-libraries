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
    TestObjectList_Item,
    _decode_TestObjectList_Item,
    _encode_TestObjectList_Item,
} from '../Test-ASN1Module/TestObjectList-Item.ta';
export {
    TestObjectList_Item,
    _decode_TestObjectList_Item,
    _encode_TestObjectList_Item,
} from '../Test-ASN1Module/TestObjectList-Item.ta';

/* START_OF_SYMBOL_DEFINITION TestObjectList */
/**
 * @summary TestObjectList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TestObjectList  ::=
 *   SEQUENCE OF
 *     SEQUENCE {tOClass               OBJECT IDENTIFIER,
 *               tOInstance            [1]  ObjectInstance OPTIONAL,
 *               referenceTOInstance   [2]  ObjectInstance OPTIONAL,
 *               initialAttributeList  [3]  AttributeList OPTIONAL}
 * ```
 */
export type TestObjectList = TestObjectList_Item[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION TestObjectList */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TestObjectList */
let _cached_decoder_for_TestObjectList: $.ASN1Decoder<TestObjectList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TestObjectList */

/* START_OF_SYMBOL_DEFINITION _decode_TestObjectList */
/**
 * @summary Decodes an ASN.1 element into a(n) TestObjectList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TestObjectList} The decoded data structure.
 */
export function _decode_TestObjectList(el: _Element) {
    if (!_cached_decoder_for_TestObjectList) {
        _cached_decoder_for_TestObjectList = $._decodeSequenceOf<TestObjectList_Item>(
            () => _decode_TestObjectList_Item
        );
    }
    return _cached_decoder_for_TestObjectList(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TestObjectList */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TestObjectList */
let _cached_encoder_for_TestObjectList: $.ASN1Encoder<TestObjectList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TestObjectList */

/* START_OF_SYMBOL_DEFINITION _encode_TestObjectList */
/**
 * @summary Encodes a(n) TestObjectList into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TestObjectList, encoded as an ASN.1 Element.
 */
export function _encode_TestObjectList(
    value: TestObjectList,
    elGetter: $.ASN1Encoder<TestObjectList>
) {
    if (!_cached_encoder_for_TestObjectList) {
        _cached_encoder_for_TestObjectList = $._encodeSequenceOf<TestObjectList_Item>(
            () => _encode_TestObjectList_Item,
            $.BER
        );
    }
    return _cached_encoder_for_TestObjectList(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TestObjectList */

/* eslint-enable */
