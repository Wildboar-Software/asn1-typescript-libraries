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
import { id_iso_cs } from '../IPMSObjectIdentifiers2/id-iso-cs.va.mjs';
/**
 * @summary id_cs_eit_authority
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-cs-eit-authority ID ::= {id-iso-cs  0}
 * ```
 *
 * @constant
 */
export const id_cs_eit_authority: ID = _OID.fromParts([0], id_iso_cs);

/* eslint-enable */
