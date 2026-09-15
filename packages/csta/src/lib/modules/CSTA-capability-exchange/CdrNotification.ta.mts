/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary CdrNotification
 * @description
 * Capability bitmap for the Call Detail Records Notification service (ECMA-269
 * C.21.1, ECMA-285 §9.10). Presence of this entry in `CDRServList` means the SF
 * supports that service. Each set bit is an optional parameter, enumerated
 * value, initial connection state, or miscellaneous characteristic from Annex
 * C.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/}
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CdrNotification  ::=  BIT STRING
 * {     cdrReasonTimeout             ( 0),     -- optional parameters
 *     cdrReasonThresholdReached         ( 1),     -- optional parameters
 *     cdrReasonOther                 ( 2),     -- optional parameters
 *     privateData                 ( 3),     -- optional parameters
 *     privateDataInAck             ( 4) }
 * ```
 */
export
type CdrNotification = BIT_STRING;

/**
 * @summary CdrNotification_cdrReasonTimeout
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.21.1).
 */
export
const CdrNotification_cdrReasonTimeout: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary cdrReasonTimeout
 * @constant
 * @description
 * Alias of `CdrNotification_cdrReasonTimeout`.
 */
export
const cdrReasonTimeout: number = CdrNotification_cdrReasonTimeout; /* SHORT_NAMED_BIT */

/**
 * @summary CdrNotification_cdrReasonThresholdReached
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.21.1).
 */
export
const CdrNotification_cdrReasonThresholdReached: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary cdrReasonThresholdReached
 * @constant
 * @description
 * Alias of `CdrNotification_cdrReasonThresholdReached`.
 */
export
const cdrReasonThresholdReached: number = CdrNotification_cdrReasonThresholdReached; /* SHORT_NAMED_BIT */

/**
 * @summary CdrNotification_cdrReasonOther
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.21.1).
 */
export
const CdrNotification_cdrReasonOther: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary cdrReasonOther
 * @constant
 * @description
 * Alias of `CdrNotification_cdrReasonOther`.
 */
export
const cdrReasonOther: number = CdrNotification_cdrReasonOther; /* SHORT_NAMED_BIT */

/**
 * @summary CdrNotification_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.21.1).
 */
export
const CdrNotification_privateData: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `CdrNotification_privateData`.
 */
export
const privateData: number = CdrNotification_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary CdrNotification_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 C.21.1).
 */
export
const CdrNotification_privateDataInAck: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `CdrNotification_privateDataInAck`.
 */
export
const privateDataInAck: number = CdrNotification_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_CdrNotification: $.ASN1Decoder<CdrNotification> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CdrNotification
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CdrNotification (el: _Element): CdrNotification {
    if (!_cached_decoder_for_CdrNotification) { _cached_decoder_for_CdrNotification = $._decodeBitString; }
    return _cached_decoder_for_CdrNotification(el);
}

let _cached_encoder_for_CdrNotification: $.ASN1Encoder<CdrNotification> | null = null;

/**
 * @summary Encodes a(n) CdrNotification into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CdrNotification, encoded as an ASN.1 Element.
 */
export
function _encode_CdrNotification (value: CdrNotification, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CdrNotification) { _cached_encoder_for_CdrNotification = $._encodeBitString; }
    return _cached_encoder_for_CdrNotification(value, elGetter);
}


/* eslint-enable */
