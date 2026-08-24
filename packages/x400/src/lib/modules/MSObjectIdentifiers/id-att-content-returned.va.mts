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
 * @summary id_att_content_returned
 * @description
 *
 * OBJECT IDENTIFIER `id_att_content_returned`. This general-attribute indicates whether
 * a content has been returned in the Report-delivery abstract-operation. It is generated
 * by the MS (see 6.3.4). See ITU-T X.413 (1999), §11.2.17.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-att-content-returned ID ::= {id-att  7}
 * ```
 *
 * @constant
 */
export const id_att_content_returned: ID = _OID.fromParts([7], id_att);

/* eslint-enable */
