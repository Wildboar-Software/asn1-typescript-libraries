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
import { cia_ub_identifier } from "../CryptographicInformationFramework/cia-ub-identifier.va.mjs";


/**
 * @summary cia_ub_label
 * @description
 * 
 * Maximum `Label` length (same as identifier). ISO/IEC 7816-15:2016 Annex A.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cia-ub-label                                 INTEGER ::= cia-ub-identifier
 * ```
 * 
 * @constant
 */
export
const cia_ub_label: INTEGER = cia_ub_identifier;

/* eslint-enable */
