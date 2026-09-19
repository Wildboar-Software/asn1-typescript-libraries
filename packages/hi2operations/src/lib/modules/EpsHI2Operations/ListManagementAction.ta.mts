/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
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
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ListManagementAction  ::=  ENUMERATED
 * {
 *  create (1),
 *  modify (2),
 *  retrieve (3),
 *  delete (4),
 *  notify (5),
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
 * @constant
 * @type {number}
 */
export
const ListManagementAction_create: ListManagementAction = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary create
 * @constant
 * @type {number}
 */
export
const create: ListManagementAction = ListManagementAction_create; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ListManagementAction_modify
 * @constant
 * @type {number}
 */
export
const ListManagementAction_modify: ListManagementAction = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary modify
 * @constant
 * @type {number}
 */
export
const modify: ListManagementAction = ListManagementAction_modify; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ListManagementAction_retrieve
 * @constant
 * @type {number}
 */
export
const ListManagementAction_retrieve: ListManagementAction = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary retrieve
 * @constant
 * @type {number}
 */
export
const retrieve: ListManagementAction = ListManagementAction_retrieve; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ListManagementAction_delete_
 * @constant
 * @type {number}
 */
export
const ListManagementAction_delete_: ListManagementAction = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary delete_
 * @constant
 * @type {number}
 */
export
const delete_: ListManagementAction = ListManagementAction_delete_; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ListManagementAction_notify
 * @constant
 * @type {number}
 */
export
const ListManagementAction_notify: ListManagementAction = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notify
 * @constant
 * @type {number}
 */
export
const notify: ListManagementAction = ListManagementAction_notify; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_ListManagementAction: $.ASN1Decoder<ListManagementAction> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ListManagementAction
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ListManagementAction (el: _Element): ListManagementAction {
    if (!_cached_decoder_for_ListManagementAction) { _cached_decoder_for_ListManagementAction = $._decodeEnumerated; }
    return _cached_decoder_for_ListManagementAction(el);
}

let _cached_encoder_for_ListManagementAction: $.ASN1Encoder<ListManagementAction> | null = null;

/**
 * @summary Encodes a(n) ListManagementAction into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ListManagementAction, encoded as an ASN.1 Element.
 */
export
function _encode_ListManagementAction (value: ListManagementAction, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ListManagementAction) { _cached_encoder_for_ListManagementAction = $._encodeEnumerated; }
    return _cached_encoder_for_ListManagementAction(value, elGetter);
}


/* eslint-enable */
