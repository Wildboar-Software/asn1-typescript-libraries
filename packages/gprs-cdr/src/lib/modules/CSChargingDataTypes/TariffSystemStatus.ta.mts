/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TariffSystemStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TariffSystemStatus  ::=  ENUMERATED {
 *    available    ( 0 ),
 *    checked      ( 1 ),
 *    standby      ( 2 ),
 *    active       ( 3 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_TariffSystemStatus {
    available = 0,
    checked = 1,
    standby = 2,
    active = 3,
}

/**
 * @summary TariffSystemStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TariffSystemStatus  ::=  ENUMERATED {
 *    available    ( 0 ),
 *    checked      ( 1 ),
 *    standby      ( 2 ),
 *    active       ( 3 ) }
 * ```
 * 
 * @enum {number}
 */
export
type TariffSystemStatus = _enum_for_TariffSystemStatus;

/**
 * @summary TariffSystemStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TariffSystemStatus  ::=  ENUMERATED {
 *    available    ( 0 ),
 *    checked      ( 1 ),
 *    standby      ( 2 ),
 *    active       ( 3 ) }
 * ```
 * 
 * @enum {number}
 */
export
const TariffSystemStatus: typeof _enum_for_TariffSystemStatus = _enum_for_TariffSystemStatus;

/**
 * @summary TariffSystemStatus_available
 * @constant
 * @type {number}
 */
export
const TariffSystemStatus_available: _enum_for_TariffSystemStatus.available = TariffSystemStatus.available; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary available
 * @constant
 * @type {number}
 */
export
const available: _enum_for_TariffSystemStatus.available = TariffSystemStatus.available; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TariffSystemStatus_checked
 * @constant
 * @type {number}
 */
export
const TariffSystemStatus_checked: _enum_for_TariffSystemStatus.checked = TariffSystemStatus.checked; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary checked
 * @constant
 * @type {number}
 */
export
const checked: _enum_for_TariffSystemStatus.checked = TariffSystemStatus.checked; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TariffSystemStatus_standby
 * @constant
 * @type {number}
 */
export
const TariffSystemStatus_standby: _enum_for_TariffSystemStatus.standby = TariffSystemStatus.standby; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary standby
 * @constant
 * @type {number}
 */
export
const standby: _enum_for_TariffSystemStatus.standby = TariffSystemStatus.standby; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TariffSystemStatus_active
 * @constant
 * @type {number}
 */
export
const TariffSystemStatus_active: _enum_for_TariffSystemStatus.active = TariffSystemStatus.active; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary active
 * @constant
 * @type {number}
 */
export
const active: _enum_for_TariffSystemStatus.active = TariffSystemStatus.active; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_TariffSystemStatus: $.ASN1Decoder<TariffSystemStatus> = $._decodeEnumerated;

export
const _encode_TariffSystemStatus: $.ASN1Encoder<TariffSystemStatus> = $._encodeEnumerated;

/* eslint-enable */
