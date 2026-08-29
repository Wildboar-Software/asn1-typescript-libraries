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
 * Protocol version on a PLE or in `SupportedProtocol.versions`. Syntax of
 * `protocolVersionSupported`. Enumerators: ISO/IEC 8208 v1/v2 and
 * `x2584`/`x2588`.
 * ITU-T Rec. X.283 (12/97)
 * [§5.10](https://www.itu.int/rec/T-REC-X.283-199712-I), §6.2.
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
 * Protocol version on a PLE or in `SupportedProtocol.versions`. Syntax of
 * `protocolVersionSupported`. Enumerators: ISO/IEC 8208 v1/v2 and
 * `x2584`/`x2588`.
 * ITU-T Rec. X.283 (12/97)
 * [§5.10](https://www.itu.int/rec/T-REC-X.283-199712-I), §6.2.
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
 * Protocol version on a PLE or in `SupportedProtocol.versions`. Syntax of
 * `protocolVersionSupported`. Enumerators: ISO/IEC 8208 v1/v2 and
 * `x2584`/`x2588`.
 * ITU-T Rec. X.283 (12/97)
 * [§5.10](https://www.itu.int/rec/T-REC-X.283-199712-I), §6.2.
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
 * @description
 *
 * ISO/IEC 8208 version 1.
 * ITU-T Rec. X.283 (12/97)
 * [§5.10](https://www.itu.int/rec/T-REC-X.283-199712-I).
 *
 * @constant
 * @type {number}
 */
export const ProtocolVersion_iSO8208V1: ProtocolVersion =
    ProtocolVersion.iSO8208V1; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary iSO8208V1
 * @description
 *
 * ISO/IEC 8208 version 1.
 * ITU-T Rec. X.283 (12/97)
 * [§5.10](https://www.itu.int/rec/T-REC-X.283-199712-I).
 *
 * @constant
 * @type {number}
 */
export const iSO8208V1: ProtocolVersion =
    ProtocolVersion.iSO8208V1; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary ProtocolVersion_iSO8208V2
 * @description
 *
 * ISO/IEC 8208 version 2.
 * ITU-T Rec. X.283 (12/97)
 * [§5.10](https://www.itu.int/rec/T-REC-X.283-199712-I).
 *
 * @constant
 * @type {number}
 */
export const ProtocolVersion_iSO8208V2: ProtocolVersion =
    ProtocolVersion.iSO8208V2; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary iSO8208V2
 * @description
 *
 * ISO/IEC 8208 version 2.
 * ITU-T Rec. X.283 (12/97)
 * [§5.10](https://www.itu.int/rec/T-REC-X.283-199712-I).
 *
 * @constant
 * @type {number}
 */
export const iSO8208V2: ProtocolVersion =
    ProtocolVersion.iSO8208V2; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary ProtocolVersion_x2584
 * @description
 *
 * Enumerator `x2584` as assigned in §6.2 for `protocolVersionSupported`.
 * ITU-T Rec. X.283 (12/97)
 * [§5.10](https://www.itu.int/rec/T-REC-X.283-199712-I), §6.2.
 *
 * @constant
 * @type {number}
 */
export const ProtocolVersion_x2584: ProtocolVersion =
    ProtocolVersion.x2584; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary x2584
 * @description
 *
 * Enumerator `x2584` as assigned in §6.2 for `protocolVersionSupported`.
 * ITU-T Rec. X.283 (12/97)
 * [§5.10](https://www.itu.int/rec/T-REC-X.283-199712-I), §6.2.
 *
 * @constant
 * @type {number}
 */
export const x2584: ProtocolVersion =
    ProtocolVersion.x2584; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary ProtocolVersion_x2588
 * @description
 *
 * Enumerator `x2588` as assigned in §6.2 for `protocolVersionSupported`.
 * ITU-T Rec. X.283 (12/97)
 * [§5.10](https://www.itu.int/rec/T-REC-X.283-199712-I), §6.2.
 *
 * @constant
 * @type {number}
 */
export const ProtocolVersion_x2588: ProtocolVersion =
    ProtocolVersion.x2588; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary x2588
 * @description
 *
 * Enumerator `x2588` as assigned in §6.2 for `protocolVersionSupported`.
 * ITU-T Rec. X.283 (12/97)
 * [§5.10](https://www.itu.int/rec/T-REC-X.283-199712-I), §6.2.
 *
 * @constant
 * @type {number}
 */
export const x2588: ProtocolVersion =
    ProtocolVersion.x2588; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_ProtocolVersion = $._decodeEnumerated;




export const _encode_ProtocolVersion = $._encodeEnumerated;


/* eslint-enable */
