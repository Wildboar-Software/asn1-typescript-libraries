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
 * @summary id_hat_service_string_advice
 * @description
 *
 * OBJECT IDENTIFIER `id_hat_service_string_advice`. Indicates the Service String Advice
 * of the EDI Interchange. This is semantically identical to the "UNA, Service string
 * advice" of the EDIFACT Interchange. See ITU-T X.435 (1999), §8.2.14.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-hat-service-string-advice ID ::= {id-hat  15}
 * ```
 *
 * @constant
 */
export const id_hat_service_string_advice: ID = _OID.fromParts([15], id_hat);

/* eslint-enable */
