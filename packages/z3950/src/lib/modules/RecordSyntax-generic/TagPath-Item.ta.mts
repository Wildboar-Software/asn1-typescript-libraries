/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
    OPTIONAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TagPath_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TagPath-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class TagPath_Item {
    constructor (
        /**
         * @summary `tagType`.
         * @public
         * @readonly
         */
        readonly tagType: OPTIONAL<INTEGER>,
        /**
         * @summary `tagValue`.
         * @public
         * @readonly
         */
        readonly tagValue: StringOrNumeric,
        /**
         * @summary `tagOccurrence`.
         * @public
         * @readonly
         */
        readonly tagOccurrence: OPTIONAL<INTEGER>
    ) {}

    /**
     * @summary Restructures an object into a TagPath_Item
     * @description
     * 
     * This takes an `object` and converts it to a `TagPath_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TagPath_Item`.
     * @returns {TagPath_Item}
     */
    public static _from_object (_o: { [_K in keyof (TagPath_Item)]: (TagPath_Item)[_K] }): TagPath_Item {
        return new TagPath_Item(_o.tagType, _o.tagValue, _o.tagOccurrence);
    }


}

/**
 * @summary The Leading Root Component Types of TagPath_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TagPath_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("tagType", true, $.hasTag(_TagClass.context, 1)),
    /* FIXME: tagValue COULD_NOT_RESOLVE_TYPE_DEF */,
    new $.ComponentSpec("tagOccurrence", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of TagPath_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TagPath_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TagPath_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TagPath_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TagPath_Item: $.ASN1Decoder<TagPath_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TagPath_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TagPath_Item (el: _Element): TagPath_Item {
    if (!_cached_decoder_for_TagPath_Item) { _cached_decoder_for_TagPath_Item = function (el: _Element): TagPath_Item {
    let tagType: OPTIONAL<INTEGER>;
    let tagValue!: StringOrNumeric;
    let tagOccurrence: OPTIONAL<INTEGER>;
    const callbacks: $.DecodingMap = {
        "tagType": (_el: _Element): void => { tagType = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "tagValue": (_el: _Element): void => { tagValue = $._decode_explicit<StringOrNumeric>(() => _decode_StringOrNumeric)(_el); },
        "tagOccurrence": (_el: _Element): void => { tagOccurrence = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TagPath_Item,
        _extension_additions_list_spec_for_TagPath_Item,
        _root_component_type_list_2_spec_for_TagPath_Item,
        undefined,
    );
    return new TagPath_Item(
        tagType,
        tagValue,
        tagOccurrence
    );
}; }
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
    if (!_cached_encoder_for_TagPath_Item) { _cached_encoder_for_TagPath_Item = function (value: TagPath_Item, elGetter: $.ASN1Encoder<TagPath_Item>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.tagType === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.tagType, $.BER)),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_StringOrNumeric, $.BER)(value.tagValue, $.BER),
            /* IF_ABSENT  */ ((value.tagOccurrence === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeInteger, $.BER)(value.tagOccurrence, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TagPath_Item(value, elGetter);
}


/* eslint-enable */
