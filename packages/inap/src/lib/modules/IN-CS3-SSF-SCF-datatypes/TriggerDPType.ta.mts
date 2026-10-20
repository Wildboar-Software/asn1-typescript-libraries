/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TriggerDPType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TriggerDPType  ::=  ENUMERATED {tdp-r(0), tdp-n(1)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_TriggerDPType {
    tdp_r = 0,
    tdp_n = 1,
}

/**
 * @summary TriggerDPType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TriggerDPType  ::=  ENUMERATED {tdp-r(0), tdp-n(1)}
 * ```
 * 
 * @enum {number}
 */
export
type TriggerDPType = _enum_for_TriggerDPType;

/**
 * @summary TriggerDPType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TriggerDPType  ::=  ENUMERATED {tdp-r(0), tdp-n(1)}
 * ```
 * 
 * @enum {number}
 */
export
const TriggerDPType = _enum_for_TriggerDPType;

/**
 * @summary TriggerDPType_tdp_r
 * @constant
 * @type {number}
 */
export
const TriggerDPType_tdp_r: TriggerDPType = TriggerDPType.tdp_r; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tdp_r
 * @constant
 * @type {number}
 */
export
const tdp_r: TriggerDPType = TriggerDPType.tdp_r; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TriggerDPType_tdp_n
 * @constant
 * @type {number}
 */
export
const TriggerDPType_tdp_n: TriggerDPType = TriggerDPType.tdp_n; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tdp_n
 * @constant
 * @type {number}
 */
export
const tdp_n: TriggerDPType = TriggerDPType.tdp_n; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_TriggerDPType: $.ASN1Decoder<TriggerDPType> = $._decodeEnumerated;

export
const _encode_TriggerDPType: $.ASN1Encoder<TriggerDPType> = $._encodeEnumerated;

/* eslint-enable */
