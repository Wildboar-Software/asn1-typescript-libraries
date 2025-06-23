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
import { Scope, _decode_Scope, _encode_Scope } from '../CMIP-1/Scope.ta.mjs';
import {
  CMISFilter,
  _decode_CMISFilter,
  _encode_CMISFilter,
} from '../CMIP-1/CMISFilter.ta.mjs';
import {
  CMISSync,
  _enum_for_CMISSync,
  _decode_CMISSync,
  _encode_CMISSync,
} from '../CMIP-1/CMISSync.ta.mjs';

/**
 * @summary ComplexityLimitation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ComplexityLimitation ::= SET {
 *   scope   [0]  Scope OPTIONAL,
 *   filter  [1]  CMISFilter OPTIONAL,
 *   sync    [2]  CMISSync OPTIONAL,
 *   ...
 * }
 * ```
 *
 * @class
 */
export class ComplexityLimitation {
  constructor(
    /**
     * @summary `scope`.
     * @public
     * @readonly
     */
    readonly scope: OPTIONAL<Scope>,
    /**
     * @summary `filter`.
     * @public
     * @readonly
     */
    readonly filter: OPTIONAL<CMISFilter>,
    /**
     * @summary `sync`.
     * @public
     * @readonly
     */
    readonly sync: OPTIONAL<CMISSync>,
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[] = []
  ) {}

  /**
   * @summary Restructures an object into a ComplexityLimitation
   * @description
   *
   * This takes an `object` and converts it to a `ComplexityLimitation`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `ComplexityLimitation`.
   * @returns {ComplexityLimitation}
   */
  public static _from_object(
    _o: { [_K in keyof ComplexityLimitation]: ComplexityLimitation[_K] }
  ): ComplexityLimitation {
    return new ComplexityLimitation(
      _o.scope,
      _o.filter,
      _o.sync,
      _o._unrecognizedExtensionsList
    );
  }

  /**
   * @summary The enum used as the type of the component `sync`
   * @public
   * @static
   */

  public static _enum_for_sync = _enum_for_CMISSync;
}


/**
 * @summary The Leading Root Component Types of ComplexityLimitation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ComplexityLimitation: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'scope',
    true,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'filter',
    true,
    $.hasTag(_TagClass.context, 1)
  ),
  new $.ComponentSpec(
    'sync',
    true,
    $.hasTag(_TagClass.context, 2)
  ),
];


/**
 * @summary The Trailing Root Component Types of ComplexityLimitation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ComplexityLimitation: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of ComplexityLimitation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ComplexityLimitation: $.ComponentSpec[] = [];


let _cached_decoder_for_ComplexityLimitation: $.ASN1Decoder<ComplexityLimitation> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ComplexityLimitation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ComplexityLimitation} The decoded data structure.
 */
export function _decode_ComplexityLimitation(el: _Element) {
  if (!_cached_decoder_for_ComplexityLimitation) {
    _cached_decoder_for_ComplexityLimitation = function (
      el: _Element
    ): ComplexityLimitation {
      /* START_OF_SET_COMPONENT_DECLARATIONS */
      let scope: OPTIONAL<Scope>;
      let filter: OPTIONAL<CMISFilter>;
      let sync: OPTIONAL<CMISSync>;
      let _unrecognizedExtensionsList: _Element[] = [];
      /* END_OF_SET_COMPONENT_DECLARATIONS */
      const callbacks: $.DecodingMap = {
        scope: (_el: _Element): void => {
          scope = $._decode_explicit<Scope>(() => _decode_Scope)(_el);
        },
        filter: (_el: _Element): void => {
          filter = $._decode_explicit<CMISFilter>(() => _decode_CMISFilter)(
            _el
          );
        },
        sync: (_el: _Element): void => {
          sync = $._decode_explicit<CMISSync>(() => _decode_CMISSync)(_el);
        },
      };
      $._parse_set(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_ComplexityLimitation,
        _extension_additions_list_spec_for_ComplexityLimitation,
        _root_component_type_list_2_spec_for_ComplexityLimitation,
        (ext: _Element): void => {
          _unrecognizedExtensionsList.push(ext);
        }
      );
      return new ComplexityLimitation /* SET_CONSTRUCTOR_CALL */(
        scope,
        filter,
        sync,
        _unrecognizedExtensionsList
      );
    };
  }
  return _cached_decoder_for_ComplexityLimitation(el);
}


let _cached_encoder_for_ComplexityLimitation: $.ASN1Encoder<ComplexityLimitation> | null = null;


/**
 * @summary Encodes a(n) ComplexityLimitation into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ComplexityLimitation, encoded as an ASN.1 Element.
 */
export function _encode_ComplexityLimitation(
  value: ComplexityLimitation,
  elGetter: $.ASN1Encoder<ComplexityLimitation>
) {
  if (!_cached_encoder_for_ComplexityLimitation) {
    _cached_encoder_for_ComplexityLimitation = function (
      value: ComplexityLimitation    ): _Element {
      return $._encodeSet(
        ([] as (_Element | undefined)[])
          .concat(
            [
              /* IF_ABSENT  */ value.scope === undefined
                ? undefined
                : $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => _encode_Scope,
                    $.BER
                  )(value.scope, $.BER),
              /* IF_ABSENT  */ value.filter === undefined
                ? undefined
                : $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => _encode_CMISFilter,
                    $.BER
                  )(value.filter, $.BER),
              /* IF_ABSENT  */ value.sync === undefined
                ? undefined
                : $._encode_explicit(
                    _TagClass.context,
                    2,
                    () => _encode_CMISSync,
                    $.BER
                  )(value.sync, $.BER),
            ],
            value._unrecognizedExtensionsList
              ? value._unrecognizedExtensionsList
              : []
          )
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_ComplexityLimitation(value, elGetter);
}


/* eslint-enable */
