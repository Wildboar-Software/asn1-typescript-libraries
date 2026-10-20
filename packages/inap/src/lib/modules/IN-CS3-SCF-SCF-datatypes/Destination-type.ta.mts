/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Destination_type
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Destination-type ::=
 * ENUMERATED {
 *   e164(0),
 *   x121(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_Destination_type {
    e164 = 0,
    x121 = 1,
}

/**
 * @summary Destination_type
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Destination-type ::=
 * ENUMERATED {
 *   e164(0),
 *   x121(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type Destination_type = _enum_for_Destination_type;

/**
 * @summary Destination_type
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Destination-type ::=
 * ENUMERATED {
 *   e164(0),
 *   x121(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const Destination_type = _enum_for_Destination_type;

/**
 * @summary Destination_type_e164
 * @constant
 * @type {number}
 */
export
const Destination_type_e164: Destination_type = Destination_type.e164; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary e164
 * @constant
 * @type {number}
 */
export
const e164: Destination_type = Destination_type.e164; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Destination_type_x121
 * @constant
 * @type {number}
 */
export
const Destination_type_x121: Destination_type = Destination_type.x121; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary x121
 * @constant
 * @type {number}
 */
export
const x121: Destination_type = Destination_type.x121; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_Destination_type: $.ASN1Decoder<Destination_type> = $._decodeEnumerated;

export
const _encode_Destination_type: $.ASN1Encoder<Destination_type> = $._encodeEnumerated;

/* eslint-enable */
