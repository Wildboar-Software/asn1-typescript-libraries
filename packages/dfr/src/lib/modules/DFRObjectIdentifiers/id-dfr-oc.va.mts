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
 * @summary id_dfr_oc
 * @description
 *
 * Object-class OIDs. {id-dfr 3}. ISO/IEC 10166-1:1991 Annex B.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-dfr-oc      ID ::= {id-dfr 3}
 * ```
 * 
 * @constant
 */
export
const id_dfr_oc: ID = _OID.fromParts([
    3,
], id_dfr);

/* eslint-enable */
