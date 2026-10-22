/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg_common } from "../PlatformCertificateProfileV2/tcg-common.va.mjs";


/**
 * @summary tcg_at_platformConfiguration
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-at-platformConfiguration                    OBJECT IDENTIFIER ::= {tcg-common 7}
 * ```
 * 
 * @constant
 */
export
const tcg_at_platformConfiguration: OBJECT_IDENTIFIER = _OID.fromParts([
    7,
], tcg_common);

/* eslint-enable */
