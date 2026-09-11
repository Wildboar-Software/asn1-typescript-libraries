import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type Cause, _decode_Cause, _encode_Cause } from "./Cause.ta.mjs";

/**
 * @summary EventSpecificInformationBCSM_oCalledPartyBusySpecificInfo
 * @description
 *
 * EventReportBCSM information for O_Busy.
 * (3GPP TS 29.078 V19.0.0 clause 11.18).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EventSpecificInformationBCSM-oCalledPartyBusySpecificInfo {PARAMETERS-BOUND : bound} ::= SEQUENCE {
 *  busyCause				[0] Cause {bound}			OPTIONAL,
 *  ...
 *  }
 * ```
 *
 */
export class EventSpecificInformationBCSM_oCalledPartyBusySpecificInfo {
    constructor (
        /**
         * @summary `busyCause`.
         * @description
         *
         * If triggered by ISUP release, a copy of that cause (e.g. subscriber
         * absent 20, user busy 17). If triggered by a MAP error (e.g. Absent
         * subscriber), mapped to the corresponding ISUP cause. If omitted,
         * gsmSCF shall assume busy. (3GPP TS 29.078 V19.0.0 clause 11.18).
         *
         * @public
         * @readonly
         */
        readonly busyCause: OPTIONAL<Cause>,
        readonly _unrecognizedExtensionsList: _Element[] = [],
    ) {}

    public static _from_object (_o: { [_K in keyof (EventSpecificInformationBCSM_oCalledPartyBusySpecificInfo)]: (EventSpecificInformationBCSM_oCalledPartyBusySpecificInfo)[_K] }): EventSpecificInformationBCSM_oCalledPartyBusySpecificInfo {
        return new EventSpecificInformationBCSM_oCalledPartyBusySpecificInfo(_o.busyCause, _o._unrecognizedExtensionsList);
    }
}

export const _root_component_type_list_1_spec_for_EventSpecificInformationBCSM_oCalledPartyBusySpecificInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("busyCause", true, $.hasTag(_TagClass.context, 0))
];

export const _root_component_type_list_2_spec_for_EventSpecificInformationBCSM_oCalledPartyBusySpecificInfo: $.ComponentSpec[] = [];

export const _extension_additions_list_spec_for_EventSpecificInformationBCSM_oCalledPartyBusySpecificInfo: $.ComponentSpec[] = [];

let _cached_decoder_for_EventSpecificInformationBCSM_oCalledPartyBusySpecificInfo: $.ASN1Decoder<EventSpecificInformationBCSM_oCalledPartyBusySpecificInfo> | null = null;
export function _decode_EventSpecificInformationBCSM_oCalledPartyBusySpecificInfo (el: _Element): EventSpecificInformationBCSM_oCalledPartyBusySpecificInfo {
    if (!_cached_decoder_for_EventSpecificInformationBCSM_oCalledPartyBusySpecificInfo) {
        _cached_decoder_for_EventSpecificInformationBCSM_oCalledPartyBusySpecificInfo = function (el: _Element): EventSpecificInformationBCSM_oCalledPartyBusySpecificInfo {
    let busyCause: OPTIONAL<Cause>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "busyCause": (_el: _Element): void => { busyCause = $._decode_implicit<Cause>(() => _decode_Cause)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EventSpecificInformationBCSM_oCalledPartyBusySpecificInfo,
        _extension_additions_list_spec_for_EventSpecificInformationBCSM_oCalledPartyBusySpecificInfo,
        _root_component_type_list_2_spec_for_EventSpecificInformationBCSM_oCalledPartyBusySpecificInfo,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new EventSpecificInformationBCSM_oCalledPartyBusySpecificInfo(
        busyCause,
        _unrecognizedExtensionsList
    );
        };
    }
    return _cached_decoder_for_EventSpecificInformationBCSM_oCalledPartyBusySpecificInfo(el);
}

let _cached_encoder_for_EventSpecificInformationBCSM_oCalledPartyBusySpecificInfo: $.ASN1Encoder<EventSpecificInformationBCSM_oCalledPartyBusySpecificInfo> | null = null;
export function _encode_EventSpecificInformationBCSM_oCalledPartyBusySpecificInfo (value: EventSpecificInformationBCSM_oCalledPartyBusySpecificInfo, elGetter: $.ASN1Encoder<EventSpecificInformationBCSM_oCalledPartyBusySpecificInfo>): _Element {
    if (!_cached_encoder_for_EventSpecificInformationBCSM_oCalledPartyBusySpecificInfo) {
        _cached_encoder_for_EventSpecificInformationBCSM_oCalledPartyBusySpecificInfo = function (value: EventSpecificInformationBCSM_oCalledPartyBusySpecificInfo): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.busyCause === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_Cause, $.BER)(value.busyCause, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : [])
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
        };
    }
    return _cached_encoder_for_EventSpecificInformationBCSM_oCalledPartyBusySpecificInfo(value, elGetter);
}
