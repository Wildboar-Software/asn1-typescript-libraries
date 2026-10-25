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
const TariffSystemStatus = _enum_for_TariffSystemStatus;

/**
 * @summary TariffSystemStatus_available
 * @constant
 * @type {number}
 */
export
const TariffSystemStatus_available = TariffSystemStatus.available satisfies TariffSystemStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary available
 * @constant
 * @type {number}
 */
export
const available = TariffSystemStatus.available satisfies TariffSystemStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TariffSystemStatus_checked
 * @constant
 * @type {number}
 */
export
const TariffSystemStatus_checked = TariffSystemStatus.checked satisfies TariffSystemStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary checked
 * @constant
 * @type {number}
 */
export
const checked = TariffSystemStatus.checked satisfies TariffSystemStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TariffSystemStatus_standby
 * @constant
 * @type {number}
 */
export
const TariffSystemStatus_standby = TariffSystemStatus.standby satisfies TariffSystemStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary standby
 * @constant
 * @type {number}
 */
export
const standby = TariffSystemStatus.standby satisfies TariffSystemStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TariffSystemStatus_active
 * @constant
 * @type {number}
 */
export
const TariffSystemStatus_active = TariffSystemStatus.active satisfies TariffSystemStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary active
 * @constant
 * @type {number}
 */
export
const active = TariffSystemStatus.active satisfies TariffSystemStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_TariffSystemStatus: $.ASN1Decoder<TariffSystemStatus> = $._decodeEnumerated;

export
const _encode_TariffSystemStatus: $.ASN1Encoder<TariffSystemStatus> = $._encodeEnumerated;

/* eslint-enable */
