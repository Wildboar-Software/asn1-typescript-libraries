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
    ASN1OverflowError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DeleteVariableAccess_Request_scopeOfDelete
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DeleteVariableAccess-Request-scopeOfDelete ::= INTEGER {
 *     specific (0),
 *     aa-specific (1),
 *     domain (2),
 *     vmd (3)
 * } (0..3)
 * ```
 */
export
type DeleteVariableAccess_Request_scopeOfDelete = INTEGER;

/**
 * @summary DeleteVariableAccess_Request_scopeOfDelete_specific
 * @constant
 * @type {number}
 */
export
const DeleteVariableAccess_Request_scopeOfDelete_specific: DeleteVariableAccess_Request_scopeOfDelete = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteVariableAccess_Request_scopeOfDelete_specific
 * @constant
 * @type {number}
 */
export
const specific: DeleteVariableAccess_Request_scopeOfDelete = DeleteVariableAccess_Request_scopeOfDelete_specific; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteVariableAccess_Request_scopeOfDelete_aa_specific
 * @constant
 * @type {number}
 */
export
const DeleteVariableAccess_Request_scopeOfDelete_aa_specific: DeleteVariableAccess_Request_scopeOfDelete = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteVariableAccess_Request_scopeOfDelete_aa_specific
 * @constant
 * @type {number}
 */
export
const aa_specific: DeleteVariableAccess_Request_scopeOfDelete = DeleteVariableAccess_Request_scopeOfDelete_aa_specific; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteVariableAccess_Request_scopeOfDelete_domain
 * @constant
 * @type {number}
 */
export
const DeleteVariableAccess_Request_scopeOfDelete_domain: DeleteVariableAccess_Request_scopeOfDelete = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteVariableAccess_Request_scopeOfDelete_domain
 * @constant
 * @type {number}
 */
export
const domain: DeleteVariableAccess_Request_scopeOfDelete = DeleteVariableAccess_Request_scopeOfDelete_domain; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteVariableAccess_Request_scopeOfDelete_vmd
 * @constant
 * @type {number}
 */
export
const DeleteVariableAccess_Request_scopeOfDelete_vmd: DeleteVariableAccess_Request_scopeOfDelete = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteVariableAccess_Request_scopeOfDelete_vmd
 * @constant
 * @type {number}
 */
export
const vmd: DeleteVariableAccess_Request_scopeOfDelete = DeleteVariableAccess_Request_scopeOfDelete_vmd; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_DeleteVariableAccess_Request_scopeOfDelete = (el: _Element): DeleteVariableAccess_Request_scopeOfDelete => {
    const value = $._decodeInteger(el);
    const n = typeof value === "bigint" ? Number(value) : value;
    if (n < 0 || n > 3) {
        throw new ASN1OverflowError("DeleteVariableAccess_Request_scopeOfDelete violates INTEGER range constraint");
    }
    return value;
};
export const _encode_DeleteVariableAccess_Request_scopeOfDelete = $._encodeInteger;


/* eslint-enable */
