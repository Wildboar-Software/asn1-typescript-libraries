/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ForwardingCondition
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ForwardingCondition  ::=  ENUMERATED {busy(0), noanswer(1), any(2)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ForwardingCondition {
    busy = 0,
    noanswer = 1,
    any_ = 2,
}

/**
 * @summary ForwardingCondition
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ForwardingCondition  ::=  ENUMERATED {busy(0), noanswer(1), any(2)}
 * ```
 * 
 * @enum {number}
 */
export
type ForwardingCondition = _enum_for_ForwardingCondition;

/**
 * @summary ForwardingCondition
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ForwardingCondition  ::=  ENUMERATED {busy(0), noanswer(1), any(2)}
 * ```
 * 
 * @enum {number}
 */
export
const ForwardingCondition = _enum_for_ForwardingCondition;

/**
 * @summary ForwardingCondition_busy
 * @constant
 * @type {number}
 */
export
const ForwardingCondition_busy: ForwardingCondition = ForwardingCondition.busy; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary busy
 * @constant
 * @type {number}
 */
export
const busy: ForwardingCondition = ForwardingCondition.busy; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ForwardingCondition_noanswer
 * @constant
 * @type {number}
 */
export
const ForwardingCondition_noanswer: ForwardingCondition = ForwardingCondition.noanswer; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noanswer
 * @constant
 * @type {number}
 */
export
const noanswer: ForwardingCondition = ForwardingCondition.noanswer; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ForwardingCondition_any_
 * @constant
 * @type {number}
 */
export
const ForwardingCondition_any_: ForwardingCondition = ForwardingCondition.any_; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary any_
 * @constant
 * @type {number}
 */
export
const any_: ForwardingCondition = ForwardingCondition.any_; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_ForwardingCondition = $._decodeEnumerated;
export const _encode_ForwardingCondition = $._encodeEnumerated;


/* eslint-enable */
