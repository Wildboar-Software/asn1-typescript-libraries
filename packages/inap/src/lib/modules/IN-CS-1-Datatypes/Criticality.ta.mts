/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Criticality
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Criticality  ::=  ENUMERATED {ignored(0), abort(1)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_Criticality {
    ignored = 0,
    abort = 1,
}

/**
 * @summary Criticality
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Criticality  ::=  ENUMERATED {ignored(0), abort(1)}
 * ```
 * 
 * @enum {number}
 */
export
type Criticality = _enum_for_Criticality;

/**
 * @summary Criticality
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Criticality  ::=  ENUMERATED {ignored(0), abort(1)}
 * ```
 * 
 * @enum {number}
 */
export
const Criticality = _enum_for_Criticality;

/**
 * @summary Criticality_ignored
 * @constant
 * @type {number}
 */
export
const Criticality_ignored: Criticality = Criticality.ignored; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ignored
 * @constant
 * @type {number}
 */
export
const ignored: Criticality = Criticality.ignored; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Criticality_abort
 * @constant
 * @type {number}
 */
export
const Criticality_abort: Criticality = Criticality.abort; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary abort
 * @constant
 * @type {number}
 */
export
const abort: Criticality = Criticality.abort; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_Criticality: $.ASN1Decoder<Criticality> = $._decodeEnumerated;

export
const _encode_Criticality: $.ASN1Encoder<Criticality> = $._encodeEnumerated;

/* eslint-enable */
