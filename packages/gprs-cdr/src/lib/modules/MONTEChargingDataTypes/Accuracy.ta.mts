/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Accuracy
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Accuracy    ::=  ENUMERATED {
 *    cGIECGI     ( 0 ),
 *    eNB         ( 1 ),
 *    lATARA      ( 2 ),
 *    pRA         ( 3 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_Accuracy {
    cGIECGI = 0,
    eNB = 1,
    lATARA = 2,
    pRA = 3,
}

/**
 * @summary Accuracy
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Accuracy    ::=  ENUMERATED {
 *    cGIECGI     ( 0 ),
 *    eNB         ( 1 ),
 *    lATARA      ( 2 ),
 *    pRA         ( 3 ) }
 * ```
 * 
 * @enum {number}
 */
export
type Accuracy = _enum_for_Accuracy;

/**
 * @summary Accuracy
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Accuracy    ::=  ENUMERATED {
 *    cGIECGI     ( 0 ),
 *    eNB         ( 1 ),
 *    lATARA      ( 2 ),
 *    pRA         ( 3 ) }
 * ```
 * 
 * @enum {number}
 */
export
const Accuracy = _enum_for_Accuracy;

/**
 * @summary Accuracy_cGIECGI
 * @constant
 * @type {number}
 */
export
const Accuracy_cGIECGI: Accuracy = Accuracy.cGIECGI; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cGIECGI
 * @constant
 * @type {number}
 */
export
const cGIECGI: Accuracy = Accuracy.cGIECGI; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Accuracy_eNB
 * @constant
 * @type {number}
 */
export
const Accuracy_eNB: Accuracy = Accuracy.eNB; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary eNB
 * @constant
 * @type {number}
 */
export
const eNB: Accuracy = Accuracy.eNB; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Accuracy_lATARA
 * @constant
 * @type {number}
 */
export
const Accuracy_lATARA: Accuracy = Accuracy.lATARA; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary lATARA
 * @constant
 * @type {number}
 */
export
const lATARA: Accuracy = Accuracy.lATARA; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Accuracy_pRA
 * @constant
 * @type {number}
 */
export
const Accuracy_pRA: Accuracy = Accuracy.pRA; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pRA
 * @constant
 * @type {number}
 */
export
const pRA: Accuracy = Accuracy.pRA; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_Accuracy: $.ASN1Decoder<Accuracy> = $._decodeEnumerated;

export
const _encode_Accuracy: $.ASN1Encoder<Accuracy> = $._encodeEnumerated;

/* eslint-enable */
