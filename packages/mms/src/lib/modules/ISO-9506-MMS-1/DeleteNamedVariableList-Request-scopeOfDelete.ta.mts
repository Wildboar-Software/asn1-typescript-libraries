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
 * @summary DeleteNamedVariableList_Request_scopeOfDelete
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DeleteNamedVariableList-Request-scopeOfDelete ::= INTEGER {
 *     specific (0),
 *     aa-specific (1),
 *     domain (2),
 *     vmd (3)
 * } (0..3)
 * ```
 */
export
type DeleteNamedVariableList_Request_scopeOfDelete = INTEGER;

/**
 * @summary DeleteNamedVariableList_Request_scopeOfDelete_specific
 * @constant
 * @type {number}
 */
export
const DeleteNamedVariableList_Request_scopeOfDelete_specific: DeleteNamedVariableList_Request_scopeOfDelete = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteNamedVariableList_Request_scopeOfDelete_specific
 * @constant
 * @type {number}
 */
export
const specific: DeleteNamedVariableList_Request_scopeOfDelete = DeleteNamedVariableList_Request_scopeOfDelete_specific; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteNamedVariableList_Request_scopeOfDelete_aa_specific
 * @constant
 * @type {number}
 */
export
const DeleteNamedVariableList_Request_scopeOfDelete_aa_specific: DeleteNamedVariableList_Request_scopeOfDelete = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteNamedVariableList_Request_scopeOfDelete_aa_specific
 * @constant
 * @type {number}
 */
export
const aa_specific: DeleteNamedVariableList_Request_scopeOfDelete = DeleteNamedVariableList_Request_scopeOfDelete_aa_specific; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteNamedVariableList_Request_scopeOfDelete_domain
 * @constant
 * @type {number}
 */
export
const DeleteNamedVariableList_Request_scopeOfDelete_domain: DeleteNamedVariableList_Request_scopeOfDelete = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteNamedVariableList_Request_scopeOfDelete_domain
 * @constant
 * @type {number}
 */
export
const domain: DeleteNamedVariableList_Request_scopeOfDelete = DeleteNamedVariableList_Request_scopeOfDelete_domain; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteNamedVariableList_Request_scopeOfDelete_vmd
 * @constant
 * @type {number}
 */
export
const DeleteNamedVariableList_Request_scopeOfDelete_vmd: DeleteNamedVariableList_Request_scopeOfDelete = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteNamedVariableList_Request_scopeOfDelete_vmd
 * @constant
 * @type {number}
 */
export
const vmd: DeleteNamedVariableList_Request_scopeOfDelete = DeleteNamedVariableList_Request_scopeOfDelete_vmd; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_DeleteNamedVariableList_Request_scopeOfDelete = $._decodeInteger;
export const _encode_DeleteNamedVariableList_Request_scopeOfDelete = $._encodeInteger;


/* eslint-enable */
