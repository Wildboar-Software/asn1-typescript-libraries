/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CommonInfo, _decode_CommonInfo, _encode_CommonInfo } from "../RecordSyntax-explain/CommonInfo.ta.mjs";
// export { CommonInfo, _decode_CommonInfo, _encode_CommonInfo } from "../RecordSyntax-explain/CommonInfo.ta.mjs";
import { HumanString, _decode_HumanString, _encode_HumanString } from "../RecordSyntax-explain/HumanString.ta.mjs";
// export { HumanString, _decode_HumanString, _encode_HumanString } from "../RecordSyntax-explain/HumanString.ta.mjs";
import { TagSetInfo_elements_Item, _decode_TagSetInfo_elements_Item, _encode_TagSetInfo_elements_Item } from "../RecordSyntax-explain/TagSetInfo-elements-Item.ta.mjs";
// export { TagSetInfo_elements_Item, _decode_TagSetInfo_elements_Item, _encode_TagSetInfo_elements_Item } from "../RecordSyntax-explain/TagSetInfo-elements-Item.ta.mjs";


/**
 * @summary TagSetInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TagSetInfo ::= SEQUENCE {
 *    commonInfo      [0]    IMPLICIT CommonInfo OPTIONAL,
 *      -- Key elements follow:
 *    tagSet          [1]    IMPLICIT OBJECT IDENTIFIER,
 *      -- non-key brief elements follow:
 *    name            [2]    IMPLICIT InternationalString,
 *      -- non-brief elements follow:
 *    description     [3]    IMPLICIT HumanString OPTIONAL,
 *    elements        [4]    IMPLICIT SEQUENCE OF SEQUENCE {
 *                              elementname  [1] IMPLICIT InternationalString,
 *                              nicknames    [2] IMPLICIT SEQUENCE OF
 *                                              InternationalString OPTIONAL,
 *                              elementTag   [3] StringOrNumeric, 
 *                              description  [4] IMPLICIT HumanString OPTIONAL, 
 *                              dataType     [5] PrimitiveDataType OPTIONAL,
 *                                                 -- If the data type is expected
 *                                                 -- to be structured, that is
 *                                                 -- described in the schema info,
 *                                                 -- and datatypeis omitted here.
 *    otherTagInfo           OtherInformation OPTIONAL} OPTIONAL}
 * ```
 * 
 * @class
 */
export
class TagSetInfo {
    constructor (
        /**
         * @summary `commonInfo`.
         * @public
         * @readonly
         */
        readonly commonInfo: OPTIONAL<CommonInfo>,
        /**
         * @summary `tagSet`.
         * @public
         * @readonly
         */
        readonly tagSet: OBJECT_IDENTIFIER,
        /**
         * @summary `name`.
         * @public
         * @readonly
         */
        readonly name: InternationalString,
        /**
         * @summary `description`.
         * @public
         * @readonly
         */
        readonly description: OPTIONAL<HumanString>,
        /**
         * @summary `elements`.
         * @public
         * @readonly
         */
        readonly elements: OPTIONAL<TagSetInfo_elements_Item[]>
    ) {}

    /**
     * @summary Restructures an object into a TagSetInfo
     * @description
     * 
     * This takes an `object` and converts it to a `TagSetInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TagSetInfo`.
     * @returns {TagSetInfo}
     */
    public static _from_object (_o: { [_K in keyof (TagSetInfo)]: (TagSetInfo)[_K] }): TagSetInfo {
        return new TagSetInfo(_o.commonInfo, _o.tagSet, _o.name, _o.description, _o.elements);
    }


}

/**
 * @summary The Leading Root Component Types of TagSetInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TagSetInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("commonInfo", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("tagSet", false, $.hasTag(_TagClass.context, 1)),
    /* FIXME: name COULD_NOT_RESOLVE_TYPE_DEF */,
    new $.ComponentSpec("description", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("elements", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of TagSetInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TagSetInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TagSetInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TagSetInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TagSetInfo: $.ASN1Decoder<TagSetInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TagSetInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TagSetInfo (el: _Element): TagSetInfo {
    if (!_cached_decoder_for_TagSetInfo) { _cached_decoder_for_TagSetInfo = function (el: _Element): TagSetInfo {
    let commonInfo: OPTIONAL<CommonInfo>;
    let tagSet!: OBJECT_IDENTIFIER;
    let name!: InternationalString;
    let description: OPTIONAL<HumanString>;
    let elements: OPTIONAL<TagSetInfo_elements_Item[]>;
    const callbacks: $.DecodingMap = {
        "commonInfo": (_el: _Element): void => { commonInfo = $._decode_implicit<CommonInfo>(() => _decode_CommonInfo)(_el); },
        "tagSet": (_el: _Element): void => { tagSet = $._decode_implicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier)(_el); },
        "name": (_el: _Element): void => { name = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "description": (_el: _Element): void => { description = $._decode_implicit<HumanString>(() => _decode_HumanString)(_el); },
        "elements": (_el: _Element): void => { elements = $._decode_implicit<TagSetInfo_elements_Item[]>(() => $._decodeSequenceOf<TagSetInfo_elements_Item>(() => _decode_TagSetInfo_elements_Item))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TagSetInfo,
        _extension_additions_list_spec_for_TagSetInfo,
        _root_component_type_list_2_spec_for_TagSetInfo,
        undefined,
    );
    return new TagSetInfo(
        commonInfo,
        tagSet,
        name,
        description,
        elements
    );
}; }
    return _cached_decoder_for_TagSetInfo(el);
}

let _cached_encoder_for_TagSetInfo: $.ASN1Encoder<TagSetInfo> | null = null;

/**
 * @summary Encodes a(n) TagSetInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TagSetInfo, encoded as an ASN.1 Element.
 */
export
function _encode_TagSetInfo (value: TagSetInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TagSetInfo) { _cached_encoder_for_TagSetInfo = function (value: TagSetInfo, elGetter: $.ASN1Encoder<TagSetInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.commonInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_CommonInfo, $.BER)(value.commonInfo, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeObjectIdentifier, $.BER)(value.tagSet, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_InternationalString, $.BER)(value.name, $.BER),
            /* IF_ABSENT  */ ((value.description === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_HumanString, $.BER)(value.description, $.BER)),
            /* IF_ABSENT  */ ((value.elements === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeSequenceOf<TagSetInfo_elements_Item>(() => _encode_TagSetInfo_elements_Item, $.BER), $.BER)(value.elements, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TagSetInfo(value, elGetter);
}


/* eslint-enable */
