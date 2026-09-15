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
 * @summary id_CAP3OE
 * @description
 *
 * Root OID `{umts-network(1) cap3OE(21)}`. Parent of the Rel-6 `id-ac3E`
 * application-context arc.
 * (3GPP TS 29.078 V19.0.0 clause 5.6).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-CAP3OE                    OBJECT IDENTIFIER ::= {itu-t(0) identified-organization(4) etsi(0) mobileDomain(0)
 *     umts-network(1) cap3OE(21)}
 * ```
 * 
 * @constant
 */
export
const id_CAP3OE: OBJECT_IDENTIFIER = _OID.fromParts([
    /* itu-t */ 0,
    /* identified-organization */ 4,
    /* etsi */ 0,
    /* mobileDomain */ 0,
    /* umts-network */ 1,
    /* cap3OE */ 21,
]);

/* eslint-enable */
