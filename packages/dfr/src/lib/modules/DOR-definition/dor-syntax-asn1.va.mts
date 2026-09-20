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
import { dorx } from "../DOR-definition/dorx.va.mjs";


/**
 * @summary dor_syntax_asn1
 * @description
 *
 * DOR ASN.1 transfer syntax (ISO/IEC 10031-2).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dor-syntax-asn1 OBJECT IDENTIFIER ::= {dorx reference-syntax(2) asn1(0)}
 * ```
 * 
 * @constant
 */
export
const dor_syntax_asn1: OBJECT_IDENTIFIER = _OID.fromParts([
    /* reference-syntax */ 2,
    /* asn1 */ 0,
], dorx);

/* eslint-enable */
