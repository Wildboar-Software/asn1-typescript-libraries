import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary EventSpecificInformationSMS_t_smsDeliverySpecificInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SEQUENCE {
 
 ...
 }
 * ```
 *
 */
export class EventSpecificInformationSMS_t_smsDeliverySpecificInfo {
    constructor (
        readonly _unrecognizedExtensionsList: _Element[] = [],
    ) {}

    public static _from_object (_o: { [_K in keyof (EventSpecificInformationSMS_t_smsDeliverySpecificInfo)]: (EventSpecificInformationSMS_t_smsDeliverySpecificInfo)[_K] }): EventSpecificInformationSMS_t_smsDeliverySpecificInfo {
        return new EventSpecificInformationSMS_t_smsDeliverySpecificInfo(_o._unrecognizedExtensionsList);
    }
}

export const _root_component_type_list_1_spec_for_EventSpecificInformationSMS_t_smsDeliverySpecificInfo: $.ComponentSpec[] = [];

export const _root_component_type_list_2_spec_for_EventSpecificInformationSMS_t_smsDeliverySpecificInfo: $.ComponentSpec[] = [];

export const _extension_additions_list_spec_for_EventSpecificInformationSMS_t_smsDeliverySpecificInfo: $.ComponentSpec[] = [];

let _cached_decoder_for_EventSpecificInformationSMS_t_smsDeliverySpecificInfo: $.ASN1Decoder<EventSpecificInformationSMS_t_smsDeliverySpecificInfo> | null = null;
export function _decode_EventSpecificInformationSMS_t_smsDeliverySpecificInfo (el: _Element): EventSpecificInformationSMS_t_smsDeliverySpecificInfo {
    if (!_cached_decoder_for_EventSpecificInformationSMS_t_smsDeliverySpecificInfo) {
        _cached_decoder_for_EventSpecificInformationSMS_t_smsDeliverySpecificInfo = function (el: _Element): EventSpecificInformationSMS_t_smsDeliverySpecificInfo {
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {

    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EventSpecificInformationSMS_t_smsDeliverySpecificInfo,
        _extension_additions_list_spec_for_EventSpecificInformationSMS_t_smsDeliverySpecificInfo,
        _root_component_type_list_2_spec_for_EventSpecificInformationSMS_t_smsDeliverySpecificInfo,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new EventSpecificInformationSMS_t_smsDeliverySpecificInfo(_unrecognizedExtensionsList
    );
        };
    }
    return _cached_decoder_for_EventSpecificInformationSMS_t_smsDeliverySpecificInfo(el);
}

let _cached_encoder_for_EventSpecificInformationSMS_t_smsDeliverySpecificInfo: $.ASN1Encoder<EventSpecificInformationSMS_t_smsDeliverySpecificInfo> | null = null;
export function _encode_EventSpecificInformationSMS_t_smsDeliverySpecificInfo (value: EventSpecificInformationSMS_t_smsDeliverySpecificInfo, elGetter: $.ASN1Encoder<EventSpecificInformationSMS_t_smsDeliverySpecificInfo>): _Element {
    if (!_cached_encoder_for_EventSpecificInformationSMS_t_smsDeliverySpecificInfo) {
        _cached_encoder_for_EventSpecificInformationSMS_t_smsDeliverySpecificInfo = function (value: EventSpecificInformationSMS_t_smsDeliverySpecificInfo): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [

        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : [])
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
        };
    }
    return _cached_encoder_for_EventSpecificInformationSMS_t_smsDeliverySpecificInfo(value, elGetter);
}
