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
import { id_aa } from '../IPMSObjectIdentifiers/id-aa.va.mjs';
/**
 * @summary id_aa_ipm_auto_advise
 * @description
 *
 * OBJECT IDENTIFIER `id_aa_ipm_auto_advise`. The IPM auto-advise auto-action enables the
 * IPMS-MS-user to instruct the IPMS-MS to generate ANs automatically that will convey
 * additional advice to the originators of subsequently delivered IPMs. The auto-action
 * is performed when an IPM is delivered to the IPMS-MS. See ITU-T X.420 (1999), §19.8.6.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-aa-ipm-auto-advise ID ::= {id-aa  3}
 * ```
 *
 * @constant
 */
export const id_aa_ipm_auto_advise: ID = _OID.fromParts([3], id_aa);

/* eslint-enable */
