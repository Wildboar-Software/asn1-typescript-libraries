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
import { id_dfr_att_syn } from "../DFRObjectIdentifiers/id-dfr-att-syn.va.mjs";
// export { id_dfr_att_syn } from "../DFRObjectIdentifiers/id-dfr-att-syn.va.mjs";


/**
 * @summary id_dfr_att_syn_case_ign_list
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-dfr-att-syn-case-ign-list    ID ::= {id-dfr-att-syn 5}
 * ```
 * 
 * @constant
 */
export
const id_dfr_att_syn_case_ign_list: ID = _OID.fromParts([
    5,
], id_dfr_att_syn);

/* eslint-enable */
