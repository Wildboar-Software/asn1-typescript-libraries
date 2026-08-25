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
 * @summary id_pt_origination
 * @description
 *
 * An origination port is the means by which a single user conveys to the IPMS messages
 * containing information objects of the types defined in section two. Through such a port
 * the user originates interpersonal messages and receipt notifications. See ITU-T X.420
 * (1999), §11.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-pt-origination ID ::= {id-pt  0}
 * ```
 *
 * @constant
 */
export const id_pt_origination: ID = _OID.fromParts([0], id_pt);

/* eslint-enable */
