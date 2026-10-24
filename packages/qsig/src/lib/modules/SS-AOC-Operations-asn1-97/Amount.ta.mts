/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type CurrencyAmount, _decode_CurrencyAmount, _encode_CurrencyAmount } from "../SS-AOC-Operations-asn1-97/CurrencyAmount.ta.mjs";
import { Multiplier, _decode_Multiplier, _encode_Multiplier, _enum_for_Multiplier } from "../SS-AOC-Operations-asn1-97/Multiplier.ta.mjs";

/**
 * @summary Amount
 * @description
 *
 * A currency quantity as an integer and a scale factor. The factor is 0,001,
 * 0,01, 0,1, 1, 10, 100, or 1000 (ECMA-211 §A.1.3).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-212/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-211/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Amount ::= SEQUENCE {
 *     currencyAmount [1] IMPLICIT CurrencyAmount,
 *     multiplier [2] IMPLICIT Multiplier
 * }
 * ```
 * 
 * @class
 */
export
class Amount {
    /**
     * @summary `currencyAmount`.
     * @description
     *
     * Integer part of the quantity, 0..16777215 (ECMA-212 §6.3.1). ECMA-211
     * does not state that bound.
     * @public
     * @readonly
     */
    readonly currencyAmount: CurrencyAmount;
    /**
     * @summary `multiplier`.
     * @description
     *
     * Factor of 0,001, 0,01, 0,1, 1, 10, 100, or 1000 applied to
     * `currencyAmount` (ECMA-211 §A.1.3).
     * @public
     * @readonly
     */
    readonly multiplier: Multiplier;

    constructor (
        currencyAmount: CurrencyAmount,
        multiplier: Multiplier
    ) {
        this.currencyAmount = currencyAmount;
        this.multiplier = multiplier;
    }

    /**
     * @summary Restructures an object into a Amount
     * @description
     * 
     * This takes an `object` and converts it to a `Amount`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Amount`.
     * @returns {Amount}
     */
    public static _from_object (_o: { [_K in keyof (Amount)]: (Amount)[_K] }): Amount {
        return new Amount(_o.currencyAmount, _o.multiplier);
    }

        /**
         * @summary The enum used as the type of the component `multiplier`
         * @public
         * @static
         */

    public static _enum_for_multiplier = _enum_for_Multiplier;
}

/**
 * @summary The Leading Root Component Types of Amount
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Amount: $.ComponentSpec[] = [
    new $.ComponentSpec("currencyAmount", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("multiplier", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of Amount
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Amount: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Amount
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Amount: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Amount: $.ASN1Decoder<Amount> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Amount
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Amount (el: _Element): Amount {
    if (!_cached_decoder_for_Amount) { _cached_decoder_for_Amount = function (el: _Element): Amount {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("Amount contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "currencyAmount";
    sequence[1].name = "multiplier";
    const currencyAmount: CurrencyAmount = $._decode_implicit<CurrencyAmount>(() => _decode_CurrencyAmount)(sequence[0]);
    const multiplier: Multiplier = $._decode_implicit<Multiplier>(() => _decode_Multiplier)(sequence[1]);
    return new Amount(
        currencyAmount,
        multiplier,

    );
}; }
    return _cached_decoder_for_Amount(el);
}

let _cached_encoder_for_Amount: $.ASN1Encoder<Amount> | null = null;

/**
 * @summary Encodes a(n) Amount into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Amount, encoded as an ASN.1 Element.
 */
export
function _encode_Amount (value: Amount, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Amount) { _cached_encoder_for_Amount = function (value: Amount, _elGetter: $.ASN1Encoder<Amount>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_CurrencyAmount, $.BER)(value.currencyAmount, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_Multiplier, $.BER)(value.multiplier, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_Amount(value, elGetter);
}

/* eslint-enable */
