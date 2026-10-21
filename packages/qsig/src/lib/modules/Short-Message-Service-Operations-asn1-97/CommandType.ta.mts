/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
    ASN1OverflowError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary CommandType
 * @description
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
 * @constant
 * @type {number}
 */
export
const CommandType_enquiry: CommandType = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CommandType_enquiry
 * @constant
 * @type {number}
 */
export
const enquiry: CommandType = CommandType_enquiry; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CommandType_cancelSRR
 * @constant
 * @type {number}
 */
export
const CommandType_cancelSRR: CommandType = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CommandType_cancelSRR
 * @constant
 * @type {number}
 */
export
const cancelSRR: CommandType = CommandType_cancelSRR; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CommandType_deletePreviouslySubmittedSM
 * @constant
 * @type {number}
 */
export
const CommandType_deletePreviouslySubmittedSM: CommandType = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CommandType_deletePreviouslySubmittedSM
 * @constant
 * @type {number}
 */
export
const deletePreviouslySubmittedSM: CommandType = CommandType_deletePreviouslySubmittedSM; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CommandType_enableSRRrelatingToPreviouslySubmittedSM
 * @constant
 * @type {number}
 */
export
const CommandType_enableSRRrelatingToPreviouslySubmittedSM: CommandType = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CommandType_enableSRRrelatingToPreviouslySubmittedSM
 * @constant
 * @type {number}
 */
export
const enableSRRrelatingToPreviouslySubmittedSM: CommandType = CommandType_enableSRRrelatingToPreviouslySubmittedSM; /* SHORT_NAMED_INTEGER_VALUE */

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
