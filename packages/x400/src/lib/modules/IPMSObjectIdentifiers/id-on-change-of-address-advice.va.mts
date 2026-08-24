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
import { id_on } from '../IPMSObjectIdentifiers/id-on.va.mjs';
/**
 * @summary id_on_change_of_address_advice
 * @description
 *
 * OBJECT IDENTIFIER `id_on_change_of_address_advice`. The Change of Address Advice
 * advice notification field (O) indicates a change of address for the AN’s originator.
 * It contains information previously supplied for the purpose by the AN’s originator,
 * and comprises an OR-descriptor, and, optionally, the time from which the new address
 * will be effective. See ITU-T X.420 (1999), §8.4.2.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-on-change-of-address-advice ID ::= {id-on  1}
 * ```
 *
 * @constant
 */
export const id_on_change_of_address_advice: ID = _OID.fromParts([1], id_on);

/* eslint-enable */
