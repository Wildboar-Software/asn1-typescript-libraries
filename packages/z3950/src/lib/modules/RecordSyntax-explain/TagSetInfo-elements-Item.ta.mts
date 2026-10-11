/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { InternationalString, _decode_InternationalString, _encode_InternationalString } from "../Z39-50-APDU-2001/InternationalString.ta.mjs";
import { StringOrNumeric, _decode_StringOrNumeric, _encode_StringOrNumeric } from "../Z39-50-APDU-2001/StringOrNumeric.ta.mjs";
import { HumanString, _decode_HumanString, _encode_HumanString } from "../RecordSyntax-explain/HumanString.ta.mjs";
import { PrimitiveDataType, _decode_PrimitiveDataType, _encode_PrimitiveDataType } from "../RecordSyntax-explain/PrimitiveDataType.ta.mjs";
import { OtherInformation, _decode_OtherInformation, _encode_OtherInformation } from "../Z39-50-APDU-2001/OtherInformation.ta.mjs";


/**
 * @summary TagSetInfo_elements_Item
 * @description
 * One element of a tag set, as listed in TagSetInfo. If the datatype is
 * structured, the schema describes it and the datatype is omitted here.
 * ANSI/NISO Z39.50-2003 §3.2.10.3.4.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TagSetInfo-elements-Item ::= SEQUENCE {
 *     elementname [1] IMPLICIT InternationalString,
 *     nicknames [2] IMPLICIT SEQUENCE OF InternationalString OPTIONAL,
 *     elementTag [3] StringOrNumeric,
 *     description [4] IMPLICIT HumanString OPTIONAL,
 *     dataType [5] PrimitiveDataType OPTIONAL,
 *     -- If the data type is expected to be structured,
 *     -- that is described in the schema info, and datatype is omitted here.
 *     otherTagInfo OtherInformation OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class TagSetInfo_elements_Item {
    /**
     * @summary `elementname`.
     * @description
     * Name of the element. ANSI/NISO Z39.50-2003 §3.2.10.3.4.
     * @public
     * @readonly
     */
    readonly elementname: InternationalString;
    /**
     * @summary `nicknames`.
     * @description
     * Nicknames for the element. ANSI/NISO Z39.50-2003 §3.2.10.3.4.
     * @public
     * @readonly
     */
    readonly nicknames: OPTIONAL<InternationalString[]>;
    /**
     * @summary `elementTag`.
     * @description
     * Tag assigned to the element. ANSI/NISO Z39.50-2003 §3.2.10.3.4.
     * @public
     * @readonly
     */
    readonly elementTag: StringOrNumeric;
    /**
     * @summary `description`.
     * @description
     * Description of the element, in human-readable text. ANSI/NISO Z39.50-2003
     * §3.2.10.3.4.
     * @public
     * @readonly
     */
    readonly description: OPTIONAL<HumanString>;
    /**
     * @summary `dataType`.
     * @description
     * Datatype of the element. Omit it when the datatype is structured; that
     * case is described in the schema. ANSI/NISO Z39.50-2003 §3.2.10.3.4.
     * @public
     * @readonly
     */
    readonly dataType: OPTIONAL<PrimitiveDataType>;
    /**
     * @summary `otherTagInfo`.
     * @description
     * The standard does not define this component. ANSI/NISO Z39.50-2003
     * Explain ASN.1.
     * @public
     * @readonly
     */
    readonly otherTagInfo: OPTIONAL<OtherInformation>;

    constructor (
        elementname: InternationalString,
        nicknames: OPTIONAL<InternationalString[]>,
        elementTag: StringOrNumeric,
        description: OPTIONAL<HumanString>,
        dataType: OPTIONAL<PrimitiveDataType>,
        otherTagInfo: OPTIONAL<OtherInformation>
    ) {
        this.elementname = elementname;
        this.nicknames = nicknames;
        this.elementTag = elementTag;
        this.description = description;
        this.dataType = dataType;
        this.otherTagInfo = otherTagInfo;
    }

    /**
     * @summary Restructures an object into a TagSetInfo_elements_Item
     * @description
     * 
     * This takes an `object` and converts it to a `TagSetInfo_elements_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TagSetInfo_elements_Item`.
     * @returns {TagSetInfo_elements_Item}
     */
    public static _from_object (_o: { [_K in keyof (TagSetInfo_elements_Item)]: (TagSetInfo_elements_Item)[_K] }): TagSetInfo_elements_Item {
        return new TagSetInfo_elements_Item(_o.elementname, _o.nicknames, _o.elementTag, _o.description, _o.dataType, _o.otherTagInfo);
    }


}

/**
 * @summary The Leading Root Component Types of TagSetInfo_elements_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TagSetInfo_elements_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("elementname", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("nicknames", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("elementTag", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("description", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("dataType", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("otherTagInfo", true, $.hasTag(_TagClass.context, 201))
];

/**
 * @summary The Trailing Root Component Types of TagSetInfo_elements_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TagSetInfo_elements_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TagSetInfo_elements_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TagSetInfo_elements_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TagSetInfo_elements_Item: $.ASN1Decoder<TagSetInfo_elements_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TagSetInfo_elements_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TagSetInfo_elements_Item (el: _Element): TagSetInfo_elements_Item {
    if (!_cached_decoder_for_TagSetInfo_elements_Item) { _cached_decoder_for_TagSetInfo_elements_Item = function (el: _Element): TagSetInfo_elements_Item {
    let elementname!: InternationalString;
    let nicknames: OPTIONAL<InternationalString[]>;
    let elementTag!: StringOrNumeric;
    let description: OPTIONAL<HumanString>;
    let dataType: OPTIONAL<PrimitiveDataType>;
    let otherTagInfo: OPTIONAL<OtherInformation>;
    const callbacks: $.DecodingMap = {
        "elementname": (_el: _Element): void => { elementname = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "nicknames": (_el: _Element): void => { nicknames = $._decode_implicit<InternationalString[]>(() => $._decodeSequenceOf<InternationalString>(() => _decode_InternationalString))(_el); },
        "elementTag": (_el: _Element): void => { elementTag = $._decode_explicit<StringOrNumeric>(() => _decode_StringOrNumeric)(_el); },
        "description": (_el: _Element): void => { description = $._decode_implicit<HumanString>(() => _decode_HumanString)(_el); },
        "dataType": (_el: _Element): void => { dataType = $._decode_explicit<PrimitiveDataType>(() => _decode_PrimitiveDataType)(_el); },
        "otherTagInfo": (_el: _Element): void => { otherTagInfo = _decode_OtherInformation(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TagSetInfo_elements_Item,
        _extension_additions_list_spec_for_TagSetInfo_elements_Item,
        _root_component_type_list_2_spec_for_TagSetInfo_elements_Item,
        undefined,
    );
    return new TagSetInfo_elements_Item(
        elementname,
        nicknames,
        elementTag,
        description,
        dataType,
        otherTagInfo
    );
}; }
    return _cached_decoder_for_TagSetInfo_elements_Item(el);
}

let _cached_encoder_for_TagSetInfo_elements_Item: $.ASN1Encoder<TagSetInfo_elements_Item> | null = null;

/**
 * @summary Encodes a(n) TagSetInfo_elements_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TagSetInfo_elements_Item, encoded as an ASN.1 Element.
 */
export
function _encode_TagSetInfo_elements_Item (value: TagSetInfo_elements_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TagSetInfo_elements_Item) { _cached_encoder_for_TagSetInfo_elements_Item = function (value: TagSetInfo_elements_Item, elGetter: $.ASN1Encoder<TagSetInfo_elements_Item>): _Element {
    const _components: _Element[] = new Array(6);
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_InternationalString, $.BER)(value.elementname, $.BER);
    if (value.nicknames !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<InternationalString>(() => _encode_InternationalString, $.BER), $.BER)(value.nicknames, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 3, () => _encode_StringOrNumeric, $.BER)(value.elementTag, $.BER);
    if (value.description !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_HumanString, $.BER)(value.description, $.BER);
    }
    if (value.dataType !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 5, () => _encode_PrimitiveDataType, $.BER)(value.dataType, $.BER);
    }
    if (value.otherTagInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 201, () => _encode_OtherInformation, $.BER)(value.otherTagInfo, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_TagSetInfo_elements_Item(value, elGetter);
}


/* eslint-enable */
