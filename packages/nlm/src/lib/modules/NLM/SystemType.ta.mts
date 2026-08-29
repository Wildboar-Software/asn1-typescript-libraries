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
 * @summary SystemType
 * @description
 *
 * Role of a protocol machine: End System (`eS`) or Intermediate System (`iS`).
 * Syntax of `operationalSystemType`. ES shall not forward non-local PDUs; IS
 * may forward according to routing information. Must be one of the superior
 * `networkEntity`'s `systemTypes`.
 * ITU-T Rec. X.283 (12/97)
 * [§5.4](https://www.itu.int/rec/T-REC-X.283-199712-I), §5.6.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SystemType  ::=  ENUMERATED {eS(1), iS(2)}
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_SystemType {
    eS = 1,
    iS = 2,
}


/**
 * @summary SystemType
 * @description
 *
 * Role of a protocol machine: End System (`eS`) or Intermediate System (`iS`).
 * Syntax of `operationalSystemType`. ES shall not forward non-local PDUs; IS
 * may forward according to routing information. Must be one of the superior
 * `networkEntity`'s `systemTypes`.
 * ITU-T Rec. X.283 (12/97)
 * [§5.4](https://www.itu.int/rec/T-REC-X.283-199712-I), §5.6.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SystemType  ::=  ENUMERATED {eS(1), iS(2)}
 * ```
 *
 * @enum {number}
 */
export type SystemType = _enum_for_SystemType;


/**
 * @summary SystemType
 * @description
 *
 * Role of a protocol machine: End System (`eS`) or Intermediate System (`iS`).
 * Syntax of `operationalSystemType`. ES shall not forward non-local PDUs; IS
 * may forward according to routing information. Must be one of the superior
 * `networkEntity`'s `systemTypes`.
 * ITU-T Rec. X.283 (12/97)
 * [§5.4](https://www.itu.int/rec/T-REC-X.283-199712-I), §5.6.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SystemType  ::=  ENUMERATED {eS(1), iS(2)}
 * ```
 *
 * @enum {number}
 */
export const SystemType = _enum_for_SystemType;


/**
 * @summary SystemType_eS
 * @description
 *
 * End System: shall not forward non-local PDUs.
 * ITU-T Rec. X.283 (12/97)
 * [§5.6](https://www.itu.int/rec/T-REC-X.283-199712-I).
 *
 * @constant
 * @type {number}
 */
export const SystemType_eS: SystemType =
    SystemType.eS; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary eS
 * @description
 *
 * End System: shall not forward non-local PDUs.
 * ITU-T Rec. X.283 (12/97)
 * [§5.6](https://www.itu.int/rec/T-REC-X.283-199712-I).
 *
 * @constant
 * @type {number}
 */
export const eS: SystemType = SystemType.eS; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary SystemType_iS
 * @description
 *
 * Intermediate System: may forward according to routing information.
 * ITU-T Rec. X.283 (12/97)
 * [§5.6](https://www.itu.int/rec/T-REC-X.283-199712-I).
 *
 * @constant
 * @type {number}
 */
export const SystemType_iS: SystemType =
    SystemType.iS; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary iS
 * @description
 *
 * Intermediate System: may forward according to routing information.
 * ITU-T Rec. X.283 (12/97)
 * [§5.6](https://www.itu.int/rec/T-REC-X.283-199712-I).
 *
 * @constant
 * @type {number}
 */
export const iS: SystemType = SystemType.iS; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_SystemType = $._decodeEnumerated;




export const _encode_SystemType = $._encodeEnumerated;


/* eslint-enable */
