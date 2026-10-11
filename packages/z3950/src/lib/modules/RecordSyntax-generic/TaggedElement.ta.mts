/* eslint-disable */
import {
    INTEGER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { StringOrNumeric, _decode_StringOrNumeric, _encode_StringOrNumeric } from "../Z39-50-APDU-2001/StringOrNumeric.ta.mjs";
import { ElementData, _decode_ElementData, _encode_ElementData } from "../RecordSyntax-generic/ElementData.ta.mjs";
import { ElementMetaData, _decode_ElementMetaData, _encode_ElementMetaData } from "../RecordSyntax-generic/ElementMetaData.ta.mjs";
import { Variant, _decode_Variant, _encode_Variant } from "../RecordSyntax-generic/Variant.ta.mjs";


/**
 * @summary TaggedElement
 * @description
 * 
 * One node of a GRS-1 tree (ANSI/NISO Z39.50-2003, RET.3.2.1, ASN1.6). A leaf
 * carries data, an empty indication, or a diagnostic. A non-leaf carries its
 * subordinate nodes, recursively.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TaggedElement ::= SEQUENCE {
 *     tagType         [1] IMPLICIT INTEGER OPTIONAL,
 *     -- If omitted, default should be supplied dynamically by tagSet-M;
 *     -- otherwise it should be statically specified by the schema.
 *     tagValue        [2] StringOrNumeric,
 *     tagOccurrence   [3] IMPLICIT INTEGER OPTIONAL,
 *     -- Occurrence within the database record, and relative to the parent.
 *     -- No default; if omitted, server not telling or it is irrelevant.
 *     -- 1-based. Tags are numbered beginning with 1.
 *     content         [4] ElementData,
 *     metaData        [5] IMPLICIT ElementMetaData OPTIONAL,
 *     appliedVariant  [6] IMPLICIT Variant OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class TaggedElement {
    /**
     * @summary `tagType`.
     * @description
     * 
     * Tag-set shorthand for this element. If omitted, use the tagSet-M default
     * carried in the record; otherwise use the default stated by the schema
     * (ASN1.6). For every schema, 1 is tagSet-M, 2 is tagSet-G, and 3 is a tag
     * the server defines locally. From 4 upward the schema binds the integer to
     * a tag set (Appendix TAG).
     * @public
     * @readonly
     */
    readonly tagType: OPTIONAL<INTEGER>;
    /**
     * @summary `tagValue`.
     * @description
     * 
     * Element name in the tag set selected by the tag type. Either an integer
     * or a string (RET.2.1.1, RET.2.1.2). String tags are the usual form of a
     * locally defined tag (tag type 3).
     * @public
     * @readonly
     */
    readonly tagValue: StringOrNumeric;
    /**
     * @summary `tagOccurrence`.
     * @description
     * 
     * 1-based occurrence of this tag among siblings with the same parent. If
     * omitted, the server is not saying, or occurrence does not apply. There is
     * no default (ASN1.6).
     * @public
     * @readonly
     */
    readonly tagOccurrence: OPTIONAL<INTEGER>;
    /**
     * @summary `content`.
     * @description
     * 
     * What this node holds: data, an explicit empty reason, a diagnostic, or
     * the child nodes when the node is not a leaf (RET.3.2.1.2).
     * @public
     * @readonly
     */
    readonly content: ElementData;
    /**
     * @summary `metaData`.
     * @description
     * 
     * Metadata for this node. It may accompany data, or stand in place of data
     * when the request asked for none. Not defined when the node is absent,
     * empty, or a diagnostic (RET.3.2.3).
     * @public
     * @readonly
     */
    readonly metaData: OPTIONAL<ElementMetaData>;
    /**
     * @summary `appliedVariant`.
     * @description
     * 
     * Variant the server applied to this element (RET.2.3). Omit it when none
     * was applied. On a returned record, tagSet-M `defaultVariantSpec` covers
     * later elements that omit one (RET.3.4.1.2.4).
     * @public
     * @readonly
     */
    readonly appliedVariant: OPTIONAL<Variant>;

    constructor (
        tagType: OPTIONAL<INTEGER>,
        tagValue: StringOrNumeric,
        tagOccurrence: OPTIONAL<INTEGER>,
        content: ElementData,
        metaData: OPTIONAL<ElementMetaData>,
        appliedVariant: OPTIONAL<Variant>
    ) {
        this.tagType = tagType;
        this.tagValue = tagValue;
        this.tagOccurrence = tagOccurrence;
        this.content = content;
        this.metaData = metaData;
        this.appliedVariant = appliedVariant;
    }

    /**
     * @summary Restructures an object into a TaggedElement
     * @description
     * 
     * This takes an `object` and converts it to a `TaggedElement`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TaggedElement`.
     * @returns {TaggedElement}
     */
    public static _from_object (_o: { [_K in keyof (TaggedElement)]: (TaggedElement)[_K] }): TaggedElement {
        return new TaggedElement(_o.tagType, _o.tagValue, _o.tagOccurrence, _o.content, _o.metaData, _o.appliedVariant);
    }


}

/**
 * @summary The Leading Root Component Types of TaggedElement
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TaggedElement: $.ComponentSpec[] = [
    new $.ComponentSpec("tagType", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("tagValue", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("tagOccurrence", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("content", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("metaData", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("appliedVariant", true, $.hasTag(_TagClass.context, 6))
];

/**
 * @summary The Trailing Root Component Types of TaggedElement
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TaggedElement: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TaggedElement
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TaggedElement: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TaggedElement: $.ASN1Decoder<TaggedElement> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TaggedElement
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TaggedElement (el: _Element): TaggedElement {
    if (!_cached_decoder_for_TaggedElement) { _cached_decoder_for_TaggedElement = function (el: _Element): TaggedElement {
    let tagType: OPTIONAL<INTEGER>;
    let tagValue!: StringOrNumeric;
    let tagOccurrence: OPTIONAL<INTEGER>;
    let content!: ElementData;
    let metaData: OPTIONAL<ElementMetaData>;
    let appliedVariant: OPTIONAL<Variant>;
    const callbacks: $.DecodingMap = {
        "tagType": (_el: _Element): void => { tagType = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "tagValue": (_el: _Element): void => { tagValue = $._decode_explicit<StringOrNumeric>(() => _decode_StringOrNumeric)(_el); },
        "tagOccurrence": (_el: _Element): void => { tagOccurrence = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "content": (_el: _Element): void => { content = $._decode_explicit<ElementData>(() => _decode_ElementData)(_el); },
        "metaData": (_el: _Element): void => { metaData = $._decode_implicit<ElementMetaData>(() => _decode_ElementMetaData)(_el); },
        "appliedVariant": (_el: _Element): void => { appliedVariant = $._decode_implicit<Variant>(() => _decode_Variant)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TaggedElement,
        _extension_additions_list_spec_for_TaggedElement,
        _root_component_type_list_2_spec_for_TaggedElement,
        undefined,
    );
    return new TaggedElement(
        tagType,
        tagValue,
        tagOccurrence,
        content,
        metaData,
        appliedVariant
    );
}; }
    return _cached_decoder_for_TaggedElement(el);
}

let _cached_encoder_for_TaggedElement: $.ASN1Encoder<TaggedElement> | null = null;

/**
 * @summary Encodes a(n) TaggedElement into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TaggedElement, encoded as an ASN.1 Element.
 */
export
function _encode_TaggedElement (value: TaggedElement, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TaggedElement) { _cached_encoder_for_TaggedElement = function (value: TaggedElement, elGetter: $.ASN1Encoder<TaggedElement>): _Element {
    const _components: _Element[] = new Array(6);
    let _components_i = 0;
    if (value.tagType !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.tagType, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_StringOrNumeric, $.BER)(value.tagValue, $.BER);
    if (value.tagOccurrence !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeInteger, $.BER)(value.tagOccurrence, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 4, () => _encode_ElementData, $.BER)(value.content, $.BER);
    if (value.metaData !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_ElementMetaData, $.BER)(value.metaData, $.BER);
    }
    if (value.appliedVariant !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => _encode_Variant, $.BER)(value.appliedVariant, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_TaggedElement(value, elGetter);
}


/* eslint-enable */
