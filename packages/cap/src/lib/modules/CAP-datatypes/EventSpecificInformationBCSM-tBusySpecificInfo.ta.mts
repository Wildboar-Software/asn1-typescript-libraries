import {
    OPTIONAL,
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type Cause, _decode_Cause, _encode_Cause } from "./Cause.ta.mjs";
import { type CalledPartyNumber, _decode_CalledPartyNumber, _encode_CalledPartyNumber } from "./CalledPartyNumber.ta.mjs";

/**
 * @summary EventSpecificInformationBCSM_tBusySpecificInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SEQUENCE {
 busyCause				[0] Cause {bound}			OPTIONAL,
 callForwarded			[50] NULL				OPTIONAL,
 routeNotPermitted			[51] NULL				OPTIONAL,
 forwardingDestinationNumber		[52] CalledPartyNumber {bound}		OPTIONAL,
 ...
 }
 * ```
 *
 */
export class EventSpecificInformationBCSM_tBusySpecificInfo {
    constructor (
        readonly busyCause: OPTIONAL<Cause>,
        readonly callForwarded: OPTIONAL<NULL>,
        readonly routeNotPermitted: OPTIONAL<NULL>,
        readonly forwardingDestinationNumber: OPTIONAL<CalledPartyNumber>,
        readonly _unrecognizedExtensionsList: _Element[] = [],
    ) {}

    public static _from_object (_o: { [_K in keyof (EventSpecificInformationBCSM_tBusySpecificInfo)]: (EventSpecificInformationBCSM_tBusySpecificInfo)[_K] }): EventSpecificInformationBCSM_tBusySpecificInfo {
        return new EventSpecificInformationBCSM_tBusySpecificInfo(_o.busyCause, _o.callForwarded, _o.routeNotPermitted, _o.forwardingDestinationNumber, _o._unrecognizedExtensionsList);
    }
}

export const _root_component_type_list_1_spec_for_EventSpecificInformationBCSM_tBusySpecificInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("busyCause", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("callForwarded", true, $.hasTag(_TagClass.context, 50)),
    new $.ComponentSpec("routeNotPermitted", true, $.hasTag(_TagClass.context, 51)),
    new $.ComponentSpec("forwardingDestinationNumber", true, $.hasTag(_TagClass.context, 52))
];

export const _root_component_type_list_2_spec_for_EventSpecificInformationBCSM_tBusySpecificInfo: $.ComponentSpec[] = [];

export const _extension_additions_list_spec_for_EventSpecificInformationBCSM_tBusySpecificInfo: $.ComponentSpec[] = [];

let _cached_decoder_for_EventSpecificInformationBCSM_tBusySpecificInfo: $.ASN1Decoder<EventSpecificInformationBCSM_tBusySpecificInfo> | null = null;
export function _decode_EventSpecificInformationBCSM_tBusySpecificInfo (el: _Element): EventSpecificInformationBCSM_tBusySpecificInfo {
    if (!_cached_decoder_for_EventSpecificInformationBCSM_tBusySpecificInfo) {
        _cached_decoder_for_EventSpecificInformationBCSM_tBusySpecificInfo = function (el: _Element): EventSpecificInformationBCSM_tBusySpecificInfo {
    let busyCause: OPTIONAL<Cause>;
    let callForwarded: OPTIONAL<NULL>;
    let routeNotPermitted: OPTIONAL<NULL>;
    let forwardingDestinationNumber: OPTIONAL<CalledPartyNumber>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "busyCause": (_el: _Element): void => { busyCause = $._decode_implicit<Cause>(() => _decode_Cause)(_el); },
        "callForwarded": (_el: _Element): void => { callForwarded = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "routeNotPermitted": (_el: _Element): void => { routeNotPermitted = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "forwardingDestinationNumber": (_el: _Element): void => { forwardingDestinationNumber = $._decode_implicit<CalledPartyNumber>(() => _decode_CalledPartyNumber)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EventSpecificInformationBCSM_tBusySpecificInfo,
        _extension_additions_list_spec_for_EventSpecificInformationBCSM_tBusySpecificInfo,
        _root_component_type_list_2_spec_for_EventSpecificInformationBCSM_tBusySpecificInfo,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new EventSpecificInformationBCSM_tBusySpecificInfo(
        busyCause,
        callForwarded,
        routeNotPermitted,
        forwardingDestinationNumber,
        _unrecognizedExtensionsList
    );
        };
    }
    return _cached_decoder_for_EventSpecificInformationBCSM_tBusySpecificInfo(el);
}

let _cached_encoder_for_EventSpecificInformationBCSM_tBusySpecificInfo: $.ASN1Encoder<EventSpecificInformationBCSM_tBusySpecificInfo> | null = null;
export function _encode_EventSpecificInformationBCSM_tBusySpecificInfo (value: EventSpecificInformationBCSM_tBusySpecificInfo, elGetter: $.ASN1Encoder<EventSpecificInformationBCSM_tBusySpecificInfo>): _Element {
    if (!_cached_encoder_for_EventSpecificInformationBCSM_tBusySpecificInfo) {
        _cached_encoder_for_EventSpecificInformationBCSM_tBusySpecificInfo = function (value: EventSpecificInformationBCSM_tBusySpecificInfo): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.busyCause === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_Cause, $.BER)(value.busyCause, $.BER)),
            /* IF_ABSENT  */ ((value.callForwarded === undefined) ? undefined : $._encode_implicit(_TagClass.context, 50, () => $._encodeNull, $.BER)(value.callForwarded, $.BER)),
            /* IF_ABSENT  */ ((value.routeNotPermitted === undefined) ? undefined : $._encode_implicit(_TagClass.context, 51, () => $._encodeNull, $.BER)(value.routeNotPermitted, $.BER)),
            /* IF_ABSENT  */ ((value.forwardingDestinationNumber === undefined) ? undefined : $._encode_implicit(_TagClass.context, 52, () => _encode_CalledPartyNumber, $.BER)(value.forwardingDestinationNumber, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : [])
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
        };
    }
    return _cached_encoder_for_EventSpecificInformationBCSM_tBusySpecificInfo(value, elGetter);
}
