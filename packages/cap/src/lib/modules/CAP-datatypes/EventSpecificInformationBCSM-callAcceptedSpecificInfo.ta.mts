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
import { LocationInformation, _decode_LocationInformation, _encode_LocationInformation } from "../MAP-MS-DataTypes/LocationInformation.ta.mjs";

/**
 * @summary EventSpecificInformationBCSM_callAcceptedSpecificInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SEQUENCE {
 locationInformation			[50] LocationInformation		OPTIONAL,
 ...
 }
 * ```
 *
 */
export class EventSpecificInformationBCSM_callAcceptedSpecificInfo {
    constructor (
        readonly locationInformation: OPTIONAL<LocationInformation>,
        readonly _unrecognizedExtensionsList: _Element[] = [],
    ) {}

    public static _from_object (_o: { [_K in keyof (EventSpecificInformationBCSM_callAcceptedSpecificInfo)]: (EventSpecificInformationBCSM_callAcceptedSpecificInfo)[_K] }): EventSpecificInformationBCSM_callAcceptedSpecificInfo {
        return new EventSpecificInformationBCSM_callAcceptedSpecificInfo(_o.locationInformation, _o._unrecognizedExtensionsList);
    }
}

export const _root_component_type_list_1_spec_for_EventSpecificInformationBCSM_callAcceptedSpecificInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("locationInformation", true, $.hasTag(_TagClass.context, 50))
];

export const _root_component_type_list_2_spec_for_EventSpecificInformationBCSM_callAcceptedSpecificInfo: $.ComponentSpec[] = [];

export const _extension_additions_list_spec_for_EventSpecificInformationBCSM_callAcceptedSpecificInfo: $.ComponentSpec[] = [];

let _cached_decoder_for_EventSpecificInformationBCSM_callAcceptedSpecificInfo: $.ASN1Decoder<EventSpecificInformationBCSM_callAcceptedSpecificInfo> | null = null;
export function _decode_EventSpecificInformationBCSM_callAcceptedSpecificInfo (el: _Element): EventSpecificInformationBCSM_callAcceptedSpecificInfo {
    if (!_cached_decoder_for_EventSpecificInformationBCSM_callAcceptedSpecificInfo) {
        _cached_decoder_for_EventSpecificInformationBCSM_callAcceptedSpecificInfo = function (el: _Element): EventSpecificInformationBCSM_callAcceptedSpecificInfo {
    let locationInformation: OPTIONAL<LocationInformation>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "locationInformation": (_el: _Element): void => { locationInformation = $._decode_implicit<LocationInformation>(() => _decode_LocationInformation)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EventSpecificInformationBCSM_callAcceptedSpecificInfo,
        _extension_additions_list_spec_for_EventSpecificInformationBCSM_callAcceptedSpecificInfo,
        _root_component_type_list_2_spec_for_EventSpecificInformationBCSM_callAcceptedSpecificInfo,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new EventSpecificInformationBCSM_callAcceptedSpecificInfo(
        locationInformation,
        _unrecognizedExtensionsList
    );
        };
    }
    return _cached_decoder_for_EventSpecificInformationBCSM_callAcceptedSpecificInfo(el);
}

let _cached_encoder_for_EventSpecificInformationBCSM_callAcceptedSpecificInfo: $.ASN1Encoder<EventSpecificInformationBCSM_callAcceptedSpecificInfo> | null = null;
export function _encode_EventSpecificInformationBCSM_callAcceptedSpecificInfo (value: EventSpecificInformationBCSM_callAcceptedSpecificInfo, elGetter: $.ASN1Encoder<EventSpecificInformationBCSM_callAcceptedSpecificInfo>): _Element {
    if (!_cached_encoder_for_EventSpecificInformationBCSM_callAcceptedSpecificInfo) {
        _cached_encoder_for_EventSpecificInformationBCSM_callAcceptedSpecificInfo = function (value: EventSpecificInformationBCSM_callAcceptedSpecificInfo, elGetter: $.ASN1Encoder<EventSpecificInformationBCSM_callAcceptedSpecificInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.locationInformation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 50, () => _encode_LocationInformation, $.BER)(value.locationInformation, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : [])
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
        };
    }
    return _cached_encoder_for_EventSpecificInformationBCSM_callAcceptedSpecificInfo(value, elGetter);
}
