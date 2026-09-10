import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type Cause, _decode_Cause, _encode_Cause } from "./Cause.ta.mjs";

/**
 * @summary EventSpecificInformationBCSM_tDisconnectSpecificInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EventSpecificInformationBCSM-tDisconnectSpecificInfo {PARAMETERS-BOUND : bound} ::= SEQUENCE {
 *  releaseCause			[0] Cause {bound}			OPTIONAL,
 *  ...
 *  }
 * ```
 *
 */
export class EventSpecificInformationBCSM_tDisconnectSpecificInfo {
    constructor (
        readonly releaseCause: OPTIONAL<Cause>,
        readonly _unrecognizedExtensionsList: _Element[] = [],
    ) {}

    public static _from_object (_o: { [_K in keyof (EventSpecificInformationBCSM_tDisconnectSpecificInfo)]: (EventSpecificInformationBCSM_tDisconnectSpecificInfo)[_K] }): EventSpecificInformationBCSM_tDisconnectSpecificInfo {
        return new EventSpecificInformationBCSM_tDisconnectSpecificInfo(_o.releaseCause, _o._unrecognizedExtensionsList);
    }
}

export const _root_component_type_list_1_spec_for_EventSpecificInformationBCSM_tDisconnectSpecificInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("releaseCause", true, $.hasTag(_TagClass.context, 0))
];

export const _root_component_type_list_2_spec_for_EventSpecificInformationBCSM_tDisconnectSpecificInfo: $.ComponentSpec[] = [];

export const _extension_additions_list_spec_for_EventSpecificInformationBCSM_tDisconnectSpecificInfo: $.ComponentSpec[] = [];

let _cached_decoder_for_EventSpecificInformationBCSM_tDisconnectSpecificInfo: $.ASN1Decoder<EventSpecificInformationBCSM_tDisconnectSpecificInfo> | null = null;
export function _decode_EventSpecificInformationBCSM_tDisconnectSpecificInfo (el: _Element): EventSpecificInformationBCSM_tDisconnectSpecificInfo {
    if (!_cached_decoder_for_EventSpecificInformationBCSM_tDisconnectSpecificInfo) {
        _cached_decoder_for_EventSpecificInformationBCSM_tDisconnectSpecificInfo = function (el: _Element): EventSpecificInformationBCSM_tDisconnectSpecificInfo {
    let releaseCause: OPTIONAL<Cause>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "releaseCause": (_el: _Element): void => { releaseCause = $._decode_implicit<Cause>(() => _decode_Cause)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EventSpecificInformationBCSM_tDisconnectSpecificInfo,
        _extension_additions_list_spec_for_EventSpecificInformationBCSM_tDisconnectSpecificInfo,
        _root_component_type_list_2_spec_for_EventSpecificInformationBCSM_tDisconnectSpecificInfo,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new EventSpecificInformationBCSM_tDisconnectSpecificInfo(
        releaseCause,
        _unrecognizedExtensionsList
    );
        };
    }
    return _cached_decoder_for_EventSpecificInformationBCSM_tDisconnectSpecificInfo(el);
}

let _cached_encoder_for_EventSpecificInformationBCSM_tDisconnectSpecificInfo: $.ASN1Encoder<EventSpecificInformationBCSM_tDisconnectSpecificInfo> | null = null;
export function _encode_EventSpecificInformationBCSM_tDisconnectSpecificInfo (value: EventSpecificInformationBCSM_tDisconnectSpecificInfo, elGetter: $.ASN1Encoder<EventSpecificInformationBCSM_tDisconnectSpecificInfo>): _Element {
    if (!_cached_encoder_for_EventSpecificInformationBCSM_tDisconnectSpecificInfo) {
        _cached_encoder_for_EventSpecificInformationBCSM_tDisconnectSpecificInfo = function (value: EventSpecificInformationBCSM_tDisconnectSpecificInfo): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.releaseCause === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_Cause, $.BER)(value.releaseCause, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : [])
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
        };
    }
    return _cached_encoder_for_EventSpecificInformationBCSM_tDisconnectSpecificInfo(value, elGetter);
}
