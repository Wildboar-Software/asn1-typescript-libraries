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
 * @summary id_aa_ipm_auto_acknowledgement
 * @description
 *
 * OBJECT IDENTIFIER `id_aa_ipm_auto_acknowledgement`. The IPM auto-acknowledgement
 * auto-action enables the IPMS-MS-user to instruct the IPMS-MS to automatically
 * originate RNs on the user's behalf. The auto-action is performed on the first occasion
 * on which the retrieval-status of an IPM entry in the Delivery entry-class changes to
 * processed (the same change may occur on subsequent occasions if the IPMS-MS-user uses
 * the Modify abstract-operation to change… See ITU-T X.420 (1999), §19.8.3.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-aa-ipm-auto-acknowledgement ID ::= {id-aa  0}
 * ```
 *
 * @constant
 */
export const id_aa_ipm_auto_acknowledgement: ID = _OID.fromParts([0], id_aa);

/* eslint-enable */
