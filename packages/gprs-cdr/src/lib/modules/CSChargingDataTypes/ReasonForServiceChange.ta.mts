/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ReasonForServiceChange
 * @description
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
const ReasonForServiceChange = _enum_for_ReasonForServiceChange;

/**
 * @summary ReasonForServiceChange_msubInitiated
 * @constant
 * @type {number}
 */
export
const ReasonForServiceChange_msubInitiated: ReasonForServiceChange = ReasonForServiceChange.msubInitiated; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary msubInitiated
 * @constant
 * @type {number}
 */
export
const msubInitiated: ReasonForServiceChange = ReasonForServiceChange.msubInitiated; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReasonForServiceChange_mscInitiated
 * @constant
 * @type {number}
 */
export
const ReasonForServiceChange_mscInitiated: ReasonForServiceChange = ReasonForServiceChange.mscInitiated; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mscInitiated
 * @constant
 * @type {number}
 */
export
const mscInitiated: ReasonForServiceChange = ReasonForServiceChange.mscInitiated; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReasonForServiceChange_callSetupFallBack
 * @constant
 * @type {number}
 */
export
const ReasonForServiceChange_callSetupFallBack: ReasonForServiceChange = ReasonForServiceChange.callSetupFallBack; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callSetupFallBack
 * @constant
 * @type {number}
 */
export
const callSetupFallBack: ReasonForServiceChange = ReasonForServiceChange.callSetupFallBack; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReasonForServiceChange_callSetupChangeOrder
 * @constant
 * @type {number}
 */
export
const ReasonForServiceChange_callSetupChangeOrder: ReasonForServiceChange = ReasonForServiceChange.callSetupChangeOrder; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callSetupChangeOrder
 * @constant
 * @type {number}
 */
export
const callSetupChangeOrder: ReasonForServiceChange = ReasonForServiceChange.callSetupChangeOrder; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_ReasonForServiceChange: $.ASN1Decoder<ReasonForServiceChange> = $._decodeEnumerated;

export
const _encode_ReasonForServiceChange: $.ASN1Encoder<ReasonForServiceChange> = $._encodeEnumerated;

/* eslint-enable */
