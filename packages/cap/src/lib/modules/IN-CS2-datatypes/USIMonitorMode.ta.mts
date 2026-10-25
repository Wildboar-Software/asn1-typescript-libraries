/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary USIMonitorMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * USIMonitorMode  ::=  ENUMERATED {monitoringActive(0), monitoringInactive(1)}
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
 * USIMonitorMode  ::=  ENUMERATED {monitoringActive(0), monitoringInactive(1)}
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
 * USIMonitorMode  ::=  ENUMERATED {monitoringActive(0), monitoringInactive(1)}
 * ```
 * 
 * @enum {number}
 */
export
const USIMonitorMode: typeof _enum_for_USIMonitorMode = _enum_for_USIMonitorMode;

/**
 * @summary USIMonitorMode_monitoringActive
 * @constant
 * @type {number}
 */
export
const USIMonitorMode_monitoringActive: _enum_for_USIMonitorMode.monitoringActive = USIMonitorMode.monitoringActive; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary monitoringActive
 * @constant
 * @type {number}
 */
export
const monitoringActive: _enum_for_USIMonitorMode.monitoringActive = USIMonitorMode.monitoringActive; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary USIMonitorMode_monitoringInactive
 * @constant
 * @type {number}
 */
export
const USIMonitorMode_monitoringInactive: _enum_for_USIMonitorMode.monitoringInactive = USIMonitorMode.monitoringInactive; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary monitoringInactive
 * @constant
 * @type {number}
 */
export
const monitoringInactive: _enum_for_USIMonitorMode.monitoringInactive = USIMonitorMode.monitoringInactive; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_USIMonitorMode: $.ASN1Decoder<number> = $._decodeEnumerated;
export const _encode_USIMonitorMode: $.ASN1Encoder<number> = $._encodeEnumerated;


/* eslint-enable */
