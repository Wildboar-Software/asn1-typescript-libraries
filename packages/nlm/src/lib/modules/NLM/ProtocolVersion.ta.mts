/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';


/**
 * @summary ProtocolVersion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProtocolVersion  ::=  ENUMERATED {iSO8208V1(0), iSO8208V2(1), x2584(2), x2588(3)}
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_ProtocolVersion {
    iSO8208V1 = 0,
    iSO8208V2 = 1,
    x2584 = 2,
    x2588 = 3,
}


/**
 * @summary ProtocolVersion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProtocolVersion  ::=  ENUMERATED {iSO8208V1(0), iSO8208V2(1), x2584(2), x2588(3)}
 * ```
 *
 * @enum {number}
 */
export type ProtocolVersion = _enum_for_ProtocolVersion;


/**
 * @summary ProtocolVersion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProtocolVersion  ::=  ENUMERATED {iSO8208V1(0), iSO8208V2(1), x2584(2), x2588(3)}
 * ```
 *
 * @enum {number}
 */
export const ProtocolVersion = _enum_for_ProtocolVersion;


/**
 * @summary ProtocolVersion_iSO8208V1
 * @constant
 * @type {number}
 */
export const ProtocolVersion_iSO8208V1: ProtocolVersion =
    ProtocolVersion.iSO8208V1; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary iSO8208V1
 * @constant
 * @type {number}
 */
export const iSO8208V1: ProtocolVersion =
    ProtocolVersion.iSO8208V1; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary ProtocolVersion_iSO8208V2
 * @constant
 * @type {number}
 */
export const ProtocolVersion_iSO8208V2: ProtocolVersion =
    ProtocolVersion.iSO8208V2; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary iSO8208V2
 * @constant
 * @type {number}
 */
export const iSO8208V2: ProtocolVersion =
    ProtocolVersion.iSO8208V2; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary ProtocolVersion_x2584
 * @constant
 * @type {number}
 */
export const ProtocolVersion_x2584: ProtocolVersion =
    ProtocolVersion.x2584; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary x2584
 * @constant
 * @type {number}
 */
export const x2584: ProtocolVersion =
    ProtocolVersion.x2584; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary ProtocolVersion_x2588
 * @constant
 * @type {number}
 */
export const ProtocolVersion_x2588: ProtocolVersion =
    ProtocolVersion.x2588; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary x2588
 * @constant
 * @type {number}
 */
export const x2588: ProtocolVersion =
    ProtocolVersion.x2588; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_ProtocolVersion = $._decodeEnumerated;




export const _encode_ProtocolVersion = $._encodeEnumerated;


/* eslint-enable */
