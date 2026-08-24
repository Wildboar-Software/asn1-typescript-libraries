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
import { ID, _decode_ID, _encode_ID } from '../MhsMTAObjectIdentifiers/ID.ta.mjs';
import { id_attribute } from '../MhsMTAObjectIdentifiers/id-attribute.va.mjs';
/**
 * @summary id_attribute_reportOriginAuthenticationCheck
 * @description
 *
 * OBJECT IDENTIFIER `id_attribute_reportOriginAuthenticationCheck`. This argument
 * provides the originator of the subject-message (or -probe), and any other MTA through
 * which the report is transferred, with a means of authenticating the origin of the
 * report (to provide the Report Origin Authentication element-of-service as defined in
 * The report-origin-authentication-check provides proof of the origin of the report
 * (Report Origin Authentication), and proof of association between… See ITU-T X.411
 * (1999), §8.3.1.2.1.14.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-attribute-reportOriginAuthenticationCheck ID ::= {id-attribute  143}
 * ```
 *
 * @constant
 */
export const id_attribute_reportOriginAuthenticationCheck: ID = _OID.fromParts(
    [143],
    id_attribute
);

/* eslint-enable */
