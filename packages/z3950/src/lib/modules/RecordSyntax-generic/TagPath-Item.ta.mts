/* eslint-disable */
import {
    INTEGER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { StringOrNumeric, _decode_StringOrNumeric, _encode_StringOrNumeric } from "../Z39-50-APDU-2001/StringOrNumeric.ta.mjs";


/**
 * @summary TagPath_Item
 * @description
 * 
 * One step of a GRS-1 tag path (ANSI/NISO Z39.50-2003, ASN1.6, RET.2.1.5). The
 * triple matches a tagged element: tag type, tag value, and occurrence.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TagPath-Item ::= SEQUENCE {
 *     tagType [1] IMPLICIT INTEGER OPTIONAL,
 *     tagValue [2] StringOrNumeric,
 *     tagOccurrence [3] IMPLICIT INTEGER OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class TagPath_Item {
    /**
     * @summary `tagType`.
     * @description
     * 
     * Tag-set shorthand for this step. Omitted, it is filled the same way as on
     * a tagged element: the tagSet-M default in the record, otherwise the
     * schema default (ASN1.6, Appendix TAG).
     * @public
     * @readonly
     */
    readonly tagType: OPTIONAL<INTEGER>;
    /**
     * @summary `tagValue`.
     * @description
     * 
     * Element name at this step, an integer or a string (RET.2.1.2).
     * @public
     * @readonly
     */
    readonly tagValue: StringOrNumeric;
    /**
     * @summary `tagOccurrence`.
     * @description
     * 
     * 1-based occurrence of this tag among siblings. On a tagged element,
     * omitting it means the server is not saying, and there is no default
     * (ASN1.6). The path uses that same triple.
     * @public
     * @readonly
     */
    readonly tagOccurrence: OPTIONAL<INTEGER>;

    constructor (
        tagType: OPTIONAL<INTEGER>,
        tagValue: StringOrNumeric,
        tagOccurrence: OPTIONAL<INTEGER>
    ) {
        this.tagType = tagType;
        this.tagValue = tagValue;
        this.tagOccurrence = tagOccurrence;
    }

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
    new $.ComponentSpec("tagValue", false, $.hasTag(_TagClass.context, 2)),
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
    const _components: _Element[] = new Array(3);
    let _components_i = 0;
    if (value.tagType !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.tagType, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_StringOrNumeric, $.BER)(value.tagValue, $.BER);
    if (value.tagOccurrence !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeInteger, $.BER)(value.tagOccurrence, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_TagPath_Item(value, elGetter);
}


/* eslint-enable */
