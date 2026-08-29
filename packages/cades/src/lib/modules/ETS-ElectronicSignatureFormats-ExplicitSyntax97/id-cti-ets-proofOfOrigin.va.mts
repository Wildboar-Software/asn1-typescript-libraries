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
 * @summary id_cti_ets_proofOfOrigin
 * @description
 *
 * Generic commitment type: the signer recognizes having
 * created, approved, and sent the message. Used as
 * `commitmentTypeId` in `CommitmentTypeIndication`. ETSI TS
 * 101 733 V2.2.1 (2013-04) §5.11.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-cti-ets-proofOfOrigin    OBJECT IDENTIFIER ::= {
 *     iso(1) member-body(2) us(840) rsadsi(113549) pkcs(1) pkcs-9(9) smime(16) cti(6) 1}
 * ```
 * 
 * @constant
 */
export
const id_cti_ets_proofOfOrigin: OBJECT_IDENTIFIER = _OID.fromParts([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* rsadsi */ 113549,
    /* pkcs */ 1,
    /* pkcs-9 */ 9,
    /* smime */ 16,
    /* cti */ 6,
    1,
]);

/* eslint-enable */
