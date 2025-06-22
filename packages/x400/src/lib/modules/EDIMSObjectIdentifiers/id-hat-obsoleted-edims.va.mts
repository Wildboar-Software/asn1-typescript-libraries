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
 * @summary id_hat_obsoleted_edims
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-hat-obsoleted-edims ID ::= {id-hat  10}
 * ```
 *
 * @constant
 */
export const id_hat_obsoleted_edims: ID = _OID.fromParts([10], id_hat);

/* eslint-enable */
