/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg_traits } from "../PlatformCertificateProfileV2/tcg-traits.va.mjs";


/**
 * @summary tcg_tr_category
 * @description
 *
 * Arc `{tcg-traits 2}` for `traitCategory` values. The category says what
 * information `traitValue` contains, independently of the syntax selected by
 * `traitId`.
 *
 * TCG Platform Certificate Profile, Version 2.1, §4 and §5.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-tr-category                                     OBJECT IDENTIFIER ::= {tcg-traits 2}
 * ```
 * 
 * @constant
 */
export
const tcg_tr_category: OBJECT_IDENTIFIER = _OID.fromParts([
    2,
], tcg_traits);

/* eslint-enable */
