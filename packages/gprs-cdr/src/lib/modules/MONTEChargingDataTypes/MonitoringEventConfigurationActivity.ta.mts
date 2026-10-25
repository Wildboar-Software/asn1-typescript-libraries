/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MonitoringEventConfigurationActivity
 * @description
 *
 * Configuration action requested for a Monitoring Event.
 * Category M on the ME-CO-CDR. On Rf the category is Oc and the
 * information element is sent for configuration only.
 *
 * The values are the chargeable configuration events:
 * `create` is a request received from the HSS or SCEF,
 * `transfer` is a request transferred from another MECN,
 * `update` is an update received from the HSS or SCEF, and
 * `delete` is a deletion received from the HSS or SCEF.
 *
 * 3GPP TS 32.278 V19.0.0 clauses 5.1, 5.2.1, 6.1.3.2 and 6.3.3.
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
 * Configuration action requested for a Monitoring Event.
 * Category M on the ME-CO-CDR. On Rf the category is Oc and the
 * information element is sent for configuration only.
 *
 * The values are the chargeable configuration events:
 * `create` is a request received from the HSS or SCEF,
 * `transfer` is a request transferred from another MECN,
 * `update` is an update received from the HSS or SCEF, and
 * `delete` is a deletion received from the HSS or SCEF.
 *
 * 3GPP TS 32.278 V19.0.0 clauses 5.1, 5.2.1, 6.1.3.2 and 6.3.3.
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
 * Configuration action requested for a Monitoring Event.
 * Category M on the ME-CO-CDR. On Rf the category is Oc and the
 * information element is sent for configuration only.
 *
 * The values are the chargeable configuration events:
 * `create` is a request received from the HSS or SCEF,
 * `transfer` is a request transferred from another MECN,
 * `update` is an update received from the HSS or SCEF, and
 * `delete` is a deletion received from the HSS or SCEF.
 *
 * 3GPP TS 32.278 V19.0.0 clauses 5.1, 5.2.1, 6.1.3.2 and 6.3.3.
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
 * @description
 *
 * New Monitoring Event configuration request received from the
 * HSS or SCEF.
 *
 * 3GPP TS 32.278 V19.0.0 clause 5.2.1.
 *
 * @constant
 * @type {number}
 */
export
const MonitoringEventConfigurationActivity_create = MonitoringEventConfigurationActivity.create satisfies MonitoringEventConfigurationActivity; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary create
 * @description
 *
 * Request received from the HSS or SCEF. See
 * {@link MonitoringEventConfigurationActivity_create}.
 *
 * @constant
 * @type {number}
 */
export
const create = MonitoringEventConfigurationActivity.create satisfies MonitoringEventConfigurationActivity; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MonitoringEventConfigurationActivity_transfer
 * @description
 *
 * Monitoring Event configuration request transferred from
 * another MECN.
 *
 * 3GPP TS 32.278 V19.0.0 clause 5.2.1.
 *
 * @constant
 * @type {number}
 */
export
const MonitoringEventConfigurationActivity_transfer = MonitoringEventConfigurationActivity.transfer satisfies MonitoringEventConfigurationActivity; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary transfer
 * @description
 *
 * Request transferred from another MECN. See
 * {@link MonitoringEventConfigurationActivity_transfer}.
 *
 * @constant
 * @type {number}
 */
export
const transfer = MonitoringEventConfigurationActivity.transfer satisfies MonitoringEventConfigurationActivity; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MonitoringEventConfigurationActivity_update
 * @description
 *
 * Monitoring Event configuration request update received from
 * the HSS or SCEF.
 *
 * 3GPP TS 32.278 V19.0.0 clause 5.2.1.
 *
 * @constant
 * @type {number}
 */
export
const MonitoringEventConfigurationActivity_update = MonitoringEventConfigurationActivity.update satisfies MonitoringEventConfigurationActivity; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary update
 * @description
 *
 * Update received from the HSS or SCEF. See
 * {@link MonitoringEventConfigurationActivity_update}.
 *
 * @constant
 * @type {number}
 */
export
const update = MonitoringEventConfigurationActivity.update satisfies MonitoringEventConfigurationActivity; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MonitoringEventConfigurationActivity_delete_
 * @description
 *
 * Deletion of a Monitoring Event configuration request,
 * received from the HSS or SCEF.
 *
 * 3GPP TS 32.278 V19.0.0 clause 5.2.1.
 *
 * @constant
 * @type {number}
 */
export
const MonitoringEventConfigurationActivity_delete_ = MonitoringEventConfigurationActivity.delete_ satisfies MonitoringEventConfigurationActivity; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary delete_
 * @description
 *
 * Deletion received from the HSS or SCEF. See
 * {@link MonitoringEventConfigurationActivity_delete_}.
 *
 * @constant
 * @type {number}
 */
export
const delete_ = MonitoringEventConfigurationActivity.delete_ satisfies MonitoringEventConfigurationActivity; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_MonitoringEventConfigurationActivity: $.ASN1Decoder<MonitoringEventConfigurationActivity> = $._decodeEnumerated;

export
const _encode_MonitoringEventConfigurationActivity: $.ASN1Encoder<MonitoringEventConfigurationActivity> = $._encodeEnumerated;

/* eslint-enable */
