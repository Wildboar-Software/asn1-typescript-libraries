import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { LocationInformation, _decode_LocationInformation, _encode_LocationInformation } from "../MAP-MS-DataTypes/LocationInformation.ta.mjs";
import { type MetDPCriteriaList, _decode_MetDPCriteriaList, _encode_MetDPCriteriaList } from "./MetDPCriteriaList.ta.mjs";

/**
 * @summary EventSpecificInformationBCSM_tChangeOfPositionSpecificInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SEQUENCE {
 locationInformation			[50] LocationInformation		OPTIONAL,
 ...,
 metDPCriteriaList                   [51] MetDPCriteriaList {bound}		OPTIONAL
 }
 * ```
 *
 */
export class EventSpecificInformationBCSM_tChangeOfPositionSpecificInfo {
    constructor (
        readonly locationInformation: OPTIONAL<LocationInformation>,
        readonly metDPCriteriaList: OPTIONAL<MetDPCriteriaList>,
        readonly _unrecognizedExtensionsList: _Element[] = [],
    ) {}

    public static _from_object (_o: { [_K in keyof (EventSpecificInformationBCSM_tChangeOfPositionSpecificInfo)]: (EventSpecificInformationBCSM_tChangeOfPositionSpecificInfo)[_K] }): EventSpecificInformationBCSM_tChangeOfPositionSpecificInfo {
        return new EventSpecificInformationBCSM_tChangeOfPositionSpecificInfo(_o.locationInformation, _o.metDPCriteriaList, _o._unrecognizedExtensionsList);
    }
}

export const _root_component_type_list_1_spec_for_EventSpecificInformationBCSM_tChangeOfPositionSpecificInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("locationInformation", true, $.hasTag(_TagClass.context, 50))
];

export const _root_component_type_list_2_spec_for_EventSpecificInformationBCSM_tChangeOfPositionSpecificInfo: $.ComponentSpec[] = [];

export const _extension_additions_list_spec_for_EventSpecificInformationBCSM_tChangeOfPositionSpecificInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("metDPCriteriaList", true, $.hasTag(_TagClass.context, 51))
];

let _cached_decoder_for_EventSpecificInformationBCSM_tChangeOfPositionSpecificInfo: $.ASN1Decoder<EventSpecificInformationBCSM_tChangeOfPositionSpecificInfo> | null = null;
export function _decode_EventSpecificInformationBCSM_tChangeOfPositionSpecificInfo (el: _Element): EventSpecificInformationBCSM_tChangeOfPositionSpecificInfo {
    if (!_cached_decoder_for_EventSpecificInformationBCSM_tChangeOfPositionSpecificInfo) {
        _cached_decoder_for_EventSpecificInformationBCSM_tChangeOfPositionSpecificInfo = function (el: _Element): EventSpecificInformationBCSM_tChangeOfPositionSpecificInfo {
    let locationInformation: OPTIONAL<LocationInformation>;
    let metDPCriteriaList: OPTIONAL<MetDPCriteriaList>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "locationInformation": (_el: _Element): void => { locationInformation = $._decode_implicit<LocationInformation>(() => _decode_LocationInformation)(_el); },
        "metDPCriteriaList": (_el: _Element): void => { metDPCriteriaList = $._decode_implicit<MetDPCriteriaList>(() => _decode_MetDPCriteriaList)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EventSpecificInformationBCSM_tChangeOfPositionSpecificInfo,
        _extension_additions_list_spec_for_EventSpecificInformationBCSM_tChangeOfPositionSpecificInfo,
        _root_component_type_list_2_spec_for_EventSpecificInformationBCSM_tChangeOfPositionSpecificInfo,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new EventSpecificInformationBCSM_tChangeOfPositionSpecificInfo(
        locationInformation,
        metDPCriteriaList,
        _unrecognizedExtensionsList
    );
        };
    }
    return _cached_decoder_for_EventSpecificInformationBCSM_tChangeOfPositionSpecificInfo(el);
}

let _cached_encoder_for_EventSpecificInformationBCSM_tChangeOfPositionSpecificInfo: $.ASN1Encoder<EventSpecificInformationBCSM_tChangeOfPositionSpecificInfo> | null = null;
export function _encode_EventSpecificInformationBCSM_tChangeOfPositionSpecificInfo (value: EventSpecificInformationBCSM_tChangeOfPositionSpecificInfo, elGetter: $.ASN1Encoder<EventSpecificInformationBCSM_tChangeOfPositionSpecificInfo>): _Element {
    if (!_cached_encoder_for_EventSpecificInformationBCSM_tChangeOfPositionSpecificInfo) {
        _cached_encoder_for_EventSpecificInformationBCSM_tChangeOfPositionSpecificInfo = function (value: EventSpecificInformationBCSM_tChangeOfPositionSpecificInfo): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.locationInformation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 50, () => _encode_LocationInformation, $.BER)(value.locationInformation, $.BER)),
            /* IF_ABSENT  */ ((value.metDPCriteriaList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 51, () => _encode_MetDPCriteriaList, $.BER)(value.metDPCriteriaList, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : [])
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
        };
    }
    return _cached_encoder_for_EventSpecificInformationBCSM_tChangeOfPositionSpecificInfo(value, elGetter);
}
