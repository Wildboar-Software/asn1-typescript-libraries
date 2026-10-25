/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_ListManagementAction {
    create = 1,
    modify = 2,
    retrieve = 3,
    delete_ = 4,
    notify = 5,
}

/**
 * @summary ListManagementAction
 * @description
 * 
 * What the PTC target did to a contact list or a group list, or the
 * notification the network sent about such a list (table 17.2.17). Conditional
 * on the list-management report. 3GPP TS 33.108
 * (https://www.3gpp.org/DynaReport/33108.htm).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ListManagementAction     ::=  ENUMERATED
 * {
 *     create         (1),
 *     modify         (2),
 *     retrieve     (3),
 *     delete         (4),
 *     notify         (5),
 * ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type ListManagementAction = _enum_for_ListManagementAction | ENUMERATED;

/**
 * @summary ListManagementAction_create
 * @description
 * 
 * Create a contact or group list (table 17.2.17).
 * 
 * @constant
 * @type {number}
 */
export
const ListManagementAction_create: ListManagementAction = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary create
 * @description
 * 
 * Create a list (clause 17.2.17).
 * 
 * @constant
 * @type {number}
 */
export
const create: ListManagementAction = ListManagementAction_create; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ListManagementAction_modify
 * @description
 * 
 * Modify a contact or group list (table 17.2.17).
 * 
 * @constant
 * @type {number}
 */
export
const ListManagementAction_modify: ListManagementAction = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary modify
 * @description
 * 
 * Modify a list (clause 17.2.17).
 * 
 * @constant
 * @type {number}
 */
export
const modify: ListManagementAction = ListManagementAction_modify; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ListManagementAction_retrieve
 * @description
 * 
 * Retrieve a contact or group list (table 17.2.17).
 * 
 * @constant
 * @type {number}
 */
export
const ListManagementAction_retrieve: ListManagementAction = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary retrieve
 * @description
 * 
 * Retrieve a list (clause 17.2.17).
 * 
 * @constant
 * @type {number}
 */
export
const retrieve: ListManagementAction = ListManagementAction_retrieve; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ListManagementAction_delete_
 * @description
 * 
 * Delete a contact or group list (table 17.2.17).
 * 
 * @constant
 * @type {number}
 */
export
const ListManagementAction_delete_: ListManagementAction = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary delete_
 * @description
 * 
 * Delete a list (clause 17.2.17).
 * 
 * @constant
 * @type {number}
 */
export
const delete_: ListManagementAction = ListManagementAction_delete_; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ListManagementAction_notify
 * @description
 * 
 * The network notified the target of a change to a contact list or a group list
 * (table 17.2.17).
 * 
 * @constant
 * @type {number}
 */
export
const ListManagementAction_notify: ListManagementAction = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notify
 * @description
 * 
 * Network notification of a list change (clause 17.2.17).
 * 
 * @constant
 * @type {number}
 */
export
const notify: ListManagementAction = ListManagementAction_notify; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_ListManagementAction: $.ASN1Decoder<ListManagementAction> = $._decodeEnumerated;
export const _encode_ListManagementAction: $.ASN1Encoder<ListManagementAction> = $._encodeEnumerated;


/* eslint-enable */
