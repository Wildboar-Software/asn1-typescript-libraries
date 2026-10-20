/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MMTelRecord_role_of_Node
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMTelRecord-role-of-Node ::= ENUMERATED {
 *    originating    ( 0 ),
 *    terminating    ( 1 )
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_MMTelRecord_role_of_Node {
    originating = 0,
    terminating = 1,
}

/**
 * @summary MMTelRecord_role_of_Node
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMTelRecord-role-of-Node ::= ENUMERATED {
 *    originating    ( 0 ),
 *    terminating    ( 1 )
 * }
 * ```
 * 
 * @enum {number}
 */
export
type MMTelRecord_role_of_Node = _enum_for_MMTelRecord_role_of_Node;

/**
 * @summary MMTelRecord_role_of_Node
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMTelRecord-role-of-Node ::= ENUMERATED {
 *    originating    ( 0 ),
 *    terminating    ( 1 )
 * }
 * ```
 * 
 * @enum {number}
 */
export
const MMTelRecord_role_of_Node = _enum_for_MMTelRecord_role_of_Node;

/**
 * @summary MMTelRecord_role_of_Node_originating
 * @constant
 * @type {number}
 */
export
const MMTelRecord_role_of_Node_originating: MMTelRecord_role_of_Node = MMTelRecord_role_of_Node.originating; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary originating
 * @constant
 * @type {number}
 */
export
const originating: MMTelRecord_role_of_Node = MMTelRecord_role_of_Node.originating; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMTelRecord_role_of_Node_terminating
 * @constant
 * @type {number}
 */
export
const MMTelRecord_role_of_Node_terminating: MMTelRecord_role_of_Node = MMTelRecord_role_of_Node.terminating; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary terminating
 * @constant
 * @type {number}
 */
export
const terminating: MMTelRecord_role_of_Node = MMTelRecord_role_of_Node.terminating; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_MMTelRecord_role_of_Node: $.ASN1Decoder<MMTelRecord_role_of_Node> = $._decodeEnumerated;

export
const _encode_MMTelRecord_role_of_Node: $.ASN1Encoder<MMTelRecord_role_of_Node> = $._encodeEnumerated;

/* eslint-enable */
