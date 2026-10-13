/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { lawfulInterceptDomainId } from "../TETRA-HI2Operations/lawfulInterceptDomainId.va.mjs";
// export { lawfulInterceptDomainId } from "../TETRA-HI2Operations/lawfulInterceptDomainId.va.mjs";


/**
 * @summary tETRADomainId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tETRADomainId OBJECT IDENTIFIER ::= {lawfulInterceptDomainId tETRA(6)}
 * ```
 * 
 * @constant
 */
export
const tETRADomainId: OBJECT_IDENTIFIER = _OID.fromParts([
    /* tETRA */ 6,
], lawfulInterceptDomainId);

/* eslint-enable */
