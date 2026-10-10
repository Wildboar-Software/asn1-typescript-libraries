/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TariffPulseFormat, _decode_TariffPulseFormat, _encode_TariffPulseFormat } from "../Tariffing-Data-Types/TariffPulseFormat.ta.mjs";
import { TariffSwitchPulse, _decode_TariffSwitchPulse, _encode_TariffSwitchPulse } from "../Tariffing-Data-Types/TariffSwitchPulse.ta.mjs";


/**
 * @summary TariffPulse
 * @description
 *
 * Meter-pulse tariff inside a CRGT. Both components are optional,
 * but the first CRGT shall contain a current tariff, and a next
 * tariff without its switch-over time (or the reverse) is not
 * accepted. Sending the current tariff alone deletes a stored next
 * tariff and its switch-over time.
 *
 * The current tariff and the next tariff have the same parameter
 * structure. Call-attempt and call-setup pulse counts are also
 * placed in the first next tariff, so they still apply if the
 * switch-over time has already passed when charging starts.
 *
 * [ES 201 296 V1.3.1, clauses 6.1.1, 6.1.2.3, 6.3.9, and 9](https://www.etsi.org/deliver/etsi_es/201200_201299/201296/01.03.01_60/es_201296v010301p.pdf).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TariffPulse ::= SEQUENCE {
 *     currentTariffPulse [0] TariffPulseFormat OPTIONAL ,
 *     tariffSwitchPulse [1] TariffSwitchPulse OPTIONAL }
 * ```
 * 
 * @class
 */
export
class TariffPulse {
    constructor (
        /**
         * Tariff applied at the start of charging, or the
         * replacement when the current tariff changes. A CRGT that
         * only carries this component deletes a stored next tariff
         * and its switch-over time (clause 6.1.2.3).
         * @public
         * @readonly
         */
        readonly currentTariffPulse: OPTIONAL<TariffPulseFormat>,
        /**
         * Next tariff and the GMT time it becomes active. The two
         * are always sent together. Omit this component to delete a
         * previously stored next tariff (clause 6.1.2.3).
         * @public
         * @readonly
         */
        readonly tariffSwitchPulse: OPTIONAL<TariffSwitchPulse>
    ) {}

    /**
     * @summary Restructures an object into a TariffPulse
     * @description
     * 
     * This takes an `object` and converts it to a `TariffPulse`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TariffPulse`.
     * @returns {TariffPulse}
     */
    public static _from_object (_o: { [_K in keyof (TariffPulse)]: (TariffPulse)[_K] }): TariffPulse {
        return new TariffPulse(_o.currentTariffPulse, _o.tariffSwitchPulse);
    }


}

/**
 * @summary The Leading Root Component Types of TariffPulse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TariffPulse: $.ComponentSpec[] = [
    new $.ComponentSpec("currentTariffPulse", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("tariffSwitchPulse", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of TariffPulse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TariffPulse: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TariffPulse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TariffPulse: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TariffPulse: $.ASN1Decoder<TariffPulse> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TariffPulse
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TariffPulse (el: _Element): TariffPulse {
    if (!_cached_decoder_for_TariffPulse) { _cached_decoder_for_TariffPulse = function (el: _Element): TariffPulse {
    let currentTariffPulse: OPTIONAL<TariffPulseFormat>;
    let tariffSwitchPulse: OPTIONAL<TariffSwitchPulse>;
    const callbacks: $.DecodingMap = {
        "currentTariffPulse": (_el: _Element): void => { currentTariffPulse = $._decode_implicit<TariffPulseFormat>(() => _decode_TariffPulseFormat)(_el); },
        "tariffSwitchPulse": (_el: _Element): void => { tariffSwitchPulse = $._decode_implicit<TariffSwitchPulse>(() => _decode_TariffSwitchPulse)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TariffPulse,
        _extension_additions_list_spec_for_TariffPulse,
        _root_component_type_list_2_spec_for_TariffPulse,
        undefined,
    );
    return new TariffPulse(
        currentTariffPulse,
        tariffSwitchPulse
    );
}; }
    return _cached_decoder_for_TariffPulse(el);
}

let _cached_encoder_for_TariffPulse: $.ASN1Encoder<TariffPulse> | null = null;

/**
 * @summary Encodes a(n) TariffPulse into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TariffPulse, encoded as an ASN.1 Element.
 */
export
function _encode_TariffPulse (value: TariffPulse, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TariffPulse) { _cached_encoder_for_TariffPulse = function (value: TariffPulse, _elGetter: $.ASN1Encoder<TariffPulse>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.currentTariffPulse === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_TariffPulseFormat, $.BER)(value.currentTariffPulse, $.BER)),
            /* IF_ABSENT  */ ((value.tariffSwitchPulse === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_TariffSwitchPulse, $.BER)(value.tariffSwitchPulse, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TariffPulse(value, elGetter);
}


/* eslint-enable */
