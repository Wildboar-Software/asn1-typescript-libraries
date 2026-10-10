/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CommonInfo, _decode_CommonInfo, _encode_CommonInfo } from "../RecordSyntax-explain/CommonInfo.ta.mjs";
import { InternationalString, _decode_InternationalString, _encode_InternationalString } from "../Z39-50-APDU-2001/InternationalString.ta.mjs";
import { HumanString, _decode_HumanString, _encode_HumanString } from "../RecordSyntax-explain/HumanString.ta.mjs";
import { TagSetInfo_elements_Item, _decode_TagSetInfo_elements_Item, _encode_TagSetInfo_elements_Item } from "../RecordSyntax-explain/TagSetInfo-elements-Item.ta.mjs";


/**
 * @summary TagSetInfo
 * @description
 * Information about one tag set supported on the server, so a client can
 * retrieve it and an end user can discover it. There is one Explain record for
 * each supported tag set. The record should match the tag set's definition; the
 * server may omit items it does not support. ANSI/NISO Z39.50-2003 §3.2.10.3.4;
 * ASN.1 comment 1.
 * 
 * The client can show element names and descriptions to the user, who chooses
 * elements of interest. The client needs the datatype and the tag, not the
 * meaning. The user is not expected to see the tag or the datatype. ANSI/NISO
 * Z39.50-2003 §3.2.10.3.4.
 * 
 * Search with ExplainCategory `TagSetInfo` and TagSetOID. The search may also
 * use HumanStringLanguage, DateAdded, DateChanged, or DateExpires. ANSI/NISO
 * Z39.50-2003 §3.2.10.1.2 and §3.2.10.1.3. As a search term, version 2 should
 * use a dotted decimal character string; version 3 should use an object
 * identifier. ANSI/NISO Z39.50-2003 Appendix ATR, note 4.
 * 
 * Element set `B` retrieves brief elements; `F` adds non-brief elements.
 * Some components marked optional are mandatory in a full record. ANSI/NISO
 * Z39.50-2003 ASN.1 comment 1.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TagSetInfo ::= SEQUENCE {
 *     commonInfo  [0] IMPLICIT CommonInfo OPTIONAL,
 *     -- Key elements follow:
 *     tagSet      [1] IMPLICIT OBJECT IDENTIFIER,
 *     -- Non-key brief elements follow:
 *     name        [2] IMPLICIT InternationalString,
 *     -- Non-brief elements follow:
 *     description [3] IMPLICIT HumanString OPTIONAL,
 *     elements    [4] IMPLICIT SEQUENCE OF SEQUENCE {
 *         elementname     [1] IMPLICIT InternationalString,
 *         nicknames       [2] IMPLICIT SEQUENCE OF InternationalString OPTIONAL,
 *         elementTag      [3] StringOrNumeric,
 *         description     [4] IMPLICIT HumanString OPTIONAL,
 *         dataType        [5] PrimitiveDataType OPTIONAL,
 *         -- If the data type is expected to be structured,
 *         -- that is described in the schema info, and datatype is omitted here.
 *         otherTagInfo    OtherInformation OPTIONAL
 *     } OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class TagSetInfo {
    /**
     * @summary `commonInfo`.
     * @description
     * Dates this Explain record was added and last changed, when it expires,
     * and the language of its human-readable text. Element set `B` includes
     * this component except `otherInfo`. DateAdded, DateChanged, and
     * DateExpires search these dates. ANSI/NISO Z39.50-2003 §3.2.10.3,
     * §3.2.10.1.3; ASN.1 comment 1.
     * @public
     * @readonly
     */
    readonly commonInfo: OPTIONAL<CommonInfo>;
    /**
     * @summary `tagSet`.
     * @description
     * Object identifier of the tag set. Key, searched with TagSetOID. As a
     * search term, version 2 should use a dotted decimal character string;
     * version 3 should use an object identifier. ANSI/NISO Z39.50-2003 Appendix
     * ATR, note 4.
     * @public
     * @readonly
     */
    readonly tagSet: OBJECT_IDENTIFIER;
    /**
     * @summary `name`.
     * @description
     * Name of this tag set. Brief, and not a key. ANSI/NISO Z39.50-2003
     * §3.2.10.3.4.
     * @public
     * @readonly
     */
    readonly name: InternationalString;
    /**
     * @summary `description`.
     * @description
     * Description of this tag set, in human-readable text. Non-brief. ANSI/NISO
     * Z39.50-2003 §3.2.10.3.4.
     * @public
     * @readonly
     */
    readonly description: OPTIONAL<HumanString>;
    /**
     * @summary `elements`.
     * @description
     * Elements defined in the tag set. For each, the server may give a name,
     * nicknames, the tag, a description, and a datatype. Non-brief. ANSI/NISO
     * Z39.50-2003 §3.2.10.3.4.
     * @public
     * @readonly
     */
    readonly elements: OPTIONAL<TagSetInfo_elements_Item[]>;

    constructor (
        commonInfo: OPTIONAL<CommonInfo>,
        tagSet: OBJECT_IDENTIFIER,
        name: InternationalString,
        description: OPTIONAL<HumanString>,
        elements: OPTIONAL<TagSetInfo_elements_Item[]>
    ) {
        this.commonInfo = commonInfo;
        this.tagSet = tagSet;
        this.name = name;
        this.description = description;
        this.elements = elements;
    }

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
    new $.ComponentSpec("name", false, $.hasTag(_TagClass.context, 2)),
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
    const _components: _Element[] = new Array(5);
    let _components_i = 0;
    if (value.commonInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => _encode_CommonInfo, $.BER)(value.commonInfo, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeObjectIdentifier, $.BER)(value.tagSet, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_InternationalString, $.BER)(value.name, $.BER);
    if (value.description !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_HumanString, $.BER)(value.description, $.BER);
    }
    if (value.elements !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeSequenceOf<TagSetInfo_elements_Item>(() => _encode_TagSetInfo_elements_Item, $.BER), $.BER)(value.elements, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_TagSetInfo(value, elGetter);
}


/* eslint-enable */
