import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { LocationInformation, _decode_LocationInformation, _encode_LocationInformation } from "../MAP-MS-DataTypes/LocationInformation.ta.mjs";
import { type MetDPCriteriaList, _decode_MetDPCriteriaList, _encode_MetDPCriteriaList } from "./MetDPCriteriaList.ta.mjs";

/**
 * @summary EventSpecificInformationBCSM_oChangeOfPositionSpecificInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SEQUENCE {
 *  locationInformation			[50] LocationInformation		OPTIONAL,
 *  ...,
 *  metDPCriteriaList                   [51] MetDPCriteriaList {bound}		OPTIONAL
 *  }
 * ```
 *
 */
export class EventSpecificInformationBCSM_oChangeOfPositionSpecificInfo {
    constructor (
        readonly locationInformation: OPTIONAL<LocationInformation>,
        readonly metDPCriteriaList: OPTIONAL<MetDPCriteriaList>,
        readonly _unrecognizedExtensionsList: _Element[] = [],
    ) {}

    public static _from_object (_o: { [_K in keyof (EventSpecificInformationBCSM_oChangeOfPositionSpecificInfo)]: (EventSpecificInformationBCSM_oChangeOfPositionSpecificInfo)[_K] }): EventSpecificInformationBCSM_oChangeOfPositionSpecificInfo {
        return new EventSpecificInformationBCSM_oChangeOfPositionSpecificInfo(_o.locationInformation, _o.metDPCriteriaList, _o._unrecognizedExtensionsList);
    }
}

export const _root_component_type_list_1_spec_for_EventSpecificInformationBCSM_oChangeOfPositionSpecificInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("locationInformation", true, $.hasTag(_TagClass.context, 50))
];

export const _root_component_type_list_2_spec_for_EventSpecificInformationBCSM_oChangeOfPositionSpecificInfo: $.ComponentSpec[] = [];

export const _extension_additions_list_spec_for_EventSpecificInformationBCSM_oChangeOfPositionSpecificInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("metDPCriteriaList", true, $.hasTag(_TagClass.context, 51))
];

let _cached_decoder_for_EventSpecificInformationBCSM_oChangeOfPositionSpecificInfo: $.ASN1Decoder<EventSpecificInformationBCSM_oChangeOfPositionSpecificInfo> | null = null;
export function _decode_EventSpecificInformationBCSM_oChangeOfPositionSpecificInfo (el: _Element): EventSpecificInformationBCSM_oChangeOfPositionSpecificInfo {
    if (!_cached_decoder_for_EventSpecificInformationBCSM_oChangeOfPositionSpecificInfo) {
        _cached_decoder_for_EventSpecificInformationBCSM_oChangeOfPositionSpecificInfo = function (el: _Element): EventSpecificInformationBCSM_oChangeOfPositionSpecificInfo {
    let locationInformation: OPTIONAL<LocationInformation>;
    let metDPCriteriaList: OPTIONAL<MetDPCriteriaList>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "locationInformation": (_el: _Element): void => { locationInformation = $._decode_implicit<LocationInformation>(() => _decode_LocationInformation)(_el); },
        "metDPCriteriaList": (_el: _Element): void => { metDPCriteriaList = $._decode_implicit<MetDPCriteriaList>(() => _decode_MetDPCriteriaList)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EventSpecificInformationBCSM_oChangeOfPositionSpecificInfo,
        _extension_additions_list_spec_for_EventSpecificInformationBCSM_oChangeOfPositionSpecificInfo,
        _root_component_type_list_2_spec_for_EventSpecificInformationBCSM_oChangeOfPositionSpecificInfo,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new EventSpecificInformationBCSM_oChangeOfPositionSpecificInfo(
        locationInformation,
        metDPCriteriaList,
        _unrecognizedExtensionsList
    );
        };
    }
    return _cached_decoder_for_EventSpecificInformationBCSM_oChangeOfPositionSpecificInfo(el);
}

let _cached_encoder_for_EventSpecificInformationBCSM_oChangeOfPositionSpecificInfo: $.ASN1Encoder<EventSpecificInformationBCSM_oChangeOfPositionSpecificInfo> | null = null;
export function _encode_EventSpecificInformationBCSM_oChangeOfPositionSpecificInfo (value: EventSpecificInformationBCSM_oChangeOfPositionSpecificInfo, elGetter: $.ASN1Encoder<EventSpecificInformationBCSM_oChangeOfPositionSpecificInfo>): _Element {
    if (!_cached_encoder_for_EventSpecificInformationBCSM_oChangeOfPositionSpecificInfo) {
        _cached_encoder_for_EventSpecificInformationBCSM_oChangeOfPositionSpecificInfo = function (value: EventSpecificInformationBCSM_oChangeOfPositionSpecificInfo): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.locationInformation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 50, () => _encode_LocationInformation, $.BER)(value.locationInformation, $.BER)),
            /* IF_ABSENT  */ ((value.metDPCriteriaList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 51, () => _encode_MetDPCriteriaList, $.BER)(value.metDPCriteriaList, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : [])
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
        };
    }
    return _cached_encoder_for_EventSpecificInformationBCSM_oChangeOfPositionSpecificInfo(value, elGetter);
}
