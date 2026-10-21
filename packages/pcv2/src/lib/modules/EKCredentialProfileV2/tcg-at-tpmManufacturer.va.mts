/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg_attribute } from "../EKCredentialProfileV2/tcg-attribute.va.mjs";


/**
 * @summary tcg_at_tpmManufacturer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-at-tpmManufacturer          OBJECT IDENTIFIER ::= {tcg-attribute 1}
 * ```
 * 
 * @constant
 */
export
const tcg_at_tpmManufacturer: OBJECT_IDENTIFIER = _OID.fromParts([
    1,
], tcg_attribute);

/* eslint-enable */
