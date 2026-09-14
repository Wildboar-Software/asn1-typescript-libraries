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
import { id_ot } from "../DFRObjectIdentifiers/id-ot.va.mjs";
// export { id_ot } from "../DFRObjectIdentifiers/id-ot.va.mjs";


/**
 * @summary id_dfr_server
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-dfr-server ID ::= {id-ot 0}
 * ```
 * 
 * @constant
 */
export
const id_dfr_server: ID = _OID.fromParts([
    0,
], id_ot);

/* eslint-enable */
