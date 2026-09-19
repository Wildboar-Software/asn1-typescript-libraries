/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { lawfulInterceptDomainId } from "../HI2Operations/lawfulInterceptDomainId.va.mjs";
// export { lawfulInterceptDomainId } from "../HI2Operations/lawfulInterceptDomainId.va.mjs";


/**
 * @summary hi2DomainId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * hi2DomainId OBJECT IDENTIFIER ::= {lawfulInterceptDomainId hi2(1)}
 * ```
 * 
 * @constant
 */
export
const hi2DomainId: OBJECT_IDENTIFIER = _OID.fromParts([
    /* hi2 */ 1,
], lawfulInterceptDomainId);

/* eslint-enable */
