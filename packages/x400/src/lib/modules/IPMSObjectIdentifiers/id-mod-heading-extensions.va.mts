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
import { id_mod } from '../IPMSObjectIdentifiers/id-mod.va.mjs';
/**
 * @summary id_mod_heading_extensions
 * @description
 *
 * The Extensions heading field (D no extensions (i.e., members)) conveys information
 * accommodated by no other heading field. It comprises a Set of zero or more IPMS
 * extensions each conveying one such information item. See ITU-T X.420 (1999), §7.2.17.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mod-heading-extensions ID ::= {id-mod  6}
 * ```
 *
 * @constant
 */
export const id_mod_heading_extensions: ID = _OID.fromParts([6], id_mod);

/* eslint-enable */
