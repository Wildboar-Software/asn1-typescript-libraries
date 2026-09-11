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
 * @summary gsmSSF_gsmSCF_Operations
 * @description
 *
 * OID of the CAP `gsmSSF-gsmSCF-Operations` module
 * (`cap-gsmSSF-gsmSCF-ops-args(101) version8(7)`). Updated to version8(7) in
 * Rel-6 so other modules can IMPORT Rel-6 call-control operation definitions.
 * (3GPP TS 29.078 V19.0.0 clause 5.6).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gsmSSF-gsmSCF-Operations            OBJECT IDENTIFIER ::= {itu-t(0) identified-organization(4) etsi(0) mobileDomain(0) umts-network(1) modules(3)
 *     cap-gsmSSF-gsmSCF-ops-args(101) version8(7)}
 * ```
 * 
 * @constant
 */
export
const gsmSSF_gsmSCF_Operations: OBJECT_IDENTIFIER = _OID.fromParts([
    /* itu-t */ 0,
    /* identified-organization */ 4,
    /* etsi */ 0,
    /* mobileDomain */ 0,
    /* umts-network */ 1,
    /* modules */ 3,
    /* cap-gsmSSF-gsmSCF-ops-args */ 101,
    /* version8 */ 7,
]);

/* eslint-enable */
