/* eslint-disable */
import {
    INTEGER,
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
import { ProfileArgumOfferList_specialProfileArgums_Item_offeredValues, _decode_ProfileArgumOfferList_specialProfileArgums_Item_offeredValues, _encode_ProfileArgumOfferList_specialProfileArgums_Item_offeredValues } from "../G/ProfileArgumOfferList-specialProfileArgums-Item-offeredValues.ta.mjs";
// export { ProfileArgumOfferList_specialProfileArgums_Item_offeredValues, _decode_ProfileArgumOfferList_specialProfileArgums_Item_offeredValues, _encode_ProfileArgumOfferList_specialProfileArgums_Item_offeredValues } from "../G/ProfileArgumOfferList-specialProfileArgums-Item-offeredValues.ta.mjs";


/**
 * @summary ProfileArgumOfferList_specialProfileArgums_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProfileArgumOfferList-specialProfileArgums-Item ::= SEQUENCE {
 *     identifier INTEGER,
 *     offeredValues CHOICE {
 *         boolean [0] IMPLICIT BIT STRING { false-bit (0), true-bit (1) },
 *         integer [1] IMPLICIT IntegerOffer,
 *         string  [2] IMPLICIT SET OF PrintableString,
 *         objid   [3] IMPLICIT SET OF OBJECT IDENTIFIER
 *     }
 * }
 * ```
 * 
 * @class
 */
export
class ProfileArgumOfferList_specialProfileArgums_Item {
    constructor (
        /**
         * @summary `identifier`.
         * @public
         * @readonly
         */
        readonly identifier: INTEGER,
        /**
         * @summary `offeredValues`.
         * @public
         * @readonly
         */
        readonly offeredValues: ProfileArgumOfferList_specialProfileArgums_Item_offeredValues
    ) {}

    /**
     * @summary Restructures an object into a ProfileArgumOfferList_specialProfileArgums_Item
     * @description
     * 
     * This takes an `object` and converts it to a `ProfileArgumOfferList_specialProfileArgums_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ProfileArgumOfferList_specialProfileArgums_Item`.
     * @returns {ProfileArgumOfferList_specialProfileArgums_Item}
     */
    public static _from_object (_o: { [_K in keyof (ProfileArgumOfferList_specialProfileArgums_Item)]: (ProfileArgumOfferList_specialProfileArgums_Item)[_K] }): ProfileArgumOfferList_specialProfileArgums_Item {
        return new ProfileArgumOfferList_specialProfileArgums_Item(_o.identifier, _o.offeredValues);
    }


}

/**
 * @summary The Leading Root Component Types of ProfileArgumOfferList_specialProfileArgums_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ProfileArgumOfferList_specialProfileArgums_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("identifier", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("offeredValues", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of ProfileArgumOfferList_specialProfileArgums_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ProfileArgumOfferList_specialProfileArgums_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ProfileArgumOfferList_specialProfileArgums_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ProfileArgumOfferList_specialProfileArgums_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ProfileArgumOfferList_specialProfileArgums_Item: $.ASN1Decoder<ProfileArgumOfferList_specialProfileArgums_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProfileArgumOfferList_specialProfileArgums_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ProfileArgumOfferList_specialProfileArgums_Item (el: _Element): ProfileArgumOfferList_specialProfileArgums_Item {
    if (!_cached_decoder_for_ProfileArgumOfferList_specialProfileArgums_Item) { _cached_decoder_for_ProfileArgumOfferList_specialProfileArgums_Item = function (el: _Element): ProfileArgumOfferList_specialProfileArgums_Item {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("ProfileArgumOfferList-specialProfileArgums-Item contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "identifier";
    sequence[1].name = "offeredValues";
    let identifier!: INTEGER;
    let offeredValues!: ProfileArgumOfferList_specialProfileArgums_Item_offeredValues;
    identifier = $._decodeInteger(sequence[0]);
    offeredValues = _decode_ProfileArgumOfferList_specialProfileArgums_Item_offeredValues(sequence[1]);
    return new ProfileArgumOfferList_specialProfileArgums_Item(
        identifier,
        offeredValues,

    );
}; }
    return _cached_decoder_for_ProfileArgumOfferList_specialProfileArgums_Item(el);
}

let _cached_encoder_for_ProfileArgumOfferList_specialProfileArgums_Item: $.ASN1Encoder<ProfileArgumOfferList_specialProfileArgums_Item> | null = null;

/**
 * @summary Encodes a(n) ProfileArgumOfferList_specialProfileArgums_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProfileArgumOfferList_specialProfileArgums_Item, encoded as an ASN.1 Element.
 */
export
function _encode_ProfileArgumOfferList_specialProfileArgums_Item (value: ProfileArgumOfferList_specialProfileArgums_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ProfileArgumOfferList_specialProfileArgums_Item) { _cached_encoder_for_ProfileArgumOfferList_specialProfileArgums_Item = function (value: ProfileArgumOfferList_specialProfileArgums_Item): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeInteger(value.identifier, $.BER),
            /* REQUIRED   */ _encode_ProfileArgumOfferList_specialProfileArgums_Item_offeredValues(value.offeredValues, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ProfileArgumOfferList_specialProfileArgums_Item(value, elGetter);
}


/* eslint-enable */
