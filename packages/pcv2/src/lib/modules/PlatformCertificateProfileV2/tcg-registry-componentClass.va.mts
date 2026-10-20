/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg_registry } from "../PlatformCertificateProfileV2/tcg-registry.va.mjs";
// export { tcg_registry } from "../PlatformCertificateProfileV2/tcg-registry.va.mjs";


/**
 * @summary tcg_registry_componentClass
 * @description
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
