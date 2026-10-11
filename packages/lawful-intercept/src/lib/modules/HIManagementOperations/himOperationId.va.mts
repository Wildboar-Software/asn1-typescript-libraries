/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { himDomainId } from "../HIManagementOperations/himDomainId.va.mjs";
// export { himDomainId } from "../HIManagementOperations/himDomainId.va.mjs";


/**
 * @summary himOperationId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * himOperationId OBJECT IDENTIFIER ::= {himDomainId version3(3)}
 * ```
 * 
 * @constant
 */
export
const himOperationId: OBJECT_IDENTIFIER = _OID.fromParts([
    /* version3 */ 3,
], himDomainId);

/* eslint-enable */
