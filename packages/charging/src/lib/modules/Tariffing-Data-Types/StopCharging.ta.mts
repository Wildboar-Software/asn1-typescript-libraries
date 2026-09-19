/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { StopCharging_stopIndicators, _decode_StopCharging_stopIndicators, _encode_StopCharging_stopIndicators } from "../Tariffing-Data-Types/StopCharging-stopIndicators.ta.mjs";
// export { StopCharging_stopIndicators, StopCharging_stopIndicators_callAttemptChargesApplicable /* IMPORTED_LONG_NAMED_BIT */, callAttemptChargesApplicable /* IMPORTED_SHORT_NAMED_BIT */, _decode_StopCharging_stopIndicators, _encode_StopCharging_stopIndicators } from "../Tariffing-Data-Types/StopCharging-stopIndicators.ta.mjs";
import { NetworkIdentification, _decode_NetworkIdentification, _encode_NetworkIdentification } from "../Tariffing-Data-Types/NetworkIdentification.ta.mjs";
// export { NetworkIdentification, _decode_NetworkIdentification, _encode_NetworkIdentification } from "../Tariffing-Data-Types/NetworkIdentification.ta.mjs";
import { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../Tariffing-Data-Types/ExtensionField.ta.mjs";
// export { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../Tariffing-Data-Types/ExtensionField.ta.mjs";
import { ChargingReferenceIdentification, _decode_ChargingReferenceIdentification, _encode_ChargingReferenceIdentification } from "../Tariffing-Data-Types/ChargingReferenceIdentification.ta.mjs";
// export { ChargingReferenceIdentification, _decode_ChargingReferenceIdentification, _encode_ChargingReferenceIdentification } from "../Tariffing-Data-Types/ChargingReferenceIdentification.ta.mjs";


/**
 * @summary StopCharging
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StopCharging ::= SEQUENCE {
 *     stopIndicators [0] BIT STRING {
 *         callAttemptChargesApplicable (0) }
 *     (SIZE(minStopIndicatorsLen.. maxStopIndicatorsLen)),
 *     networkOperators [1] SEQUENCE SIZE (1..maxNetworkOperators) OF NetworkIdentification OPTIONAL,
 *     extensions [2] SEQUENCE SIZE(1..numOfExtensions) OF ExtensionField OPTIONAL,
 *     originationIdentification [3] ChargingReferenceIdentification
 * }
 * ```
 * 
 * @class
 */
export
class StopCharging {
    constructor (
        /**
         * @summary `stopIndicators`.
         * @public
         * @readonly
         */
        readonly stopIndicators: StopCharging_stopIndicators,
        /**
         * @summary `networkOperators`.
         * @public
         * @readonly
         */
        readonly networkOperators: OPTIONAL<NetworkIdentification[]>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<ExtensionField[]>,
        /**
         * @summary `originationIdentification`.
         * @public
         * @readonly
         */
        readonly originationIdentification: ChargingReferenceIdentification
    ) {}

    /**
     * @summary Restructures an object into a StopCharging
     * @description
     * 
     * This takes an `object` and converts it to a `StopCharging`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `StopCharging`.
     * @returns {StopCharging}
     */
    public static _from_object (_o: { [_K in keyof (StopCharging)]: (StopCharging)[_K] }): StopCharging {
        return new StopCharging(_o.stopIndicators, _o.networkOperators, _o.extensions, _o.originationIdentification);
    }


}

/**
 * @summary The Leading Root Component Types of StopCharging
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_StopCharging: $.ComponentSpec[] = [
    new $.ComponentSpec("stopIndicators", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("networkOperators", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("originationIdentification", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of StopCharging
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_StopCharging: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of StopCharging
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_StopCharging: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_StopCharging: $.ASN1Decoder<StopCharging> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) StopCharging
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_StopCharging (el: _Element): StopCharging {
    if (!_cached_decoder_for_StopCharging) { _cached_decoder_for_StopCharging = function (el: _Element): StopCharging {
    let stopIndicators!: StopCharging_stopIndicators;
    let networkOperators: OPTIONAL<NetworkIdentification[]>;
    let extensions: OPTIONAL<ExtensionField[]>;
    let originationIdentification!: ChargingReferenceIdentification;
    const callbacks: $.DecodingMap = {
        "stopIndicators": (_el: _Element): void => { stopIndicators = $._decode_implicit<StopCharging_stopIndicators>(() => _decode_StopCharging_stopIndicators)(_el); },
        "networkOperators": (_el: _Element): void => { networkOperators = $._decode_implicit<NetworkIdentification[]>(() => $._decodeSequenceOf<NetworkIdentification>(() => _decode_NetworkIdentification))(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<ExtensionField[]>(() => $._decodeSequenceOf<ExtensionField>(() => _decode_ExtensionField))(_el); },
        "originationIdentification": (_el: _Element): void => { originationIdentification = $._decode_implicit<ChargingReferenceIdentification>(() => _decode_ChargingReferenceIdentification)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_StopCharging,
        _extension_additions_list_spec_for_StopCharging,
        _root_component_type_list_2_spec_for_StopCharging,
        undefined,
    );
    return new StopCharging(
        stopIndicators,
        networkOperators,
        extensions,
        originationIdentification
    );
}; }
    return _cached_decoder_for_StopCharging(el);
}

let _cached_encoder_for_StopCharging: $.ASN1Encoder<StopCharging> | null = null;

/**
 * @summary Encodes a(n) StopCharging into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StopCharging, encoded as an ASN.1 Element.
 */
export
function _encode_StopCharging (value: StopCharging, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_StopCharging) { _cached_encoder_for_StopCharging = function (value: StopCharging, elGetter: $.ASN1Encoder<StopCharging>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_StopCharging_stopIndicators, $.BER)(value.stopIndicators, $.BER),
            /* IF_ABSENT  */ ((value.networkOperators === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<NetworkIdentification>(() => _encode_NetworkIdentification, $.BER), $.BER)(value.networkOperators, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<ExtensionField>(() => _encode_ExtensionField, $.BER), $.BER)(value.extensions, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_ChargingReferenceIdentification, $.BER)(value.originationIdentification, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_StopCharging(value, elGetter);
}


/* eslint-enable */
