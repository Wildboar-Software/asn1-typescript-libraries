/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CauseProtocol
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CauseProtocol  ::=  ENUMERATED
 * {
 *     transferSyntaxError(1),
 *     abstractSyntaxError-reject(2),
 *     abstractSyntaxErrorIgnoreAndNotify(3),
 *     messageNotCompatibleWithReceiverState(4),
 *     semanticError(5),
 *     abstractSyntaxErrorFalselyConstructedMessage(6),
 *     unspecified(7)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_CauseProtocol {
    transferSyntaxError = 1,
    abstractSyntaxError_reject = 2,
    abstractSyntaxErrorIgnoreAndNotify = 3,
    messageNotCompatibleWithReceiverState = 4,
    semanticError = 5,
    abstractSyntaxErrorFalselyConstructedMessage = 6,
    unspecified = 7,
}

/**
 * @summary CauseProtocol
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CauseProtocol  ::=  ENUMERATED
 * {
 *     transferSyntaxError(1),
 *     abstractSyntaxError-reject(2),
 *     abstractSyntaxErrorIgnoreAndNotify(3),
 *     messageNotCompatibleWithReceiverState(4),
 *     semanticError(5),
 *     abstractSyntaxErrorFalselyConstructedMessage(6),
 *     unspecified(7)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type CauseProtocol = _enum_for_CauseProtocol;

/**
 * @summary CauseProtocol
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CauseProtocol  ::=  ENUMERATED
 * {
 *     transferSyntaxError(1),
 *     abstractSyntaxError-reject(2),
 *     abstractSyntaxErrorIgnoreAndNotify(3),
 *     messageNotCompatibleWithReceiverState(4),
 *     semanticError(5),
 *     abstractSyntaxErrorFalselyConstructedMessage(6),
 *     unspecified(7)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const CauseProtocol = _enum_for_CauseProtocol;

/**
 * @summary CauseProtocol_transferSyntaxError
 * @constant
 * @type {number}
 */
export
const CauseProtocol_transferSyntaxError = CauseProtocol.transferSyntaxError satisfies CauseProtocol; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary transferSyntaxError
 * @constant
 * @type {number}
 */
export
const transferSyntaxError = CauseProtocol.transferSyntaxError satisfies CauseProtocol; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseProtocol_abstractSyntaxError_reject
 * @constant
 * @type {number}
 */
export
const CauseProtocol_abstractSyntaxError_reject = CauseProtocol.abstractSyntaxError_reject satisfies CauseProtocol; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary abstractSyntaxError_reject
 * @constant
 * @type {number}
 */
export
const abstractSyntaxError_reject = CauseProtocol.abstractSyntaxError_reject satisfies CauseProtocol; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseProtocol_abstractSyntaxErrorIgnoreAndNotify
 * @constant
 * @type {number}
 */
export
const CauseProtocol_abstractSyntaxErrorIgnoreAndNotify = CauseProtocol.abstractSyntaxErrorIgnoreAndNotify satisfies CauseProtocol; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary abstractSyntaxErrorIgnoreAndNotify
 * @constant
 * @type {number}
 */
export
const abstractSyntaxErrorIgnoreAndNotify = CauseProtocol.abstractSyntaxErrorIgnoreAndNotify satisfies CauseProtocol; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseProtocol_messageNotCompatibleWithReceiverState
 * @constant
 * @type {number}
 */
export
const CauseProtocol_messageNotCompatibleWithReceiverState = CauseProtocol.messageNotCompatibleWithReceiverState satisfies CauseProtocol; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary messageNotCompatibleWithReceiverState
 * @constant
 * @type {number}
 */
export
const messageNotCompatibleWithReceiverState = CauseProtocol.messageNotCompatibleWithReceiverState satisfies CauseProtocol; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseProtocol_semanticError
 * @constant
 * @type {number}
 */
export
const CauseProtocol_semanticError = CauseProtocol.semanticError satisfies CauseProtocol; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary semanticError
 * @constant
 * @type {number}
 */
export
const semanticError = CauseProtocol.semanticError satisfies CauseProtocol; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseProtocol_abstractSyntaxErrorFalselyConstructedMessage
 * @constant
 * @type {number}
 */
export
const CauseProtocol_abstractSyntaxErrorFalselyConstructedMessage = CauseProtocol.abstractSyntaxErrorFalselyConstructedMessage satisfies CauseProtocol; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary abstractSyntaxErrorFalselyConstructedMessage
 * @constant
 * @type {number}
 */
export
const abstractSyntaxErrorFalselyConstructedMessage = CauseProtocol.abstractSyntaxErrorFalselyConstructedMessage satisfies CauseProtocol; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseProtocol_unspecified
 * @constant
 * @type {number}
 */
export
const CauseProtocol_unspecified = CauseProtocol.unspecified satisfies CauseProtocol; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unspecified
 * @constant
 * @type {number}
 */
export
const unspecified = CauseProtocol.unspecified satisfies CauseProtocol; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_CauseProtocol: $.ASN1Decoder<CauseProtocol> = $._decodeEnumerated;
export const _encode_CauseProtocol: $.ASN1Encoder<CauseProtocol> = $._encodeEnumerated;


/* eslint-enable */
