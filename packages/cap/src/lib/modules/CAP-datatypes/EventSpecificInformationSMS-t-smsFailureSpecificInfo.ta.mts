import {
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type MT_SMSCause, _decode_MT_SMSCause, _encode_MT_SMSCause } from "./MT-SMSCause.ta.mjs";

/**
 * @summary EventSpecificInformationSMS_t_smsFailureSpecificInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SEQUENCE {
 failureCause			[0] MT-SMSCause				OPTIONAL,
 ...
 }
 * ```
 *
 */
export class EventSpecificInformationSMS_t_smsFailureSpecificInfo {
    constructor (
        readonly failureCause: OPTIONAL<MT_SMSCause>,
        readonly _unrecognizedExtensionsList: _Element[] = [],
    ) {}

    public static _from_object (_o: { [_K in keyof (EventSpecificInformationSMS_t_smsFailureSpecificInfo)]: (EventSpecificInformationSMS_t_smsFailureSpecificInfo)[_K] }): EventSpecificInformationSMS_t_smsFailureSpecificInfo {
        return new EventSpecificInformationSMS_t_smsFailureSpecificInfo(_o.failureCause, _o._unrecognizedExtensionsList);
    }
}

export const _root_component_type_list_1_spec_for_EventSpecificInformationSMS_t_smsFailureSpecificInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("failureCause", true, $.hasTag(_TagClass.context, 0))
];

export const _root_component_type_list_2_spec_for_EventSpecificInformationSMS_t_smsFailureSpecificInfo: $.ComponentSpec[] = [];

export const _extension_additions_list_spec_for_EventSpecificInformationSMS_t_smsFailureSpecificInfo: $.ComponentSpec[] = [];

let _cached_decoder_for_EventSpecificInformationSMS_t_smsFailureSpecificInfo: $.ASN1Decoder<EventSpecificInformationSMS_t_smsFailureSpecificInfo> | null = null;
export function _decode_EventSpecificInformationSMS_t_smsFailureSpecificInfo (el: _Element): EventSpecificInformationSMS_t_smsFailureSpecificInfo {
    if (!_cached_decoder_for_EventSpecificInformationSMS_t_smsFailureSpecificInfo) {
        _cached_decoder_for_EventSpecificInformationSMS_t_smsFailureSpecificInfo = function (el: _Element): EventSpecificInformationSMS_t_smsFailureSpecificInfo {
    let failureCause: OPTIONAL<MT_SMSCause>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "failureCause": (_el: _Element): void => { failureCause = $._decode_implicit<MT_SMSCause>(() => _decode_MT_SMSCause)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EventSpecificInformationSMS_t_smsFailureSpecificInfo,
        _extension_additions_list_spec_for_EventSpecificInformationSMS_t_smsFailureSpecificInfo,
        _root_component_type_list_2_spec_for_EventSpecificInformationSMS_t_smsFailureSpecificInfo,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new EventSpecificInformationSMS_t_smsFailureSpecificInfo(
        failureCause,
        _unrecognizedExtensionsList
    );
        };
    }
    return _cached_decoder_for_EventSpecificInformationSMS_t_smsFailureSpecificInfo(el);
}

let _cached_encoder_for_EventSpecificInformationSMS_t_smsFailureSpecificInfo: $.ASN1Encoder<EventSpecificInformationSMS_t_smsFailureSpecificInfo> | null = null;
export function _encode_EventSpecificInformationSMS_t_smsFailureSpecificInfo (value: EventSpecificInformationSMS_t_smsFailureSpecificInfo, elGetter: $.ASN1Encoder<EventSpecificInformationSMS_t_smsFailureSpecificInfo>): _Element {
    if (!_cached_encoder_for_EventSpecificInformationSMS_t_smsFailureSpecificInfo) {
        _cached_encoder_for_EventSpecificInformationSMS_t_smsFailureSpecificInfo = function (value: EventSpecificInformationSMS_t_smsFailureSpecificInfo, elGetter: $.ASN1Encoder<EventSpecificInformationSMS_t_smsFailureSpecificInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.failureCause === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_MT_SMSCause, $.BER)(value.failureCause, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : [])
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
        };
    }
    return _cached_encoder_for_EventSpecificInformationSMS_t_smsFailureSpecificInfo(value, elGetter);
}
