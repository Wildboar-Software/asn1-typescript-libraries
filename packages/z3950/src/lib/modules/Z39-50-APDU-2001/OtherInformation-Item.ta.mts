/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { InfoCategory, _decode_InfoCategory, _encode_InfoCategory } from "../Z39-50-APDU-2001/InfoCategory.ta.mjs";
// export { InfoCategory, _decode_InfoCategory, _encode_InfoCategory } from "../Z39-50-APDU-2001/InfoCategory.ta.mjs";
import { OtherInformation_Item_information, _decode_OtherInformation_Item_information, _encode_OtherInformation_Item_information } from "../Z39-50-APDU-2001/OtherInformation-Item-information.ta.mjs";
// export { OtherInformation_Item_information, _decode_OtherInformation_Item_information, _encode_OtherInformation_Item_information } from "../Z39-50-APDU-2001/OtherInformation-Item-information.ta.mjs";


/**
 * @summary OtherInformation_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OtherInformation-Item ::= SEQUENCE {
 *     category [1] IMPLICIT InfoCategory OPTIONAL,
 *     information CHOICE {
 *         characterInfo [2] IMPLICIT InternationalString,
 *         binaryInfo [3] IMPLICIT OCTET STRING,
 *         externallyDefinedInfo [4] IMPLICIT EXTERNAL,
 *         oid [5] IMPLICIT OBJECT IDENTIFIER
 *     }
 * }
 * ```
 * 
 * @class
 */
export
class OtherInformation_Item {
    /**
     * @summary `category`.
     * @public
     * @readonly
     */
    readonly category: OPTIONAL<InfoCategory>;
    /**
     * @summary `information`.
     * @public
     * @readonly
     */
    readonly information: OtherInformation_Item_information;

    constructor (
        category: OPTIONAL<InfoCategory>,
        information: OtherInformation_Item_information
    ) {
        this.category = category;
        this.information = information;
    }

    /**
     * @summary Restructures an object into a OtherInformation_Item
     * @description
     * 
     * This takes an `object` and converts it to a `OtherInformation_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OtherInformation_Item`.
     * @returns {OtherInformation_Item}
     */
    public static _from_object (_o: { [_K in keyof (OtherInformation_Item)]: (OtherInformation_Item)[_K] }): OtherInformation_Item {
        return new OtherInformation_Item(_o.category, _o.information);
    }


}

/**
 * @summary The Leading Root Component Types of OtherInformation_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_OtherInformation_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("category", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("information", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of OtherInformation_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_OtherInformation_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of OtherInformation_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_OtherInformation_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_OtherInformation_Item: $.ASN1Decoder<OtherInformation_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OtherInformation_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_OtherInformation_Item (el: _Element): OtherInformation_Item {
    if (!_cached_decoder_for_OtherInformation_Item) { _cached_decoder_for_OtherInformation_Item = function (el: _Element): OtherInformation_Item {
    let category: OPTIONAL<InfoCategory>;
    let information!: OtherInformation_Item_information;
    const callbacks: $.DecodingMap = {
        "category": (_el: _Element): void => { category = $._decode_implicit<InfoCategory>(() => _decode_InfoCategory)(_el); },
        "information": (_el: _Element): void => { information = _decode_OtherInformation_Item_information(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_OtherInformation_Item,
        _extension_additions_list_spec_for_OtherInformation_Item,
        _root_component_type_list_2_spec_for_OtherInformation_Item,
        undefined,
    );
    return new OtherInformation_Item(
        category,
        information
    );
}; }
    return _cached_decoder_for_OtherInformation_Item(el);
}

let _cached_encoder_for_OtherInformation_Item: $.ASN1Encoder<OtherInformation_Item> | null = null;

/**
 * @summary Encodes a(n) OtherInformation_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OtherInformation_Item, encoded as an ASN.1 Element.
 */
export
function _encode_OtherInformation_Item (value: OtherInformation_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_OtherInformation_Item) { _cached_encoder_for_OtherInformation_Item = function (value: OtherInformation_Item, elGetter: $.ASN1Encoder<OtherInformation_Item>): _Element {
    const _components: _Element[] = new Array(2);
    let _components_i = 0;
    if (value.category !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_InfoCategory, $.BER)(value.category, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ _encode_OtherInformation_Item_information(value.information, $.BER);
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_OtherInformation_Item(value, elGetter);
}


/* eslint-enable */
