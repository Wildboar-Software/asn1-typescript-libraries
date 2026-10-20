/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SMDeviceTriggerIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMDeviceTriggerIndicator  ::=  ENUMERATED {
 *    notDeviceTrigger        ( 0 ),
 *    deviceTriggerRequest    ( 1 ),
 *    deviceTriggerReplace    ( 2 ),
 *    deviceTriggerRecall     ( 3 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_SMDeviceTriggerIndicator {
    notDeviceTrigger = 0,
    deviceTriggerRequest = 1,
    deviceTriggerReplace = 2,
    deviceTriggerRecall = 3,
}

/**
 * @summary SMDeviceTriggerIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMDeviceTriggerIndicator  ::=  ENUMERATED {
 *    notDeviceTrigger        ( 0 ),
 *    deviceTriggerRequest    ( 1 ),
 *    deviceTriggerReplace    ( 2 ),
 *    deviceTriggerRecall     ( 3 ) }
 * ```
 * 
 * @enum {number}
 */
export
type SMDeviceTriggerIndicator = _enum_for_SMDeviceTriggerIndicator;

/**
 * @summary SMDeviceTriggerIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMDeviceTriggerIndicator  ::=  ENUMERATED {
 *    notDeviceTrigger        ( 0 ),
 *    deviceTriggerRequest    ( 1 ),
 *    deviceTriggerReplace    ( 2 ),
 *    deviceTriggerRecall     ( 3 ) }
 * ```
 * 
 * @enum {number}
 */
export
const SMDeviceTriggerIndicator = _enum_for_SMDeviceTriggerIndicator;

/**
 * @summary SMDeviceTriggerIndicator_notDeviceTrigger
 * @constant
 * @type {number}
 */
export
const SMDeviceTriggerIndicator_notDeviceTrigger: SMDeviceTriggerIndicator = SMDeviceTriggerIndicator.notDeviceTrigger; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notDeviceTrigger
 * @constant
 * @type {number}
 */
export
const notDeviceTrigger: SMDeviceTriggerIndicator = SMDeviceTriggerIndicator.notDeviceTrigger; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMDeviceTriggerIndicator_deviceTriggerRequest
 * @constant
 * @type {number}
 */
export
const SMDeviceTriggerIndicator_deviceTriggerRequest: SMDeviceTriggerIndicator = SMDeviceTriggerIndicator.deviceTriggerRequest; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary deviceTriggerRequest
 * @constant
 * @type {number}
 */
export
const deviceTriggerRequest: SMDeviceTriggerIndicator = SMDeviceTriggerIndicator.deviceTriggerRequest; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMDeviceTriggerIndicator_deviceTriggerReplace
 * @constant
 * @type {number}
 */
export
const SMDeviceTriggerIndicator_deviceTriggerReplace: SMDeviceTriggerIndicator = SMDeviceTriggerIndicator.deviceTriggerReplace; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary deviceTriggerReplace
 * @constant
 * @type {number}
 */
export
const deviceTriggerReplace: SMDeviceTriggerIndicator = SMDeviceTriggerIndicator.deviceTriggerReplace; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMDeviceTriggerIndicator_deviceTriggerRecall
 * @constant
 * @type {number}
 */
export
const SMDeviceTriggerIndicator_deviceTriggerRecall: SMDeviceTriggerIndicator = SMDeviceTriggerIndicator.deviceTriggerRecall; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary deviceTriggerRecall
 * @constant
 * @type {number}
 */
export
const deviceTriggerRecall: SMDeviceTriggerIndicator = SMDeviceTriggerIndicator.deviceTriggerRecall; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_SMDeviceTriggerIndicator: $.ASN1Decoder<SMDeviceTriggerIndicator> = $._decodeEnumerated;

export
const _encode_SMDeviceTriggerIndicator: $.ASN1Encoder<SMDeviceTriggerIndicator> = $._encodeEnumerated;

/* eslint-enable */
