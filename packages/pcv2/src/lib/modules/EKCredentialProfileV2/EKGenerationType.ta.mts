/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EKGenerationType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EKGenerationType  ::=  ENUMERATED {
 *     internal (0),
 *     injected (1),
 *     internalRevocable(2),
 *     injectedRevocable(3),
 *     firmwareLimited(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_EKGenerationType {
    internal = 0,
    injected = 1,
    internalRevocable = 2,
    injectedRevocable = 3,
    firmwareLimited = 4,
}

/**
 * @summary EKGenerationType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EKGenerationType  ::=  ENUMERATED {
 *     internal (0),
 *     injected (1),
 *     internalRevocable(2),
 *     injectedRevocable(3),
 *     firmwareLimited(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type EKGenerationType = _enum_for_EKGenerationType;

/**
 * @summary EKGenerationType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EKGenerationType  ::=  ENUMERATED {
 *     internal (0),
 *     injected (1),
 *     internalRevocable(2),
 *     injectedRevocable(3),
 *     firmwareLimited(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const EKGenerationType = _enum_for_EKGenerationType;

/**
 * @summary EKGenerationType_internal
 * @constant
 * @type {number}
 */
export
const EKGenerationType_internal: EKGenerationType = EKGenerationType.internal; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary internal
 * @constant
 * @type {number}
 */
export
const internal: EKGenerationType = EKGenerationType.internal; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EKGenerationType_injected
 * @constant
 * @type {number}
 */
export
const EKGenerationType_injected: EKGenerationType = EKGenerationType.injected; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary injected
 * @constant
 * @type {number}
 */
export
const injected: EKGenerationType = EKGenerationType.injected; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EKGenerationType_internalRevocable
 * @constant
 * @type {number}
 */
export
const EKGenerationType_internalRevocable: EKGenerationType = EKGenerationType.internalRevocable; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary internalRevocable
 * @constant
 * @type {number}
 */
export
const internalRevocable: EKGenerationType = EKGenerationType.internalRevocable; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EKGenerationType_injectedRevocable
 * @constant
 * @type {number}
 */
export
const EKGenerationType_injectedRevocable: EKGenerationType = EKGenerationType.injectedRevocable; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary injectedRevocable
 * @constant
 * @type {number}
 */
export
const injectedRevocable: EKGenerationType = EKGenerationType.injectedRevocable; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EKGenerationType_firmwareLimited
 * @constant
 * @type {number}
 */
export
const EKGenerationType_firmwareLimited: EKGenerationType = EKGenerationType.firmwareLimited; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary firmwareLimited
 * @constant
 * @type {number}
 */
export
const firmwareLimited: EKGenerationType = EKGenerationType.firmwareLimited; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_EKGenerationType: $.ASN1Decoder<EKGenerationType> = $._decodeEnumerated;

export
const _encode_EKGenerationType: $.ASN1Encoder<EKGenerationType> = $._encodeEnumerated;

/* eslint-enable */
