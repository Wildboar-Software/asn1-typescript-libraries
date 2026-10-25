/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TriggerCategory
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TriggerCategory  ::=  ENUMERATED {
 *    immediateReport    ( 0 ),
 *    deferredReport     ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_TriggerCategory {
    immediateReport = 0,
    deferredReport = 1,
}

/**
 * @summary TriggerCategory
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TriggerCategory  ::=  ENUMERATED {
 *    immediateReport    ( 0 ),
 *    deferredReport     ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
type TriggerCategory = _enum_for_TriggerCategory;

/**
 * @summary TriggerCategory
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TriggerCategory  ::=  ENUMERATED {
 *    immediateReport    ( 0 ),
 *    deferredReport     ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
const TriggerCategory: typeof _enum_for_TriggerCategory = _enum_for_TriggerCategory;

/**
 * @summary TriggerCategory_immediateReport
 * @constant
 * @type {number}
 */
export
const TriggerCategory_immediateReport: _enum_for_TriggerCategory.immediateReport = TriggerCategory.immediateReport; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary immediateReport
 * @constant
 * @type {number}
 */
export
const immediateReport: _enum_for_TriggerCategory.immediateReport = TriggerCategory.immediateReport; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TriggerCategory_deferredReport
 * @constant
 * @type {number}
 */
export
const TriggerCategory_deferredReport: _enum_for_TriggerCategory.deferredReport = TriggerCategory.deferredReport; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary deferredReport
 * @constant
 * @type {number}
 */
export
const deferredReport: _enum_for_TriggerCategory.deferredReport = TriggerCategory.deferredReport; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_TriggerCategory: $.ASN1Decoder<TriggerCategory> = $._decodeEnumerated;

export
const _encode_TriggerCategory: $.ASN1Encoder<TriggerCategory> = $._encodeEnumerated;

/* eslint-enable */
