/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg_attribute } from "../PlatformCertificateProfileV2/tcg-attribute.va.mjs";


/**
 * @summary tcg_at_platformOwnership
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-at-platformOwnership                        OBJECT IDENTIFIER ::= {tcg-attribute 29}
 * ```
 * 
 * @constant
 */
export
const tcg_at_platformOwnership: OBJECT_IDENTIFIER = _OID.fromParts([
    29,
], tcg_attribute);

/* eslint-enable */
