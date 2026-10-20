/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PreemptionCapability
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PreemptionCapability  ::=  ENUMERATED {
 *    nOT-PREEMPT    ( 0 ),
 *    mAY-PREEMPT    ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_PreemptionCapability {
    nOT_PREEMPT = 0,
    mAY_PREEMPT = 1,
}

/**
 * @summary PreemptionCapability
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PreemptionCapability  ::=  ENUMERATED {
 *    nOT-PREEMPT    ( 0 ),
 *    mAY-PREEMPT    ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
type PreemptionCapability = _enum_for_PreemptionCapability;

/**
 * @summary PreemptionCapability
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PreemptionCapability  ::=  ENUMERATED {
 *    nOT-PREEMPT    ( 0 ),
 *    mAY-PREEMPT    ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
const PreemptionCapability = _enum_for_PreemptionCapability;

/**
 * @summary PreemptionCapability_nOT_PREEMPT
 * @constant
 * @type {number}
 */
export
const PreemptionCapability_nOT_PREEMPT: PreemptionCapability = PreemptionCapability.nOT_PREEMPT; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nOT_PREEMPT
 * @constant
 * @type {number}
 */
export
const nOT_PREEMPT: PreemptionCapability = PreemptionCapability.nOT_PREEMPT; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PreemptionCapability_mAY_PREEMPT
 * @constant
 * @type {number}
 */
export
const PreemptionCapability_mAY_PREEMPT: PreemptionCapability = PreemptionCapability.mAY_PREEMPT; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mAY_PREEMPT
 * @constant
 * @type {number}
 */
export
const mAY_PREEMPT: PreemptionCapability = PreemptionCapability.mAY_PREEMPT; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_PreemptionCapability: $.ASN1Decoder<PreemptionCapability> = $._decodeEnumerated;

export
const _encode_PreemptionCapability: $.ASN1Encoder<PreemptionCapability> = $._encodeEnumerated;

/* eslint-enable */
