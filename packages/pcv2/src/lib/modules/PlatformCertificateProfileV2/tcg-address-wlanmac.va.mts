/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg_address } from "../PlatformCertificateProfileV2/tcg-address.va.mjs";


/**
 * @summary tcg_address_wlanmac
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-address-wlanmac                             OBJECT IDENTIFIER ::= {tcg-address 2}
 * ```
 * 
 * @constant
 */
export
const tcg_address_wlanmac: OBJECT_IDENTIFIER = _OID.fromParts([
    2,
], tcg_address);

/* eslint-enable */
