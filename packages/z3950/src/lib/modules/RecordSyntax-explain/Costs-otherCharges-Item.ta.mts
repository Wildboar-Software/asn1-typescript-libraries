/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { HumanString, _decode_HumanString, _encode_HumanString } from "../RecordSyntax-explain/HumanString.ta.mjs";
// export { HumanString, _decode_HumanString, _encode_HumanString } from "../RecordSyntax-explain/HumanString.ta.mjs";
import { Charge, _decode_Charge, _encode_Charge } from "../RecordSyntax-explain/Charge.ta.mjs";
// export { Charge, _decode_Charge, _encode_Charge } from "../RecordSyntax-explain/Charge.ta.mjs";


/**
 * @summary Costs_otherCharges_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Costs-otherCharges-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class Costs_otherCharges_Item {
    constructor (
        /**
         * @summary `forWhat`.
         * @public
         * @readonly
         */
        readonly forWhat: HumanString,
        /**
         * @summary `charge`.
         * @public
         * @readonly
         */
        readonly charge: Charge
    ) {}

    /**
     * @summary Restructures an object into a Costs_otherCharges_Item
     * @description
     * 
     * This takes an `object` and converts it to a `Costs_otherCharges_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Costs_otherCharges_Item`.
     * @returns {Costs_otherCharges_Item}
     */
    public static _from_object (_o: { [_K in keyof (Costs_otherCharges_Item)]: (Costs_otherCharges_Item)[_K] }): Costs_otherCharges_Item {
        return new Costs_otherCharges_Item(_o.forWhat, _o.charge);
    }


}

/**
 * @summary The Leading Root Component Types of Costs_otherCharges_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Costs_otherCharges_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("forWhat", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("charge", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of Costs_otherCharges_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Costs_otherCharges_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Costs_otherCharges_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Costs_otherCharges_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Costs_otherCharges_Item: $.ASN1Decoder<Costs_otherCharges_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Costs_otherCharges_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Costs_otherCharges_Item (el: _Element): Costs_otherCharges_Item {
    if (!_cached_decoder_for_Costs_otherCharges_Item) { _cached_decoder_for_Costs_otherCharges_Item = function (el: _Element): Costs_otherCharges_Item {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("Costs-otherCharges-Item contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "forWhat";
    sequence[1].name = "charge";
    let forWhat!: HumanString;
    let charge!: Charge;
    forWhat = $._decode_implicit<HumanString>(() => _decode_HumanString)(sequence[0]);
    charge = $._decode_implicit<Charge>(() => _decode_Charge)(sequence[1]);
    return new Costs_otherCharges_Item(
        forWhat,
        charge,

    );
}; }
    return _cached_decoder_for_Costs_otherCharges_Item(el);
}

let _cached_encoder_for_Costs_otherCharges_Item: $.ASN1Encoder<Costs_otherCharges_Item> | null = null;

/**
 * @summary Encodes a(n) Costs_otherCharges_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Costs_otherCharges_Item, encoded as an ASN.1 Element.
 */
export
function _encode_Costs_otherCharges_Item (value: Costs_otherCharges_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Costs_otherCharges_Item) { _cached_encoder_for_Costs_otherCharges_Item = function (value: Costs_otherCharges_Item, elGetter: $.ASN1Encoder<Costs_otherCharges_Item>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_HumanString, $.BER)(value.forWhat, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_Charge, $.BER)(value.charge, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Costs_otherCharges_Item(value, elGetter);
}


/* eslint-enable */
