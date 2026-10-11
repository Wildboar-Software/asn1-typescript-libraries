/* eslint-disable */
import {
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TagPath_Item_specificTag, _decode_TagPath_Item_specificTag, _encode_TagPath_Item_specificTag } from "../ElementSpecification-eSpec-2/TagPath-Item-specificTag.ta.mjs";
import { Occurrences, _decode_Occurrences, _encode_Occurrences } from "../ElementSpecification-eSpec-2/Occurrences.ta.mjs";


/**
 * @summary TagPath_Item
 * @description
 * 
 * One step of an eSpec-2 tag path (ANSI/NISO Z39.50-2003, RET.3.1.1.4,
 * ASN1.13).
 * 
 * `specificTag` names one tag. `wildThing` selects the Nth element at this
 * level no matter what its tag is. Occurrence `all` selects every element at
 * this level (comment 4). The path `1/2` plus wildThing occurrence 3 is the
 * third child of node 1/2 (RET.3.1.1.4.1).
 * 
 * `wildPath` matches any run of tags, at this level or below, such that the
 * next step of this path follows that run. It cannot be the last step. Use it
 * to collect one known tag at any depth, such as every caption (RET.3.1.1.4.2,
 * comment 5).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TagPath-Item ::= CHOICE {
 *     specificTag [1] IMPLICIT SEQUENCE {
 *         -- The following line, schemaId is the
 *         -- only difference in this definition from that of eSpec-1.
 *         schemaId [0] IMPLICIT OBJECT IDENTIFIER OPTIONAL,
 *         -- see comment 3
 *         tagType [1] IMPLICIT INTEGER OPTIONAL,
 *         -- If omitted, then 'defaultTagType' (above) applies,
 *         -- if supplied, and if not supplied, then default
 *         -- listed in schema applies
 *         tagValue [2] StringOrNumeric,
 *         occurrence [3] Occurrences OPTIONAL  -- default is "first occurrence"
 *     },
 *     wildThing [2] Occurrences,
 *     -- See comment 4
 *     wildPath [3] IMPLICIT NULL  -- See comment 5.
 * }
 * ```
 */
export
type TagPath_Item =
    { specificTag: TagPath_Item_specificTag } /* CHOICE_ALT_ROOT */
    | { wildThing: Occurrences } /* CHOICE_ALT_ROOT */
    | { wildPath: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_TagPath_Item: $.ASN1Decoder<TagPath_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TagPath_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TagPath_Item (el: _Element): TagPath_Item {
    if (!_cached_decoder_for_TagPath_Item) { _cached_decoder_for_TagPath_Item = $._decode_inextensible_choice<TagPath_Item>({
    "CONTEXT 1": [ "specificTag", $._decode_implicit<TagPath_Item_specificTag>(() => _decode_TagPath_Item_specificTag) ],
    "CONTEXT 2": [ "wildThing", $._decode_explicit<Occurrences>(() => _decode_Occurrences) ],
    "CONTEXT 3": [ "wildPath", $._decode_implicit<NULL>(() => $._decodeNull) ]
}); }
    return _cached_decoder_for_TagPath_Item(el);
}

let _cached_encoder_for_TagPath_Item: $.ASN1Encoder<TagPath_Item> | null = null;

/**
 * @summary Encodes a(n) TagPath_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TagPath_Item, encoded as an ASN.1 Element.
 */
export
function _encode_TagPath_Item (value: TagPath_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TagPath_Item) { _cached_encoder_for_TagPath_Item = $._encode_choice<TagPath_Item>({
    "specificTag": $._encode_implicit(_TagClass.context, 1, () => _encode_TagPath_Item_specificTag, $.BER),
    "wildThing": $._encode_explicit(_TagClass.context, 2, () => _encode_Occurrences, $.BER),
    "wildPath": $._encode_implicit(_TagClass.context, 3, () => $._encodeNull, $.BER),
}, $.BER); }
    return _cached_encoder_for_TagPath_Item(value, elGetter);
}


/* eslint-enable */
