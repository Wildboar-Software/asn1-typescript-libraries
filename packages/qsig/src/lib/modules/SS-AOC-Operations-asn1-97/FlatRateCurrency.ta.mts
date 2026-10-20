/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Currency, _decode_Currency, _encode_Currency } from "../SS-AOC-Operations-asn1-97/Currency.ta.mjs";
import { Amount, _decode_Amount, _encode_Amount } from "../SS-AOC-Operations-asn1-97/Amount.ta.mjs";

/**
 * @summary FlatRateCurrency
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FlatRateCurrency ::= SEQUENCE {
 *     fRCurrency [1] IMPLICIT Currency,
 *     fRAmount [2] IMPLICIT Amount
 * }
 * ```
 * 
 * @class
 */
export
class FlatRateCurrency {
    /**
     * @summary `fRCurrency`.
     * @public
     * @readonly
     */
    readonly fRCurrency: Currency;
    /**
     * @summary `fRAmount`.
     * @public
     * @readonly
     */
    readonly fRAmount: Amount;

    constructor (
        fRCurrency: Currency,
        fRAmount: Amount
    ) {
        this.fRCurrency = fRCurrency;
        this.fRAmount = fRAmount;
    }

    /**
     * @summary Restructures an object into a FlatRateCurrency
     * @description
     * 
     * This takes an `object` and converts it to a `FlatRateCurrency`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FlatRateCurrency`.
     * @returns {FlatRateCurrency}
     */
    public static _from_object (_o: { [_K in keyof (FlatRateCurrency)]: (FlatRateCurrency)[_K] }): FlatRateCurrency {
        return new FlatRateCurrency(_o.fRCurrency, _o.fRAmount);
    }

}

/**
 * @summary The Leading Root Component Types of FlatRateCurrency
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FlatRateCurrency: $.ComponentSpec[] = [
    new $.ComponentSpec("fRCurrency", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("fRAmount", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of FlatRateCurrency
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FlatRateCurrency: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FlatRateCurrency
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FlatRateCurrency: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FlatRateCurrency: $.ASN1Decoder<FlatRateCurrency> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FlatRateCurrency
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FlatRateCurrency (el: _Element): FlatRateCurrency {
    if (!_cached_decoder_for_FlatRateCurrency) { _cached_decoder_for_FlatRateCurrency = function (el: _Element): FlatRateCurrency {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("FlatRateCurrency contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "fRCurrency";
    sequence[1].name = "fRAmount";
    let fRCurrency!: Currency;
    let fRAmount!: Amount;
    fRCurrency = $._decode_implicit<Currency>(() => _decode_Currency)(sequence[0]);
    fRAmount = $._decode_implicit<Amount>(() => _decode_Amount)(sequence[1]);
    return new FlatRateCurrency(
        fRCurrency,
        fRAmount,

    );
}; }
    return _cached_decoder_for_FlatRateCurrency(el);
}

let _cached_encoder_for_FlatRateCurrency: $.ASN1Encoder<FlatRateCurrency> | null = null;

/**
 * @summary Encodes a(n) FlatRateCurrency into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FlatRateCurrency, encoded as an ASN.1 Element.
 */
export
function _encode_FlatRateCurrency (value: FlatRateCurrency, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FlatRateCurrency) { _cached_encoder_for_FlatRateCurrency = function (value: FlatRateCurrency, elGetter: $.ASN1Encoder<FlatRateCurrency>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_Currency, $.BER)(value.fRCurrency, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_Amount, $.BER)(value.fRAmount, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_FlatRateCurrency(value, elGetter);
}

/* eslint-enable */
