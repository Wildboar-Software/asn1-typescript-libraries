import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type EventSpecificInformationBCSM_tMidCallSpecificInfo_midCallEvents, _decode_EventSpecificInformationBCSM_tMidCallSpecificInfo_midCallEvents, _encode_EventSpecificInformationBCSM_tMidCallSpecificInfo_midCallEvents } from "./EventSpecificInformationBCSM-tMidCallSpecificInfo-midCallEvents.ta.mjs";

/**
 * @summary EventSpecificInformationBCSM_tMidCallSpecificInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SEQUENCE {
 midCallEvents			[1] CHOICE {
 dTMFDigitsCompleted			[3] Digits {bound},
 dTMFDigitsTimeOut			[4] Digits {bound}
 }									OPTIONAL,
 ...
 }
 * ```
 *
 */
export class EventSpecificInformationBCSM_tMidCallSpecificInfo {
    constructor (
        readonly midCallEvents: EventSpecificInformationBCSM_tMidCallSpecificInfo_midCallEvents,
        readonly _unrecognizedExtensionsList: _Element[] = [],
    ) {}

    public static _from_object (_o: { [_K in keyof (EventSpecificInformationBCSM_tMidCallSpecificInfo)]: (EventSpecificInformationBCSM_tMidCallSpecificInfo)[_K] }): EventSpecificInformationBCSM_tMidCallSpecificInfo {
        return new EventSpecificInformationBCSM_tMidCallSpecificInfo(_o.midCallEvents, _o._unrecognizedExtensionsList);
    }
}

export const _root_component_type_list_1_spec_for_EventSpecificInformationBCSM_tMidCallSpecificInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("midCallEvents", false, $.hasTag(_TagClass.context, 1))
];

export const _root_component_type_list_2_spec_for_EventSpecificInformationBCSM_tMidCallSpecificInfo: $.ComponentSpec[] = [];

export const _extension_additions_list_spec_for_EventSpecificInformationBCSM_tMidCallSpecificInfo: $.ComponentSpec[] = [];

let _cached_decoder_for_EventSpecificInformationBCSM_tMidCallSpecificInfo: $.ASN1Decoder<EventSpecificInformationBCSM_tMidCallSpecificInfo> | null = null;
export function _decode_EventSpecificInformationBCSM_tMidCallSpecificInfo (el: _Element): EventSpecificInformationBCSM_tMidCallSpecificInfo {
    if (!_cached_decoder_for_EventSpecificInformationBCSM_tMidCallSpecificInfo) {
        _cached_decoder_for_EventSpecificInformationBCSM_tMidCallSpecificInfo = function (el: _Element): EventSpecificInformationBCSM_tMidCallSpecificInfo {
    let midCallEvents!: EventSpecificInformationBCSM_tMidCallSpecificInfo_midCallEvents;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "midCallEvents": (_el: _Element): void => { midCallEvents = $._decode_explicit<EventSpecificInformationBCSM_tMidCallSpecificInfo_midCallEvents>(() => _decode_EventSpecificInformationBCSM_tMidCallSpecificInfo_midCallEvents)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EventSpecificInformationBCSM_tMidCallSpecificInfo,
        _extension_additions_list_spec_for_EventSpecificInformationBCSM_tMidCallSpecificInfo,
        _root_component_type_list_2_spec_for_EventSpecificInformationBCSM_tMidCallSpecificInfo,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new EventSpecificInformationBCSM_tMidCallSpecificInfo(
        midCallEvents,
        _unrecognizedExtensionsList
    );
        };
    }
    return _cached_decoder_for_EventSpecificInformationBCSM_tMidCallSpecificInfo(el);
}

let _cached_encoder_for_EventSpecificInformationBCSM_tMidCallSpecificInfo: $.ASN1Encoder<EventSpecificInformationBCSM_tMidCallSpecificInfo> | null = null;
export function _encode_EventSpecificInformationBCSM_tMidCallSpecificInfo (value: EventSpecificInformationBCSM_tMidCallSpecificInfo, elGetter: $.ASN1Encoder<EventSpecificInformationBCSM_tMidCallSpecificInfo>): _Element {
    if (!_cached_encoder_for_EventSpecificInformationBCSM_tMidCallSpecificInfo) {
        _cached_encoder_for_EventSpecificInformationBCSM_tMidCallSpecificInfo = function (value: EventSpecificInformationBCSM_tMidCallSpecificInfo): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_EventSpecificInformationBCSM_tMidCallSpecificInfo_midCallEvents, $.BER)(value.midCallEvents, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : [])
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
        };
    }
    return _cached_encoder_for_EventSpecificInformationBCSM_tMidCallSpecificInfo(value, elGetter);
}
