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
import {
  BioAPI_HANDLE,
  _decode_BioAPI_HANDLE,
  _encode_BioAPI_HANDLE,
} from '../BIP/BioAPI-HANDLE.ta.mjs';
import {
  BioAPI_UNIT_ID,
  _decode_BioAPI_UNIT_ID,
  _encode_BioAPI_UNIT_ID,
} from '../BIP/BioAPI-UNIT-ID.ta.mjs';
import {
  BioAPI_POWER_MODE,
  _enum_for_BioAPI_POWER_MODE,
  _decode_BioAPI_POWER_MODE,
  _encode_BioAPI_POWER_MODE,
} from '../BIP/BioAPI-POWER-MODE.ta.mjs';

/**
 * @summary SetPowerMode_RequestParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SetPowerMode-RequestParams ::= SEQUENCE {
 *   originalBSPHandle  BioAPI-HANDLE,
 *   unitID             BioAPI-UNIT-ID,
 *   powerMode          BioAPI-POWER-MODE
 * }
 * ```
 *
 * @class
 */
export class SetPowerMode_RequestParams {
  constructor(
    /**
     * @summary `originalBSPHandle`.
     * @public
     * @readonly
     */
    readonly originalBSPHandle: BioAPI_HANDLE,
    /**
     * @summary `unitID`.
     * @public
     * @readonly
     */
    readonly unitID: BioAPI_UNIT_ID,
    /**
     * @summary `powerMode`.
     * @public
     * @readonly
     */
    readonly powerMode: BioAPI_POWER_MODE
  ) {}

  /**
   * @summary Restructures an object into a SetPowerMode_RequestParams
   * @description
   *
   * This takes an `object` and converts it to a `SetPowerMode_RequestParams`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `SetPowerMode_RequestParams`.
   * @returns {SetPowerMode_RequestParams}
   */
  public static _from_object(
    _o: {
      [_K in keyof SetPowerMode_RequestParams]: SetPowerMode_RequestParams[_K];
    }
  ): SetPowerMode_RequestParams {
    return new SetPowerMode_RequestParams(
      _o.originalBSPHandle,
      _o.unitID,
      _o.powerMode
    );
  }

  /**
   * @summary The enum used as the type of the component `powerMode`
   * @public
   * @static
   */

  public static _enum_for_powerMode = _enum_for_BioAPI_POWER_MODE;
}


/**
 * @summary The Leading Root Component Types of SetPowerMode_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SetPowerMode_RequestParams: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'originalBSPHandle',
    false,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'unitID',
    false,
    $.hasTag(_TagClass.context, 1)
  ),
  new $.ComponentSpec(
    'powerMode',
    false,
    $.hasTag(_TagClass.context, 2)
  ),
];


/**
 * @summary The Trailing Root Component Types of SetPowerMode_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SetPowerMode_RequestParams: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of SetPowerMode_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SetPowerMode_RequestParams: $.ComponentSpec[] = [];


let _cached_decoder_for_SetPowerMode_RequestParams: $.ASN1Decoder<SetPowerMode_RequestParams> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) SetPowerMode_RequestParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SetPowerMode_RequestParams} The decoded data structure.
 */
export function _decode_SetPowerMode_RequestParams(el: _Element): SetPowerMode_RequestParams {
  if (!_cached_decoder_for_SetPowerMode_RequestParams) {
    _cached_decoder_for_SetPowerMode_RequestParams = function (
      el: _Element
    ): SetPowerMode_RequestParams {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 3) {
        throw new _ConstructionError(
          'SetPowerMode-RequestParams contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'originalBSPHandle';
      sequence[1].name = 'unitID';
      sequence[2].name = 'powerMode';
      let originalBSPHandle!: BioAPI_HANDLE;
      let unitID!: BioAPI_UNIT_ID;
      let powerMode!: BioAPI_POWER_MODE;
      originalBSPHandle = _decode_BioAPI_HANDLE(sequence[0]);
      unitID = _decode_BioAPI_UNIT_ID(sequence[1]);
      powerMode = _decode_BioAPI_POWER_MODE(sequence[2]);
      return new SetPowerMode_RequestParams(
        originalBSPHandle,
        unitID,
        powerMode
      );
    };
  }
  return _cached_decoder_for_SetPowerMode_RequestParams(el);
}


let _cached_encoder_for_SetPowerMode_RequestParams: $.ASN1Encoder<SetPowerMode_RequestParams> | null = null;


/**
 * @summary Encodes a(n) SetPowerMode_RequestParams into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SetPowerMode_RequestParams, encoded as an ASN.1 Element.
 */
export function _encode_SetPowerMode_RequestParams(
  value: SetPowerMode_RequestParams,
  elGetter: $.ASN1Encoder<SetPowerMode_RequestParams>
): _Element {
  if (!_cached_encoder_for_SetPowerMode_RequestParams) {
    _cached_encoder_for_SetPowerMode_RequestParams = function (
      value: SetPowerMode_RequestParams    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_BioAPI_HANDLE(
              value.originalBSPHandle,
              $.BER
            ),
            /* REQUIRED   */ _encode_BioAPI_UNIT_ID(value.unitID, $.BER),
            /* REQUIRED   */ _encode_BioAPI_POWER_MODE(value.powerMode, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_SetPowerMode_RequestParams(value, elGetter);
}


/* eslint-enable */
