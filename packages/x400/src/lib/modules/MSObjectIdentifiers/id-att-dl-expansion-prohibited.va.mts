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
 * @summary id_att_dl_expansion_prohibited
 * @description
 *
 * This general-attribute contains the DL-expansion-prohibited argument of the
 * Message-submission and Probe-submission abstract-operations; it indicates whether
 * DL-expansion within the MTS is prohibited for a recipient-name which denotes a DL. See
 * ITU-T X.413 (1999), §11.2.29.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-att-dl-expansion-prohibited ID ::= {id-att  53}
 * ```
 *
 * @constant
 */
export const id_att_dl_expansion_prohibited: ID = _OID.fromParts([53], id_att);

/* eslint-enable */
