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
import { ID, _decode_ID, _encode_ID } from '../EDIMSObjectIdentifiers/ID.ta.mjs';
import { id_hat } from '../EDIMSObjectIdentifiers/id-hat.va.mjs';
/**
 * @summary id_hat_heading_extensions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-hat-heading-extensions ID ::= {id-hat  20}
 * ```
 *
 * @constant
 */
export const id_hat_heading_extensions: ID = _OID.fromParts([20], id_hat);

/* eslint-enable */
