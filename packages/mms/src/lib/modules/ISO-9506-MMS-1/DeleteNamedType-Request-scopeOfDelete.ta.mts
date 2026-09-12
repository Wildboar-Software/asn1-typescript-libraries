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
 * @summary DeleteNamedType_Request_scopeOfDelete
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DeleteNamedType-Request-scopeOfDelete ::= INTEGER {
 *     specific (0),
 *     aa-specific (1),
 *     domain (2),
 *     vmd (3)
 * } (0..3)
 * ```
 */
export
type DeleteNamedType_Request_scopeOfDelete = INTEGER;

/**
 * @summary DeleteNamedType_Request_scopeOfDelete_specific
 * @constant
 * @type {number}
 */
export
const DeleteNamedType_Request_scopeOfDelete_specific: DeleteNamedType_Request_scopeOfDelete = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteNamedType_Request_scopeOfDelete_specific
 * @constant
 * @type {number}
 */
export
const specific: DeleteNamedType_Request_scopeOfDelete = DeleteNamedType_Request_scopeOfDelete_specific; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteNamedType_Request_scopeOfDelete_aa_specific
 * @constant
 * @type {number}
 */
export
const DeleteNamedType_Request_scopeOfDelete_aa_specific: DeleteNamedType_Request_scopeOfDelete = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteNamedType_Request_scopeOfDelete_aa_specific
 * @constant
 * @type {number}
 */
export
const aa_specific: DeleteNamedType_Request_scopeOfDelete = DeleteNamedType_Request_scopeOfDelete_aa_specific; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteNamedType_Request_scopeOfDelete_domain
 * @constant
 * @type {number}
 */
export
const DeleteNamedType_Request_scopeOfDelete_domain: DeleteNamedType_Request_scopeOfDelete = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteNamedType_Request_scopeOfDelete_domain
 * @constant
 * @type {number}
 */
export
const domain: DeleteNamedType_Request_scopeOfDelete = DeleteNamedType_Request_scopeOfDelete_domain; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteNamedType_Request_scopeOfDelete_vmd
 * @constant
 * @type {number}
 */
export
const DeleteNamedType_Request_scopeOfDelete_vmd: DeleteNamedType_Request_scopeOfDelete = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteNamedType_Request_scopeOfDelete_vmd
 * @constant
 * @type {number}
 */
export
const vmd: DeleteNamedType_Request_scopeOfDelete = DeleteNamedType_Request_scopeOfDelete_vmd; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_DeleteNamedType_Request_scopeOfDelete = $._decodeInteger;
export const _encode_DeleteNamedType_Request_scopeOfDelete = $._encodeInteger;


/* eslint-enable */
