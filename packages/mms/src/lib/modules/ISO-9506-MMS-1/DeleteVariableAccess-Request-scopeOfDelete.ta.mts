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
 * Scope of Delete for DeleteVariableAccess.
 * ISO 9506-1:2003 §14.11.1.1.1. ISO 9506-2:2003 §14.11.1.
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
 * @description
 *
 * Delete the Named Variables named in List of Name, if
 * deletion is permitted. ISO 9506-1:2003 §14.11.1.1.1.
 *
 * @constant
 * @type {number}
 */
export
const DeleteVariableAccess_Request_scopeOfDelete_specific: DeleteVariableAccess_Request_scopeOfDelete = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteVariableAccess_Request_scopeOfDelete_specific
 * @description
 *
 * Delete the Named Variables named in List of Name, if
 * deletion is permitted. ISO 9506-1:2003 §14.11.1.1.1.
 *
 * @constant
 * @type {number}
 */
export
const specific: DeleteVariableAccess_Request_scopeOfDelete = DeleteVariableAccess_Request_scopeOfDelete_specific; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteVariableAccess_Request_scopeOfDelete_aa_specific
 * @description
 *
 * Delete all Named Variables in the current AA scope
 * for which deletion is permitted.
 * ISO 9506-1:2003 §14.11.1.1.1.
 *
 * @constant
 * @type {number}
 */
export
const DeleteVariableAccess_Request_scopeOfDelete_aa_specific: DeleteVariableAccess_Request_scopeOfDelete = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteVariableAccess_Request_scopeOfDelete_aa_specific
 * @description
 *
 * Delete all Named Variables in the current AA scope
 * for which deletion is permitted.
 * ISO 9506-1:2003 §14.11.1.1.1.
 *
 * @constant
 * @type {number}
 */
export
const aa_specific: DeleteVariableAccess_Request_scopeOfDelete = DeleteVariableAccess_Request_scopeOfDelete_aa_specific; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteVariableAccess_Request_scopeOfDelete_domain
 * @description
 *
 * Delete all Named Variables in the named Domain for
 * which deletion is permitted.
 * ISO 9506-1:2003 §14.11.1.1.1.
 *
 * @constant
 * @type {number}
 */
export
const DeleteVariableAccess_Request_scopeOfDelete_domain: DeleteVariableAccess_Request_scopeOfDelete = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteVariableAccess_Request_scopeOfDelete_domain
 * @description
 *
 * Delete all Named Variables in the named Domain for
 * which deletion is permitted.
 * ISO 9506-1:2003 §14.11.1.1.1.
 *
 * @constant
 * @type {number}
 */
export
const domain: DeleteVariableAccess_Request_scopeOfDelete = DeleteVariableAccess_Request_scopeOfDelete_domain; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteVariableAccess_Request_scopeOfDelete_vmd
 * @description
 *
 * Delete all VMD-scoped Named Variables for which
 * deletion is permitted. ISO 9506-1:2003 §14.11.1.1.1.
 *
 * @constant
 * @type {number}
 */
export
const DeleteVariableAccess_Request_scopeOfDelete_vmd: DeleteVariableAccess_Request_scopeOfDelete = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteVariableAccess_Request_scopeOfDelete_vmd
 * @description
 *
 * Delete all VMD-scoped Named Variables for which
 * deletion is permitted. ISO 9506-1:2003 §14.11.1.1.1.
 *
 * @constant
 * @type {number}
 */
export
const vmd: DeleteVariableAccess_Request_scopeOfDelete = DeleteVariableAccess_Request_scopeOfDelete_vmd; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_DeleteVariableAccess_Request_scopeOfDelete = $._decodeInteger;
export const _encode_DeleteVariableAccess_Request_scopeOfDelete = $._encodeInteger;


/* eslint-enable */
