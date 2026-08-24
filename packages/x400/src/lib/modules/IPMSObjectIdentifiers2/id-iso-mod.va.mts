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
 * @summary id_iso_mod
 * @description
 *
 * OBJECT IDENTIFIER `id_iso_mod`. Defined in ITU-T X.420 (1999) (Annex A).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-iso-mod ID ::= {id-iso-ipms  0}
 * ```
 *
 * @constant
 */
export const id_iso_mod: ID = _OID.fromParts([0], id_iso_ipms);

/* eslint-enable */
