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
} from 'asn1-ts';
import {
    ID,
    _decode_ID,
    _encode_ID,
} from '../MHSRoutingObjectIdentifiers/ID.ta.mjs';
import { id_at } from '../MHSRoutingObjectIdentifiers/id-at.va.mjs';
/**
 * @summary id_at_specific_passwords
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-specific-passwords ID ::= {id-at  37}
 * ```
 *
 * @constant
 */
export const id_at_specific_passwords: ID = _OID.fromParts([37], id_at);

/* eslint-enable */
