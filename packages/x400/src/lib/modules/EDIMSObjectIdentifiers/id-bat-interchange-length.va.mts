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
import { ID, _decode_ID, _encode_ID } from '../EDIMSObjectIdentifiers/ID.ta.mjs';
import { id_bat } from '../EDIMSObjectIdentifiers/id-bat.va.mjs';
/**
 * @summary id_bat_interchange_length
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-bat-interchange-length ID ::= {id-bat  1}
 * ```
 *
 * @constant
 */
export const id_bat_interchange_length: ID = new _OID([1], id_bat);

/* eslint-enable */
