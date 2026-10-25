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
 * @summary CommonCreationAndDeletionInfo
 * @description
 *
 * Defined in ITU-T X.411 (1999) (accounting objects).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CommonCreationAndDeletionInfo  ::=  INTEGER {
 *   unknown(0), ressourceOperation(1), managementOperation(2)}
 * ```
 */
export type CommonCreationAndDeletionInfo = INTEGER;

/**
 * @summary CommonCreationAndDeletionInfo_unknown
 * @constant
 * @type {number}
 */
export const CommonCreationAndDeletionInfo_unknown = 0 satisfies CommonCreationAndDeletionInfo; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CommonCreationAndDeletionInfo_unknown
 * @constant
 * @type {number}
 */
export const unknown = CommonCreationAndDeletionInfo_unknown; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CommonCreationAndDeletionInfo_ressourceOperation
 * @constant
 * @type {number}
 */
export const CommonCreationAndDeletionInfo_ressourceOperation = 1 satisfies CommonCreationAndDeletionInfo; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CommonCreationAndDeletionInfo_ressourceOperation
 * @constant
 * @type {number}
 */
export const ressourceOperation = CommonCreationAndDeletionInfo_ressourceOperation; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CommonCreationAndDeletionInfo_managementOperation
 * @constant
 * @type {number}
 */
export const CommonCreationAndDeletionInfo_managementOperation = 2 satisfies CommonCreationAndDeletionInfo; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CommonCreationAndDeletionInfo_managementOperation
 * @constant
 * @type {number}
 */
export const managementOperation = CommonCreationAndDeletionInfo_managementOperation; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_CommonCreationAndDeletionInfo = $._decodeInteger;


export const _encode_CommonCreationAndDeletionInfo = $._encodeInteger;


/* eslint-enable */
