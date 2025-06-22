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
 * @summary id_mod_ipm_security_extensions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mod-ipm-security-extensions ID ::= {id-mod  14}
 * ```
 *
 * @constant
 */
export const id_mod_ipm_security_extensions: ID = _OID.fromParts([14], id_mod);

/* eslint-enable */
