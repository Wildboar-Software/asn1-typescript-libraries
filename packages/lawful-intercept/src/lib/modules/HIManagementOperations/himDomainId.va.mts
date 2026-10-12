/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { lawfulInterceptDomainId } from "../HIManagementOperations/lawfulInterceptDomainId.va.mjs";
// export { lawfulInterceptDomainId } from "../HIManagementOperations/lawfulInterceptDomainId.va.mjs";


/**
 * @summary himDomainId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * himDomainId OBJECT IDENTIFIER ::= {lawfulInterceptDomainId him(3)}
 * ```
 * 
 * @constant
 */
export
const himDomainId: OBJECT_IDENTIFIER = _OID.fromParts([
    /* him */ 3,
], lawfulInterceptDomainId);

/* eslint-enable */
