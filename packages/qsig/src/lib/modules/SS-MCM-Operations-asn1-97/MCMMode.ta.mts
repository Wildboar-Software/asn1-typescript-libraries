/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary MCMMode
 * @description
 *
 * How monitored messages are presented while SS-MCM is
 * active for a Message Type (ECMA-347 §6.5.2.1.1).
 * `compressed` (0) is a summary. `complete` (1) is the
 * fuller form. New and retrieved messages each have a mode
 * (`MCMServiceInfo`). §6.5.1.1.2 states what `mCMNewMsg`
 * carries in each mode. An update uses `CompressedInfo` or
 * `CompleteInfo` (§6.3.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-347/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MCMMode  ::=  INTEGER {
 *     compressed(0),
 *     complete(1)
 * }
 * ```
 */
export
type MCMMode = INTEGER;

/**
 * @summary MCMMode_compressed
 * @description
 *
 * Summary, not one record per message (ECMA-347 §6.3.1).
 * On `mCMNewMsg`, the count of New Messages is required,
 * and the priority, originator, and time of the latest
 * highest-priority New Message are optional (§6.5.1.1.2).
 * Value 0.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-347/
 */
export
const MCMMode_compressed: MCMMode = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MCMMode_compressed
 * @description Alias of {@link MCMMode_compressed}.
 * @constant
 * @type {number}
 */
export
const compressed: MCMMode = MCMMode_compressed; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MCMMode_complete
 * @description
 *
 * Fuller presentation (ECMA-347 §6.3.1). On `mCMNewMsg`,
 * the originator of the last incoming message is required,
 * and the count, priority, and time are optional
 * (§6.5.1.1.2). An update lists one address header per
 * message (`CompleteInfo`). Value 1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-347/
 */
export
const MCMMode_complete: MCMMode = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MCMMode_complete
 * @description Alias of {@link MCMMode_complete}.
 * @constant
 * @type {number}
 */
export
const complete: MCMMode = MCMMode_complete; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_MCMMode: $.ASN1Decoder<MCMMode> = $._decodeInteger;

export
const _encode_MCMMode: $.ASN1Encoder<MCMMode> = $._encodeInteger;

/* eslint-enable */
