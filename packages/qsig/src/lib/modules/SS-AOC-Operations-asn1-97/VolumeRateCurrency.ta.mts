/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Currency, _decode_Currency, _encode_Currency } from "../SS-AOC-Operations-asn1-97/Currency.ta.mjs";
import { Amount, _decode_Amount, _encode_Amount } from "../SS-AOC-Operations-asn1-97/Amount.ta.mjs";
import { VolumeUnit, _decode_VolumeUnit, _encode_VolumeUnit, _enum_for_VolumeUnit } from "../SS-AOC-Operations-asn1-97/VolumeUnit.ta.mjs";

/**
 * @summary VolumeRateCurrency
 * @description
 *
 * Currency value of one volume unit (ECMA-211 §A.1.3.2). ECMA-211 §A.2
 * associates a volume rate with user-to-user information transfer.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-212/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-211/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VolumeRateCurrency ::= SEQUENCE {
 *     vRCurrency [1] IMPLICIT Currency,
 *     vRAmount [2] IMPLICIT Amount,
 *     vRVolumeUnit [3] IMPLICIT VolumeUnit
 * }
 * ```
 * 
 * @class
 */
export
class VolumeRateCurrency {
    /**
     * @summary `vRCurrency`.
     * @description
     *
     * Currency identifier for the price of one volume unit. Length 0 means the
     * PISN default currency (ECMA-212 §6.3.1).
     * @public
     * @readonly
     */
    readonly vRCurrency: Currency;
    /**
     * @summary `vRAmount`.
     * @description
     *
     * Price of one volume unit, as an integer and a multiplier (ECMA-211
     * §A.1.3.2).
     * @public
     * @readonly
     */
    readonly vRAmount: Amount;
    /**
     * @summary `vRVolumeUnit`.
     * @description
     *
     * Octet, segment, or a message that carries user-to-user information
     * (ECMA-211 §A.1.3.2).
     * @public
     * @readonly
     */
    readonly vRVolumeUnit: VolumeUnit;

    constructor (
        vRCurrency: Currency,
        vRAmount: Amount,
        vRVolumeUnit: VolumeUnit
    ) {
        this.vRCurrency = vRCurrency;
        this.vRAmount = vRAmount;
        this.vRVolumeUnit = vRVolumeUnit;
    }

    /**
     * @summary Restructures an object into a VolumeRateCurrency
     * @description
     * 
     * This takes an `object` and converts it to a `VolumeRateCurrency`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `VolumeRateCurrency`.
     * @returns {VolumeRateCurrency}
     */
    public static _from_object (_o: { [_K in keyof (VolumeRateCurrency)]: (VolumeRateCurrency)[_K] }): VolumeRateCurrency {
        return new VolumeRateCurrency(_o.vRCurrency, _o.vRAmount, _o.vRVolumeUnit);
    }

        /**
         * @summary The enum used as the type of the component `vRVolumeUnit`
         * @public
         * @static
         */

    public static _enum_for_vRVolumeUnit = _enum_for_VolumeUnit;
}

/**
 * @summary The Leading Root Component Types of VolumeRateCurrency
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_VolumeRateCurrency: $.ComponentSpec[] = [
    new $.ComponentSpec("vRCurrency", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("vRAmount", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("vRVolumeUnit", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of VolumeRateCurrency
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_VolumeRateCurrency: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of VolumeRateCurrency
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_VolumeRateCurrency: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_VolumeRateCurrency: $.ASN1Decoder<VolumeRateCurrency> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) VolumeRateCurrency
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_VolumeRateCurrency (el: _Element): VolumeRateCurrency {
    if (!_cached_decoder_for_VolumeRateCurrency) { _cached_decoder_for_VolumeRateCurrency = function (el: _Element): VolumeRateCurrency {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("VolumeRateCurrency contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "vRCurrency";
    sequence[1].name = "vRAmount";
    sequence[2].name = "vRVolumeUnit";
    const vRCurrency: Currency = $._decode_implicit<Currency>(() => _decode_Currency)(sequence[0]);
    const vRAmount: Amount = $._decode_implicit<Amount>(() => _decode_Amount)(sequence[1]);
    const vRVolumeUnit: VolumeUnit = $._decode_implicit<VolumeUnit>(() => _decode_VolumeUnit)(sequence[2]);
    return new VolumeRateCurrency(
        vRCurrency,
        vRAmount,
        vRVolumeUnit,

    );
}; }
    return _cached_decoder_for_VolumeRateCurrency(el);
}

let _cached_encoder_for_VolumeRateCurrency: $.ASN1Encoder<VolumeRateCurrency> | null = null;

/**
 * @summary Encodes a(n) VolumeRateCurrency into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The VolumeRateCurrency, encoded as an ASN.1 Element.
 */
export
function _encode_VolumeRateCurrency (value: VolumeRateCurrency, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_VolumeRateCurrency) { _cached_encoder_for_VolumeRateCurrency = function (value: VolumeRateCurrency, _elGetter: $.ASN1Encoder<VolumeRateCurrency>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_Currency, $.BER)(value.vRCurrency, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_Amount, $.BER)(value.vRAmount, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_VolumeUnit, $.BER)(value.vRVolumeUnit, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_VolumeRateCurrency(value, elGetter);
}

/* eslint-enable */
