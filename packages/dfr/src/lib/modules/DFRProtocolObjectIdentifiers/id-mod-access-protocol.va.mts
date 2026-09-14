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
import { id_mod } from "../DFRProtocolObjectIdentifiers/id-mod.va.mjs";
// export { id_mod } from "../DFRProtocolObjectIdentifiers/id-mod.va.mjs";


/**
 * @summary id_mod_access_protocol
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-mod-access-protocol     ID ::= {id-mod 1}
 * ```
 * 
 * @constant
 */
export
const id_mod_access_protocol: ID = _OID.fromParts([
    1,
], id_mod);

/* eslint-enable */
