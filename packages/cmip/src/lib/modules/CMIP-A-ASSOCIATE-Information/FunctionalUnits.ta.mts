/* eslint-disable */
import {
  BIT_STRING,
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
 * @summary FunctionalUnits
 * @description
 *
 * CMISE functional units offered on an association. Bit
 * `i` is one iff unit `i` is supported. Selecting
 * `multipleObjectSelection` requires `multipleReply`.
 * Supporting `cancelGet` requires M-GET. ITU-T Rec.
 * X.711 (10/97)
 * [§7.3.1](https://www.itu.int/rec/T-REC-X.711-199710-I),
 * §8.1 g)–h).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FunctionalUnits  ::=  BIT STRING {
 *   multipleObjectSelection(0), filter(1), multipleReply(2), extendedService(3),
 *   cancelGet(4)}
 * ```
 */
export type FunctionalUnits = BIT_STRING;


/**
 * @summary FunctionalUnits_multipleObjectSelection
 * @description
 *
 * Scope other than the base object. If selected, the
 * implementation shall also support `multipleReply`.
 * X.711 §8.1 g).
 *
 * @constant
 */
export const FunctionalUnits_multipleObjectSelection: number = 0; /* LONG_NAMED_BIT */


/**
 * @summary multipleObjectSelection
 * @description
 *
 * Alias of {@link FunctionalUnits_multipleObjectSelection}.
 *
 * @constant
 */
export const multipleObjectSelection: number = FunctionalUnits_multipleObjectSelection; /* SHORT_NAMED_BIT */


/**
 * @summary FunctionalUnits_filter
 * @description
 *
 * Use of `CMISFilter` to select among scoped objects.
 * X.711 §7.3.1.
 *
 * @constant
 */
export const FunctionalUnits_filter: number = 1; /* LONG_NAMED_BIT */


/**
 * @summary filter
 * @description
 *
 * Alias of {@link FunctionalUnits_filter}.
 *
 * @constant
 */
export const filter: number = FunctionalUnits_filter; /* SHORT_NAMED_BIT */


/**
 * @summary FunctionalUnits_multipleReply
 * @description
 *
 * Linked replies (`m-Linked-Reply`) for M-GET, confirmed
 * M-SET, confirmed M-ACTION, and M-DELETE. Required when
 * scoping is provided. X.711 §6.4–6.8, §8.1 g), §8.2 d).
 *
 * @constant
 */
export const FunctionalUnits_multipleReply: number = 2; /* LONG_NAMED_BIT */


/**
 * @summary multipleReply
 * @description
 *
 * Alias of {@link FunctionalUnits_multipleReply}.
 *
 * @constant
 */
export const multipleReply: number = FunctionalUnits_multipleReply; /* SHORT_NAMED_BIT */


/**
 * @summary FunctionalUnits_extendedService
 * @description
 *
 * ROSE APDUs may be mapped onto presentation services
 * other than P-DATA (for example P-ALTER-CONTEXT to
 * change the DCS). X.711 §5.2, §8.2 c).
 *
 * @constant
 */
export const FunctionalUnits_extendedService: number = 3; /* LONG_NAMED_BIT */


/**
 * @summary extendedService
 * @description
 *
 * Alias of {@link FunctionalUnits_extendedService}.
 *
 * @constant
 */
export const extendedService: number = FunctionalUnits_extendedService; /* SHORT_NAMED_BIT */


/**
 * @summary FunctionalUnits_cancelGet
 * @description
 *
 * M-CANCEL-GET. Support requires M-GET. X.711 §6.4.5,
 * §8.1 h).
 *
 * @constant
 */
export const FunctionalUnits_cancelGet: number = 4; /* LONG_NAMED_BIT */


/**
 * @summary cancelGet
 * @description
 *
 * Alias of {@link FunctionalUnits_cancelGet}.
 *
 * @constant
 */
export const cancelGet: number = FunctionalUnits_cancelGet; /* SHORT_NAMED_BIT */




export const _decode_FunctionalUnits = $._decodeBitString;




export const _encode_FunctionalUnits = $._encodeBitString;


/* eslint-enable */
