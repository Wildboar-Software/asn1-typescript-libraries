/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Currency, _decode_Currency, _encode_Currency } from "../SS-AOC-Operations-asn1-97/Currency.ta.mjs";
// export { Currency, _decode_Currency, _encode_Currency } from "../SS-AOC-Operations-asn1-97/Currency.ta.mjs";
import { Amount, _decode_Amount, _encode_Amount } from "../SS-AOC-Operations-asn1-97/Amount.ta.mjs";
// export { Amount, _decode_Amount, _encode_Amount } from "../SS-AOC-Operations-asn1-97/Amount.ta.mjs";
import { ChargingType, _decode_ChargingType, _encode_ChargingType, _enum_for_ChargingType } from "../SS-AOC-Operations-asn1-97/ChargingType.ta.mjs";
// export { ChargingType, _enum_for_ChargingType, ChargingType_continuousCharging /* IMPORTED_LONG_ENUMERATION_ITEM */, continuousCharging /* IMPORTED_SHORT_ENUMERATION_ITEM */, ChargingType_stepFunction /* IMPORTED_LONG_ENUMERATION_ITEM */, stepFunction /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ChargingType, _encode_ChargingType } from "../SS-AOC-Operations-asn1-97/ChargingType.ta.mjs";
import { Time, _decode_Time, _encode_Time } from "../SS-AOC-Operations-asn1-97/Time.ta.mjs";
// export { Time, _decode_Time, _encode_Time } from "../SS-AOC-Operations-asn1-97/Time.ta.mjs";


/**
 * @summary DurationCurrency
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DurationCurrency ::= SEQUENCE {
 *     dCurrency [1] IMPLICIT Currency,
 *     dAmount [2] IMPLICIT Amount,
 *     dChargingType [3] IMPLICIT ChargingType,
 *     dTime [4] IMPLICIT Time,
 *     dGranularity [5] IMPLICIT Time OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class DurationCurrency {
    /**
     * @summary `dCurrency`.
     * @public
     * @readonly
     */
    readonly dCurrency: Currency;
    /**
     * @summary `dAmount`.
     * @public
     * @readonly
     */
    readonly dAmount: Amount;
    /**
     * @summary `dChargingType`.
     * @public
     * @readonly
     */
    readonly dChargingType: ChargingType;
    /**
     * @summary `dTime`.
     * @public
     * @readonly
     */
    readonly dTime: Time;
    /**
     * @summary `dGranularity`.
     * @public
     * @readonly
     */
    readonly dGranularity: OPTIONAL<Time>;

    constructor (
        dCurrency: Currency,
        dAmount: Amount,
        dChargingType: ChargingType,
        dTime: Time,
        dGranularity: OPTIONAL<Time>
    ) {
        this.dCurrency = dCurrency;
        this.dAmount = dAmount;
        this.dChargingType = dChargingType;
        this.dTime = dTime;
        this.dGranularity = dGranularity;
    }

    /**
     * @summary Restructures an object into a DurationCurrency
     * @description
     * 
     * This takes an `object` and converts it to a `DurationCurrency`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DurationCurrency`.
     * @returns {DurationCurrency}
     */
    public static _from_object (_o: { [_K in keyof (DurationCurrency)]: (DurationCurrency)[_K] }): DurationCurrency {
        return new DurationCurrency(_o.dCurrency, _o.dAmount, _o.dChargingType, _o.dTime, _o.dGranularity);
    }

        /**
         * @summary The enum used as the type of the component `dChargingType`
         * @public
         * @static
         */

    public static _enum_for_dChargingType = _enum_for_ChargingType;
}

/**
 * @summary The Leading Root Component Types of DurationCurrency
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DurationCurrency: $.ComponentSpec[] = [
    new $.ComponentSpec("dCurrency", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("dAmount", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("dChargingType", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("dTime", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("dGranularity", true, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of DurationCurrency
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DurationCurrency: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DurationCurrency
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DurationCurrency: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DurationCurrency: $.ASN1Decoder<DurationCurrency> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DurationCurrency
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DurationCurrency (el: _Element): DurationCurrency {
    if (!_cached_decoder_for_DurationCurrency) { _cached_decoder_for_DurationCurrency = function (el: _Element): DurationCurrency {
    let dCurrency!: Currency;
    let dAmount!: Amount;
    let dChargingType!: ChargingType;
    let dTime!: Time;
    let dGranularity: OPTIONAL<Time>;
    const callbacks: $.DecodingMap = {
        "dCurrency": (_el: _Element): void => { dCurrency = $._decode_implicit<Currency>(() => _decode_Currency)(_el); },
        "dAmount": (_el: _Element): void => { dAmount = $._decode_implicit<Amount>(() => _decode_Amount)(_el); },
        "dChargingType": (_el: _Element): void => { dChargingType = $._decode_implicit<ChargingType>(() => _decode_ChargingType)(_el); },
        "dTime": (_el: _Element): void => { dTime = $._decode_implicit<Time>(() => _decode_Time)(_el); },
        "dGranularity": (_el: _Element): void => { dGranularity = $._decode_implicit<Time>(() => _decode_Time)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DurationCurrency,
        _extension_additions_list_spec_for_DurationCurrency,
        _root_component_type_list_2_spec_for_DurationCurrency,
        undefined,
    );
    return new DurationCurrency(
        dCurrency,
        dAmount,
        dChargingType,
        dTime,
        dGranularity
    );
}; }
    return _cached_decoder_for_DurationCurrency(el);
}

let _cached_encoder_for_DurationCurrency: $.ASN1Encoder<DurationCurrency> | null = null;

/**
 * @summary Encodes a(n) DurationCurrency into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DurationCurrency, encoded as an ASN.1 Element.
 */
export
function _encode_DurationCurrency (value: DurationCurrency, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DurationCurrency) { _cached_encoder_for_DurationCurrency = function (value: DurationCurrency, elGetter: $.ASN1Encoder<DurationCurrency>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_Currency, $.BER)(value.dCurrency, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_Amount, $.BER)(value.dAmount, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_ChargingType, $.BER)(value.dChargingType, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_Time, $.BER)(value.dTime, $.BER));
    if (value.dGranularity !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_Time, $.BER)(value.dGranularity, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_DurationCurrency(value, elGetter);
}


/* eslint-enable */
