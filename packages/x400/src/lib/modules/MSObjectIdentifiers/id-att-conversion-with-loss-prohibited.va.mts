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
 * @summary id_att_conversion_with_loss_prohibited
 * @description
 *
 * OBJECT IDENTIFIER `id_att_conversion_with_loss_prohibited`. This general-attribute
 * contains the conversion-with-loss-prohibited argument of the Message-submission,
 * Probe- submission, and Message-delivery abstract-operations. It indicates whether
 * conversion with loss of information was allowed or prohibited by the originator. See
 * ITU-T X.413 (1999), §11.2.19.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-att-conversion-with-loss-prohibited ID ::= {id-att  9}
 * ```
 *
 * @constant
 */
export const id_att_conversion_with_loss_prohibited: ID = _OID.fromParts([9], id_att);

/* eslint-enable */
