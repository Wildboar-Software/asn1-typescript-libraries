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

/* START_OF_SYMBOL_DEFINITION OperationType */
/**
 * @summary OperationType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OperationType  ::=  INTEGER {
 *   action(0), create(1), delete(2), get(3), replace(4), addMember(5),
 *   removeMember(6), replaceWithDefault(7), multipleObjectSelection(8),
 *   filter(9)}
 * ```
 */
export type OperationType = INTEGER;
/* END_OF_SYMBOL_DEFINITION OperationType */

/* START_OF_SYMBOL_DEFINITION OperationType_action */
/**
 * @summary OperationType_action
 * @constant
 * @type {number}
 */
export const OperationType_action: OperationType = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION OperationType_action */

/* START_OF_SYMBOL_DEFINITION action */
/**
 * @summary OperationType_action
 * @constant
 * @type {number}
 */
export const action: OperationType = OperationType_action; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION action */

/* START_OF_SYMBOL_DEFINITION OperationType_create */
/**
 * @summary OperationType_create
 * @constant
 * @type {number}
 */
export const OperationType_create: OperationType = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION OperationType_create */

/* START_OF_SYMBOL_DEFINITION create */
/**
 * @summary OperationType_create
 * @constant
 * @type {number}
 */
export const create: OperationType = OperationType_create; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION create */

/* START_OF_SYMBOL_DEFINITION OperationType_delete_ */
/**
 * @summary OperationType_delete_
 * @constant
 * @type {number}
 */
export const OperationType_delete_: OperationType = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION OperationType_delete_ */

/* START_OF_SYMBOL_DEFINITION delete_ */
/**
 * @summary OperationType_delete_
 * @constant
 * @type {number}
 */
export const delete_: OperationType = OperationType_delete_; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION delete_ */

/* START_OF_SYMBOL_DEFINITION OperationType_get_ */
/**
 * @summary OperationType_get_
 * @constant
 * @type {number}
 */
export const OperationType_get_: OperationType = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION OperationType_get_ */

/* START_OF_SYMBOL_DEFINITION get_ */
/**
 * @summary OperationType_get_
 * @constant
 * @type {number}
 */
export const get_: OperationType = OperationType_get_; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION get_ */

/* START_OF_SYMBOL_DEFINITION OperationType_replace */
/**
 * @summary OperationType_replace
 * @constant
 * @type {number}
 */
export const OperationType_replace: OperationType = 4; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION OperationType_replace */

/* START_OF_SYMBOL_DEFINITION replace */
/**
 * @summary OperationType_replace
 * @constant
 * @type {number}
 */
export const replace: OperationType = OperationType_replace; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION replace */

/* START_OF_SYMBOL_DEFINITION OperationType_addMember */
/**
 * @summary OperationType_addMember
 * @constant
 * @type {number}
 */
export const OperationType_addMember: OperationType = 5; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION OperationType_addMember */

/* START_OF_SYMBOL_DEFINITION addMember */
/**
 * @summary OperationType_addMember
 * @constant
 * @type {number}
 */
export const addMember: OperationType = OperationType_addMember; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION addMember */

/* START_OF_SYMBOL_DEFINITION OperationType_removeMember */
/**
 * @summary OperationType_removeMember
 * @constant
 * @type {number}
 */
export const OperationType_removeMember: OperationType = 6; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION OperationType_removeMember */

/* START_OF_SYMBOL_DEFINITION removeMember */
/**
 * @summary OperationType_removeMember
 * @constant
 * @type {number}
 */
export const removeMember: OperationType = OperationType_removeMember; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION removeMember */

/* START_OF_SYMBOL_DEFINITION OperationType_replaceWithDefault */
/**
 * @summary OperationType_replaceWithDefault
 * @constant
 * @type {number}
 */
export const OperationType_replaceWithDefault: OperationType = 7; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION OperationType_replaceWithDefault */

/* START_OF_SYMBOL_DEFINITION replaceWithDefault */
/**
 * @summary OperationType_replaceWithDefault
 * @constant
 * @type {number}
 */
export const replaceWithDefault: OperationType = OperationType_replaceWithDefault; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION replaceWithDefault */

/* START_OF_SYMBOL_DEFINITION OperationType_multipleObjectSelection */
/**
 * @summary OperationType_multipleObjectSelection
 * @constant
 * @type {number}
 */
export const OperationType_multipleObjectSelection: OperationType = 8; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION OperationType_multipleObjectSelection */

/* START_OF_SYMBOL_DEFINITION multipleObjectSelection */
/**
 * @summary OperationType_multipleObjectSelection
 * @constant
 * @type {number}
 */
export const multipleObjectSelection: OperationType = OperationType_multipleObjectSelection; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION multipleObjectSelection */

/* START_OF_SYMBOL_DEFINITION OperationType_filter */
/**
 * @summary OperationType_filter
 * @constant
 * @type {number}
 */
export const OperationType_filter: OperationType = 9; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION OperationType_filter */

/* START_OF_SYMBOL_DEFINITION filter */
/**
 * @summary OperationType_filter
 * @constant
 * @type {number}
 */
export const filter: OperationType = OperationType_filter; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION filter */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OperationType */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OperationType */

/* START_OF_SYMBOL_DEFINITION _decode_OperationType */
export const _decode_OperationType = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_OperationType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OperationType */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OperationType */

/* START_OF_SYMBOL_DEFINITION _encode_OperationType */
export const _encode_OperationType = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_OperationType */

/* eslint-enable */
