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
import { ID, _decode_ID, _encode_ID } from '../MhsAcctObjectIdentifiers/ID.ta.mjs';
import { id_attribute } from '../MhsAcctObjectIdentifiers/id-attribute.va.mjs';
/**
 * @summary id_attribute_probeOriginAuthenticationCheck
 * @description
 *
 * OBJECT IDENTIFIER `id_attribute_probeOriginAuthenticationCheck`. This argument
 * provides any MTA through which the probe is transferred, with a means of
 * authenticating the origin of the probe (to provide the Probe Origin Authentication
 * element-of-service as defined in The probe-origin-authentication-check provides proof
 * of the origin of the probe (Probe Origin Authentication), and proof of association
 * between the message-security-label and the content-identifier of the… See ITU-T X.411
 * (1999), §8.2.1.2.1.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-attribute-probeOriginAuthenticationCheck ID ::= {id-attribute  87}
 * ```
 *
 * @constant
 */
export const id_attribute_probeOriginAuthenticationCheck: ID = _OID.fromParts(
    [87],
    id_attribute
);

/* eslint-enable */
