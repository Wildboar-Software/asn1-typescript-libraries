/* eslint-disable */
import {
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
 * @summary CMIPAbortSource
 * @description
 *
 * Origin of an A-ABORT carrying `CMIPAbortInfo`. User
 * abort vs CMIPM protocol-error abort. ITU-T Rec. X.711
 * (10/97)
 * [§7.3.2](https://www.itu.int/rec/T-REC-X.711-199710-I),
 * Annex A.4.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CMIPAbortSource  ::=  ENUMERATED {cmiseServiceUser(0), cmiseServiceProvider(1)}
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_CMIPAbortSource {
  cmiseServiceUser = 0,
  cmiseServiceProvider = 1,
}


/**
 * @summary CMIPAbortSource
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CMIPAbortSource  ::=  ENUMERATED {cmiseServiceUser(0), cmiseServiceProvider(1)}
 * ```
 *
 * @enum {number}
 */
export type CMIPAbortSource = _enum_for_CMIPAbortSource;


/**
 * @summary CMIPAbortSource
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CMIPAbortSource  ::=  ENUMERATED {cmiseServiceUser(0), cmiseServiceProvider(1)}
 * ```
 *
 * @enum {number}
 */
export const CMIPAbortSource = _enum_for_CMIPAbortSource;


/**
 * @summary CMIPAbortSource_cmiseServiceUser
 * @description
 *
 * CMISE-service-user initiated the abort. X.711 Annex
 * A.4.1.
 *
 * @constant
 * @type {number}
 */
export const CMIPAbortSource_cmiseServiceUser: CMIPAbortSource =
  CMIPAbortSource.cmiseServiceUser; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary cmiseServiceUser
 * @description
 *
 * Alias of {@link CMIPAbortSource_cmiseServiceUser}.
 *
 * @constant
 * @type {number}
 */
export const cmiseServiceUser: CMIPAbortSource =
  CMIPAbortSource.cmiseServiceUser; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CMIPAbortSource_cmiseServiceProvider
 * @description
 *
 * CMIPM detected a protocol error and aborted. X.711
 * Annex A.4.4.
 *
 * @constant
 * @type {number}
 */
export const CMIPAbortSource_cmiseServiceProvider: CMIPAbortSource =
  CMIPAbortSource.cmiseServiceProvider; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary cmiseServiceProvider
 * @description
 *
 * Alias of {@link CMIPAbortSource_cmiseServiceProvider}.
 *
 * @constant
 * @type {number}
 */
export const cmiseServiceProvider: CMIPAbortSource =
  CMIPAbortSource.cmiseServiceProvider; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_CMIPAbortSource = $._decodeEnumerated;




export const _encode_CMIPAbortSource = $._encodeEnumerated;


/* eslint-enable */
