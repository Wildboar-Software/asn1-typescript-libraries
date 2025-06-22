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
import { id_mod } from '../EDIMSObjectIdentifiers/id-mod.va.mjs';
/**
 * @summary id_mod_functional_objects
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mod-functional-objects ID ::= {id-mod  1}
 * ```
 *
 * @constant
 */
export const id_mod_functional_objects: ID = _OID.fromParts([1], id_mod);

/* eslint-enable */
