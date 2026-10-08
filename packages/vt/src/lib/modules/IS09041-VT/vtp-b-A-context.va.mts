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
 * @summary vtp_b_A_context
 * @description
 *
 * ACSE application-context for Basic Class VTP initial facilities.
 * Used in A-ASSOCIATE (`Application Context Name`). ISO/IEC 9041-1:1997
 * §11.1, Annex B.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * vtp-b-A-context OBJECT IDENTIFIER ::= { vtp-b application-context(1) initial-facilities(0) }
 * ```
 * 
 * @constant
 */
export
const vtp_b_A_context: OBJECT_IDENTIFIER = _OID.fromParts([
    /* application-context */ 1,
    /* initial-facilities */ 0,
], vtp_b);

/* eslint-enable */
