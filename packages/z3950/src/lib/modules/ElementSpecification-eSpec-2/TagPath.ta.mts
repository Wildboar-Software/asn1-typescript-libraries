/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TagPath_Item, _decode_TagPath_Item, _encode_TagPath_Item } from "../ElementSpecification-eSpec-2/TagPath-Item.ta.mjs";
// export { TagPath_Item, _decode_TagPath_Item, _encode_TagPath_Item } from "../ElementSpecification-eSpec-2/TagPath-Item.ta.mjs";


/**
 * @summary TagPath
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TagPath  ::=  SEQUENCE OF CHOICE {
 *     specificTag [1] IMPLICIT SEQUENCE {
 *         -- The following line, schemaId is the
 *         -- only difference in this definition from that of eSpec-1.
 *         schemaId    [0] IMPLICIT OBJECT IDENTIFIER OPTIONAL,
 *         -- see comment 3
 *         tagType     [1] IMPLICIT INTEGER OPTIONAL,
 *         -- If omitted, then 'defaultTagType' (above) applies,
 *         -- if supplied, and if not supplied, then default
 *         -- listed in schema applies
 *         tagValue    [2] StringOrNumeric,
 *         occurrence  [3] Occurrences OPTIONAL
 *         -- default is "first occurrence"
 *     },
 *     wildThing   [2] Occurrences,
 *     -- See comment 4
 *     wildPath    [3] IMPLICIT NULL
 *     -- See comment 5.
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
