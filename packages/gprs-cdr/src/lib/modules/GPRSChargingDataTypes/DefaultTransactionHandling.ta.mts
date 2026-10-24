/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_DefaultTransactionHandling {
    continueTransaction = 0,
    releaseTransaction = 1,
}

/**
 * @summary DefaultTransactionHandling
 * @description
 * 
 * CAMEL default handling for a PDP, MM, or SMS dialogue. Clause 5.3.1.0
 * says PS-domain online charging in the SGSN uses CAMEL, as specified in
 * TS 23.078 and TS 29.078, and that this is outside the scope of TS
 * 32.251. The CDR still carries the CAMEL information when CAMEL is
 * activated (tables 6.1.1.1, 6.1.4.1, 6.1.5.1, and 6.1.6.1).
 * 
 * 3GPP TS 32.251 V19.0.0.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DefaultTransactionHandling  ::=  ENUMERATED {
 *    continueTransaction    ( 0 ),
 *    releaseTransaction     ( 1 ),
 *    ...  }
 * ```
 * 
 * @enum {number}
 */
export
type DefaultTransactionHandling = _enum_for_DefaultTransactionHandling | ENUMERATED;

/**
 * @summary DefaultTransactionHandling_continueTransaction
 * @constant
 * @type {number}
 */
export
const DefaultTransactionHandling_continueTransaction: DefaultTransactionHandling = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary continueTransaction
 * @constant
 * @type {number}
 */
export
const continueTransaction: DefaultTransactionHandling = DefaultTransactionHandling_continueTransaction; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DefaultTransactionHandling_releaseTransaction
 * @constant
 * @type {number}
 */
export
const DefaultTransactionHandling_releaseTransaction: DefaultTransactionHandling = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary releaseTransaction
 * @constant
 * @type {number}
 */
export
const releaseTransaction: DefaultTransactionHandling = DefaultTransactionHandling_releaseTransaction; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_DefaultTransactionHandling: $.ASN1Decoder<DefaultTransactionHandling> = $._decodeEnumerated;

export
const _encode_DefaultTransactionHandling: $.ASN1Encoder<DefaultTransactionHandling> = $._encodeEnumerated;

/* eslint-enable */
