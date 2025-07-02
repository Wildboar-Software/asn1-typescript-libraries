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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
  OrigTransactionID,
  _decode_OrigTransactionID,
  _encode_OrigTransactionID,
} from '../TCAPMessages/OrigTransactionID.ta.mjs';
import {
  DialoguePortion,
  _decode_DialoguePortion,
  _encode_DialoguePortion,
} from '../TCAPMessages/DialoguePortion.ta.mjs';
import {
  ComponentPortion,
  _decode_ComponentPortion,
  _encode_ComponentPortion,
} from '../TCAPMessages/ComponentPortion.ta.mjs';
/**
 * @summary Begin
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Begin{OPERATION:Invokable, OPERATION:Returnable} ::= SEQUENCE {
 *   otid             OrigTransactionID,
 *   dialoguePortion  DialoguePortion OPTIONAL,
 *   components       ComponentPortion{{Invokable}, {Returnable}} OPTIONAL
 * }
 * ```
 *
 */
export class Begin {
  constructor(
    /**
     * @summary `otid`.
     * @public
     * @readonly
     */
    readonly otid: OrigTransactionID,
    /**
     * @summary `dialoguePortion`.
     * @public
     * @readonly
     */
    readonly dialoguePortion: OPTIONAL<DialoguePortion>,
    /**
     * @summary `components`.
     * @public
     * @readonly
     */
    readonly components: OPTIONAL<ComponentPortion>
  ) {}

  /**
   * @summary Restructures an object into a Begin
   * @description
   *
   * This takes an `object` and converts it to a `Begin`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `Begin`.
   * @returns {Begin}
   */
  public static _from_object(_o: { [_K in keyof Begin]: Begin[_K] }): Begin {
    return new Begin(_o.otid, _o.dialoguePortion, _o.components);
  }
}

/**
 * @summary The Leading Root Component Types of Begin
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Begin: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'otid',
    false,
    $.hasTag(_TagClass.application, 8)
  ),
  new $.ComponentSpec(
    'dialoguePortion',
    true,
    $.hasTag(_TagClass.application, 11)
  ),
  new $.ComponentSpec(
    'components',
    true,
    $.hasTag(_TagClass.application, 12)
  ),
];

/**
 * @summary The Trailing Root Component Types of Begin
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Begin: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of Begin
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Begin: $.ComponentSpec[] = [];

let _cached_decoder_for_Begin: $.ASN1Decoder<Begin> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Begin
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Begin} The decoded data structure.
 */
export function _decode_Begin(el: _Element): Begin {
  if (!_cached_decoder_for_Begin) {
    _cached_decoder_for_Begin = function (el: _Element): Begin {
      let otid!: OrigTransactionID;
      let dialoguePortion: OPTIONAL<DialoguePortion>;
      let components: OPTIONAL<ComponentPortion>;
      const callbacks: $.DecodingMap = {
        otid: (_el: _Element): void => {
          otid = _decode_OrigTransactionID(_el);
        },
        dialoguePortion: (_el: _Element): void => {
          dialoguePortion = _decode_DialoguePortion(_el);
        },
        components: (_el: _Element): void => {
          components = _decode_ComponentPortion(_el);
        },
      };
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_Begin,
        _extension_additions_list_spec_for_Begin,
        _root_component_type_list_2_spec_for_Begin,
        undefined
      );
      return new Begin (
        otid,
        dialoguePortion,
        components
      );
    };
  }
  return _cached_decoder_for_Begin(el);
}

let _cached_encoder_for_Begin: $.ASN1Encoder<Begin> | null = null;

/**
 * @summary Encodes a(n) Begin into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Begin, encoded as an ASN.1 Element.
 */
export function _encode_Begin(value: Begin, elGetter: $.ASN1Encoder<Begin>): _Element {
  if (!_cached_encoder_for_Begin) {
    _cached_encoder_for_Begin = function (
      value: Begin    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_OrigTransactionID(value.otid, $.BER),
            /* IF_ABSENT  */ value.dialoguePortion === undefined
              ? undefined
              : _encode_DialoguePortion(value.dialoguePortion, $.BER),
            /* IF_ABSENT  */ value.components === undefined
              ? undefined
              : _encode_ComponentPortion(value.components, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_Begin(value, elGetter);
}


/* eslint-enable */
