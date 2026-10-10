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
import { id_ot } from "../DFRObjectIdentifiers/id-ot.va.mjs";


/**
 * @summary id_dfr_user
 * @description
 *
 * DFR-User ROS object. {id-ot 1}. ISO/IEC 10166-1:1991 Annex B.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-dfr-user   ID ::= {id-ot 1}
 * ```
 * 
 * @constant
 */
export
const id_dfr_user: ID = _OID.fromParts([
    1,
], id_ot);

/* eslint-enable */
