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
    ConnectivityPointer,
    _decode_ConnectivityPointer,
    _encode_ConnectivityPointer,
} from '../ASN1DefinedTypesModule/ConnectivityPointer.ta.mjs';

/**
 * @summary CTPUpstreamPointer
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CTPUpstreamPointer  ::=
 *   ConnectivityPointer
 *     (WITH COMPONENTS {
 *        ...,
 *
 *        -- the other two choices are present
 *        concatenated  ABSENT
 *      })
 * ```
 */
export type CTPUpstreamPointer = ConnectivityPointer; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) CTPUpstreamPointer
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CTPUpstreamPointer} The decoded data structure.
 */
export const _decode_CTPUpstreamPointer: $.ASN1Decoder<CTPUpstreamPointer> = _decode_ConnectivityPointer;

/**
 * @summary Encodes a(n) CTPUpstreamPointer into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CTPUpstreamPointer, encoded as an ASN.1 Element.
 */
export const _encode_CTPUpstreamPointer: $.ASN1Encoder<CTPUpstreamPointer> = _encode_ConnectivityPointer;


/* eslint-enable */
