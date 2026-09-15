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
import { id_dfr_protocol } from "../DFRProtocolObjectIdentifiers/id-dfr-protocol.va.mjs";
// export { id_dfr_protocol } from "../DFRProtocolObjectIdentifiers/id-dfr-protocol.va.mjs";


/**
 * @summary id_mod
 * @description
 *
 * Protocol module arc {id-dfr-protocol 0}. ISO/IEC 10166-2:1991 Annex A.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-mod   ID ::= {id-dfr-protocol 0}
 * ```
 * 
 * @constant
 */
export
const id_mod: ID = _OID.fromParts([
    0,
], id_dfr_protocol);

/* eslint-enable */
