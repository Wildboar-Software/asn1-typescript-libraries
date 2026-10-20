/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MonitoringEventConfigurationActivity
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MonitoringEventConfigurationActivity  ::=  ENUMERATED {
 *    create      ( 0 ),
 *    transfer    ( 1 ),
 *    update      ( 2 ),
 *    delete      ( 3 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_MonitoringEventConfigurationActivity {
    create = 0,
    transfer = 1,
    update = 2,
    delete_ = 3,
}

/**
 * @summary MonitoringEventConfigurationActivity
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MonitoringEventConfigurationActivity  ::=  ENUMERATED {
 *    create      ( 0 ),
 *    transfer    ( 1 ),
 *    update      ( 2 ),
 *    delete      ( 3 ) }
 * ```
 * 
 * @enum {number}
 */
export
type MonitoringEventConfigurationActivity = _enum_for_MonitoringEventConfigurationActivity;

/**
 * @summary MonitoringEventConfigurationActivity
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MonitoringEventConfigurationActivity  ::=  ENUMERATED {
 *    create      ( 0 ),
 *    transfer    ( 1 ),
 *    update      ( 2 ),
 *    delete      ( 3 ) }
 * ```
 * 
 * @enum {number}
 */
export
const MonitoringEventConfigurationActivity = _enum_for_MonitoringEventConfigurationActivity;

/**
 * @summary MonitoringEventConfigurationActivity_create
 * @constant
 * @type {number}
 */
export
const MonitoringEventConfigurationActivity_create: MonitoringEventConfigurationActivity = MonitoringEventConfigurationActivity.create; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary create
 * @constant
 * @type {number}
 */
export
const create: MonitoringEventConfigurationActivity = MonitoringEventConfigurationActivity.create; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MonitoringEventConfigurationActivity_transfer
 * @constant
 * @type {number}
 */
export
const MonitoringEventConfigurationActivity_transfer: MonitoringEventConfigurationActivity = MonitoringEventConfigurationActivity.transfer; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary transfer
 * @constant
 * @type {number}
 */
export
const transfer: MonitoringEventConfigurationActivity = MonitoringEventConfigurationActivity.transfer; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MonitoringEventConfigurationActivity_update
 * @constant
 * @type {number}
 */
export
const MonitoringEventConfigurationActivity_update: MonitoringEventConfigurationActivity = MonitoringEventConfigurationActivity.update; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary update
 * @constant
 * @type {number}
 */
export
const update: MonitoringEventConfigurationActivity = MonitoringEventConfigurationActivity.update; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MonitoringEventConfigurationActivity_delete_
 * @constant
 * @type {number}
 */
export
const MonitoringEventConfigurationActivity_delete_: MonitoringEventConfigurationActivity = MonitoringEventConfigurationActivity.delete_; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary delete_
 * @constant
 * @type {number}
 */
export
const delete_: MonitoringEventConfigurationActivity = MonitoringEventConfigurationActivity.delete_; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_MonitoringEventConfigurationActivity: $.ASN1Decoder<MonitoringEventConfigurationActivity> = $._decodeEnumerated;

export
const _encode_MonitoringEventConfigurationActivity: $.ASN1Encoder<MonitoringEventConfigurationActivity> = $._encodeEnumerated;

/* eslint-enable */
