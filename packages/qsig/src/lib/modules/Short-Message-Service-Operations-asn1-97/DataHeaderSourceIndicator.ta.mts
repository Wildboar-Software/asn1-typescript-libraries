/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DataHeaderSourceIndicator
 * @description
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
 * @constant
 * @type {number}
 */
export
const DataHeaderSourceIndicator_originalSender: DataHeaderSourceIndicator = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DataHeaderSourceIndicator_originalSender
 * @constant
 * @type {number}
 */
export
const originalSender: DataHeaderSourceIndicator = DataHeaderSourceIndicator_originalSender; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DataHeaderSourceIndicator_originalReceiver
 * @constant
 * @type {number}
 */
export
const DataHeaderSourceIndicator_originalReceiver: DataHeaderSourceIndicator = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DataHeaderSourceIndicator_originalReceiver
 * @constant
 * @type {number}
 */
export
const originalReceiver: DataHeaderSourceIndicator = DataHeaderSourceIndicator_originalReceiver; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DataHeaderSourceIndicator_sMSC
 * @constant
 * @type {number}
 */
export
const DataHeaderSourceIndicator_sMSC: DataHeaderSourceIndicator = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DataHeaderSourceIndicator_sMSC
 * @constant
 * @type {number}
 */
export
const sMSC: DataHeaderSourceIndicator = DataHeaderSourceIndicator_sMSC; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_DataHeaderSourceIndicator: $.ASN1Decoder<DataHeaderSourceIndicator> = $._decodeInteger;

export
const _encode_DataHeaderSourceIndicator: $.ASN1Encoder<DataHeaderSourceIndicator> = $._encodeInteger;

/* eslint-enable */
