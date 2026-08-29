/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import { tcg_address } from "../PlatformCertificateProfile/tcg-address.va.mjs";
/**
 * @summary tcg_address_ethernetmac
 * @description
 *
 * Ethernet MAC address type (`{ tcg-address 1 }`). Used as
 * `AddressType` in `ComponentAddress`. TCG Platform Certificate
 * Profile v1.1 r19 §3.1.6, §4.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-address-ethernetmac OBJECT IDENTIFIER ::= {tcg-address 1}
 * ```
 * 
 * @constant
 */
export
const tcg_address_ethernetmac: OBJECT_IDENTIFIER = _OID.fromParts([
    1,
], tcg_address);

/* eslint-enable */
