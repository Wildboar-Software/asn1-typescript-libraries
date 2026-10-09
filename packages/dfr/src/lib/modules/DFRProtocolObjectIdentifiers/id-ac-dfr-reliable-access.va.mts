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
import { id_ac } from "../DFRProtocolObjectIdentifiers/id-ac.va.mjs";


/**
 * @summary id_ac_dfr_reliable_access
 * @description
 *
 * Application context with RTSE. {id-ac 1}. ISO/IEC 10166-2:1991 §6, Annex A.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-ac-dfr-reliable-access  ID ::= {id-ac 1}
 * ```
 * 
 * @constant
 */
export
const id_ac_dfr_reliable_access: ID = _OID.fromParts([
    1,
], id_ac);

/* eslint-enable */
