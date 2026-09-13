/* eslint-disable */
import {
    iso,
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


/**
 * @summary id_dfr_protocol
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-dfr-protocol ID ::= {iso standard 10166 part-2(2)}
 * ```
 * 
 * @constant
 */
export
const id_dfr_protocol: ID = _OID.fromParts([
    /* standard */ 0,
    10166,
    /* part-2 */ 2,
], iso);

/* eslint-enable */
