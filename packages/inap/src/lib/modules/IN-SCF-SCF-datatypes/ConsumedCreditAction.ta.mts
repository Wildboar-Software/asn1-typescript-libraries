/* eslint-disable */
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
const ConsumedCreditAction = _enum_for_ConsumedCreditAction;

/**
 * @summary ConsumedCreditAction_disconnect
 * @constant
 * @type {number}
 */
export
const ConsumedCreditAction_disconnect: ConsumedCreditAction = ConsumedCreditAction.disconnect; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary disconnect
 * @constant
 * @type {number}
 */
export
const disconnect: ConsumedCreditAction = ConsumedCreditAction.disconnect; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ConsumedCreditAction_message
 * @constant
 * @type {number}
 */
export
const ConsumedCreditAction_message: ConsumedCreditAction = ConsumedCreditAction.message; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary message
 * @constant
 * @type {number}
 */
export
const message: ConsumedCreditAction = ConsumedCreditAction.message; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ConsumedCreditAction_tone
 * @constant
 * @type {number}
 */
export
const ConsumedCreditAction_tone: ConsumedCreditAction = ConsumedCreditAction.tone; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tone
 * @constant
 * @type {number}
 */
export
const tone: ConsumedCreditAction = ConsumedCreditAction.tone; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_ConsumedCreditAction: $.ASN1Decoder<ConsumedCreditAction> = $._decodeEnumerated;

export
const _encode_ConsumedCreditAction: $.ASN1Encoder<ConsumedCreditAction> = $._encodeEnumerated;

/* eslint-enable */
