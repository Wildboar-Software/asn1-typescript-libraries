/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TagPath_Item, _decode_TagPath_Item, _encode_TagPath_Item } from "../RecordSyntax-generic/TagPath-Item.ta.mjs";


/**
 * @summary TagPath
 * @description
 * 
 * Path of an element inside a GRS-1 record (ANSI/NISO Z39.50-2003, ASN1.6).
 * Used when one element points at another in the same record. Each step is a
 * tag. Unlike an eSpec-2 path, there is no wildcard and no schema id.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TagPath  ::=  SEQUENCE OF SEQUENCE {
 *     tagType         [1] IMPLICIT INTEGER OPTIONAL,
 *     tagValue        [2]     StringOrNumeric,
 *     tagOccurrence   [3] IMPLICIT INTEGER OPTIONAL
 * }
 * ```
 */
export
type TagPath = TagPath_Item[]; // SequenceOfType

let _cached_decoder_for_TagPath: $.ASN1Decoder<TagPath> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TagPath
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TagPath (el: _Element): TagPath {
    if (!_cached_decoder_for_TagPath) { _cached_decoder_for_TagPath = $._decodeSequenceOf<TagPath_Item>(() => _decode_TagPath_Item); }
    return _cached_decoder_for_TagPath(el);
}

let _cached_encoder_for_TagPath: $.ASN1Encoder<TagPath> | null = null;

/**
 * @summary Encodes a(n) TagPath into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TagPath, encoded as an ASN.1 Element.
 */
export
function _encode_TagPath (value: TagPath, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TagPath) { _cached_encoder_for_TagPath = $._encodeSequenceOf<TagPath_Item>(() => _encode_TagPath_Item, $.BER); }
    return _cached_encoder_for_TagPath(value, elGetter);
}


/* eslint-enable */
