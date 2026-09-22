/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Path_Item, _decode_Path_Item, _encode_Path_Item } from "../RecordSyntax-explain/Path-Item.ta.mjs";
// export { Path_Item, _decode_Path_Item, _encode_Path_Item } from "../RecordSyntax-explain/Path-Item.ta.mjs";


/**
 * @summary Path
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Path  ::=  SEQUENCE OF SEQUENCE{
 *          tagType      [1] IMPLICIT INTEGER,
 *          tagValue     [2] StringOrNumeric}
 * ```
 */
export
type Path = Path_Item[]; // SequenceOfType

let _cached_decoder_for_Path: $.ASN1Decoder<Path> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Path
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Path (el: _Element): Path {
    if (!_cached_decoder_for_Path) { _cached_decoder_for_Path = $._decodeSequenceOf<Path_Item>(() => _decode_Path_Item); }
    return _cached_decoder_for_Path(el);
}

let _cached_encoder_for_Path: $.ASN1Encoder<Path> | null = null;

/**
 * @summary Encodes a(n) Path into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Path, encoded as an ASN.1 Element.
 */
export
function _encode_Path (value: Path, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Path) { _cached_encoder_for_Path = $._encodeSequenceOf<Path_Item>(() => _encode_Path_Item, $.BER); }
    return _cached_encoder_for_Path(value, elGetter);
}


/* eslint-enable */
