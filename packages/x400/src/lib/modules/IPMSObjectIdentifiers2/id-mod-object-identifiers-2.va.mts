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
import { ID, _decode_ID, _encode_ID } from '../IPMSObjectIdentifiers2/ID.ta.mjs';
import { id_iso_mod } from '../IPMSObjectIdentifiers2/id-iso-mod.va.mjs';
/**
 * @summary id_mod_object_identifiers_2
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mod-object-identifiers-2 ID ::= {id-iso-mod  0}
 * ```
 *
 * @constant
 */
export const id_mod_object_identifiers_2: ID = _OID.fromParts([0], id_iso_mod);

/* eslint-enable */
