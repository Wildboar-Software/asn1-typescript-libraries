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
const ComponentType_any_: ComponentType = ComponentType.any_; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary any_
 * @constant
 * @type {number}
 */
export
const any_: ComponentType = ComponentType.any_; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ComponentType_invoke
 * @constant
 * @type {number}
 */
export
const ComponentType_invoke: ComponentType = ComponentType.invoke; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invoke
 * @constant
 * @type {number}
 */
export
const invoke: ComponentType = ComponentType.invoke; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ComponentType_rResult
 * @constant
 * @type {number}
 */
export
const ComponentType_rResult: ComponentType = ComponentType.rResult; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rResult
 * @constant
 * @type {number}
 */
export
const rResult: ComponentType = ComponentType.rResult; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ComponentType_rError
 * @constant
 * @type {number}
 */
export
const ComponentType_rError: ComponentType = ComponentType.rError; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rError
 * @constant
 * @type {number}
 */
export
const rError: ComponentType = ComponentType.rError; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ComponentType_rReject
 * @constant
 * @type {number}
 */
export
const ComponentType_rReject: ComponentType = ComponentType.rReject; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rReject
 * @constant
 * @type {number}
 */
export
const rReject: ComponentType = ComponentType.rReject; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_ComponentType = $._decodeEnumerated;
export const _encode_ComponentType = $._encodeEnumerated;


/* eslint-enable */
