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
 * @summary id_att_dl_expansion_history
 * @description
 *
 * This general-attribute, which is multi-valued, contains a history of distribution-list
 * expansion. If present in a delivered- message, it contains one or more distribution-list
 * names used during the expansion process. See ITU-T X.413 (1999), §11.2.28.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-att-dl-expansion-history ID ::= {id-att  14}
 * ```
 *
 * @constant
 */
export const id_att_dl_expansion_history: ID = _OID.fromParts([14], id_att);

/* eslint-enable */
