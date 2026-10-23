/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary USIMonitorMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * USIMonitorMode  ::=  ENUMERATED {monitoringActive(0), monitoringInactive(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_USIMonitorMode {
    monitoringActive = 0,
    monitoringInactive = 1,
}

/**
 * @summary USIMonitorMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * USIMonitorMode  ::=  ENUMERATED {monitoringActive(0), monitoringInactive(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type USIMonitorMode = _enum_for_USIMonitorMode;

/**
 * @summary USIMonitorMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * USIMonitorMode  ::=  ENUMERATED {monitoringActive(0), monitoringInactive(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const USIMonitorMode = _enum_for_USIMonitorMode;

/**
 * @summary USIMonitorMode_monitoringActive
 * @constant
 * @type {number}
 */
export
const USIMonitorMode_monitoringActive: USIMonitorMode = USIMonitorMode.monitoringActive; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary monitoringActive
 * @constant
 * @type {number}
 */
export
const monitoringActive: USIMonitorMode = USIMonitorMode.monitoringActive; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary USIMonitorMode_monitoringInactive
 * @constant
 * @type {number}
 */
export
const USIMonitorMode_monitoringInactive: USIMonitorMode = USIMonitorMode.monitoringInactive; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary monitoringInactive
 * @constant
 * @type {number}
 */
export
const monitoringInactive: USIMonitorMode = USIMonitorMode.monitoringInactive; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_USIMonitorMode: $.ASN1Decoder<USIMonitorMode> = $._decodeEnumerated;

export
const _encode_USIMonitorMode: $.ASN1Encoder<USIMonitorMode> = $._encodeEnumerated;

/* eslint-enable */
