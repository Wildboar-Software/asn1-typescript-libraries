/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { lawfulInterceptDomainId } from "../CSvoice-HI3-IP/lawfulInterceptDomainId.va.mjs";
// export { lawfulInterceptDomainId } from "../CSvoice-HI3-IP/lawfulInterceptDomainId.va.mjs";


/**
 * @summary threeGPPSUBDomainId
 * @description
 * 
 * Arc `threeGPP(4)` under `lawfulInterceptDomainId`. 3GPP HI3 domain
 * identifiers are defined under this arc. 3GPP TS 33.108, annex B.2.
 * 
 * 3GPP TS 33.108, annex B.2.
 * 
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
