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
import { id_hex } from '../IPMSObjectIdentifiers/id-hex.va.mjs';
/**
 * @summary id_hex_languages
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-hex-languages ID ::= {id-hex  1}
 * ```
 *
 * @constant
 */
export const id_hex_languages: ID = _OID.fromParts([1], id_hex);

/* eslint-enable */
