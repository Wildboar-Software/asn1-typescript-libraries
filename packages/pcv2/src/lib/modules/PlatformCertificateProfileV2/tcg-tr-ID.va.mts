/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg_traits } from "../PlatformCertificateProfileV2/tcg-traits.va.mjs";


/**
 * @summary tcg_tr_ID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-tr-ID                                       OBJECT IDENTIFIER ::= {tcg-traits 1}
 * ```
 * 
 * @constant
 */
export
const tcg_tr_ID: OBJECT_IDENTIFIER = _OID.fromParts([
    1,
], tcg_traits);

/* eslint-enable */
