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
 * @summary maxIdentifier
 * @description
 *
 * Maximum Identifier length: 32 characters. Applies to both the
 * `char` CBB UTF8String form and the VisibleString form
 * (A–Z a–z 0–9 $ _). ISO 9506-2:2003 §7.5.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * maxIdentifier INTEGER ::= 32
 * ```
 * 
 * @constant
 */
export
const maxIdentifier: INTEGER = 32;

/* eslint-enable */
