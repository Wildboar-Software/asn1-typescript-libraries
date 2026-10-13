/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary BlockingUsage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BlockingUsage            ::=    INTEGER
 * {  permitted               (0)
 * ,  notPermitted            (1)
 * }
 * ```
 */
export
type BlockingUsage = INTEGER;

/**
 * @summary BlockingUsage_permitted
 * @constant
 * @type {number}
 */
export
const BlockingUsage_permitted: BlockingUsage = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BlockingUsage_permitted
 * @constant
 * @type {number}
 */
export
const permitted: BlockingUsage = BlockingUsage_permitted; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BlockingUsage_notPermitted
 * @constant
 * @type {number}
 */
export
const BlockingUsage_notPermitted: BlockingUsage = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BlockingUsage_notPermitted
 * @constant
 * @type {number}
 */
export
const notPermitted: BlockingUsage = BlockingUsage_notPermitted; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_BlockingUsage: $.ASN1Decoder<BlockingUsage> = $._decodeInteger;
export const _encode_BlockingUsage: $.ASN1Encoder<BlockingUsage> = $._encodeInteger;


/* eslint-enable */
