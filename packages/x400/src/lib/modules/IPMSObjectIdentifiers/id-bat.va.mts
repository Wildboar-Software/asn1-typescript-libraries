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
import { id_ipms } from '../IPMSObjectIdentifiers/id-ipms.va.mjs';
/**
 * @summary id_bat
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-bat ID ::= {id-ipms  8}
 * ```
 *
 * @constant
 */
export const id_bat: ID = _OID.fromParts([8], id_ipms);

/* eslint-enable */
