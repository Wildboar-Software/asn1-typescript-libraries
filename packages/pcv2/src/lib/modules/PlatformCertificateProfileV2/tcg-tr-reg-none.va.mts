/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg_tr_registry } from "../PlatformCertificateProfileV2/tcg-tr-registry.va.mjs";


/**
 * @summary tcg_tr_reg_none
 * @description
 *
 * Registry identifier `{tcg-tr-registry 1}` meaning no registry is used. When
 * `traitRegistry` is this identifier, or any other value TCG does not define,
 * the issuer documents in `description` or `descriptionURI` where a relying
 * party finds the definition of that trait.
 *
 * TCG Platform Certificate Profile, Version 2.1, §4.1 and §5.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-tr-reg-none                                     OBJECT IDENTIFIER ::= {tcg-tr-registry 1}
 * ```
 * 
 * @constant
 */
export
const tcg_tr_reg_none: OBJECT_IDENTIFIER = _OID.fromParts([
    1,
], tcg_tr_registry);

/* eslint-enable */
