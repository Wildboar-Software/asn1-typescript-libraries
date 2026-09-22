/* eslint-disable */
import {
    INTEGER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ElementData, _decode_ElementData, _encode_ElementData } from "../RecordSyntax-generic/ElementData.ta.mjs";
// export { ElementData, _decode_ElementData, _encode_ElementData } from "../RecordSyntax-generic/ElementData.ta.mjs";
import { ElementMetaData, _decode_ElementMetaData, _encode_ElementMetaData } from "../RecordSyntax-generic/ElementMetaData.ta.mjs";
// export { ElementMetaData, _decode_ElementMetaData, _encode_ElementMetaData } from "../RecordSyntax-generic/ElementMetaData.ta.mjs";
import { Variant, _decode_Variant, _encode_Variant } from "../RecordSyntax-generic/Variant.ta.mjs";
// export { Variant, _decode_Variant, _encode_Variant } from "../RecordSyntax-generic/Variant.ta.mjs";


/**
 * @summary TaggedElement
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TaggedElement ::= SEQUENCE {
 *    tagType         [1] IMPLICIT INTEGER OPTIONAL,
 *                           -- If omitted, default should be supplied dynamically
 *                           -- by tagSet-M; otherwise it should be statically
 *                           -- specified by the schema.
 *    tagValue        [2] StringOrNumeric,
 *    tagOccurrence   [3] IMPLICIT INTEGER OPTIONAL,
 *                           -- Occurrence within the database record, and
 *                           -- relative to the parent. No default; if omitted,
 *                           -- target not telling or it is irrelevant.
 *    content         [4] ElementData,
 *    metaData        [5] IMPLICIT ElementMetaData OPTIONAL,
 *    appliedVariant  [6] IMPLICIT Variant OPTIONAL}
 * ```
 * 
 * @class
 */
export
class TaggedElement {
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
        readonly tagOccurrence: OPTIONAL<INTEGER>,
        /**
         * @summary `content`.
         * @public
         * @readonly
         */
        readonly content: ElementData,
        /**
         * @summary `metaData`.
         * @public
         * @readonly
         */
        readonly metaData: OPTIONAL<ElementMetaData>,
        /**
         * @summary `appliedVariant`.
         * @public
         * @readonly
         */
        readonly appliedVariant: OPTIONAL<Variant>
    ) {}

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
    /* FIXME: tagValue COULD_NOT_RESOLVE_TYPE_DEF */,
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
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.tagType === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.tagType, $.BER)),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_StringOrNumeric, $.BER)(value.tagValue, $.BER),
            /* IF_ABSENT  */ ((value.tagOccurrence === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeInteger, $.BER)(value.tagOccurrence, $.BER)),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 4, () => _encode_ElementData, $.BER)(value.content, $.BER),
            /* IF_ABSENT  */ ((value.metaData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_ElementMetaData, $.BER)(value.metaData, $.BER)),
            /* IF_ABSENT  */ ((value.appliedVariant === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_Variant, $.BER)(value.appliedVariant, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TaggedElement(value, elGetter);
}


/* eslint-enable */
