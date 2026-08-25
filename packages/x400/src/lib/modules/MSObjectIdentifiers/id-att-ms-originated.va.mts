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
import { id_att } from '../MSObjectIdentifiers/id-att.va.mjs';
/**
 * @summary id_att_ms_originated
 * @description
 *
 * This general-attribute indicates whether the message represented by a submitted-message
 * entry was submitted by the MS as a consequence of the performance of an auto-action, or
 * whether it was submitted by the MS-user. The attribute is present in the former case and
 * absent in the latter. See ITU-T X.413 (1999), §11.2.45.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-att-ms-originated ID ::= {id-att  60}
 * ```
 *
 * @constant
 */
export const id_att_ms_originated: ID = _OID.fromParts([60], id_att);

/* eslint-enable */
