/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { OPTIONALLY_PROTECTED, _get_decoder_for_OPTIONALLY_PROTECTED, _get_encoder_for_OPTIONALLY_PROTECTED } from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.mjs";
// export { OPTIONALLY_PROTECTED, _get_decoder_for_OPTIONALLY_PROTECTED, _get_encoder_for_OPTIONALLY_PROTECTED } from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.mjs";
import { HandlingInformationRequestArg_Type, _decode_HandlingInformationRequestArg_Type, _encode_HandlingInformationRequestArg_Type } from "../IN-SCF-SCF-ops-args/HandlingInformationRequestArg-Type.ta.mjs";
// export { HandlingInformationRequestArg_Type, _decode_HandlingInformationRequestArg_Type, _encode_HandlingInformationRequestArg_Type } from "../IN-SCF-SCF-ops-args/HandlingInformationRequestArg-Type.ta.mjs";


/**
 * @summary HandlingInformationRequestArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HandlingInformationRequestArg  ::= 
 *   OPTIONALLY-PROTECTED
 *     {SEQUENCE {requestedType                [0]  RequestedType OPTIONAL,
 *                callingPartyNumber
 *                  [1]  CallingPartyNumber OPTIONAL,
 *                locationNumber               [2]  LocationNumber OPTIONAL,
 *                calledPartyNumber            [3]  CalledPartyNumber OPTIONAL,
 *                dialledDigits                [4]  GenericNumber OPTIONAL,
 *                redirectingPartyID
 *                  [5]  RedirectingPartyID OPTIONAL,
 *                redirectionInformation
 *                  [6]  RedirectionInformation OPTIONAL,
 *                originalCalledPartyID
 *                  [7]  OriginalCalledPartyID OPTIONAL,
 *                numberOfCallAttempts
 *                  [8]  INTEGER OPTIONAL,
 *                highLayerCompatibility
 *                  [9]  HighLayerCompatibility OPTIONAL,
 *                bearerCapability             [10]  BearerCapability OPTIONAL,
 *                invokedSupplementaryService  [11]  InvokableService OPTIONAL,
 *                activeSupplementaryServices  [12]  ActivableServices OPTIONAL,
 *                causeOfLastCallFailure       [13]  Cause OPTIONAL,
 *                userInteractionModes         [14]  UserInteractionModes OPTIONAL,
 *                callingPartysCategory
 *                  [15]  CallingPartysCategory OPTIONAL,
 *                callingPartyBusinessGroupID
 *                  [16]  CallingPartyBusinessGroupID OPTIONAL,
 *                securityParameters           [17]  SecurityParameters OPTIONAL,
 *                extensions                   [18]  Extensions OPTIONAL,
 *                ...}}
 * ```
 */
export
type HandlingInformationRequestArg = OPTIONALLY_PROTECTED<HandlingInformationRequestArg_Type>; // DefinedType

let _cached_decoder_for_HandlingInformationRequestArg: $.ASN1Decoder<HandlingInformationRequestArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) HandlingInformationRequestArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_HandlingInformationRequestArg (el: _Element): HandlingInformationRequestArg {
    if (!_cached_decoder_for_HandlingInformationRequestArg) { _cached_decoder_for_HandlingInformationRequestArg = _get_decoder_for_OPTIONALLY_PROTECTED<HandlingInformationRequestArg_Type>(_decode_HandlingInformationRequestArg_Type); }
    return _cached_decoder_for_HandlingInformationRequestArg(el);
}

let _cached_encoder_for_HandlingInformationRequestArg: $.ASN1Encoder<HandlingInformationRequestArg> | null = null;

/**
 * @summary Encodes a(n) HandlingInformationRequestArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HandlingInformationRequestArg, encoded as an ASN.1 Element.
 */
export
function _encode_HandlingInformationRequestArg (value: HandlingInformationRequestArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_HandlingInformationRequestArg) { _cached_encoder_for_HandlingInformationRequestArg = _get_encoder_for_OPTIONALLY_PROTECTED<HandlingInformationRequestArg_Type>(_encode_HandlingInformationRequestArg_Type); }
    return _cached_encoder_for_HandlingInformationRequestArg(value, elGetter);
}


/* eslint-enable */
