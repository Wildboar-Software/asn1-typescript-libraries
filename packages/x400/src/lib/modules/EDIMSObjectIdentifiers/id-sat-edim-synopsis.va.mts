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
 * @summary id_sat_edim_synopsis
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-sat-edim-synopsis ID ::= {id-sat  1}
 * ```
 *
 * @constant
 */
export const id_sat_edim_synopsis: ID = _OID.fromParts([1], id_sat);

/* eslint-enable */
