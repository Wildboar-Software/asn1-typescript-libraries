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
import { id_pt } from '../IPMSObjectIdentifiers/id-pt.va.mjs';
/**
 * @summary id_pt_management
 * @description
 *
 * A management port is the means by which a single user changes information about himself
 * on file with the IPMS. By means of such a port the user enables and disables
 * auto-discard, -acknowledgment, and -forwarding. See ITU-T X.420 (1999), §11.3.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-pt-management ID ::= {id-pt  2}
 * ```
 *
 * @constant
 */
export const id_pt_management: ID = _OID.fromParts([2], id_pt);

/* eslint-enable */
