/* eslint-disable */
import {
    ENUMERATED,
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



export
enum _enum_for_ContentType {
    change_cipher_spec = 20,
    alert = 21,
    handshake = 22,
    application_data = 23,
}

/**
 * @summary ContentType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ContentType     ::=     ENUMERATED {
 * change-cipher-spec     (20),
 * alert             (21),
 * handshake             (22),
 * application-data         (23),
 * ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type ContentType = _enum_for_ContentType | ENUMERATED;

/**
 * @summary ContentType_change_cipher_spec
 * @constant
 * @type {number}
 */
export
const ContentType_change_cipher_spec: ContentType = 20; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary change_cipher_spec
 * @constant
 * @type {number}
 */
export
const change_cipher_spec: ContentType = ContentType_change_cipher_spec; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ContentType_alert
 * @constant
 * @type {number}
 */
export
const ContentType_alert: ContentType = 21; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary alert
 * @constant
 * @type {number}
 */
export
const alert: ContentType = ContentType_alert; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ContentType_handshake
 * @constant
 * @type {number}
 */
export
const ContentType_handshake: ContentType = 22; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary handshake
 * @constant
 * @type {number}
 */
export
const handshake: ContentType = ContentType_handshake; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ContentType_application_data
 * @constant
 * @type {number}
 */
export
const ContentType_application_data: ContentType = 23; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary application_data
 * @constant
 * @type {number}
 */
export
const application_data: ContentType = ContentType_application_data; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_ContentType = $._decodeEnumerated;
export const _encode_ContentType = $._encodeEnumerated;


/* eslint-enable */
