/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary Forwarding
 * @description
 * Capability bitmap for the Forwarding event (ECMA-269 C.15.13, ECMA-285
 * §9.10). Presence of this entry in `LogicalEvtsList` means the SF supports
 * that event. Each set bit is an optional parameter, enumerated value, initial
 * connection state, or miscellaneous characteristic from Annex C.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/}
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Forwarding  ::=  BIT STRING
 * {     forwardingTypeBusy             ( 0),
 *     forwardingTypeBusyInt             ( 1),
 *     forwardingTypeBusyExt             ( 2),
 *     forwardingTypeDND             ( 3),
 *     forwardingTypeDNDInt             ( 4),
 *     forwardingTypeDNDExt             ( 5),
 *     forwardingTypeNoAns             ( 6),
 *     forwardingTypeNoAnsInt             ( 7),
 *     forwardingTypeNoAnsExt             ( 8),
 *     forwardingTypeImmediate         ( 9),
 *     forwardingTypeImmInt             (10),
 *     forwardingTypeImmExt             (11),
 *     forwardTo                 (12),
 *     forwardDefaultTypeAndDN         (13),
 *     forwardDefaultType             (14),
 *     forwardDefaultDN             (15),
 *     ringCount                 (16),
 *     privateData                 (17),
 *     ringDuration                (18) }
 * ```
 */
export
type Forwarding = BIT_STRING;

/**
 * @summary Forwarding_forwardingTypeBusy
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.15.13).
 */
export
const Forwarding_forwardingTypeBusy: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary forwardingTypeBusy
 * @constant
 * @description
 * Alias of `Forwarding_forwardingTypeBusy`.
 */
export
const forwardingTypeBusy: number = Forwarding_forwardingTypeBusy; /* SHORT_NAMED_BIT */

/**
 * @summary Forwarding_forwardingTypeBusyInt
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.15.13).
 */
export
const Forwarding_forwardingTypeBusyInt: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary forwardingTypeBusyInt
 * @constant
 * @description
 * Alias of `Forwarding_forwardingTypeBusyInt`.
 */
export
const forwardingTypeBusyInt: number = Forwarding_forwardingTypeBusyInt; /* SHORT_NAMED_BIT */

/**
 * @summary Forwarding_forwardingTypeBusyExt
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.15.13).
 */
export
const Forwarding_forwardingTypeBusyExt: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary forwardingTypeBusyExt
 * @constant
 * @description
 * Alias of `Forwarding_forwardingTypeBusyExt`.
 */
export
const forwardingTypeBusyExt: number = Forwarding_forwardingTypeBusyExt; /* SHORT_NAMED_BIT */

/**
 * @summary Forwarding_forwardingTypeDND
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.15.13).
 */
export
const Forwarding_forwardingTypeDND: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary forwardingTypeDND
 * @constant
 * @description
 * Alias of `Forwarding_forwardingTypeDND`.
 */
export
const forwardingTypeDND: number = Forwarding_forwardingTypeDND; /* SHORT_NAMED_BIT */

/**
 * @summary Forwarding_forwardingTypeDNDInt
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.15.13).
 */
export
const Forwarding_forwardingTypeDNDInt: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary forwardingTypeDNDInt
 * @constant
 * @description
 * Alias of `Forwarding_forwardingTypeDNDInt`.
 */
export
const forwardingTypeDNDInt: number = Forwarding_forwardingTypeDNDInt; /* SHORT_NAMED_BIT */

/**
 * @summary Forwarding_forwardingTypeDNDExt
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.15.13).
 */
export
const Forwarding_forwardingTypeDNDExt: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary forwardingTypeDNDExt
 * @constant
 * @description
 * Alias of `Forwarding_forwardingTypeDNDExt`.
 */
export
const forwardingTypeDNDExt: number = Forwarding_forwardingTypeDNDExt; /* SHORT_NAMED_BIT */

/**
 * @summary Forwarding_forwardingTypeNoAns
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.15.13).
 */
export
const Forwarding_forwardingTypeNoAns: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary forwardingTypeNoAns
 * @constant
 * @description
 * Alias of `Forwarding_forwardingTypeNoAns`.
 */
export
const forwardingTypeNoAns: number = Forwarding_forwardingTypeNoAns; /* SHORT_NAMED_BIT */

/**
 * @summary Forwarding_forwardingTypeNoAnsInt
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.15.13).
 */
export
const Forwarding_forwardingTypeNoAnsInt: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary forwardingTypeNoAnsInt
 * @constant
 * @description
 * Alias of `Forwarding_forwardingTypeNoAnsInt`.
 */
export
const forwardingTypeNoAnsInt: number = Forwarding_forwardingTypeNoAnsInt; /* SHORT_NAMED_BIT */

/**
 * @summary Forwarding_forwardingTypeNoAnsExt
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.15.13).
 */
export
const Forwarding_forwardingTypeNoAnsExt: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary forwardingTypeNoAnsExt
 * @constant
 * @description
 * Alias of `Forwarding_forwardingTypeNoAnsExt`.
 */
export
const forwardingTypeNoAnsExt: number = Forwarding_forwardingTypeNoAnsExt; /* SHORT_NAMED_BIT */

/**
 * @summary Forwarding_forwardingTypeImmediate
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.15.13).
 */
export
const Forwarding_forwardingTypeImmediate: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary forwardingTypeImmediate
 * @constant
 * @description
 * Alias of `Forwarding_forwardingTypeImmediate`.
 */
export
const forwardingTypeImmediate: number = Forwarding_forwardingTypeImmediate; /* SHORT_NAMED_BIT */

/**
 * @summary Forwarding_forwardingTypeImmInt
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.15.13).
 */
export
const Forwarding_forwardingTypeImmInt: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary forwardingTypeImmInt
 * @constant
 * @description
 * Alias of `Forwarding_forwardingTypeImmInt`.
 */
export
const forwardingTypeImmInt: number = Forwarding_forwardingTypeImmInt; /* SHORT_NAMED_BIT */

/**
 * @summary Forwarding_forwardingTypeImmExt
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.15.13).
 */
export
const Forwarding_forwardingTypeImmExt: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary forwardingTypeImmExt
 * @constant
 * @description
 * Alias of `Forwarding_forwardingTypeImmExt`.
 */
export
const forwardingTypeImmExt: number = Forwarding_forwardingTypeImmExt; /* SHORT_NAMED_BIT */

/**
 * @summary Forwarding_forwardTo
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.15.13).
 */
export
const Forwarding_forwardTo: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary forwardTo
 * @constant
 * @description
 * Alias of `Forwarding_forwardTo`.
 */
export
const forwardTo: number = Forwarding_forwardTo; /* SHORT_NAMED_BIT */

/**
 * @summary Forwarding_forwardDefaultTypeAndDN
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.15.13).
 */
export
const Forwarding_forwardDefaultTypeAndDN: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary forwardDefaultTypeAndDN
 * @constant
 * @description
 * Alias of `Forwarding_forwardDefaultTypeAndDN`.
 */
export
const forwardDefaultTypeAndDN: number = Forwarding_forwardDefaultTypeAndDN; /* SHORT_NAMED_BIT */

/**
 * @summary Forwarding_forwardDefaultType
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.15.13).
 */
export
const Forwarding_forwardDefaultType: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary forwardDefaultType
 * @constant
 * @description
 * Alias of `Forwarding_forwardDefaultType`.
 */
export
const forwardDefaultType: number = Forwarding_forwardDefaultType; /* SHORT_NAMED_BIT */

/**
 * @summary Forwarding_forwardDefaultDN
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.15.13).
 */
export
const Forwarding_forwardDefaultDN: number = 15; /* LONG_NAMED_BIT */

/**
 * @summary forwardDefaultDN
 * @constant
 * @description
 * Alias of `Forwarding_forwardDefaultDN`.
 */
export
const forwardDefaultDN: number = Forwarding_forwardDefaultDN; /* SHORT_NAMED_BIT */

/**
 * @summary Forwarding_ringCount
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.15.13).
 */
export
const Forwarding_ringCount: number = 16; /* LONG_NAMED_BIT */

/**
 * @summary ringCount
 * @constant
 * @description
 * Alias of `Forwarding_ringCount`.
 */
export
const ringCount: number = Forwarding_ringCount; /* SHORT_NAMED_BIT */

/**
 * @summary Forwarding_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.15.13).
 */
export
const Forwarding_privateData: number = 17; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `Forwarding_privateData`.
 */
export
const privateData: number = Forwarding_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary Forwarding_ringDuration
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.15.13).
 */
export
const Forwarding_ringDuration: number = 18; /* LONG_NAMED_BIT */

/**
 * @summary ringDuration
 * @constant
 * @description
 * Alias of `Forwarding_ringDuration`.
 */
export
const ringDuration: number = Forwarding_ringDuration; /* SHORT_NAMED_BIT */

let _cached_decoder_for_Forwarding: $.ASN1Decoder<Forwarding> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Forwarding
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Forwarding (el: _Element): Forwarding {
    if (!_cached_decoder_for_Forwarding) { _cached_decoder_for_Forwarding = $._decodeBitString; }
    return _cached_decoder_for_Forwarding(el);
}

let _cached_encoder_for_Forwarding: $.ASN1Encoder<Forwarding> | null = null;

/**
 * @summary Encodes a(n) Forwarding into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Forwarding, encoded as an ASN.1 Element.
 */
export
function _encode_Forwarding (value: Forwarding, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Forwarding) { _cached_encoder_for_Forwarding = $._encodeBitString; }
    return _cached_encoder_for_Forwarding(value, elGetter);
}


/* eslint-enable */
