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
import { vtp_b } from "../IS09041-VT/vtp-b.va.mjs";


/**
 * @summary vtp_b_syntax
 * @description
 *
 * Presentation abstract syntax for `BasicVTPitem`. This package's
 * compiled ASN.1 assigns `{ vtp-b abstract-syntax(1)
 * initial-facilities(0) }`. ISO/IEC 9041-1:1997 Annex B assigns
 * `{ vtp-b abstract-syntax(2) initial-facilities(0) }`.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * vtp-b-syntax OBJECT IDENTIFIER ::= { vtp-b abstract-syntax(1) initial-facilities(0) }
 * ```
 * 
 * @constant
 */
export
const vtp_b_syntax: OBJECT_IDENTIFIER = _OID.fromParts([
    /* abstract-syntax */ 1,
    /* initial-facilities */ 0,
], vtp_b);

/* eslint-enable */
