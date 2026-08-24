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
 * @summary id_aa_ipm_auto_correlate
 * @description
 *
 * OBJECT IDENTIFIER `id_aa_ipm_auto_correlate`. The IPM auto-correlate auto-action
 * correlates IPMs and IPNs related in the following ways: a) an IPM and the IPMs
 * generated in reply; b) an IPM and the IPNs notifying receipt or non-receipt; c) an IPM
 * and the IPMs which subsequently forward it, or obsolete it, or are related to it. The
 * auto-action also correlates response requests made of the IPMS-MS-user with any
 * corresponding replies or IPNs subsequently… See ITU-T X.420 (1999), §19.8.4.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-aa-ipm-auto-correlate ID ::= {id-aa  1}
 * ```
 *
 * @constant
 */
export const id_aa_ipm_auto_correlate: ID = _OID.fromParts([1], id_aa);

/* eslint-enable */
