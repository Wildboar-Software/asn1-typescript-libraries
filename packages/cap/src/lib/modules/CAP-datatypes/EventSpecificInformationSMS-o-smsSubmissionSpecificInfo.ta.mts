import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary EventSpecificInformationSMS_o_smsSubmissionSpecificInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SEQUENCE {
 *  
 *  ...
 *  }
 * ```
 *
 */
export class EventSpecificInformationSMS_o_smsSubmissionSpecificInfo {
    constructor (
        readonly _unrecognizedExtensionsList: _Element[] = [],
    ) {}

    public static _from_object (_o: { [_K in keyof (EventSpecificInformationSMS_o_smsSubmissionSpecificInfo)]: (EventSpecificInformationSMS_o_smsSubmissionSpecificInfo)[_K] }): EventSpecificInformationSMS_o_smsSubmissionSpecificInfo {
        return new EventSpecificInformationSMS_o_smsSubmissionSpecificInfo(_o._unrecognizedExtensionsList);
    }
}

export const _root_component_type_list_1_spec_for_EventSpecificInformationSMS_o_smsSubmissionSpecificInfo: $.ComponentSpec[] = [];

export const _root_component_type_list_2_spec_for_EventSpecificInformationSMS_o_smsSubmissionSpecificInfo: $.ComponentSpec[] = [];

export const _extension_additions_list_spec_for_EventSpecificInformationSMS_o_smsSubmissionSpecificInfo: $.ComponentSpec[] = [];

let _cached_decoder_for_EventSpecificInformationSMS_o_smsSubmissionSpecificInfo: $.ASN1Decoder<EventSpecificInformationSMS_o_smsSubmissionSpecificInfo> | null = null;
export function _decode_EventSpecificInformationSMS_o_smsSubmissionSpecificInfo (el: _Element): EventSpecificInformationSMS_o_smsSubmissionSpecificInfo {
    if (!_cached_decoder_for_EventSpecificInformationSMS_o_smsSubmissionSpecificInfo) {
        _cached_decoder_for_EventSpecificInformationSMS_o_smsSubmissionSpecificInfo = function (el: _Element): EventSpecificInformationSMS_o_smsSubmissionSpecificInfo {
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {

    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EventSpecificInformationSMS_o_smsSubmissionSpecificInfo,
        _extension_additions_list_spec_for_EventSpecificInformationSMS_o_smsSubmissionSpecificInfo,
        _root_component_type_list_2_spec_for_EventSpecificInformationSMS_o_smsSubmissionSpecificInfo,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new EventSpecificInformationSMS_o_smsSubmissionSpecificInfo(_unrecognizedExtensionsList
    );
        };
    }
    return _cached_decoder_for_EventSpecificInformationSMS_o_smsSubmissionSpecificInfo(el);
}

let _cached_encoder_for_EventSpecificInformationSMS_o_smsSubmissionSpecificInfo: $.ASN1Encoder<EventSpecificInformationSMS_o_smsSubmissionSpecificInfo> | null = null;
export function _encode_EventSpecificInformationSMS_o_smsSubmissionSpecificInfo (value: EventSpecificInformationSMS_o_smsSubmissionSpecificInfo, elGetter: $.ASN1Encoder<EventSpecificInformationSMS_o_smsSubmissionSpecificInfo>): _Element {
    if (!_cached_encoder_for_EventSpecificInformationSMS_o_smsSubmissionSpecificInfo) {
        _cached_encoder_for_EventSpecificInformationSMS_o_smsSubmissionSpecificInfo = function (value: EventSpecificInformationSMS_o_smsSubmissionSpecificInfo): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [

        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : [])
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
        };
    }
    return _cached_encoder_for_EventSpecificInformationSMS_o_smsSubmissionSpecificInfo(value, elGetter);
}
