/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg } from "../PlatformCertificateProfileV2/tcg.va.mjs";


/**
 * @summary tcg_registry
 * @description
 *
 * Arc `{tcg 18}` for TCG registries. Component class registries are assigned
 * under `tcg-registry-componentClass`.
 *
 * TCG Platform Certificate Profile, Version 2.1, §5.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-registry                                    OBJECT IDENTIFIER ::= {tcg 18}
 * ```
 * 
 * @constant
 */
export
const tcg_registry: OBJECT_IDENTIFIER = _OID.fromParts([
    18,
], tcg);

/* eslint-enable */
