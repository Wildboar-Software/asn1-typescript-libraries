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
 * @summary CommonCreationAndDeletionInfo
 * @description
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
export const CommonCreationAndDeletionInfo_unknown: CommonCreationAndDeletionInfo = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CommonCreationAndDeletionInfo_unknown
 * @constant
 * @type {number}
 */
export const unknown: CommonCreationAndDeletionInfo = CommonCreationAndDeletionInfo_unknown; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CommonCreationAndDeletionInfo_ressourceOperation
 * @constant
 * @type {number}
 */
export const CommonCreationAndDeletionInfo_ressourceOperation: CommonCreationAndDeletionInfo = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CommonCreationAndDeletionInfo_ressourceOperation
 * @constant
 * @type {number}
 */
export const ressourceOperation: CommonCreationAndDeletionInfo = CommonCreationAndDeletionInfo_ressourceOperation; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CommonCreationAndDeletionInfo_managementOperation
 * @constant
 * @type {number}
 */
export const CommonCreationAndDeletionInfo_managementOperation: CommonCreationAndDeletionInfo = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CommonCreationAndDeletionInfo_managementOperation
 * @constant
 * @type {number}
 */
export const managementOperation: CommonCreationAndDeletionInfo = CommonCreationAndDeletionInfo_managementOperation; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_CommonCreationAndDeletionInfo = $._decodeInteger;


export const _encode_CommonCreationAndDeletionInfo = $._encodeInteger;


/* eslint-enable */
