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
import * as $ from '@wildboar/asn1/functional';
import {
    type Timespec,
    _decode_Timespec,
    _encode_Timespec,
} from '../Test-ASN1Module/Timespec.ta.mjs';
/**
 * @summary StateTransitionTimeInterval
 * @description
 *
 * Time between test-state transitions of a controlled test
 * infrastructure test (X.745 states). Defaults to an
 * implementation-specific value if omitted from the request.
 * Alias of `Timespec`. ITU-T Rec. X.737 (11/95)
 * [§7.8.6](https://www.itu.int/rec/T-REC-X.737-199511-I), A.3
 * `stateTransitionTimeIntervalPkg`,
 * A.6.21.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * StateTransitionTimeInterval  ::=  Timespec
 * ```
 */
export type StateTransitionTimeInterval = Timespec; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) StateTransitionTimeInterval
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {StateTransitionTimeInterval} The decoded data structure.
 */
export const _decode_StateTransitionTimeInterval: $.ASN1Decoder<StateTransitionTimeInterval> = _decode_Timespec;

/**
 * @summary Encodes a(n) StateTransitionTimeInterval into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StateTransitionTimeInterval, encoded as an ASN.1 Element.
 */
export const _encode_StateTransitionTimeInterval: $.ASN1Encoder<StateTransitionTimeInterval> = _encode_Timespec;


/* eslint-enable */
