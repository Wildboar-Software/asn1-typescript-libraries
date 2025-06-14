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

/* START_OF_SYMBOL_DEFINITION Version */
/**
 * @summary Version
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Version  ::=  INTEGER {v1(0), v2(1), v3(2)}
 * ```
 */
export type Version = INTEGER;
/* END_OF_SYMBOL_DEFINITION Version */

/* START_OF_SYMBOL_DEFINITION Version_v1 */
/**
 * @summary Version_v1
 * @constant
 * @type {number}
 */
export const Version_v1: Version = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Version_v1 */

/* START_OF_SYMBOL_DEFINITION v1 */
/**
 * @summary Version_v1
 * @constant
 * @type {number}
 */
export const v1: Version = Version_v1; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION v1 */

/* START_OF_SYMBOL_DEFINITION Version_v2 */
/**
 * @summary Version_v2
 * @constant
 * @type {number}
 */
export const Version_v2: Version = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Version_v2 */

/* START_OF_SYMBOL_DEFINITION v2 */
/**
 * @summary Version_v2
 * @constant
 * @type {number}
 */
export const v2: Version = Version_v2; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION v2 */

/* START_OF_SYMBOL_DEFINITION Version_v3 */
/**
 * @summary Version_v3
 * @constant
 * @type {number}
 */
export const Version_v3: Version = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Version_v3 */

/* START_OF_SYMBOL_DEFINITION v3 */
/**
 * @summary Version_v3
 * @constant
 * @type {number}
 */
export const v3: Version = Version_v3; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION v3 */

/* START_OF_SYMBOL_DEFINITION _decode_Version */
/**
 * @summary Decodes an ASN.1 element into a(n) Version
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Version} The decoded data structure.
 */
export function _decode_Version(el: _Element) {
    return $._decodeInteger(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Version */

/* START_OF_SYMBOL_DEFINITION _encode_Version */
/**
 * @summary Encodes a(n) Version into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Version, encoded as an ASN.1 Element.
 */
export function _encode_Version(
    value: Version,
    elGetter: $.ASN1Encoder<Version>
) {
    return $._encodeInteger(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Version */

/* eslint-enable */
