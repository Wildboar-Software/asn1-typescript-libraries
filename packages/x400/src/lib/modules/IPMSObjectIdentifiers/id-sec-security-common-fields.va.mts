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
import { ID, _decode_ID, _encode_ID } from '../IPMSObjectIdentifiers/ID.ta.mjs';
import { id_sec } from '../IPMSObjectIdentifiers/id-sec.va.mjs';
/**
 * @summary id_sec_security_common_fields
 * @description
 *
 * OBJECT IDENTIFIER `id_sec_security_common_fields`. The common fields are defined and
 * described below. CommonFields ::= SET { subject-ipm SubjectIPMField, ipn-originator
 * [1] IPNOriginatorField OPTIONAL, ipm-intended-recipient [2] IPMIntendedRecipientField
 * OPTIONAL, conversion-eits ConversionEITsField OPTIONAL, notification-extensions [3]
 * NotificationExtensionsField OPTIONAL} 8.1.1 Subject IPM The Subject IPM common field
 * (M) contains the value of the This IPM… See ITU-T X.420 (1999), §8.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-sec-security-common-fields ID ::= {id-sec  1}
 * ```
 *
 * @constant
 */
export const id_sec_security_common_fields: ID = _OID.fromParts([1], id_sec);

/* eslint-enable */
