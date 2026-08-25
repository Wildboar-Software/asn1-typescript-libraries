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
import { id_sat } from '../IPMSObjectIdentifiers/id-sat.va.mjs';
/**
 * @summary id_sat_body_parts_summary
 * @description
 *
 * The Body Parts Summary attribute, which is multi-valued, provides a summary of the body
 * parts present in an IPM. One value of body-part-descriptor shall be present for each
 * body part present in the IPM. See ITU-T X.420 (1999), §19.6.1.3.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-sat-body-parts-summary ID ::= {id-sat  2}
 * ```
 *
 * @constant
 */
export const id_sat_body_parts_summary: ID = _OID.fromParts([2], id_sat);

/* eslint-enable */
