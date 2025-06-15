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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

/**
 * @summary AssociationInitiator
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AssociationInitiator  ::=  INTEGER {local(0), remote(1)}
 * ```
 */
export type AssociationInitiator = INTEGER;

/**
 * @summary AssociationInitiator_local
 * @constant
 * @type {number}
 */
export const AssociationInitiator_local: AssociationInitiator = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AssociationInitiator_local
 * @constant
 * @type {number}
 */
export const local: AssociationInitiator = AssociationInitiator_local; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AssociationInitiator_remote
 * @constant
 * @type {number}
 */
export const AssociationInitiator_remote: AssociationInitiator = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AssociationInitiator_remote
 * @constant
 * @type {number}
 */
export const remote: AssociationInitiator = AssociationInitiator_remote; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_AssociationInitiator = $._decodeInteger;


export const _encode_AssociationInitiator = $._encodeInteger;


/* eslint-enable */
