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
  SecurityIdentity,
  _decode_SecurityIdentity,
  _encode_SecurityIdentity,
} from '../Notation/SecurityIdentity.ta';
export {
  SecurityIdentity,
  _decode_SecurityIdentity,
  _encode_SecurityIdentity,
} from '../Notation/SecurityIdentity.ta';

/* START_OF_SYMBOL_DEFINITION ExternalSAID */
/**
 * @summary ExternalSAID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ExternalSAID ::= SEQUENCE {
 *   localSAID         INTEGER,
 *   assignerIdentity  SecurityIdentity OPTIONAL
 *   -- Identity of the system which assigned the integer value
 * }
 * ```
 *
 * @class
 */
export class ExternalSAID {
  constructor(
    /**
     * @summary `localSAID`.
     * @public
     * @readonly
     */
    readonly localSAID: INTEGER,
    /**
     * @summary `assignerIdentity`.
     * @public
     * @readonly
     */
    readonly assignerIdentity: OPTIONAL<SecurityIdentity>
  ) {}

  /**
   * @summary Restructures an object into a ExternalSAID
   * @description
   *
   * This takes an `object` and converts it to a `ExternalSAID`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `ExternalSAID`.
   * @returns {ExternalSAID}
   */
  public static _from_object(
    _o: { [_K in keyof ExternalSAID]: ExternalSAID[_K] }
  ): ExternalSAID {
    return new ExternalSAID(_o.localSAID, _o.assignerIdentity);
  }
}
/* END_OF_SYMBOL_DEFINITION ExternalSAID */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ExternalSAID */
/**
 * @summary The Leading Root Component Types of ExternalSAID
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ExternalSAID: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'localSAID',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'assignerIdentity',
    true,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ExternalSAID */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ExternalSAID */
/**
 * @summary The Trailing Root Component Types of ExternalSAID
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ExternalSAID: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ExternalSAID */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ExternalSAID */
/**
 * @summary The Extension Addition Component Types of ExternalSAID
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ExternalSAID: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ExternalSAID */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ExternalSAID */
let _cached_decoder_for_ExternalSAID: $.ASN1Decoder<ExternalSAID> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ExternalSAID */

/* START_OF_SYMBOL_DEFINITION _decode_ExternalSAID */
/**
 * @summary Decodes an ASN.1 element into a(n) ExternalSAID
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ExternalSAID} The decoded data structure.
 */
export function _decode_ExternalSAID(el: _Element) {
  if (!_cached_decoder_for_ExternalSAID) {
    _cached_decoder_for_ExternalSAID = function (el: _Element): ExternalSAID {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let localSAID!: INTEGER;
      let assignerIdentity: OPTIONAL<SecurityIdentity>;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        localSAID: (_el: _Element): void => {
          localSAID = $._decodeInteger(_el);
        },
        assignerIdentity: (_el: _Element): void => {
          assignerIdentity = _decode_SecurityIdentity(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_ExternalSAID,
        _extension_additions_list_spec_for_ExternalSAID,
        _root_component_type_list_2_spec_for_ExternalSAID,
        undefined
      );
      return new ExternalSAID /* SEQUENCE_CONSTRUCTOR_CALL */(
        localSAID,
        assignerIdentity
      );
    };
  }
  return _cached_decoder_for_ExternalSAID(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ExternalSAID */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ExternalSAID */
let _cached_encoder_for_ExternalSAID: $.ASN1Encoder<ExternalSAID> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ExternalSAID */

/* START_OF_SYMBOL_DEFINITION _encode_ExternalSAID */
/**
 * @summary Encodes a(n) ExternalSAID into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExternalSAID, encoded as an ASN.1 Element.
 */
export function _encode_ExternalSAID(
  value: ExternalSAID,
  elGetter: $.ASN1Encoder<ExternalSAID>
) {
  if (!_cached_encoder_for_ExternalSAID) {
    _cached_encoder_for_ExternalSAID = function (
      value: ExternalSAID,
      elGetter: $.ASN1Encoder<ExternalSAID>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ $._encodeInteger(value.localSAID, $.BER),
            /* IF_ABSENT  */ value.assignerIdentity === undefined
              ? undefined
              : _encode_SecurityIdentity(value.assignerIdentity, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_ExternalSAID(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ExternalSAID */

/* eslint-enable */
