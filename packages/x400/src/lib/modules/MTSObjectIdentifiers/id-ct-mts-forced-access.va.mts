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
import { id_ct } from '../MTSObjectIdentifiers/id-ct.va.mjs';
/**
 * @summary id_ct_mts_forced_access
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ct-mts-forced-access ID ::= {id-ct  1}
 * ```
 *
 * @constant
 */
export const id_ct_mts_forced_access: ID = _OID.fromParts([1], id_ct);

/* eslint-enable */
