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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION AlgoInvoke */
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
/* END_OF_SYMBOL_DEFINITION AlgoInvoke */

/* START_OF_SYMBOL_DEFINITION _decode_AlgoInvoke */
/**
 * @summary Decodes an ASN.1 element into a(n) AlgoInvoke
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AlgoInvoke} The decoded data structure.
 */
export function _decode_AlgoInvoke(el: _Element) {
    return $._decodeAny(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AlgoInvoke */

/* START_OF_SYMBOL_DEFINITION _encode_AlgoInvoke */
/**
 * @summary Encodes a(n) AlgoInvoke into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AlgoInvoke, encoded as an ASN.1 Element.
 */
export function _encode_AlgoInvoke(
    value: AlgoInvoke,
    elGetter: $.ASN1Encoder<AlgoInvoke>
) {
    return $._encodeAny(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AlgoInvoke */

/* eslint-enable */
