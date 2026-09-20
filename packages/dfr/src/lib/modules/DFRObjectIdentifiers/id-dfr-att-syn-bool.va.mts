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
import { id_dfr_att_syn } from "../DFRObjectIdentifiers/id-dfr-att-syn.va.mjs";


/**
 * @summary id_dfr_att_syn_bool
 * @description
 *
 * Boolean attribute syntax. {id-dfr-att-syn 2}. ISO/IEC 10166-1:1991 §9.4.2.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-dfr-att-syn-bool             ID ::= {id-dfr-att-syn 2}
 * ```
 * 
 * @constant
 */
export
const id_dfr_att_syn_bool: ID = _OID.fromParts([
    2,
], id_dfr_att_syn);

/* eslint-enable */
