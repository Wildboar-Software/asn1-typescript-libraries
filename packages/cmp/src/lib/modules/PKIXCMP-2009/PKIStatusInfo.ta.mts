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
import * as $ from '@wildboar/asn1/functional';
import {
  PKIStatus,
  _decode_PKIStatus,
  _encode_PKIStatus,
} from '../PKIXCMP-2009/PKIStatus.ta.mjs';
import {
  PKIFreeText,
  _decode_PKIFreeText,
  _encode_PKIFreeText,
} from '../PKIXCMP-2009/PKIFreeText.ta.mjs';
import {
  PKIFailureInfo,
  _decode_PKIFailureInfo,
  _encode_PKIFailureInfo,
} from '../PKIXCMP-2009/PKIFailureInfo.ta.mjs';

/**
 * @summary PKIStatusInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PKIStatusInfo ::= SEQUENCE {
 *     status        PKIStatus,
 *     statusString  PKIFreeText     OPTIONAL,
 *     failInfo      PKIFailureInfo  OPTIONAL }
 * ```
 *
 * @class
 */
export class PKIStatusInfo {
  constructor(
    /**
     * @summary `status`.
     * @public
     * @readonly
     */
    readonly status: PKIStatus,
    /**
     * @summary `statusString`.
     * @public
     * @readonly
     */
    readonly statusString: OPTIONAL<PKIFreeText>,
    /**
     * @summary `failInfo`.
     * @public
     * @readonly
     */
    readonly failInfo: OPTIONAL<PKIFailureInfo>
  ) {}

  /**
   * @summary Restructures an object into a PKIStatusInfo
   * @description
   *
   * This takes an `object` and converts it to a `PKIStatusInfo`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `PKIStatusInfo`.
   * @returns {PKIStatusInfo}
   */
  public static _from_object(
    _o: { [_K in keyof PKIStatusInfo]: PKIStatusInfo[_K] }
  ): PKIStatusInfo {
    return new PKIStatusInfo(_o.status, _o.statusString, _o.failInfo);
  }
}


/**
 * @summary The Leading Root Component Types of PKIStatusInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PKIStatusInfo: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'status',
    false,
    $.hasTag(_TagClass.universal, 2)
  ),
  new $.ComponentSpec(
    'statusString',
    true,
    $.hasTag(_TagClass.universal, 16)
  ),
  new $.ComponentSpec(
    'failInfo',
    true,
    $.hasTag(_TagClass.universal, 3)
  ),
];


/**
 * @summary The Trailing Root Component Types of PKIStatusInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PKIStatusInfo: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of PKIStatusInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PKIStatusInfo: $.ComponentSpec[] = [];


let _cached_decoder_for_PKIStatusInfo: $.ASN1Decoder<PKIStatusInfo> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) PKIStatusInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PKIStatusInfo} The decoded data structure.
 */
export function _decode_PKIStatusInfo(el: _Element) {
  if (!_cached_decoder_for_PKIStatusInfo) {
    _cached_decoder_for_PKIStatusInfo = function (el: _Element): PKIStatusInfo {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let status!: PKIStatus;
      let statusString: OPTIONAL<PKIFreeText>;
      let failInfo: OPTIONAL<PKIFailureInfo>;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        status: (_el: _Element): void => {
          status = _decode_PKIStatus(_el);
        },
        statusString: (_el: _Element): void => {
          statusString = _decode_PKIFreeText(_el);
        },
        failInfo: (_el: _Element): void => {
          failInfo = _decode_PKIFailureInfo(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_PKIStatusInfo,
        _extension_additions_list_spec_for_PKIStatusInfo,
        _root_component_type_list_2_spec_for_PKIStatusInfo,
        undefined
      );
      return new PKIStatusInfo /* SEQUENCE_CONSTRUCTOR_CALL */(
        status,
        statusString,
        failInfo
      );
    };
  }
  return _cached_decoder_for_PKIStatusInfo(el);
}


let _cached_encoder_for_PKIStatusInfo: $.ASN1Encoder<PKIStatusInfo> | null = null;


/**
 * @summary Encodes a(n) PKIStatusInfo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PKIStatusInfo, encoded as an ASN.1 Element.
 */
export function _encode_PKIStatusInfo(
  value: PKIStatusInfo,
  elGetter: $.ASN1Encoder<PKIStatusInfo>
) {
  if (!_cached_encoder_for_PKIStatusInfo) {
    _cached_encoder_for_PKIStatusInfo = function (
      value: PKIStatusInfo    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_PKIStatus(value.status, $.BER),
            /* IF_ABSENT  */ value.statusString === undefined
              ? undefined
              : _encode_PKIFreeText(value.statusString, $.BER),
            /* IF_ABSENT  */ value.failInfo === undefined
              ? undefined
              : _encode_PKIFailureInfo(value.failInfo, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_PKIStatusInfo(value, elGetter);
}


/* eslint-enable */
