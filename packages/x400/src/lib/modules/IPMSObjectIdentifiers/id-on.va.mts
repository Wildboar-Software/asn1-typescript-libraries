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
 * @summary id_on
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-on ID ::= {id-ipms  19}
 * ```
 *
 * @constant
 */
export const id_on: ID = _OID.fromParts([19], id_ipms);

/* eslint-enable */
