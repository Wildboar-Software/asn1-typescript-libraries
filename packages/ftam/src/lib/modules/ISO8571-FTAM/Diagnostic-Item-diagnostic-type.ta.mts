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
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Diagnostic-Item-diagnostic-type ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type Diagnostic_Item_diagnostic_type = INTEGER;


/**
 * @summary Diagnostic_Item_diagnostic_type_informative
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
