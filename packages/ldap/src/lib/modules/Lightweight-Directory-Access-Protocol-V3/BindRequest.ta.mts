/* eslint-disable */
import {
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
  LDAPDN,
  _decode_LDAPDN,
  _encode_LDAPDN,
} from '../Lightweight-Directory-Access-Protocol-V3/LDAPDN.ta.mjs';
import {
  AuthenticationChoice,
  _decode_AuthenticationChoice,
  _encode_AuthenticationChoice,
} from '../Lightweight-Directory-Access-Protocol-V3/AuthenticationChoice.ta.mjs';

/**
 * @summary BindRequest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BindRequest ::= [APPLICATION 0]  SEQUENCE {
 *   version         INTEGER(1..127),
 *   name            LDAPDN,
 *   authentication  AuthenticationChoice
 * }
 * ```
 *
 */
export class BindRequest {
  constructor(
    /**
     * @summary `version`.
     * @public
     * @readonly
     */
    readonly version: INTEGER,
    /**
     * @summary `name`.
     * @public
     * @readonly
     */
    readonly name: LDAPDN,
    /**
     * @summary `authentication`.
     * @public
     * @readonly
     */
    readonly authentication: AuthenticationChoice,
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[] = []
  ) {}

  /**
   * @summary Restructures an object into a BindRequest
   * @description
   *
   * This takes an `object` and converts it to a `BindRequest`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `BindRequest`.
   * @returns {BindRequest}
   */
  public static _from_object(
    _o: { [_K in keyof BindRequest]: BindRequest[_K] }
  ): BindRequest {
    return new BindRequest(
      _o.version,
      _o.name,
      _o.authentication,
      _o._unrecognizedExtensionsList
    );
  }
}


/**
 * @summary The Leading Root Component Types of BindRequest
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_BindRequest: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'version',
    false,
    $.hasTag(_TagClass.universal, 2)
  ),
  new $.ComponentSpec(
    'name',
    false,
    $.hasTag(_TagClass.universal, 4)
  ),
  new $.ComponentSpec(
    'authentication',
    false,
    $.hasAnyTag
  ),
];


/**
 * @summary The Trailing Root Component Types of BindRequest
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_BindRequest: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of BindRequest
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BindRequest: $.ComponentSpec[] = [];


let _cached_decoder_for_BindRequest: $.ASN1Decoder<BindRequest> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) BindRequest
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BindRequest} The decoded data structure.
 */
export function _decode_BindRequest(el: _Element): BindRequest {
  if (!_cached_decoder_for_BindRequest) {
    _cached_decoder_for_BindRequest = $._decode_implicit<BindRequest>(
      () =>
        function (el: _Element): BindRequest {
          const sequence: _Element[] = el.sequence;
          if (sequence.length < 3) {
            throw new _ConstructionError(
              'BindRequest contained only ' +
                sequence.length.toString() +
                ' elements.'
            );
          }
          sequence[0].name = 'version';
          sequence[1].name = 'name';
          sequence[2].name = 'authentication';
          let version!: INTEGER;
          let name!: LDAPDN;
          let authentication!: AuthenticationChoice;
          version = $._decodeInteger(sequence[0]);
          name = _decode_LDAPDN(sequence[1]);
          authentication = _decode_AuthenticationChoice(sequence[2]);
          return new BindRequest(
            version,
            name,
            authentication,
            sequence.slice(3)
          );
        }
    );
  }
  return _cached_decoder_for_BindRequest(el);
}


let _cached_encoder_for_BindRequest: $.ASN1Encoder<BindRequest> | null = null;


/**
 * @summary Encodes a(n) BindRequest into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BindRequest, encoded as an ASN.1 Element.
 */
export function _encode_BindRequest(
  value: BindRequest,
  elGetter: $.ASN1Encoder<BindRequest>
): _Element {
  if (!_cached_encoder_for_BindRequest) {
    _cached_encoder_for_BindRequest = $._encode_implicit(
      _TagClass.application,
      0,
      () =>
        function (
          value: BindRequest        ): _Element {
          return $._encodeSequence(
            ([] as (_Element | undefined)[])
              .concat(
                [
                  /* REQUIRED   */ $._encodeInteger(value.version, $.BER),
                  /* REQUIRED   */ _encode_LDAPDN(value.name, $.BER),
                  /* REQUIRED   */ _encode_AuthenticationChoice(
                    value.authentication,
                    $.BER
                  ),
                ],
                value._unrecognizedExtensionsList
                  ? value._unrecognizedExtensionsList
                  : []
              )
              .filter((c: _Element | undefined): c is _Element => !!c),
            $.BER
          );
        },
      $.BER
    );
  }
  return _cached_encoder_for_BindRequest(value, elGetter);
}


/* eslint-enable */
