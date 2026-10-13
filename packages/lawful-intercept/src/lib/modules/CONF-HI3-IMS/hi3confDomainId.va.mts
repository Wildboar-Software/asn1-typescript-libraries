/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { threeGPPSUBDomainId } from "../CONF-HI3-IMS/threeGPPSUBDomainId.va.mjs";
// export { threeGPPSUBDomainId } from "../CONF-HI3-IMS/threeGPPSUBDomainId.va.mjs";


/**
 * @summary hi3confDomainId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * hi3confDomainId OBJECT IDENTIFIER ::= {threeGPPSUBDomainId hi3conf(11)  r17 (17) version-0 (0)}
 * ```
 * 
 * @constant
 */
export
const hi3confDomainId: OBJECT_IDENTIFIER = _OID.fromParts([
    /* hi3conf */ 11,
    /* r17 */ 17,
    /* version-0 */ 0,
], threeGPPSUBDomainId);

/* eslint-enable */
