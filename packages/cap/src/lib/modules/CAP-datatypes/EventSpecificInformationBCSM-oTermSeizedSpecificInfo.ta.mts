import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { LocationInformation, _decode_LocationInformation, _encode_LocationInformation } from "../MAP-MS-DataTypes/LocationInformation.ta.mjs";

/**
 * @summary EventSpecificInformationBCSM_oTermSeizedSpecificInfo
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
export class EventSpecificInformationBCSM_oTermSeizedSpecificInfo {
    constructor (
        readonly locationInformation: OPTIONAL<LocationInformation>,
        readonly _unrecognizedExtensionsList: _Element[] = [],
    ) {}

    public static _from_object (_o: { [_K in keyof (EventSpecificInformationBCSM_oTermSeizedSpecificInfo)]: (EventSpecificInformationBCSM_oTermSeizedSpecificInfo)[_K] }): EventSpecificInformationBCSM_oTermSeizedSpecificInfo {
        return new EventSpecificInformationBCSM_oTermSeizedSpecificInfo(_o.locationInformation, _o._unrecognizedExtensionsList);
    }
}

export const _root_component_type_list_1_spec_for_EventSpecificInformationBCSM_oTermSeizedSpecificInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("locationInformation", true, $.hasTag(_TagClass.context, 50))
];

export const _root_component_type_list_2_spec_for_EventSpecificInformationBCSM_oTermSeizedSpecificInfo: $.ComponentSpec[] = [];

export const _extension_additions_list_spec_for_EventSpecificInformationBCSM_oTermSeizedSpecificInfo: $.ComponentSpec[] = [];

let _cached_decoder_for_EventSpecificInformationBCSM_oTermSeizedSpecificInfo: $.ASN1Decoder<EventSpecificInformationBCSM_oTermSeizedSpecificInfo> | null = null;
export function _decode_EventSpecificInformationBCSM_oTermSeizedSpecificInfo (el: _Element): EventSpecificInformationBCSM_oTermSeizedSpecificInfo {
    if (!_cached_decoder_for_EventSpecificInformationBCSM_oTermSeizedSpecificInfo) {
        _cached_decoder_for_EventSpecificInformationBCSM_oTermSeizedSpecificInfo = function (el: _Element): EventSpecificInformationBCSM_oTermSeizedSpecificInfo {
    let locationInformation: OPTIONAL<LocationInformation>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "locationInformation": (_el: _Element): void => { locationInformation = $._decode_implicit<LocationInformation>(() => _decode_LocationInformation)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EventSpecificInformationBCSM_oTermSeizedSpecificInfo,
        _extension_additions_list_spec_for_EventSpecificInformationBCSM_oTermSeizedSpecificInfo,
        _root_component_type_list_2_spec_for_EventSpecificInformationBCSM_oTermSeizedSpecificInfo,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new EventSpecificInformationBCSM_oTermSeizedSpecificInfo(
        locationInformation,
        _unrecognizedExtensionsList
    );
        };
    }
    return _cached_decoder_for_EventSpecificInformationBCSM_oTermSeizedSpecificInfo(el);
}

let _cached_encoder_for_EventSpecificInformationBCSM_oTermSeizedSpecificInfo: $.ASN1Encoder<EventSpecificInformationBCSM_oTermSeizedSpecificInfo> | null = null;
export function _encode_EventSpecificInformationBCSM_oTermSeizedSpecificInfo (value: EventSpecificInformationBCSM_oTermSeizedSpecificInfo, elGetter: $.ASN1Encoder<EventSpecificInformationBCSM_oTermSeizedSpecificInfo>): _Element {
    if (!_cached_encoder_for_EventSpecificInformationBCSM_oTermSeizedSpecificInfo) {
        _cached_encoder_for_EventSpecificInformationBCSM_oTermSeizedSpecificInfo = function (value: EventSpecificInformationBCSM_oTermSeizedSpecificInfo): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.locationInformation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 50, () => _encode_LocationInformation, $.BER)(value.locationInformation, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : [])
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
        };
    }
    return _cached_encoder_for_EventSpecificInformationBCSM_oTermSeizedSpecificInfo(value, elGetter);
}
