/* eslint-disable */
import {
    type INTEGER,
    ASN1Element as _Element,
    ASN1OverflowError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary DataHeaderSourceIndicator
 * @description
 *
 * Marks who inserted the user-data headers that follow (ECMA-325 §E.1.3.1.6).
 * Placed in front of that source's headers. Those headers run until the next
 * indicator or the end of the header list. Used especially on Status Reports.
 * A Service Centre may also use it to add information to a Short Message.
 * Default headers on `smsDeliver` are the Sending User's. Default headers on
 * `smsStatusReport` are the headers copied from the `smsDeliver` report. Range
 * 0..255. Only 1, 2, and 3 are named.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-325/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DataHeaderSourceIndicator  ::=  INTEGER {
 *     originalSender(1), -- valid in case of Status Report
 *     originalReceiver(2), -- valid in case of Status Report
 *     sMSC(3)
 * } (0..255)
 * ```
 */
export
type DataHeaderSourceIndicator = INTEGER;

/**
 * @summary DataHeaderSourceIndicator_originalSender
 * @description
 *
 * Value 1. The following headers were inserted by the original Sending User.
 * Valid on a Status Report (ECMA-325 §E.1.3.1.6).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-325/
 */
export
const DataHeaderSourceIndicator_originalSender: DataHeaderSourceIndicator = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary originalSender
 * @description Alias of {@link DataHeaderSourceIndicator_originalSender}.
 * @constant
 * @type {number}
 */
export
const originalSender: DataHeaderSourceIndicator = DataHeaderSourceIndicator_originalSender; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DataHeaderSourceIndicator_originalReceiver
 * @description
 *
 * Value 2. The following headers were inserted by the original Receiving User.
 * Valid on a Status Report (ECMA-325 §E.1.3.1.6).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-325/
 */
export
const DataHeaderSourceIndicator_originalReceiver: DataHeaderSourceIndicator = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary originalReceiver
 * @description Alias of {@link DataHeaderSourceIndicator_originalReceiver}.
 * @constant
 * @type {number}
 */
export
const originalReceiver: DataHeaderSourceIndicator = DataHeaderSourceIndicator_originalReceiver; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DataHeaderSourceIndicator_sMSC
 * @description
 *
 * Value 3. The following headers were inserted by the Service Centre. May
 * appear on any message or report (ECMA-325 §E.1.3.1.6).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-325/
 */
export
const DataHeaderSourceIndicator_sMSC: DataHeaderSourceIndicator = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary sMSC
 * @description Alias of {@link DataHeaderSourceIndicator_sMSC}.
 * @constant
 * @type {number}
 */
export
const sMSC: DataHeaderSourceIndicator = DataHeaderSourceIndicator_sMSC; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_DataHeaderSourceIndicator = (el: _Element): DataHeaderSourceIndicator => {
    const value = $._decodeInteger(el);
    if ((typeof value === "bigint" ? (value < 0n || value > 255n) : (value < 0 || value > 255))) {
        throw new ASN1OverflowError("DataHeaderSourceIndicator violates INTEGER constraint");
    }
    return value;
};

export
const _encode_DataHeaderSourceIndicator: $.ASN1Encoder<DataHeaderSourceIndicator> = $._encodeInteger;

/* eslint-enable */
