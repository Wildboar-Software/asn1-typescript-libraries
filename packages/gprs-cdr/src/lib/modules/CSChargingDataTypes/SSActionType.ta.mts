/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SSActionType
 * @description
 *
 * Supplementary-service action requested by the subscriber: registration,
 * erasure, activation, deactivation, interrogation, invocation, or password
 * registration. The field may be absent for USSD, which is non-standard
 * (clause 6.1.3.9). Call-related actions can be recorded in the call CDR
 * instead of, or as well as, an `SSActionRecord` (clause 5.1.3.3).
 *
 * 3GPP TS 32.250 V19.0.0 clauses 5.1.3.3 and 6.1.3.9.
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
 * Supplementary-service action requested by the subscriber: registration,
 * erasure, activation, deactivation, interrogation, invocation, or password
 * registration. The field may be absent for USSD, which is non-standard
 * (clause 6.1.3.9). Call-related actions can be recorded in the call CDR
 * instead of, or as well as, an `SSActionRecord` (clause 5.1.3.3).
 *
 * 3GPP TS 32.250 V19.0.0 clauses 5.1.3.3 and 6.1.3.9.
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
 * Supplementary-service action requested by the subscriber: registration,
 * erasure, activation, deactivation, interrogation, invocation, or password
 * registration. The field may be absent for USSD, which is non-standard
 * (clause 6.1.3.9). Call-related actions can be recorded in the call CDR
 * instead of, or as well as, an `SSActionRecord` (clause 5.1.3.3).
 *
 * 3GPP TS 32.250 V19.0.0 clauses 5.1.3.3 and 6.1.3.9.
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
 * @description
 *
 * Registration of a supplementary service, typically subscriber-controlled
 * input and therefore a non-call-related `SSActionRecord`. 3GPP TS 32.250
 * V19.0.0 clauses 5.1.3.3 and 6.1.3.9.
 *
 * @constant
 * @type {number}
 */
export
const SSActionType_registration: SSActionType = SSActionType.registration; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary registration
 * @description
 *
 * Registration of a supplementary service, typically subscriber-controlled
 * input and therefore a non-call-related `SSActionRecord`. 3GPP TS 32.250
 * V19.0.0 clauses 5.1.3.3 and 6.1.3.9.
 *
 * @constant
 * @type {number}
 */
export
const registration: SSActionType = SSActionType.registration; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SSActionType_erasure
 * @description
 *
 * Erasure of a supplementary service. 3GPP TS 32.250 V19.0.0 clause 6.1.3.9.
 *
 * @constant
 * @type {number}
 */
export
const SSActionType_erasure: SSActionType = SSActionType.erasure; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary erasure
 * @description
 *
 * Erasure of a supplementary service. 3GPP TS 32.250 V19.0.0 clause 6.1.3.9.
 *
 * @constant
 * @type {number}
 */
export
const erasure: SSActionType = SSActionType.erasure; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SSActionType_activation
 * @description
 *
 * Activation of a supplementary service. 3GPP TS 32.250 V19.0.0 clause
 * 6.1.3.9.
 *
 * @constant
 * @type {number}
 */
export
const SSActionType_activation: SSActionType = SSActionType.activation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary activation
 * @description
 *
 * Activation of a supplementary service. 3GPP TS 32.250 V19.0.0 clause
 * 6.1.3.9.
 *
 * @constant
 * @type {number}
 */
export
const activation: SSActionType = SSActionType.activation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SSActionType_deactivation
 * @description
 *
 * Deactivation of a supplementary service. 3GPP TS 32.250 V19.0.0 clause
 * 6.1.3.9.
 *
 * @constant
 * @type {number}
 */
export
const SSActionType_deactivation: SSActionType = SSActionType.deactivation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary deactivation
 * @description
 *
 * Deactivation of a supplementary service. 3GPP TS 32.250 V19.0.0 clause
 * 6.1.3.9.
 *
 * @constant
 * @type {number}
 */
export
const deactivation: SSActionType = SSActionType.deactivation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SSActionType_interrogation
 * @description
 *
 * Interrogation of a supplementary service. 3GPP TS 32.250 V19.0.0 clause
 * 6.1.3.9.
 *
 * @constant
 * @type {number}
 */
export
const SSActionType_interrogation: SSActionType = SSActionType.interrogation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary interrogation
 * @description
 *
 * Interrogation of a supplementary service. 3GPP TS 32.250 V19.0.0 clause
 * 6.1.3.9.
 *
 * @constant
 * @type {number}
 */
export
const interrogation: SSActionType = SSActionType.interrogation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SSActionType_invocation
 * @description
 *
 * Invocation of a supplementary service. Call-related invocation may instead
 * be recorded in the MOC or MTC. Call hold and multi-party are recorded this
 * way when a separate SS-action record is configured. 3GPP TS 32.250 V19.0.0
 * clauses 5.1.3.3, 5.1.3.5, and 6.1.3.9.
 *
 * @constant
 * @type {number}
 */
export
const SSActionType_invocation: SSActionType = SSActionType.invocation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invocation
 * @description
 *
 * Invocation of a supplementary service. Call-related invocation may instead
 * be recorded in the MOC or MTC. Call hold and multi-party are recorded this
 * way when a separate SS-action record is configured. 3GPP TS 32.250 V19.0.0
 * clauses 5.1.3.3, 5.1.3.5, and 6.1.3.9.
 *
 * @constant
 * @type {number}
 */
export
const invocation: SSActionType = SSActionType.invocation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SSActionType_passwordRegistration
 * @description
 *
 * Registration of the supplementary-service password. 3GPP TS 32.250 V19.0.0
 * clause 6.1.3.9.
 *
 * @constant
 * @type {number}
 */
export
const SSActionType_passwordRegistration: SSActionType = SSActionType.passwordRegistration; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary passwordRegistration
 * @description
 *
 * Registration of the supplementary-service password. 3GPP TS 32.250 V19.0.0
 * clause 6.1.3.9.
 *
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
