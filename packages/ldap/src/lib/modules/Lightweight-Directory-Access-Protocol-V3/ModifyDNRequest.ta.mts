/* eslint-disable */
import {
  OPTIONAL,
  BOOLEAN,
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
  RelativeLDAPDN,
  _decode_RelativeLDAPDN,
  _encode_RelativeLDAPDN,
} from '../Lightweight-Directory-Access-Protocol-V3/RelativeLDAPDN.ta.mjs';

/**
 * @summary ModifyDNRequest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ModifyDNRequest ::= [APPLICATION 12]  SEQUENCE {
 *   entry         LDAPDN,
 *   newrdn        RelativeLDAPDN,
 *   deleteoldrdn  BOOLEAN,
 *   newSuperior   [0]  LDAPDN OPTIONAL
 * }
 * ```
 *
 */
export class ModifyDNRequest {
  constructor(
    /**
     * @summary `entry`.
     * @public
     * @readonly
     */
    readonly entry: LDAPDN,
    /**
     * @summary `newrdn`.
     * @public
     * @readonly
     */
    readonly newrdn: RelativeLDAPDN,
    /**
     * @summary `deleteoldrdn`.
     * @public
     * @readonly
     */
    readonly deleteoldrdn: BOOLEAN,
    /**
     * @summary `newSuperior`.
     * @public
     * @readonly
     */
    readonly newSuperior: OPTIONAL<LDAPDN>,
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[] = []
  ) {}

  /**
   * @summary Restructures an object into a ModifyDNRequest
   * @description
   *
   * This takes an `object` and converts it to a `ModifyDNRequest`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `ModifyDNRequest`.
   * @returns {ModifyDNRequest}
   */
  public static _from_object(
    _o: { [_K in keyof ModifyDNRequest]: ModifyDNRequest[_K] }
  ): ModifyDNRequest {
    return new ModifyDNRequest(
      _o.entry,
      _o.newrdn,
      _o.deleteoldrdn,
      _o.newSuperior,
      _o._unrecognizedExtensionsList
    );
  }
}


/**
 * @summary The Leading Root Component Types of ModifyDNRequest
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ModifyDNRequest: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'entry',
    false,
    $.hasTag(_TagClass.universal, 4)
  ),
  new $.ComponentSpec(
    'newrdn',
    false,
    $.hasTag(_TagClass.universal, 4)
  ),
  new $.ComponentSpec(
    'deleteoldrdn',
    false,
    $.hasTag(_TagClass.universal, 1)
  ),
  new $.ComponentSpec(
    'newSuperior',
    true,
    $.hasTag(_TagClass.context, 0)
  ),
];


/**
 * @summary The Trailing Root Component Types of ModifyDNRequest
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ModifyDNRequest: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of ModifyDNRequest
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ModifyDNRequest: $.ComponentSpec[] = [];


let _cached_decoder_for_ModifyDNRequest: $.ASN1Decoder<ModifyDNRequest> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ModifyDNRequest
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ModifyDNRequest} The decoded data structure.
 */
export function _decode_ModifyDNRequest(el: _Element): ModifyDNRequest {
  if (!_cached_decoder_for_ModifyDNRequest) {
    _cached_decoder_for_ModifyDNRequest = $._decode_implicit<ModifyDNRequest>(
      () =>
        function (el: _Element): ModifyDNRequest {
          let entry!: LDAPDN;
          let newrdn!: RelativeLDAPDN;
          let deleteoldrdn!: BOOLEAN;
          let newSuperior: OPTIONAL<LDAPDN>;
          let _unrecognizedExtensionsList: _Element[] = [];
          const callbacks: $.DecodingMap = {
            entry: (_el: _Element): void => {
              entry = _decode_LDAPDN(_el);
            },
            newrdn: (_el: _Element): void => {
              newrdn = _decode_RelativeLDAPDN(_el);
            },
            deleteoldrdn: (_el: _Element): void => {
              deleteoldrdn = $._decodeBoolean(_el);
            },
            newSuperior: (_el: _Element): void => {
              newSuperior = $._decode_implicit<LDAPDN>(() => _decode_LDAPDN)(
                _el
              );
            },
          };
          $._parse_sequence(
            el,
            callbacks,
            _root_component_type_list_1_spec_for_ModifyDNRequest,
            _extension_additions_list_spec_for_ModifyDNRequest,
            _root_component_type_list_2_spec_for_ModifyDNRequest,
            (ext: _Element): void => {
              _unrecognizedExtensionsList.push(ext);
            }
          );
          return new ModifyDNRequest (
            entry,
            newrdn,
            deleteoldrdn,
            newSuperior,
            _unrecognizedExtensionsList
          );
        }
    );
  }
  return _cached_decoder_for_ModifyDNRequest(el);
}


let _cached_encoder_for_ModifyDNRequest: $.ASN1Encoder<ModifyDNRequest> | null = null;


/**
 * @summary Encodes a(n) ModifyDNRequest into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ModifyDNRequest, encoded as an ASN.1 Element.
 */
export function _encode_ModifyDNRequest(
  value: ModifyDNRequest,
  elGetter: $.ASN1Encoder<ModifyDNRequest>
): _Element {
  if (!_cached_encoder_for_ModifyDNRequest) {
    _cached_encoder_for_ModifyDNRequest = $._encode_implicit(
      _TagClass.application,
      12,
      () =>
        function (
          value: ModifyDNRequest        ): _Element {
          return $._encodeSequence(
            ([] as (_Element | undefined)[])
              .concat(
                [
                  /* REQUIRED   */ _encode_LDAPDN(value.entry, $.BER),
                  /* REQUIRED   */ _encode_RelativeLDAPDN(value.newrdn, $.BER),
                  /* REQUIRED   */ $._encodeBoolean(value.deleteoldrdn, $.BER),
                  /* IF_ABSENT  */ value.newSuperior === undefined
                    ? undefined
                    : $._encode_implicit(
                        _TagClass.context,
                        0,
                        () => _encode_LDAPDN,
                        $.BER
                      )(value.newSuperior, $.BER),
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
  return _cached_encoder_for_ModifyDNRequest(value, elGetter);
}


/* eslint-enable */
