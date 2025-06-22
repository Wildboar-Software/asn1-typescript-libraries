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
} from '@wildboar/asn1';
import { ID, _decode_ID, _encode_ID } from '../IPMSObjectIdentifiers/ID.ta.mjs';
import { id_mst } from '../IPMSObjectIdentifiers/id-mst.va.mjs';
/**
 * @summary id_mst_prevent_nrn_generation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mst-prevent-nrn-generation ID ::= {id-mst  4}
 * ```
 *
 * @constant
 */
export const id_mst_prevent_nrn_generation: ID = _OID.fromParts([4], id_mst);

/* eslint-enable */
