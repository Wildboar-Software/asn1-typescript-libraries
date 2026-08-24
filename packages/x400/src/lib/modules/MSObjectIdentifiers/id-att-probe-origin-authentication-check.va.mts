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
 * @summary id_att_probe_origin_authentication_check
 * @description
 *
 * OBJECT IDENTIFIER `id_att_probe_origin_authentication_check`. This general-attribute
 * contains the probe-origin-authentication-check argument of the Probe-submission
 * abstract- operation. It provides any MTA through which the probe is transferred with a
 * means of authenticating its origin. See ITU-T X.413 (1999), §11.2.62.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-att-probe-origin-authentication-check ID ::= {id-att  68}
 * ```
 *
 * @constant
 */
export const id_att_probe_origin_authentication_check: ID = _OID.fromParts(
    [68],
    id_att
);

/* eslint-enable */
