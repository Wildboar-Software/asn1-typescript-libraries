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
const ListManagementAction_create: _enum_for_ListManagementAction.create = _enum_for_ListManagementAction.create; /* LONG_NAMED_ENUMERATED_VALUE */

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
const create: _enum_for_ListManagementAction.create = ListManagementAction_create; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const ListManagementAction_modify: _enum_for_ListManagementAction.modify = _enum_for_ListManagementAction.modify; /* LONG_NAMED_ENUMERATED_VALUE */

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
const modify: _enum_for_ListManagementAction.modify = ListManagementAction_modify; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const ListManagementAction_retrieve: _enum_for_ListManagementAction.retrieve = _enum_for_ListManagementAction.retrieve; /* LONG_NAMED_ENUMERATED_VALUE */

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
const retrieve: _enum_for_ListManagementAction.retrieve = ListManagementAction_retrieve; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const ListManagementAction_delete_: _enum_for_ListManagementAction.delete_ = _enum_for_ListManagementAction.delete_; /* LONG_NAMED_ENUMERATED_VALUE */

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
const delete_: _enum_for_ListManagementAction.delete_ = ListManagementAction_delete_; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const ListManagementAction_notify: _enum_for_ListManagementAction.notify = _enum_for_ListManagementAction.notify; /* LONG_NAMED_ENUMERATED_VALUE */

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
const notify: _enum_for_ListManagementAction.notify = ListManagementAction_notify; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_ListManagementAction: $.ASN1Decoder<ListManagementAction> = $._decodeEnumerated;
export const _encode_ListManagementAction: $.ASN1Encoder<ListManagementAction> = $._encodeEnumerated;


/* eslint-enable */
