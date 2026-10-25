/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    type Timespec,
    _decode_Timespec,
    _encode_Timespec,
} from '../Test-ASN1Module/Timespec.ta.mjs';
/**
 * @summary EstablishmentTime
 * @description
 *
 * Time to establish connectivity between two protocol
 * entities (MORT request until AO confirmation). Alias of
 * `Timespec`. ITU-T Rec. X.737 (11/95)
 * [§3.9.1](https://www.itu.int/rec/T-REC-X.737-199511-I),
 * §8.1.9, A.6.9.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EstablishmentTime  ::=  Timespec
 * ```
 */
export type EstablishmentTime = Timespec; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) EstablishmentTime
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EstablishmentTime} The decoded data structure.
 */
export const _decode_EstablishmentTime: $.ASN1Decoder<EstablishmentTime> = _decode_Timespec;

/**
 * @summary Encodes a(n) EstablishmentTime into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EstablishmentTime, encoded as an ASN.1 Element.
 */
export const _encode_EstablishmentTime: $.ASN1Encoder<EstablishmentTime> = _encode_Timespec;


/* eslint-enable */
