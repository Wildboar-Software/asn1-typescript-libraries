/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PTCListManagementAction
 * @description
 * 
 * Identifies the action requested by the PTC target to the contact lists or PTC
 * group list(s). Report when PTC target attempts changes to his contact list or
 * PTC group list(s): a) Create b) Modify c) Retrieve d) Delete e) Notify Also
 * report when a notification is sent to the PTC target due to changes occurring
 * to his contact list or PTC group list(s).
 *
 * 3GPP TS 33.128, clause 7.5.2.17.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCListManagementAction   ::=  ENUMERATED
 * {
 *     create(1),
 *     modify(2),
 *     retrieve(3),
 *     delete(4),
 *     notify(5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_PTCListManagementAction {
    create = 1,
    modify = 2,
    retrieve = 3,
    delete_ = 4,
    notify = 5,
}

/**
 * @summary PTCListManagementAction
 * @description
 * 
 * Identifies the action requested by the PTC target to the contact lists or PTC
 * group list(s). Report when PTC target attempts changes to his contact list or
 * PTC group list(s): a) Create b) Modify c) Retrieve d) Delete e) Notify Also
 * report when a notification is sent to the PTC target due to changes occurring
 * to his contact list or PTC group list(s).
 *
 * 3GPP TS 33.128, clause 7.5.2.17.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCListManagementAction   ::=  ENUMERATED
 * {
 *     create(1),
 *     modify(2),
 *     retrieve(3),
 *     delete(4),
 *     notify(5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type PTCListManagementAction = _enum_for_PTCListManagementAction;

/**
 * @summary PTCListManagementAction
 * @description
 * 
 * Identifies the action requested by the PTC target to the contact lists or PTC
 * group list(s). Report when PTC target attempts changes to his contact list or
 * PTC group list(s): a) Create b) Modify c) Retrieve d) Delete e) Notify Also
 * report when a notification is sent to the PTC target due to changes occurring
 * to his contact list or PTC group list(s).
 *
 * 3GPP TS 33.128, clause 7.5.2.17.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCListManagementAction   ::=  ENUMERATED
 * {
 *     create(1),
 *     modify(2),
 *     retrieve(3),
 *     delete(4),
 *     notify(5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const PTCListManagementAction = _enum_for_PTCListManagementAction;

/**
 * @summary PTCListManagementAction_create
 * @constant
 * @type {number}
 */
export
const PTCListManagementAction_create = PTCListManagementAction.create; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary create
 * @constant
 * @type {number}
 */
export
const create = PTCListManagementAction.create; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCListManagementAction_modify
 * @constant
 * @type {number}
 */
export
const PTCListManagementAction_modify = PTCListManagementAction.modify; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary modify
 * @constant
 * @type {number}
 */
export
const modify = PTCListManagementAction.modify; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCListManagementAction_retrieve
 * @constant
 * @type {number}
 */
export
const PTCListManagementAction_retrieve = PTCListManagementAction.retrieve; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary retrieve
 * @constant
 * @type {number}
 */
export
const retrieve = PTCListManagementAction.retrieve; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCListManagementAction_delete_
 * @constant
 * @type {number}
 */
export
const PTCListManagementAction_delete_ = PTCListManagementAction.delete_; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary delete_
 * @constant
 * @type {number}
 */
export
const delete_ = PTCListManagementAction.delete_; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCListManagementAction_notify
 * @constant
 * @type {number}
 */
export
const PTCListManagementAction_notify = PTCListManagementAction.notify; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notify
 * @constant
 * @type {number}
 */
export
const notify = PTCListManagementAction.notify; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_PTCListManagementAction: $.ASN1Decoder<PTCListManagementAction> = $._decodeEnumerated;
export const _encode_PTCListManagementAction: $.ASN1Encoder<PTCListManagementAction> = $._encodeEnumerated;


/* eslint-enable */
