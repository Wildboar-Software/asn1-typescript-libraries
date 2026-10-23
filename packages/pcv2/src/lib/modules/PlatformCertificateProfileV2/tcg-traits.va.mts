/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg } from "../PlatformCertificateProfileV2/tcg.va.mjs";


/**
 * @summary tcg_traits
 * @description
 *
 * Arc `{tcg 19}` for trait syntax identifiers, trait categories, and trait
 * registries.
 *
 * TCG Platform Certificate Profile, Version 2.1, §5.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-traits                                      OBJECT IDENTIFIER ::= {tcg 19}
 * ```
 * 
 * @constant
 */
export
const tcg_traits: OBJECT_IDENTIFIER = _OID.fromParts([
    19,
], tcg);

/* eslint-enable */
