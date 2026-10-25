/* eslint-disable */
import { ASN1Element as _Element, ASN1ConstructionError as _ConstructionError } from "@wildboar/asn1";
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
const Criticality: typeof _enum_for_Criticality = _enum_for_Criticality;

/**
 * @summary Criticality_ignored
 * @constant
 * @type {number}
 */
export
const Criticality_ignored: _enum_for_Criticality.ignored = Criticality.ignored; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ignored
 * @constant
 * @type {number}
 */
export
const ignored: _enum_for_Criticality.ignored = Criticality.ignored; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Criticality_abort
 * @constant
 * @type {number}
 */
export
const Criticality_abort: _enum_for_Criticality.abort = Criticality.abort; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary abort
 * @constant
 * @type {number}
 */
export
const abort: _enum_for_Criticality.abort = Criticality.abort; /* SHORT_NAMED_ENUMERATED_VALUE */

export
function _decode_Criticality(el: _Element): Criticality {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case Criticality.ignored: return Criticality.ignored;
        case Criticality.abort: return Criticality.abort;
        default:
            throw new _ConstructionError(
                "Invalid ENUMERATED value " + enumerated + " for Criticality.",
                el,
            );
    }
}

export
const _encode_Criticality: $.ASN1Encoder<Criticality> = $._encodeEnumerated as $.ASN1Encoder<Criticality>;

/* eslint-enable */
