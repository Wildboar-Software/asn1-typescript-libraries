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
 * @summary id_CAPOE
 * @description
 *
 * Root OID `{umts-network(1) cap4OE(23)}`. Parent of Rel-6 `id-acE`, `id-asE`,
 * `id-contractE` and `id-packageE` arcs.
 * (3GPP TS 29.078 V19.0.0 clause 5.6).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-CAPOE                    OBJECT IDENTIFIER ::= {itu-t(0) identified-organization(4) etsi(0) mobileDomain(0)
 *     umts-network(1) cap4OE(23)}
 * ```
 * 
 * @constant
 */
export
const id_CAPOE: OBJECT_IDENTIFIER = _OID.fromParts([
    /* itu-t */ 0,
    /* identified-organization */ 4,
    /* etsi */ 0,
    /* mobileDomain */ 0,
    /* umts-network */ 1,
    /* cap4OE */ 23,
]);

/* eslint-enable */
