/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg_common } from "../PlatformCertificateProfileV2/tcg-common.va.mjs";


/**
 * @summary tcg_at_platformIdentifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-at-platformIdentifier                       OBJECT IDENTIFIER ::= {tcg-common 8}
 * ```
 * 
 * @constant
 */
export
const tcg_at_platformIdentifier: OBJECT_IDENTIFIER = _OID.fromParts([
    8,
], tcg_common);

/* eslint-enable */
