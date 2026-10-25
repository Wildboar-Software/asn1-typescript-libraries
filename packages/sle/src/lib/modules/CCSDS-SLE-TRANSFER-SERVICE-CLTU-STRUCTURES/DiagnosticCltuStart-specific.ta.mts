/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DiagnosticCltuStart_specific
 * @description
 * 
 * FCLTU-specific negative result for CLTU-START. The provider should report the
 * first failure in the order given in section 3.4.2.9, after duplicate invoke
 * id. other reason is the common alternative and is used only when no listed
 * diagnostic fits. CCSDS 912.1-B-5, sections 3.4.2.9 and 3.1.3.4.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiagnosticCltuStart-specific ::= INTEGER
 *    {  outOfService                     (0)
 *    ,  unableToComply                   (1)
 *    ,  productionTimeExpired            (2)
 *    , invalidCltuId                     (3)
 *    }
 * ```
 */
export
type DiagnosticCltuStart_specific = INTEGER;

/**
 * @summary DiagnosticCltuStart_specific_outOfService
 * @description
 *
 * The provider has been taken out of service for an indefinite period by
 * management; production-status is halted. CCSDS 912.1-B-5, section 3.4.2.9.
 * @constant
 * @type {number}
 */
export
const DiagnosticCltuStart_specific_outOfService: DiagnosticCltuStart_specific = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticCltuStart_specific_outOfService
 * @description
 *
 * production-status is halted, so CLTU-START is refused (CCSDS 912.1-B-5,
 * section 3.4.2.9).
 * @constant
 * @type {number}
 */
export
const outOfService: DiagnosticCltuStart_specific = DiagnosticCltuStart_specific_outOfService; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticCltuStart_specific_unableToComply
 * @description
 *
 * The provider cannot accept data because of a fault that may be temporary;
 * production-status is interrupted. The user may retry START later in the
 * provision period. If management decides the fault is lasting, the provider
 * may PEER-ABORT. CCSDS 912.1-B-5, sections 3.4.2.9 and 3.4.3.2.
 * @constant
 * @type {number}
 */
export
const DiagnosticCltuStart_specific_unableToComply: DiagnosticCltuStart_specific = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticCltuStart_specific_unableToComply
 * @description
 *
 * production-status is interrupted; START may be retried later (CCSDS
 * 912.1-B-5, section 3.4.2.9).
 * @constant
 * @type {number}
 */
export
const unableToComply: DiagnosticCltuStart_specific = DiagnosticCltuStart_specific_unableToComply; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticCltuStart_specific_productionTimeExpired
 * @description
 *
 * The time period scheduled for production of CLTUs is already past. CCSDS
 * 912.1-B-5, section 3.4.2.9.
 * @constant
 * @type {number}
 */
export
const DiagnosticCltuStart_specific_productionTimeExpired: DiagnosticCltuStart_specific = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticCltuStart_specific_productionTimeExpired
 * @description
 *
 * The scheduled CLTU production period is already past (CCSDS 912.1-B-5,
 * section 3.4.2.9).
 * @constant
 * @type {number}
 */
export
const productionTimeExpired: DiagnosticCltuStart_specific = DiagnosticCltuStart_specific_productionTimeExpired; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticCltuStart_specific_invalidCltuId
 * @description
 *
 * first-cltu-identification is less than the cltu-identification of a CLTU
 * already in the buffer. CCSDS 912.1-B-5, section 3.4.2.9.
 * @constant
 * @type {number}
 */
export
const DiagnosticCltuStart_specific_invalidCltuId: DiagnosticCltuStart_specific = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticCltuStart_specific_invalidCltuId
 * @description
 *
 * first-cltu-identification is below a CLTU already buffered (CCSDS 912.1-B-5,
 * section 3.4.2.9).
 * @constant
 * @type {number}
 */
export
const invalidCltuId: DiagnosticCltuStart_specific = DiagnosticCltuStart_specific_invalidCltuId; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_DiagnosticCltuStart_specific: $.ASN1Decoder<DiagnosticCltuStart_specific> = $._decodeInteger;
export const _encode_DiagnosticCltuStart_specific: $.ASN1Encoder<DiagnosticCltuStart_specific> = $._encodeInteger;


/* eslint-enable */
