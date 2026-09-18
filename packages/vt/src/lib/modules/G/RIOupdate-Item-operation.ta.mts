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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RIOupdate_Item_operation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RIOupdate-Item-operation ::= INTEGER {
 *     eraseRIO     (0),
 *     deleteRecord (1),
 *     createRecord (2)
 * }
 * ```
 */
export
type RIOupdate_Item_operation = INTEGER;

/**
 * @summary RIOupdate_Item_operation_eraseRIO
 * @constant
 * @type {number}
 */
export
const RIOupdate_Item_operation_eraseRIO: RIOupdate_Item_operation = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RIOupdate_Item_operation_eraseRIO
 * @constant
 * @type {number}
 */
export
const eraseRIO: RIOupdate_Item_operation = RIOupdate_Item_operation_eraseRIO; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RIOupdate_Item_operation_deleteRecord
 * @constant
 * @type {number}
 */
export
const RIOupdate_Item_operation_deleteRecord: RIOupdate_Item_operation = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RIOupdate_Item_operation_deleteRecord
 * @constant
 * @type {number}
 */
export
const deleteRecord: RIOupdate_Item_operation = RIOupdate_Item_operation_deleteRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RIOupdate_Item_operation_createRecord
 * @constant
 * @type {number}
 */
export
const RIOupdate_Item_operation_createRecord: RIOupdate_Item_operation = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RIOupdate_Item_operation_createRecord
 * @constant
 * @type {number}
 */
export
const createRecord: RIOupdate_Item_operation = RIOupdate_Item_operation_createRecord; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_RIOupdate_Item_operation = $._decodeInteger;
export const _encode_RIOupdate_Item_operation = $._encodeInteger;


/* eslint-enable */
