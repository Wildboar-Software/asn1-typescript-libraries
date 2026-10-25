/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Accuracy
 * @description
 *
 * Desired accuracy of the location requested for location
 * reporting. Category Oc on the ME-CO-CDR. TS 32.278 allows
 * cell level (CGI/ECGI), eNB, and TA/RA level. It does not
 * describe `pRA`.
 *
 * 3GPP TS 32.278 V19.0.0 clauses 5.1 and 6.1.3.2.
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
 * Desired accuracy of the location requested for location
 * reporting. Category Oc on the ME-CO-CDR. TS 32.278 allows
 * cell level (CGI/ECGI), eNB, and TA/RA level. It does not
 * describe `pRA`.
 *
 * 3GPP TS 32.278 V19.0.0 clauses 5.1 and 6.1.3.2.
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
 * Desired accuracy of the location requested for location
 * reporting. Category Oc on the ME-CO-CDR. TS 32.278 allows
 * cell level (CGI/ECGI), eNB, and TA/RA level. It does not
 * describe `pRA`.
 *
 * 3GPP TS 32.278 V19.0.0 clauses 5.1 and 6.1.3.2.
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
 * @description
 *
 * Cell level: CGI or ECGI.
 *
 * 3GPP TS 32.278 V19.0.0 clause 6.1.3.2.
 *
 * @constant
 * @type {number}
 */
export
const Accuracy_cGIECGI = Accuracy.cGIECGI; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cGIECGI
 * @description
 *
 * Cell level (CGI/ECGI). See {@link Accuracy_cGIECGI}.
 *
 * @constant
 * @type {number}
 */
export
const cGIECGI = Accuracy.cGIECGI; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Accuracy_eNB
 * @description
 *
 * eNodeB level.
 *
 * 3GPP TS 32.278 V19.0.0 clause 6.1.3.2.
 *
 * @constant
 * @type {number}
 */
export
const Accuracy_eNB = Accuracy.eNB; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary eNB
 * @description
 *
 * eNodeB level. See {@link Accuracy_eNB}.
 *
 * @constant
 * @type {number}
 */
export
const eNB = Accuracy.eNB; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Accuracy_lATARA
 * @description
 *
 * TA/RA level, as named in TS 32.278. The specification does not
 * mention a location-area granularity for this value.
 *
 * 3GPP TS 32.278 V19.0.0 clause 6.1.3.2.
 *
 * @constant
 * @type {number}
 */
export
const Accuracy_lATARA = Accuracy.lATARA; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary lATARA
 * @description
 *
 * TA/RA level. See {@link Accuracy_lATARA}.
 *
 * @constant
 * @type {number}
 */
export
const lATARA = Accuracy.lATARA; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Accuracy_pRA
 * @description
 *
 * Present in the abstract syntax. TS 32.278 V19.0.0 does not
 * describe this accuracy.
 *
 * @constant
 * @type {number}
 */
export
const Accuracy_pRA = Accuracy.pRA; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pRA
 * @description
 *
 * See {@link Accuracy_pRA}. TS 32.278 V19.0.0 does not describe
 * this value.
 *
 * @constant
 * @type {number}
 */
export
const pRA = Accuracy.pRA; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_Accuracy: $.ASN1Decoder<Accuracy> = $._decodeEnumerated;

export
const _encode_Accuracy: $.ASN1Encoder<Accuracy> = $._encodeEnumerated;

/* eslint-enable */
