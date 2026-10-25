/* eslint-disable */
import { ASN1Element as _Element, ASN1ConstructionError as _ConstructionError } from "@wildboar/asn1";
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
const ActionIndicator_activate = ActionIndicator.activate; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary activate
 * @constant
 * @type {number}
 */
export
const activate = ActionIndicator.activate; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActionIndicator_deactivate
 * @constant
 * @type {number}
 */
export
const ActionIndicator_deactivate = ActionIndicator.deactivate; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary deactivate
 * @constant
 * @type {number}
 */
export
const deactivate = ActionIndicator.deactivate; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActionIndicator_retrieve
 * @constant
 * @type {number}
 */
export
const ActionIndicator_retrieve = ActionIndicator.retrieve; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary retrieve
 * @constant
 * @type {number}
 */
export
const retrieve = ActionIndicator.retrieve; /* SHORT_NAMED_ENUMERATED_VALUE */

export
function _decode_ActionIndicator(el: _Element): ActionIndicator {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case ActionIndicator.activate: return ActionIndicator.activate;
        case ActionIndicator.deactivate: return ActionIndicator.deactivate;
        case ActionIndicator.retrieve: return ActionIndicator.retrieve;
        default:
            throw new _ConstructionError(
                "Invalid ENUMERATED value " + enumerated + " for ActionIndicator.",
                el,
            );
    }
}

export
const _encode_ActionIndicator: $.ASN1Encoder<ActionIndicator> = $._encodeEnumerated as $.ASN1Encoder<ActionIndicator>;

/* eslint-enable */
