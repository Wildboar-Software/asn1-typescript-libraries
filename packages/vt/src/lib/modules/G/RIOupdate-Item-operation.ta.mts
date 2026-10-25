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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RIOupdate_Item_operation
 * @description
 *
 * RIO record operation. `updates` is used only with `createRecord`.
 * ISO/IEC 9041-1:1997 §12.2.5.
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
 * @description
 *
 * Erase the entire RIO. ISO/IEC 9041-1:1997 §12.2.5.
 * @constant
 * @type {number}
 */
export
const RIOupdate_Item_operation_eraseRIO = 0 satisfies RIOupdate_Item_operation; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RIOupdate_Item_operation_eraseRIO
 * @description
 *
 * Erase the entire RIO. ISO/IEC 9041-1:1997 §12.2.5.
 * @constant
 * @type {number}
 */
export
const eraseRIO = RIOupdate_Item_operation_eraseRIO satisfies RIOupdate_Item_operation; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RIOupdate_Item_operation_deleteRecord
 * @description
 *
 * Delete one named record. ISO/IEC 9041-1:1997 §12.2.5.
 * @constant
 * @type {number}
 */
export
const RIOupdate_Item_operation_deleteRecord = 1 satisfies RIOupdate_Item_operation; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RIOupdate_Item_operation_deleteRecord
 * @description
 *
 * Delete one named record. ISO/IEC 9041-1:1997 §12.2.5.
 * @constant
 * @type {number}
 */
export
const deleteRecord = RIOupdate_Item_operation_deleteRecord satisfies RIOupdate_Item_operation; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RIOupdate_Item_operation_createRecord
 * @description
 *
 * Create a named record; `updates` absent ⇒ empty record. ISO/IEC
 * 9041-1:1997 §12.2.5.
 * @constant
 * @type {number}
 */
export
const RIOupdate_Item_operation_createRecord = 2 satisfies RIOupdate_Item_operation; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RIOupdate_Item_operation_createRecord
 * @description
 *
 * Create a named record; `updates` absent ⇒ empty record. ISO/IEC
 * 9041-1:1997 §12.2.5.
 * @constant
 * @type {number}
 */
export
const createRecord = RIOupdate_Item_operation_createRecord satisfies RIOupdate_Item_operation; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_RIOupdate_Item_operation = $._decodeInteger;
export const _encode_RIOupdate_Item_operation = $._encodeInteger;


/* eslint-enable */
