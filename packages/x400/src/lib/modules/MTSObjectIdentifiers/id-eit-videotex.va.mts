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
import { id_eit } from '../MTSObjectIdentifiers/id-eit.va.mjs';
/**
 * @summary id_eit_videotex
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-eit-videotex ID ::= {id-eit  6}
 * ```
 *
 * @constant
 */
export const id_eit_videotex: ID = _OID.fromParts([6], id_eit);

/* eslint-enable */
