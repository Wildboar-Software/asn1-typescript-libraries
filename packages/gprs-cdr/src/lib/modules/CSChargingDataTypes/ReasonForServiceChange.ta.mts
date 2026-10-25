/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ReasonForServiceChange
 * @description
 *
 * Type of Service Change and UDI/RDI Fallback. Service-Change lets the users
 * swap an established call between multimedia and speech. Fallback selects
 * the one available service when end-to-end CS multimedia is not possible,
 * or when the network cannot signal the feature (clause 5.1.3.15). The
 * clause's editor's note says more charging detail is needed. The CDR field
 * is operator-provisionable conditional and applies to 3G. The enumerated
 * values are specified in TS 32.298 as subscriber initiated, network
 * initiated, call setup fallback, and call setup change order.
 *
 * 3GPP TS 32.250 V19.0.0 clauses 5.1.3.15 and 6.1.3.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReasonForServiceChange  ::=  ENUMERATED {
 *    msubInitiated           ( 0 ),
 *    mscInitiated            ( 1 ),
 *    callSetupFallBack       ( 2 ),
 *    callSetupChangeOrder    ( 3 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ReasonForServiceChange {
    msubInitiated = 0,
    mscInitiated = 1,
    callSetupFallBack = 2,
    callSetupChangeOrder = 3,
}

/**
 * @summary ReasonForServiceChange
 * @description
 *
 * Type of Service Change and UDI/RDI Fallback. Service-Change lets the users
 * swap an established call between multimedia and speech. Fallback selects
 * the one available service when end-to-end CS multimedia is not possible,
 * or when the network cannot signal the feature (clause 5.1.3.15). The
 * clause's editor's note says more charging detail is needed. The CDR field
 * is operator-provisionable conditional and applies to 3G. The enumerated
 * values are specified in TS 32.298 as subscriber initiated, network
 * initiated, call setup fallback, and call setup change order.
 *
 * 3GPP TS 32.250 V19.0.0 clauses 5.1.3.15 and 6.1.3.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReasonForServiceChange  ::=  ENUMERATED {
 *    msubInitiated           ( 0 ),
 *    mscInitiated            ( 1 ),
 *    callSetupFallBack       ( 2 ),
 *    callSetupChangeOrder    ( 3 ) }
 * ```
 * 
 * @enum {number}
 */
export
type ReasonForServiceChange = _enum_for_ReasonForServiceChange;

/**
 * @summary ReasonForServiceChange
 * @description
 *
 * Type of Service Change and UDI/RDI Fallback. Service-Change lets the users
 * swap an established call between multimedia and speech. Fallback selects
 * the one available service when end-to-end CS multimedia is not possible,
 * or when the network cannot signal the feature (clause 5.1.3.15). The
 * clause's editor's note says more charging detail is needed. The CDR field
 * is operator-provisionable conditional and applies to 3G. The enumerated
 * values are specified in TS 32.298 as subscriber initiated, network
 * initiated, call setup fallback, and call setup change order.
 *
 * 3GPP TS 32.250 V19.0.0 clauses 5.1.3.15 and 6.1.3.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReasonForServiceChange  ::=  ENUMERATED {
 *    msubInitiated           ( 0 ),
 *    mscInitiated            ( 1 ),
 *    callSetupFallBack       ( 2 ),
 *    callSetupChangeOrder    ( 3 ) }
 * ```
 * 
 * @enum {number}
 */
export
const ReasonForServiceChange: typeof _enum_for_ReasonForServiceChange = _enum_for_ReasonForServiceChange;

/**
 * @summary ReasonForServiceChange_msubInitiated
 * @description
 *
 * The subscriber requested the service change. TS 32.250 does not define
 * this value beyond the service-change and fallback behaviour in clause
 * 5.1.3.15. 3GPP TS 32.250 V19.0.0 clause 5.1.3.15.
 *
 * @constant
 * @type {number}
 */
export
const ReasonForServiceChange_msubInitiated: _enum_for_ReasonForServiceChange.msubInitiated = ReasonForServiceChange.msubInitiated; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary msubInitiated
 * @description
 *
 * The subscriber requested the service change. TS 32.250 does not define
 * this value beyond the service-change and fallback behaviour in clause
 * 5.1.3.15. 3GPP TS 32.250 V19.0.0 clause 5.1.3.15.
 *
 * @constant
 * @type {number}
 */
export
const msubInitiated: _enum_for_ReasonForServiceChange.msubInitiated = ReasonForServiceChange.msubInitiated; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReasonForServiceChange_mscInitiated
 * @description
 *
 * The network performed the service change. TS 32.250 does not define this
 * value beyond clause 5.1.3.15. 3GPP TS 32.250 V19.0.0 clause 5.1.3.15.
 *
 * @constant
 * @type {number}
 */
export
const ReasonForServiceChange_mscInitiated: _enum_for_ReasonForServiceChange.mscInitiated = ReasonForServiceChange.mscInitiated; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mscInitiated
 * @description
 *
 * The network performed the service change. TS 32.250 does not define this
 * value beyond clause 5.1.3.15. 3GPP TS 32.250 V19.0.0 clause 5.1.3.15.
 *
 * @constant
 * @type {number}
 */
export
const mscInitiated: _enum_for_ReasonForServiceChange.mscInitiated = ReasonForServiceChange.mscInitiated; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReasonForServiceChange_callSetupFallBack
 * @description
 *
 * Fallback at call set-up. Clause 5.1.3.15 describes fallback as selection
 * of the one available service when end-to-end CS multimedia is not
 * possible, or when the feature cannot be signalled. 3GPP TS 32.250 V19.0.0
 * clause 5.1.3.15.
 *
 * @constant
 * @type {number}
 */
export
const ReasonForServiceChange_callSetupFallBack: _enum_for_ReasonForServiceChange.callSetupFallBack = ReasonForServiceChange.callSetupFallBack; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callSetupFallBack
 * @description
 *
 * Fallback at call set-up. Clause 5.1.3.15 describes fallback as selection
 * of the one available service when end-to-end CS multimedia is not
 * possible, or when the feature cannot be signalled. 3GPP TS 32.250 V19.0.0
 * clause 5.1.3.15.
 *
 * @constant
 * @type {number}
 */
export
const callSetupFallBack: _enum_for_ReasonForServiceChange.callSetupFallBack = ReasonForServiceChange.callSetupFallBack; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReasonForServiceChange_callSetupChangeOrder
 * @description
 *
 * Change of service order at call set-up. TS 32.250 does not define this
 * value further. Clause 5.1.3.15's editor's note says more charging detail
 * is needed. 3GPP TS 32.250 V19.0.0 clause 5.1.3.15.
 *
 * @constant
 * @type {number}
 */
export
const ReasonForServiceChange_callSetupChangeOrder: _enum_for_ReasonForServiceChange.callSetupChangeOrder = ReasonForServiceChange.callSetupChangeOrder; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callSetupChangeOrder
 * @description
 *
 * Change of service order at call set-up. TS 32.250 does not define this
 * value further. Clause 5.1.3.15's editor's note says more charging detail
 * is needed. 3GPP TS 32.250 V19.0.0 clause 5.1.3.15.
 *
 * @constant
 * @type {number}
 */
export
const callSetupChangeOrder: _enum_for_ReasonForServiceChange.callSetupChangeOrder = ReasonForServiceChange.callSetupChangeOrder; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_ReasonForServiceChange: $.ASN1Decoder<ReasonForServiceChange> = $._decodeEnumerated;

export
const _encode_ReasonForServiceChange: $.ASN1Encoder<ReasonForServiceChange> = $._encodeEnumerated;

/* eslint-enable */
