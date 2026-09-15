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
import { id_dfr_bas_att } from "../DFRObjectIdentifiers/id-dfr-bas-att.va.mjs";
// export { id_dfr_bas_att } from "../DFRObjectIdentifiers/id-dfr-bas-att.va.mjs";


/**
 * @summary id_att_dfr_attributes_modify_date_and_time
 * @description
 *
 * Attribute type OID of `dfr-attributes-modify-date-and-time`. ISO/IEC
 * 10166-1:1991 §9.2.23, Annex B.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-att-dfr-attributes-modify-date-and-time  ID ::= {id-dfr-bas-att 22}
 * ```
 * 
 * @constant
 */
export
const id_att_dfr_attributes_modify_date_and_time: ID = _OID.fromParts([
    22,
], id_dfr_bas_att);

/* eslint-enable */
