/* eslint-disable */
import {
  type INTEGER,
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
 * @summary Scope_namedNumbers
 * @description
 *
 * Named-number form of `Scope`. ITU-T Rec. X.711 (10/97)
 * [§7.4](https://www.itu.int/rec/T-REC-X.711-199710-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Scope-namedNumbers ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type Scope_namedNumbers = INTEGER;


/**
 * @summary Scope_namedNumbers_baseObject
 * @description
 *
 * Select only the base managed object. Same as
 * `individualLevels`/`baseToNthLevel` value 0.
 *
 * @constant
 * @type {number}
 */
export const Scope_namedNumbers_baseObject: 0 = 0 satisfies Scope_namedNumbers; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Scope_namedNumbers_baseObject
 * @description
 *
 * Alias of {@link Scope_namedNumbers_baseObject}.
 *
 * @constant
 * @type {number}
 */
export const baseObject: 0 = Scope_namedNumbers_baseObject; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Scope_namedNumbers_firstLevelOnly
 * @description
 *
 * Select only immediate subordinates of the base. Same
 * as `individualLevels` value 1.
 *
 * @constant
 * @type {number}
 */
export const Scope_namedNumbers_firstLevelOnly: 1 = 1 satisfies Scope_namedNumbers; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Scope_namedNumbers_firstLevelOnly
 * @description
 *
 * Alias of {@link Scope_namedNumbers_firstLevelOnly}.
 *
 * @constant
 * @type {number}
 */
export const firstLevelOnly: 1 = Scope_namedNumbers_firstLevelOnly; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Scope_namedNumbers_wholeSubtree
 * @description
 *
 * Select the base and all subordinates at every level.
 *
 * @constant
 * @type {number}
 */
export const Scope_namedNumbers_wholeSubtree: 2 = 2 satisfies Scope_namedNumbers; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Scope_namedNumbers_wholeSubtree
 * @description
 *
 * Alias of {@link Scope_namedNumbers_wholeSubtree}.
 *
 * @constant
 * @type {number}
 */
export const wholeSubtree: 2 = Scope_namedNumbers_wholeSubtree; /* SHORT_NAMED_INTEGER_VALUE */




export const _decode_Scope_namedNumbers: $.ASN1Decoder<INTEGER> = $._decodeInteger;




export const _encode_Scope_namedNumbers: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
