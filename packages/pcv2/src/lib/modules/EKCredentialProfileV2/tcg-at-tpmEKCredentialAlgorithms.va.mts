/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg_attribute } from "../EKCredentialProfileV2/tcg-attribute.va.mjs";
// export { tcg_attribute } from "../EKCredentialProfileV2/tcg-attribute.va.mjs";


/**
 * @summary tcg_at_tpmEKCredentialAlgorithms
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-at-tpmEKCredentialAlgorithms OBJECT IDENTIFIER ::= {tcg-attribute 26}
 * ```
 * 
 * @constant
 */
export
const tcg_at_tpmEKCredentialAlgorithms: OBJECT_IDENTIFIER = _OID.fromParts([
    26,
], tcg_attribute);

/* eslint-enable */
