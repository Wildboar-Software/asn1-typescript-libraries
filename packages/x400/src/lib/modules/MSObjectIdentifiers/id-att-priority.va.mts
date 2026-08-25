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
 * @summary id_att_priority
 * @description
 *
 * This general-attribute contains the priority argument of the Message-submission and
 * Message-delivery abstract- operations. If no value for the parameter is supplied in the
 * Message-submission or Message-delivery abstract-operation then the attribute is
 * generated with the default value for priority. See ITU-T X.413 (1999), §11.2.61.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-att-priority ID ::= {id-att  31}
 * ```
 *
 * @constant
 */
export const id_att_priority: ID = _OID.fromParts([31], id_att);

/* eslint-enable */
