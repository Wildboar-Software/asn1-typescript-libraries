/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg_traits } from "../PlatformCertificateProfileV2/tcg-traits.va.mjs";


/**
 * @summary tcg_tr_ID
 * @description
 *
 * Arc `{tcg-traits 1}` for `traitId` values. `traitId` selects the ASN.1 syntax
 * of `traitValue`.
 *
 * TCG Platform Certificate Profile, Version 2.1, §4.2 and §5.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-tr-ID                                       OBJECT IDENTIFIER ::= {tcg-traits 1}
 * ```
 * 
 * @constant
 */
export
const tcg_tr_ID: OBJECT_IDENTIFIER = _OID.fromParts([
    1,
], tcg_traits);

/* eslint-enable */
