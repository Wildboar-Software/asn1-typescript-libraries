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
 * @summary id_att_originator_return_address
 * @description
 *
 * This general-attribute contains the originator-return-address argument of the
 * Message-submission and Message-delivery abstract-operations; it indicates the
 * postal-OR-address of the originator of the message. See 8.2.1.1.1.21 of ITU-T Rec. See
 * ITU-T X.413 (1999), §11.2.54.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-att-originator-return-address ID ::= {id-att  64}
 * ```
 *
 * @constant
 */
export const id_att_originator_return_address: ID = _OID.fromParts([64], id_att);

/* eslint-enable */
