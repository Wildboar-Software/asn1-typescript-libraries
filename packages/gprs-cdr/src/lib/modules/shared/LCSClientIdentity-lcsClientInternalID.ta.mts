/* eslint-disable */
import {
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_LCSClientIdentity_lcsClientInternalID {
    broadcastService = 0,
    o_andM_HPLMN = 1,
    o_andM_VPLMN = 2,
    anonymousLocation = 3,
    targetMSsubscribedService = 4,
}

/**
 * @summary LCSClientIdentity_lcsClientInternalID
 * @description
 *
 * Client internal ID inside `LCSClientIdentity`. TS 32.271 does
 * not define these values. The GMLC CDRs carry the whole identity
 * as further identification of the LCS client, if available
 * (category C). Online charging carries it as LCS Client ID
 * (category Oc).
 *
 * 3GPP TS 32.271 V12.1.0 tables 6.1.3.1.1, 6.1.3.2.1.1,
 * 6.1.3.2.2.1, 6.1.3.2.3.1, 6.1.3.3.1, and 6.3.1.2.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LCSClientIdentity-lcsClientInternalID ::= ENUMERATED {
 *    broadcastService             ( 0 ),
 *    o-andM-HPLMN                 ( 1 ),
 *    o-andM-VPLMN                 ( 2 ),
 *    anonymousLocation            ( 3 ),
 *    targetMSsubscribedService    ( 4 ),
 *    ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type LCSClientIdentity_lcsClientInternalID = _enum_for_LCSClientIdentity_lcsClientInternalID | ENUMERATED;

/**
 * @summary LCSClientIdentity_lcsClientInternalID_broadcastService
 * @constant
 * @type {number}
 */
export
const LCSClientIdentity_lcsClientInternalID_broadcastService: LCSClientIdentity_lcsClientInternalID = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary broadcastService
 * @constant
 * @type {number}
 */
export
const broadcastService: LCSClientIdentity_lcsClientInternalID = LCSClientIdentity_lcsClientInternalID_broadcastService; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LCSClientIdentity_lcsClientInternalID_o_andM_HPLMN
 * @constant
 * @type {number}
 */
export
const LCSClientIdentity_lcsClientInternalID_o_andM_HPLMN: LCSClientIdentity_lcsClientInternalID = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary o_andM_HPLMN
 * @constant
 * @type {number}
 */
export
const o_andM_HPLMN: LCSClientIdentity_lcsClientInternalID = LCSClientIdentity_lcsClientInternalID_o_andM_HPLMN; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LCSClientIdentity_lcsClientInternalID_o_andM_VPLMN
 * @constant
 * @type {number}
 */
export
const LCSClientIdentity_lcsClientInternalID_o_andM_VPLMN: LCSClientIdentity_lcsClientInternalID = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary o_andM_VPLMN
 * @constant
 * @type {number}
 */
export
const o_andM_VPLMN: LCSClientIdentity_lcsClientInternalID = LCSClientIdentity_lcsClientInternalID_o_andM_VPLMN; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LCSClientIdentity_lcsClientInternalID_anonymousLocation
 * @constant
 * @type {number}
 */
export
const LCSClientIdentity_lcsClientInternalID_anonymousLocation: LCSClientIdentity_lcsClientInternalID = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary anonymousLocation
 * @constant
 * @type {number}
 */
export
const anonymousLocation: LCSClientIdentity_lcsClientInternalID = LCSClientIdentity_lcsClientInternalID_anonymousLocation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LCSClientIdentity_lcsClientInternalID_targetMSsubscribedService
 * @constant
 * @type {number}
 */
export
const LCSClientIdentity_lcsClientInternalID_targetMSsubscribedService: LCSClientIdentity_lcsClientInternalID = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary targetMSsubscribedService
 * @constant
 * @type {number}
 */
export
const targetMSsubscribedService: LCSClientIdentity_lcsClientInternalID = LCSClientIdentity_lcsClientInternalID_targetMSsubscribedService; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_LCSClientIdentity_lcsClientInternalID: $.ASN1Decoder<LCSClientIdentity_lcsClientInternalID> = $._decodeEnumerated;

export
const _encode_LCSClientIdentity_lcsClientInternalID: $.ASN1Encoder<LCSClientIdentity_lcsClientInternalID> = $._encodeEnumerated;

/* eslint-enable */
