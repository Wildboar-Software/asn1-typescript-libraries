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

/**
 * @summary TrustAnchorInfoVersion_v1
 * @constant
 * @type {number}
 */
export
const TrustAnchorInfoVersion_v1: TrustAnchorInfoVersion = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TrustAnchorInfoVersion_v1
 * @constant
 * @type {number}
 */
export
const v1: TrustAnchorInfoVersion = TrustAnchorInfoVersion_v1; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) TrustAnchorInfoVersion
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TrustAnchorInfoVersion} The decoded data structure.
 */
export
function _decode_TrustAnchorInfoVersion (el: _Element): TrustAnchorInfoVersion {
    return $._decodeInteger(el);
}

/**
 * @summary Encodes a(n) TrustAnchorInfoVersion into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TrustAnchorInfoVersion, encoded as an ASN.1 Element.
 */
export
function _encode_TrustAnchorInfoVersion (value: TrustAnchorInfoVersion, elGetter: $.ASN1Encoder<TrustAnchorInfoVersion>): _Element {
    return $._encodeInteger(value, elGetter);
}


/* eslint-enable */
