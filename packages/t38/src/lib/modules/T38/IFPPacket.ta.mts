/* eslint-disable */
import {
  OPTIONAL,
  ASN1Element as _Element,
  ASN1TagClass as _TagClass,
  ASN1Construction as _Construction,
  ASN1UniversalType as _UniversalType,
  ObjectIdentifier as _OID,
  External as _External,
  EmbeddedPDV as _PDV,
  ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
  Type_of_msg,
  _decode_Type_of_msg,
  _encode_Type_of_msg,
} from '../T38/Type-of-msg.ta.mjs';
import {
  Data_Field,
  _decode_Data_Field,
  _encode_Data_Field,
} from '../T38/Data-Field.ta.mjs';

/**
 * @summary IFPPacket
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IFPPacket ::= SEQUENCE {
 *   type-of-msg  Type-of-msg,
 *   data-field   Data-Field OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class IFPPacket {
  constructor(
    /**
     * @summary `type_of_msg`.
     * @public
     * @readonly
     */
    readonly type_of_msg: Type_of_msg,
    /**
     * @summary `data_field`.
     * @public
     * @readonly
     */
    readonly data_field: OPTIONAL<Data_Field>
  ) {}

  /**
   * @summary Restructures an object into a IFPPacket
   * @description
   *
   * This takes an `object` and converts it to a `IFPPacket`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `IFPPacket`.
   * @returns {IFPPacket}
   */
  public static _from_object(
    _o: { [_K in keyof IFPPacket]: IFPPacket[_K] }
  ): IFPPacket {
    return new IFPPacket(_o.type_of_msg, _o.data_field);
  }
}


/**
 * @summary The Leading Root Component Types of IFPPacket
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_IFPPacket: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'type-of-msg',
    false,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'data-field',
    true,
    $.hasTag(_TagClass.context, 1)
  ),
];


/**
 * @summary The Trailing Root Component Types of IFPPacket
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_IFPPacket: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of IFPPacket
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_IFPPacket: $.ComponentSpec[] = [];


let _cached_decoder_for_IFPPacket: $.ASN1Decoder<IFPPacket> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) IFPPacket
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IFPPacket} The decoded data structure.
 */
export function _decode_IFPPacket(el: _Element) {
  if (!_cached_decoder_for_IFPPacket) {
    _cached_decoder_for_IFPPacket = function (el: _Element): IFPPacket {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let type_of_msg!: Type_of_msg;
      let data_field: OPTIONAL<Data_Field>;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        'type-of-msg': (_el: _Element): void => {
          type_of_msg = _decode_Type_of_msg(_el);
        },
        'data-field': (_el: _Element): void => {
          data_field = _decode_Data_Field(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_IFPPacket,
        _extension_additions_list_spec_for_IFPPacket,
        _root_component_type_list_2_spec_for_IFPPacket,
        undefined
      );
      return new IFPPacket /* SEQUENCE_CONSTRUCTOR_CALL */(
        type_of_msg,
        data_field
      );
    };
  }
  return _cached_decoder_for_IFPPacket(el);
}


let _cached_encoder_for_IFPPacket: $.ASN1Encoder<IFPPacket> | null = null;


/**
 * @summary Encodes a(n) IFPPacket into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IFPPacket, encoded as an ASN.1 Element.
 */
export function _encode_IFPPacket(
  value: IFPPacket,
  elGetter: $.ASN1Encoder<IFPPacket>
) {
  if (!_cached_encoder_for_IFPPacket) {
    _cached_encoder_for_IFPPacket = function (
      value: IFPPacket    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_Type_of_msg(value.type_of_msg, $.BER),
            /* IF_ABSENT  */ value.data_field === undefined
              ? undefined
              : _encode_Data_Field(value.data_field, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_IFPPacket(value, elGetter);
}


/* eslint-enable */
