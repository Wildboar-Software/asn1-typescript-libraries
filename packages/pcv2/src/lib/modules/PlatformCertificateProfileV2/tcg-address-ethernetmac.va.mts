/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg_address } from "../PlatformCertificateProfileV2/tcg-address.va.mjs";
// export { tcg_address } from "../PlatformCertificateProfileV2/tcg-address.va.mjs";


/**
 * @summary tcg_address_ethernetmac
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-address-ethernetmac                         OBJECT IDENTIFIER ::= {tcg-address 1}
 * ```
 * 
 * @constant
 */
export
const tcg_address_ethernetmac: OBJECT_IDENTIFIER = _OID.fromParts([
    1,
], tcg_address);

/* eslint-enable */
