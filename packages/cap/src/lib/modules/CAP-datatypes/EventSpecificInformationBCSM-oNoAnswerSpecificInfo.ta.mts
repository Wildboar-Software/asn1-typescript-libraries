import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary EventSpecificInformationBCSM_oNoAnswerSpecificInfo
 * @description
 *
 * No specific info defined. For O_No_Answer, EventReportBCSM
 * eventSpecificInformationBCSM shall be empty (including when triggered by ISUP
 * release or TNRy expiry). (3GPP TS 29.078 V19.0.0 clauses 5.1 and 11.18).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EventSpecificInformationBCSM-oNoAnswerSpecificInfo {PARAMETERS-BOUND : bound} ::= SEQUENCE {
 *  
 *  ...
 *  }
 * ```
 *
 */
export class EventSpecificInformationBCSM_oNoAnswerSpecificInfo {
    constructor (
        readonly _unrecognizedExtensionsList: _Element[] = [],
    ) {}

    public static _from_object (_o: { [_K in keyof (EventSpecificInformationBCSM_oNoAnswerSpecificInfo)]: (EventSpecificInformationBCSM_oNoAnswerSpecificInfo)[_K] }): EventSpecificInformationBCSM_oNoAnswerSpecificInfo {
        return new EventSpecificInformationBCSM_oNoAnswerSpecificInfo(_o._unrecognizedExtensionsList);
    }
}

export const _root_component_type_list_1_spec_for_EventSpecificInformationBCSM_oNoAnswerSpecificInfo: $.ComponentSpec[] = [];

export const _root_component_type_list_2_spec_for_EventSpecificInformationBCSM_oNoAnswerSpecificInfo: $.ComponentSpec[] = [];

export const _extension_additions_list_spec_for_EventSpecificInformationBCSM_oNoAnswerSpecificInfo: $.ComponentSpec[] = [];

let _cached_decoder_for_EventSpecificInformationBCSM_oNoAnswerSpecificInfo: $.ASN1Decoder<EventSpecificInformationBCSM_oNoAnswerSpecificInfo> | null = null;
export function _decode_EventSpecificInformationBCSM_oNoAnswerSpecificInfo (el: _Element): EventSpecificInformationBCSM_oNoAnswerSpecificInfo {
    if (!_cached_decoder_for_EventSpecificInformationBCSM_oNoAnswerSpecificInfo) {
        _cached_decoder_for_EventSpecificInformationBCSM_oNoAnswerSpecificInfo = function (el: _Element): EventSpecificInformationBCSM_oNoAnswerSpecificInfo {
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {

    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EventSpecificInformationBCSM_oNoAnswerSpecificInfo,
        _extension_additions_list_spec_for_EventSpecificInformationBCSM_oNoAnswerSpecificInfo,
        _root_component_type_list_2_spec_for_EventSpecificInformationBCSM_oNoAnswerSpecificInfo,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new EventSpecificInformationBCSM_oNoAnswerSpecificInfo(_unrecognizedExtensionsList
    );
        };
    }
    return _cached_decoder_for_EventSpecificInformationBCSM_oNoAnswerSpecificInfo(el);
}

let _cached_encoder_for_EventSpecificInformationBCSM_oNoAnswerSpecificInfo: $.ASN1Encoder<EventSpecificInformationBCSM_oNoAnswerSpecificInfo> | null = null;
export function _encode_EventSpecificInformationBCSM_oNoAnswerSpecificInfo (value: EventSpecificInformationBCSM_oNoAnswerSpecificInfo, elGetter: $.ASN1Encoder<EventSpecificInformationBCSM_oNoAnswerSpecificInfo>): _Element {
    if (!_cached_encoder_for_EventSpecificInformationBCSM_oNoAnswerSpecificInfo) {
        _cached_encoder_for_EventSpecificInformationBCSM_oNoAnswerSpecificInfo = function (value: EventSpecificInformationBCSM_oNoAnswerSpecificInfo): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [

        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : [])
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
        };
    }
    return _cached_encoder_for_EventSpecificInformationBCSM_oNoAnswerSpecificInfo(value, elGetter);
}
