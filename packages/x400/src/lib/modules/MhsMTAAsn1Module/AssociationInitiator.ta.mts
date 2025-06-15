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

/* START_OF_SYMBOL_DEFINITION AssociationInitiator */
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
/* END_OF_SYMBOL_DEFINITION AssociationInitiator */

/* START_OF_SYMBOL_DEFINITION AssociationInitiator_local */
/**
 * @summary AssociationInitiator_local
 * @constant
 * @type {number}
 */
export const AssociationInitiator_local: AssociationInitiator = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION AssociationInitiator_local */

/* START_OF_SYMBOL_DEFINITION local */
/**
 * @summary AssociationInitiator_local
 * @constant
 * @type {number}
 */
export const local: AssociationInitiator = AssociationInitiator_local; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION local */

/* START_OF_SYMBOL_DEFINITION AssociationInitiator_remote */
/**
 * @summary AssociationInitiator_remote
 * @constant
 * @type {number}
 */
export const AssociationInitiator_remote: AssociationInitiator = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION AssociationInitiator_remote */

/* START_OF_SYMBOL_DEFINITION remote */
/**
 * @summary AssociationInitiator_remote
 * @constant
 * @type {number}
 */
export const remote: AssociationInitiator = AssociationInitiator_remote; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION remote */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AssociationInitiator */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AssociationInitiator */

/* START_OF_SYMBOL_DEFINITION _decode_AssociationInitiator */
export const _decode_AssociationInitiator = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_AssociationInitiator */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AssociationInitiator */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AssociationInitiator */

/* START_OF_SYMBOL_DEFINITION _encode_AssociationInitiator */
export const _encode_AssociationInitiator = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_AssociationInitiator */

/* eslint-enable */
