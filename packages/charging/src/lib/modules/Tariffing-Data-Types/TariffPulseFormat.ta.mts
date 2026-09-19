/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CommunicationChargePulse, _decode_CommunicationChargePulse, _encode_CommunicationChargePulse } from "../Tariffing-Data-Types/CommunicationChargePulse.ta.mjs";
// export { CommunicationChargePulse, _decode_CommunicationChargePulse, _encode_CommunicationChargePulse } from "../Tariffing-Data-Types/CommunicationChargePulse.ta.mjs";
import { TariffPulseFormat_tariffControlIndicators, _decode_TariffPulseFormat_tariffControlIndicators, _encode_TariffPulseFormat_tariffControlIndicators } from "../Tariffing-Data-Types/TariffPulseFormat-tariffControlIndicators.ta.mjs";
// export { TariffPulseFormat_tariffControlIndicators, TariffPulseFormat_tariffControlIndicators_non_cyclicTariff /* IMPORTED_LONG_NAMED_BIT */, non_cyclicTariff /* IMPORTED_SHORT_NAMED_BIT */, _decode_TariffPulseFormat_tariffControlIndicators, _encode_TariffPulseFormat_tariffControlIndicators } from "../Tariffing-Data-Types/TariffPulseFormat-tariffControlIndicators.ta.mjs";
import { PulseUnits, _decode_PulseUnits, _encode_PulseUnits } from "../Tariffing-Data-Types/PulseUnits.ta.mjs";
// export { PulseUnits, _decode_PulseUnits, _encode_PulseUnits } from "../Tariffing-Data-Types/PulseUnits.ta.mjs";


/**
 * @summary TariffPulseFormat
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TariffPulseFormat ::= SEQUENCE {
 *     communicationChargeSequencePulse [0] SEQUENCE
 *         SIZE(minCommunicationTariffNum.. maxCommunicationTariffNum)
 *         OF CommunicationChargePulse OPTIONAL ,
 *     tariffControlIndicators [1] BIT STRING {
 *         non-cyclicTariff (0) }
 *         (SIZE(minTariffIndicatorsLen..maxTariffIndicatorsLen)) ,
 *     callAttemptChargePulse [2] PulseUnits OPTIONAL ,
 *     callSetupChargePulse [3] PulseUnits OPTIONAL }
 * ```
 * 
 * @class
 */
export
class TariffPulseFormat {
    constructor (
        /**
         * @summary `communicationChargeSequencePulse`.
         * @public
         * @readonly
         */
        readonly communicationChargeSequencePulse: OPTIONAL<CommunicationChargePulse[]>,
        /**
         * @summary `tariffControlIndicators`.
         * @public
         * @readonly
         */
        readonly tariffControlIndicators: TariffPulseFormat_tariffControlIndicators,
        /**
         * @summary `callAttemptChargePulse`.
         * @public
         * @readonly
         */
        readonly callAttemptChargePulse: OPTIONAL<PulseUnits>,
        /**
         * @summary `callSetupChargePulse`.
         * @public
         * @readonly
         */
        readonly callSetupChargePulse: OPTIONAL<PulseUnits>
    ) {}

    /**
     * @summary Restructures an object into a TariffPulseFormat
     * @description
     * 
     * This takes an `object` and converts it to a `TariffPulseFormat`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TariffPulseFormat`.
     * @returns {TariffPulseFormat}
     */
    public static _from_object (_o: { [_K in keyof (TariffPulseFormat)]: (TariffPulseFormat)[_K] }): TariffPulseFormat {
        return new TariffPulseFormat(_o.communicationChargeSequencePulse, _o.tariffControlIndicators, _o.callAttemptChargePulse, _o.callSetupChargePulse);
    }


}

/**
 * @summary The Leading Root Component Types of TariffPulseFormat
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TariffPulseFormat: $.ComponentSpec[] = [
    new $.ComponentSpec("communicationChargeSequencePulse", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("tariffControlIndicators", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("callAttemptChargePulse", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("callSetupChargePulse", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of TariffPulseFormat
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TariffPulseFormat: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TariffPulseFormat
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TariffPulseFormat: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TariffPulseFormat: $.ASN1Decoder<TariffPulseFormat> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TariffPulseFormat
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TariffPulseFormat (el: _Element): TariffPulseFormat {
    if (!_cached_decoder_for_TariffPulseFormat) { _cached_decoder_for_TariffPulseFormat = function (el: _Element): TariffPulseFormat {
    let communicationChargeSequencePulse: OPTIONAL<CommunicationChargePulse[]>;
    let tariffControlIndicators!: TariffPulseFormat_tariffControlIndicators;
    let callAttemptChargePulse: OPTIONAL<PulseUnits>;
    let callSetupChargePulse: OPTIONAL<PulseUnits>;
    const callbacks: $.DecodingMap = {
        "communicationChargeSequencePulse": (_el: _Element): void => { communicationChargeSequencePulse = $._decode_implicit<CommunicationChargePulse[]>(() => $._decodeSequenceOf<CommunicationChargePulse>(() => _decode_CommunicationChargePulse))(_el); },
        "tariffControlIndicators": (_el: _Element): void => { tariffControlIndicators = $._decode_implicit<TariffPulseFormat_tariffControlIndicators>(() => _decode_TariffPulseFormat_tariffControlIndicators)(_el); },
        "callAttemptChargePulse": (_el: _Element): void => { callAttemptChargePulse = $._decode_implicit<PulseUnits>(() => _decode_PulseUnits)(_el); },
        "callSetupChargePulse": (_el: _Element): void => { callSetupChargePulse = $._decode_implicit<PulseUnits>(() => _decode_PulseUnits)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TariffPulseFormat,
        _extension_additions_list_spec_for_TariffPulseFormat,
        _root_component_type_list_2_spec_for_TariffPulseFormat,
        undefined,
    );
    return new TariffPulseFormat(
        communicationChargeSequencePulse,
        tariffControlIndicators,
        callAttemptChargePulse,
        callSetupChargePulse
    );
}; }
    return _cached_decoder_for_TariffPulseFormat(el);
}

let _cached_encoder_for_TariffPulseFormat: $.ASN1Encoder<TariffPulseFormat> | null = null;

/**
 * @summary Encodes a(n) TariffPulseFormat into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TariffPulseFormat, encoded as an ASN.1 Element.
 */
export
function _encode_TariffPulseFormat (value: TariffPulseFormat, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TariffPulseFormat) { _cached_encoder_for_TariffPulseFormat = function (value: TariffPulseFormat, elGetter: $.ASN1Encoder<TariffPulseFormat>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.communicationChargeSequencePulse === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeSequenceOf<CommunicationChargePulse>(() => _encode_CommunicationChargePulse, $.BER), $.BER)(value.communicationChargeSequencePulse, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_TariffPulseFormat_tariffControlIndicators, $.BER)(value.tariffControlIndicators, $.BER),
            /* IF_ABSENT  */ ((value.callAttemptChargePulse === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_PulseUnits, $.BER)(value.callAttemptChargePulse, $.BER)),
            /* IF_ABSENT  */ ((value.callSetupChargePulse === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_PulseUnits, $.BER)(value.callSetupChargePulse, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TariffPulseFormat(value, elGetter);
}


/* eslint-enable */
