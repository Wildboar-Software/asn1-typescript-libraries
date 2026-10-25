/* eslint-disable */
import {
    type ASN1Element as _Element,
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
 * @summary ErrorTreatment
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ErrorTreatment      ::=  ENUMERATED {
 *      stdErrorAndInfo(0),
 *      help(1),
 *      repeatPrompt(2)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ErrorTreatment {
    stdErrorAndInfo = 0,
    help = 1,
    repeatPrompt = 2,
}

/**
 * @summary ErrorTreatment
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ErrorTreatment      ::=  ENUMERATED {
 *      stdErrorAndInfo(0),
 *      help(1),
 *      repeatPrompt(2)}
 * ```
 * 
 * @enum {number}
 */
export
type ErrorTreatment = _enum_for_ErrorTreatment;

/**
 * @summary ErrorTreatment
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ErrorTreatment      ::=  ENUMERATED {
 *      stdErrorAndInfo(0),
 *      help(1),
 *      repeatPrompt(2)}
 * ```
 * 
 * @enum {number}
 */
export
const ErrorTreatment: typeof _enum_for_ErrorTreatment = _enum_for_ErrorTreatment;

/**
 * @summary ErrorTreatment_stdErrorAndInfo
 * @constant
 * @type {number}
 */
export
const ErrorTreatment_stdErrorAndInfo: _enum_for_ErrorTreatment.stdErrorAndInfo = ErrorTreatment.stdErrorAndInfo; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary stdErrorAndInfo
 * @constant
 * @type {number}
 */
export
const stdErrorAndInfo: _enum_for_ErrorTreatment.stdErrorAndInfo = ErrorTreatment.stdErrorAndInfo; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ErrorTreatment_help
 * @constant
 * @type {number}
 */
export
const ErrorTreatment_help: _enum_for_ErrorTreatment.help = ErrorTreatment.help; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary help
 * @constant
 * @type {number}
 */
export
const help: _enum_for_ErrorTreatment.help = ErrorTreatment.help; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ErrorTreatment_repeatPrompt
 * @constant
 * @type {number}
 */
export
const ErrorTreatment_repeatPrompt: _enum_for_ErrorTreatment.repeatPrompt = ErrorTreatment.repeatPrompt; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary repeatPrompt
 * @constant
 * @type {number}
 */
export
const repeatPrompt: _enum_for_ErrorTreatment.repeatPrompt = ErrorTreatment.repeatPrompt; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_ErrorTreatment: $.ASN1Decoder<number> = $._decodeEnumerated;
export const _encode_ErrorTreatment: $.ASN1Encoder<number> = $._encodeEnumerated;


/* eslint-enable */
