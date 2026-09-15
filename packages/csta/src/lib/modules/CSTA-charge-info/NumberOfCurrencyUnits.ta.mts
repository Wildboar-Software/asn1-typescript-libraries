/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    INTEGER,
    OCTET_STRING,
    ENUMERATED,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1ConstructionError as _ConstructionError
} from "@wildboar/asn1";
import {
    NumberOfCurrencyUnits_currencyMultiplier,
    _enum_for_NumberOfCurrencyUnits_currencyMultiplier,
    oneThousandth /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    oneHundredth /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    oneTenth /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    one /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    ten /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    hundred /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    thousand /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_NumberOfCurrencyUnits_currencyMultiplier,
    _encode_NumberOfCurrencyUnits_currencyMultiplier
} from "../CSTA-charge-info/NumberOfCurrencyUnits-currencyMultiplier.ta.mjs";



/**
 * @summary NumberOfCurrencyUnits
 * @description
 *
 * Cumulative currency: type, amount, and multiplier. A zero-length
 * `currencyType` is the default currency. ECMA-269 §12.2.7.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/ ECMA-269}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NumberOfCurrencyUnits ::= SEQUENCE
 * {     currencyType         OCTET STRING,     -- size 0 indicates default currency
 *     currencyAmount         INTEGER,
 *     currencyMultiplier     ENUMERATED
 *     {     oneThousandth         (0),
 *         oneHundredth         (1),
 *         oneTenth         (2),
 *         one             (3),
 *         ten             (4),
 *         hundred         (5),
 *         thousand         (6)
 *      }
 * }
 * ```
 * 
 * @class
 */
export
class NumberOfCurrencyUnits {
    constructor (
        /**
         * @summary `currencyType`.
         * @description
         *
         * Currency type; empty means the default. Network-dependent. ECMA-269
         * §12.2.7.
         *
         * @public
         * @readonly
         */
        readonly currencyType: OCTET_STRING,
        /**
         * @summary `currencyAmount`.
         * @description
         *
         * Cumulative currency units. ECMA-269 §12.2.7.
         *
         * @public
         * @readonly
         */
        readonly currencyAmount: INTEGER,
        /**
         * @summary `currencyMultiplier`.
         * @description
         *
         * 0.001, 0.01, 0.1, 1, 10, 100, or 1000. ECMA-269 §12.2.7.
         *
         * @public
         * @readonly
         */
        readonly currencyMultiplier: NumberOfCurrencyUnits_currencyMultiplier
    ) {}

    /**
     * @summary Restructures an object into a NumberOfCurrencyUnits
     * @description
     * 
     * This takes an `object` and converts it to a `NumberOfCurrencyUnits`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NumberOfCurrencyUnits`.
     * @returns {NumberOfCurrencyUnits}
     */
    public static _from_object (_o: { [_K in keyof (NumberOfCurrencyUnits)]: (NumberOfCurrencyUnits)[_K] }): NumberOfCurrencyUnits {
        return new NumberOfCurrencyUnits(_o.currencyType, _o.currencyAmount, _o.currencyMultiplier);
    }

        /**
         * @summary The enum used as the type of the component `currencyMultiplier`
         * @public
         * @static
         */

    public static _enum_for_currencyMultiplier = _enum_for_NumberOfCurrencyUnits_currencyMultiplier;
}

/**
 * @summary The Leading Root Component Types of NumberOfCurrencyUnits
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_NumberOfCurrencyUnits: $.ComponentSpec[] = [
    new $.ComponentSpec("currencyType", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("currencyAmount", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("currencyMultiplier", false, $.hasTag(_TagClass.universal, 10))
];

/**
 * @summary The Trailing Root Component Types of NumberOfCurrencyUnits
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_NumberOfCurrencyUnits: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of NumberOfCurrencyUnits
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_NumberOfCurrencyUnits: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_NumberOfCurrencyUnits: $.ASN1Decoder<NumberOfCurrencyUnits> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NumberOfCurrencyUnits
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NumberOfCurrencyUnits (el: _Element): NumberOfCurrencyUnits {
    if (!_cached_decoder_for_NumberOfCurrencyUnits) { _cached_decoder_for_NumberOfCurrencyUnits = function (el: _Element): NumberOfCurrencyUnits {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("NumberOfCurrencyUnits contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "currencyType";
    sequence[1].name = "currencyAmount";
    sequence[2].name = "currencyMultiplier";
    let currencyType!: OCTET_STRING;
    let currencyAmount!: INTEGER;
    let currencyMultiplier!: NumberOfCurrencyUnits_currencyMultiplier;
    currencyType = $._decodeOctetString(sequence[0]);
    currencyAmount = $._decodeInteger(sequence[1]);
    currencyMultiplier = _decode_NumberOfCurrencyUnits_currencyMultiplier(sequence[2]);
    return new NumberOfCurrencyUnits(
        currencyType,
        currencyAmount,
        currencyMultiplier,

    );
}; }
    return _cached_decoder_for_NumberOfCurrencyUnits(el);
}

let _cached_encoder_for_NumberOfCurrencyUnits: $.ASN1Encoder<NumberOfCurrencyUnits> | null = null;

/**
 * @summary Encodes a(n) NumberOfCurrencyUnits into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NumberOfCurrencyUnits, encoded as an ASN.1 Element.
 */
export
function _encode_NumberOfCurrencyUnits (value: NumberOfCurrencyUnits, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NumberOfCurrencyUnits) { _cached_encoder_for_NumberOfCurrencyUnits = function (value: NumberOfCurrencyUnits, elGetter: $.ASN1Encoder<NumberOfCurrencyUnits>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeOctetString(value.currencyType, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.currencyAmount, $.BER),
            /* REQUIRED   */ _encode_NumberOfCurrencyUnits_currencyMultiplier(value.currencyMultiplier, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_NumberOfCurrencyUnits(value, elGetter);
}


/* eslint-enable */
