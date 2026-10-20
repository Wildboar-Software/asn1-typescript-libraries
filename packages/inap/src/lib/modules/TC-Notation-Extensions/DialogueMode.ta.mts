/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DialogueMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DialogueMode  ::=  ENUMERATED {structured(1), unstructured(2)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_DialogueMode {
    structured = 1,
    unstructured = 2,
}

/**
 * @summary DialogueMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DialogueMode  ::=  ENUMERATED {structured(1), unstructured(2)}
 * ```
 * 
 * @enum {number}
 */
export
type DialogueMode = _enum_for_DialogueMode;

/**
 * @summary DialogueMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DialogueMode  ::=  ENUMERATED {structured(1), unstructured(2)}
 * ```
 * 
 * @enum {number}
 */
export
const DialogueMode = _enum_for_DialogueMode;

/**
 * @summary DialogueMode_structured
 * @constant
 * @type {number}
 */
export
const DialogueMode_structured: DialogueMode = DialogueMode.structured; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary structured
 * @constant
 * @type {number}
 */
export
const structured: DialogueMode = DialogueMode.structured; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DialogueMode_unstructured
 * @constant
 * @type {number}
 */
export
const DialogueMode_unstructured: DialogueMode = DialogueMode.unstructured; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unstructured
 * @constant
 * @type {number}
 */
export
const unstructured: DialogueMode = DialogueMode.unstructured; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_DialogueMode: $.ASN1Decoder<DialogueMode> = $._decodeEnumerated;

export
const _encode_DialogueMode: $.ASN1Encoder<DialogueMode> = $._encodeEnumerated;

/* eslint-enable */
