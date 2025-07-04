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
import { type EXTENSION } from '../MTSAbstractService/EXTENSION.oca.mjs';
/**
 * @summary PrivateExtensions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PrivateExtensions EXTENSION ::= {-- Any value shall be relayed and delivered if not Critical (see Table 27)
 *    -- except those values whose semantics the MTA obeys which are defined to be removed when obeyed.
 *    -- Shall be IDENTIFIED BY ExtensionType.private-extension --...}
 * ```
 *
 * @constant
 * @type {EXTENSION[]}
 *
 */
export const PrivateExtensions: EXTENSION[] = [];

/* eslint-enable */
