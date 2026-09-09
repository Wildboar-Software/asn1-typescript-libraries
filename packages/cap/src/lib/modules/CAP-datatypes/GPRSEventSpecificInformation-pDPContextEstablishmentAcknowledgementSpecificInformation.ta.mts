import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type AccessPointName, _decode_AccessPointName, _encode_AccessPointName } from "./AccessPointName.ta.mjs";
import { type GPRSChargingID, _decode_GPRSChargingID, _encode_GPRSChargingID } from "../MAP-MS-DataTypes/GPRSChargingID.ta.mjs";
import { EndUserAddress, _decode_EndUserAddress, _encode_EndUserAddress } from "./EndUserAddress.ta.mjs";
import { QualityOfService, _decode_QualityOfService, _encode_QualityOfService } from "./QualityOfService.ta.mjs";
import { LocationInformationGPRS, _decode_LocationInformationGPRS, _encode_LocationInformationGPRS } from "./LocationInformationGPRS.ta.mjs";
import { type TimeAndTimezone, _decode_TimeAndTimezone, _encode_TimeAndTimezone } from "./TimeAndTimezone.ta.mjs";
import { type GSN_Address, _decode_GSN_Address, _encode_GSN_Address } from "../MAP-MS-DataTypes/GSN-Address.ta.mjs";

/**
 * @summary GPRSEventSpecificInformation_pDPContextEstablishmentAcknowledgementSpecificInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SEQUENCE {
 accessPointName			[0]	AccessPointName {bound}		OPTIONAL,
 chargingID			[1] GPRSChargingID			OPTIONAL,
 endUserAddress			[2]	EndUserAddress {bound}		OPTIONAL,
 qualityOfService		[3]	QualityOfService			OPTIONAL,
 locationInformationGPRS		[4] LocationInformationGPRS		OPTIONAL,
 timeAndTimeZone			[5]	TimeAndTimezone {bound}		OPTIONAL,
 ...,
 gGSNAddress			[6]	GSN-Address				OPTIONAL
 }
 * ```
 *
 */
export class GPRSEventSpecificInformation_pDPContextEstablishmentAcknowledgementSpecificInformation {
    constructor (
        readonly accessPointName: OPTIONAL<AccessPointName>,
        readonly chargingID: OPTIONAL<GPRSChargingID>,
        readonly endUserAddress: OPTIONAL<EndUserAddress>,
        readonly qualityOfService: OPTIONAL<QualityOfService>,
        readonly locationInformationGPRS: OPTIONAL<LocationInformationGPRS>,
        readonly timeAndTimeZone: OPTIONAL<TimeAndTimezone>,
        readonly gGSNAddress: OPTIONAL<GSN_Address>,
        readonly _unrecognizedExtensionsList: _Element[] = [],
    ) {}

    public static _from_object (_o: { [_K in keyof (GPRSEventSpecificInformation_pDPContextEstablishmentAcknowledgementSpecificInformation)]: (GPRSEventSpecificInformation_pDPContextEstablishmentAcknowledgementSpecificInformation)[_K] }): GPRSEventSpecificInformation_pDPContextEstablishmentAcknowledgementSpecificInformation {
        return new GPRSEventSpecificInformation_pDPContextEstablishmentAcknowledgementSpecificInformation(_o.accessPointName, _o.chargingID, _o.endUserAddress, _o.qualityOfService, _o.locationInformationGPRS, _o.timeAndTimeZone, _o.gGSNAddress, _o._unrecognizedExtensionsList);
    }
}

export const _root_component_type_list_1_spec_for_GPRSEventSpecificInformation_pDPContextEstablishmentAcknowledgementSpecificInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("accessPointName", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("chargingID", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("endUserAddress", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("qualityOfService", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("locationInformationGPRS", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("timeAndTimeZone", true, $.hasTag(_TagClass.context, 5))
];

export const _root_component_type_list_2_spec_for_GPRSEventSpecificInformation_pDPContextEstablishmentAcknowledgementSpecificInformation: $.ComponentSpec[] = [];

export const _extension_additions_list_spec_for_GPRSEventSpecificInformation_pDPContextEstablishmentAcknowledgementSpecificInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("gGSNAddress", true, $.hasTag(_TagClass.context, 6))
];

let _cached_decoder_for_GPRSEventSpecificInformation_pDPContextEstablishmentAcknowledgementSpecificInformation: $.ASN1Decoder<GPRSEventSpecificInformation_pDPContextEstablishmentAcknowledgementSpecificInformation> | null = null;
export function _decode_GPRSEventSpecificInformation_pDPContextEstablishmentAcknowledgementSpecificInformation (el: _Element): GPRSEventSpecificInformation_pDPContextEstablishmentAcknowledgementSpecificInformation {
    if (!_cached_decoder_for_GPRSEventSpecificInformation_pDPContextEstablishmentAcknowledgementSpecificInformation) {
        _cached_decoder_for_GPRSEventSpecificInformation_pDPContextEstablishmentAcknowledgementSpecificInformation = function (el: _Element): GPRSEventSpecificInformation_pDPContextEstablishmentAcknowledgementSpecificInformation {
    let accessPointName: OPTIONAL<AccessPointName>;
    let chargingID: OPTIONAL<GPRSChargingID>;
    let endUserAddress: OPTIONAL<EndUserAddress>;
    let qualityOfService: OPTIONAL<QualityOfService>;
    let locationInformationGPRS: OPTIONAL<LocationInformationGPRS>;
    let timeAndTimeZone: OPTIONAL<TimeAndTimezone>;
    let gGSNAddress: OPTIONAL<GSN_Address>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "accessPointName": (_el: _Element): void => { accessPointName = $._decode_implicit<AccessPointName>(() => _decode_AccessPointName)(_el); },
        "chargingID": (_el: _Element): void => { chargingID = $._decode_implicit<GPRSChargingID>(() => _decode_GPRSChargingID)(_el); },
        "endUserAddress": (_el: _Element): void => { endUserAddress = $._decode_implicit<EndUserAddress>(() => _decode_EndUserAddress)(_el); },
        "qualityOfService": (_el: _Element): void => { qualityOfService = $._decode_implicit<QualityOfService>(() => _decode_QualityOfService)(_el); },
        "locationInformationGPRS": (_el: _Element): void => { locationInformationGPRS = $._decode_implicit<LocationInformationGPRS>(() => _decode_LocationInformationGPRS)(_el); },
        "timeAndTimeZone": (_el: _Element): void => { timeAndTimeZone = $._decode_implicit<TimeAndTimezone>(() => _decode_TimeAndTimezone)(_el); },
        "gGSNAddress": (_el: _Element): void => { gGSNAddress = $._decode_implicit<GSN_Address>(() => _decode_GSN_Address)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GPRSEventSpecificInformation_pDPContextEstablishmentAcknowledgementSpecificInformation,
        _extension_additions_list_spec_for_GPRSEventSpecificInformation_pDPContextEstablishmentAcknowledgementSpecificInformation,
        _root_component_type_list_2_spec_for_GPRSEventSpecificInformation_pDPContextEstablishmentAcknowledgementSpecificInformation,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new GPRSEventSpecificInformation_pDPContextEstablishmentAcknowledgementSpecificInformation(
        accessPointName,
        chargingID,
        endUserAddress,
        qualityOfService,
        locationInformationGPRS,
        timeAndTimeZone,
        gGSNAddress,
        _unrecognizedExtensionsList
    );
        };
    }
    return _cached_decoder_for_GPRSEventSpecificInformation_pDPContextEstablishmentAcknowledgementSpecificInformation(el);
}

let _cached_encoder_for_GPRSEventSpecificInformation_pDPContextEstablishmentAcknowledgementSpecificInformation: $.ASN1Encoder<GPRSEventSpecificInformation_pDPContextEstablishmentAcknowledgementSpecificInformation> | null = null;
export function _encode_GPRSEventSpecificInformation_pDPContextEstablishmentAcknowledgementSpecificInformation (value: GPRSEventSpecificInformation_pDPContextEstablishmentAcknowledgementSpecificInformation, elGetter: $.ASN1Encoder<GPRSEventSpecificInformation_pDPContextEstablishmentAcknowledgementSpecificInformation>): _Element {
    if (!_cached_encoder_for_GPRSEventSpecificInformation_pDPContextEstablishmentAcknowledgementSpecificInformation) {
        _cached_encoder_for_GPRSEventSpecificInformation_pDPContextEstablishmentAcknowledgementSpecificInformation = function (value: GPRSEventSpecificInformation_pDPContextEstablishmentAcknowledgementSpecificInformation): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.accessPointName === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_AccessPointName, $.BER)(value.accessPointName, $.BER)),
            /* IF_ABSENT  */ ((value.chargingID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_GPRSChargingID, $.BER)(value.chargingID, $.BER)),
            /* IF_ABSENT  */ ((value.endUserAddress === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_EndUserAddress, $.BER)(value.endUserAddress, $.BER)),
            /* IF_ABSENT  */ ((value.qualityOfService === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_QualityOfService, $.BER)(value.qualityOfService, $.BER)),
            /* IF_ABSENT  */ ((value.locationInformationGPRS === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_LocationInformationGPRS, $.BER)(value.locationInformationGPRS, $.BER)),
            /* IF_ABSENT  */ ((value.timeAndTimeZone === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_TimeAndTimezone, $.BER)(value.timeAndTimeZone, $.BER)),
            /* IF_ABSENT  */ ((value.gGSNAddress === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_GSN_Address, $.BER)(value.gGSNAddress, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : [])
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
        };
    }
    return _cached_encoder_for_GPRSEventSpecificInformation_pDPContextEstablishmentAcknowledgementSpecificInformation(value, elGetter);
}
