/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Role_of_Node
 * @description
 *
 * The field indicates whether the IMS node (except MRFC) is serving the
 * Originating or the Terminating party. The role can be: Originating (IMS
 * node serving the calling party); Terminating (IMS node serving the called
 * party).
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.45.
 *
 * 3GPP TS 32.260 V20.1.0 clause 6.3.1.2.
 *
 * @see https://www.3gpp.org/DynaReport/32260.htm
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
 * The field indicates whether the IMS node (except MRFC) is serving the
 * Originating or the Terminating party. The role can be: Originating (IMS
 * node serving the calling party); Terminating (IMS node serving the called
 * party).
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.45.
 *
 * 3GPP TS 32.260 V20.1.0 clause 6.3.1.2.
 *
 * @see https://www.3gpp.org/DynaReport/32260.htm
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
 * The field indicates whether the IMS node (except MRFC) is serving the
 * Originating or the Terminating party. The role can be: Originating (IMS
 * node serving the calling party); Terminating (IMS node serving the called
 * party).
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.45.
 *
 * 3GPP TS 32.260 V20.1.0 clause 6.3.1.2.
 *
 * @see https://www.3gpp.org/DynaReport/32260.htm
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
 * @description
 *
 * The node serves the calling party (clause 6.3.1.2).
 *
 * @constant
 * @type {number}
 */
export
const Role_of_Node_originating: Role_of_Node = Role_of_Node.originating; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary originating
 * @description
 *
 * The node serves the calling party (clause 6.3.1.2).
 *
 * @constant
 * @type {number}
 */
export
const originating: Role_of_Node = Role_of_Node.originating; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Role_of_Node_terminating
 * @description
 *
 * The node serves the called party (clause 6.3.1.2). Not used for the
 * MRFC.
 *
 * @constant
 * @type {number}
 */
export
const Role_of_Node_terminating: Role_of_Node = Role_of_Node.terminating; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary terminating
 * @description
 *
 * The node serves the called party (clause 6.3.1.2). Not used for the
 * MRFC.
 *
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
