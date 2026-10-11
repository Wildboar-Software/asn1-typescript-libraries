/* eslint-disable */
import {
    INTEGER,
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { StringOrNumeric, _decode_StringOrNumeric, _encode_StringOrNumeric } from "../Z39-50-APDU-2001/StringOrNumeric.ta.mjs";


/**
 * @summary Path_Item
 * @description
 * One node of a Path. A tag type qualifies a tag value. Tag types 1, 2, and 3
 * mean tagSet-M, tagSet-G, and a tag defined locally by the server. Other tag
 * types are assigned by the schema. ANSI/NISO Z39.50-2003 §2 (Tag, TagType,
 * TagValue); Appendix TAG.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Path-Item ::= SEQUENCE {
 *     tagType [1] IMPLICIT INTEGER,
 *     tagValue [2] StringOrNumeric
 * }
 * ```
 * 
 * @class
 */
export
class Path_Item {
    /**
     * @summary `tagType`.
     * @description
     * Integer shorthand for the tag set that qualifies the tag value. The
     * schema maps tag types to tag sets. Types 1 through 3 are tagSet-M,
     * tagSet-G, and locally defined tags. ANSI/NISO Z39.50-2003 §2 (TagType);
     * Appendix TAG.
     * @public
     * @readonly
     */
    readonly tagType: INTEGER;
    /**
     * @summary `tagValue`.
     * @description
     * Identifier of this node. It may be an integer or a character string. The
     * tag type qualifies it. ANSI/NISO Z39.50-2003 §2 (TagValue); Appendix TAG.
     * @public
     * @readonly
     */
    readonly tagValue: StringOrNumeric;

    constructor (
        tagType: INTEGER,
        tagValue: StringOrNumeric
    ) {
        this.tagType = tagType;
        this.tagValue = tagValue;
    }

    /**
     * @summary Restructures an object into a Path_Item
     * @description
     * 
     * This takes an `object` and converts it to a `Path_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Path_Item`.
     * @returns {Path_Item}
     */
    public static _from_object (_o: { [_K in keyof (Path_Item)]: (Path_Item)[_K] }): Path_Item {
        return new Path_Item(_o.tagType, _o.tagValue);
    }


}

/**
 * @summary The Leading Root Component Types of Path_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Path_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("tagType", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("tagValue", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of Path_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Path_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Path_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Path_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Path_Item: $.ASN1Decoder<Path_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Path_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Path_Item (el: _Element): Path_Item {
    if (!_cached_decoder_for_Path_Item) { _cached_decoder_for_Path_Item = function (el: _Element): Path_Item {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("Path-Item contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "tagType";
    sequence[1].name = "tagValue";
    const tagType: INTEGER = $._decode_implicit<INTEGER>(() => $._decodeInteger)(sequence[0]);
    const tagValue: StringOrNumeric = $._decode_explicit<StringOrNumeric>(() => _decode_StringOrNumeric)(sequence[1]);
    return new Path_Item(
        tagType,
        tagValue,

    );
}; }
    return _cached_decoder_for_Path_Item(el);
}

let _cached_encoder_for_Path_Item: $.ASN1Encoder<Path_Item> | null = null;

/**
 * @summary Encodes a(n) Path_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Path_Item, encoded as an ASN.1 Element.
 */
export
function _encode_Path_Item (value: Path_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Path_Item) { _cached_encoder_for_Path_Item = function (value: Path_Item, elGetter: $.ASN1Encoder<Path_Item>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.tagType, $.BER),
        /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_StringOrNumeric, $.BER)(value.tagValue, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_Path_Item(value, elGetter);
}


/* eslint-enable */
