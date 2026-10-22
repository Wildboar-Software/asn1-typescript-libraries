/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg_attribute } from "../PlatformCertificateProfileV2/tcg-attribute.va.mjs";


/**
 * @summary tcg_at_previousPlatformCertificates
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-at-previousPlatformCertificates             OBJECT IDENTIFIER ::= {tcg-attribute 26}
 * ```
 * 
 * @constant
 */
export
const tcg_at_previousPlatformCertificates: OBJECT_IDENTIFIER = _OID.fromParts([
    26,
], tcg_attribute);

/* eslint-enable */
