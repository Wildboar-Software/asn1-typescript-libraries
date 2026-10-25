/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg_registry_componentClass } from "../PlatformCertificateProfileV2/tcg-registry-componentClass.va.mjs";


/**
 * @summary tcg_registry_componentClass_pcie
 * @description
 *
 * Component class registry `{tcg-registry-componentClass 4}`, the PCIe-based
 * component class registry cited by the profile. Permitted as
 * `ComponentClassRegistry`.
 *
 * TCG Platform Certificate Profile, Version 2.1, §4.2.5 and §5.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-registry-componentClass-pcie                OBJECT IDENTIFIER ::= {tcg-registry-componentClass 4}
 * ```
 * 
 * @constant
 */
export
const tcg_registry_componentClass_pcie: OBJECT_IDENTIFIER = _OID.fromParts([
    4,
], tcg_registry_componentClass);

/* eslint-enable */
