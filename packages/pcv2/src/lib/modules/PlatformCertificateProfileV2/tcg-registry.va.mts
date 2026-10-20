/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg } from "../PlatformCertificateProfileV2/tcg.va.mjs";
// export { tcg } from "../PlatformCertificateProfileV2/tcg.va.mjs";


/**
 * @summary tcg_registry
 * @description
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
