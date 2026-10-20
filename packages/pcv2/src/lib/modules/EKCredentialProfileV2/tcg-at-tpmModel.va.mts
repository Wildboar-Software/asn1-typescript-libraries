/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg_attribute } from "../EKCredentialProfileV2/tcg-attribute.va.mjs";
// export { tcg_attribute } from "../EKCredentialProfileV2/tcg-attribute.va.mjs";


/**
 * @summary tcg_at_tpmModel
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-at-tpmModel                 OBJECT IDENTIFIER ::= {tcg-attribute 2}
 * ```
 * 
 * @constant
 */
export
const tcg_at_tpmModel: OBJECT_IDENTIFIER = _OID.fromParts([
    2,
], tcg_attribute);

/* eslint-enable */
