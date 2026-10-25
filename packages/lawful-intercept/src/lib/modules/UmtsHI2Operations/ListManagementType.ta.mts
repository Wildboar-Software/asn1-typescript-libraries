/* eslint-disable */
import {
    type ENUMERATED
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
 * Which PTC list is involved, and whether this report is the target's attempt
 * or the network's result.
 * 
 * Attempts are reported when the target's client changes a contact list or a
 * group list, including adding or removing a contact on a group. Results are
 * reported when the network notifies the target of those changes. The report is
 * sent whether the attempt succeeds or fails (clause 17.2.17).
 * 
 * 3GPP TS 33.108, clause 17.2.17 and table 17.2.17.
 * 
 * https://www.3gpp.org/DynaReport/33108.htm
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ListManagementType         ::=  ENUMERATED
 * {
 *     contactListManagementAttempt    (1),
 *     groupListManagementAttempt        (2),
 *     contactListManagementResult        (3),
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
 * The target's client is attempting to change its contact list, for example to
 * create, modify, retrieve, or delete it.
 * 
 * 3GPP TS 33.108, clause 17.2.17 and table 17.2.17.
 * @constant
 * @type {number}
 */
export
const ListManagementType_contactListManagementAttempt: _enum_for_ListManagementType.contactListManagementAttempt = _enum_for_ListManagementType.contactListManagementAttempt; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary contactListManagementAttempt
 * @description
 * 
 * The target is attempting to change its contact list (table 17.2.17).
 * @constant
 * @type {number}
 */
export
const contactListManagementAttempt: _enum_for_ListManagementType.contactListManagementAttempt = ListManagementType_contactListManagementAttempt; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ListManagementType_groupListManagementAttempt
 * @description
 * 
 * The target's client is attempting to change a PTC group list, including
 * adding or deleting a contact on that list.
 * 
 * 3GPP TS 33.108, clause 17.2.17 and table 17.2.17.
 * @constant
 * @type {number}
 */
export
const ListManagementType_groupListManagementAttempt: _enum_for_ListManagementType.groupListManagementAttempt = _enum_for_ListManagementType.groupListManagementAttempt; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary groupListManagementAttempt
 * @description
 * 
 * The target is attempting to change a PTC group list (table 17.2.17).
 * @constant
 * @type {number}
 */
export
const groupListManagementAttempt: _enum_for_ListManagementType.groupListManagementAttempt = ListManagementType_groupListManagementAttempt; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ListManagementType_contactListManagementResult
 * @description
 * 
 * The network is notifying the target of a change to the contact list.
 * 
 * 3GPP TS 33.108, table 17.2.17.
 * @constant
 * @type {number}
 */
export
const ListManagementType_contactListManagementResult: _enum_for_ListManagementType.contactListManagementResult = _enum_for_ListManagementType.contactListManagementResult; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary contactListManagementResult
 * @description
 * 
 * Network notification of a contact-list change (table 17.2.17).
 * @constant
 * @type {number}
 */
export
const contactListManagementResult: _enum_for_ListManagementType.contactListManagementResult = ListManagementType_contactListManagementResult; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ListManagementType_groupListManagementResult
 * @description
 * 
 * The network is notifying the target of a change to a PTC group list.
 * 
 * 3GPP TS 33.108, table 17.2.17.
 * @constant
 * @type {number}
 */
export
const ListManagementType_groupListManagementResult: _enum_for_ListManagementType.groupListManagementResult = _enum_for_ListManagementType.groupListManagementResult; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary groupListManagementResult
 * @description
 * 
 * Network notification of a PTC group-list change (table 17.2.17).
 * @constant
 * @type {number}
 */
export
const groupListManagementResult: _enum_for_ListManagementType.groupListManagementResult = ListManagementType_groupListManagementResult; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ListManagementType_requestSuccessful
 * @description
 * 
 * Annex B.3 names this value requestSuccessful. Table 17.2.17 lists the fifth
 * alternative as "Request unsuccessful" and says to report that alternative
 * when the network notifies the target of a list change. The specification does
 * not reconcile the two wordings.
 * 
 * 3GPP TS 33.108, table 17.2.17 and annex B.3.
 * @constant
 * @type {number}
 */
export
const ListManagementType_requestSuccessful: _enum_for_ListManagementType.requestSuccessful = _enum_for_ListManagementType.requestSuccessful; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary requestSuccessful
 * @description
 * 
 * Annex B.3 says the request succeeded; table 17.2.17's fifth choice says it
 * did not.
 * @constant
 * @type {number}
 */
export
const requestSuccessful: _enum_for_ListManagementType.requestSuccessful = ListManagementType_requestSuccessful; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_ListManagementType: $.ASN1Decoder<ListManagementType> = $._decodeEnumerated;
export const _encode_ListManagementType: $.ASN1Encoder<ListManagementType> = $._encodeEnumerated;


/* eslint-enable */
