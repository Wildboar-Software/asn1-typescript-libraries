/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary SetForwarding
 * @description
 * Capability bitmap for the Set Forwarding service (ECMA-269 C.14.20, ECMA-285
 * §9.10). Presence of this entry in `LogicalServList` means the SF supports
 * that service. Each set bit is an optional parameter, enumerated value,
 * initial connection state, or miscellaneous characteristic from Annex C.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/}
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SetForwarding  ::=  BIT STRING
 * {     forwardingTypeBusy             ( 0),     -- optional parameters
 *     forwardingTypeBusyInt             ( 1),     -- optional parameters
 *     forwardingTypeBusyExt             ( 2),     -- optional parameters
 *     forwardingTypeDND             ( 3),     -- optional parameters
 *     forwardingTypeDNDInt             ( 4),     -- optional parameters
 *     forwardingTypeDNDExt             ( 5),     -- optional parameters
 *     forwardingTypeNoAns             ( 6),     -- optional parameters
 *     forwardingTypeNoAnsInt             ( 7),     -- optional parameters
 *     forwardingTypeNoAnsExt             ( 8),     -- optional parameters
 *     forwardingTypeImmediate         ( 9),     -- optional parameters
 *     forwardingTypeImmInt             (10),     -- optional parameters
 *     forwardingTypeImmExt             (11),     -- optional parameters
 *     forwardDN                 (12),     -- optional parameters
 *     ringCount                 (13),     -- optional parameters
 *     privateData                 (14),     -- optional parameters
 *     privateDataInAck             (15),     -- optional parameters
 *     ackModelMultiStep             (16),     -- misc characteristics
 *     ringDuration                (17) }
 * ```
 */
export
type SetForwarding = BIT_STRING;

/**
 * @summary SetForwarding_forwardingTypeBusy
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.14.20).
 */
export
const SetForwarding_forwardingTypeBusy: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary forwardingTypeBusy
 * @constant
 * @description
 * Alias of `SetForwarding_forwardingTypeBusy`.
 */
export
const forwardingTypeBusy: number = SetForwarding_forwardingTypeBusy; /* SHORT_NAMED_BIT */

/**
 * @summary SetForwarding_forwardingTypeBusyInt
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.14.20).
 */
export
const SetForwarding_forwardingTypeBusyInt: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary forwardingTypeBusyInt
 * @constant
 * @description
 * Alias of `SetForwarding_forwardingTypeBusyInt`.
 */
export
const forwardingTypeBusyInt: number = SetForwarding_forwardingTypeBusyInt; /* SHORT_NAMED_BIT */

/**
 * @summary SetForwarding_forwardingTypeBusyExt
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.14.20).
 */
export
const SetForwarding_forwardingTypeBusyExt: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary forwardingTypeBusyExt
 * @constant
 * @description
 * Alias of `SetForwarding_forwardingTypeBusyExt`.
 */
export
const forwardingTypeBusyExt: number = SetForwarding_forwardingTypeBusyExt; /* SHORT_NAMED_BIT */

/**
 * @summary SetForwarding_forwardingTypeDND
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.14.20).
 */
export
const SetForwarding_forwardingTypeDND: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary forwardingTypeDND
 * @constant
 * @description
 * Alias of `SetForwarding_forwardingTypeDND`.
 */
export
const forwardingTypeDND: number = SetForwarding_forwardingTypeDND; /* SHORT_NAMED_BIT */

/**
 * @summary SetForwarding_forwardingTypeDNDInt
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.14.20).
 */
export
const SetForwarding_forwardingTypeDNDInt: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary forwardingTypeDNDInt
 * @constant
 * @description
 * Alias of `SetForwarding_forwardingTypeDNDInt`.
 */
export
const forwardingTypeDNDInt: number = SetForwarding_forwardingTypeDNDInt; /* SHORT_NAMED_BIT */

/**
 * @summary SetForwarding_forwardingTypeDNDExt
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.14.20).
 */
export
const SetForwarding_forwardingTypeDNDExt: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary forwardingTypeDNDExt
 * @constant
 * @description
 * Alias of `SetForwarding_forwardingTypeDNDExt`.
 */
export
const forwardingTypeDNDExt: number = SetForwarding_forwardingTypeDNDExt; /* SHORT_NAMED_BIT */

/**
 * @summary SetForwarding_forwardingTypeNoAns
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.14.20).
 */
export
const SetForwarding_forwardingTypeNoAns: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary forwardingTypeNoAns
 * @constant
 * @description
 * Alias of `SetForwarding_forwardingTypeNoAns`.
 */
export
const forwardingTypeNoAns: number = SetForwarding_forwardingTypeNoAns; /* SHORT_NAMED_BIT */

/**
 * @summary SetForwarding_forwardingTypeNoAnsInt
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.14.20).
 */
export
const SetForwarding_forwardingTypeNoAnsInt: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary forwardingTypeNoAnsInt
 * @constant
 * @description
 * Alias of `SetForwarding_forwardingTypeNoAnsInt`.
 */
export
const forwardingTypeNoAnsInt: number = SetForwarding_forwardingTypeNoAnsInt; /* SHORT_NAMED_BIT */

/**
 * @summary SetForwarding_forwardingTypeNoAnsExt
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.14.20).
 */
export
const SetForwarding_forwardingTypeNoAnsExt: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary forwardingTypeNoAnsExt
 * @constant
 * @description
 * Alias of `SetForwarding_forwardingTypeNoAnsExt`.
 */
export
const forwardingTypeNoAnsExt: number = SetForwarding_forwardingTypeNoAnsExt; /* SHORT_NAMED_BIT */

/**
 * @summary SetForwarding_forwardingTypeImmediate
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.14.20).
 */
export
const SetForwarding_forwardingTypeImmediate: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary forwardingTypeImmediate
 * @constant
 * @description
 * Alias of `SetForwarding_forwardingTypeImmediate`.
 */
export
const forwardingTypeImmediate: number = SetForwarding_forwardingTypeImmediate; /* SHORT_NAMED_BIT */

/**
 * @summary SetForwarding_forwardingTypeImmInt
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.14.20).
 */
export
const SetForwarding_forwardingTypeImmInt: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary forwardingTypeImmInt
 * @constant
 * @description
 * Alias of `SetForwarding_forwardingTypeImmInt`.
 */
export
const forwardingTypeImmInt: number = SetForwarding_forwardingTypeImmInt; /* SHORT_NAMED_BIT */

/**
 * @summary SetForwarding_forwardingTypeImmExt
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.14.20).
 */
export
const SetForwarding_forwardingTypeImmExt: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary forwardingTypeImmExt
 * @constant
 * @description
 * Alias of `SetForwarding_forwardingTypeImmExt`.
 */
export
const forwardingTypeImmExt: number = SetForwarding_forwardingTypeImmExt; /* SHORT_NAMED_BIT */

/**
 * @summary SetForwarding_forwardDN
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.14.20).
 */
export
const SetForwarding_forwardDN: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary forwardDN
 * @constant
 * @description
 * Alias of `SetForwarding_forwardDN`.
 */
export
const forwardDN: number = SetForwarding_forwardDN; /* SHORT_NAMED_BIT */

/**
 * @summary SetForwarding_ringCount
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.14.20).
 */
export
const SetForwarding_ringCount: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary ringCount
 * @constant
 * @description
 * Alias of `SetForwarding_ringCount`.
 */
export
const ringCount: number = SetForwarding_ringCount; /* SHORT_NAMED_BIT */

/**
 * @summary SetForwarding_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.14.20).
 */
export
const SetForwarding_privateData: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `SetForwarding_privateData`.
 */
export
const privateData: number = SetForwarding_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary SetForwarding_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 C.14.20).
 */
export
const SetForwarding_privateDataInAck: number = 15; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `SetForwarding_privateDataInAck`.
 */
export
const privateDataInAck: number = SetForwarding_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary SetForwarding_ackModelMultiStep
 * @constant
 * @description
 * Bit set means the SF supports the multi-step positive acknowledgement model
 * (ECMA-269 C.14.20).
 */
export
const SetForwarding_ackModelMultiStep: number = 16; /* LONG_NAMED_BIT */

/**
 * @summary ackModelMultiStep
 * @constant
 * @description
 * Alias of `SetForwarding_ackModelMultiStep`.
 */
export
const ackModelMultiStep: number = SetForwarding_ackModelMultiStep; /* SHORT_NAMED_BIT */

/**
 * @summary SetForwarding_ringDuration
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.14.20).
 */
export
const SetForwarding_ringDuration: number = 17; /* LONG_NAMED_BIT */

/**
 * @summary ringDuration
 * @constant
 * @description
 * Alias of `SetForwarding_ringDuration`.
 */
export
const ringDuration: number = SetForwarding_ringDuration; /* SHORT_NAMED_BIT */

let _cached_decoder_for_SetForwarding: $.ASN1Decoder<SetForwarding> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SetForwarding
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SetForwarding (el: _Element): SetForwarding {
    if (!_cached_decoder_for_SetForwarding) { _cached_decoder_for_SetForwarding = $._decodeBitString; }
    return _cached_decoder_for_SetForwarding(el);
}

let _cached_encoder_for_SetForwarding: $.ASN1Encoder<SetForwarding> | null = null;

/**
 * @summary Encodes a(n) SetForwarding into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SetForwarding, encoded as an ASN.1 Element.
 */
export
function _encode_SetForwarding (value: SetForwarding, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SetForwarding) { _cached_encoder_for_SetForwarding = $._encodeBitString; }
    return _cached_encoder_for_SetForwarding(value, elGetter);
}


/* eslint-enable */
