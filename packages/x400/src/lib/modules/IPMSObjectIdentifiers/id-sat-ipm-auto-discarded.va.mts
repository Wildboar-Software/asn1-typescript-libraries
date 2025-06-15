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
import { ID, _decode_ID, _encode_ID } from '../IPMSObjectIdentifiers/ID.ta.mjs';
import { id_sat } from '../IPMSObjectIdentifiers/id-sat.va.mjs';
/**
 * @summary id_sat_ipm_auto_discarded
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-sat-ipm-auto-discarded ID ::= {id-sat  3}
 * ```
 *
 * @constant
 */
export const id_sat_ipm_auto_discarded: ID = new _OID([3], id_sat);

/* eslint-enable */
