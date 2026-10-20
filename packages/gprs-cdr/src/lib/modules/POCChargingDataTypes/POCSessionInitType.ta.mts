/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary POCSessionInitType
 * @description
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
