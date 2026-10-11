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
import { id_dfr } from "../DFRObjectIdentifiers/id-dfr.va.mjs";


/**
 * @summary id_dfr_att_syn
 * @description
 *
 * Attribute-syntax OIDs. {id-dfr 6}. ISO/IEC 10166-1:1991 Annex B / §9.4.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-dfr-att-syn ID ::= {id-dfr 6}
 * ```
 * 
 * @constant
 */
export
const id_dfr_att_syn: ID = _OID.fromParts([
    6,
], id_dfr);

/* eslint-enable */
