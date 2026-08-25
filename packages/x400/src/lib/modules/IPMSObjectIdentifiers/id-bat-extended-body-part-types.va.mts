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
import { ID, _decode_ID, _encode_ID } from '../IPMSObjectIdentifiers/ID.ta.mjs';
import { id_bat } from '../IPMSObjectIdentifiers/id-bat.va.mjs';
/**
 * @summary id_bat_extended_body_part_types
 * @description
 *
 * The Extended Body Part Types attribute identifies the Extended body part types
 * represented in an IPM. For the purposes of this attribute, all body parts of an IPM are
 * considered to be of type Extended regardless of whether they were so conveyed to the
 * IPMS-MS. See ITU-T X.420 (1999), §19.6.3.2.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-bat-extended-body-part-types ID ::= {id-bat  12}
 * ```
 *
 * @constant
 */
export const id_bat_extended_body_part_types: ID = _OID.fromParts([12], id_bat);

/* eslint-enable */
