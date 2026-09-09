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
import { type EventSpecificInformationBCSM_oMidCallSpecificInfo_midCallEvents, _decode_EventSpecificInformationBCSM_oMidCallSpecificInfo_midCallEvents, _encode_EventSpecificInformationBCSM_oMidCallSpecificInfo_midCallEvents } from "./EventSpecificInformationBCSM-oMidCallSpecificInfo-midCallEvents.ta.mjs";

/**
 * @summary EventSpecificInformationBCSM_oMidCallSpecificInfo
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
export class EventSpecificInformationBCSM_oMidCallSpecificInfo {
    constructor (
        readonly midCallEvents: EventSpecificInformationBCSM_oMidCallSpecificInfo_midCallEvents,
        readonly _unrecognizedExtensionsList: _Element[] = [],
    ) {}

    public static _from_object (_o: { [_K in keyof (EventSpecificInformationBCSM_oMidCallSpecificInfo)]: (EventSpecificInformationBCSM_oMidCallSpecificInfo)[_K] }): EventSpecificInformationBCSM_oMidCallSpecificInfo {
        return new EventSpecificInformationBCSM_oMidCallSpecificInfo(_o.midCallEvents, _o._unrecognizedExtensionsList);
    }
}

export const _root_component_type_list_1_spec_for_EventSpecificInformationBCSM_oMidCallSpecificInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("midCallEvents", false, $.hasTag(_TagClass.context, 1))
];

export const _root_component_type_list_2_spec_for_EventSpecificInformationBCSM_oMidCallSpecificInfo: $.ComponentSpec[] = [];

export const _extension_additions_list_spec_for_EventSpecificInformationBCSM_oMidCallSpecificInfo: $.ComponentSpec[] = [];

let _cached_decoder_for_EventSpecificInformationBCSM_oMidCallSpecificInfo: $.ASN1Decoder<EventSpecificInformationBCSM_oMidCallSpecificInfo> | null = null;
export function _decode_EventSpecificInformationBCSM_oMidCallSpecificInfo (el: _Element): EventSpecificInformationBCSM_oMidCallSpecificInfo {
    if (!_cached_decoder_for_EventSpecificInformationBCSM_oMidCallSpecificInfo) {
        _cached_decoder_for_EventSpecificInformationBCSM_oMidCallSpecificInfo = function (el: _Element): EventSpecificInformationBCSM_oMidCallSpecificInfo {
    let midCallEvents!: EventSpecificInformationBCSM_oMidCallSpecificInfo_midCallEvents;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "midCallEvents": (_el: _Element): void => { midCallEvents = $._decode_explicit<EventSpecificInformationBCSM_oMidCallSpecificInfo_midCallEvents>(() => _decode_EventSpecificInformationBCSM_oMidCallSpecificInfo_midCallEvents)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EventSpecificInformationBCSM_oMidCallSpecificInfo,
        _extension_additions_list_spec_for_EventSpecificInformationBCSM_oMidCallSpecificInfo,
        _root_component_type_list_2_spec_for_EventSpecificInformationBCSM_oMidCallSpecificInfo,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new EventSpecificInformationBCSM_oMidCallSpecificInfo(
        midCallEvents,
        _unrecognizedExtensionsList
    );
        };
    }
    return _cached_decoder_for_EventSpecificInformationBCSM_oMidCallSpecificInfo(el);
}

let _cached_encoder_for_EventSpecificInformationBCSM_oMidCallSpecificInfo: $.ASN1Encoder<EventSpecificInformationBCSM_oMidCallSpecificInfo> | null = null;
export function _encode_EventSpecificInformationBCSM_oMidCallSpecificInfo (value: EventSpecificInformationBCSM_oMidCallSpecificInfo, elGetter: $.ASN1Encoder<EventSpecificInformationBCSM_oMidCallSpecificInfo>): _Element {
    if (!_cached_encoder_for_EventSpecificInformationBCSM_oMidCallSpecificInfo) {
        _cached_encoder_for_EventSpecificInformationBCSM_oMidCallSpecificInfo = function (value: EventSpecificInformationBCSM_oMidCallSpecificInfo, elGetter: $.ASN1Encoder<EventSpecificInformationBCSM_oMidCallSpecificInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_EventSpecificInformationBCSM_oMidCallSpecificInfo_midCallEvents, $.BER)(value.midCallEvents, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : [])
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
        };
    }
    return _cached_encoder_for_EventSpecificInformationBCSM_oMidCallSpecificInfo(value, elGetter);
}
