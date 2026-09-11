/* eslint-disable */
import {
    ENUMERATED,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

export
enum _enum_for_ErrorControl_Item_protocolNegotiation {
    disabled = 0,
    lapm = 1,
    v42annexA = 2,
}

/**
 * @summary ErrorControl_Item_protocolNegotiation
 * @description
 *
 * Table 18/V.59: `disabled`(0) no error control, `lapm`(1) LAPM, `v42annexA`(2)
 * V.42 Annex A. Extensible. ITU-T Rec. V.59 (11/2000) §6.12.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ErrorControl-Item-protocolNegotiation ::= ENUMERATED {disabled(0), lapm(1), v42annexA(2), ...
 *                             }
 * ```
 * 
 * @enum {number}
 */
export
type ErrorControl_Item_protocolNegotiation = _enum_for_ErrorControl_Item_protocolNegotiation | ENUMERATED;

/**
 * @summary ErrorControl_Item_protocolNegotiation_disabled
 * @description
 *
 * No error-control protocol used. Table 18/V.59. ITU-T Rec. V.59 (11/2000)
 * §6.12.
 * @constant
 * @type {number}
 */
export
const ErrorControl_Item_protocolNegotiation_disabled: ErrorControl_Item_protocolNegotiation = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary disabled
 * @constant
 * @type {number}
 */
export
const disabled: ErrorControl_Item_protocolNegotiation = ErrorControl_Item_protocolNegotiation_disabled; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ErrorControl_Item_protocolNegotiation_lapm
 * @description
 *
 * LAPM used. Table 18/V.59. ITU-T Rec. V.59 (11/2000) §6.12.
 * @constant
 * @type {number}
 */
export
const ErrorControl_Item_protocolNegotiation_lapm: ErrorControl_Item_protocolNegotiation = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary lapm
 * @constant
 * @type {number}
 */
export
const lapm: ErrorControl_Item_protocolNegotiation = ErrorControl_Item_protocolNegotiation_lapm; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ErrorControl_Item_protocolNegotiation_v42annexA
 * @description
 *
 * V.42 Annex A used. Table 18/V.59. ITU-T Rec. V.59 (11/2000) §6.12.
 * @constant
 * @type {number}
 */
export
const ErrorControl_Item_protocolNegotiation_v42annexA: ErrorControl_Item_protocolNegotiation = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary v42annexA
 * @constant
 * @type {number}
 */
export
const v42annexA: ErrorControl_Item_protocolNegotiation = ErrorControl_Item_protocolNegotiation_v42annexA; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_ErrorControl_Item_protocolNegotiation = $._decodeEnumerated;
export const _encode_ErrorControl_Item_protocolNegotiation = $._encodeEnumerated;

/* eslint-enable */
