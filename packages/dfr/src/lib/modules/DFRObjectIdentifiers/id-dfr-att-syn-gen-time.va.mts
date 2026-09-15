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
 * @summary id_dfr_att_syn_gen_time
 * @description
 *
 * GeneralizedTime attribute syntax. {id-dfr-att-syn 3}. ISO/IEC 10166-1:1991
 * §9.4.2.3.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-dfr-att-syn-gen-time         ID ::= {id-dfr-att-syn 3}
 * ```
 * 
 * @constant
 */
export
const id_dfr_att_syn_gen_time: ID = _OID.fromParts([
    3,
], id_dfr_att_syn);

/* eslint-enable */
