/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg_traits } from "../PlatformCertificateProfileV2/tcg-traits.va.mjs";


/**
 * @summary tcg_tr_registry
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-tr-registry                                     OBJECT IDENTIFIER ::= {tcg-traits 3}
 * ```
 * 
 * @constant
 */
export
const tcg_tr_registry: OBJECT_IDENTIFIER = _OID.fromParts([
    3,
], tcg_traits);

/* eslint-enable */
