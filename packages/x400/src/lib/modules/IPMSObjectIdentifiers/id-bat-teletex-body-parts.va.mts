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
/* START_OF_SYMBOL_DEFINITION id_bat_teletex_body_parts */
/**
 * @summary id_bat_teletex_body_parts
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-bat-teletex-body-parts ID ::= {id-bat  5}
 * ```
 *
 * @constant
 */
export const id_bat_teletex_body_parts: ID = new _OID([5], id_bat);
/* END_OF_SYMBOL_DEFINITION id_bat_teletex_body_parts */

/* eslint-enable */
