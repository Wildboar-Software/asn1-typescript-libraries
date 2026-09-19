/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";



/**
 * @summary hi3CCLinkId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * hi3CCLinkId OBJECT IDENTIFIER ::= {lawfulInterceptDomainId hi3(2) ccLinkLI(4)}
 * ```
 * 
 * @constant
 */
export
const hi3CCLinkId: OBJECT_IDENTIFIER = _OID.fromParts([
    /* hi3 */ 2,
    /* ccLinkLI */ 4,
], lawfulInterceptDomainId);

/* eslint-enable */
