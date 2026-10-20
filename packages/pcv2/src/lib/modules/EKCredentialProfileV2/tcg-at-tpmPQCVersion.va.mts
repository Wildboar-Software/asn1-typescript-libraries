/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg_attribute } from "../EKCredentialProfileV2/tcg-attribute.va.mjs";
// export { tcg_attribute } from "../EKCredentialProfileV2/tcg-attribute.va.mjs";


/**
 * @summary tcg_at_tpmPQCVersion
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-at-tpmPQCVersion            OBJECT IDENTIFIER ::= {tcg-attribute 27}
 * ```
 * 
 * @constant
 */
export
const tcg_at_tpmPQCVersion: OBJECT_IDENTIFIER = _OID.fromParts([
    27,
], tcg_attribute);

/* eslint-enable */
