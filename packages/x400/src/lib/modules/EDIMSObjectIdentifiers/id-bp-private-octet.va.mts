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
import { ID, _decode_ID, _encode_ID } from '../EDIMSObjectIdentifiers/ID.ta.mjs';
import { id_bp } from '../EDIMSObjectIdentifiers/id-bp.va.mjs';
/**
 * @summary id_bp_private_octet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-bp-private-octet ID ::= {id-bp  10}
 * ```
 *
 * @constant
 */
export const id_bp_private_octet: ID = _OID.fromParts([10], id_bp);

/* eslint-enable */
