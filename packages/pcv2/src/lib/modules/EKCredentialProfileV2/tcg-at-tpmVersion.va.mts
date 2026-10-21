/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg_attribute } from "../EKCredentialProfileV2/tcg-attribute.va.mjs";


/**
 * @summary tcg_at_tpmVersion
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-at-tpmVersion               OBJECT IDENTIFIER ::= {tcg-attribute 3}
 * ```
 * 
 * @constant
 */
export
const tcg_at_tpmVersion: OBJECT_IDENTIFIER = _OID.fromParts([
    3,
], tcg_attribute);

/* eslint-enable */
