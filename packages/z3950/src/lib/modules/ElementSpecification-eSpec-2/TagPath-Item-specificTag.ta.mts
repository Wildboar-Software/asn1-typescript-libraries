/* eslint-disable */
import {
    INTEGER,
    OBJECT_IDENTIFIER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { StringOrNumeric, _decode_StringOrNumeric, _encode_StringOrNumeric } from "../Z39-50-APDU-2001/StringOrNumeric.ta.mjs";
// export { StringOrNumeric, _decode_StringOrNumeric, _encode_StringOrNumeric } from "../Z39-50-APDU-2001/StringOrNumeric.ta.mjs";
import { Occurrences, _decode_Occurrences, _encode_Occurrences } from "../ElementSpecification-eSpec-2/Occurrences.ta.mjs";
// export { Occurrences, _decode_Occurrences, _encode_Occurrences } from "../ElementSpecification-eSpec-2/Occurrences.ta.mjs";


/**
 * @summary TagPath_Item_specificTag
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TagPath-Item-specificTag ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class TagPath_Item_specificTag {
    /**
     * @summary `schemaId`.
     * @public
     * @readonly
     */
    readonly schemaId: OPTIONAL<OBJECT_IDENTIFIER>;
    /**
     * @summary `tagType`.
     * @public
     * @readonly
     */
    readonly tagType: OPTIONAL<INTEGER>;
    /**
     * @summary `tagValue`.
     * @public
     * @readonly
     */
    readonly tagValue: StringOrNumeric;
    /**
     * @summary `occurrence`.
     * @public
     * @readonly
     */
    readonly occurrence: OPTIONAL<Occurrences>;

    constructor (
        schemaId: OPTIONAL<OBJECT_IDENTIFIER>,
        tagType: OPTIONAL<INTEGER>,
        tagValue: StringOrNumeric,
        occurrence: OPTIONAL<Occurrences>
    ) {
        this.schemaId = schemaId;
        this.tagType = tagType;
        this.tagValue = tagValue;
        this.occurrence = occurrence;
    }

    /**
     * @summary Restructures an object into a TagPath_Item_specificTag
     * @description
     * 
     * This takes an `object` and converts it to a `TagPath_Item_specificTag`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TagPath_Item_specificTag`.
     * @returns {TagPath_Item_specificTag}
     */
    public static _from_object (_o: { [_K in keyof (TagPath_Item_specificTag)]: (TagPath_Item_specificTag)[_K] }): TagPath_Item_specificTag {
        return new TagPath_Item_specificTag(_o.schemaId, _o.tagType, _o.tagValue, _o.occurrence);
    }


}

/**
 * @summary The Leading Root Component Types of TagPath_Item_specificTag
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TagPath_Item_specificTag: $.ComponentSpec[] = [
    new $.ComponentSpec("schemaId", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("tagType", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("tagValue", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("occurrence", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of TagPath_Item_specificTag
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TagPath_Item_specificTag: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TagPath_Item_specificTag
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TagPath_Item_specificTag: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TagPath_Item_specificTag: $.ASN1Decoder<TagPath_Item_specificTag> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TagPath_Item_specificTag
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TagPath_Item_specificTag (el: _Element): TagPath_Item_specificTag {
    if (!_cached_decoder_for_TagPath_Item_specificTag) { _cached_decoder_for_TagPath_Item_specificTag = function (el: _Element): TagPath_Item_specificTag {
    let schemaId: OPTIONAL<OBJECT_IDENTIFIER>;
    let tagType: OPTIONAL<INTEGER>;
    let tagValue!: StringOrNumeric;
    let occurrence: OPTIONAL<Occurrences>;
    const callbacks: $.DecodingMap = {
        "schemaId": (_el: _Element): void => { schemaId = $._decode_implicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier)(_el); },
        "tagType": (_el: _Element): void => { tagType = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "tagValue": (_el: _Element): void => { tagValue = $._decode_explicit<StringOrNumeric>(() => _decode_StringOrNumeric)(_el); },
        "occurrence": (_el: _Element): void => { occurrence = $._decode_explicit<Occurrences>(() => _decode_Occurrences)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TagPath_Item_specificTag,
        _extension_additions_list_spec_for_TagPath_Item_specificTag,
        _root_component_type_list_2_spec_for_TagPath_Item_specificTag,
        undefined,
    );
    return new TagPath_Item_specificTag(
        schemaId,
        tagType,
        tagValue,
        occurrence
    );
}; }
    return _cached_decoder_for_TagPath_Item_specificTag(el);
}

let _cached_encoder_for_TagPath_Item_specificTag: $.ASN1Encoder<TagPath_Item_specificTag> | null = null;

/**
 * @summary Encodes a(n) TagPath_Item_specificTag into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TagPath_Item_specificTag, encoded as an ASN.1 Element.
 */
export
function _encode_TagPath_Item_specificTag (value: TagPath_Item_specificTag, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TagPath_Item_specificTag) { _cached_encoder_for_TagPath_Item_specificTag = function (value: TagPath_Item_specificTag, elGetter: $.ASN1Encoder<TagPath_Item_specificTag>): _Element {
    const _components: _Element[] = new Array(4);
    let _components_i = 0;
    if (value.schemaId !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => $._encodeObjectIdentifier, $.BER)(value.schemaId, $.BER);
    }
    if (value.tagType !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.tagType, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_StringOrNumeric, $.BER)(value.tagValue, $.BER);
    if (value.occurrence !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 3, () => _encode_Occurrences, $.BER)(value.occurrence, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_TagPath_Item_specificTag(value, elGetter);
}


/* eslint-enable */
