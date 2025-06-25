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
  FADU_Identity,
  _decode_FADU_Identity,
  _encode_FADU_Identity,
} from '../ISO8571-FTAM/FADU-Identity.ta.mjs';
import {
  FADU_Lock,
  _decode_FADU_Lock,
  _encode_FADU_Lock,
} from '../ISO8571-FTAM/FADU-Lock.ta.mjs';

/**
 * @summary F_LOCATE_request
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * F-LOCATE-request ::= SEQUENCE {
 *   file-access-data-unit-identity  FADU-Identity,
 *   fadu-lock                       FADU-Lock OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class F_LOCATE_request {
  constructor(
    /**
     * @summary `file_access_data_unit_identity`.
     * @public
     * @readonly
     */
    readonly file_access_data_unit_identity: FADU_Identity,
    /**
     * @summary `fadu_lock`.
     * @public
     * @readonly
     */
    readonly fadu_lock: OPTIONAL<FADU_Lock>
  ) {}

  /**
   * @summary Restructures an object into a F_LOCATE_request
   * @description
   *
   * This takes an `object` and converts it to a `F_LOCATE_request`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `F_LOCATE_request`.
   * @returns {F_LOCATE_request}
   */
  public static _from_object(
    _o: { [_K in keyof F_LOCATE_request]: F_LOCATE_request[_K] }
  ): F_LOCATE_request {
    return new F_LOCATE_request(
      _o.file_access_data_unit_identity,
      _o.fadu_lock
    );
  }
}


/**
 * @summary The Leading Root Component Types of F_LOCATE_request
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_F_LOCATE_request: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'file-access-data-unit-identity',
    false,
    $.hasTag(_TagClass.application, 15)
  ),
  new $.ComponentSpec(
    'fadu-lock',
    true,
    $.hasTag(_TagClass.application, 16)
  ),
];


/**
 * @summary The Trailing Root Component Types of F_LOCATE_request
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_F_LOCATE_request: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of F_LOCATE_request
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_F_LOCATE_request: $.ComponentSpec[] = [];


let _cached_decoder_for_F_LOCATE_request: $.ASN1Decoder<F_LOCATE_request> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) F_LOCATE_request
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {F_LOCATE_request} The decoded data structure.
 */
export function _decode_F_LOCATE_request(el: _Element): F_LOCATE_request {
  if (!_cached_decoder_for_F_LOCATE_request) {
    _cached_decoder_for_F_LOCATE_request = function (
      el: _Element
    ): F_LOCATE_request {
      let file_access_data_unit_identity!: FADU_Identity;
      let fadu_lock: OPTIONAL<FADU_Lock>;
      const callbacks: $.DecodingMap = {
        'file-access-data-unit-identity': (_el: _Element): void => {
          file_access_data_unit_identity = _decode_FADU_Identity(_el);
        },
        'fadu-lock': (_el: _Element): void => {
          fadu_lock = _decode_FADU_Lock(_el);
        },
      };
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_F_LOCATE_request,
        _extension_additions_list_spec_for_F_LOCATE_request,
        _root_component_type_list_2_spec_for_F_LOCATE_request,
        undefined
      );
      return new F_LOCATE_request (
        file_access_data_unit_identity,
        fadu_lock
      );
    };
  }
  return _cached_decoder_for_F_LOCATE_request(el);
}


let _cached_encoder_for_F_LOCATE_request: $.ASN1Encoder<F_LOCATE_request> | null = null;


/**
 * @summary Encodes a(n) F_LOCATE_request into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The F_LOCATE_request, encoded as an ASN.1 Element.
 */
export function _encode_F_LOCATE_request(
  value: F_LOCATE_request,
  elGetter: $.ASN1Encoder<F_LOCATE_request>
): _Element {
  if (!_cached_encoder_for_F_LOCATE_request) {
    _cached_encoder_for_F_LOCATE_request = function (
      value: F_LOCATE_request    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_FADU_Identity(
              value.file_access_data_unit_identity,
              $.BER
            ),
            /* IF_ABSENT  */ value.fadu_lock === undefined
              ? undefined
              : _encode_FADU_Lock(value.fadu_lock, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_F_LOCATE_request(value, elGetter);
}


/* eslint-enable */
