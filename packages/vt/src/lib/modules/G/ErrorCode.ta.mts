/* eslint-disable */
import {
    INTEGER,
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



/**
 * @summary ErrorCode
 * @description
 *
 * Symbolic failure reasons in ASR, ENR, RLR, SNR, and SPR. ISO/IEC
 * 9041-1:1997 §6.3, §6.19, §6.22, §6.24, §12.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ErrorCode  ::=  INTEGER {
 *     collisionDetected          (0),
 *     vteParamNotSupported       (1),
 *     vteParamCombNotSupported   (2),
 *     vteIncomplete              (3),
 *     vteProfileNotSupported     (4),
 *     vtModeNotSupported         (5),
 *     lengthExceeded             (6)
 * }
 * ```
 */
export
type ErrorCode = INTEGER;

/**
 * @summary ErrorCode_collisionDetected
 * @description
 *
 * VTPM detected a colliding request (RLR, SNR, SPR). ISO/IEC
 * 9041-1:1997 §6.19.2 b, §6.22.2 c, §6.24.2 c.
 * @constant
 * @type {number}
 */
export
const ErrorCode_collisionDetected: ErrorCode = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorCode_collisionDetected
 * @description
 *
 * VTPM detected a colliding request (RLR, SNR, SPR). ISO/IEC
 * 9041-1:1997 §6.19.2 b, §6.22.2 c, §6.24.2 c.
 * @constant
 * @type {number}
 */
export
const collisionDetected: ErrorCode = ErrorCode_collisionDetected; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorCode_vteParamNotSupported
 * @description
 *
 * A VTE-parameter in the offer is not supported (ASR, SPR). ISO/IEC
 * 9041-1:1997 §6.3.2 e, §6.24.2 c.
 * @constant
 * @type {number}
 */
export
const ErrorCode_vteParamNotSupported: ErrorCode = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorCode_vteParamNotSupported
 * @description
 *
 * A VTE-parameter in the offer is not supported (ASR, SPR). ISO/IEC
 * 9041-1:1997 §6.3.2 e, §6.24.2 c.
 * @constant
 * @type {number}
 */
export
const vteParamNotSupported: ErrorCode = ErrorCode_vteParamNotSupported; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorCode_vteParamCombNotSupported
 * @description
 *
 * Offered VTE-parameter combination is not supported (ASR, SPR).
 * ISO/IEC 9041-1:1997 §6.3.2 e, §6.24.2 c.
 * @constant
 * @type {number}
 */
export
const ErrorCode_vteParamCombNotSupported: ErrorCode = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorCode_vteParamCombNotSupported
 * @description
 *
 * Offered VTE-parameter combination is not supported (ASR, SPR).
 * ISO/IEC 9041-1:1997 §6.3.2 e, §6.24.2 c.
 * @constant
 * @type {number}
 */
export
const vteParamCombNotSupported: ErrorCode = ErrorCode_vteParamCombNotSupported; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorCode_vteIncomplete
 * @description
 *
 * Resulting VTE is not a full-VTE (ASR; ENR provider). ISO/IEC
 * 9041-1:1997 §6.3.2 e, §6.10.2 d.
 * @constant
 * @type {number}
 */
export
const ErrorCode_vteIncomplete: ErrorCode = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorCode_vteIncomplete
 * @description
 *
 * Resulting VTE is not a full-VTE (ASR; ENR provider). ISO/IEC
 * 9041-1:1997 §6.3.2 e, §6.10.2 d.
 * @constant
 * @type {number}
 */
export
const vteIncomplete: ErrorCode = ErrorCode_vteIncomplete; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorCode_vteProfileNotSupported
 * @description
 *
 * Named VTE-profile is not supported (ASR, SNR, SPR). ISO/IEC
 * 9041-1:1997 §6.3.2 e, §6.22.2 c, §6.24.2 c.
 * @constant
 * @type {number}
 */
export
const ErrorCode_vteProfileNotSupported: ErrorCode = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorCode_vteProfileNotSupported
 * @description
 *
 * Named VTE-profile is not supported (ASR, SNR, SPR). ISO/IEC
 * 9041-1:1997 §6.3.2 e, §6.22.2 c, §6.24.2 c.
 * @constant
 * @type {number}
 */
export
const vteProfileNotSupported: ErrorCode = ErrorCode_vteProfileNotSupported; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorCode_vtModeNotSupported
 * @description
 *
 * Named in ISO/IEC 9041-1:1997 §12.2. The cited service clauses do
 * not further define when this value is used.
 * @constant
 * @type {number}
 */
export
const ErrorCode_vtModeNotSupported: ErrorCode = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorCode_vtModeNotSupported
 * @description
 *
 * Named in ISO/IEC 9041-1:1997 §12.2. The cited service clauses do
 * not further define when this value is used.
 * @constant
 * @type {number}
 */
export
const vtModeNotSupported: ErrorCode = ErrorCode_vtModeNotSupported; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorCode_lengthExceeded
 * @description
 *
 * Named in ISO/IEC 9041-1:1997 §12.2. The cited service clauses do
 * not further define when this value is used.
 * @constant
 * @type {number}
 */
export
const ErrorCode_lengthExceeded: ErrorCode = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorCode_lengthExceeded
 * @description
 *
 * Named in ISO/IEC 9041-1:1997 §12.2. The cited service clauses do
 * not further define when this value is used.
 * @constant
 * @type {number}
 */
export
const lengthExceeded: ErrorCode = ErrorCode_lengthExceeded; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ErrorCode = $._decodeInteger;
export const _encode_ErrorCode = $._encodeInteger;


/* eslint-enable */
