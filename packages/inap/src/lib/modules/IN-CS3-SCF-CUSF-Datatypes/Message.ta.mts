/* eslint-disable */
import { ASN1Element as _Element, ASN1ConstructionError as _ConstructionError } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Message
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Message  ::=  ENUMERATED {rELease(77), rELeaseCOMPlete(90), fACility(98)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_Message {
    rELease = 77,
    rELeaseCOMPlete = 90,
    fACility = 98,
}

/**
 * @summary Message
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Message  ::=  ENUMERATED {rELease(77), rELeaseCOMPlete(90), fACility(98)}
 * ```
 * 
 * @enum {number}
 */
export
type Message = _enum_for_Message;

/**
 * @summary Message
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Message  ::=  ENUMERATED {rELease(77), rELeaseCOMPlete(90), fACility(98)}
 * ```
 * 
 * @enum {number}
 */
export
const Message = _enum_for_Message;

/**
 * @summary Message_rELease
 * @constant
 * @type {number}
 */
export
const Message_rELease = Message.rELease satisfies Message; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rELease
 * @constant
 * @type {number}
 */
export
const rELease = Message.rELease satisfies Message; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Message_rELeaseCOMPlete
 * @constant
 * @type {number}
 */
export
const Message_rELeaseCOMPlete = Message.rELeaseCOMPlete satisfies Message; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rELeaseCOMPlete
 * @constant
 * @type {number}
 */
export
const rELeaseCOMPlete = Message.rELeaseCOMPlete satisfies Message; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Message_fACility
 * @constant
 * @type {number}
 */
export
const Message_fACility = Message.fACility satisfies Message; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary fACility
 * @constant
 * @type {number}
 */
export
const fACility = Message.fACility satisfies Message; /* SHORT_NAMED_ENUMERATED_VALUE */

export
function _decode_Message(el: _Element): Message {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case Message.rELease: return Message.rELease;
        case Message.rELeaseCOMPlete: return Message.rELeaseCOMPlete;
        case Message.fACility: return Message.fACility;
        default:
            throw new _ConstructionError(
                "Invalid ENUMERATED value " + enumerated + " for Message.",
                el,
            );
    }
}

export
const _encode_Message: $.ASN1Encoder<Message> = $._encodeEnumerated as $.ASN1Encoder<Message>;

/* eslint-enable */
