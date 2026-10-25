/* eslint-disable */
import { ASN1Element as _Element, ASN1ConstructionError as _ConstructionError } from "@wildboar/asn1";
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
const Destination_type_e164 = Destination_type.e164 satisfies Destination_type; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary e164
 * @constant
 * @type {number}
 */
export
const e164 = Destination_type.e164 satisfies Destination_type; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Destination_type_x121
 * @constant
 * @type {number}
 */
export
const Destination_type_x121 = Destination_type.x121 satisfies Destination_type; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary x121
 * @constant
 * @type {number}
 */
export
const x121 = Destination_type.x121 satisfies Destination_type; /* SHORT_NAMED_ENUMERATED_VALUE */

export
function _decode_Destination_type(el: _Element): Destination_type {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case Destination_type.e164: return Destination_type.e164;
        case Destination_type.x121: return Destination_type.x121;
        default:
            throw new _ConstructionError(
                "Invalid ENUMERATED value " + enumerated + " for Destination_type.",
                el,
            );
    }
}

export
const _encode_Destination_type: $.ASN1Encoder<Destination_type> = $._encodeEnumerated as $.ASN1Encoder<Destination_type>;

/* eslint-enable */
