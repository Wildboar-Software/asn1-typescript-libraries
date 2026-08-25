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
 * @summary id_att_original_EITs
 * @description
 *
 * This general-attribute, which is multi-valued, identifies the encoded-information-types
 * in the content of the message as submitted, or specified in the envelope of a submitted
 * probe. It is generated from the original-encoded-information-types argument of the
 * Message-delivery, Report-delivery, Message-submission, and Probe-submission
 * abstract-operations. See ITU-T X.413 (1999), §11.2.48.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-att-original-EITs ID ::= {id-att  25}
 * ```
 *
 * @constant
 */
export const id_att_original_EITs: ID = _OID.fromParts([25], id_att);

/* eslint-enable */
