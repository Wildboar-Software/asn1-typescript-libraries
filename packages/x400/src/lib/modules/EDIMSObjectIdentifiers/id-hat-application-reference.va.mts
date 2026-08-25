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
import { ID, _decode_ID, _encode_ID } from '../EDIMSObjectIdentifiers/ID.ta.mjs';
import { id_hat } from '../EDIMSObjectIdentifiers/id-hat.va.mjs';
/**
 * @summary id_hat_application_reference
 * @description
 *
 * Provides a general reference to an application or function. This is semantically
 * identical to the "Application reference" segment of the EDIFACT UNB segment. See ITU-T
 * X.435 (1999), §8.2.18.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-hat-application-reference ID ::= {id-hat  19}
 * ```
 *
 * @constant
 */
export const id_hat_application_reference: ID = _OID.fromParts([19], id_hat);

/* eslint-enable */
