/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CurrencyFactorScale, _decode_CurrencyFactorScale, _encode_CurrencyFactorScale } from "../Tariffing-Data-Types/CurrencyFactorScale.ta.mjs";
// export { CurrencyFactorScale, _decode_CurrencyFactorScale, _encode_CurrencyFactorScale } from "../Tariffing-Data-Types/CurrencyFactorScale.ta.mjs";
import { TariffDuration, _decode_TariffDuration, _encode_TariffDuration } from "../Tariffing-Data-Types/TariffDuration.ta.mjs";
// export { TariffDuration, _decode_TariffDuration, _encode_TariffDuration } from "../Tariffing-Data-Types/TariffDuration.ta.mjs";
import { SubTariffControl, _decode_SubTariffControl, _encode_SubTariffControl } from "../Tariffing-Data-Types/SubTariffControl.ta.mjs";
// export { SubTariffControl, SubTariffControl_oneTimeCharge /* IMPORTED_LONG_NAMED_BIT */, oneTimeCharge /* IMPORTED_SHORT_NAMED_BIT */, _decode_SubTariffControl, _encode_SubTariffControl } from "../Tariffing-Data-Types/SubTariffControl.ta.mjs";


/**
 * @summary CommunicationChargeCurrency
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CommunicationChargeCurrency ::= SEQUENCE {
 *     currencyFactorScale        [0] CurrencyFactorScale ,
 *     tariffDuration            [1] TariffDuration ,
 *     subTariffControl        [2] SubTariffControl }
 * ```
 * 
 * @class
 */
export
class CommunicationChargeCurrency {
    constructor (
        /**
         * @summary `currencyFactorScale`.
         * @public
         * @readonly
         */
        readonly currencyFactorScale: CurrencyFactorScale,
        /**
         * @summary `tariffDuration`.
         * @public
         * @readonly
         */
        readonly tariffDuration: TariffDuration,
        /**
         * @summary `subTariffControl`.
         * @public
         * @readonly
         */
        readonly subTariffControl: SubTariffControl
    ) {}

    /**
     * @summary Restructures an object into a CommunicationChargeCurrency
     * @description
     * 
     * This takes an `object` and converts it to a `CommunicationChargeCurrency`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CommunicationChargeCurrency`.
     * @returns {CommunicationChargeCurrency}
     */
    public static _from_object (_o: { [_K in keyof (CommunicationChargeCurrency)]: (CommunicationChargeCurrency)[_K] }): CommunicationChargeCurrency {
        return new CommunicationChargeCurrency(_o.currencyFactorScale, _o.tariffDuration, _o.subTariffControl);
    }


}

/**
 * @summary The Leading Root Component Types of CommunicationChargeCurrency
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CommunicationChargeCurrency: $.ComponentSpec[] = [
    new $.ComponentSpec("currencyFactorScale", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("tariffDuration", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("subTariffControl", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of CommunicationChargeCurrency
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CommunicationChargeCurrency: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CommunicationChargeCurrency
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CommunicationChargeCurrency: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CommunicationChargeCurrency: $.ASN1Decoder<CommunicationChargeCurrency> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CommunicationChargeCurrency
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CommunicationChargeCurrency (el: _Element): CommunicationChargeCurrency {
    if (!_cached_decoder_for_CommunicationChargeCurrency) { _cached_decoder_for_CommunicationChargeCurrency = function (el: _Element): CommunicationChargeCurrency {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("CommunicationChargeCurrency contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "currencyFactorScale";
    sequence[1].name = "tariffDuration";
    sequence[2].name = "subTariffControl";
    let currencyFactorScale!: CurrencyFactorScale;
    let tariffDuration!: TariffDuration;
    let subTariffControl!: SubTariffControl;
    currencyFactorScale = $._decode_implicit<CurrencyFactorScale>(() => _decode_CurrencyFactorScale)(sequence[0]);
    tariffDuration = $._decode_implicit<TariffDuration>(() => _decode_TariffDuration)(sequence[1]);
    subTariffControl = $._decode_implicit<SubTariffControl>(() => _decode_SubTariffControl)(sequence[2]);
    return new CommunicationChargeCurrency(
        currencyFactorScale,
        tariffDuration,
        subTariffControl,

    );
}; }
    return _cached_decoder_for_CommunicationChargeCurrency(el);
}

let _cached_encoder_for_CommunicationChargeCurrency: $.ASN1Encoder<CommunicationChargeCurrency> | null = null;

/**
 * @summary Encodes a(n) CommunicationChargeCurrency into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CommunicationChargeCurrency, encoded as an ASN.1 Element.
 */
export
function _encode_CommunicationChargeCurrency (value: CommunicationChargeCurrency, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CommunicationChargeCurrency) { _cached_encoder_for_CommunicationChargeCurrency = function (value: CommunicationChargeCurrency, elGetter: $.ASN1Encoder<CommunicationChargeCurrency>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_CurrencyFactorScale, $.BER)(value.currencyFactorScale, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_TariffDuration, $.BER)(value.tariffDuration, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_SubTariffControl, $.BER)(value.subTariffControl, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CommunicationChargeCurrency(value, elGetter);
}


/* eslint-enable */
