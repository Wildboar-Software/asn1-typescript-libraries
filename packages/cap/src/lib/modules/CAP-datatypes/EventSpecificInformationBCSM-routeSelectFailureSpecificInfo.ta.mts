import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type Cause, _decode_Cause, _encode_Cause } from "./Cause.ta.mjs";

/**
 * @summary EventSpecificInformationBCSM_routeSelectFailureSpecificInfo
 * @description
 *
 * EventReportBCSM information for Route_Select_Failure.
 * (3GPP TS 29.078 V19.0.0 clause 11.18).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EventSpecificInformationBCSM-routeSelectFailureSpecificInfo {PARAMETERS-BOUND : bound} ::= SEQUENCE {
 *  failureCause			[0] Cause {bound}			OPTIONAL,
 *  ...
 *  }
 * ```
 *
 */
export class EventSpecificInformationBCSM_routeSelectFailureSpecificInfo {
    constructor (
        /**
         * @summary `failureCause`.
         * @description
         *
         * Present if available. (3GPP TS 29.078 V19.0.0 clause 11.18).
         *
         * @public
         * @readonly
         */
        readonly failureCause: OPTIONAL<Cause>,
        readonly _unrecognizedExtensionsList: _Element[] = [],
    ) {}

    public static _from_object (_o: { [_K in keyof (EventSpecificInformationBCSM_routeSelectFailureSpecificInfo)]: (EventSpecificInformationBCSM_routeSelectFailureSpecificInfo)[_K] }): EventSpecificInformationBCSM_routeSelectFailureSpecificInfo {
        return new EventSpecificInformationBCSM_routeSelectFailureSpecificInfo(_o.failureCause, _o._unrecognizedExtensionsList);
    }
}

export const _root_component_type_list_1_spec_for_EventSpecificInformationBCSM_routeSelectFailureSpecificInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("failureCause", true, $.hasTag(_TagClass.context, 0))
];

export const _root_component_type_list_2_spec_for_EventSpecificInformationBCSM_routeSelectFailureSpecificInfo: $.ComponentSpec[] = [];

export const _extension_additions_list_spec_for_EventSpecificInformationBCSM_routeSelectFailureSpecificInfo: $.ComponentSpec[] = [];

let _cached_decoder_for_EventSpecificInformationBCSM_routeSelectFailureSpecificInfo: $.ASN1Decoder<EventSpecificInformationBCSM_routeSelectFailureSpecificInfo> | null = null;
export function _decode_EventSpecificInformationBCSM_routeSelectFailureSpecificInfo (el: _Element): EventSpecificInformationBCSM_routeSelectFailureSpecificInfo {
    if (!_cached_decoder_for_EventSpecificInformationBCSM_routeSelectFailureSpecificInfo) {
        _cached_decoder_for_EventSpecificInformationBCSM_routeSelectFailureSpecificInfo = function (el: _Element): EventSpecificInformationBCSM_routeSelectFailureSpecificInfo {
    let failureCause: OPTIONAL<Cause>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "failureCause": (_el: _Element): void => { failureCause = $._decode_implicit<Cause>(() => _decode_Cause)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EventSpecificInformationBCSM_routeSelectFailureSpecificInfo,
        _extension_additions_list_spec_for_EventSpecificInformationBCSM_routeSelectFailureSpecificInfo,
        _root_component_type_list_2_spec_for_EventSpecificInformationBCSM_routeSelectFailureSpecificInfo,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new EventSpecificInformationBCSM_routeSelectFailureSpecificInfo(
        failureCause,
        _unrecognizedExtensionsList
    );
        };
    }
    return _cached_decoder_for_EventSpecificInformationBCSM_routeSelectFailureSpecificInfo(el);
}

let _cached_encoder_for_EventSpecificInformationBCSM_routeSelectFailureSpecificInfo: $.ASN1Encoder<EventSpecificInformationBCSM_routeSelectFailureSpecificInfo> | null = null;
export function _encode_EventSpecificInformationBCSM_routeSelectFailureSpecificInfo (value: EventSpecificInformationBCSM_routeSelectFailureSpecificInfo, elGetter: $.ASN1Encoder<EventSpecificInformationBCSM_routeSelectFailureSpecificInfo>): _Element {
    if (!_cached_encoder_for_EventSpecificInformationBCSM_routeSelectFailureSpecificInfo) {
        _cached_encoder_for_EventSpecificInformationBCSM_routeSelectFailureSpecificInfo = function (value: EventSpecificInformationBCSM_routeSelectFailureSpecificInfo): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.failureCause === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_Cause, $.BER)(value.failureCause, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : [])
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
        };
    }
    return _cached_encoder_for_EventSpecificInformationBCSM_routeSelectFailureSpecificInfo(value, elGetter);
}
