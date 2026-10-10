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
import { id_dfr_oc } from "../DFRObjectIdentifiers/id-dfr-oc.va.mjs";


/**
 * @summary id_dfr_document
 * @description
 *
 * Document object class. {id-dfr-oc 0}. ISO/IEC 10166-1:1991 §6.3.2, Annex B.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-dfr-document             ID ::= {id-dfr-oc 0}
 * ```
 * 
 * @constant
 */
export
const id_dfr_document: ID = _OID.fromParts([
    0,
], id_dfr_oc);

/* eslint-enable */
