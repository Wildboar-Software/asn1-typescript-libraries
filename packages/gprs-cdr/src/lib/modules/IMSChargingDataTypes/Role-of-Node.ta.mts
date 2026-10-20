/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Role_of_Node
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Role-of-Node  ::=  ENUMERATED {
 *    originating    ( 0 ),
 *    terminating    ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_Role_of_Node {
    originating = 0,
    terminating = 1,
}

/**
 * @summary Role_of_Node
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Role-of-Node  ::=  ENUMERATED {
 *    originating    ( 0 ),
 *    terminating    ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
type Role_of_Node = _enum_for_Role_of_Node;

/**
 * @summary Role_of_Node
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Role-of-Node  ::=  ENUMERATED {
 *    originating    ( 0 ),
 *    terminating    ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
const Role_of_Node = _enum_for_Role_of_Node;

/**
 * @summary Role_of_Node_originating
 * @constant
 * @type {number}
 */
export
const Role_of_Node_originating: Role_of_Node = Role_of_Node.originating; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary originating
 * @constant
 * @type {number}
 */
export
const originating: Role_of_Node = Role_of_Node.originating; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Role_of_Node_terminating
 * @constant
 * @type {number}
 */
export
const Role_of_Node_terminating: Role_of_Node = Role_of_Node.terminating; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary terminating
 * @constant
 * @type {number}
 */
export
const terminating: Role_of_Node = Role_of_Node.terminating; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_Role_of_Node: $.ASN1Decoder<Role_of_Node> = $._decodeEnumerated;

export
const _encode_Role_of_Node: $.ASN1Encoder<Role_of_Node> = $._encodeEnumerated;

/* eslint-enable */
