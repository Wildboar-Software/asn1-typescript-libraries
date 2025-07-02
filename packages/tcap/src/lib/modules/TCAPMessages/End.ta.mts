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
  DestTransactionID,
  _decode_DestTransactionID,
  _encode_DestTransactionID,
} from '../TCAPMessages/DestTransactionID.ta.mjs';
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
 * @summary End
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * End{OPERATION:Invokable, OPERATION:Returnable} ::= SEQUENCE {
 *   dtid             DestTransactionID,
 *   dialoguePortion  DialoguePortion OPTIONAL,
 *   components       ComponentPortion{{Invokable}, {Returnable}} OPTIONAL
 * }
 * ```
 *
 */
export class End {
  constructor(
    /**
     * @summary `dtid`.
     * @public
     * @readonly
     */
    readonly dtid: DestTransactionID,
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
   * @summary Restructures an object into a End
   * @description
   *
   * This takes an `object` and converts it to a `End`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `End`.
   * @returns {End}
   */
  public static _from_object(_o: { [_K in keyof End]: End[_K] }): End {
    return new End(_o.dtid, _o.dialoguePortion, _o.components);
  }
}

/**
 * @summary The Leading Root Component Types of End
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_End: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'dtid',
    false,
    $.hasTag(_TagClass.application, 9)
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
 * @summary The Trailing Root Component Types of End
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_End: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of End
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_End: $.ComponentSpec[] = [];

let _cached_decoder_for_End: $.ASN1Decoder<End> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) End
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {End} The decoded data structure.
 */
export function _decode_End(el: _Element): End {
  if (!_cached_decoder_for_End) {
    _cached_decoder_for_End = function (el: _Element): End {
      let dtid!: DestTransactionID;
      let dialoguePortion: OPTIONAL<DialoguePortion>;
      let components: OPTIONAL<ComponentPortion>;
      const callbacks: $.DecodingMap = {
        dtid: (_el: _Element): void => {
          dtid = _decode_DestTransactionID(_el);
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
        _root_component_type_list_1_spec_for_End,
        _extension_additions_list_spec_for_End,
        _root_component_type_list_2_spec_for_End,
        undefined
      );
      return new End (
        dtid,
        dialoguePortion,
        components
      );
    };
  }
  return _cached_decoder_for_End(el);
}

let _cached_encoder_for_End: $.ASN1Encoder<End> | null = null;

/**
 * @summary Encodes a(n) End into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The End, encoded as an ASN.1 Element.
 */
export function _encode_End(value: End, elGetter: $.ASN1Encoder<End>): _Element {
  if (!_cached_encoder_for_End) {
    _cached_encoder_for_End = function (
      value: End    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_DestTransactionID(value.dtid, $.BER),
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
  return _cached_encoder_for_End(value, elGetter);
}


/* eslint-enable */
