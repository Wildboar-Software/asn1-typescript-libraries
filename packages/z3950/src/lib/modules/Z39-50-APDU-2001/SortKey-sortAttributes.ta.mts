/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AttributeSetId, _decode_AttributeSetId, _encode_AttributeSetId } from "../Z39-50-APDU-2001/AttributeSetId.ta.mjs";
import { AttributeList, _decode_AttributeList, _encode_AttributeList } from "../Z39-50-APDU-2001/AttributeList.ta.mjs";


/**
 * @summary SortKey_sortAttributes
 * @description
 * 
 * Sort key expressed as a search access point (ANSI/NISO Z39.50-2003
 * §3.2.7.1.3, §4.1 comment 12). Several attributes may be supplied; they should
 * resolve to one abstract access point.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SortKey-sortAttributes ::= SEQUENCE {
 *     id AttributeSetId,
 *     list AttributeList
 * }
 * ```
 * 
 * @class
 */
export
class SortKey_sortAttributes {
    /**
     * @summary `id`.
     * @description
     * 
     * Attribute set that defines the access point (ANSI/NISO Z39.50-2003 §4.1,
     * comment 12).
     * 
     * @public
     * @readonly
     */
    readonly id: AttributeSetId;
    /**
     * @summary `list`.
     * @description
     * 
     * Attributes that together name one access point (ANSI/NISO Z39.50-2003
     * §4.1, comment 12).
     * 
     * @public
     * @readonly
     */
    readonly list: AttributeList;

    constructor (
        id: AttributeSetId,
        list: AttributeList
    ) {
        this.id = id;
        this.list = list;
    }

    /**
     * @summary Restructures an object into a SortKey_sortAttributes
     * @description
     * 
     * This takes an `object` and converts it to a `SortKey_sortAttributes`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SortKey_sortAttributes`.
     * @returns {SortKey_sortAttributes}
     */
    public static _from_object (_o: { [_K in keyof (SortKey_sortAttributes)]: (SortKey_sortAttributes)[_K] }): SortKey_sortAttributes {
        return new SortKey_sortAttributes(_o.id, _o.list);
    }


}

/**
 * @summary The Leading Root Component Types of SortKey_sortAttributes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SortKey_sortAttributes: $.ComponentSpec[] = [
    new $.ComponentSpec("id", false, $.hasTag(_TagClass.universal, 6)),
    new $.ComponentSpec("list", false, $.hasTag(_TagClass.context, 44))
];

/**
 * @summary The Trailing Root Component Types of SortKey_sortAttributes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SortKey_sortAttributes: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SortKey_sortAttributes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SortKey_sortAttributes: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SortKey_sortAttributes: $.ASN1Decoder<SortKey_sortAttributes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SortKey_sortAttributes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SortKey_sortAttributes (el: _Element): SortKey_sortAttributes {
    if (!_cached_decoder_for_SortKey_sortAttributes) { _cached_decoder_for_SortKey_sortAttributes = function (el: _Element): SortKey_sortAttributes {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("SortKey-sortAttributes contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "id";
    sequence[1].name = "list";
    const id: AttributeSetId = _decode_AttributeSetId(sequence[0]);
    const list: AttributeList = _decode_AttributeList(sequence[1]);
    return new SortKey_sortAttributes(
        id,
        list,

    );
}; }
    return _cached_decoder_for_SortKey_sortAttributes(el);
}

let _cached_encoder_for_SortKey_sortAttributes: $.ASN1Encoder<SortKey_sortAttributes> | null = null;

/**
 * @summary Encodes a(n) SortKey_sortAttributes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SortKey_sortAttributes, encoded as an ASN.1 Element.
 */
export
function _encode_SortKey_sortAttributes (value: SortKey_sortAttributes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SortKey_sortAttributes) { _cached_encoder_for_SortKey_sortAttributes = function (value: SortKey_sortAttributes, elGetter: $.ASN1Encoder<SortKey_sortAttributes>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_AttributeSetId(value.id, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 44, () => _encode_AttributeList, $.BER)(value.list, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_SortKey_sortAttributes(value, elGetter);
}


/* eslint-enable */
