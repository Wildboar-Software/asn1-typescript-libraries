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
import { id_bat } from '../EDIMSObjectIdentifiers/id-bat.va.mjs';
/**
 * @summary id_bat_body
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-bat-body ID ::= {id-bat  0}
 * ```
 *
 * @constant
 */
export const id_bat_body: ID = _OID.fromParts([0], id_bat);

/* eslint-enable */
