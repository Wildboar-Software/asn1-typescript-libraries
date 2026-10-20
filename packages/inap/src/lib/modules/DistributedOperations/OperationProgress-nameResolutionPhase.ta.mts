/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary OperationProgress_nameResolutionPhase
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OperationProgress-nameResolutionPhase ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_OperationProgress_nameResolutionPhase {
    notStarted = 1,
    proceeding = 2,
    completed = 3,
}

/**
 * @summary OperationProgress_nameResolutionPhase
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OperationProgress-nameResolutionPhase ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
type OperationProgress_nameResolutionPhase = _enum_for_OperationProgress_nameResolutionPhase;

/**
 * @summary OperationProgress_nameResolutionPhase
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OperationProgress-nameResolutionPhase ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
const OperationProgress_nameResolutionPhase = _enum_for_OperationProgress_nameResolutionPhase;

/**
 * @summary OperationProgress_nameResolutionPhase_notStarted
 * @constant
 * @type {number}
 */
export
const OperationProgress_nameResolutionPhase_notStarted: OperationProgress_nameResolutionPhase = OperationProgress_nameResolutionPhase.notStarted; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notStarted
 * @constant
 * @type {number}
 */
export
const notStarted: OperationProgress_nameResolutionPhase = OperationProgress_nameResolutionPhase.notStarted; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationProgress_nameResolutionPhase_proceeding
 * @constant
 * @type {number}
 */
export
const OperationProgress_nameResolutionPhase_proceeding: OperationProgress_nameResolutionPhase = OperationProgress_nameResolutionPhase.proceeding; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary proceeding
 * @constant
 * @type {number}
 */
export
const proceeding: OperationProgress_nameResolutionPhase = OperationProgress_nameResolutionPhase.proceeding; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationProgress_nameResolutionPhase_completed
 * @constant
 * @type {number}
 */
export
const OperationProgress_nameResolutionPhase_completed: OperationProgress_nameResolutionPhase = OperationProgress_nameResolutionPhase.completed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary completed
 * @constant
 * @type {number}
 */
export
const completed: OperationProgress_nameResolutionPhase = OperationProgress_nameResolutionPhase.completed; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_OperationProgress_nameResolutionPhase: $.ASN1Decoder<OperationProgress_nameResolutionPhase> = $._decodeEnumerated;

export
const _encode_OperationProgress_nameResolutionPhase: $.ASN1Encoder<OperationProgress_nameResolutionPhase> = $._encodeEnumerated;

/* eslint-enable */
