import {
    OPTIONAL,
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type AccessPointName, _decode_AccessPointName, _encode_AccessPointName } from "./AccessPointName.ta.mjs";
import { EndUserAddress, _decode_EndUserAddress, _encode_EndUserAddress } from "./EndUserAddress.ta.mjs";
import { QualityOfService, _decode_QualityOfService, _encode_QualityOfService } from "./QualityOfService.ta.mjs";
import { LocationInformationGPRS, _decode_LocationInformationGPRS, _encode_LocationInformationGPRS } from "./LocationInformationGPRS.ta.mjs";
import { type TimeAndTimezone, _decode_TimeAndTimezone, _encode_TimeAndTimezone } from "./TimeAndTimezone.ta.mjs";
import { PDPInitiationType, _enum_for_PDPInitiationType, _decode_PDPInitiationType, _encode_PDPInitiationType } from "./PDPInitiationType.ta.mjs";

/**
 * @summary GPRSEventSpecificInformation_pDPContextEstablishmentSpecificInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GPRSEventSpecificInformation-pDPContextEstablishmentSpecificInformation {PARAMETERS-BOUND : bound} ::= SEQUENCE {
 *  accessPointName			[0]	AccessPointName {bound}		OPTIONAL,
 *  endUserAddress			[1]	EndUserAddress {bound}		OPTIONAL,
 *  qualityOfService		[2]	QualityOfService			OPTIONAL,
 *  locationInformationGPRS		[3] LocationInformationGPRS		OPTIONAL,
 *  timeAndTimeZone			[4]	TimeAndTimezone {bound}		OPTIONAL,
 *  pDPInitiationType		[5] PDPInitiationType			OPTIONAL,
 *  ...,
 *  secondaryPDP-context		[6] NULL				OPTIONAL
 *  }
 * ```
 *
 */
export class GPRSEventSpecificInformation_pDPContextEstablishmentSpecificInformation {
    constructor (
        readonly accessPointName: OPTIONAL<AccessPointName>,
        readonly endUserAddress: OPTIONAL<EndUserAddress>,
        readonly qualityOfService: OPTIONAL<QualityOfService>,
        readonly locationInformationGPRS: OPTIONAL<LocationInformationGPRS>,
        readonly timeAndTimeZone: OPTIONAL<TimeAndTimezone>,
        readonly pDPInitiationType: OPTIONAL<PDPInitiationType>,
        readonly secondaryPDP_context: OPTIONAL<NULL>,
        readonly _unrecognizedExtensionsList: _Element[] = [],
    ) {}

    public static _from_object (_o: { [_K in keyof (GPRSEventSpecificInformation_pDPContextEstablishmentSpecificInformation)]: (GPRSEventSpecificInformation_pDPContextEstablishmentSpecificInformation)[_K] }): GPRSEventSpecificInformation_pDPContextEstablishmentSpecificInformation {
        return new GPRSEventSpecificInformation_pDPContextEstablishmentSpecificInformation(_o.accessPointName, _o.endUserAddress, _o.qualityOfService, _o.locationInformationGPRS, _o.timeAndTimeZone, _o.pDPInitiationType, _o.secondaryPDP_context, _o._unrecognizedExtensionsList);
    }

    public static _enum_for_pDPInitiationType = _enum_for_PDPInitiationType;
}

export const _root_component_type_list_1_spec_for_GPRSEventSpecificInformation_pDPContextEstablishmentSpecificInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("accessPointName", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("endUserAddress", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("qualityOfService", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("locationInformationGPRS", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("timeAndTimeZone", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("pDPInitiationType", true, $.hasTag(_TagClass.context, 5))
];

export const _root_component_type_list_2_spec_for_GPRSEventSpecificInformation_pDPContextEstablishmentSpecificInformation: $.ComponentSpec[] = [];

export const _extension_additions_list_spec_for_GPRSEventSpecificInformation_pDPContextEstablishmentSpecificInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("secondaryPDP-context", true, $.hasTag(_TagClass.context, 6))
];

let _cached_decoder_for_GPRSEventSpecificInformation_pDPContextEstablishmentSpecificInformation: $.ASN1Decoder<GPRSEventSpecificInformation_pDPContextEstablishmentSpecificInformation> | null = null;
export function _decode_GPRSEventSpecificInformation_pDPContextEstablishmentSpecificInformation (el: _Element): GPRSEventSpecificInformation_pDPContextEstablishmentSpecificInformation {
    if (!_cached_decoder_for_GPRSEventSpecificInformation_pDPContextEstablishmentSpecificInformation) {
        _cached_decoder_for_GPRSEventSpecificInformation_pDPContextEstablishmentSpecificInformation = function (el: _Element): GPRSEventSpecificInformation_pDPContextEstablishmentSpecificInformation {
    let accessPointName: OPTIONAL<AccessPointName>;
    let endUserAddress: OPTIONAL<EndUserAddress>;
    let qualityOfService: OPTIONAL<QualityOfService>;
    let locationInformationGPRS: OPTIONAL<LocationInformationGPRS>;
    let timeAndTimeZone: OPTIONAL<TimeAndTimezone>;
    let pDPInitiationType: OPTIONAL<PDPInitiationType>;
    let secondaryPDP_context: OPTIONAL<NULL>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "accessPointName": (_el: _Element): void => { accessPointName = $._decode_implicit<AccessPointName>(() => _decode_AccessPointName)(_el); },
        "endUserAddress": (_el: _Element): void => { endUserAddress = $._decode_implicit<EndUserAddress>(() => _decode_EndUserAddress)(_el); },
        "qualityOfService": (_el: _Element): void => { qualityOfService = $._decode_implicit<QualityOfService>(() => _decode_QualityOfService)(_el); },
        "locationInformationGPRS": (_el: _Element): void => { locationInformationGPRS = $._decode_implicit<LocationInformationGPRS>(() => _decode_LocationInformationGPRS)(_el); },
        "timeAndTimeZone": (_el: _Element): void => { timeAndTimeZone = $._decode_implicit<TimeAndTimezone>(() => _decode_TimeAndTimezone)(_el); },
        "pDPInitiationType": (_el: _Element): void => { pDPInitiationType = $._decode_implicit<PDPInitiationType>(() => _decode_PDPInitiationType)(_el); },
        "secondaryPDP-context": (_el: _Element): void => { secondaryPDP_context = $._decode_implicit<NULL>(() => $._decodeNull)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GPRSEventSpecificInformation_pDPContextEstablishmentSpecificInformation,
        _extension_additions_list_spec_for_GPRSEventSpecificInformation_pDPContextEstablishmentSpecificInformation,
        _root_component_type_list_2_spec_for_GPRSEventSpecificInformation_pDPContextEstablishmentSpecificInformation,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new GPRSEventSpecificInformation_pDPContextEstablishmentSpecificInformation(
        accessPointName,
        endUserAddress,
        qualityOfService,
        locationInformationGPRS,
        timeAndTimeZone,
        pDPInitiationType,
        secondaryPDP_context,
        _unrecognizedExtensionsList
    );
        };
    }
    return _cached_decoder_for_GPRSEventSpecificInformation_pDPContextEstablishmentSpecificInformation(el);
}

let _cached_encoder_for_GPRSEventSpecificInformation_pDPContextEstablishmentSpecificInformation: $.ASN1Encoder<GPRSEventSpecificInformation_pDPContextEstablishmentSpecificInformation> | null = null;
export function _encode_GPRSEventSpecificInformation_pDPContextEstablishmentSpecificInformation (value: GPRSEventSpecificInformation_pDPContextEstablishmentSpecificInformation, elGetter: $.ASN1Encoder<GPRSEventSpecificInformation_pDPContextEstablishmentSpecificInformation>): _Element {
    if (!_cached_encoder_for_GPRSEventSpecificInformation_pDPContextEstablishmentSpecificInformation) {
        _cached_encoder_for_GPRSEventSpecificInformation_pDPContextEstablishmentSpecificInformation = function (value: GPRSEventSpecificInformation_pDPContextEstablishmentSpecificInformation): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.accessPointName === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_AccessPointName, $.BER)(value.accessPointName, $.BER)),
            /* IF_ABSENT  */ ((value.endUserAddress === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_EndUserAddress, $.BER)(value.endUserAddress, $.BER)),
            /* IF_ABSENT  */ ((value.qualityOfService === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_QualityOfService, $.BER)(value.qualityOfService, $.BER)),
            /* IF_ABSENT  */ ((value.locationInformationGPRS === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_LocationInformationGPRS, $.BER)(value.locationInformationGPRS, $.BER)),
            /* IF_ABSENT  */ ((value.timeAndTimeZone === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_TimeAndTimezone, $.BER)(value.timeAndTimeZone, $.BER)),
            /* IF_ABSENT  */ ((value.pDPInitiationType === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_PDPInitiationType, $.BER)(value.pDPInitiationType, $.BER)),
            /* IF_ABSENT  */ ((value.secondaryPDP_context === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => $._encodeNull, $.BER)(value.secondaryPDP_context, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : [])
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
        };
    }
    return _cached_encoder_for_GPRSEventSpecificInformation_pDPContextEstablishmentSpecificInformation(value, elGetter);
}
