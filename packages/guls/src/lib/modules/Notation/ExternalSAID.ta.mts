/* eslint-disable */
import {
  OPTIONAL,
  INTEGER,
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
  SecurityIdentity,
  _decode_SecurityIdentity,
  _encode_SecurityIdentity,
} from '../Notation/SecurityIdentity.ta.mjs';

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
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'assignerIdentity',
    true,
    $.hasTag(_TagClass.context, 1)
  ),
];


/**
 * @summary The Trailing Root Component Types of ExternalSAID
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ExternalSAID: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of ExternalSAID
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ExternalSAID: $.ComponentSpec[] = [];


let _cached_decoder_for_ExternalSAID: $.ASN1Decoder<ExternalSAID> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ExternalSAID
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ExternalSAID} The decoded data structure.
 */
export function _decode_ExternalSAID(el: _Element) {
  if (!_cached_decoder_for_ExternalSAID) {
    _cached_decoder_for_ExternalSAID = function (el: _Element): ExternalSAID {
      let localSAID!: INTEGER;
      let assignerIdentity: OPTIONAL<SecurityIdentity>;
      const callbacks: $.DecodingMap = {
        localSAID: (_el: _Element): void => {
          localSAID = $._decodeInteger(_el);
        },
        assignerIdentity: (_el: _Element): void => {
          assignerIdentity = _decode_SecurityIdentity(_el);
        },
      };
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_ExternalSAID,
        _extension_additions_list_spec_for_ExternalSAID,
        _root_component_type_list_2_spec_for_ExternalSAID,
        undefined
      );
      return new ExternalSAID (
        localSAID,
        assignerIdentity
      );
    };
  }
  return _cached_decoder_for_ExternalSAID(el);
}


let _cached_encoder_for_ExternalSAID: $.ASN1Encoder<ExternalSAID> | null = null;


/**
 * @summary Encodes a(n) ExternalSAID into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExternalSAID, encoded as an ASN.1 Element.
 */
export function _encode_ExternalSAID(
  value: ExternalSAID,
  elGetter: $.ASN1Encoder<ExternalSAID>
) {
  if (!_cached_encoder_for_ExternalSAID) {
    _cached_encoder_for_ExternalSAID = function (
      value: ExternalSAID    ): _Element {
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


/* eslint-enable */
