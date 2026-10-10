/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import { ID, _decode_ID, _encode_ID } from "../DFRObjectIdentifiers/ID.ta.mjs";
import { id_dfr_ext_att } from "../DFRObjectIdentifiers/id-dfr-ext-att.va.mjs";


/**
 * @summary id_att_keywords
 * @description
 *
 * Attribute type OID of `keywords`. ISO/IEC 10166-1:1991 §9.3.5, Annex B.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-att-keywords                     ID ::= {id-dfr-ext-att  4}
 * ```
 * 
 * @constant
 */
export
const id_att_keywords: ID = _OID.fromParts([
    4,
], id_dfr_ext_att);

/* eslint-enable */
