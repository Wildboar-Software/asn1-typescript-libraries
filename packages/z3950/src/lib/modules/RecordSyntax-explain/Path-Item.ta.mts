/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Path_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Path-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class Path_Item {
    constructor (
        /**
         * @summary `tagType`.
         * @public
         * @readonly
         */
        readonly tagType: INTEGER,
        /**
         * @summary `tagValue`.
         * @public
         * @readonly
         */
        readonly tagValue: StringOrNumeric
    ) {}

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
    /* FIXME: tagValue COULD_NOT_RESOLVE_TYPE_DEF */
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
    let tagType!: INTEGER;
    let tagValue!: StringOrNumeric;
    tagType = $._decode_implicit<INTEGER>(() => $._decodeInteger)(sequence[0]);
    tagValue = $._decode_explicit<StringOrNumeric>(() => _decode_StringOrNumeric)(sequence[1]);
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
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.tagType, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_StringOrNumeric, $.BER)(value.tagValue, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Path_Item(value, elGetter);
}


/* eslint-enable */
