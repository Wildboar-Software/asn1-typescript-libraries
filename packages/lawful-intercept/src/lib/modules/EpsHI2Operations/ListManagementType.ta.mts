/* eslint-disable */
import {
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_ListManagementType {
    contactListManagementAttempt = 1,
    groupListManagementAttempt = 2,
    contactListManagementResult = 3,
    groupListManagementResult = 4,
    requestSuccessful = 5,
}

/**
 * @summary ListManagementType
 * @description
 * 
 * Which PTC list the target touched, and whether this IRI is the attempt or the
 * network's result (table 17.2.17). Conditional on the list-management report.
 * The table's fifth choice is worded "Request unsuccessful"; the module name is
 * the success value. 3GPP TS 33.108
 * (https://www.3gpp.org/DynaReport/33108.htm).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ListManagementType         ::=  ENUMERATED
 * {
 *     contactListManagementAttempt    (1),
 *     groupListManagementAttempt        (2),
 *     contactListManagementResult    (3),
 *     groupListManagementResult        (4),
 *     requestSuccessful                (5),
 * ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type ListManagementType = _enum_for_ListManagementType | ENUMERATED;

/**
 * @summary ListManagementType_contactListManagementAttempt
 * @description
 * 
 * The target's client attempted to change the contact list (table 17.2.17).
 * 
 * @constant
 * @type {number}
 */
export
const ListManagementType_contactListManagementAttempt: ListManagementType = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary contactListManagementAttempt
 * @description
 * 
 * Attempt to change the contact list (clause 17.2.17).
 * 
 * @constant
 * @type {number}
 */
export
const contactListManagementAttempt: ListManagementType = ListManagementType_contactListManagementAttempt; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ListManagementType_groupListManagementAttempt
 * @description
 * 
 * The target's client attempted to change a PTC group list (table 17.2.17).
 * 
 * @constant
 * @type {number}
 */
export
const ListManagementType_groupListManagementAttempt: ListManagementType = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary groupListManagementAttempt
 * @description
 * 
 * Attempt to change a group list (clause 17.2.17).
 * 
 * @constant
 * @type {number}
 */
export
const groupListManagementAttempt: ListManagementType = ListManagementType_groupListManagementAttempt; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ListManagementType_contactListManagementResult
 * @description
 * 
 * The network's result for a contact-list change (table 17.2.17).
 * 
 * @constant
 * @type {number}
 */
export
const ListManagementType_contactListManagementResult: ListManagementType = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary contactListManagementResult
 * @description
 * 
 * Result of a contact-list change (clause 17.2.17).
 * 
 * @constant
 * @type {number}
 */
export
const contactListManagementResult: ListManagementType = ListManagementType_contactListManagementResult; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ListManagementType_groupListManagementResult
 * @description
 * 
 * The network's result for a group-list change (table 17.2.17).
 * 
 * @constant
 * @type {number}
 */
export
const ListManagementType_groupListManagementResult: ListManagementType = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary groupListManagementResult
 * @description
 * 
 * Result of a group-list change (clause 17.2.17).
 * 
 * @constant
 * @type {number}
 */
export
const groupListManagementResult: ListManagementType = ListManagementType_groupListManagementResult; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ListManagementType_requestSuccessful
 * @description
 * 
 * The module names this value as success. Table 17.2.17 choice (e) is worded
 * "Request unsuccessful" and is reported with the result values when the
 * network notifies the target.
 * 
 * @constant
 * @type {number}
 */
export
const ListManagementType_requestSuccessful: ListManagementType = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary requestSuccessful
 * @description
 * 
 * Module name is success; table 17.2.17 choice (e) says unsuccessful.
 * 
 * @constant
 * @type {number}
 */
export
const requestSuccessful: ListManagementType = ListManagementType_requestSuccessful; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_ListManagementType: $.ASN1Decoder<ListManagementType> = $._decodeEnumerated;
export const _encode_ListManagementType: $.ASN1Encoder<ListManagementType> = $._encodeEnumerated;


/* eslint-enable */
