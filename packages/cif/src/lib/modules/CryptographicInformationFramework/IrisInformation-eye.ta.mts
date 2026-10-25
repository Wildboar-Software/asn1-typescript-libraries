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
 * @summary IrisInformation_eye
 * @description
 * 
 * Eye for an iris template. ISO/IEC 7816-15:2016 §8.9.3.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IrisInformation-eye ::= ENUMERATED { left, right }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_IrisInformation_eye {
    left = 0,
    right = 1,
}

/**
 * @summary IrisInformation_eye
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IrisInformation-eye ::= ENUMERATED { left, right }
 * ```
 * 
 * @enum {number}
 */
export
type IrisInformation_eye = _enum_for_IrisInformation_eye;

/**
 * @summary IrisInformation_eye
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IrisInformation-eye ::= ENUMERATED { left, right }
 * ```
 * 
 * @enum {number}
 */
export
const IrisInformation_eye: typeof _enum_for_IrisInformation_eye = _enum_for_IrisInformation_eye;

/**
 * @summary IrisInformation_eye_left
 * @constant
 * @type {number}
 */
export
const IrisInformation_eye_left: _enum_for_IrisInformation_eye.left = IrisInformation_eye.left; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary left
 * @constant
 * @type {number}
 */
export
const left: _enum_for_IrisInformation_eye.left = IrisInformation_eye.left; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IrisInformation_eye_right
 * @constant
 * @type {number}
 */
export
const IrisInformation_eye_right: _enum_for_IrisInformation_eye.right = IrisInformation_eye.right; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary right
 * @constant
 * @type {number}
 */
export
const right: _enum_for_IrisInformation_eye.right = IrisInformation_eye.right; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_IrisInformation_eye: $.ASN1Decoder<number> = $._decodeEnumerated;
export const _encode_IrisInformation_eye: $.ASN1Encoder<number> = $._encodeEnumerated;


/* eslint-enable */
