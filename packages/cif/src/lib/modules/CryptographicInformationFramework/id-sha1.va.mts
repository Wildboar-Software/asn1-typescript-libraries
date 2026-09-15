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
 * @summary id_sha1
 * @description
 * 
 * OIW SHA-1 algorithm OID `{iso identified-organization oiw secsig
 * algorithms(2) 26}`. ISO/IEC 7816-15:2016 Annex A.2.5.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-sha1 OBJECT IDENTIFIER ::= {iso(1) identified-organization(3) oiw(14) secsig(3) algorithms(2) 26 }
 * ```
 * 
 * @constant
 */
export
const id_sha1: OBJECT_IDENTIFIER = _OID.fromParts([
    /* iso */ 1,
    /* identified-organization */ 3,
    /* oiw */ 14,
    /* secsig */ 3,
    /* algorithms */ 2,
    26,
]);

/* eslint-enable */
