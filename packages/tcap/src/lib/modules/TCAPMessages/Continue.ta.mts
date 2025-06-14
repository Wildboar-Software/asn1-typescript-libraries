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
  OrigTransactionID,
  _decode_OrigTransactionID,
  _encode_OrigTransactionID,
} from '../TCAPMessages/OrigTransactionID.ta.mjs';
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
/* START_OF_SYMBOL_DEFINITION Continue */
/**
 * @summary Continue
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Continue{OPERATION:Invokable, OPERATION:Returnable} ::= SEQUENCE {
 *   otid             OrigTransactionID,
 *   dtid             DestTransactionID,
 *   dialoguePortion  DialoguePortion OPTIONAL,
 *   components       ComponentPortion{{Invokable}, {Returnable}} OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class Continue {
  constructor(
    /**
     * @summary `otid`.
     * @public
     * @readonly
     */
    readonly otid: OrigTransactionID,
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
   * @summary Restructures an object into a Continue
   * @description
   *
   * This takes an `object` and converts it to a `Continue`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `Continue`.
   * @returns {Continue}
   */
  public static _from_object(
    _o: { [_K in keyof Continue]: Continue[_K] }
  ): Continue {
    return new Continue(_o.otid, _o.dtid, _o.dialoguePortion, _o.components);
  }
}
/* END_OF_SYMBOL_DEFINITION Continue */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Continue */
/**
 * @summary The Leading Root Component Types of Continue
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Continue: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'otid',
    false,
    $.hasTag(_TagClass.application, 8),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'dtid',
    false,
    $.hasTag(_TagClass.application, 9),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'dialoguePortion',
    true,
    $.hasTag(_TagClass.application, 11),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'components',
    true,
    $.hasTag(_TagClass.application, 12),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Continue */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Continue */
/**
 * @summary The Trailing Root Component Types of Continue
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Continue: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Continue */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Continue */
/**
 * @summary The Extension Addition Component Types of Continue
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Continue: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Continue */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Continue */
let _cached_decoder_for_Continue: $.ASN1Decoder<Continue> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Continue */

/* START_OF_SYMBOL_DEFINITION _decode_Continue */
/**
 * @summary Decodes an ASN.1 element into a(n) Continue
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Continue} The decoded data structure.
 */
export function _decode_Continue(el: _Element) {
  if (!_cached_decoder_for_Continue) {
    _cached_decoder_for_Continue = function (el: _Element): Continue {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let otid!: OrigTransactionID;
      let dtid!: DestTransactionID;
      let dialoguePortion: OPTIONAL<DialoguePortion>;
      let components: OPTIONAL<ComponentPortion>;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        otid: (_el: _Element): void => {
          otid = _decode_OrigTransactionID(_el);
        },
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
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_Continue,
        _extension_additions_list_spec_for_Continue,
        _root_component_type_list_2_spec_for_Continue,
        undefined
      );
      return new Continue /* SEQUENCE_CONSTRUCTOR_CALL */(
        otid,
        dtid,
        dialoguePortion,
        components
      );
    };
  }
  return _cached_decoder_for_Continue(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Continue */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Continue */
let _cached_encoder_for_Continue: $.ASN1Encoder<Continue> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Continue */

/* START_OF_SYMBOL_DEFINITION _encode_Continue */
/**
 * @summary Encodes a(n) Continue into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Continue, encoded as an ASN.1 Element.
 */
export function _encode_Continue(
  value: Continue,
  elGetter: $.ASN1Encoder<Continue>
) {
  if (!_cached_encoder_for_Continue) {
    _cached_encoder_for_Continue = function (
      value: Continue    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_OrigTransactionID(value.otid, $.BER),
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
  return _cached_encoder_for_Continue(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Continue */

/* eslint-enable */
