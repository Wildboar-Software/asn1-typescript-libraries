/* eslint-disable */
import {
    type INTEGER,
    type ASN1Element as _Element,
    ASN1OverflowError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary CommandType
 * @description
 *
 * Operation a Command asks the Service Centre to perform on a stored Short
 * Message (ECMA-325 §E.10.4, §6.5.3.1.2). Range 0..255. Values 4 to 223 are
 * reserved. Values 224 to 255 are specific to each Service Centre.
 * `statusReportRequest` is TRUE for `enquiry` and FALSE for the other named
 * types (§E.10.6).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-325/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CommandType  ::=  INTEGER {
 *     enquiry(0),
 *     cancelSRR(1),
 *     deletePreviouslySubmittedSM(2),
 *     enableSRRrelatingToPreviouslySubmittedSM(3)
 * } (0..255)
 * ```
 */
export
type CommandType = INTEGER;

/**
 * @summary CommandType_enquiry
 * @description
 *
 * Value 0. The Service Centre generates a Status Report even when its stored
 * Status Report flags are clear (ECMA-325 §6.5.3.1.2). The report's
 * `messageReference` is this command's `messageNumber` (§6.5.3.1.3).
 * `statusReportRequest` shall be TRUE (§E.10.6).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-325/
 */
export
const CommandType_enquiry = 0 satisfies CommandType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary enquiry
 * @description Alias of {@link CommandType_enquiry}.
 * @constant
 * @type {number}
 */
export
const enquiry = CommandType_enquiry satisfies CommandType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CommandType_cancelSRR
 * @description
 *
 * Value 1. The Service Centre clears Status Report requests for every
 * condition on the identified Short Message (ECMA-325 §6.5.3.1.2).
 * `statusReportRequest` shall be FALSE (§E.10.6).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-325/
 */
export
const CommandType_cancelSRR = 1 satisfies CommandType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary cancelSRR
 * @description Alias of {@link CommandType_cancelSRR}.
 * @constant
 * @type {number}
 */
export
const cancelSRR = CommandType_cancelSRR satisfies CommandType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CommandType_deletePreviouslySubmittedSM
 * @description
 *
 * Value 2. The Service Centre deletes the identified Short Message and, if a
 * Status Report is due for that condition, requests status
 * `smDeletedByOriginatingSME` (ECMA-325 §6.5.3.1.2). `statusReportRequest`
 * shall be FALSE (§E.10.6).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-325/
 */
export
const CommandType_deletePreviouslySubmittedSM = 2 satisfies CommandType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary deletePreviouslySubmittedSM
 * @description Alias of {@link CommandType_deletePreviouslySubmittedSM}.
 * @constant
 * @type {number}
 */
export
const deletePreviouslySubmittedSM = CommandType_deletePreviouslySubmittedSM satisfies CommandType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CommandType_enableSRRrelatingToPreviouslySubmittedSM
 * @description
 *
 * Value 3. The Service Centre sets Status Report requests for every condition
 * on the identified Short Message (ECMA-325 §6.5.3.1.2). `statusReportRequest`
 * shall be FALSE (§E.10.6).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-325/
 */
export
const CommandType_enableSRRrelatingToPreviouslySubmittedSM = 3 satisfies CommandType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary enableSRRrelatingToPreviouslySubmittedSM
 * @description
 * Alias of {@link CommandType_enableSRRrelatingToPreviouslySubmittedSM}.
 * @constant
 * @type {number}
 */
export
const enableSRRrelatingToPreviouslySubmittedSM = CommandType_enableSRRrelatingToPreviouslySubmittedSM satisfies CommandType; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_CommandType = (el: _Element): CommandType => {
    const value = $._decodeInteger(el);
    if ((typeof value === "bigint" ? (value < 0n || value > 255n) : (value < 0 || value > 255))) {
        throw new ASN1OverflowError("CommandType violates INTEGER constraint");
    }
    return value;
};

export
const _encode_CommandType: $.ASN1Encoder<CommandType> = $._encodeInteger;

/* eslint-enable */
