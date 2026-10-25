/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg_traits } from "../PlatformCertificateProfileV2/tcg-traits.va.mjs";


/**
 * @summary tcg_tr_registry
 * @description
 *
 * Arc `{tcg-traits 3}` for `traitRegistry` values. The registry is what a
 * verifier consults to decide whether the assertion in `traitValue` matches the
 * platform.
 *
 * TCG Platform Certificate Profile, Version 2.1, §4.1 and §5.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-tr-registry                                     OBJECT IDENTIFIER ::= {tcg-traits 3}
 * ```
 * 
 * @constant
 */
export
const tcg_tr_registry: OBJECT_IDENTIFIER = _OID.fromParts([
    3,
], tcg_traits);

/* eslint-enable */
