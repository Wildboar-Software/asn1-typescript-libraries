/* eslint-disable */
import {
    INTEGER,
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
 * @summary Type
 * @description
 *
 * Whether a connectivity or data-integrity test is
 * connection-oriented (establish a connection) or connectionless
 * (protocol exchange). Attributes `connectivityType` and
 * `dataIntegrityType`. ITU-T Rec. X.737 (11/95)
 * [§8.1.3](https://www.itu.int/rec/T-REC-X.737-199511-I), §8.1.4, A.6.3, A.6.5.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Type  ::=  INTEGER {connectionOriented(0), connectionless(1)}
 * ```
 */
export type Type = INTEGER;

/**
 * @summary Type_connectionOriented
 * @description
 *
 * Connection-oriented: test by establishing a connection (0). X.737 A.6.3.
 * @constant
 * @type {number}
 */
export const Type_connectionOriented: Type = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Type_connectionOriented
 * @description
 *
 * Connection-oriented: test by establishing a connection (0). X.737 A.6.3.
 * @constant
 * @type {number}
 */
export const connectionOriented: Type = Type_connectionOriented; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Type_connectionless
 * @description
 *
 * Connectionless: test by a protocol exchange (1). X.737 A.6.3.
 * @constant
 * @type {number}
 */
export const Type_connectionless: Type = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Type_connectionless
 * @description
 *
 * Connectionless: test by a protocol exchange (1). X.737 A.6.3.
 * @constant
 * @type {number}
 */
export const connectionless: Type = Type_connectionless; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_Type = $._decodeInteger;


export const _encode_Type = $._encodeInteger;


/* eslint-enable */
