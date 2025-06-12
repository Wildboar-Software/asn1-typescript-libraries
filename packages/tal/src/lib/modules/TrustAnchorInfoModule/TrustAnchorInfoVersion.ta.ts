/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";



/* START_OF_SYMBOL_DEFINITION TrustAnchorInfoVersion */
/**
 * @summary TrustAnchorInfoVersion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TrustAnchorInfoVersion  ::=  INTEGER { v1(1) }
 * ```
 */
export
type TrustAnchorInfoVersion = INTEGER;
/* END_OF_SYMBOL_DEFINITION TrustAnchorInfoVersion */

/* START_OF_SYMBOL_DEFINITION TrustAnchorInfoVersion_v1 */
/**
 * @summary TrustAnchorInfoVersion_v1
 * @constant
 * @type {number}
 */
export
const TrustAnchorInfoVersion_v1: TrustAnchorInfoVersion = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TrustAnchorInfoVersion_v1 */

/* START_OF_SYMBOL_DEFINITION v1 */
/**
 * @summary TrustAnchorInfoVersion_v1
 * @constant
 * @type {number}
 */
export
const v1: TrustAnchorInfoVersion = TrustAnchorInfoVersion_v1; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION v1 */

/* START_OF_SYMBOL_DEFINITION _decode_TrustAnchorInfoVersion */
/**
 * @summary Decodes an ASN.1 element into a(n) TrustAnchorInfoVersion
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TrustAnchorInfoVersion} The decoded data structure.
 */
export
function _decode_TrustAnchorInfoVersion (el: _Element) {
    return $._decodeInteger(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TrustAnchorInfoVersion */

/* START_OF_SYMBOL_DEFINITION _encode_TrustAnchorInfoVersion */
/**
 * @summary Encodes a(n) TrustAnchorInfoVersion into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TrustAnchorInfoVersion, encoded as an ASN.1 Element.
 */
export
function _encode_TrustAnchorInfoVersion (value: TrustAnchorInfoVersion, elGetter: $.ASN1Encoder<TrustAnchorInfoVersion>) {
    return $._encodeInteger(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TrustAnchorInfoVersion */

/* eslint-enable */
