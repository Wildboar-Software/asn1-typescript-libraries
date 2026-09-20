/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DfrUniquePermanentIdentifier, _decode_DfrUniquePermanentIdentifier, _encode_DfrUniquePermanentIdentifier } from "../DFRAbstractService/DfrUniquePermanentIdentifier.ta.mjs";
import { DfrObjectClass, _enum_for_DfrObjectClass, _decode_DfrObjectClass, _encode_DfrObjectClass } from "../DFRAbstractService/DfrObjectClass.ta.mjs";
import { Attribute, _decode_Attribute, _encode_Attribute } from "../InformationFramework/Attribute.ta.mjs";


/**
 * @summary DfrEntryList_Item
 * @description
 *
 * One listed/found entry. UPI and class always present. `ordering-attribute`
 * follows the OrderingRule if one was used. `other-attributes` are those
 * requested; they are not stored in SRL content. ISO/IEC 10166-1:1991
 * §8.1.6.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DfrEntryList-Item ::= SEQUENCE {
 *         upi                 [0] DfrUniquePermanentIdentifier,
 *         class               [1] DfrObjectClass,
 *         ordering-attribute  [2] SEQUENCE OF Attribute OPTIONAL, -- ordered as specified in the OrderingRule
 *         other-attributes    [3] SEQUENCE OF Attribute OPTIONAL
 *     }
 * ```
 * 
 * @class
 */
export
class DfrEntryList_Item {
    constructor (
        /**
         * @summary `upi`.
         * @description
         *
         * UPI of the listed object.
         * @public
         * @readonly
         */
        readonly upi: DfrUniquePermanentIdentifier,
        /**
         * @summary `class_`.
         * @description
         *
         * Object class.
         * @public
         * @readonly
         */
        readonly class_: DfrObjectClass,
        /**
         * @summary `ordering_attribute`.
         * @description
         *
         * Key values in OrderingRule order.
         * @public
         * @readonly
         */
        readonly ordering_attribute: OPTIONAL<Attribute[]>,
        /**
         * @summary `other_attributes`.
         * @description
         *
         * Additionally selected attributes.
         * @public
         * @readonly
         */
        readonly other_attributes: OPTIONAL<Attribute[]>
    ) {}

    /**
     * @summary Restructures an object into a DfrEntryList_Item
     * @description
     * 
     * This takes an `object` and converts it to a `DfrEntryList_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DfrEntryList_Item`.
     * @returns {DfrEntryList_Item}
     */
    public static _from_object (_o: { [_K in keyof (DfrEntryList_Item)]: (DfrEntryList_Item)[_K] }): DfrEntryList_Item {
        return new DfrEntryList_Item(_o.upi, _o.class_, _o.ordering_attribute, _o.other_attributes);
    }

        /**
         * @summary The enum used as the type of the component `class_`
         * @public
         * @static
         */

    public static _enum_for_class_ = _enum_for_DfrObjectClass;
}

/**
 * @summary The Leading Root Component Types of DfrEntryList_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DfrEntryList_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("upi", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("class", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("ordering-attribute", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("other-attributes", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of DfrEntryList_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DfrEntryList_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DfrEntryList_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DfrEntryList_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DfrEntryList_Item: $.ASN1Decoder<DfrEntryList_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DfrEntryList_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DfrEntryList_Item (el: _Element): DfrEntryList_Item {
    if (!_cached_decoder_for_DfrEntryList_Item) { _cached_decoder_for_DfrEntryList_Item = function (el: _Element): DfrEntryList_Item {
    let upi!: DfrUniquePermanentIdentifier;
    let class_!: DfrObjectClass;
    let ordering_attribute: OPTIONAL<Attribute[]>;
    let other_attributes: OPTIONAL<Attribute[]>;
    const callbacks: $.DecodingMap = {
        "upi": (_el: _Element): void => { upi = $._decode_implicit<DfrUniquePermanentIdentifier>(() => _decode_DfrUniquePermanentIdentifier)(_el); },
        "class": (_el: _Element): void => { class_ = $._decode_implicit<DfrObjectClass>(() => _decode_DfrObjectClass)(_el); },
        "ordering-attribute": (_el: _Element): void => { ordering_attribute = $._decode_implicit<Attribute[]>(() => $._decodeSequenceOf<Attribute>(() => _decode_Attribute))(_el); },
        "other-attributes": (_el: _Element): void => { other_attributes = $._decode_implicit<Attribute[]>(() => $._decodeSequenceOf<Attribute>(() => _decode_Attribute))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DfrEntryList_Item,
        _extension_additions_list_spec_for_DfrEntryList_Item,
        _root_component_type_list_2_spec_for_DfrEntryList_Item,
        undefined,
    );
    return new DfrEntryList_Item(
        upi,
        class_,
        ordering_attribute,
        other_attributes
    );
}; }
    return _cached_decoder_for_DfrEntryList_Item(el);
}

let _cached_encoder_for_DfrEntryList_Item: $.ASN1Encoder<DfrEntryList_Item> | null = null;

/**
 * @summary Encodes a(n) DfrEntryList_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DfrEntryList_Item, encoded as an ASN.1 Element.
 */
export
function _encode_DfrEntryList_Item (value: DfrEntryList_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DfrEntryList_Item) { _cached_encoder_for_DfrEntryList_Item = function (value: DfrEntryList_Item): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_DfrUniquePermanentIdentifier, $.BER)(value.upi, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_DfrObjectClass, $.BER)(value.class_, $.BER),
            /* IF_ABSENT  */ ((value.ordering_attribute === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<Attribute>(() => _encode_Attribute, $.BER), $.BER)(value.ordering_attribute, $.BER)),
            /* IF_ABSENT  */ ((value.other_attributes === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeSequenceOf<Attribute>(() => _encode_Attribute, $.BER), $.BER)(value.other_attributes, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DfrEntryList_Item(value, elGetter);
}


/* eslint-enable */
