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
 * @summary id_aa_ipm_auto_discard
 * @description
 *
 * OBJECT IDENTIFIER `id_aa_ipm_auto_discard`. The UA shall subject to auto-discard each
 * candidate message with respect to whose content either of the following conditions
 * holds: a) The Auto-discard-expired-IPMs state variable has the value true and the date
 * and time denoted by the IPM's Expiry Time field have past. b) The
 * Auto-discard-obsolete-IPMs state variable has the value true and another candidate IPM
 * identifies the present candidate IPM by means of… See ITU-T X.420 (1999), §18.5.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-aa-ipm-auto-discard ID ::= {id-aa  2}
 * ```
 *
 * @constant
 */
export const id_aa_ipm_auto_discard: ID = _OID.fromParts([2], id_aa);

/* eslint-enable */
