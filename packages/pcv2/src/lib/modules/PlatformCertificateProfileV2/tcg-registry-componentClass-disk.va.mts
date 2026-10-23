/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg_registry_componentClass } from "../PlatformCertificateProfileV2/tcg-registry-componentClass.va.mjs";


/**
 * @summary tcg_registry_componentClass_disk
 * @description
 *
 * Component class registry `{tcg-registry-componentClass 5}`. Section 5 lists
 * this arc as `tcg-registry-componentClass-disk`. `ComponentClassRegistry`
 * accepts it for the profile's `tcg-registry-componentClass-storage`
 * alternative, the storage component class registry cited in §4.2.5.
 *
 * TCG Platform Certificate Profile, Version 2.1, §4.2.5 and §5.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-registry-componentClass-disk                OBJECT IDENTIFIER ::= {tcg-registry-componentClass 5}
 * ```
 * 
 * @constant
 */
export
const tcg_registry_componentClass_disk: OBJECT_IDENTIFIER = _OID.fromParts([
    5,
], tcg_registry_componentClass);

/* eslint-enable */
