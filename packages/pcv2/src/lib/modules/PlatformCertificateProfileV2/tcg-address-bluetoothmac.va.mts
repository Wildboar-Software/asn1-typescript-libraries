/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg_address } from "../PlatformCertificateProfileV2/tcg-address.va.mjs";
// export { tcg_address } from "../PlatformCertificateProfileV2/tcg-address.va.mjs";


/**
 * @summary tcg_address_bluetoothmac
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-address-bluetoothmac                        OBJECT IDENTIFIER ::= {tcg-address 3}
 * ```
 * 
 * @constant
 */
export
const tcg_address_bluetoothmac: OBJECT_IDENTIFIER = _OID.fromParts([
    3,
], tcg_address);

/* eslint-enable */
