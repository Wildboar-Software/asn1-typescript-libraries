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
import { ID, _decode_ID, _encode_ID } from '../MTSObjectIdentifiers/ID.ta.mjs';
import { id_att } from '../MTSObjectIdentifiers/id-att.va.mjs';
/**
 * @summary id_att_physicalRendition_no_cover_page
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-att-physicalRendition-no-cover-page ID ::= {id-att  1}
 * ```
 *
 * @constant
 */
export const id_att_physicalRendition_no_cover_page: ID = new _OID([1], id_att);

/* eslint-enable */
