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
import { id_dfr } from "../DFRObjectIdentifiers/id-dfr.va.mjs";
// export { id_dfr } from "../DFRObjectIdentifiers/id-dfr.va.mjs";


/**
 * @summary id_mod
 * @description
 *
 * Protocol module OIDs. {id-dfr-protocol 0}. ISO/IEC 10166-2:1991 Annex A.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-mod         ID ::= {id-dfr 0}
 * ```
 * 
 * @constant
 */
export
const id_mod: ID = _OID.fromParts([
    0,
], id_dfr);

/* eslint-enable */
