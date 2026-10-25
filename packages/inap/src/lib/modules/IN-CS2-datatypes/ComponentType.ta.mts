/* eslint-disable */
import { ASN1Element as _Element, ASN1ConstructionError as _ConstructionError } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ComponentType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ComponentType  ::=  ENUMERATED {
 *   any(0), invoke(1), rResult(2), rError(3), rReject(4)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ComponentType {
    any_ = 0,
    invoke = 1,
    rResult = 2,
    rError = 3,
    rReject = 4,
}

/**
 * @summary ComponentType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ComponentType  ::=  ENUMERATED {
 *   any(0), invoke(1), rResult(2), rError(3), rReject(4)}
 * ```
 * 
 * @enum {number}
 */
export
type ComponentType = _enum_for_ComponentType;

/**
 * @summary ComponentType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ComponentType  ::=  ENUMERATED {
 *   any(0), invoke(1), rResult(2), rError(3), rReject(4)}
 * ```
 * 
 * @enum {number}
 */
export
const ComponentType = _enum_for_ComponentType;

/**
 * @summary ComponentType_any_
 * @constant
 * @type {number}
 */
export
const ComponentType_any_ = ComponentType.any_; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary any_
 * @constant
 * @type {number}
 */
export
const any_ = ComponentType.any_; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ComponentType_invoke
 * @constant
 * @type {number}
 */
export
const ComponentType_invoke = ComponentType.invoke; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invoke
 * @constant
 * @type {number}
 */
export
const invoke = ComponentType.invoke; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ComponentType_rResult
 * @constant
 * @type {number}
 */
export
const ComponentType_rResult = ComponentType.rResult; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rResult
 * @constant
 * @type {number}
 */
export
const rResult = ComponentType.rResult; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ComponentType_rError
 * @constant
 * @type {number}
 */
export
const ComponentType_rError = ComponentType.rError; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rError
 * @constant
 * @type {number}
 */
export
const rError = ComponentType.rError; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ComponentType_rReject
 * @constant
 * @type {number}
 */
export
const ComponentType_rReject = ComponentType.rReject; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rReject
 * @constant
 * @type {number}
 */
export
const rReject = ComponentType.rReject; /* SHORT_NAMED_ENUMERATED_VALUE */

export
function _decode_ComponentType(el: _Element): ComponentType {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case ComponentType.any_: return ComponentType.any_;
        case ComponentType.invoke: return ComponentType.invoke;
        case ComponentType.rResult: return ComponentType.rResult;
        case ComponentType.rError: return ComponentType.rError;
        case ComponentType.rReject: return ComponentType.rReject;
        default:
            throw new _ConstructionError(
                "Invalid ENUMERATED value " + enumerated + " for ComponentType.",
                el,
            );
    }
}

export
const _encode_ComponentType: $.ASN1Encoder<ComponentType> = $._encodeEnumerated as $.ASN1Encoder<ComponentType>;

/* eslint-enable */
