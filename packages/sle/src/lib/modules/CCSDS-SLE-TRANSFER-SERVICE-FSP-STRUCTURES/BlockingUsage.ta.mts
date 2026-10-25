/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary BlockingUsage
 * @description
 * 
 * Whether the provider may block several Space Packets into one TC frame. Table
 * 3-11 defines `permitted` and `notPermitted` for the managed blocking-usage
 * parameter, which applies to every MAP on the VC. The FSP-TRANSFER-DATA
 * blocking parameter is typed as this value in annex A, while section 3.6.2.11
 * describes that parameter as `yes` or `no`. This issue does not state which
 * name is `yes`.
 * 
 * CCSDS 912.3-B-3, sections 3.10.2.5 (table 3-11), 3.6.2.11, and annex A2.5.
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
 * @description
 * 
 * The provider may block multiple Space Packets into a single frame. Permission
 * applies to every MAP in use on the VC. When blocking is permitted and the
 * Packet's blocking parameter allows it, the Packet may be merged with other
 * Packets on the same MAP according to the space left in the frame.
 * 
 * CCSDS 912.3-B-3, sections 3.10.2.5 (table 3-11) and 3.6.2.11.
 * @constant
 * @type {number}
 */
export
const BlockingUsage_permitted: 0 = 0 satisfies BlockingUsage; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BlockingUsage_permitted
 * @description
 * 
 * Multiple Packets may share a frame (CCSDS 912.3-B-3, table 3-11).
 * @constant
 * @type {number}
 */
export
const permitted: 0 = BlockingUsage_permitted; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BlockingUsage_notPermitted
 * @description
 * 
 * The provider does not block Space Packets. Each frame encapsulates at most
 * one Space Packet, and the provider ignores the blocking parameter of
 * FSP-TRANSFER-DATA.
 * 
 * CCSDS 912.3-B-3, sections 3.10.2.5 (table 3-11) and 3.6.2.11.
 * @constant
 * @type {number}
 */
export
const BlockingUsage_notPermitted: 1 = 1 satisfies BlockingUsage; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BlockingUsage_notPermitted
 * @description
 * 
 * Each frame carries at most one Space Packet (CCSDS 912.3-B-3, table 3-11).
 * @constant
 * @type {number}
 */
export
const notPermitted: 1 = BlockingUsage_notPermitted; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_BlockingUsage: $.ASN1Decoder<BlockingUsage> = $._decodeInteger;
export const _encode_BlockingUsage: $.ASN1Encoder<BlockingUsage> = $._encodeInteger;


/* eslint-enable */
