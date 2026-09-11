/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary SwDomainFeatures
 * @description
 * Bitmap of switching-sub-domain features from Get Switching Function
 * Capabilities (ECMA-269 §13.1.4.2.1 Table 13-9, ECMA-285 §9.10). A set bit
 * means the feature is supported.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/}
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SwDomainFeatures  ::=  BIT STRING
 * {     isForwardingBefore             ( 0),
 *     isForwardingAfter             ( 1),
 *     swFunctionDefaultSettings         ( 2),
 *     userSpecific                 ( 3),
 *     userSpecificDefaultFowardingType     ( 4),
 *     userSpecificDefaultForwardDestination     ( 5),
 *     negativeAcknowledgment             ( 6),
 *     supportFailedWithAssConn         ( 7),
 *     supportFailedWithoutAssConn         ( 8),
 *     supportFailedWithAssConnNotReportet     ( 9),
 *     recall                     (10),
 *     callBack                 (11),
 *     extCallsIncoming             (12),
 *     extCallsOutgoing             (13),
 *     prompting                 (14) }
 * ```
 */
export
type SwDomainFeatures = BIT_STRING;

/**
 * @summary SwDomainFeatures_isForwardingBefore
 * @constant
 * @description
 * Bit set means the SF supports Immediate Forwarding triggered before the call
 * is logically delivered (ECMA-269 §13.1.4.2.1 Table 13-9).
 */
export
const SwDomainFeatures_isForwardingBefore: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary isForwardingBefore
 * @constant
 * @description
 * Alias of `SwDomainFeatures_isForwardingBefore`.
 */
export
const isForwardingBefore: number = SwDomainFeatures_isForwardingBefore; /* SHORT_NAMED_BIT */

/**
 * @summary SwDomainFeatures_isForwardingAfter
 * @constant
 * @description
 * Bit set means the SF supports Immediate Forwarding triggered after the call
 * is logically delivered (ECMA-269 §13.1.4.2.1 Table 13-9).
 */
export
const SwDomainFeatures_isForwardingAfter: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary isForwardingAfter
 * @constant
 * @description
 * Alias of `SwDomainFeatures_isForwardingAfter`.
 */
export
const isForwardingAfter: number = SwDomainFeatures_isForwardingAfter; /* SHORT_NAMED_BIT */

/**
 * @summary SwDomainFeatures_swFunctionDefaultSettings
 * @constant
 * @description
 * Bit set means the SF supports SF default forwarding setting (one
 * type/destination pair) (ECMA-269 §13.1.4.2.1 Table 13-9).
 */
export
const SwDomainFeatures_swFunctionDefaultSettings: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary swFunctionDefaultSettings
 * @constant
 * @description
 * Alias of `SwDomainFeatures_swFunctionDefaultSettings`.
 */
export
const swFunctionDefaultSettings: number = SwDomainFeatures_swFunctionDefaultSettings; /* SHORT_NAMED_BIT */

/**
 * @summary SwDomainFeatures_userSpecific
 * @constant
 * @description
 * Bit set means the SF supports user-specified forwarding types and
 * destinations (ECMA-269 §13.1.4.2.1 Table 13-9).
 */
export
const SwDomainFeatures_userSpecific: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary userSpecific
 * @constant
 * @description
 * Alias of `SwDomainFeatures_userSpecific`.
 */
export
const userSpecific: number = SwDomainFeatures_userSpecific; /* SHORT_NAMED_BIT */

/**
 * @summary SwDomainFeatures_userSpecificDefaultFowardingType
 * @constant
 * @description
 * Bit set means the SF supports default forwarding type when omitted in Set
 * Forward (ECMA-269 §13.1.4.2.1 Table 13-9).
 */
export
const SwDomainFeatures_userSpecificDefaultFowardingType: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary userSpecificDefaultFowardingType
 * @constant
 * @description
 * Alias of `SwDomainFeatures_userSpecificDefaultFowardingType`.
 */
export
const userSpecificDefaultFowardingType: number = SwDomainFeatures_userSpecificDefaultFowardingType; /* SHORT_NAMED_BIT */

/**
 * @summary SwDomainFeatures_userSpecificDefaultForwardDestination
 * @constant
 * @description
 * Bit set means the SF supports default forward destination when omitted in Set
 * Forward (ECMA-269 §13.1.4.2.1 Table 13-9).
 */
export
const SwDomainFeatures_userSpecificDefaultForwardDestination: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary userSpecificDefaultForwardDestination
 * @constant
 * @description
 * Alias of `SwDomainFeatures_userSpecificDefaultForwardDestination`.
 */
export
const userSpecificDefaultForwardDestination: number = SwDomainFeatures_userSpecificDefaultForwardDestination; /* SHORT_NAMED_BIT */

/**
 * @summary SwDomainFeatures_negativeAcknowledgment
 * @constant
 * @description
 * Bit set means the SF supports connection failure reported via negative
 * acknowledgement (ECMA-269 §13.1.4.2.1 Table 13-9).
 */
export
const SwDomainFeatures_negativeAcknowledgment: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary negativeAcknowledgment
 * @constant
 * @description
 * Alias of `SwDomainFeatures_negativeAcknowledgment`.
 */
export
const negativeAcknowledgment: number = SwDomainFeatures_negativeAcknowledgment; /* SHORT_NAMED_BIT */

/**
 * @summary SwDomainFeatures_supportFailedWithAssConn
 * @constant
 * @description
 * Bit set means the SF supports Failed event with an associated failed
 * connection (ECMA-269 §13.1.4.2.1 Table 13-9).
 */
export
const SwDomainFeatures_supportFailedWithAssConn: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary supportFailedWithAssConn
 * @constant
 * @description
 * Alias of `SwDomainFeatures_supportFailedWithAssConn`.
 */
export
const supportFailedWithAssConn: number = SwDomainFeatures_supportFailedWithAssConn; /* SHORT_NAMED_BIT */

/**
 * @summary SwDomainFeatures_supportFailedWithoutAssConn
 * @constant
 * @description
 * Bit set means the SF supports Failed event without an associated failed
 * connection (ECMA-269 §13.1.4.2.1 Table 13-9).
 */
export
const SwDomainFeatures_supportFailedWithoutAssConn: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary supportFailedWithoutAssConn
 * @constant
 * @description
 * Alias of `SwDomainFeatures_supportFailedWithoutAssConn`.
 */
export
const supportFailedWithoutAssConn: number = SwDomainFeatures_supportFailedWithoutAssConn; /* SHORT_NAMED_BIT */

/**
 * @summary SwDomainFeatures_supportFailedWithAssConnNotReportet
 * @constant
 * @description
 * Bit set means the SF supports Failed event with associated failed connection,
 * not reported via monitors on the failing device (ECMA-269 §13.1.4.2.1 Table
 * 13-9).
 */
export
const SwDomainFeatures_supportFailedWithAssConnNotReportet: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary supportFailedWithAssConnNotReportet
 * @constant
 * @description
 * Alias of `SwDomainFeatures_supportFailedWithAssConnNotReportet`.
 */
export
const supportFailedWithAssConnNotReportet: number = SwDomainFeatures_supportFailedWithAssConnNotReportet; /* SHORT_NAMED_BIT */

/**
 * @summary SwDomainFeatures_recall
 * @constant
 * @description
 * Bit set means the SF supports Recall feature (ECMA-269 §13.1.4.2.1 Table
 * 13-9).
 */
export
const SwDomainFeatures_recall: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary recall
 * @constant
 * @description
 * Alias of `SwDomainFeatures_recall`.
 */
export
const recall: number = SwDomainFeatures_recall; /* SHORT_NAMED_BIT */

/**
 * @summary SwDomainFeatures_callBack
 * @constant
 * @description
 * Bit set means the SF supports Call Back feature (ECMA-269 §13.1.4.2.1 Table
 * 13-9).
 */
export
const SwDomainFeatures_callBack: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary callBack
 * @constant
 * @description
 * Alias of `SwDomainFeatures_callBack`.
 */
export
const callBack: number = SwDomainFeatures_callBack; /* SHORT_NAMED_BIT */

/**
 * @summary SwDomainFeatures_extCallsIncoming
 * @constant
 * @description
 * Bit set means the SF supports External Calls—Incoming (ECMA-269 §13.1.4.2.1
 * Table 13-9).
 */
export
const SwDomainFeatures_extCallsIncoming: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary extCallsIncoming
 * @constant
 * @description
 * Alias of `SwDomainFeatures_extCallsIncoming`.
 */
export
const extCallsIncoming: number = SwDomainFeatures_extCallsIncoming; /* SHORT_NAMED_BIT */

/**
 * @summary SwDomainFeatures_extCallsOutgoing
 * @constant
 * @description
 * Bit set means the SF supports External Calls—Outgoing (ECMA-269 §13.1.4.2.1
 * Table 13-9).
 */
export
const SwDomainFeatures_extCallsOutgoing: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary extCallsOutgoing
 * @constant
 * @description
 * Alias of `SwDomainFeatures_extCallsOutgoing`.
 */
export
const extCallsOutgoing: number = SwDomainFeatures_extCallsOutgoing; /* SHORT_NAMED_BIT */

/**
 * @summary SwDomainFeatures_prompting
 * @constant
 * @description
 * Bit set means the SF supports Prompting feature (ECMA-269 §13.1.4.2.1 Table
 * 13-9).
 */
export
const SwDomainFeatures_prompting: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary prompting
 * @constant
 * @description
 * Alias of `SwDomainFeatures_prompting`.
 */
export
const prompting: number = SwDomainFeatures_prompting; /* SHORT_NAMED_BIT */

let _cached_decoder_for_SwDomainFeatures: $.ASN1Decoder<SwDomainFeatures> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SwDomainFeatures
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SwDomainFeatures (el: _Element): SwDomainFeatures {
    if (!_cached_decoder_for_SwDomainFeatures) { _cached_decoder_for_SwDomainFeatures = $._decodeBitString; }
    return _cached_decoder_for_SwDomainFeatures(el);
}

let _cached_encoder_for_SwDomainFeatures: $.ASN1Encoder<SwDomainFeatures> | null = null;

/**
 * @summary Encodes a(n) SwDomainFeatures into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SwDomainFeatures, encoded as an ASN.1 Element.
 */
export
function _encode_SwDomainFeatures (value: SwDomainFeatures, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SwDomainFeatures) { _cached_encoder_for_SwDomainFeatures = $._encodeBitString; }
    return _cached_encoder_for_SwDomainFeatures(value, elGetter);
}


/* eslint-enable */
