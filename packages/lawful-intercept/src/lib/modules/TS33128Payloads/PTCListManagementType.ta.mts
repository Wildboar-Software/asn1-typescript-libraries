/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PTCListManagementType
 * @description
 * 
 * The "List Management Attempts" identify the type of list being managed by the
 * target when available: a) ContactListManagementAttempt b)
 * GroupListManagementAttempt c) ContactListManagementResult d)
 * GroupListManagementResult e) Request unsuccessful For example, a) and b) are
 * reported when PTC target attempts changes to their contact list and their PTC
 * group list(s). The "List Management Results" identify the network response to
 * a modification by the PTC target. For example, c), d), or e) is reported when
 * the network notifies the PTC target of changes to their contact list or their
 * PTC group list(s).
 *
 * 3GPP TS 33.128, clause 7.5.2.17.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCListManagementType   ::=  ENUMERATED
 * {
 *     contactListManagementAttempt(1),
 *     groupListManagementAttempt(2),
 *     contactListManagementResult(3),
 *     groupListManagementResult(4),
 *     requestUnsuccessful(5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_PTCListManagementType {
    contactListManagementAttempt = 1,
    groupListManagementAttempt = 2,
    contactListManagementResult = 3,
    groupListManagementResult = 4,
    requestUnsuccessful = 5,
}

/**
 * @summary PTCListManagementType
 * @description
 * 
 * The "List Management Attempts" identify the type of list being managed by the
 * target when available: a) ContactListManagementAttempt b)
 * GroupListManagementAttempt c) ContactListManagementResult d)
 * GroupListManagementResult e) Request unsuccessful For example, a) and b) are
 * reported when PTC target attempts changes to their contact list and their PTC
 * group list(s). The "List Management Results" identify the network response to
 * a modification by the PTC target. For example, c), d), or e) is reported when
 * the network notifies the PTC target of changes to their contact list or their
 * PTC group list(s).
 *
 * 3GPP TS 33.128, clause 7.5.2.17.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCListManagementType   ::=  ENUMERATED
 * {
 *     contactListManagementAttempt(1),
 *     groupListManagementAttempt(2),
 *     contactListManagementResult(3),
 *     groupListManagementResult(4),
 *     requestUnsuccessful(5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type PTCListManagementType = _enum_for_PTCListManagementType;

/**
 * @summary PTCListManagementType
 * @description
 * 
 * The "List Management Attempts" identify the type of list being managed by the
 * target when available: a) ContactListManagementAttempt b)
 * GroupListManagementAttempt c) ContactListManagementResult d)
 * GroupListManagementResult e) Request unsuccessful For example, a) and b) are
 * reported when PTC target attempts changes to their contact list and their PTC
 * group list(s). The "List Management Results" identify the network response to
 * a modification by the PTC target. For example, c), d), or e) is reported when
 * the network notifies the PTC target of changes to their contact list or their
 * PTC group list(s).
 *
 * 3GPP TS 33.128, clause 7.5.2.17.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCListManagementType   ::=  ENUMERATED
 * {
 *     contactListManagementAttempt(1),
 *     groupListManagementAttempt(2),
 *     contactListManagementResult(3),
 *     groupListManagementResult(4),
 *     requestUnsuccessful(5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const PTCListManagementType = _enum_for_PTCListManagementType;

/**
 * @summary PTCListManagementType_contactListManagementAttempt
 * @constant
 * @type {number}
 */
export
const PTCListManagementType_contactListManagementAttempt: PTCListManagementType = PTCListManagementType.contactListManagementAttempt; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary contactListManagementAttempt
 * @constant
 * @type {number}
 */
export
const contactListManagementAttempt: PTCListManagementType = PTCListManagementType.contactListManagementAttempt; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCListManagementType_groupListManagementAttempt
 * @constant
 * @type {number}
 */
export
const PTCListManagementType_groupListManagementAttempt: PTCListManagementType = PTCListManagementType.groupListManagementAttempt; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary groupListManagementAttempt
 * @constant
 * @type {number}
 */
export
const groupListManagementAttempt: PTCListManagementType = PTCListManagementType.groupListManagementAttempt; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCListManagementType_contactListManagementResult
 * @constant
 * @type {number}
 */
export
const PTCListManagementType_contactListManagementResult: PTCListManagementType = PTCListManagementType.contactListManagementResult; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary contactListManagementResult
 * @constant
 * @type {number}
 */
export
const contactListManagementResult: PTCListManagementType = PTCListManagementType.contactListManagementResult; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCListManagementType_groupListManagementResult
 * @constant
 * @type {number}
 */
export
const PTCListManagementType_groupListManagementResult: PTCListManagementType = PTCListManagementType.groupListManagementResult; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary groupListManagementResult
 * @constant
 * @type {number}
 */
export
const groupListManagementResult: PTCListManagementType = PTCListManagementType.groupListManagementResult; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCListManagementType_requestUnsuccessful
 * @constant
 * @type {number}
 */
export
const PTCListManagementType_requestUnsuccessful: PTCListManagementType = PTCListManagementType.requestUnsuccessful; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary requestUnsuccessful
 * @constant
 * @type {number}
 */
export
const requestUnsuccessful: PTCListManagementType = PTCListManagementType.requestUnsuccessful; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_PTCListManagementType: $.ASN1Decoder<PTCListManagementType> = $._decodeEnumerated;
export const _encode_PTCListManagementType: $.ASN1Encoder<PTCListManagementType> = $._encodeEnumerated;


/* eslint-enable */
