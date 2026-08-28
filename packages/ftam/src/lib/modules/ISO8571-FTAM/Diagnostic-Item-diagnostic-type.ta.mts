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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';


/**
 * @summary Diagnostic_Item_diagnostic_type
 * @description
 *
 * Severity of a diagnostic item (ISO 8571-3:1988 Annex A.3).
 * `informative`(0) qualifies success; `transient`(1) is IFS
 * only; `permanent`(2) implies the operation failed and will
 * recur if the sequence is repeated (Annex A.2 a).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Diagnostic-Item-diagnostic-type ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type Diagnostic_Item_diagnostic_type = INTEGER;


/**
 * @summary Diagnostic_Item_diagnostic_type_informative
 * @description
 *
 * `informative`(0): qualifies a successful action; does not
 * require recovery (ISO 8571-3:1988 Annex A.2 a, A.3).
 *
 * @constant
 * @type {number}
 */
export const Diagnostic_Item_diagnostic_type_informative: Diagnostic_Item_diagnostic_type = 0; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Diagnostic_Item_diagnostic_type_informative
 * @constant
 * @type {number}
 */
export const informative: Diagnostic_Item_diagnostic_type = Diagnostic_Item_diagnostic_type_informative; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Diagnostic_Item_diagnostic_type_transient
 * @description
 *
 * `transient`(1): operation failed but may not recur if
 * repeated. IFS only (ISO 8571-3:1988 §13.13, Annex A.2 a).
 *
 * @constant
 * @type {number}
 */
export const Diagnostic_Item_diagnostic_type_transient: Diagnostic_Item_diagnostic_type = 1; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Diagnostic_Item_diagnostic_type_transient
 * @constant
 * @type {number}
 */
export const transient: Diagnostic_Item_diagnostic_type = Diagnostic_Item_diagnostic_type_transient; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Diagnostic_Item_diagnostic_type_permanent
 * @description
 *
 * `permanent`(2): operation failed and will recur if the
 * sequence is repeated (ISO 8571-3:1988 Annex A.2 a).
 *
 * @constant
 * @type {number}
 */
export const Diagnostic_Item_diagnostic_type_permanent: Diagnostic_Item_diagnostic_type = 2; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Diagnostic_Item_diagnostic_type_permanent
 * @constant
 * @type {number}
 */
export const permanent: Diagnostic_Item_diagnostic_type = Diagnostic_Item_diagnostic_type_permanent; /* SHORT_NAMED_INTEGER_VALUE */




export const _decode_Diagnostic_Item_diagnostic_type = $._decodeInteger;




export const _encode_Diagnostic_Item_diagnostic_type = $._encodeInteger;


/* eslint-enable */
