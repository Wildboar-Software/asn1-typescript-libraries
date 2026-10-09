/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { OccurrenceByAttributes_Item, _decode_OccurrenceByAttributes_Item, _encode_OccurrenceByAttributes_Item } from "../Z39-50-APDU-2001/OccurrenceByAttributes-Item.ta.mjs";
// export { OccurrenceByAttributes_Item, _decode_OccurrenceByAttributes_Item, _encode_OccurrenceByAttributes_Item } from "../Z39-50-APDU-2001/OccurrenceByAttributes-Item.ta.mjs";


/**
 * @summary OccurrenceByAttributes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OccurrenceByAttributes  ::=  SEQUENCE OF SEQUENCE {
 *     attributes      [1]     AttributeList,
 *     occurrences     CHOICE {
 *         global          [2] INTEGER,
 *         byDatabase      [3] IMPLICIT SEQUENCE OF SEQUENCE {
 *             db              DatabaseName,
 *             num             [1] IMPLICIT INTEGER OPTIONAL,
 *             otherDbInfo     OtherInformation OPTIONAL
 *         }
 *     } OPTIONAL,
 *     otherOccurInfo              OtherInformation OPTIONAL
 * }
 * ```
 */
export
type OccurrenceByAttributes = OccurrenceByAttributes_Item[]; // SequenceOfType

let _cached_decoder_for_OccurrenceByAttributes: $.ASN1Decoder<OccurrenceByAttributes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OccurrenceByAttributes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_OccurrenceByAttributes (el: _Element): OccurrenceByAttributes {
    if (!_cached_decoder_for_OccurrenceByAttributes) { _cached_decoder_for_OccurrenceByAttributes = $._decodeSequenceOf<OccurrenceByAttributes_Item>(() => _decode_OccurrenceByAttributes_Item); }
    return _cached_decoder_for_OccurrenceByAttributes(el);
}

let _cached_encoder_for_OccurrenceByAttributes: $.ASN1Encoder<OccurrenceByAttributes> | null = null;

/**
 * @summary Encodes a(n) OccurrenceByAttributes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OccurrenceByAttributes, encoded as an ASN.1 Element.
 */
export
function _encode_OccurrenceByAttributes (value: OccurrenceByAttributes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_OccurrenceByAttributes) { _cached_encoder_for_OccurrenceByAttributes = $._encodeSequenceOf<OccurrenceByAttributes_Item>(() => _encode_OccurrenceByAttributes_Item, $.BER); }
    return _cached_encoder_for_OccurrenceByAttributes(value, elGetter);
}


/* eslint-enable */
