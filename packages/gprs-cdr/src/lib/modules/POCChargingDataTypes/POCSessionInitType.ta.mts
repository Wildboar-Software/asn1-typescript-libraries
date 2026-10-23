/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary POCSessionInitType
 * @description
 *
 * How the PoC session was established. Either mechanism can be
 * used for a 1-1 session or a group session, and charging
 * distinguishes them. The field is used only for the served
 * parties.
 *
 * 0 is pre-established and 1 is on-demand.
 *
 * 3GPP TS 32.272 V19.0.0 clauses 3.1, 5.1.1, and 6.3.1.2.
 * 3GPP TS 32.298 V20.1.0 clause 5.1.4.3.11.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * POCSessionInitType  ::=  ENUMERATED {
 *    pre-established    ( 0 ),
 *    on-demand          ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_POCSessionInitType {
    pre_established = 0,
    on_demand = 1,
}

/**
 * @summary POCSessionInitType
 * @description
 *
 * How the PoC session was established. Either mechanism can be
 * used for a 1-1 session or a group session, and charging
 * distinguishes them. The field is used only for the served
 * parties.
 *
 * 0 is pre-established and 1 is on-demand.
 *
 * 3GPP TS 32.272 V19.0.0 clauses 3.1, 5.1.1, and 6.3.1.2.
 * 3GPP TS 32.298 V20.1.0 clause 5.1.4.3.11.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * POCSessionInitType  ::=  ENUMERATED {
 *    pre-established    ( 0 ),
 *    on-demand          ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
type POCSessionInitType = _enum_for_POCSessionInitType;

/**
 * @summary POCSessionInitType
 * @description
 *
 * How the PoC session was established. Either mechanism can be
 * used for a 1-1 session or a group session, and charging
 * distinguishes them. The field is used only for the served
 * parties.
 *
 * 0 is pre-established and 1 is on-demand.
 *
 * 3GPP TS 32.272 V19.0.0 clauses 3.1, 5.1.1, and 6.3.1.2.
 * 3GPP TS 32.298 V20.1.0 clause 5.1.4.3.11.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * POCSessionInitType  ::=  ENUMERATED {
 *    pre-established    ( 0 ),
 *    on-demand          ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
const POCSessionInitType = _enum_for_POCSessionInitType;

/**
 * @summary POCSessionInitType_pre_established
 * @description
 *
 * Media parameters are negotiated between the PoC Client and the
 * home PoC Server before a PoC session exists. Offline, the
 * participating server reports this as an event CDR. Online,
 * early session set-up is one-time event charging with unit
 * reservation: only the set-up is charged.
 *
 * 3GPP TS 32.272 V19.0.0 clauses 3.1, 5.1.1, 5.2.1, and 5.3.1.
 *
 * @constant
 * @type {number}
 */
export
const POCSessionInitType_pre_established: POCSessionInitType = POCSessionInitType.pre_established; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pre_established
 * @constant
 * @type {number}
 */
export
const pre_established: POCSessionInitType = POCSessionInitType.pre_established; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary POCSessionInitType_on_demand
 * @description
 *
 * All media parameters are negotiated when the PoC session is
 * established.
 *
 * 3GPP TS 32.272 V19.0.0 clauses 3.1 and 5.1.1.
 *
 * @constant
 * @type {number}
 */
export
const POCSessionInitType_on_demand: POCSessionInitType = POCSessionInitType.on_demand; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary on_demand
 * @constant
 * @type {number}
 */
export
const on_demand: POCSessionInitType = POCSessionInitType.on_demand; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_POCSessionInitType: $.ASN1Decoder<POCSessionInitType> = $._decodeEnumerated;

export
const _encode_POCSessionInitType: $.ASN1Encoder<POCSessionInitType> = $._encodeEnumerated;

/* eslint-enable */
