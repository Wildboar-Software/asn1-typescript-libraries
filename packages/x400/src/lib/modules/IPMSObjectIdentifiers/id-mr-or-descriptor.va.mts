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
import { id_mr } from '../IPMSObjectIdentifiers/id-mr.va.mjs';
/**
 * @summary id_mr_or_descriptor
 * @description
 *
 * OBJECT IDENTIFIER `id_mr_or_descriptor`. An OR-descriptor is an information item that
 * identifies a user or DL. ORDescriptor ::= SET { formal-name ORName OPTIONAL,
 * free-form-name [0] FreeFormName OPTIONAL, telephone-number [1] TelephoneNumber
 * OPTIONAL} An OR-descriptor has the following components: a) Formal-name (C):
 * Identifies the user or DL in question. See ITU-T X.420 (1999), §7.1.3.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mr-or-descriptor ID ::= {id-mr  1}
 * ```
 *
 * @constant
 */
export const id_mr_or_descriptor: ID = _OID.fromParts([1], id_mr);

/* eslint-enable */
