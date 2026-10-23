/* eslint-disable */
import {
    ENUMERATED
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
