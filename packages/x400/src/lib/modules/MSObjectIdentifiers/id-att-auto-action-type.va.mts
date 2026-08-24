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
 * @summary id_att_auto_action_type
 * @description
 *
 * OBJECT IDENTIFIER `id_att_auto_action_type`. This general-attribute identifies the
 * type of the auto-action whose execution is the subject of this entry. The registered
 * auto-action is identified by this attribute combined with the corresponding value of
 * the auto-action-registration-identifier general-attribute. See ITU-T X.413 (1999),
 * §11.2.8.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-att-auto-action-type ID ::= {id-att  49}
 * ```
 *
 * @constant
 */
export const id_att_auto_action_type: ID = _OID.fromParts([49], id_att);

/* eslint-enable */
