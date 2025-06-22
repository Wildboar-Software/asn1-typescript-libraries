/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from '@wildboar/asn1/functional';
import {
    TestObjectList_Item,
    _decode_TestObjectList_Item,
    _encode_TestObjectList_Item,
} from '../Test-ASN1Module/TestObjectList-Item.ta.mjs';
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

let _cached_decoder_for_TestObjectList: $.ASN1Decoder<TestObjectList> | null = null;

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

let _cached_encoder_for_TestObjectList: $.ASN1Encoder<TestObjectList> | null = null;

/**
 * @summary Encodes a(n) TestObjectList into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
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


/* eslint-enable */
