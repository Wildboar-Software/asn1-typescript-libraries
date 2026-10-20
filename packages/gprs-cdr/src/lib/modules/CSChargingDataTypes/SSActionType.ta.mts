/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SSActionType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SSActionType  ::=  ENUMERATED {
 *    registration            ( 0 ),
 *    erasure                 ( 1 ),
 *    activation              ( 2 ),
 *    deactivation            ( 3 ),
 *    interrogation           ( 4 ),
 *    invocation              ( 5 ),
 *    passwordRegistration    ( 6 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_SSActionType {
    registration = 0,
    erasure = 1,
    activation = 2,
    deactivation = 3,
    interrogation = 4,
    invocation = 5,
    passwordRegistration = 6,
}

/**
 * @summary SSActionType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SSActionType  ::=  ENUMERATED {
 *    registration            ( 0 ),
 *    erasure                 ( 1 ),
 *    activation              ( 2 ),
 *    deactivation            ( 3 ),
 *    interrogation           ( 4 ),
 *    invocation              ( 5 ),
 *    passwordRegistration    ( 6 ) }
 * ```
 * 
 * @enum {number}
 */
export
type SSActionType = _enum_for_SSActionType;

/**
 * @summary SSActionType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SSActionType  ::=  ENUMERATED {
 *    registration            ( 0 ),
 *    erasure                 ( 1 ),
 *    activation              ( 2 ),
 *    deactivation            ( 3 ),
 *    interrogation           ( 4 ),
 *    invocation              ( 5 ),
 *    passwordRegistration    ( 6 ) }
 * ```
 * 
 * @enum {number}
 */
export
const SSActionType = _enum_for_SSActionType;

/**
 * @summary SSActionType_registration
 * @constant
 * @type {number}
 */
export
const SSActionType_registration: SSActionType = SSActionType.registration; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary registration
 * @constant
 * @type {number}
 */
export
const registration: SSActionType = SSActionType.registration; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SSActionType_erasure
 * @constant
 * @type {number}
 */
export
const SSActionType_erasure: SSActionType = SSActionType.erasure; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary erasure
 * @constant
 * @type {number}
 */
export
const erasure: SSActionType = SSActionType.erasure; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SSActionType_activation
 * @constant
 * @type {number}
 */
export
const SSActionType_activation: SSActionType = SSActionType.activation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary activation
 * @constant
 * @type {number}
 */
export
const activation: SSActionType = SSActionType.activation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SSActionType_deactivation
 * @constant
 * @type {number}
 */
export
const SSActionType_deactivation: SSActionType = SSActionType.deactivation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary deactivation
 * @constant
 * @type {number}
 */
export
const deactivation: SSActionType = SSActionType.deactivation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SSActionType_interrogation
 * @constant
 * @type {number}
 */
export
const SSActionType_interrogation: SSActionType = SSActionType.interrogation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary interrogation
 * @constant
 * @type {number}
 */
export
const interrogation: SSActionType = SSActionType.interrogation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SSActionType_invocation
 * @constant
 * @type {number}
 */
export
const SSActionType_invocation: SSActionType = SSActionType.invocation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invocation
 * @constant
 * @type {number}
 */
export
const invocation: SSActionType = SSActionType.invocation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SSActionType_passwordRegistration
 * @constant
 * @type {number}
 */
export
const SSActionType_passwordRegistration: SSActionType = SSActionType.passwordRegistration; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary passwordRegistration
 * @constant
 * @type {number}
 */
export
const passwordRegistration: SSActionType = SSActionType.passwordRegistration; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_SSActionType: $.ASN1Decoder<SSActionType> = $._decodeEnumerated;

export
const _encode_SSActionType: $.ASN1Encoder<SSActionType> = $._encodeEnumerated;

/* eslint-enable */
