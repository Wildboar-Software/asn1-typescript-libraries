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
import { id_mod } from '../EDIMSObjectIdentifiers/id-mod.va.mjs';
/**
 * @summary id_mod_message_store_auto_actions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mod-message-store-auto-actions ID ::= {id-mod  7}
 * ```
 *
 * @constant
 */
export const id_mod_message_store_auto_actions: ID = _OID.fromParts([7], id_mod);

/* eslint-enable */
