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
import { id_cat } from '../EDIMSObjectIdentifiers/id-cat.va.mjs';
/**
 * @summary id_cat_submitted_edins
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-cat-submitted-edins ID ::= {id-cat  11}
 * ```
 *
 * @constant
 */
export const id_cat_submitted_edins: ID = _OID.fromParts([11], id_cat);

/* eslint-enable */
