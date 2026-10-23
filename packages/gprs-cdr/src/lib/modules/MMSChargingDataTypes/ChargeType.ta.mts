/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ChargeType
 * @description
 * 
 * TS 32.270 names a charge type beside the charged party and does not
 * define these values. `postpaid` is 0 and `pre-paid` is 1.
 *
 * 3GPP TS 32.270 V19.0.0 clause 6.1.1.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChargeType  ::=  ENUMERATED {
 *    postpaid    ( 0 ),
 *    pre-paid    ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ChargeType {
    postpaid = 0,
    pre_paid = 1,
}

/**
 * @summary ChargeType
 * @description
 * 
 * TS 32.270 names a charge type beside the charged party and does not
 * define these values. `postpaid` is 0 and `pre-paid` is 1.
 *
 * 3GPP TS 32.270 V19.0.0 clause 6.1.1.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChargeType  ::=  ENUMERATED {
 *    postpaid    ( 0 ),
 *    pre-paid    ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
type ChargeType = _enum_for_ChargeType;

/**
 * @summary ChargeType
 * @description
 * 
 * TS 32.270 names a charge type beside the charged party and does not
 * define these values. `postpaid` is 0 and `pre-paid` is 1.
 *
 * 3GPP TS 32.270 V19.0.0 clause 6.1.1.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChargeType  ::=  ENUMERATED {
 *    postpaid    ( 0 ),
 *    pre-paid    ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
const ChargeType = _enum_for_ChargeType;

/**
 * @summary ChargeType_postpaid
 * @description
 *
 * Postpaid subscription. TS 32.270 names a charge type and does not define
 * this value.
 *
 * 3GPP TS 32.270 V19.0.0 clause 6.1.1.1.
 *
 * @constant
 * @type {number}
 */
export
const ChargeType_postpaid: ChargeType = ChargeType.postpaid; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary postpaid
 * @description
 *
 * Postpaid subscription. TS 32.270 names a charge type and does not define
 * this value.
 *
 * 3GPP TS 32.270 V19.0.0 clause 6.1.1.1.
 *
 * @constant
 * @type {number}
 */
export
const postpaid: ChargeType = ChargeType.postpaid; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ChargeType_pre_paid
 * @description
 *
 * Prepaid subscription. TS 32.270 names a charge type and does not define
 * this value.
 *
 * 3GPP TS 32.270 V19.0.0 clause 6.1.1.1.
 *
 * @constant
 * @type {number}
 */
export
const ChargeType_pre_paid: ChargeType = ChargeType.pre_paid; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pre_paid
 * @description
 *
 * Prepaid subscription. TS 32.270 names a charge type and does not define
 * this value.
 *
 * 3GPP TS 32.270 V19.0.0 clause 6.1.1.1.
 *
 * @constant
 * @type {number}
 */
export
const pre_paid: ChargeType = ChargeType.pre_paid; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_ChargeType: $.ASN1Decoder<ChargeType> = $._decodeEnumerated;

export
const _encode_ChargeType: $.ASN1Encoder<ChargeType> = $._encodeEnumerated;

/* eslint-enable */
