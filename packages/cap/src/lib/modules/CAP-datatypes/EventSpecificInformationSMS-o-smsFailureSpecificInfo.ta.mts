import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MO_SMSCause, _enum_for_MO_SMSCause, _decode_MO_SMSCause, _encode_MO_SMSCause } from "./MO-SMSCause.ta.mjs";

/**
 * @summary EventSpecificInformationSMS_o_smsFailureSpecificInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SEQUENCE {
 *  failureCause			[0] MO-SMSCause				OPTIONAL,
 *  ...
 *  }
 * ```
 *
 */
export class EventSpecificInformationSMS_o_smsFailureSpecificInfo {
    constructor (
        readonly failureCause: OPTIONAL<MO_SMSCause>,
        readonly _unrecognizedExtensionsList: _Element[] = [],
    ) {}

    public static _from_object (_o: { [_K in keyof (EventSpecificInformationSMS_o_smsFailureSpecificInfo)]: (EventSpecificInformationSMS_o_smsFailureSpecificInfo)[_K] }): EventSpecificInformationSMS_o_smsFailureSpecificInfo {
        return new EventSpecificInformationSMS_o_smsFailureSpecificInfo(_o.failureCause, _o._unrecognizedExtensionsList);
    }

    public static _enum_for_failureCause = _enum_for_MO_SMSCause;
}

export const _root_component_type_list_1_spec_for_EventSpecificInformationSMS_o_smsFailureSpecificInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("failureCause", true, $.hasTag(_TagClass.context, 0))
];

export const _root_component_type_list_2_spec_for_EventSpecificInformationSMS_o_smsFailureSpecificInfo: $.ComponentSpec[] = [];

export const _extension_additions_list_spec_for_EventSpecificInformationSMS_o_smsFailureSpecificInfo: $.ComponentSpec[] = [];

let _cached_decoder_for_EventSpecificInformationSMS_o_smsFailureSpecificInfo: $.ASN1Decoder<EventSpecificInformationSMS_o_smsFailureSpecificInfo> | null = null;
export function _decode_EventSpecificInformationSMS_o_smsFailureSpecificInfo (el: _Element): EventSpecificInformationSMS_o_smsFailureSpecificInfo {
    if (!_cached_decoder_for_EventSpecificInformationSMS_o_smsFailureSpecificInfo) {
        _cached_decoder_for_EventSpecificInformationSMS_o_smsFailureSpecificInfo = function (el: _Element): EventSpecificInformationSMS_o_smsFailureSpecificInfo {
    let failureCause: OPTIONAL<MO_SMSCause>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "failureCause": (_el: _Element): void => { failureCause = $._decode_implicit<MO_SMSCause>(() => _decode_MO_SMSCause)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EventSpecificInformationSMS_o_smsFailureSpecificInfo,
        _extension_additions_list_spec_for_EventSpecificInformationSMS_o_smsFailureSpecificInfo,
        _root_component_type_list_2_spec_for_EventSpecificInformationSMS_o_smsFailureSpecificInfo,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new EventSpecificInformationSMS_o_smsFailureSpecificInfo(
        failureCause,
        _unrecognizedExtensionsList
    );
        };
    }
    return _cached_decoder_for_EventSpecificInformationSMS_o_smsFailureSpecificInfo(el);
}

let _cached_encoder_for_EventSpecificInformationSMS_o_smsFailureSpecificInfo: $.ASN1Encoder<EventSpecificInformationSMS_o_smsFailureSpecificInfo> | null = null;
export function _encode_EventSpecificInformationSMS_o_smsFailureSpecificInfo (value: EventSpecificInformationSMS_o_smsFailureSpecificInfo, elGetter: $.ASN1Encoder<EventSpecificInformationSMS_o_smsFailureSpecificInfo>): _Element {
    if (!_cached_encoder_for_EventSpecificInformationSMS_o_smsFailureSpecificInfo) {
        _cached_encoder_for_EventSpecificInformationSMS_o_smsFailureSpecificInfo = function (value: EventSpecificInformationSMS_o_smsFailureSpecificInfo): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.failureCause === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_MO_SMSCause, $.BER)(value.failureCause, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : [])
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
        };
    }
    return _cached_encoder_for_EventSpecificInformationSMS_o_smsFailureSpecificInfo(value, elGetter);
}
