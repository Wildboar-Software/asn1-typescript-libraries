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
 * @summary VersionProduct
 * @description
 *
 * Extensible INTEGER version of a product, its software, or its
 * firmware (Clause 6.4.2.3). Only `v0`(0) is named in this edition.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VersionProduct  ::=  INTEGER { v0(0) } ( v0, ... )
 * ```
 */
export
type VersionProduct = INTEGER;

/**
 * @summary VersionProduct_v0
 * @description
 *
 * Named product version 0 (Clause 6.4.2.3). Annex B.4 allows version
 * to be stated as unknown, unspecified, or unused.
 *
 * @constant
 * @type {number}
 */
export
const VersionProduct_v0: VersionProduct = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary VersionProduct_v0
 * @constant
 * @type {number}
 */
export
const v0: VersionProduct = VersionProduct_v0; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Decodes an ASN.1 element into a(n) VersionProduct
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_VersionProduct = $._decodeInteger;


/**
 * @summary Encodes a(n) VersionProduct into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The VersionProduct, encoded as an ASN.1 Element.
 */
export const _encode_VersionProduct = $._encodeInteger;


/* eslint-enable */
