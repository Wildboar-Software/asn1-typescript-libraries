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
const ComponentType_any_ = ComponentType.any_ satisfies ComponentType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary any_
 * @constant
 * @type {number}
 */
export
const any_ = ComponentType.any_ satisfies ComponentType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ComponentType_invoke
 * @constant
 * @type {number}
 */
export
const ComponentType_invoke = ComponentType.invoke satisfies ComponentType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invoke
 * @constant
 * @type {number}
 */
export
const invoke = ComponentType.invoke satisfies ComponentType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ComponentType_rResult
 * @constant
 * @type {number}
 */
export
const ComponentType_rResult = ComponentType.rResult satisfies ComponentType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rResult
 * @constant
 * @type {number}
 */
export
const rResult = ComponentType.rResult satisfies ComponentType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ComponentType_rError
 * @constant
 * @type {number}
 */
export
const ComponentType_rError = ComponentType.rError satisfies ComponentType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rError
 * @constant
 * @type {number}
 */
export
const rError = ComponentType.rError satisfies ComponentType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ComponentType_rReject
 * @constant
 * @type {number}
 */
export
const ComponentType_rReject = ComponentType.rReject satisfies ComponentType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rReject
 * @constant
 * @type {number}
 */
export
const rReject = ComponentType.rReject satisfies ComponentType; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_ComponentType = $._decodeEnumerated;
export const _encode_ComponentType = $._encodeEnumerated;


/* eslint-enable */
