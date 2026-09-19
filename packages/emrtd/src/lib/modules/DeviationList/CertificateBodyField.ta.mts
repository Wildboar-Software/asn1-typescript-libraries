/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CertificateBodyField
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CertificateBodyField  ::=  INTEGER {
 *     generic(0),
 *     version(1),
 *     serialNumber(2),
 *     signature(3),
 *     issuer(4),
 *     validity(5),
 *     subject(6),
 *     subjectPublicKeyInfo(7),
 *     issuerUniqueID(8),
 *     subjectUniqueID(9)
 * }
 * ```
 */
export
type CertificateBodyField = INTEGER;

/**
 * @summary CertificateBodyField_generic
 * @constant
 * @type {number}
 */
export
const CertificateBodyField_generic: CertificateBodyField = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CertificateBodyField_generic
 * @constant
 * @type {number}
 */
export
const generic: CertificateBodyField = CertificateBodyField_generic; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CertificateBodyField_version
 * @constant
 * @type {number}
 */
export
const CertificateBodyField_version: CertificateBodyField = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CertificateBodyField_version
 * @constant
 * @type {number}
 */
export
const version: CertificateBodyField = CertificateBodyField_version; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CertificateBodyField_serialNumber
 * @constant
 * @type {number}
 */
export
const CertificateBodyField_serialNumber: CertificateBodyField = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CertificateBodyField_serialNumber
 * @constant
 * @type {number}
 */
export
const serialNumber: CertificateBodyField = CertificateBodyField_serialNumber; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CertificateBodyField_signature
 * @constant
 * @type {number}
 */
export
const CertificateBodyField_signature: CertificateBodyField = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CertificateBodyField_signature
 * @constant
 * @type {number}
 */
export
const signature: CertificateBodyField = CertificateBodyField_signature; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CertificateBodyField_issuer
 * @constant
 * @type {number}
 */
export
const CertificateBodyField_issuer: CertificateBodyField = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CertificateBodyField_issuer
 * @constant
 * @type {number}
 */
export
const issuer: CertificateBodyField = CertificateBodyField_issuer; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CertificateBodyField_validity
 * @constant
 * @type {number}
 */
export
const CertificateBodyField_validity: CertificateBodyField = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CertificateBodyField_validity
 * @constant
 * @type {number}
 */
export
const validity: CertificateBodyField = CertificateBodyField_validity; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CertificateBodyField_subject
 * @constant
 * @type {number}
 */
export
const CertificateBodyField_subject: CertificateBodyField = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CertificateBodyField_subject
 * @constant
 * @type {number}
 */
export
const subject: CertificateBodyField = CertificateBodyField_subject; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CertificateBodyField_subjectPublicKeyInfo
 * @constant
 * @type {number}
 */
export
const CertificateBodyField_subjectPublicKeyInfo: CertificateBodyField = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CertificateBodyField_subjectPublicKeyInfo
 * @constant
 * @type {number}
 */
export
const subjectPublicKeyInfo: CertificateBodyField = CertificateBodyField_subjectPublicKeyInfo; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CertificateBodyField_issuerUniqueID
 * @constant
 * @type {number}
 */
export
const CertificateBodyField_issuerUniqueID: CertificateBodyField = 8; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CertificateBodyField_issuerUniqueID
 * @constant
 * @type {number}
 */
export
const issuerUniqueID: CertificateBodyField = CertificateBodyField_issuerUniqueID; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CertificateBodyField_subjectUniqueID
 * @constant
 * @type {number}
 */
export
const CertificateBodyField_subjectUniqueID: CertificateBodyField = 9; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CertificateBodyField_subjectUniqueID
 * @constant
 * @type {number}
 */
export
const subjectUniqueID: CertificateBodyField = CertificateBodyField_subjectUniqueID; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_CertificateBodyField: $.ASN1Decoder<CertificateBodyField> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CertificateBodyField
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CertificateBodyField (el: _Element): CertificateBodyField {
    if (!_cached_decoder_for_CertificateBodyField) { _cached_decoder_for_CertificateBodyField = $._decodeInteger; }
    return _cached_decoder_for_CertificateBodyField(el);
}

let _cached_encoder_for_CertificateBodyField: $.ASN1Encoder<CertificateBodyField> | null = null;

/**
 * @summary Encodes a(n) CertificateBodyField into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertificateBodyField, encoded as an ASN.1 Element.
 */
export
function _encode_CertificateBodyField (value: CertificateBodyField, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CertificateBodyField) { _cached_encoder_for_CertificateBodyField = $._encodeInteger; }
    return _cached_encoder_for_CertificateBodyField(value, elGetter);
}


/* eslint-enable */
