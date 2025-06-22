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
import { ID, _decode_ID, _encode_ID } from '../IPMSObjectIdentifiers/ID.ta.mjs';
import { id_bat } from '../IPMSObjectIdentifiers/id-bat.va.mjs';
/**
 * @summary id_bat_g4_class1_body_parts
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-bat-g4-class1-body-parts ID ::= {id-bat  4}
 * ```
 *
 * @constant
 */
export const id_bat_g4_class1_body_parts: ID = _OID.fromParts([4], id_bat);

/* eslint-enable */
