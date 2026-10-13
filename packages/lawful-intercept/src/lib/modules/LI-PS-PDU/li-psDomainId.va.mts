/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { lawfulInterceptDomainId } from "../LI-PS-PDU/lawfulInterceptDomainId.va.mjs";
// export { lawfulInterceptDomainId } from "../LI-PS-PDU/lawfulInterceptDomainId.va.mjs";


/**
 * @summary li_psDomainId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * li-psDomainId OBJECT IDENTIFIER ::= {lawfulInterceptDomainId li-ps(5) genHeader(1) version35(35)}
 * ```
 * 
 * @constant
 */
export
const li_psDomainId: OBJECT_IDENTIFIER = _OID.fromParts([
    /* li-ps */ 5,
    /* genHeader */ 1,
    /* version35 */ 35,
], lawfulInterceptDomainId);

/* eslint-enable */
