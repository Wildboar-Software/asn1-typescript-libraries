import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type AccessPointName, _decode_AccessPointName, _encode_AccessPointName } from "./AccessPointName.ta.mjs";
import { type GPRSChargingID, _decode_GPRSChargingID, _encode_GPRSChargingID } from "../MAP-MS-DataTypes/GPRSChargingID.ta.mjs";
import { LocationInformationGPRS, _decode_LocationInformationGPRS, _encode_LocationInformationGPRS } from "./LocationInformationGPRS.ta.mjs";
import { EndUserAddress, _decode_EndUserAddress, _encode_EndUserAddress } from "./EndUserAddress.ta.mjs";
import { QualityOfService, _decode_QualityOfService, _encode_QualityOfService } from "./QualityOfService.ta.mjs";
import { type TimeAndTimezone, _decode_TimeAndTimezone, _encode_TimeAndTimezone } from "./TimeAndTimezone.ta.mjs";
import { type GSN_Address, _decode_GSN_Address, _encode_GSN_Address } from "../MAP-MS-DataTypes/GSN-Address.ta.mjs";

/**
 * @summary GPRSEventSpecificInformation_pdp_ContextchangeOfPositionSpecificInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SEQUENCE {
 accessPointName			[0]	AccessPointName {bound}		OPTIONAL,
 chargingID			[1]	GPRSChargingID			OPTIONAL,
 locationInformationGPRS		[2] LocationInformationGPRS		OPTIONAL,
 endUserAddress			[3]	EndUserAddress {bound}		OPTIONAL,
 qualityOfService		[4]	QualityOfService			OPTIONAL,
 timeAndTimeZone			[5]	TimeAndTimezone {bound}		OPTIONAL,
 ...,
 gGSNAddress			[6]	GSN-Address				OPTIONAL
 }
 * ```
 *
 */
export class GPRSEventSpecificInformation_pdp_ContextchangeOfPositionSpecificInformation {
    constructor (
        readonly accessPointName: OPTIONAL<AccessPointName>,
        readonly chargingID: OPTIONAL<GPRSChargingID>,
        readonly locationInformationGPRS: OPTIONAL<LocationInformationGPRS>,
        readonly endUserAddress: OPTIONAL<EndUserAddress>,
        readonly qualityOfService: OPTIONAL<QualityOfService>,
        readonly timeAndTimeZone: OPTIONAL<TimeAndTimezone>,
        readonly gGSNAddress: OPTIONAL<GSN_Address>,
        readonly _unrecognizedExtensionsList: _Element[] = [],
    ) {}

    public static _from_object (_o: { [_K in keyof (GPRSEventSpecificInformation_pdp_ContextchangeOfPositionSpecificInformation)]: (GPRSEventSpecificInformation_pdp_ContextchangeOfPositionSpecificInformation)[_K] }): GPRSEventSpecificInformation_pdp_ContextchangeOfPositionSpecificInformation {
        return new GPRSEventSpecificInformation_pdp_ContextchangeOfPositionSpecificInformation(_o.accessPointName, _o.chargingID, _o.locationInformationGPRS, _o.endUserAddress, _o.qualityOfService, _o.timeAndTimeZone, _o.gGSNAddress, _o._unrecognizedExtensionsList);
    }
}

export const _root_component_type_list_1_spec_for_GPRSEventSpecificInformation_pdp_ContextchangeOfPositionSpecificInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("accessPointName", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("chargingID", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("locationInformationGPRS", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("endUserAddress", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("qualityOfService", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("timeAndTimeZone", true, $.hasTag(_TagClass.context, 5))
];

export const _root_component_type_list_2_spec_for_GPRSEventSpecificInformation_pdp_ContextchangeOfPositionSpecificInformation: $.ComponentSpec[] = [];

export const _extension_additions_list_spec_for_GPRSEventSpecificInformation_pdp_ContextchangeOfPositionSpecificInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("gGSNAddress", true, $.hasTag(_TagClass.context, 6))
];

let _cached_decoder_for_GPRSEventSpecificInformation_pdp_ContextchangeOfPositionSpecificInformation: $.ASN1Decoder<GPRSEventSpecificInformation_pdp_ContextchangeOfPositionSpecificInformation> | null = null;
export function _decode_GPRSEventSpecificInformation_pdp_ContextchangeOfPositionSpecificInformation (el: _Element): GPRSEventSpecificInformation_pdp_ContextchangeOfPositionSpecificInformation {
    if (!_cached_decoder_for_GPRSEventSpecificInformation_pdp_ContextchangeOfPositionSpecificInformation) {
        _cached_decoder_for_GPRSEventSpecificInformation_pdp_ContextchangeOfPositionSpecificInformation = function (el: _Element): GPRSEventSpecificInformation_pdp_ContextchangeOfPositionSpecificInformation {
    let accessPointName: OPTIONAL<AccessPointName>;
    let chargingID: OPTIONAL<GPRSChargingID>;
    let locationInformationGPRS: OPTIONAL<LocationInformationGPRS>;
    let endUserAddress: OPTIONAL<EndUserAddress>;
    let qualityOfService: OPTIONAL<QualityOfService>;
    let timeAndTimeZone: OPTIONAL<TimeAndTimezone>;
    let gGSNAddress: OPTIONAL<GSN_Address>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "accessPointName": (_el: _Element): void => { accessPointName = $._decode_implicit<AccessPointName>(() => _decode_AccessPointName)(_el); },
        "chargingID": (_el: _Element): void => { chargingID = $._decode_implicit<GPRSChargingID>(() => _decode_GPRSChargingID)(_el); },
        "locationInformationGPRS": (_el: _Element): void => { locationInformationGPRS = $._decode_implicit<LocationInformationGPRS>(() => _decode_LocationInformationGPRS)(_el); },
        "endUserAddress": (_el: _Element): void => { endUserAddress = $._decode_implicit<EndUserAddress>(() => _decode_EndUserAddress)(_el); },
        "qualityOfService": (_el: _Element): void => { qualityOfService = $._decode_implicit<QualityOfService>(() => _decode_QualityOfService)(_el); },
        "timeAndTimeZone": (_el: _Element): void => { timeAndTimeZone = $._decode_implicit<TimeAndTimezone>(() => _decode_TimeAndTimezone)(_el); },
        "gGSNAddress": (_el: _Element): void => { gGSNAddress = $._decode_implicit<GSN_Address>(() => _decode_GSN_Address)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GPRSEventSpecificInformation_pdp_ContextchangeOfPositionSpecificInformation,
        _extension_additions_list_spec_for_GPRSEventSpecificInformation_pdp_ContextchangeOfPositionSpecificInformation,
        _root_component_type_list_2_spec_for_GPRSEventSpecificInformation_pdp_ContextchangeOfPositionSpecificInformation,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new GPRSEventSpecificInformation_pdp_ContextchangeOfPositionSpecificInformation(
        accessPointName,
        chargingID,
        locationInformationGPRS,
        endUserAddress,
        qualityOfService,
        timeAndTimeZone,
        gGSNAddress,
        _unrecognizedExtensionsList
    );
        };
    }
    return _cached_decoder_for_GPRSEventSpecificInformation_pdp_ContextchangeOfPositionSpecificInformation(el);
}

let _cached_encoder_for_GPRSEventSpecificInformation_pdp_ContextchangeOfPositionSpecificInformation: $.ASN1Encoder<GPRSEventSpecificInformation_pdp_ContextchangeOfPositionSpecificInformation> | null = null;
export function _encode_GPRSEventSpecificInformation_pdp_ContextchangeOfPositionSpecificInformation (value: GPRSEventSpecificInformation_pdp_ContextchangeOfPositionSpecificInformation, elGetter: $.ASN1Encoder<GPRSEventSpecificInformation_pdp_ContextchangeOfPositionSpecificInformation>): _Element {
    if (!_cached_encoder_for_GPRSEventSpecificInformation_pdp_ContextchangeOfPositionSpecificInformation) {
        _cached_encoder_for_GPRSEventSpecificInformation_pdp_ContextchangeOfPositionSpecificInformation = function (value: GPRSEventSpecificInformation_pdp_ContextchangeOfPositionSpecificInformation): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.accessPointName === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_AccessPointName, $.BER)(value.accessPointName, $.BER)),
            /* IF_ABSENT  */ ((value.chargingID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_GPRSChargingID, $.BER)(value.chargingID, $.BER)),
            /* IF_ABSENT  */ ((value.locationInformationGPRS === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_LocationInformationGPRS, $.BER)(value.locationInformationGPRS, $.BER)),
            /* IF_ABSENT  */ ((value.endUserAddress === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_EndUserAddress, $.BER)(value.endUserAddress, $.BER)),
            /* IF_ABSENT  */ ((value.qualityOfService === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_QualityOfService, $.BER)(value.qualityOfService, $.BER)),
            /* IF_ABSENT  */ ((value.timeAndTimeZone === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_TimeAndTimezone, $.BER)(value.timeAndTimeZone, $.BER)),
            /* IF_ABSENT  */ ((value.gGSNAddress === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_GSN_Address, $.BER)(value.gGSNAddress, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : [])
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
        };
    }
    return _cached_encoder_for_GPRSEventSpecificInformation_pdp_ContextchangeOfPositionSpecificInformation(value, elGetter);
}
