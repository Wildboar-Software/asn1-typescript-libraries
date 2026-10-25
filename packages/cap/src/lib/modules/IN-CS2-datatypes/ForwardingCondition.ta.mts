/* eslint-disable */
import {
    type ASN1Element as _Element,
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
const ForwardingCondition: typeof _enum_for_ForwardingCondition = _enum_for_ForwardingCondition;

/**
 * @summary ForwardingCondition_busy
 * @constant
 * @type {number}
 */
export
const ForwardingCondition_busy: _enum_for_ForwardingCondition.busy = ForwardingCondition.busy; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary busy
 * @constant
 * @type {number}
 */
export
const busy: _enum_for_ForwardingCondition.busy = ForwardingCondition.busy; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ForwardingCondition_noanswer
 * @constant
 * @type {number}
 */
export
const ForwardingCondition_noanswer: _enum_for_ForwardingCondition.noanswer = ForwardingCondition.noanswer; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noanswer
 * @constant
 * @type {number}
 */
export
const noanswer: _enum_for_ForwardingCondition.noanswer = ForwardingCondition.noanswer; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ForwardingCondition_any_
 * @constant
 * @type {number}
 */
export
const ForwardingCondition_any_: _enum_for_ForwardingCondition.any_ = ForwardingCondition.any_; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary any_
 * @constant
 * @type {number}
 */
export
const any_: _enum_for_ForwardingCondition.any_ = ForwardingCondition.any_; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_ForwardingCondition: $.ASN1Decoder<number> = $._decodeEnumerated;
export const _encode_ForwardingCondition: $.ASN1Encoder<number> = $._encodeEnumerated;


/* eslint-enable */
