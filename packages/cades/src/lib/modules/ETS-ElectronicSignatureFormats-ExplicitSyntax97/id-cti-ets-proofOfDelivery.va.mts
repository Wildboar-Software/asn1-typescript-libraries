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
 * @summary id_cti_ets_proofOfDelivery
 * @description
 *
 * Generic commitment type: the TSP providing this indication
 * has delivered a message in a local store accessible to the
 * recipient. ETSI TS 101 733 V2.2.1 (2013-04) §5.11.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-cti-ets-proofOfDelivery  OBJECT IDENTIFIER ::= {
 *     iso(1) member-body(2) us(840) rsadsi(113549) pkcs(1) pkcs-9(9) smime(16) cti(6) 3}
 * ```
 * 
 * @constant
 */
export
const id_cti_ets_proofOfDelivery: OBJECT_IDENTIFIER = _OID.fromParts([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* rsadsi */ 113549,
    /* pkcs */ 1,
    /* pkcs-9 */ 9,
    /* smime */ 16,
    /* cti */ 6,
    3,
]);

/* eslint-enable */
