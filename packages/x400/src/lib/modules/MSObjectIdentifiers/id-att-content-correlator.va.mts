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
 * @summary id_att_content_correlator
 * @description
 *
 * OBJECT IDENTIFIER `id_att_content_correlator`. This general-attribute contains the
 * content-correlator argument of the Message-submission, Probe-submission, and
 * Report-delivery abstract-operations. See 8.2.1.1.1.36 of WITH ATTRIBUTE-SYNTAX
 * ContentCorrelator, EQUALITY MATCHING-RULE contentCorrelatorMatch, NUMERATION
 * single-valued, ID id-att-content-correlator } 11.2.14 Content-identifier This
 * general-attribute contains the content-identifier argument of the… See ITU-T X.413
 * (1999), §11.2.13.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-att-content-correlator ID ::= {id-att  3}
 * ```
 *
 * @constant
 */
export const id_att_content_correlator: ID = _OID.fromParts([3], id_att);

/* eslint-enable */
