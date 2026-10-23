/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { OPTIONALLY_PROTECTED, _get_decoder_for_OPTIONALLY_PROTECTED, _get_encoder_for_OPTIONALLY_PROTECTED } from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.mjs";
// export { OPTIONALLY_PROTECTED, _get_decoder_for_OPTIONALLY_PROTECTED, _get_encoder_for_OPTIONALLY_PROTECTED } from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.mjs";
import { ReportChargingInformationArg_Type, _decode_ReportChargingInformationArg_Type, _encode_ReportChargingInformationArg_Type } from "../IN-CS3-SCF-SCF-ops-args/ReportChargingInformationArg-Type.ta.mjs";
// export { ReportChargingInformationArg_Type, _decode_ReportChargingInformationArg_Type, _encode_ReportChargingInformationArg_Type } from "../IN-CS3-SCF-SCF-ops-args/ReportChargingInformationArg-Type.ta.mjs";


/**
 * @summary ReportChargingInformationArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReportChargingInformationArg  ::= 
 *   OPTIONALLY-PROTECTED
 *     {SEQUENCE {callRecord                  [0]  CallRecord OPTIONAL,
 *                remainingUserCredit         [1]  UserCredit OPTIONAL,
 *                uniqueCallID                [2]  CallIdentifier OPTIONAL,
 *                accountNumber               [3]  AccountNumber OPTIONAL,
 *                securityParameters          [4]  SecurityParameters OPTIONAL,
 *                countersValues              [5]  Meters OPTIONAL,
 *                resetOfTransmittedCounters  [6]  BOOLEAN DEFAULT FALSE,
 *                container                   [13]  FreeContainer OPTIONAL,
 *                correlationId               [14]  CorrelationID OPTIONAL,
 *                acksequence                 [15]  INTEGER OPTIONAL,
 *                ...,
 *                ...,
 *                extensions                  [31]  Extensions OPTIONAL
 *     }}
 * ```
 */
export
type ReportChargingInformationArg = OPTIONALLY_PROTECTED<ReportChargingInformationArg_Type>; // DefinedType

let _cached_decoder_for_ReportChargingInformationArg: $.ASN1Decoder<ReportChargingInformationArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReportChargingInformationArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReportChargingInformationArg (el: _Element): ReportChargingInformationArg {
    if (!_cached_decoder_for_ReportChargingInformationArg) { _cached_decoder_for_ReportChargingInformationArg = _get_decoder_for_OPTIONALLY_PROTECTED<ReportChargingInformationArg_Type>(_decode_ReportChargingInformationArg_Type); }
    return _cached_decoder_for_ReportChargingInformationArg(el);
}

let _cached_encoder_for_ReportChargingInformationArg: $.ASN1Encoder<ReportChargingInformationArg> | null = null;

/**
 * @summary Encodes a(n) ReportChargingInformationArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReportChargingInformationArg, encoded as an ASN.1 Element.
 */
export
function _encode_ReportChargingInformationArg (value: ReportChargingInformationArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ReportChargingInformationArg) { _cached_encoder_for_ReportChargingInformationArg = _get_encoder_for_OPTIONALLY_PROTECTED<ReportChargingInformationArg_Type>(_encode_ReportChargingInformationArg_Type); }
    return _cached_encoder_for_ReportChargingInformationArg(value, elGetter);
}


/* eslint-enable */
