/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg_address } from "../PlatformCertificateProfileV2/tcg-address.va.mjs";


/**
 * @summary tcg_address_wlanmac
 * @description
 *
 * Address type `{tcg-address 2}` for a WLAN MAC address. One of the three
 * identifiers permitted for `AddressType`.
 *
 * TCG Platform Certificate Profile, Version 2.1, §4.2.5 and §5.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
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
