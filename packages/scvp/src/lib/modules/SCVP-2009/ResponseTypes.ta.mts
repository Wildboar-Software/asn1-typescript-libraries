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
 * @summary ResponseTypes
 * @description
 *
 * Server-published CV response modes: cached-only, non-cached-only,
 * or both ([RFC 5055 §6.12](https://datatracker.ietf.org/doc/html/rfc5055#section-6.12)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ResponseTypes   ::=  ENUMERATED {
 *     cached-only                (0),
 *     non-cached-only            (1),
 *     cached-and-non-cached      (2)
 * }
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_ResponseTypes {
  cached_only = 0,
  non_cached_only = 1,
  cached_and_non_cached = 2,
}

/**
 * @summary ResponseTypes
 * @description
 *
 * Server-published CV response modes: cached-only, non-cached-only,
 * or both ([RFC 5055 §6.12](https://datatracker.ietf.org/doc/html/rfc5055#section-6.12)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ResponseTypes   ::=  ENUMERATED {
 *     cached-only                (0),
 *     non-cached-only            (1),
 *     cached-and-non-cached      (2)
 * }
 * ```
 *
 * @enum {number}
 */
export type ResponseTypes = _enum_for_ResponseTypes;

/**
 * @summary ResponseTypes
 * @description
 *
 * Server-published CV response modes: cached-only, non-cached-only,
 * or both ([RFC 5055 §6.12](https://datatracker.ietf.org/doc/html/rfc5055#section-6.12)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ResponseTypes   ::=  ENUMERATED {
 *     cached-only                (0),
 *     non-cached-only            (1),
 *     cached-and-non-cached      (2)
 * }
 * ```
 *
 * @enum {number}
 */
export const ResponseTypes = _enum_for_ResponseTypes;

/**
 * @summary ResponseTypes_cached_only
 * @description
 *
 * `cached-only`(0): server only returns cached responses ([RFC 5055 §6.12](https://datatracker.ietf.org/doc/html/rfc5055#section-6.12)).
 *
 * @constant
 * @type {number}
 */
export const ResponseTypes_cached_only: ResponseTypes =
  ResponseTypes.cached_only; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cached_only
 * @description
 *
 * Short name for `ResponseTypes_cached_only` ([RFC 5055 §6.12](https://datatracker.ietf.org/doc/html/rfc5055#section-6.12)).
 *
 * @constant
 * @type {number}
 */
export const cached_only: ResponseTypes =
  ResponseTypes.cached_only; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ResponseTypes_non_cached_only
 * @description
 *
 * `non-cached-only`(1): server only returns request-specific responses ([RFC 5055 §6.12](https://datatracker.ietf.org/doc/html/rfc5055#section-6.12)).
 *
 * @constant
 * @type {number}
 */
export const ResponseTypes_non_cached_only: ResponseTypes =
  ResponseTypes.non_cached_only; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary non_cached_only
 * @description
 *
 * Short name for `ResponseTypes_non_cached_only` ([RFC 5055 §6.12](https://datatracker.ietf.org/doc/html/rfc5055#section-6.12)).
 *
 * @constant
 * @type {number}
 */
export const non_cached_only: ResponseTypes =
  ResponseTypes.non_cached_only; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ResponseTypes_cached_and_non_cached
 * @description
 *
 * `cached-and-non-cached`(2): server supports both modes ([RFC 5055 §6.12](https://datatracker.ietf.org/doc/html/rfc5055#section-6.12)).
 *
 * @constant
 * @type {number}
 */
export const ResponseTypes_cached_and_non_cached: ResponseTypes =
  ResponseTypes.cached_and_non_cached; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cached_and_non_cached
 * @description
 *
 * Short name for `ResponseTypes_cached_and_non_cached` ([RFC 5055 §6.12](https://datatracker.ietf.org/doc/html/rfc5055#section-6.12)).
 *
 * @constant
 * @type {number}
 */
export const cached_and_non_cached: ResponseTypes =
  ResponseTypes.cached_and_non_cached; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_ResponseTypes = $._decodeEnumerated;


export const _encode_ResponseTypes = $._encodeEnumerated;


/* eslint-enable */
