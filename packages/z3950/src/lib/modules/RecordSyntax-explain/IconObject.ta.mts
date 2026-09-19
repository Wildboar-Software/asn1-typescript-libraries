/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IconObject_Item, _decode_IconObject_Item, _encode_IconObject_Item } from "../RecordSyntax-explain/IconObject-Item.ta.mjs";
// export { IconObject_Item, _decode_IconObject_Item, _encode_IconObject_Item } from "../RecordSyntax-explain/IconObject-Item.ta.mjs";


/**
 * @summary IconObject
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IconObject  ::=  SEQUENCE OF SEQUENCE{
 *          -- Note that the "SEQUENCE OF" is to allow alternative
 *          -- representations of the same Icon; it is not intended to allow
 *          -- multiple icons.
 *    bodyType  [1] CHOICE{
 *                    ianaType     [1] IMPLICIT InternationalString,
 *                    z3950type    [2] IMPLICIT InternationalString,
 *                    otherType    [3] IMPLICIT InternationalString},
 *    content   [2] IMPLICIT OCTET STRING}
 * ```
 */
export
type IconObject = IconObject_Item[]; // SequenceOfType

let _cached_decoder_for_IconObject: $.ASN1Decoder<IconObject> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IconObject
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IconObject (el: _Element): IconObject {
    if (!_cached_decoder_for_IconObject) { _cached_decoder_for_IconObject = $._decodeSequenceOf<IconObject_Item>(() => _decode_IconObject_Item); }
    return _cached_decoder_for_IconObject(el);
}

let _cached_encoder_for_IconObject: $.ASN1Encoder<IconObject> | null = null;

/**
 * @summary Encodes a(n) IconObject into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IconObject, encoded as an ASN.1 Element.
 */
export
function _encode_IconObject (value: IconObject, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IconObject) { _cached_encoder_for_IconObject = $._encodeSequenceOf<IconObject_Item>(() => _encode_IconObject_Item, $.BER); }
    return _cached_encoder_for_IconObject(value, elGetter);
}


/* eslint-enable */
