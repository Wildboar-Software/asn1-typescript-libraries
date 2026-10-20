/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg_at_platformConfiguration } from "../PlatformCertificateProfileV2/tcg-at-platformConfiguration.va.mjs";
// export { tcg_at_platformConfiguration } from "../PlatformCertificateProfileV2/tcg-at-platformConfiguration.va.mjs";


/**
 * @summary tcg_at_platformConfigUri_v3
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-at-platformConfigUri-v3                     OBJECT IDENTIFIER ::= {tcg-at-platformConfiguration 4}
 * ```
 * 
 * @constant
 */
export
const tcg_at_platformConfigUri_v3: OBJECT_IDENTIFIER = _OID.fromParts([
    4,
], tcg_at_platformConfiguration);

/* eslint-enable */
