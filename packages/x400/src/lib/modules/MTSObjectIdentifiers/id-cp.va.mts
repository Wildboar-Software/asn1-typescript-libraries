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
import { ID, _decode_ID, _encode_ID } from '../MTSObjectIdentifiers/ID.ta.mjs';
import { id_mts } from '../MTSObjectIdentifiers/id-mts.va.mjs';
/**
 * @summary id_cp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-cp ID ::= {id-mts  9}
 * ```
 *
 * @constant
 */
export const id_cp: ID = _OID.fromParts([9], id_mts);

/* eslint-enable */
