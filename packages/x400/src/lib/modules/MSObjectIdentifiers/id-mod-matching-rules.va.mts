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
import { ID, _decode_ID, _encode_ID } from '../MHSObjectIdentifiers/ID.ta.mjs';
import { id_mod } from '../MSObjectIdentifiers/id-mod.va.mjs';
/**
 * @summary id_mod_matching_rules
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mod-matching-rules ID ::= {id-mod  5}
 * ```
 *
 * @constant
 */
export const id_mod_matching_rules: ID = _OID.fromParts([5], id_mod);

/* eslint-enable */
