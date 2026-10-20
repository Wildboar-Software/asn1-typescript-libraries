/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg_tr_registry } from "../PlatformCertificateProfileV2/tcg-tr-registry.va.mjs";


/**
 * @summary tcg_tr_reg_none
 * @description
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
