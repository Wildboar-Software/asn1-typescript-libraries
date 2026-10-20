/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ActionIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ActionIndicator  ::=  ENUMERATED {activate(1), deactivate(2), retrieve(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ActionIndicator {
    activate = 1,
    deactivate = 2,
    retrieve = 3,
}

/**
 * @summary ActionIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ActionIndicator  ::=  ENUMERATED {activate(1), deactivate(2), retrieve(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type ActionIndicator = _enum_for_ActionIndicator;

/**
 * @summary ActionIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ActionIndicator  ::=  ENUMERATED {activate(1), deactivate(2), retrieve(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const ActionIndicator = _enum_for_ActionIndicator;

/**
 * @summary ActionIndicator_activate
 * @constant
 * @type {number}
 */
export
const ActionIndicator_activate: ActionIndicator = ActionIndicator.activate; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary activate
 * @constant
 * @type {number}
 */
export
const activate: ActionIndicator = ActionIndicator.activate; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActionIndicator_deactivate
 * @constant
 * @type {number}
 */
export
const ActionIndicator_deactivate: ActionIndicator = ActionIndicator.deactivate; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary deactivate
 * @constant
 * @type {number}
 */
export
const deactivate: ActionIndicator = ActionIndicator.deactivate; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActionIndicator_retrieve
 * @constant
 * @type {number}
 */
export
const ActionIndicator_retrieve: ActionIndicator = ActionIndicator.retrieve; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary retrieve
 * @constant
 * @type {number}
 */
export
const retrieve: ActionIndicator = ActionIndicator.retrieve; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_ActionIndicator: $.ASN1Decoder<ActionIndicator> = $._decodeEnumerated;

export
const _encode_ActionIndicator: $.ASN1Encoder<ActionIndicator> = $._encodeEnumerated;

/* eslint-enable */
