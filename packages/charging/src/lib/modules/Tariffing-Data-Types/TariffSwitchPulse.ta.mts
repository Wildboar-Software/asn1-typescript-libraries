/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TariffPulseFormat, _decode_TariffPulseFormat, _encode_TariffPulseFormat } from "../Tariffing-Data-Types/TariffPulseFormat.ta.mjs";
// export { TariffPulseFormat, _decode_TariffPulseFormat, _encode_TariffPulseFormat } from "../Tariffing-Data-Types/TariffPulseFormat.ta.mjs";
import { TariffSwitchoverTime, _decode_TariffSwitchoverTime, _encode_TariffSwitchoverTime } from "../Tariffing-Data-Types/TariffSwitchoverTime.ta.mjs";
// export { TariffSwitchoverTime, _decode_TariffSwitchoverTime, _encode_TariffSwitchoverTime } from "../Tariffing-Data-Types/TariffSwitchoverTime.ta.mjs";


/**
 * @summary TariffSwitchPulse
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TariffSwitchPulse ::= SEQUENCE {
 *     nextTariffPulse [0] TariffPulseFormat ,
 *     tariffSwitchoverTime [1] TariffSwitchoverTime }
 * ```
 * 
 * @class
 */
export
class TariffSwitchPulse {
    constructor (
        /**
         * @summary `nextTariffPulse`.
         * @public
         * @readonly
         */
        readonly nextTariffPulse: TariffPulseFormat,
        /**
         * @summary `tariffSwitchoverTime`.
         * @public
         * @readonly
         */
        readonly tariffSwitchoverTime: TariffSwitchoverTime
    ) {}

    /**
     * @summary Restructures an object into a TariffSwitchPulse
     * @description
     * 
     * This takes an `object` and converts it to a `TariffSwitchPulse`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TariffSwitchPulse`.
     * @returns {TariffSwitchPulse}
     */
    public static _from_object (_o: { [_K in keyof (TariffSwitchPulse)]: (TariffSwitchPulse)[_K] }): TariffSwitchPulse {
        return new TariffSwitchPulse(_o.nextTariffPulse, _o.tariffSwitchoverTime);
    }


}

/**
 * @summary The Leading Root Component Types of TariffSwitchPulse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TariffSwitchPulse: $.ComponentSpec[] = [
    new $.ComponentSpec("nextTariffPulse", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("tariffSwitchoverTime", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of TariffSwitchPulse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TariffSwitchPulse: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TariffSwitchPulse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TariffSwitchPulse: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TariffSwitchPulse: $.ASN1Decoder<TariffSwitchPulse> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TariffSwitchPulse
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TariffSwitchPulse (el: _Element): TariffSwitchPulse {
    if (!_cached_decoder_for_TariffSwitchPulse) { _cached_decoder_for_TariffSwitchPulse = function (el: _Element): TariffSwitchPulse {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("TariffSwitchPulse contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "nextTariffPulse";
    sequence[1].name = "tariffSwitchoverTime";
    let nextTariffPulse!: TariffPulseFormat;
    let tariffSwitchoverTime!: TariffSwitchoverTime;
    nextTariffPulse = $._decode_implicit<TariffPulseFormat>(() => _decode_TariffPulseFormat)(sequence[0]);
    tariffSwitchoverTime = $._decode_implicit<TariffSwitchoverTime>(() => _decode_TariffSwitchoverTime)(sequence[1]);
    return new TariffSwitchPulse(
        nextTariffPulse,
        tariffSwitchoverTime,

    );
}; }
    return _cached_decoder_for_TariffSwitchPulse(el);
}

let _cached_encoder_for_TariffSwitchPulse: $.ASN1Encoder<TariffSwitchPulse> | null = null;

/**
 * @summary Encodes a(n) TariffSwitchPulse into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TariffSwitchPulse, encoded as an ASN.1 Element.
 */
export
function _encode_TariffSwitchPulse (value: TariffSwitchPulse, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TariffSwitchPulse) { _cached_encoder_for_TariffSwitchPulse = function (value: TariffSwitchPulse, elGetter: $.ASN1Encoder<TariffSwitchPulse>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_TariffPulseFormat, $.BER)(value.nextTariffPulse, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_TariffSwitchoverTime, $.BER)(value.tariffSwitchoverTime, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TariffSwitchPulse(value, elGetter);
}


/* eslint-enable */
