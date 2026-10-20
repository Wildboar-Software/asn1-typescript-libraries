/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg_platformClass } from "../PlatformCertificateProfileV2/tcg-platformClass.va.mjs";
// export { tcg_platformClass } from "../PlatformCertificateProfileV2/tcg-platformClass.va.mjs";


/**
 * @summary tcg_common
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-common                                      OBJECT IDENTIFIER ::= {tcg-platformClass 1}
 * ```
 * 
 * @constant
 */
export
const tcg_common: OBJECT_IDENTIFIER = _OID.fromParts([
    1,
], tcg_platformClass);

/* eslint-enable */
