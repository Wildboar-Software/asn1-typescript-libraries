/* eslint-disable */
import {
    PrintableString,
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
import { ParameterOffers, _decode_ParameterOffers, _encode_ParameterOffers } from "../CSS/ParameterOffers.ta.mjs";
// export { ParameterOffers, _decode_ParameterOffers, _encode_ParameterOffers } from "../CSS/ParameterOffers.ta.mjs";


/**
 * @summary Offer_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Offer-Item ::= SEQUENCE {
 *     name    PrintableString,
 *     offers  ParameterOffers
 * }
 * ```
 * 
 * @class
 */
export
class Offer_Item {
    constructor (
        /**
         * @summary `name`.
         * @public
         * @readonly
         */
        readonly name: PrintableString,
        /**
         * @summary `offers`.
         * @public
         * @readonly
         */
        readonly offers: ParameterOffers
    ) {}

    /**
     * @summary Restructures an object into a Offer_Item
     * @description
     * 
     * This takes an `object` and converts it to a `Offer_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Offer_Item`.
     * @returns {Offer_Item}
     */
    public static _from_object (_o: { [_K in keyof (Offer_Item)]: (Offer_Item)[_K] }): Offer_Item {
        return new Offer_Item(_o.name, _o.offers);
    }


}

/**
 * @summary The Leading Root Component Types of Offer_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Offer_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("name", false, $.hasTag(_TagClass.universal, 19)),
    new $.ComponentSpec("offers", false, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of Offer_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Offer_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Offer_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Offer_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Offer_Item: $.ASN1Decoder<Offer_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Offer_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Offer_Item (el: _Element): Offer_Item {
    if (!_cached_decoder_for_Offer_Item) { _cached_decoder_for_Offer_Item = function (el: _Element): Offer_Item {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("Offer-Item contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "name";
    sequence[1].name = "offers";
    const name: PrintableString = $._decodePrintableString(sequence[0]);
    const offers: ParameterOffers = _decode_ParameterOffers(sequence[1]);
    return new Offer_Item(
        name,
        offers,

    );
}; }
    return _cached_decoder_for_Offer_Item(el);
}

let _cached_encoder_for_Offer_Item: $.ASN1Encoder<Offer_Item> | null = null;

/**
 * @summary Encodes a(n) Offer_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Offer_Item, encoded as an ASN.1 Element.
 */
export
function _encode_Offer_Item (value: Offer_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Offer_Item) { _cached_encoder_for_Offer_Item = function (value: Offer_Item): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodePrintableString(value.name, $.BER),
            /* REQUIRED   */ _encode_ParameterOffers(value.offers, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Offer_Item(value, elGetter);
}


/* eslint-enable */
