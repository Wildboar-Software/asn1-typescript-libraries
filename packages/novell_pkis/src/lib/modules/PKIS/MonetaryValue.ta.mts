/* eslint-disable */
import {
    INTEGER,
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Currency, _decode_Currency, _encode_Currency } from "../PKIS/Currency.ta.mjs";
// export { Currency, _decode_Currency, _encode_Currency } from "../PKIS/Currency.ta.mjs";


/**
 * @summary MonetaryValue
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MonetaryValue ::= SEQUENCE { -- from SET and draft ANSI X9.45
 *  currency Currency,
 *  amount INTEGER, -- value is amount * (10 ** amtExp10), an exact representation
 *  amtExp10 INTEGER
 * }
 * ```
 * 
 * @class
 */
export
class MonetaryValue {
    constructor (
        /**
         * @summary `currency`.
         * @public
         * @readonly
         */
        readonly currency: Currency,
        /**
         * @summary `amount`.
         * @public
         * @readonly
         */
        readonly amount: INTEGER,
        /**
         * @summary `amtExp10`.
         * @public
         * @readonly
         */
        readonly amtExp10: INTEGER
    ) {}

    /**
     * @summary Restructures an object into a MonetaryValue
     * @description
     * 
     * This takes an `object` and converts it to a `MonetaryValue`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MonetaryValue`.
     * @returns {MonetaryValue}
     */
    public static _from_object (_o: { [_K in keyof (MonetaryValue)]: (MonetaryValue)[_K] }): MonetaryValue {
        return new MonetaryValue(_o.currency, _o.amount, _o.amtExp10);
    }


}

/**
 * @summary The Leading Root Component Types of MonetaryValue
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MonetaryValue: $.ComponentSpec[] = [
    new $.ComponentSpec("currency", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("amount", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("amtExp10", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of MonetaryValue
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MonetaryValue: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MonetaryValue
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MonetaryValue: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MonetaryValue: $.ASN1Decoder<MonetaryValue> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MonetaryValue
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MonetaryValue (el: _Element): MonetaryValue {
    if (!_cached_decoder_for_MonetaryValue) { _cached_decoder_for_MonetaryValue = function (el: _Element): MonetaryValue {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("MonetaryValue contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "currency";
    sequence[1].name = "amount";
    sequence[2].name = "amtExp10";
    let currency!: Currency;
    let amount!: INTEGER;
    let amtExp10!: INTEGER;
    currency = _decode_Currency(sequence[0]);
    amount = $._decodeInteger(sequence[1]);
    amtExp10 = $._decodeInteger(sequence[2]);
    return new MonetaryValue(
        currency,
        amount,
        amtExp10,

    );
}; }
    return _cached_decoder_for_MonetaryValue(el);
}

let _cached_encoder_for_MonetaryValue: $.ASN1Encoder<MonetaryValue> | null = null;

/**
 * @summary Encodes a(n) MonetaryValue into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MonetaryValue, encoded as an ASN.1 Element.
 */
export
function _encode_MonetaryValue (value: MonetaryValue, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MonetaryValue) { _cached_encoder_for_MonetaryValue = function (value: MonetaryValue, elGetter: $.ASN1Encoder<MonetaryValue>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_Currency(value.currency, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.amount, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.amtExp10, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_MonetaryValue(value, elGetter);
}


/* eslint-enable */
