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
 * @summary id_etsi_es_IDUP_Mechanism_v1
 * @description
 *
 * Mechanism OID identifying CAdES tokens to IDUP-GSS-API
 * (RFC 2479). Annex A.2 comments say "see Annex D"; the
 * IDUP API itself is described in Annex H.2. ETSI TS 101 733
 * V2.2.1 (2013-04) Annex H.1, H.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-etsi-es-IDUP-Mechanism-v1 OBJECT IDENTIFIER ::= {
 *     itu-t(0)
 *     identified-organization(4)
 *     etsi(0)
 *     electronic-signature-standard (1733)
 *     part1 (1)
 *     idupMechanism (4)
 *     etsiESv1(1) }
 * ```
 * 
 * @constant
 */
export
const id_etsi_es_IDUP_Mechanism_v1: OBJECT_IDENTIFIER = _OID.fromParts([
    /* itu-t */ 0,
    /* identified-organization */ 4,
    /* etsi */ 0,
    /* electronic-signature-standard */ 1733,
    /* part1 */ 1,
    /* idupMechanism */ 4,
    /* etsiESv1 */ 1,
]);

/* eslint-enable */
