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



/**
 * @summary smsSSF_gsmSCF_Protocol
 * @description
 *
 * OID of the CAP `smsSSF-gsmSCF-Protocol` module
 * (`cap-smsSSF-gsmSCF-pkgs-contracts-acs(106) version8(7)`). Updated to
 * version8(7) in Rel-6 so other modules can IMPORT Rel-6 SMS control protocol
 * definitions.
 * (3GPP TS 29.078 V19.0.0 clause 5.6).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * smsSSF-gsmSCF-Protocol                OBJECT IDENTIFIER ::= {itu-t(0) identified-organization(4) etsi(0) mobileDomain(0) umts-network(1) modules(3)
 *     cap-smsSSF-gsmSCF-pkgs-contracts-acs(106) version8(7)}
 * ```
 * 
 * @constant
 */
export
const smsSSF_gsmSCF_Protocol: OBJECT_IDENTIFIER = _OID.fromParts([
    /* itu-t */ 0,
    /* identified-organization */ 4,
    /* etsi */ 0,
    /* mobileDomain */ 0,
    /* umts-network */ 1,
    /* modules */ 3,
    /* cap-smsSSF-gsmSCF-pkgs-contracts-acs */ 106,
    /* version8 */ 7,
]);

/* eslint-enable */
