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
 * @summary id_att_redirection_history
 * @description
 *
 * This general-attribute, which is multi-valued, contains the history of recipient
 * redirection(s) with reason(s) from the Message-delivery or Report-delivery
 * abstract-operations. In the latter case, the redirections concern the delivery report
 * itself rather than the report's subject message. See ITU-T X.413 (1999), §11.2.69.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-att-redirection-history ID ::= {id-att  33}
 * ```
 *
 * @constant
 */
export const id_att_redirection_history: ID = _OID.fromParts([33], id_att);

/* eslint-enable */
