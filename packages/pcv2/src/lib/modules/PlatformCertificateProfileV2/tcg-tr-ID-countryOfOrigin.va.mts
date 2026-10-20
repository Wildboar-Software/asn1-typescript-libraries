/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg_tr_ID } from "../PlatformCertificateProfileV2/tcg-tr-ID.va.mjs";
// export { tcg_tr_ID } from "../PlatformCertificateProfileV2/tcg-tr-ID.va.mjs";


/**
 * @summary tcg_tr_ID_countryOfOrigin
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-tr-ID-countryOfOrigin                       OBJECT IDENTIFIER ::= {tcg-tr-ID 23}
 * ```
 * 
 * @constant
 */
export
const tcg_tr_ID_countryOfOrigin: OBJECT_IDENTIFIER = _OID.fromParts([
    23,
], tcg_tr_ID);

/* eslint-enable */
