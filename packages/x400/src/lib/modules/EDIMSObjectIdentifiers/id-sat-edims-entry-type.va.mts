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
} from 'asn1-ts';
import { ID, _decode_ID, _encode_ID } from '../EDIMSObjectIdentifiers/ID.ta.mjs';
import { id_sat } from '../EDIMSObjectIdentifiers/id-sat.va.mjs';
/**
 * @summary id_sat_edims_entry_type
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-sat-edims-entry-type ID ::= {id-sat  0}
 * ```
 *
 * @constant
 */
export const id_sat_edims_entry_type: ID = _OID.fromParts([0], id_sat);

/* eslint-enable */
