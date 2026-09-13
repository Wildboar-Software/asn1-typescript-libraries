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
import { id_dfr_oc } from "../DFRObjectIdentifiers/id-dfr-oc.va.mjs";
// export { id_dfr_oc } from "../DFRObjectIdentifiers/id-dfr-oc.va.mjs";


/**
 * @summary id_dfr_reference
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-dfr-reference            ID ::= {id-dfr-oc 3}
 * ```
 * 
 * @constant
 */
export
const id_dfr_reference: ID = _OID.fromParts([
    3,
], id_dfr_oc);

/* eslint-enable */
