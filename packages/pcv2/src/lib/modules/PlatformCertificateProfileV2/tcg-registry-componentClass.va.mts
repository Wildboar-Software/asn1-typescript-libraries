/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg_registry } from "../PlatformCertificateProfileV2/tcg-registry.va.mjs";


/**
 * @summary tcg_registry_componentClass
 * @description
 *
 * Arc `{tcg-registry 3}` for component class registries. A
 * `componentClassTrait` or `ComponentClass` names one of these registries, and
 * the registry defines the 4-byte class value.
 *
 * TCG Platform Certificate Profile, Version 2.1, §4.2.5 and §5.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-registry-componentClass                     OBJECT IDENTIFIER ::= {tcg-registry 3}
 * ```
 * 
 * @constant
 */
export
const tcg_registry_componentClass: OBJECT_IDENTIFIER = _OID.fromParts([
    3,
], tcg_registry);

/* eslint-enable */
