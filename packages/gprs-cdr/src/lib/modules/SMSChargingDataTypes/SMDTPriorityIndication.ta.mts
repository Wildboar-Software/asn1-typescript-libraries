/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SMDTPriorityIndication
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMDTPriorityIndication  ::=  ENUMERATED {
 *    nonpriority    ( 0 ),
 *    priority       ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_SMDTPriorityIndication {
    nonpriority = 0,
    priority = 1,
}

/**
 * @summary SMDTPriorityIndication
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMDTPriorityIndication  ::=  ENUMERATED {
 *    nonpriority    ( 0 ),
 *    priority       ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
type SMDTPriorityIndication = _enum_for_SMDTPriorityIndication;

/**
 * @summary SMDTPriorityIndication
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMDTPriorityIndication  ::=  ENUMERATED {
 *    nonpriority    ( 0 ),
 *    priority       ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
const SMDTPriorityIndication = _enum_for_SMDTPriorityIndication;

/**
 * @summary SMDTPriorityIndication_nonpriority
 * @constant
 * @type {number}
 */
export
const SMDTPriorityIndication_nonpriority: SMDTPriorityIndication = SMDTPriorityIndication.nonpriority; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nonpriority
 * @constant
 * @type {number}
 */
export
const nonpriority: SMDTPriorityIndication = SMDTPriorityIndication.nonpriority; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMDTPriorityIndication_priority
 * @constant
 * @type {number}
 */
export
const SMDTPriorityIndication_priority: SMDTPriorityIndication = SMDTPriorityIndication.priority; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary priority
 * @constant
 * @type {number}
 */
export
const priority: SMDTPriorityIndication = SMDTPriorityIndication.priority; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_SMDTPriorityIndication: $.ASN1Decoder<SMDTPriorityIndication> = $._decodeEnumerated;

export
const _encode_SMDTPriorityIndication: $.ASN1Encoder<SMDTPriorityIndication> = $._encodeEnumerated;

/* eslint-enable */
