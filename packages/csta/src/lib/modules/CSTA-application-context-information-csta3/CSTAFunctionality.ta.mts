/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { SwitchingFunctionServicesC2, _decode_SwitchingFunctionServicesC2, _encode_SwitchingFunctionServicesC2 } from "../CSTA-application-context-information-csta3/SwitchingFunctionServicesC2.ta.mjs";

import { EventReportServicesC2, _decode_EventReportServicesC2, _encode_EventReportServicesC2 } from "../CSTA-application-context-information-csta3/EventReportServicesC2.ta.mjs";

import { ComputingFunctionServicesC2, _decode_ComputingFunctionServicesC2, _encode_ComputingFunctionServicesC2 } from "../CSTA-application-context-information-csta3/ComputingFunctionServicesC2.ta.mjs";

import { BidirectionalServicesC2, _decode_BidirectionalServicesC2, _encode_BidirectionalServicesC2 } from "../CSTA-application-context-information-csta3/BidirectionalServicesC2.ta.mjs";

import { StatusReportingServicesC2, _decode_StatusReportingServicesC2, _encode_StatusReportingServicesC2 } from "../CSTA-application-context-information-csta3/StatusReportingServicesC2.ta.mjs";

import { InputOutputServicesC2, _decode_InputOutputServicesC2, _encode_InputOutputServicesC2 } from "../CSTA-application-context-information-csta3/InputOutputServicesC2.ta.mjs";

import { VoiceUnitServicesC2, _decode_VoiceUnitServicesC2, _encode_VoiceUnitServicesC2 } from "../CSTA-application-context-information-csta3/VoiceUnitServicesC2.ta.mjs";



/**
 * @summary CSTAFunctionality
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CSTAFunctionality ::= SEQUENCE
 *      {switchingFunctionServices    [0] IMPLICIT SwitchingFunctionServicesC2    DEFAULT {},
 *      eventReportServices        [1] IMPLICIT EventReportServicesC2        DEFAULT {},
 *      computingFunctionServices    [2] IMPLICIT ComputingFunctionServicesC2    DEFAULT {},
 *      bidirectionalServices        [3] IMPLICIT BidirectionalServicesC2        DEFAULT {},
 *      statusReportingServices    [4] IMPLICIT StatusReportingServicesC2        DEFAULT {},
 *      inputOutputServices        [5] IMPLICIT InputOutputServicesC2        DEFAULT {},
 *      voiceUnitServices        [6] IMPLICIT VoiceUnitServicesC2        DEFAULT {} }
 * ```
 * 
 * @class
 */
export
class CSTAFunctionality {
    constructor (
        /**
         * @summary `switchingFunctionServices`.
         * @public
         * @readonly
         */
        readonly switchingFunctionServices: OPTIONAL<SwitchingFunctionServicesC2>,
        /**
         * @summary `eventReportServices`.
         * @public
         * @readonly
         */
        readonly eventReportServices: OPTIONAL<EventReportServicesC2>,
        /**
         * @summary `computingFunctionServices`.
         * @public
         * @readonly
         */
        readonly computingFunctionServices: OPTIONAL<ComputingFunctionServicesC2>,
        /**
         * @summary `bidirectionalServices`.
         * @public
         * @readonly
         */
        readonly bidirectionalServices: OPTIONAL<BidirectionalServicesC2>,
        /**
         * @summary `statusReportingServices`.
         * @public
         * @readonly
         */
        readonly statusReportingServices: OPTIONAL<StatusReportingServicesC2>,
        /**
         * @summary `inputOutputServices`.
         * @public
         * @readonly
         */
        readonly inputOutputServices: OPTIONAL<InputOutputServicesC2>,
        /**
         * @summary `voiceUnitServices`.
         * @public
         * @readonly
         */
        readonly voiceUnitServices: OPTIONAL<VoiceUnitServicesC2>
    ) {}

    /**
     * @summary Restructures an object into a CSTAFunctionality
     * @description
     * 
     * This takes an `object` and converts it to a `CSTAFunctionality`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CSTAFunctionality`.
     * @returns {CSTAFunctionality}
     */
    public static _from_object (_o: { [_K in keyof (CSTAFunctionality)]: (CSTAFunctionality)[_K] }): CSTAFunctionality {
        return new CSTAFunctionality(_o.switchingFunctionServices, _o.eventReportServices, _o.computingFunctionServices, _o.bidirectionalServices, _o.statusReportingServices, _o.inputOutputServices, _o.voiceUnitServices);
    }

    /**
     * @summary Getter that returns the default value for `switchingFunctionServices`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_switchingFunctionServices () { return new Uint8ClampedArray([]); }
    /**
     * @summary Getter that returns the default value for `eventReportServices`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_eventReportServices () { return new Uint8ClampedArray([]); }
    /**
     * @summary Getter that returns the default value for `computingFunctionServices`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_computingFunctionServices () { return new Uint8ClampedArray([]); }
    /**
     * @summary Getter that returns the default value for `bidirectionalServices`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_bidirectionalServices () { return new Uint8ClampedArray([]); }
    /**
     * @summary Getter that returns the default value for `statusReportingServices`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_statusReportingServices () { return new Uint8ClampedArray([]); }
    /**
     * @summary Getter that returns the default value for `inputOutputServices`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_inputOutputServices () { return new Uint8ClampedArray([]); }
    /**
     * @summary Getter that returns the default value for `voiceUnitServices`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_voiceUnitServices () { return new Uint8ClampedArray([]); }
}

/**
 * @summary The Leading Root Component Types of CSTAFunctionality
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CSTAFunctionality: $.ComponentSpec[] = [
    new $.ComponentSpec("switchingFunctionServices", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("eventReportServices", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("computingFunctionServices", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("bidirectionalServices", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("statusReportingServices", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("inputOutputServices", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("voiceUnitServices", true, $.hasTag(_TagClass.context, 6))
];

/**
 * @summary The Trailing Root Component Types of CSTAFunctionality
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CSTAFunctionality: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CSTAFunctionality
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CSTAFunctionality: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CSTAFunctionality: $.ASN1Decoder<CSTAFunctionality> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CSTAFunctionality
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CSTAFunctionality (el: _Element): CSTAFunctionality {
    if (!_cached_decoder_for_CSTAFunctionality) { _cached_decoder_for_CSTAFunctionality = function (el: _Element): CSTAFunctionality {
    let switchingFunctionServices: OPTIONAL<SwitchingFunctionServicesC2> = CSTAFunctionality._default_value_for_switchingFunctionServices;
    let eventReportServices: OPTIONAL<EventReportServicesC2> = CSTAFunctionality._default_value_for_eventReportServices;
    let computingFunctionServices: OPTIONAL<ComputingFunctionServicesC2> = CSTAFunctionality._default_value_for_computingFunctionServices;
    let bidirectionalServices: OPTIONAL<BidirectionalServicesC2> = CSTAFunctionality._default_value_for_bidirectionalServices;
    let statusReportingServices: OPTIONAL<StatusReportingServicesC2> = CSTAFunctionality._default_value_for_statusReportingServices;
    let inputOutputServices: OPTIONAL<InputOutputServicesC2> = CSTAFunctionality._default_value_for_inputOutputServices;
    let voiceUnitServices: OPTIONAL<VoiceUnitServicesC2> = CSTAFunctionality._default_value_for_voiceUnitServices;
    const callbacks: $.DecodingMap = {
        "switchingFunctionServices": (_el: _Element): void => { switchingFunctionServices = $._decode_implicit<SwitchingFunctionServicesC2>(() => _decode_SwitchingFunctionServicesC2)(_el); },
        "eventReportServices": (_el: _Element): void => { eventReportServices = $._decode_implicit<EventReportServicesC2>(() => _decode_EventReportServicesC2)(_el); },
        "computingFunctionServices": (_el: _Element): void => { computingFunctionServices = $._decode_implicit<ComputingFunctionServicesC2>(() => _decode_ComputingFunctionServicesC2)(_el); },
        "bidirectionalServices": (_el: _Element): void => { bidirectionalServices = $._decode_implicit<BidirectionalServicesC2>(() => _decode_BidirectionalServicesC2)(_el); },
        "statusReportingServices": (_el: _Element): void => { statusReportingServices = $._decode_implicit<StatusReportingServicesC2>(() => _decode_StatusReportingServicesC2)(_el); },
        "inputOutputServices": (_el: _Element): void => { inputOutputServices = $._decode_implicit<InputOutputServicesC2>(() => _decode_InputOutputServicesC2)(_el); },
        "voiceUnitServices": (_el: _Element): void => { voiceUnitServices = $._decode_implicit<VoiceUnitServicesC2>(() => _decode_VoiceUnitServicesC2)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CSTAFunctionality,
        _extension_additions_list_spec_for_CSTAFunctionality,
        _root_component_type_list_2_spec_for_CSTAFunctionality,
        undefined,
    );
    return new CSTAFunctionality(
        switchingFunctionServices,
        eventReportServices,
        computingFunctionServices,
        bidirectionalServices,
        statusReportingServices,
        inputOutputServices,
        voiceUnitServices
    );
}; }
    return _cached_decoder_for_CSTAFunctionality(el);
}

let _cached_encoder_for_CSTAFunctionality: $.ASN1Encoder<CSTAFunctionality> | null = null;

/**
 * @summary Encodes a(n) CSTAFunctionality into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CSTAFunctionality, encoded as an ASN.1 Element.
 */
export
function _encode_CSTAFunctionality (value: CSTAFunctionality, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CSTAFunctionality) { _cached_encoder_for_CSTAFunctionality = function (value: CSTAFunctionality, elGetter: $.ASN1Encoder<CSTAFunctionality>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_DEFAULT */ (value.switchingFunctionServices === undefined || $.deepEq(value.switchingFunctionServices, CSTAFunctionality._default_value_for_switchingFunctionServices) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_SwitchingFunctionServicesC2, $.BER)(value.switchingFunctionServices, $.BER)),
            /* IF_DEFAULT */ (value.eventReportServices === undefined || $.deepEq(value.eventReportServices, CSTAFunctionality._default_value_for_eventReportServices) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_EventReportServicesC2, $.BER)(value.eventReportServices, $.BER)),
            /* IF_DEFAULT */ (value.computingFunctionServices === undefined || $.deepEq(value.computingFunctionServices, CSTAFunctionality._default_value_for_computingFunctionServices) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_ComputingFunctionServicesC2, $.BER)(value.computingFunctionServices, $.BER)),
            /* IF_DEFAULT */ (value.bidirectionalServices === undefined || $.deepEq(value.bidirectionalServices, CSTAFunctionality._default_value_for_bidirectionalServices) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_BidirectionalServicesC2, $.BER)(value.bidirectionalServices, $.BER)),
            /* IF_DEFAULT */ (value.statusReportingServices === undefined || $.deepEq(value.statusReportingServices, CSTAFunctionality._default_value_for_statusReportingServices) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_StatusReportingServicesC2, $.BER)(value.statusReportingServices, $.BER)),
            /* IF_DEFAULT */ (value.inputOutputServices === undefined || $.deepEq(value.inputOutputServices, CSTAFunctionality._default_value_for_inputOutputServices) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_InputOutputServicesC2, $.BER)(value.inputOutputServices, $.BER)),
            /* IF_DEFAULT */ (value.voiceUnitServices === undefined || $.deepEq(value.voiceUnitServices, CSTAFunctionality._default_value_for_voiceUnitServices) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_VoiceUnitServicesC2, $.BER)(value.voiceUnitServices, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CSTAFunctionality(value, elGetter);
}


/* eslint-enable */
