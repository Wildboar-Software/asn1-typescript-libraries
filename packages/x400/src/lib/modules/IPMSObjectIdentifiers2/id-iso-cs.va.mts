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
import { ID, _decode_ID, _encode_ID } from '../IPMSObjectIdentifiers2/ID.ta.mjs';
import { id_iso_ipms } from '../IPMSObjectIdentifiers2/id-iso-ipms.va.mjs';
/**
 * @summary id_iso_cs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-iso-cs ID ::= {id-iso-ipms  1}
 * ```
 *
 * @constant
 */
export const id_iso_cs: ID = _OID.fromParts([1], id_iso_ipms);

/* eslint-enable */
