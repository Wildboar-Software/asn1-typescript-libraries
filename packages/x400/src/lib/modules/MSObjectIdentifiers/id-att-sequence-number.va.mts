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
 * @summary id_att_sequence_number
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-att-sequence-number ID ::= {id-att  39}
 * ```
 *
 * @constant
 */
export const id_att_sequence_number: ID = _OID.fromParts([39], id_att);

/* eslint-enable */
