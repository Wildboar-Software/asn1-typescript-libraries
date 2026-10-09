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
import { id_dfr_bas_att } from "../DFRObjectIdentifiers/id-dfr-bas-att.va.mjs";


/**
 * @summary id_att_dfr_next_versions
 * @description
 *
 * Attribute type OID of `dfr-next-versions`. ISO/IEC 10166-1:1991 §9.2.15,
 * Annex B.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-att-dfr-next-versions                    ID ::= {id-dfr-bas-att 14}
 * ```
 * 
 * @constant
 */
export
const id_att_dfr_next_versions: ID = _OID.fromParts([
    14,
], id_dfr_bas_att);

/* eslint-enable */
