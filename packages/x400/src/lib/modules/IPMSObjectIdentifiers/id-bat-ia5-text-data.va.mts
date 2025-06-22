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
 * @summary id_bat_ia5_text_data
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-bat-ia5-text-data ID ::= {id-bat  20}
 * ```
 *
 * @constant
 */
export const id_bat_ia5_text_data: ID = _OID.fromParts([20], id_bat);

/* eslint-enable */
