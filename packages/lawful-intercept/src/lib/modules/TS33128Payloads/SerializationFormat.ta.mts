/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SerializationFormat
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SerializationFormat  ::=  ENUMERATED
 * {
 *     xml(1),
 *     json(2),
 *     cbor(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_SerializationFormat {
    xml = 1,
    json = 2,
    cbor = 3,
}

/**
 * @summary SerializationFormat
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SerializationFormat  ::=  ENUMERATED
 * {
 *     xml(1),
 *     json(2),
 *     cbor(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type SerializationFormat = _enum_for_SerializationFormat;

/**
 * @summary SerializationFormat
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SerializationFormat  ::=  ENUMERATED
 * {
 *     xml(1),
 *     json(2),
 *     cbor(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const SerializationFormat = _enum_for_SerializationFormat;

/**
 * @summary SerializationFormat_xml
 * @constant
 * @type {number}
 */
export
const SerializationFormat_xml: SerializationFormat = SerializationFormat.xml; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary xml
 * @constant
 * @type {number}
 */
export
const xml: SerializationFormat = SerializationFormat.xml; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SerializationFormat_json
 * @constant
 * @type {number}
 */
export
const SerializationFormat_json: SerializationFormat = SerializationFormat.json; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary json
 * @constant
 * @type {number}
 */
export
const json: SerializationFormat = SerializationFormat.json; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SerializationFormat_cbor
 * @constant
 * @type {number}
 */
export
const SerializationFormat_cbor: SerializationFormat = SerializationFormat.cbor; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cbor
 * @constant
 * @type {number}
 */
export
const cbor: SerializationFormat = SerializationFormat.cbor; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_SerializationFormat: $.ASN1Decoder<SerializationFormat> = $._decodeEnumerated;
export const _encode_SerializationFormat: $.ASN1Encoder<SerializationFormat> = $._encodeEnumerated;


/* eslint-enable */
