/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg_attribute } from "../EKCredentialProfileV2/tcg-attribute.va.mjs";


/**
 * @summary tcg_at_tpmSpecification
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-at-tpmSpecification         OBJECT IDENTIFIER ::= {tcg-attribute 16}
 * ```
 * 
 * @constant
 */
export
const tcg_at_tpmSpecification: OBJECT_IDENTIFIER = _OID.fromParts([
    16,
], tcg_attribute);

/* eslint-enable */
