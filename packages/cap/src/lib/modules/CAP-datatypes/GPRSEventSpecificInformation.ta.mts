import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { GPRSEventSpecificInformation_attachChangeOfPositionSpecificInformation, _decode_GPRSEventSpecificInformation_attachChangeOfPositionSpecificInformation, _encode_GPRSEventSpecificInformation_attachChangeOfPositionSpecificInformation } from "./GPRSEventSpecificInformation-attachChangeOfPositionSpecificInformation.ta.mjs";
import { GPRSEventSpecificInformation_pdp_ContextchangeOfPositionSpecificInformation, _decode_GPRSEventSpecificInformation_pdp_ContextchangeOfPositionSpecificInformation, _encode_GPRSEventSpecificInformation_pdp_ContextchangeOfPositionSpecificInformation } from "./GPRSEventSpecificInformation-pdp-ContextchangeOfPositionSpecificInformation.ta.mjs";
import { GPRSEventSpecificInformation_detachSpecificInformation, _decode_GPRSEventSpecificInformation_detachSpecificInformation, _encode_GPRSEventSpecificInformation_detachSpecificInformation } from "./GPRSEventSpecificInformation-detachSpecificInformation.ta.mjs";
import { GPRSEventSpecificInformation_disconnectSpecificInformation, _decode_GPRSEventSpecificInformation_disconnectSpecificInformation, _encode_GPRSEventSpecificInformation_disconnectSpecificInformation } from "./GPRSEventSpecificInformation-disconnectSpecificInformation.ta.mjs";
import { GPRSEventSpecificInformation_pDPContextEstablishmentSpecificInformation, _decode_GPRSEventSpecificInformation_pDPContextEstablishmentSpecificInformation, _encode_GPRSEventSpecificInformation_pDPContextEstablishmentSpecificInformation } from "./GPRSEventSpecificInformation-pDPContextEstablishmentSpecificInformation.ta.mjs";
import { GPRSEventSpecificInformation_pDPContextEstablishmentAcknowledgementSpecificInformation, _decode_GPRSEventSpecificInformation_pDPContextEstablishmentAcknowledgementSpecificInformation, _encode_GPRSEventSpecificInformation_pDPContextEstablishmentAcknowledgementSpecificInformation } from "./GPRSEventSpecificInformation-pDPContextEstablishmentAcknowledgementSpecificInformation.ta.mjs";

/**
 * @summary GPRSEventSpecificInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GPRSEventSpecificInformation {PARAMETERS-BOUND : bound} ::= CHOICE {
 * 
 *  attachChangeOfPositionSpecificInformation
 *  [0] SEQUENCE {
 *  locationInformationGPRS		[0] LocationInformationGPRS		OPTIONAL,
 *  ...
 *  },
 * 
 *  pdp-ContextchangeOfPositionSpecificInformation
 *  [1] SEQUENCE {
 *  accessPointName			[0]	AccessPointName {bound}		OPTIONAL,
 *  chargingID			[1]	GPRSChargingID			OPTIONAL,
 *  locationInformationGPRS		[2] LocationInformationGPRS		OPTIONAL,
 *  endUserAddress			[3]	EndUserAddress {bound}		OPTIONAL,
 *  qualityOfService		[4]	QualityOfService			OPTIONAL,
 *  timeAndTimeZone			[5]	TimeAndTimezone {bound}		OPTIONAL,
 *  ...,
 *  gGSNAddress			[6]	GSN-Address				OPTIONAL
 *  },
 * 
 *  detachSpecificInformation		[2] SEQUENCE {
 *  initiatingEntity		[0] InitiatingEntity			OPTIONAL,
 *  ...,
 *  routeingAreaUpdate		[1]	NULL				OPTIONAL
 *  },
 * 
 *  disconnectSpecificInformation	[3] SEQUENCE {
 *  initiatingEntity		[0] InitiatingEntity			OPTIONAL,
 *  ...,
 *  routeingAreaUpdate		[1]	NULL				OPTIONAL
 *  },
 * 
 *  pDPContextEstablishmentSpecificInformation
 *  [4]	SEQUENCE {
 *  accessPointName			[0]	AccessPointName {bound}		OPTIONAL,
 *  endUserAddress			[1]	EndUserAddress {bound}		OPTIONAL,
 *  qualityOfService		[2]	QualityOfService			OPTIONAL,
 *  locationInformationGPRS		[3] LocationInformationGPRS		OPTIONAL,
 *  timeAndTimeZone			[4]	TimeAndTimezone {bound}		OPTIONAL,
 *  pDPInitiationType		[5] PDPInitiationType			OPTIONAL,
 *  ...,
 *  secondaryPDP-context		[6] NULL				OPTIONAL
 *  },
 * 
 *  pDPContextEstablishmentAcknowledgementSpecificInformation
 *  [5]	SEQUENCE {
 *  accessPointName			[0]	AccessPointName {bound}		OPTIONAL,
 *  chargingID			[1] GPRSChargingID			OPTIONAL,
 *  endUserAddress			[2]	EndUserAddress {bound}		OPTIONAL,
 *  qualityOfService		[3]	QualityOfService			OPTIONAL,
 *  locationInformationGPRS		[4] LocationInformationGPRS		OPTIONAL,
 *  timeAndTimeZone			[5]	TimeAndTimezone {bound}		OPTIONAL,
 *  ...,
 *  gGSNAddress			[6]	GSN-Address				OPTIONAL
 *  }
 *  }
 * ```
 *
 */
export type GPRSEventSpecificInformation =
{ attachChangeOfPositionSpecificInformation: GPRSEventSpecificInformation_attachChangeOfPositionSpecificInformation }
    | { pdp_ContextchangeOfPositionSpecificInformation: GPRSEventSpecificInformation_pdp_ContextchangeOfPositionSpecificInformation }
    | { detachSpecificInformation: GPRSEventSpecificInformation_detachSpecificInformation }
    | { disconnectSpecificInformation: GPRSEventSpecificInformation_disconnectSpecificInformation }
    | { pDPContextEstablishmentSpecificInformation: GPRSEventSpecificInformation_pDPContextEstablishmentSpecificInformation }
    | { pDPContextEstablishmentAcknowledgementSpecificInformation: GPRSEventSpecificInformation_pDPContextEstablishmentAcknowledgementSpecificInformation };

let _cached_decoder_for_GPRSEventSpecificInformation: $.ASN1Decoder<GPRSEventSpecificInformation> | null = null;
export function _decode_GPRSEventSpecificInformation (el: _Element): GPRSEventSpecificInformation {
    if (!_cached_decoder_for_GPRSEventSpecificInformation) {
        _cached_decoder_for_GPRSEventSpecificInformation = $._decode_inextensible_choice<GPRSEventSpecificInformation>({
    "CONTEXT 0": [ "attachChangeOfPositionSpecificInformation", $._decode_implicit<GPRSEventSpecificInformation_attachChangeOfPositionSpecificInformation>(() => _decode_GPRSEventSpecificInformation_attachChangeOfPositionSpecificInformation) ],
    "CONTEXT 1": [ "pdp_ContextchangeOfPositionSpecificInformation", $._decode_implicit<GPRSEventSpecificInformation_pdp_ContextchangeOfPositionSpecificInformation>(() => _decode_GPRSEventSpecificInformation_pdp_ContextchangeOfPositionSpecificInformation) ],
    "CONTEXT 2": [ "detachSpecificInformation", $._decode_implicit<GPRSEventSpecificInformation_detachSpecificInformation>(() => _decode_GPRSEventSpecificInformation_detachSpecificInformation) ],
    "CONTEXT 3": [ "disconnectSpecificInformation", $._decode_implicit<GPRSEventSpecificInformation_disconnectSpecificInformation>(() => _decode_GPRSEventSpecificInformation_disconnectSpecificInformation) ],
    "CONTEXT 4": [ "pDPContextEstablishmentSpecificInformation", $._decode_implicit<GPRSEventSpecificInformation_pDPContextEstablishmentSpecificInformation>(() => _decode_GPRSEventSpecificInformation_pDPContextEstablishmentSpecificInformation) ],
    "CONTEXT 5": [ "pDPContextEstablishmentAcknowledgementSpecificInformation", $._decode_implicit<GPRSEventSpecificInformation_pDPContextEstablishmentAcknowledgementSpecificInformation>(() => _decode_GPRSEventSpecificInformation_pDPContextEstablishmentAcknowledgementSpecificInformation) ]
        });
    }
    return _cached_decoder_for_GPRSEventSpecificInformation(el);
}

let _cached_encoder_for_GPRSEventSpecificInformation: $.ASN1Encoder<GPRSEventSpecificInformation> | null = null;
export function _encode_GPRSEventSpecificInformation (value: GPRSEventSpecificInformation, elGetter: $.ASN1Encoder<GPRSEventSpecificInformation>): _Element {
    if (!_cached_encoder_for_GPRSEventSpecificInformation) {
        _cached_encoder_for_GPRSEventSpecificInformation = $._encode_choice<GPRSEventSpecificInformation>({
    "attachChangeOfPositionSpecificInformation": $._encode_implicit(_TagClass.context, 0, () => _encode_GPRSEventSpecificInformation_attachChangeOfPositionSpecificInformation, $.BER),
    "pdp_ContextchangeOfPositionSpecificInformation": $._encode_implicit(_TagClass.context, 1, () => _encode_GPRSEventSpecificInformation_pdp_ContextchangeOfPositionSpecificInformation, $.BER),
    "detachSpecificInformation": $._encode_implicit(_TagClass.context, 2, () => _encode_GPRSEventSpecificInformation_detachSpecificInformation, $.BER),
    "disconnectSpecificInformation": $._encode_implicit(_TagClass.context, 3, () => _encode_GPRSEventSpecificInformation_disconnectSpecificInformation, $.BER),
    "pDPContextEstablishmentSpecificInformation": $._encode_implicit(_TagClass.context, 4, () => _encode_GPRSEventSpecificInformation_pDPContextEstablishmentSpecificInformation, $.BER),
    "pDPContextEstablishmentAcknowledgementSpecificInformation": $._encode_implicit(_TagClass.context, 5, () => _encode_GPRSEventSpecificInformation_pDPContextEstablishmentAcknowledgementSpecificInformation, $.BER)
        }, $.BER);
    }
    return _cached_encoder_for_GPRSEventSpecificInformation(value, elGetter);
}
