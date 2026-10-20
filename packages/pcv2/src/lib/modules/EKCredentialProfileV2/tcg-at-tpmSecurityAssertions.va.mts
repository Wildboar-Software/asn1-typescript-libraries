/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg_attribute } from "../EKCredentialProfileV2/tcg-attribute.va.mjs";
// export { tcg_attribute } from "../EKCredentialProfileV2/tcg-attribute.va.mjs";


/**
 * @summary tcg_at_tpmSecurityAssertions
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-at-tpmSecurityAssertions    OBJECT IDENTIFIER ::= {tcg-attribute 18}
 * ```
 * 
 * @constant
 */
export
const tcg_at_tpmSecurityAssertions: OBJECT_IDENTIFIER = _OID.fromParts([
    18,
], tcg_attribute);

/* eslint-enable */
