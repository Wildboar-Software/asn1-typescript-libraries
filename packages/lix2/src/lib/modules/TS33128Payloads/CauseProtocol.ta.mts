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
const CauseProtocol_transferSyntaxError: CauseProtocol = CauseProtocol.transferSyntaxError; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary transferSyntaxError
 * @constant
 * @type {number}
 */
export
const transferSyntaxError: CauseProtocol = CauseProtocol.transferSyntaxError; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseProtocol_abstractSyntaxError_reject
 * @constant
 * @type {number}
 */
export
const CauseProtocol_abstractSyntaxError_reject: CauseProtocol = CauseProtocol.abstractSyntaxError_reject; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary abstractSyntaxError_reject
 * @constant
 * @type {number}
 */
export
const abstractSyntaxError_reject: CauseProtocol = CauseProtocol.abstractSyntaxError_reject; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseProtocol_abstractSyntaxErrorIgnoreAndNotify
 * @constant
 * @type {number}
 */
export
const CauseProtocol_abstractSyntaxErrorIgnoreAndNotify: CauseProtocol = CauseProtocol.abstractSyntaxErrorIgnoreAndNotify; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary abstractSyntaxErrorIgnoreAndNotify
 * @constant
 * @type {number}
 */
export
const abstractSyntaxErrorIgnoreAndNotify: CauseProtocol = CauseProtocol.abstractSyntaxErrorIgnoreAndNotify; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseProtocol_messageNotCompatibleWithReceiverState
 * @constant
 * @type {number}
 */
export
const CauseProtocol_messageNotCompatibleWithReceiverState: CauseProtocol = CauseProtocol.messageNotCompatibleWithReceiverState; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary messageNotCompatibleWithReceiverState
 * @constant
 * @type {number}
 */
export
const messageNotCompatibleWithReceiverState: CauseProtocol = CauseProtocol.messageNotCompatibleWithReceiverState; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseProtocol_semanticError
 * @constant
 * @type {number}
 */
export
const CauseProtocol_semanticError: CauseProtocol = CauseProtocol.semanticError; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary semanticError
 * @constant
 * @type {number}
 */
export
const semanticError: CauseProtocol = CauseProtocol.semanticError; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseProtocol_abstractSyntaxErrorFalselyConstructedMessage
 * @constant
 * @type {number}
 */
export
const CauseProtocol_abstractSyntaxErrorFalselyConstructedMessage: CauseProtocol = CauseProtocol.abstractSyntaxErrorFalselyConstructedMessage; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary abstractSyntaxErrorFalselyConstructedMessage
 * @constant
 * @type {number}
 */
export
const abstractSyntaxErrorFalselyConstructedMessage: CauseProtocol = CauseProtocol.abstractSyntaxErrorFalselyConstructedMessage; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseProtocol_unspecified
 * @constant
 * @type {number}
 */
export
const CauseProtocol_unspecified: CauseProtocol = CauseProtocol.unspecified; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unspecified
 * @constant
 * @type {number}
 */
export
const unspecified: CauseProtocol = CauseProtocol.unspecified; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) CauseProtocol
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_CauseProtocol = $._decodeEnumerated;

/**
 * @summary Encodes a(n) CauseProtocol into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CauseProtocol, encoded as an ASN.1 Element.
 */
export const _encode_CauseProtocol = $._encodeEnumerated;


/* eslint-enable */
