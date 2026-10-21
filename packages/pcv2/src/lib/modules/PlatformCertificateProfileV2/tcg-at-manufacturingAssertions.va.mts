/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg_attribute } from "../PlatformCertificateProfileV2/tcg-attribute.va.mjs";


/**
 * @summary tcg_at_manufacturingAssertions
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-at-manufacturingAssertions                  OBJECT IDENTIFIER ::= {tcg-attribute 30}
 * ```
 * 
 * @constant
 */
export
const tcg_at_manufacturingAssertions: OBJECT_IDENTIFIER = _OID.fromParts([
    30,
], tcg_attribute);

/* eslint-enable */
