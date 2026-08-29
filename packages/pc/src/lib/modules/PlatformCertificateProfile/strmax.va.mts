/* eslint-disable */
import {
    INTEGER,
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
 * @summary strmax
 * @description
 *
 * Upper bound on string fields in this profile. SHOULD NOT exceed
 * 256. Aids ASN.1 parsers and limits certificate size. TCG
 * Platform Certificate Profile v1.1 r19 §3.1.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * strmax INTEGER ::= 256
 * ```
 * 
 * @constant
 */
export
const strmax: INTEGER = 256;

/* eslint-enable */
