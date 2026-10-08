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
 * @summary id_att_number_of_pages
 * @description
 *
 * Attribute type OID of `number-of-pages`. ISO/IEC 10166-1:1991 §9.3.16, Annex
 * B.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-att-number-of-pages              ID ::= {id-dfr-ext-att 15}
 * ```
 * 
 * @constant
 */
export
const id_att_number_of_pages: ID = _OID.fromParts([
    15,
], id_dfr_ext_att);

/* eslint-enable */
