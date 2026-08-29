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
import { id_tai_ce } from "../TAI/id-tai-ce.va.mjs";
/**
 * @summary id_tai_ce_publicKeyCert
 * @description
 *
 * Identifies `publicKeyCert`: `{id-tai-ce 4}`. ITU-T Rec.
 * X.1089 (05/2008)
 * [§11.1](https://www.itu.int/rec/T-REC-X.1089-200805-I),
 * Annex A.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-tai-ce-publicKeyCert                     OBJECT IDENTIFIER ::= {id-tai-ce  4}
 * ```
 * 
 * @constant
 */
export
const id_tai_ce_publicKeyCert: OBJECT_IDENTIFIER = _OID.fromParts([
    4,
], id_tai_ce);

/* eslint-enable */
