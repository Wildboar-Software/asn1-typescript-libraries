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
 * @summary id_att_preparers
 * @description
 *
 * Attribute type OID of `preparers`. ISO/IEC 10166-1:1991 §9.3.10, Annex B.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-att-preparers                    ID ::= {id-dfr-ext-att  9}
 * ```
 * 
 * @constant
 */
export
const id_att_preparers: ID = _OID.fromParts([
    9,
], id_dfr_ext_att);

/* eslint-enable */
