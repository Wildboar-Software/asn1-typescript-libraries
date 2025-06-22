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
import { ID, _decode_ID, _encode_ID } from '../MTSObjectIdentifiers/ID.ta.mjs';
import { id_mts } from '../MTSObjectIdentifiers/id-mts.va.mjs';
/**
 * @summary id_eit
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-eit ID ::= {id-mts  4}
 * ```
 *
 * @constant
 */
export const id_eit: ID = _OID.fromParts([4], id_mts);

/* eslint-enable */
