/* eslint-disable */
import { ASN1Element as _Element, ASN1ConstructionError as _ConstructionError } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ConsumedCreditAction
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConsumedCreditAction  ::=  ENUMERATED {disconnect(0), message(1), tone(2)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ConsumedCreditAction {
    disconnect = 0,
    message = 1,
    tone = 2,
}

/**
 * @summary ConsumedCreditAction
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConsumedCreditAction  ::=  ENUMERATED {disconnect(0), message(1), tone(2)}
 * ```
 * 
 * @enum {number}
 */
export
type ConsumedCreditAction = _enum_for_ConsumedCreditAction;

/**
 * @summary ConsumedCreditAction
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConsumedCreditAction  ::=  ENUMERATED {disconnect(0), message(1), tone(2)}
 * ```
 * 
 * @enum {number}
 */
export
const ConsumedCreditAction: typeof _enum_for_ConsumedCreditAction = _enum_for_ConsumedCreditAction;

/**
 * @summary ConsumedCreditAction_disconnect
 * @constant
 * @type {number}
 */
export
const ConsumedCreditAction_disconnect: _enum_for_ConsumedCreditAction.disconnect = ConsumedCreditAction.disconnect; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary disconnect
 * @constant
 * @type {number}
 */
export
const disconnect: _enum_for_ConsumedCreditAction.disconnect = ConsumedCreditAction.disconnect; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ConsumedCreditAction_message
 * @constant
 * @type {number}
 */
export
const ConsumedCreditAction_message: _enum_for_ConsumedCreditAction.message = ConsumedCreditAction.message; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary message
 * @constant
 * @type {number}
 */
export
const message: _enum_for_ConsumedCreditAction.message = ConsumedCreditAction.message; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ConsumedCreditAction_tone
 * @constant
 * @type {number}
 */
export
const ConsumedCreditAction_tone: _enum_for_ConsumedCreditAction.tone = ConsumedCreditAction.tone; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tone
 * @constant
 * @type {number}
 */
export
const tone: _enum_for_ConsumedCreditAction.tone = ConsumedCreditAction.tone; /* SHORT_NAMED_ENUMERATED_VALUE */

export
function _decode_ConsumedCreditAction(el: _Element): ConsumedCreditAction {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case ConsumedCreditAction.disconnect: return ConsumedCreditAction.disconnect;
        case ConsumedCreditAction.message: return ConsumedCreditAction.message;
        case ConsumedCreditAction.tone: return ConsumedCreditAction.tone;
        default:
            throw new _ConstructionError(
                "Invalid ENUMERATED value " + enumerated + " for ConsumedCreditAction.",
                el,
            );
    }
}

export
const _encode_ConsumedCreditAction: $.ASN1Encoder<ConsumedCreditAction> = $._encodeEnumerated as $.ASN1Encoder<ConsumedCreditAction>;

/* eslint-enable */
