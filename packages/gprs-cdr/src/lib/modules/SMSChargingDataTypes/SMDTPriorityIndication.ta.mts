/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SMDTPriorityIndication
 * @description
 *
 * Priority of a device-trigger request, if available (table 6.1.3.5.1). TS
 * 32.274 does not further define `nonpriority` and `priority`. This is
 * separate from `PriorityType`: the rule that `low` is not applicable (table
 * 6.3.1.1.1) is about short-message priority.
 *
 * 3GPP TS 32.274 V19.1.0 table 6.1.3.5.1.
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
 * Priority of a device-trigger request, if available (table 6.1.3.5.1). TS
 * 32.274 does not further define `nonpriority` and `priority`. This is
 * separate from `PriorityType`: the rule that `low` is not applicable (table
 * 6.3.1.1.1) is about short-message priority.
 *
 * 3GPP TS 32.274 V19.1.0 table 6.1.3.5.1.
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
 * Priority of a device-trigger request, if available (table 6.1.3.5.1). TS
 * 32.274 does not further define `nonpriority` and `priority`. This is
 * separate from `PriorityType`: the rule that `low` is not applicable (table
 * 6.3.1.1.1) is about short-message priority.
 *
 * 3GPP TS 32.274 V19.1.0 table 6.1.3.5.1.
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
 * @description
 *
 * Device-trigger request not indicated as priority. TS 32.274 does not define
 * this value beyond the field being the request's priority.
 *
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
 * @description
 *
 * Device-trigger request indicated as priority. TS 32.274 does not define this
 * value beyond the field being the request's priority.
 *
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
