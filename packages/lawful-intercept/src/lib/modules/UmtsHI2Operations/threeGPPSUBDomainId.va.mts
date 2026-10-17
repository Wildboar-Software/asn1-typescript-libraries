/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { lawfulInterceptDomainId } from "../UmtsHI2Operations/lawfulInterceptDomainId.va.mjs";
// export { lawfulInterceptDomainId } from "../UmtsHI2Operations/lawfulInterceptDomainId.va.mjs";


/**
 * @summary threeGPPSUBDomainId
 * @description
 * 
 * 3GPP subdomain of the ETSI lawful-intercept object-identifier tree (annex
 * B.2). Arc threeGPP(4) under lawfulInterceptDomainId. It is the prefix of
 * hi2DomainId, which is the identifier carried in IRI-Parameters and the module
 * identifier of UmtsHI2Operations.
 * 
 * 3GPP TS 33.108, annex B.2 and annex B.3.
 * https://www.3gpp.org/DynaReport/33108.htm
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
