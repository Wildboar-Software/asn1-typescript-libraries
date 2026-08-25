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
 * @summary id_att_retrieval_status
 * @description
 *
 * An important property of each entry in any entry-class is its retrieval-status: The
 * values of retrieval-status are as follows: a) new: The entry has neither been Listed by
 * the MS-user nor has it been automatically processed by the MS. See ITU-T X.413 (1999),
 * §6.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-att-retrieval-status ID ::= {id-att  15}
 * ```
 *
 * @constant
 */
export const id_att_retrieval_status: ID = _OID.fromParts([15], id_att);

/* eslint-enable */
