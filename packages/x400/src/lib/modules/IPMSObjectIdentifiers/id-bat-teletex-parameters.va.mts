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
 * @summary id_bat_teletex_parameters
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-bat-teletex-parameters ID ::= {id-bat  16}
 * ```
 *
 * @constant
 */
export const id_bat_teletex_parameters: ID = _OID.fromParts([16], id_bat);

/* eslint-enable */
