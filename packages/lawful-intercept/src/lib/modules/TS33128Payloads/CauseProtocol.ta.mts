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
const CauseProtocol: typeof _enum_for_CauseProtocol = _enum_for_CauseProtocol;

/**
 * @summary CauseProtocol_transferSyntaxError
 * @constant
 * @type {number}
 */
export
const CauseProtocol_transferSyntaxError: _enum_for_CauseProtocol.transferSyntaxError = CauseProtocol.transferSyntaxError; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary transferSyntaxError
 * @constant
 * @type {number}
 */
export
const transferSyntaxError: _enum_for_CauseProtocol.transferSyntaxError = CauseProtocol.transferSyntaxError; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseProtocol_abstractSyntaxError_reject
 * @constant
 * @type {number}
 */
export
const CauseProtocol_abstractSyntaxError_reject: _enum_for_CauseProtocol.abstractSyntaxError_reject = CauseProtocol.abstractSyntaxError_reject; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary abstractSyntaxError_reject
 * @constant
 * @type {number}
 */
export
const abstractSyntaxError_reject: _enum_for_CauseProtocol.abstractSyntaxError_reject = CauseProtocol.abstractSyntaxError_reject; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseProtocol_abstractSyntaxErrorIgnoreAndNotify
 * @constant
 * @type {number}
 */
export
const CauseProtocol_abstractSyntaxErrorIgnoreAndNotify: _enum_for_CauseProtocol.abstractSyntaxErrorIgnoreAndNotify = CauseProtocol.abstractSyntaxErrorIgnoreAndNotify; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary abstractSyntaxErrorIgnoreAndNotify
 * @constant
 * @type {number}
 */
export
const abstractSyntaxErrorIgnoreAndNotify: _enum_for_CauseProtocol.abstractSyntaxErrorIgnoreAndNotify = CauseProtocol.abstractSyntaxErrorIgnoreAndNotify; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseProtocol_messageNotCompatibleWithReceiverState
 * @constant
 * @type {number}
 */
export
const CauseProtocol_messageNotCompatibleWithReceiverState: _enum_for_CauseProtocol.messageNotCompatibleWithReceiverState = CauseProtocol.messageNotCompatibleWithReceiverState; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary messageNotCompatibleWithReceiverState
 * @constant
 * @type {number}
 */
export
const messageNotCompatibleWithReceiverState: _enum_for_CauseProtocol.messageNotCompatibleWithReceiverState = CauseProtocol.messageNotCompatibleWithReceiverState; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseProtocol_semanticError
 * @constant
 * @type {number}
 */
export
const CauseProtocol_semanticError: _enum_for_CauseProtocol.semanticError = CauseProtocol.semanticError; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary semanticError
 * @constant
 * @type {number}
 */
export
const semanticError: _enum_for_CauseProtocol.semanticError = CauseProtocol.semanticError; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseProtocol_abstractSyntaxErrorFalselyConstructedMessage
 * @constant
 * @type {number}
 */
export
const CauseProtocol_abstractSyntaxErrorFalselyConstructedMessage: _enum_for_CauseProtocol.abstractSyntaxErrorFalselyConstructedMessage = CauseProtocol.abstractSyntaxErrorFalselyConstructedMessage; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary abstractSyntaxErrorFalselyConstructedMessage
 * @constant
 * @type {number}
 */
export
const abstractSyntaxErrorFalselyConstructedMessage: _enum_for_CauseProtocol.abstractSyntaxErrorFalselyConstructedMessage = CauseProtocol.abstractSyntaxErrorFalselyConstructedMessage; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseProtocol_unspecified
 * @constant
 * @type {number}
 */
export
const CauseProtocol_unspecified: _enum_for_CauseProtocol.unspecified = CauseProtocol.unspecified; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unspecified
 * @constant
 * @type {number}
 */
export
const unspecified: _enum_for_CauseProtocol.unspecified = CauseProtocol.unspecified; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_CauseProtocol: $.ASN1Decoder<CauseProtocol> = $._decodeEnumerated;
export const _encode_CauseProtocol: $.ASN1Encoder<CauseProtocol> = $._encodeEnumerated;


/* eslint-enable */
