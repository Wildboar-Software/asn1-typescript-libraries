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
 * @summary id_bat_nationally_defined_body_parts
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-bat-nationally-defined-body-parts ID ::= {id-bat  11}
 * ```
 *
 * @constant
 */
export const id_bat_nationally_defined_body_parts: ID = _OID.fromParts([11], id_bat);

/* eslint-enable */
