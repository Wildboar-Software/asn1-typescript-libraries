/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { lawfulInterceptDomainId } from "../UmtsCS-HI2Operations/lawfulInterceptDomainId.va.mjs";
// export { lawfulInterceptDomainId } from "../UmtsCS-HI2Operations/lawfulInterceptDomainId.va.mjs";


/**
 * @summary threeGPPSUBDomainId
 * @description
 * 
 * 3GPP lawful-intercept subdomain, arc `threeGPP(4)` under the ETSI
 * lawful-intercept identifier.
 *
 * Parent of `hi2CS(3)`. Not carried as a value in a CS IRI. 3GPP TS 33.108,
 * annex B.3a.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * threeGPPSUBDomainId OBJECT IDENTIFIER ::= {lawfulInterceptDomainId threeGPP(4)}
 * ```
 * 
 * @constant
 */
export
const threeGPPSUBDomainId: OBJECT_IDENTIFIER = _OID.fromParts([
    /* threeGPP */ 4,
], lawfulInterceptDomainId);

/* eslint-enable */
