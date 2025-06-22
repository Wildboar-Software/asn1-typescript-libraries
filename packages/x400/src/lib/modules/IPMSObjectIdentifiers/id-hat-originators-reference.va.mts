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
import { id_hat } from '../IPMSObjectIdentifiers/id-hat.va.mjs';
/**
 * @summary id_hat_originators_reference
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-hat-originators-reference ID ::= {id-hat  33}
 * ```
 *
 * @constant
 */
export const id_hat_originators_reference: ID = _OID.fromParts([33], id_hat);

/* eslint-enable */
