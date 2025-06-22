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
} from "jsr:@wildboar/asn1";
import * as $ from "jsr:@wildboar/asn1/functional";

/**
 * @summary AlgoInvoke
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AlgoInvoke{ALGORITHM:SupportedAlgorithms}  ::=
 *     ALGORITHM.&DynParms({SupportedAlgorithms})
 * ```
 */
export type AlgoInvoke = _Element; // ObjectClassFieldType

/**
 * @summary Decodes an ASN.1 element into a(n) AlgoInvoke
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AlgoInvoke} The decoded data structure.
 */
export function _decode_AlgoInvoke(el: _Element) {
    return $._decodeAny(el);
}

/**
 * @summary Encodes a(n) AlgoInvoke into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AlgoInvoke, encoded as an ASN.1 Element.
 */
export function _encode_AlgoInvoke(
    value: AlgoInvoke,
    elGetter: $.ASN1Encoder<AlgoInvoke>
) {
    return $._encodeAny(value, elGetter);
}


/* eslint-enable */
