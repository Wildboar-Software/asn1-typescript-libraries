/* eslint-disable */
import {
    type INTEGER,
    type ASN1Element as _Element,
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
 * @summary AssociationInitiator
 * @description
 *
 * Defined in ITU-T X.411 (1999) (MTA managed objects).
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
export const AssociationInitiator_local: 0 = 0 satisfies AssociationInitiator; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AssociationInitiator_local
 * @constant
 * @type {number}
 */
export const local: 0 = AssociationInitiator_local; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AssociationInitiator_remote
 * @constant
 * @type {number}
 */
export const AssociationInitiator_remote: 1 = 1 satisfies AssociationInitiator; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AssociationInitiator_remote
 * @constant
 * @type {number}
 */
export const remote: 1 = AssociationInitiator_remote; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_AssociationInitiator: $.ASN1Decoder<INTEGER> = $._decodeInteger;


export const _encode_AssociationInitiator: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
