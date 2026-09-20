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
 * @summary RIOreference_operations_Item_operation
 * @description
 *
 * Operation on a named RIO record. ISO/IEC 9041-1:1997 §12.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RIOreference-operations-Item-operation ::= INTEGER {
 *     executeRecord (0),
 *     callRecord    (1)
 * }
 * ```
 */
export
type RIOreference_operations_Item_operation = INTEGER;

/**
 * @summary RIOreference_operations_Item_operation_executeRecord
 * @description
 *
 * Execute the named RIO record. ISO/IEC 9041-1:1997 §12.2.
 * @constant
 * @type {number}
 */
export
const RIOreference_operations_Item_operation_executeRecord: RIOreference_operations_Item_operation = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RIOreference_operations_Item_operation_executeRecord
 * @description
 *
 * Execute the named RIO record. ISO/IEC 9041-1:1997 §12.2.
 * @constant
 * @type {number}
 */
export
const executeRecord: RIOreference_operations_Item_operation = RIOreference_operations_Item_operation_executeRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RIOreference_operations_Item_operation_callRecord
 * @description
 *
 * Call the named RIO record. ISO/IEC 9041-1:1997 §12.2.
 * @constant
 * @type {number}
 */
export
const RIOreference_operations_Item_operation_callRecord: RIOreference_operations_Item_operation = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RIOreference_operations_Item_operation_callRecord
 * @description
 *
 * Call the named RIO record. ISO/IEC 9041-1:1997 §12.2.
 * @constant
 * @type {number}
 */
export
const callRecord: RIOreference_operations_Item_operation = RIOreference_operations_Item_operation_callRecord; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_RIOreference_operations_Item_operation = $._decodeInteger;
export const _encode_RIOreference_operations_Item_operation = $._encodeInteger;


/* eslint-enable */
