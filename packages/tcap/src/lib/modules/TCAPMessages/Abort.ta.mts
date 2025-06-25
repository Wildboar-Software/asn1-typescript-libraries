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
  Abort_reason,
  _decode_Abort_reason,
  _encode_Abort_reason,
} from '../TCAPMessages/Abort-reason.ta.mjs';
/**
 * @summary Abort
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Abort ::= SEQUENCE {
 *   dtid    DestTransactionID,
 *   reason  CHOICE {p-abortCause  P-AbortCause,
 *                   u-abortCause  DialoguePortion} OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class Abort {
  constructor(
    /**
     * @summary `dtid`.
     * @public
     * @readonly
     */
    readonly dtid: DestTransactionID,
    /**
     * @summary `reason`.
     * @public
     * @readonly
     */
    readonly reason: OPTIONAL<Abort_reason>
  ) {}

  /**
   * @summary Restructures an object into a Abort
   * @description
   *
   * This takes an `object` and converts it to a `Abort`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `Abort`.
   * @returns {Abort}
   */
  public static _from_object(_o: { [_K in keyof Abort]: Abort[_K] }): Abort {
    return new Abort(_o.dtid, _o.reason);
  }
}

/**
 * @summary The Leading Root Component Types of Abort
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Abort: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'dtid',
    false,
    $.hasTag(_TagClass.application, 9)
  ),
  new $.ComponentSpec('reason', true, $.hasAnyTag),
];

/**
 * @summary The Trailing Root Component Types of Abort
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Abort: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of Abort
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Abort: $.ComponentSpec[] = [];

let _cached_decoder_for_Abort: $.ASN1Decoder<Abort> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Abort
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Abort} The decoded data structure.
 */
export function _decode_Abort(el: _Element): Abort {
  if (!_cached_decoder_for_Abort) {
    _cached_decoder_for_Abort = function (el: _Element): Abort {
      let dtid!: DestTransactionID;
      let reason: OPTIONAL<Abort_reason>;
      const callbacks: $.DecodingMap = {
        dtid: (_el: _Element): void => {
          dtid = _decode_DestTransactionID(_el);
        },
        reason: (_el: _Element): void => {
          reason = _decode_Abort_reason(_el);
        },
      };
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_Abort,
        _extension_additions_list_spec_for_Abort,
        _root_component_type_list_2_spec_for_Abort,
        undefined
      );
      return new Abort (dtid, reason);
    };
  }
  return _cached_decoder_for_Abort(el);
}

let _cached_encoder_for_Abort: $.ASN1Encoder<Abort> | null = null;

/**
 * @summary Encodes a(n) Abort into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Abort, encoded as an ASN.1 Element.
 */
export function _encode_Abort(value: Abort, elGetter: $.ASN1Encoder<Abort>): _Element {
  if (!_cached_encoder_for_Abort) {
    _cached_encoder_for_Abort = function (
      value: Abort    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_DestTransactionID(value.dtid, $.BER),
            /* IF_ABSENT  */ value.reason === undefined
              ? undefined
              : _encode_Abort_reason(value.reason, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_Abort(value, elGetter);
}


/* eslint-enable */
