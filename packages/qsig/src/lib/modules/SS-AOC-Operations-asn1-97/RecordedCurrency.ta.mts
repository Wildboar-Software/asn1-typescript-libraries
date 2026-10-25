/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type Currency, _decode_Currency, _encode_Currency } from "../SS-AOC-Operations-asn1-97/Currency.ta.mjs";
import { Amount, _decode_Amount, _encode_Amount } from "../SS-AOC-Operations-asn1-97/Amount.ta.mjs";

/**
 * @summary RecordedCurrency
 * @description
 *
 * Recorded currency units incurred for the call: a currency identifier and an
 * amount scaled by a multiplier (ECMA-211 §B.1.2, §C.1.2). ECMA-211 Annexes B
 * and C also allow a count of charging units with a type code 1..16. ECMA-212
 * §6.3.1 has no type for that alternative.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-212/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-211/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RecordedCurrency ::= SEQUENCE {
 *     rCurrency [1] IMPLICIT Currency,
 *     rAmount [2] IMPLICIT Amount
 * }
 * ```
 * 
 * @class
 */
export
class RecordedCurrency {
    /**
     * @summary `rCurrency`.
     * @description
     *
     * Currency identifier of the recorded charge. Length 0 means the PISN
     * default currency (ECMA-212 §6.3.1). AOC-D and AOC-E use local currency
     * units (ECMA-211 §7.2.1, §8.2.1).
     * @public
     * @readonly
     */
    readonly rCurrency: Currency;
    /**
     * @summary `rAmount`.
     * @description
     *
     * Recorded currency units, as an integer and a multiplier (ECMA-211
     * §B.1.2).
     * @public
     * @readonly
     */
    readonly rAmount: Amount;

    constructor (
        rCurrency: Currency,
        rAmount: Amount
    ) {
        this.rCurrency = rCurrency;
        this.rAmount = rAmount;
    }

    /**
     * @summary Restructures an object into a RecordedCurrency
     * @description
     * 
     * This takes an `object` and converts it to a `RecordedCurrency`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RecordedCurrency`.
     * @returns {RecordedCurrency}
     */
    public static _from_object (_o: { [_K in keyof (RecordedCurrency)]: (RecordedCurrency)[_K] }): RecordedCurrency {
        return new RecordedCurrency(_o.rCurrency, _o.rAmount);
    }

}

/**
 * @summary The Leading Root Component Types of RecordedCurrency
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RecordedCurrency: $.ComponentSpec[] = [
    new $.ComponentSpec("rCurrency", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("rAmount", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of RecordedCurrency
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RecordedCurrency: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RecordedCurrency
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RecordedCurrency: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RecordedCurrency: $.ASN1Decoder<RecordedCurrency> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RecordedCurrency
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RecordedCurrency (el: _Element): RecordedCurrency {
    if (!_cached_decoder_for_RecordedCurrency) { _cached_decoder_for_RecordedCurrency = function (el: _Element): RecordedCurrency {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("RecordedCurrency contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "rCurrency";
    sequence[1].name = "rAmount";
    const rCurrency: Currency = $._decode_implicit<Currency>(() => _decode_Currency)(sequence[0]);
    const rAmount: Amount = $._decode_implicit<Amount>(() => _decode_Amount)(sequence[1]);
    return new RecordedCurrency(
        rCurrency,
        rAmount,

    );
}; }
    return _cached_decoder_for_RecordedCurrency(el);
}

let _cached_encoder_for_RecordedCurrency: $.ASN1Encoder<RecordedCurrency> | null = null;

/**
 * @summary Encodes a(n) RecordedCurrency into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RecordedCurrency, encoded as an ASN.1 Element.
 */
export
function _encode_RecordedCurrency (value: RecordedCurrency, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RecordedCurrency) { _cached_encoder_for_RecordedCurrency = function (value: RecordedCurrency, _elGetter: $.ASN1Encoder<RecordedCurrency>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_Currency, $.BER)(value.rCurrency, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_Amount, $.BER)(value.rAmount, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_RecordedCurrency(value, elGetter);
}

/* eslint-enable */
