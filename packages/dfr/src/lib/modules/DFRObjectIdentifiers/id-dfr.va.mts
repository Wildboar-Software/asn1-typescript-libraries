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
import { ID, _decode_ID, _encode_ID } from "../DFRObjectIdentifiers/ID.ta.mjs";
// export { ID, _decode_ID, _encode_ID } from "../DFRObjectIdentifiers/ID.ta.mjs";


/**
 * @summary id_dfr
 * @description
 *
 * Root of Part 1 OIDs: {iso standard 10166 part-1(1)}. ISO/IEC 10166-1:1991
 * Annex B.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-dfr ID ::= { iso standard(0) 10166 part-1(1)}
 * ```
 * 
 * @constant
 */
export
const id_dfr: ID = _OID.fromParts([
    /* standard */ 0,
    10166,
    /* part-1 */ 1,
], iso);

/* eslint-enable */
