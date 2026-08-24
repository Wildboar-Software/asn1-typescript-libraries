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
 * @summary id_att_dl_exempted_recipients
 * @description
 *
 * OBJECT IDENTIFIER `id_att_dl_exempted_recipients`. This general-attribute, which is
 * multi-valued, contains components of the DL-exempted-recipients argument of the
 * Message-submission abstract-operation. When present, it identifies the recipients that
 * are requested not to be added to the set of intended recipients as a result of
 * DL-expansion. See ITU-T X.413 (1999), §11.2.27.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-att-dl-exempted-recipients ID ::= {id-att  78}
 * ```
 *
 * @constant
 */
export const id_att_dl_exempted_recipients: ID = _OID.fromParts([78], id_att);

/* eslint-enable */
