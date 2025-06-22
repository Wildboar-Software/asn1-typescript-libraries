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
 * @summary id_eit_mixed_mode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-eit-mixed-mode ID ::= {id-eit  9}
 * ```
 *
 * @constant
 */
export const id_eit_mixed_mode: ID = _OID.fromParts([9], id_eit);

/* eslint-enable */
