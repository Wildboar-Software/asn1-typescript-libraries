/* eslint-disable */
import { ASN1Element as _Element, ASN1ConstructionError as _ConstructionError } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TriggerDPType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TriggerDPType  ::=  ENUMERATED {tdp-r(0), tdp-n(1)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_TriggerDPType {
    tdp_r = 0,
    tdp_n = 1,
}

/**
 * @summary TriggerDPType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TriggerDPType  ::=  ENUMERATED {tdp-r(0), tdp-n(1)}
 * ```
 * 
 * @enum {number}
 */
export
type TriggerDPType = _enum_for_TriggerDPType;

/**
 * @summary TriggerDPType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TriggerDPType  ::=  ENUMERATED {tdp-r(0), tdp-n(1)}
 * ```
 * 
 * @enum {number}
 */
export
const TriggerDPType = _enum_for_TriggerDPType;

/**
 * @summary TriggerDPType_tdp_r
 * @constant
 * @type {number}
 */
export
const TriggerDPType_tdp_r = TriggerDPType.tdp_r satisfies TriggerDPType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tdp_r
 * @constant
 * @type {number}
 */
export
const tdp_r = TriggerDPType.tdp_r satisfies TriggerDPType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TriggerDPType_tdp_n
 * @constant
 * @type {number}
 */
export
const TriggerDPType_tdp_n = TriggerDPType.tdp_n satisfies TriggerDPType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tdp_n
 * @constant
 * @type {number}
 */
export
const tdp_n = TriggerDPType.tdp_n satisfies TriggerDPType; /* SHORT_NAMED_ENUMERATED_VALUE */

export
function _decode_TriggerDPType(el: _Element): TriggerDPType {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case TriggerDPType.tdp_r: return TriggerDPType.tdp_r;
        case TriggerDPType.tdp_n: return TriggerDPType.tdp_n;
        default:
            throw new _ConstructionError(
                "Invalid ENUMERATED value " + enumerated + " for TriggerDPType.",
                el,
            );
    }
}

export
const _encode_TriggerDPType: $.ASN1Encoder<TriggerDPType> = $._encodeEnumerated as $.ASN1Encoder<TriggerDPType>;

/* eslint-enable */
