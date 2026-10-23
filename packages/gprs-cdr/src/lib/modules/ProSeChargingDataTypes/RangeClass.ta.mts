/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RangeClass
 * @description
 *
 * Discovery range authorized for a proximity request, for example a geographic
 * limit. The PF-ED-CDR stores the range class of the first request on the
 * record, and the range class of each renewal in a
 * `ProximityRequestRenewalInfoBlock`.
 *
 * TS 32.277 does not assign distances to these values. TS 32.298 names them
 * from the Range Class in TS 24.334: 50 m, 100 m, 200 m, 500 m, and 1000 m. TS
 * 32.277 does not define `reserved`.
 *
 * 3GPP TS 32.277 V19.2.0 clauses 5.1.2.2 and 6.1.3.3.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.4.7.28.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RangeClass  ::=  ENUMERATED {
 *    reserved            ( 0 ),
 *    fiftyMeter          ( 1 ),
 *    onehundredMeter     ( 2 ),
 *    twohundredMeter     ( 3 ),
 *    fivehundredMeter    ( 4 ),
 *    onethousandMeter    ( 5 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_RangeClass {
    reserved = 0,
    fiftyMeter = 1,
    onehundredMeter = 2,
    twohundredMeter = 3,
    fivehundredMeter = 4,
    onethousandMeter = 5,
}

/**
 * @summary RangeClass
 * @description
 *
 * Discovery range authorized for a proximity request, for example a geographic
 * limit. The PF-ED-CDR stores the range class of the first request on the
 * record, and the range class of each renewal in a
 * `ProximityRequestRenewalInfoBlock`.
 *
 * TS 32.277 does not assign distances to these values. TS 32.298 names them
 * from the Range Class in TS 24.334: 50 m, 100 m, 200 m, 500 m, and 1000 m. TS
 * 32.277 does not define `reserved`.
 *
 * 3GPP TS 32.277 V19.2.0 clauses 5.1.2.2 and 6.1.3.3.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.4.7.28.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RangeClass  ::=  ENUMERATED {
 *    reserved            ( 0 ),
 *    fiftyMeter          ( 1 ),
 *    onehundredMeter     ( 2 ),
 *    twohundredMeter     ( 3 ),
 *    fivehundredMeter    ( 4 ),
 *    onethousandMeter    ( 5 ) }
 * ```
 * 
 * @enum {number}
 */
export
type RangeClass = _enum_for_RangeClass;

/**
 * @summary RangeClass
 * @description
 *
 * Discovery range authorized for a proximity request, for example a geographic
 * limit. The PF-ED-CDR stores the range class of the first request on the
 * record, and the range class of each renewal in a
 * `ProximityRequestRenewalInfoBlock`.
 *
 * TS 32.277 does not assign distances to these values. TS 32.298 names them
 * from the Range Class in TS 24.334: 50 m, 100 m, 200 m, 500 m, and 1000 m. TS
 * 32.277 does not define `reserved`.
 *
 * 3GPP TS 32.277 V19.2.0 clauses 5.1.2.2 and 6.1.3.3.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.4.7.28.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RangeClass  ::=  ENUMERATED {
 *    reserved            ( 0 ),
 *    fiftyMeter          ( 1 ),
 *    onehundredMeter     ( 2 ),
 *    twohundredMeter     ( 3 ),
 *    fivehundredMeter    ( 4 ),
 *    onethousandMeter    ( 5 ) }
 * ```
 * 
 * @enum {number}
 */
export
const RangeClass = _enum_for_RangeClass;

/**
 * @summary RangeClass_reserved
 * @description
 *
 * TS 32.277 does not define this value.
 *
 * @constant
 * @type {number}
 */
export
const RangeClass_reserved: RangeClass = RangeClass.reserved; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reserved
 * @description
 *
 * TS 32.277 does not define this value. See `RangeClass_reserved`.
 *
 * @constant
 * @type {number}
 */
export
const reserved: RangeClass = RangeClass.reserved; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RangeClass_fiftyMeter
 * @description
 *
 * 50 m, the Range Class distance named by TS 32.298 from TS 24.334.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.4.7.28.
 *
 * @constant
 * @type {number}
 */
export
const RangeClass_fiftyMeter: RangeClass = RangeClass.fiftyMeter; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary fiftyMeter
 * @description
 *
 * 50 m range class. See `RangeClass_fiftyMeter`.
 *
 * @constant
 * @type {number}
 */
export
const fiftyMeter: RangeClass = RangeClass.fiftyMeter; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RangeClass_onehundredMeter
 * @description
 *
 * 100 m, the Range Class distance named by TS 32.298 from TS 24.334.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.4.7.28.
 *
 * @constant
 * @type {number}
 */
export
const RangeClass_onehundredMeter: RangeClass = RangeClass.onehundredMeter; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary onehundredMeter
 * @description
 *
 * 100 m range class. See `RangeClass_onehundredMeter`.
 *
 * @constant
 * @type {number}
 */
export
const onehundredMeter: RangeClass = RangeClass.onehundredMeter; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RangeClass_twohundredMeter
 * @description
 *
 * 200 m, the Range Class distance named by TS 32.298 from TS 24.334.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.4.7.28.
 *
 * @constant
 * @type {number}
 */
export
const RangeClass_twohundredMeter: RangeClass = RangeClass.twohundredMeter; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary twohundredMeter
 * @description
 *
 * 200 m range class. See `RangeClass_twohundredMeter`.
 *
 * @constant
 * @type {number}
 */
export
const twohundredMeter: RangeClass = RangeClass.twohundredMeter; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RangeClass_fivehundredMeter
 * @description
 *
 * 500 m, the Range Class distance named by TS 32.298 from TS 24.334.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.4.7.28.
 *
 * @constant
 * @type {number}
 */
export
const RangeClass_fivehundredMeter: RangeClass = RangeClass.fivehundredMeter; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary fivehundredMeter
 * @description
 *
 * 500 m range class. See `RangeClass_fivehundredMeter`.
 *
 * @constant
 * @type {number}
 */
export
const fivehundredMeter: RangeClass = RangeClass.fivehundredMeter; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RangeClass_onethousandMeter
 * @description
 *
 * 1000 m, the Range Class distance named by TS 32.298 from TS 24.334.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.4.7.28.
 *
 * @constant
 * @type {number}
 */
export
const RangeClass_onethousandMeter: RangeClass = RangeClass.onethousandMeter; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary onethousandMeter
 * @description
 *
 * 1000 m range class. See `RangeClass_onethousandMeter`.
 *
 * @constant
 * @type {number}
 */
export
const onethousandMeter: RangeClass = RangeClass.onethousandMeter; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_RangeClass: $.ASN1Decoder<RangeClass> = $._decodeEnumerated;

export
const _encode_RangeClass: $.ASN1Encoder<RangeClass> = $._encodeEnumerated;

/* eslint-enable */
