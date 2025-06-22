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
import { id_mod } from '../MHSObjectIdentifiers/id-mod.va.mjs';
/**
 * @summary id_directory_objects_and_attributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-directory-objects-and-attributes ID ::= {id-mod  1}
 * ```
 *
 * @constant
 */
export const id_directory_objects_and_attributes: ID = _OID.fromParts([1], id_mod);

/* eslint-enable */
