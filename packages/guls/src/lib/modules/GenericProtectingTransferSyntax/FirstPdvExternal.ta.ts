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
  ExternalSAID,
  _decode_ExternalSAID,
  _encode_ExternalSAID,
} from '../Notation/ExternalSAID.ta';
export {
  ExternalSAID,
  _decode_ExternalSAID,
  _encode_ExternalSAID,
} from '../Notation/ExternalSAID.ta';
import { SECURITY_TRANSFORMATION } from '../Notation/SECURITY-TRANSFORMATION.oca';
export { SECURITY_TRANSFORMATION } from '../Notation/SECURITY-TRANSFORMATION.oca';

/* START_OF_SYMBOL_DEFINITION FirstPdvExternal */
/**
 * @summary FirstPdvExternal
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FirstPdvExternal{SECURITY-TRANSFORMATION:ValidSTs} ::= SEQUENCE {
 *   externalSAID       ExternalSAID,
 *   dynamicUnprotParm
 *     SECURITY-TRANSFORMATION.&DynamicUnprotectedParm({ValidSTs}) OPTIONAL,
 *   -- Actual member of ValidSTs is as implied
 *   -- by externalSAID
 *   xformedData        SECURITY-TRANSFORMATION.&XformedDataType({ValidSTs})
 *   -- Actual member of ValidSTs is as implied
 *   -- by externalSAID
 * }
 * ```
 *
 * @class
 */
export class FirstPdvExternal {
  constructor(
    /**
     * @summary `externalSAID`.
     * @public
     * @readonly
     */
    readonly externalSAID: ExternalSAID,
    /**
     * @summary `dynamicUnprotParm`.
     * @public
     * @readonly
     */
    readonly dynamicUnprotParm: OPTIONAL<_Element>,
    /**
     * @summary `xformedData`.
     * @public
     * @readonly
     */
    readonly xformedData: _Element
  ) {}

  /**
   * @summary Restructures an object into a FirstPdvExternal
   * @description
   *
   * This takes an `object` and converts it to a `FirstPdvExternal`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `FirstPdvExternal`.
   * @returns {FirstPdvExternal}
   */
  public static _from_object(
    _o: { [_K in keyof FirstPdvExternal]: FirstPdvExternal[_K] }
  ): FirstPdvExternal {
    return new FirstPdvExternal(
      _o.externalSAID,
      _o.dynamicUnprotParm,
      _o.xformedData
    );
  }
}
/* END_OF_SYMBOL_DEFINITION FirstPdvExternal */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_FirstPdvExternal */
/**
 * @summary The Leading Root Component Types of FirstPdvExternal
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_FirstPdvExternal: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'externalSAID',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'dynamicUnprotParm',
    true,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'xformedData',
    false,
    $.hasTag(_TagClass.context, 2),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_FirstPdvExternal */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_FirstPdvExternal */
/**
 * @summary The Trailing Root Component Types of FirstPdvExternal
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_FirstPdvExternal: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_FirstPdvExternal */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_FirstPdvExternal */
/**
 * @summary The Extension Addition Component Types of FirstPdvExternal
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_FirstPdvExternal: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_FirstPdvExternal */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_FirstPdvExternal */
let _cached_decoder_for_FirstPdvExternal: $.ASN1Decoder<FirstPdvExternal> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_FirstPdvExternal */

/* START_OF_SYMBOL_DEFINITION _decode_FirstPdvExternal */
/**
 * @summary Decodes an ASN.1 element into a(n) FirstPdvExternal
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {FirstPdvExternal} The decoded data structure.
 */
export function _decode_FirstPdvExternal(el: _Element) {
  if (!_cached_decoder_for_FirstPdvExternal) {
    _cached_decoder_for_FirstPdvExternal = function (
      el: _Element
    ): FirstPdvExternal {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let externalSAID!: ExternalSAID;
      let dynamicUnprotParm: OPTIONAL<_Element>;
      let xformedData!: _Element;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        externalSAID: (_el: _Element): void => {
          externalSAID = _decode_ExternalSAID(_el);
        },
        dynamicUnprotParm: (_el: _Element): void => {
          dynamicUnprotParm = $._decodeAny(_el);
        },
        xformedData: (_el: _Element): void => {
          xformedData = $._decodeAny(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_FirstPdvExternal,
        _extension_additions_list_spec_for_FirstPdvExternal,
        _root_component_type_list_2_spec_for_FirstPdvExternal,
        undefined
      );
      return new FirstPdvExternal /* SEQUENCE_CONSTRUCTOR_CALL */(
        externalSAID,
        dynamicUnprotParm,
        xformedData
      );
    };
  }
  return _cached_decoder_for_FirstPdvExternal(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_FirstPdvExternal */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_FirstPdvExternal */
let _cached_encoder_for_FirstPdvExternal: $.ASN1Encoder<FirstPdvExternal> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_FirstPdvExternal */

/* START_OF_SYMBOL_DEFINITION _encode_FirstPdvExternal */
/**
 * @summary Encodes a(n) FirstPdvExternal into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FirstPdvExternal, encoded as an ASN.1 Element.
 */
export function _encode_FirstPdvExternal(
  value: FirstPdvExternal,
  elGetter: $.ASN1Encoder<FirstPdvExternal>
) {
  if (!_cached_encoder_for_FirstPdvExternal) {
    _cached_encoder_for_FirstPdvExternal = function (
      value: FirstPdvExternal,
      elGetter: $.ASN1Encoder<FirstPdvExternal>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_ExternalSAID(value.externalSAID, $.BER),
            /* IF_ABSENT  */ value.dynamicUnprotParm === undefined
              ? undefined
              : $._encodeAny(value.dynamicUnprotParm, $.BER),
            /* REQUIRED   */ $._encodeAny(value.xformedData, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_FirstPdvExternal(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_FirstPdvExternal */

/* eslint-enable */
