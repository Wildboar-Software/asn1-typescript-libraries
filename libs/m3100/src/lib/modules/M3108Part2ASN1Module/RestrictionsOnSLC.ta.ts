/* eslint-disable */
import {
  itu_t,
  itu_r,
  ccitt,
  iso,
  joint_iso_itu_t,
  joint_iso_ccitt,
  OPTIONAL,
  BOOLEAN,
  INTEGER,
  BIT_STRING,
  OCTET_STRING,
  NULL,
  OBJECT_IDENTIFIER,
  ObjectDescriptor,
  EXTERNAL,
  REAL,
  INSTANCE_OF,
  ENUMERATED,
  EMBEDDED_PDV,
  UTF8String,
  RELATIVE_OID,
  SEQUENCE,
  SEQUENCE_OF,
  SET,
  SET_OF,
  GraphicString,
  NumericString,
  VisibleString,
  PrintableString,
  ISO646String,
  TeletexString,
  GeneralString,
  T61String,
  UniversalString,
  VideotexString,
  BMPString,
  IA5String,
  CharacterString,
  UTCTime,
  GeneralizedTime,
  TIME,
  DATE,
  TIME_OF_DAY,
  DATE_TIME,
  DURATION,
  OID_IRI,
  RELATIVE_OID_IRI,
  TRUE,
  FALSE,
  TRUE_BIT,
  FALSE_BIT,
  PLUS_INFINITY,
  MINUS_INFINITY,
  NOT_A_NUMBER,
  TYPE_IDENTIFIER,
  ABSTRACT_SYNTAX,
  ASN1Element as _Element,
  ASN1TagClass as _TagClass,
  ASN1Construction as _Construction,
  ASN1UniversalType as _UniversalType,
  ObjectIdentifier as _OID,
  External as _External,
  EmbeddedPDV as _PDV,
  ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/node/functional';
import {
  RestrictionsOnSLC_restrictionId,
  _enum_for_RestrictionsOnSLC_restrictionId,
  RestrictionsOnSLC_restrictionId_noRestrictions /* IMPORTED_LONG_ENUMERATION_ITEM */,
  noRestrictions /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  RestrictionsOnSLC_restrictionId_protectedSLCsOnly /* IMPORTED_LONG_ENUMERATION_ITEM */,
  protectedSLCsOnly /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  RestrictionsOnSLC_restrictionId_protectedDedicatedSLCsOnly /* IMPORTED_LONG_ENUMERATION_ITEM */,
  protectedDedicatedSLCsOnly /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  RestrictionsOnSLC_restrictionId_dedicatedSLCsOnlyWithProtectedSLCsPreferred /* IMPORTED_LONG_ENUMERATION_ITEM */,
  dedicatedSLCsOnlyWithProtectedSLCsPreferred /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  RestrictionsOnSLC_restrictionId_dedicatedSLCsPreferredProtectedSLCsRequired /* IMPORTED_LONG_ENUMERATION_ITEM */,
  dedicatedSLCsPreferredProtectedSLCsRequired /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  RestrictionsOnSLC_restrictionId_dedicatedProtectedSLCsPreferred /* IMPORTED_LONG_ENUMERATION_ITEM */,
  dedicatedProtectedSLCsPreferred /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_RestrictionsOnSLC_restrictionId,
  _encode_RestrictionsOnSLC_restrictionId,
} from '../M3108Part2ASN1Module/RestrictionsOnSLC-restrictionId.ta';
export {
  RestrictionsOnSLC_restrictionId,
  _enum_for_RestrictionsOnSLC_restrictionId,
  RestrictionsOnSLC_restrictionId_noRestrictions /* IMPORTED_LONG_ENUMERATION_ITEM */,
  noRestrictions /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  RestrictionsOnSLC_restrictionId_protectedSLCsOnly /* IMPORTED_LONG_ENUMERATION_ITEM */,
  protectedSLCsOnly /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  RestrictionsOnSLC_restrictionId_protectedDedicatedSLCsOnly /* IMPORTED_LONG_ENUMERATION_ITEM */,
  protectedDedicatedSLCsOnly /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  RestrictionsOnSLC_restrictionId_dedicatedSLCsOnlyWithProtectedSLCsPreferred /* IMPORTED_LONG_ENUMERATION_ITEM */,
  dedicatedSLCsOnlyWithProtectedSLCsPreferred /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  RestrictionsOnSLC_restrictionId_dedicatedSLCsPreferredProtectedSLCsRequired /* IMPORTED_LONG_ENUMERATION_ITEM */,
  dedicatedSLCsPreferredProtectedSLCsRequired /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  RestrictionsOnSLC_restrictionId_dedicatedProtectedSLCsPreferred /* IMPORTED_LONG_ENUMERATION_ITEM */,
  dedicatedProtectedSLCsPreferred /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_RestrictionsOnSLC_restrictionId,
  _encode_RestrictionsOnSLC_restrictionId,
} from '../M3108Part2ASN1Module/RestrictionsOnSLC-restrictionId.ta';

/* START_OF_SYMBOL_DEFINITION RestrictionsOnSLC */
/**
 * @summary RestrictionsOnSLC
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RestrictionsOnSLC ::= SEQUENCE {
 *   restrictionId
 *     [0]  ENUMERATED {noRestrictions(1), protectedSLCsOnly(2),
 *                      protectedDedicatedSLCsOnly(3),
 *                      dedicatedSLCsOnlyWithProtectedSLCsPreferred(4),
 *                      dedicatedSLCsPreferredProtectedSLCsRequired(5),
 *                      dedicatedProtectedSLCsPreferred(6), ...
 *                      },
 *   restrictionText  [1]  GraphicString OPTIONAL,
 *   ...
 * }
 * ```
 *
 * @class
 */
export class RestrictionsOnSLC {
  constructor(
    /**
     * @summary `restrictionId`.
     * @public
     * @readonly
     */
    readonly restrictionId: RestrictionsOnSLC_restrictionId,
    /**
     * @summary `restrictionText`.
     * @public
     * @readonly
     */
    readonly restrictionText: OPTIONAL<GraphicString>,
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[] = []
  ) {}

  /**
   * @summary Restructures an object into a RestrictionsOnSLC
   * @description
   *
   * This takes an `object` and converts it to a `RestrictionsOnSLC`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `RestrictionsOnSLC`.
   * @returns {RestrictionsOnSLC}
   */
  public static _from_object(
    _o: { [_K in keyof RestrictionsOnSLC]: RestrictionsOnSLC[_K] }
  ): RestrictionsOnSLC {
    return new RestrictionsOnSLC(
      _o.restrictionId,
      _o.restrictionText,
      _o._unrecognizedExtensionsList
    );
  }

  /**
   * @summary The enum used as the type of the component `restrictionId`
   * @public
   * @static
   */

  public static _enum_for_restrictionId = _enum_for_RestrictionsOnSLC_restrictionId;
}
/* END_OF_SYMBOL_DEFINITION RestrictionsOnSLC */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_RestrictionsOnSLC */
/**
 * @summary The Leading Root Component Types of RestrictionsOnSLC
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_RestrictionsOnSLC: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'restrictionId',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'restrictionText',
    true,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_RestrictionsOnSLC */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_RestrictionsOnSLC */
/**
 * @summary The Trailing Root Component Types of RestrictionsOnSLC
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_RestrictionsOnSLC: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_RestrictionsOnSLC */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_RestrictionsOnSLC */
/**
 * @summary The Extension Addition Component Types of RestrictionsOnSLC
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_RestrictionsOnSLC: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_RestrictionsOnSLC */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RestrictionsOnSLC */
let _cached_decoder_for_RestrictionsOnSLC: $.ASN1Decoder<RestrictionsOnSLC> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RestrictionsOnSLC */

/* START_OF_SYMBOL_DEFINITION _decode_RestrictionsOnSLC */
/**
 * @summary Decodes an ASN.1 element into a(n) RestrictionsOnSLC
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RestrictionsOnSLC} The decoded data structure.
 */
export function _decode_RestrictionsOnSLC(el: _Element) {
  if (!_cached_decoder_for_RestrictionsOnSLC) {
    _cached_decoder_for_RestrictionsOnSLC = function (
      el: _Element
    ): RestrictionsOnSLC {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let restrictionId!: RestrictionsOnSLC_restrictionId;
      let restrictionText: OPTIONAL<GraphicString>;
      let _unrecognizedExtensionsList: _Element[] = [];
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        restrictionId: (_el: _Element): void => {
          restrictionId = $._decode_implicit<RestrictionsOnSLC_restrictionId>(
            () => _decode_RestrictionsOnSLC_restrictionId
          )(_el);
        },
        restrictionText: (_el: _Element): void => {
          restrictionText = $._decode_implicit<GraphicString>(
            () => $._decodeGraphicString
          )(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_RestrictionsOnSLC,
        _extension_additions_list_spec_for_RestrictionsOnSLC,
        _root_component_type_list_2_spec_for_RestrictionsOnSLC,
        (ext: _Element): void => {
          _unrecognizedExtensionsList.push(ext);
        }
      );
      return new RestrictionsOnSLC /* SEQUENCE_CONSTRUCTOR_CALL */(
        restrictionId,
        restrictionText,
        _unrecognizedExtensionsList
      );
    };
  }
  return _cached_decoder_for_RestrictionsOnSLC(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RestrictionsOnSLC */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RestrictionsOnSLC */
let _cached_encoder_for_RestrictionsOnSLC: $.ASN1Encoder<RestrictionsOnSLC> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RestrictionsOnSLC */

/* START_OF_SYMBOL_DEFINITION _encode_RestrictionsOnSLC */
/**
 * @summary Encodes a(n) RestrictionsOnSLC into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RestrictionsOnSLC, encoded as an ASN.1 Element.
 */
export function _encode_RestrictionsOnSLC(
  value: RestrictionsOnSLC,
  elGetter: $.ASN1Encoder<RestrictionsOnSLC>
) {
  if (!_cached_encoder_for_RestrictionsOnSLC) {
    _cached_encoder_for_RestrictionsOnSLC = function (
      value: RestrictionsOnSLC,
      elGetter: $.ASN1Encoder<RestrictionsOnSLC>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat(
            [
              /* REQUIRED   */ $._encode_implicit(
                _TagClass.context,
                0,
                () => _encode_RestrictionsOnSLC_restrictionId,
                $.BER
              )(value.restrictionId, $.BER),
              /* IF_ABSENT  */ value.restrictionText === undefined
                ? undefined
                : $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => $._encodeGraphicString,
                    $.BER
                  )(value.restrictionText, $.BER),
            ],
            value._unrecognizedExtensionsList
              ? value._unrecognizedExtensionsList
              : []
          )
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_RestrictionsOnSLC(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RestrictionsOnSLC */

/* eslint-enable */
