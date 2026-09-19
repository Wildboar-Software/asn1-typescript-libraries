/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TariffCurrencyFormat, _decode_TariffCurrencyFormat, _encode_TariffCurrencyFormat } from "../Tariffing-Data-Types/TariffCurrencyFormat.ta.mjs";
// export { TariffCurrencyFormat, _decode_TariffCurrencyFormat, _encode_TariffCurrencyFormat } from "../Tariffing-Data-Types/TariffCurrencyFormat.ta.mjs";
import { TariffSwitchoverTime, _decode_TariffSwitchoverTime, _encode_TariffSwitchoverTime } from "../Tariffing-Data-Types/TariffSwitchoverTime.ta.mjs";
// export { TariffSwitchoverTime, _decode_TariffSwitchoverTime, _encode_TariffSwitchoverTime } from "../Tariffing-Data-Types/TariffSwitchoverTime.ta.mjs";


/**
 * @summary TariffSwitchCurrency
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TariffSwitchCurrency ::= SEQUENCE {
 *     nextTariffCurrency        [0] TariffCurrencyFormat ,
 *     tariffSwitchoverTime    [1] TariffSwitchoverTime
 * }
 * ```
 * 
 * @class
 */
export
class TariffSwitchCurrency {
    constructor (
        /**
         * @summary `nextTariffCurrency`.
         * @public
         * @readonly
         */
        readonly nextTariffCurrency: TariffCurrencyFormat,
        /**
         * @summary `tariffSwitchoverTime`.
         * @public
         * @readonly
         */
        readonly tariffSwitchoverTime: TariffSwitchoverTime
    ) {}

    /**
     * @summary Restructures an object into a TariffSwitchCurrency
     * @description
     * 
     * This takes an `object` and converts it to a `TariffSwitchCurrency`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TariffSwitchCurrency`.
     * @returns {TariffSwitchCurrency}
     */
    public static _from_object (_o: { [_K in keyof (TariffSwitchCurrency)]: (TariffSwitchCurrency)[_K] }): TariffSwitchCurrency {
        return new TariffSwitchCurrency(_o.nextTariffCurrency, _o.tariffSwitchoverTime);
    }


}

/**
 * @summary The Leading Root Component Types of TariffSwitchCurrency
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TariffSwitchCurrency: $.ComponentSpec[] = [
    new $.ComponentSpec("nextTariffCurrency", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("tariffSwitchoverTime", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of TariffSwitchCurrency
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TariffSwitchCurrency: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TariffSwitchCurrency
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TariffSwitchCurrency: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TariffSwitchCurrency: $.ASN1Decoder<TariffSwitchCurrency> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TariffSwitchCurrency
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TariffSwitchCurrency (el: _Element): TariffSwitchCurrency {
    if (!_cached_decoder_for_TariffSwitchCurrency) { _cached_decoder_for_TariffSwitchCurrency = function (el: _Element): TariffSwitchCurrency {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("TariffSwitchCurrency contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "nextTariffCurrency";
    sequence[1].name = "tariffSwitchoverTime";
    let nextTariffCurrency!: TariffCurrencyFormat;
    let tariffSwitchoverTime!: TariffSwitchoverTime;
    nextTariffCurrency = $._decode_implicit<TariffCurrencyFormat>(() => _decode_TariffCurrencyFormat)(sequence[0]);
    tariffSwitchoverTime = $._decode_implicit<TariffSwitchoverTime>(() => _decode_TariffSwitchoverTime)(sequence[1]);
    return new TariffSwitchCurrency(
        nextTariffCurrency,
        tariffSwitchoverTime,

    );
}; }
    return _cached_decoder_for_TariffSwitchCurrency(el);
}

let _cached_encoder_for_TariffSwitchCurrency: $.ASN1Encoder<TariffSwitchCurrency> | null = null;

/**
 * @summary Encodes a(n) TariffSwitchCurrency into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TariffSwitchCurrency, encoded as an ASN.1 Element.
 */
export
function _encode_TariffSwitchCurrency (value: TariffSwitchCurrency, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TariffSwitchCurrency) { _cached_encoder_for_TariffSwitchCurrency = function (value: TariffSwitchCurrency, elGetter: $.ASN1Encoder<TariffSwitchCurrency>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_TariffCurrencyFormat, $.BER)(value.nextTariffCurrency, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_TariffSwitchoverTime, $.BER)(value.tariffSwitchoverTime, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TariffSwitchCurrency(value, elGetter);
}


/* eslint-enable */
