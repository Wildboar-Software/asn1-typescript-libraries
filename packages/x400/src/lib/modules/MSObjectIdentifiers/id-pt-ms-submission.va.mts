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
import { ID, _decode_ID, _encode_ID } from '../MHSObjectIdentifiers/ID.ta.mjs';
import { id_pt } from '../MSObjectIdentifiers/id-pt.va.mjs';
/**
 * @summary id_pt_ms_submission
 * @description
 *
 * OBJECT IDENTIFIER `id_pt_ms_submission`. Defined in ITU-T X.413 (1999) (Annex A).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-pt-ms-submission ID ::= {id-pt  2}
 * ```
 *
 * @constant
 */
export const id_pt_ms_submission: ID = _OID.fromParts([2], id_pt);

/* eslint-enable */
