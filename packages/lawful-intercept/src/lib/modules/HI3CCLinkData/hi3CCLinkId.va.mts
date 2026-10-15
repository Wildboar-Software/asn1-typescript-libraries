/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { lawfulInterceptDomainId } from "../HI3CCLinkData/lawfulInterceptDomainId.va.mjs";
// export { lawfulInterceptDomainId } from "../HI3CCLinkData/lawfulInterceptDomainId.va.mjs";


/**
 * @summary hi3CCLinkId
 * @description
 * 
 * HI3 CC-link domain. Under `lawfulInterceptDomainId`, not under `threeGPP(4)`:
 * `hi3(2)` `ccLinkLI(4)`. The operation identifier adds `version4(4)`.
 * 
 * 3GPP TS 33.108, annex J.1.
 * 
 * https://www.3gpp.org/DynaReport/33108.htm
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
