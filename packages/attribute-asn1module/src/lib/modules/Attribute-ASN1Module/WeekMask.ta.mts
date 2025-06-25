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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { WeekMask_Item, _decode_WeekMask_Item, _encode_WeekMask_Item } from "../Attribute-ASN1Module/WeekMask-Item.ta.mjs";
/**
 * @summary WeekMask
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * WeekMask  ::= 
 *   SET OF
 *     SEQUENCE {daysOfWeek
 *                 BIT STRING {sunday(0), monday(1), tuesday(2), wednesday(3),
 *                             thursday(4), friday(5), saturday(6)}(SIZE (7)),
 *               intervalsOfDay  IntervalsOfDay}
 * ```
 */
export
type WeekMask = WeekMask_Item[]; // SetOfType

let _cached_decoder_for_WeekMask: $.ASN1Decoder<WeekMask> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) WeekMask
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {WeekMask} The decoded data structure.
 */
export
function _decode_WeekMask (el: _Element): WeekMask {
    if (!_cached_decoder_for_WeekMask) { _cached_decoder_for_WeekMask = $._decodeSetOf<WeekMask_Item>(() => _decode_WeekMask_Item); }
    return _cached_decoder_for_WeekMask(el);
}

let _cached_encoder_for_WeekMask: $.ASN1Encoder<WeekMask> | null = null;

/**
 * @summary Encodes a(n) WeekMask into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The WeekMask, encoded as an ASN.1 Element.
 */
export
function _encode_WeekMask (value: WeekMask, elGetter: $.ASN1Encoder<WeekMask>): _Element {
    if (!_cached_encoder_for_WeekMask) { _cached_encoder_for_WeekMask = $._encodeSetOf<WeekMask_Item>(() => _encode_WeekMask_Item, $.BER); }
    return _cached_encoder_for_WeekMask(value, elGetter);
}


/* eslint-enable */
