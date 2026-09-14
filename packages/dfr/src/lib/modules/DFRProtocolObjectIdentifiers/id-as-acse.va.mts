/* eslint-disable */
import {
    joint_iso_ccitt,
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
 * @summary id_as_acse
 * @description
 *
 * ACSE abstract syntax. Originally {id-as 0}; ISO/IEC 10166-2:1991 Cor.1
 * assigns joint-iso-ccitt association-control(2) abstract-syntax(1) apdus(0)
 * version1(1) (ISO 8650). Cor.2 deletes the local aCSE-as alias from clause 6.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-as-acse ID ::= {
 *    joint-iso-ccitt
 *    association-control(2)
 *    abstract-syntax(1)
 *    apdus(0)
 *    version1(1)
 * }
 * ```
 * 
 * @constant
 */
export
const id_as_acse: ID = _OID.fromParts([
    /* association-control */ 2,
    /* abstract-syntax */ 1,
    /* apdus */ 0,
    /* version1 */ 1,
], joint_iso_ccitt);

/* eslint-enable */
