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
 * @summary id_att_trace_information
 * @description
 *
 * OBJECT IDENTIFIER `id_att_trace_information`. This general-attribute, which is
 * multi-valued, documents the actions taken on the message (or probe or report) by each
 * MD through which it passed as it transferred through the MTS. It is generated from the
 * Message-delivery-envelope and the Report-delivery-envelope. See ITU-T X.413 (1999),
 * §11.2.82.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-att-trace-information ID ::= {id-att  75}
 * ```
 *
 * @constant
 */
export const id_att_trace_information: ID = _OID.fromParts([75], id_att);

/* eslint-enable */
