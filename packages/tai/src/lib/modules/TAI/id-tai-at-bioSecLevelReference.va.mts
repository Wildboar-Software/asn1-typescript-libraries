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
import { id_tai_at } from "../TAI/id-tai-at.va.mjs";
/**
 * @summary id_tai_at_bioSecLevelReference
 * @description
 *
 * Identifies `bioSecLevelReference`: `{id-tai-at 1}`. ITU-T
 * Rec. X.1089 (05/2008)
 * [§9.2](https://www.itu.int/rec/T-REC-X.1089-200805-I),
 * Annex A.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-tai-at-bioSecLevelReference              OBJECT IDENTIFIER ::= {id-tai-at  1}
 * ```
 * 
 * @constant
 */
export
const id_tai_at_bioSecLevelReference: OBJECT_IDENTIFIER = _OID.fromParts([
    1,
], id_tai_at);

/* eslint-enable */
