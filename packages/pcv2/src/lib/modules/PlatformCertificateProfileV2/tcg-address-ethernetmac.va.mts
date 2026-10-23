/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg_address } from "../PlatformCertificateProfileV2/tcg-address.va.mjs";


/**
 * @summary tcg_address_ethernetmac
 * @description
 *
 * Address type `{tcg-address 1}` for an Ethernet MAC address. One of the three
 * identifiers permitted for `AddressType`.
 *
 * TCG Platform Certificate Profile, Version 2.1, §4.2.5 and §5.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
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
