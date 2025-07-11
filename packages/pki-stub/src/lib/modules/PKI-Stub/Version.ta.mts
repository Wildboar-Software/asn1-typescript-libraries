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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

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

/**
 * @summary Version_v1
 * @constant
 * @type {number}
 */
export const Version_v1: Version = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Version_v1
 * @constant
 * @type {number}
 */
export const v1: Version = Version_v1; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Version_v2
 * @constant
 * @type {number}
 */
export const Version_v2: Version = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Version_v2
 * @constant
 * @type {number}
 */
export const v2: Version = Version_v2; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Version_v3
 * @constant
 * @type {number}
 */
export const Version_v3: Version = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Version_v3
 * @constant
 * @type {number}
 */
export const v3: Version = Version_v3; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) Version
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Version} The decoded data structure.
 */
export const _decode_Version: $.ASN1Decoder<Version> = $._decodeInteger;

/**
 * @summary Encodes a(n) Version into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Version, encoded as an ASN.1 Element.
 */
export const _encode_Version: $.ASN1Encoder<Version> = $._encodeInteger;

/* eslint-enable */
