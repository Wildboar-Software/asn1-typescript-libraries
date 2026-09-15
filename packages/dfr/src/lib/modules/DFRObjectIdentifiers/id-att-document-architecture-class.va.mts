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
// export { ID, _decode_ID, _encode_ID } from "../DFRObjectIdentifiers/ID.ta.mjs";
import { id_dfr_ext_att } from "../DFRObjectIdentifiers/id-dfr-ext-att.va.mjs";
// export { id_dfr_ext_att } from "../DFRObjectIdentifiers/id-dfr-ext-att.va.mjs";


/**
 * @summary id_att_document_architecture_class
 * @description
 *
 * Attribute type OID of `document-architecture-class`. ISO/IEC 10166-1:1991
 * §9.3.4, Annex B.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-att-document-architecture-class  ID ::= {id-dfr-ext-att  3}
 * ```
 * 
 * @constant
 */
export
const id_att_document_architecture_class: ID = _OID.fromParts([
    3,
], id_dfr_ext_att);

/* eslint-enable */
