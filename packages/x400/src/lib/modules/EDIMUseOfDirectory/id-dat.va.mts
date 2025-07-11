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
import { id_dir } from '../EDIMSObjectIdentifiers/id-dir.va.mjs';
/**
 * @summary id_dat
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-dat ID ::= {id-dir  1}
 * ```
 *
 * @constant
 */
export const id_dat: ID = _OID.fromParts([1], id_dir);

/* eslint-enable */
