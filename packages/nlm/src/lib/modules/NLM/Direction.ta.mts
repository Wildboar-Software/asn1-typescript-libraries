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
 * @summary Direction
 * @description
 *
 * Call direction. Syntax of `direction` on a virtual call.
 * ITU-T Rec. X.283 (12/97)
 * [§5.11](https://www.itu.int/rec/T-REC-X.283-199712-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Direction  ::=  ENUMERATED {incoming(0), outgoing(1)}
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_Direction {
    incoming = 0,
    outgoing = 1,
}


/**
 * @summary Direction
 * @description
 *
 * Call direction. Syntax of `direction` on a virtual call.
 * ITU-T Rec. X.283 (12/97)
 * [§5.11](https://www.itu.int/rec/T-REC-X.283-199712-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Direction  ::=  ENUMERATED {incoming(0), outgoing(1)}
 * ```
 *
 * @enum {number}
 */
export type Direction = _enum_for_Direction;


/**
 * @summary Direction
 * @description
 *
 * Call direction. Syntax of `direction` on a virtual call.
 * ITU-T Rec. X.283 (12/97)
 * [§5.11](https://www.itu.int/rec/T-REC-X.283-199712-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Direction  ::=  ENUMERATED {incoming(0), outgoing(1)}
 * ```
 *
 * @enum {number}
 */
export const Direction = _enum_for_Direction;


/**
 * @summary Direction_incoming
 * @description
 *
 * Incoming call.
 * ITU-T Rec. X.283 (12/97)
 * [§5.11](https://www.itu.int/rec/T-REC-X.283-199712-I).
 *
 * @constant
 * @type {number}
 */
export const Direction_incoming: Direction =
    Direction.incoming; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary incoming
 * @description
 *
 * Incoming call.
 * ITU-T Rec. X.283 (12/97)
 * [§5.11](https://www.itu.int/rec/T-REC-X.283-199712-I).
 *
 * @constant
 * @type {number}
 */
export const incoming: Direction =
    Direction.incoming; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Direction_outgoing
 * @description
 *
 * Outgoing call.
 * ITU-T Rec. X.283 (12/97)
 * [§5.11](https://www.itu.int/rec/T-REC-X.283-199712-I).
 *
 * @constant
 * @type {number}
 */
export const Direction_outgoing: Direction =
    Direction.outgoing; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary outgoing
 * @description
 *
 * Outgoing call.
 * ITU-T Rec. X.283 (12/97)
 * [§5.11](https://www.itu.int/rec/T-REC-X.283-199712-I).
 *
 * @constant
 * @type {number}
 */
export const outgoing: Direction =
    Direction.outgoing; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_Direction = $._decodeEnumerated;




export const _encode_Direction = $._encodeEnumerated;


/* eslint-enable */
