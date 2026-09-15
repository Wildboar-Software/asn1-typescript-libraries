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
import { ID, _decode_ID, _encode_ID } from "../DFRProtocolObjectIdentifiers/ID.ta.mjs";
// export { ID, _decode_ID, _encode_ID } from "../DFRProtocolObjectIdentifiers/ID.ta.mjs";
import { id_ase } from "../DFRProtocolObjectIdentifiers/id-ase.va.mjs";
// export { id_ase } from "../DFRProtocolObjectIdentifiers/id-ase.va.mjs";


/**
 * @summary id_are_dfrse
 * @description
 *
 * DFRSE ASE. {id-ase 0}. ISO/IEC 10166-2:1991 Annex A (id-are-dfrse).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-are-dfrse ID ::= {id-ase 0}
 * ```
 * 
 * @constant
 */
export
const id_are_dfrse: ID = _OID.fromParts([
    0,
], id_ase);

/* eslint-enable */
