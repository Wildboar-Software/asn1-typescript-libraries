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
import { ID, _decode_ID, _encode_ID } from '../MHSObjectIdentifiers/ID.ta.mjs';
import { id_arch } from '../MHSObjectIdentifiers/id-arch.va.mjs';
/**
 * @summary id_san
 * @description
 *
 * OBJECT IDENTIFIER `id_san`. Defined in ITU-T X.402 (1999) (Annex A).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-san ID ::= {id-arch  6}
 * ```
 *
 * @constant
 */
export const id_san: ID = _OID.fromParts([6], id_arch);

/* eslint-enable */
