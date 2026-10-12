/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { lawfulInterceptDomainId } from "../Gprs-HI3-PS/lawfulInterceptDomainId.va.mjs";
// export { lawfulInterceptDomainId } from "../Gprs-HI3-PS/lawfulInterceptDomainId.va.mjs";


/**
 * @summary hi3GPRSLIId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * hi3GPRSLIId OBJECT IDENTIFIER ::= {lawfulInterceptDomainId hi3(2) gPRSLI(3)}
 * ```
 * 
 * @constant
 */
export
const hi3GPRSLIId: OBJECT_IDENTIFIER = _OID.fromParts([
    /* hi3 */ 2,
    /* gPRSLI */ 3,
], lawfulInterceptDomainId);

/* eslint-enable */
