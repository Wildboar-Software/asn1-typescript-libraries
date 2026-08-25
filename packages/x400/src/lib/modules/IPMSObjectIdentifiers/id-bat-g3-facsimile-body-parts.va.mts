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
import { id_bat } from '../IPMSObjectIdentifiers/id-bat.va.mjs';
/**
 * @summary id_bat_g3_facsimile_body_parts
 * @description
 *
 * OBJECT IDENTIFIER `id_bat_g3_facsimile_body_parts`. The IPM Body Part Table
 * information object set has as its members the types of body part that may appear in
 * the Body of an IPM:  The Standard Body Parts information object set has as
 * its members the types of body part defined in this Specification: StandardBodyParts
 *  See ITU-T X.420 (1999), §7.3.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-bat-g3-facsimile-body-parts ID ::= {id-bat  3}
 * ```
 *
 * @constant
 */
export const id_bat_g3_facsimile_body_parts: ID = _OID.fromParts([3], id_bat);

/* eslint-enable */
