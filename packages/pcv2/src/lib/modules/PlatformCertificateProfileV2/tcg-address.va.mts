/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg } from "../PlatformCertificateProfileV2/tcg.va.mjs";


/**
 * @summary tcg_address
 * @description
 *
 * Arc `{tcg 17}` for component address types: Ethernet, WLAN, and Bluetooth MAC
 * addresses.
 *
 * TCG Platform Certificate Profile, Version 2.1, §5.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-address                                     OBJECT IDENTIFIER ::= {tcg 17}
 * ```
 * 
 * @constant
 */
export
const tcg_address: OBJECT_IDENTIFIER = _OID.fromParts([
    17,
], tcg);

/* eslint-enable */
