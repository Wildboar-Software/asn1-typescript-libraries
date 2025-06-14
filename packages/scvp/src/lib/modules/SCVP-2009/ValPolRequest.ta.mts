/* eslint-disable */
import {
  OPTIONAL,
  INTEGER,
  OCTET_STRING,
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

/* START_OF_SYMBOL_DEFINITION ValPolRequest */
/**
 * @summary ValPolRequest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ValPolRequest ::= SEQUENCE {
 *     vpRequestVersion           INTEGER DEFAULT 1,
 *     requestNonce               OCTET STRING
 * }
 * ```
 *
 * @class
 */
export class ValPolRequest {
  constructor(
    /**
     * @summary `vpRequestVersion`.
     * @public
     * @readonly
     */
    readonly vpRequestVersion: OPTIONAL<INTEGER>,
    /**
     * @summary `requestNonce`.
     * @public
     * @readonly
     */
    readonly requestNonce: OCTET_STRING
  ) {}

  /**
   * @summary Restructures an object into a ValPolRequest
   * @description
   *
   * This takes an `object` and converts it to a `ValPolRequest`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `ValPolRequest`.
   * @returns {ValPolRequest}
   */
  public static _from_object(
    _o: { [_K in keyof ValPolRequest]: ValPolRequest[_K] }
  ): ValPolRequest {
    return new ValPolRequest(_o.vpRequestVersion, _o.requestNonce);
  }

  /**
   * @summary Getter that returns the default value for `vpRequestVersion`.
   * @public
   * @static
   * @method
   */
  public static get _default_value_for_vpRequestVersion() {
    return 1;
  }
}
/* END_OF_SYMBOL_DEFINITION ValPolRequest */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ValPolRequest */
/**
 * @summary The Leading Root Component Types of ValPolRequest
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ValPolRequest: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'vpRequestVersion',
    true,
    $.hasTag(_TagClass.universal, 2),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'requestNonce',
    false,
    $.hasTag(_TagClass.universal, 4),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ValPolRequest */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ValPolRequest */
/**
 * @summary The Trailing Root Component Types of ValPolRequest
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ValPolRequest: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ValPolRequest */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ValPolRequest */
/**
 * @summary The Extension Addition Component Types of ValPolRequest
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ValPolRequest: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ValPolRequest */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ValPolRequest */
let _cached_decoder_for_ValPolRequest: $.ASN1Decoder<ValPolRequest> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ValPolRequest */

/* START_OF_SYMBOL_DEFINITION _decode_ValPolRequest */
/**
 * @summary Decodes an ASN.1 element into a(n) ValPolRequest
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ValPolRequest} The decoded data structure.
 */
export function _decode_ValPolRequest(el: _Element) {
  if (!_cached_decoder_for_ValPolRequest) {
    _cached_decoder_for_ValPolRequest = function (el: _Element): ValPolRequest {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let vpRequestVersion: OPTIONAL<INTEGER> =
        ValPolRequest._default_value_for_vpRequestVersion;
      let requestNonce!: OCTET_STRING;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        vpRequestVersion: (_el: _Element): void => {
          vpRequestVersion = $._decodeInteger(_el);
        },
        requestNonce: (_el: _Element): void => {
          requestNonce = $._decodeOctetString(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_ValPolRequest,
        _extension_additions_list_spec_for_ValPolRequest,
        _root_component_type_list_2_spec_for_ValPolRequest,
        undefined
      );
      return new ValPolRequest /* SEQUENCE_CONSTRUCTOR_CALL */(
        vpRequestVersion,
        requestNonce
      );
    };
  }
  return _cached_decoder_for_ValPolRequest(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ValPolRequest */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ValPolRequest */
let _cached_encoder_for_ValPolRequest: $.ASN1Encoder<ValPolRequest> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ValPolRequest */

/* START_OF_SYMBOL_DEFINITION _encode_ValPolRequest */
/**
 * @summary Encodes a(n) ValPolRequest into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ValPolRequest, encoded as an ASN.1 Element.
 */
export function _encode_ValPolRequest(
  value: ValPolRequest,
  elGetter: $.ASN1Encoder<ValPolRequest>
) {
  if (!_cached_encoder_for_ValPolRequest) {
    _cached_encoder_for_ValPolRequest = function (
      value: ValPolRequest    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* IF_DEFAULT */ value.vpRequestVersion === undefined ||
            $.deepEq(
              value.vpRequestVersion,
              ValPolRequest._default_value_for_vpRequestVersion
            )
              ? undefined
              : $._encodeInteger(value.vpRequestVersion, $.BER),
            /* REQUIRED   */ $._encodeOctetString(value.requestNonce, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_ValPolRequest(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ValPolRequest */

/* eslint-enable */
