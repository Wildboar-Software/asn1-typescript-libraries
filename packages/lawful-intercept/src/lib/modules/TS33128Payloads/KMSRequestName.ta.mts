/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary KMSRequestName
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * KMSRequestName  ::=  ENUMERATED
 * {
 *     kMSInitialize(1),
 *     kMSKeyProvision(2),
 *     kMSCert(3),
 *     kMSCertCache(4),
 *     kMSLookup(5),
 *     kMSRedirectUpload(6)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_KMSRequestName {
    kMSInitialize = 1,
    kMSKeyProvision = 2,
    kMSCert = 3,
    kMSCertCache = 4,
    kMSLookup = 5,
    kMSRedirectUpload = 6,
}

/**
 * @summary KMSRequestName
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * KMSRequestName  ::=  ENUMERATED
 * {
 *     kMSInitialize(1),
 *     kMSKeyProvision(2),
 *     kMSCert(3),
 *     kMSCertCache(4),
 *     kMSLookup(5),
 *     kMSRedirectUpload(6)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type KMSRequestName = _enum_for_KMSRequestName;

/**
 * @summary KMSRequestName
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * KMSRequestName  ::=  ENUMERATED
 * {
 *     kMSInitialize(1),
 *     kMSKeyProvision(2),
 *     kMSCert(3),
 *     kMSCertCache(4),
 *     kMSLookup(5),
 *     kMSRedirectUpload(6)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const KMSRequestName = _enum_for_KMSRequestName;

/**
 * @summary KMSRequestName_kMSInitialize
 * @constant
 * @type {number}
 */
export
const KMSRequestName_kMSInitialize: KMSRequestName = KMSRequestName.kMSInitialize; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary kMSInitialize
 * @constant
 * @type {number}
 */
export
const kMSInitialize: KMSRequestName = KMSRequestName.kMSInitialize; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary KMSRequestName_kMSKeyProvision
 * @constant
 * @type {number}
 */
export
const KMSRequestName_kMSKeyProvision: KMSRequestName = KMSRequestName.kMSKeyProvision; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary kMSKeyProvision
 * @constant
 * @type {number}
 */
export
const kMSKeyProvision: KMSRequestName = KMSRequestName.kMSKeyProvision; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary KMSRequestName_kMSCert
 * @constant
 * @type {number}
 */
export
const KMSRequestName_kMSCert: KMSRequestName = KMSRequestName.kMSCert; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary kMSCert
 * @constant
 * @type {number}
 */
export
const kMSCert: KMSRequestName = KMSRequestName.kMSCert; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary KMSRequestName_kMSCertCache
 * @constant
 * @type {number}
 */
export
const KMSRequestName_kMSCertCache: KMSRequestName = KMSRequestName.kMSCertCache; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary kMSCertCache
 * @constant
 * @type {number}
 */
export
const kMSCertCache: KMSRequestName = KMSRequestName.kMSCertCache; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary KMSRequestName_kMSLookup
 * @constant
 * @type {number}
 */
export
const KMSRequestName_kMSLookup: KMSRequestName = KMSRequestName.kMSLookup; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary kMSLookup
 * @constant
 * @type {number}
 */
export
const kMSLookup: KMSRequestName = KMSRequestName.kMSLookup; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary KMSRequestName_kMSRedirectUpload
 * @constant
 * @type {number}
 */
export
const KMSRequestName_kMSRedirectUpload: KMSRequestName = KMSRequestName.kMSRedirectUpload; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary kMSRedirectUpload
 * @constant
 * @type {number}
 */
export
const kMSRedirectUpload: KMSRequestName = KMSRequestName.kMSRedirectUpload; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_KMSRequestName: $.ASN1Decoder<KMSRequestName> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) KMSRequestName
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_KMSRequestName (el: _Element): KMSRequestName {
    if (!_cached_decoder_for_KMSRequestName) { _cached_decoder_for_KMSRequestName = $._decodeEnumerated; }
    return _cached_decoder_for_KMSRequestName(el);
}

let _cached_encoder_for_KMSRequestName: $.ASN1Encoder<KMSRequestName> | null = null;

/**
 * @summary Encodes a(n) KMSRequestName into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KMSRequestName, encoded as an ASN.1 Element.
 */
export
function _encode_KMSRequestName (value: KMSRequestName, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_KMSRequestName) { _cached_encoder_for_KMSRequestName = $._encodeEnumerated; }
    return _cached_encoder_for_KMSRequestName(value, elGetter);
}


/* eslint-enable */
