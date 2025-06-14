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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
  CMPCertificate,
  _decode_CMPCertificate,
  _encode_CMPCertificate,
} from '../PKIXCMP-2009/CMPCertificate.ta.mjs';
/* START_OF_SYMBOL_DEFINITION CAKeyUpdAnnContent */
/**
 * @summary CAKeyUpdAnnContent
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CAKeyUpdAnnContent ::= SEQUENCE {
 *     oldWithNew   CMPCertificate, -- old pub signed with new priv
 *     newWithOld   CMPCertificate, -- new pub signed with old priv
 *     newWithNew   CMPCertificate  -- new pub signed with new priv
 * }
 * ```
 *
 * @class
 */
export class CAKeyUpdAnnContent {
  constructor(
    /**
     * @summary `oldWithNew`.
     * @public
     * @readonly
     */
    readonly oldWithNew: CMPCertificate,
    /**
     * @summary `newWithOld`.
     * @public
     * @readonly
     */
    readonly newWithOld: CMPCertificate,
    /**
     * @summary `newWithNew`.
     * @public
     * @readonly
     */
    readonly newWithNew: CMPCertificate
  ) {}

  /**
   * @summary Restructures an object into a CAKeyUpdAnnContent
   * @description
   *
   * This takes an `object` and converts it to a `CAKeyUpdAnnContent`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `CAKeyUpdAnnContent`.
   * @returns {CAKeyUpdAnnContent}
   */
  public static _from_object(
    _o: { [_K in keyof CAKeyUpdAnnContent]: CAKeyUpdAnnContent[_K] }
  ): CAKeyUpdAnnContent {
    return new CAKeyUpdAnnContent(_o.oldWithNew, _o.newWithOld, _o.newWithNew);
  }
}
/* END_OF_SYMBOL_DEFINITION CAKeyUpdAnnContent */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CAKeyUpdAnnContent */
/**
 * @summary The Leading Root Component Types of CAKeyUpdAnnContent
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CAKeyUpdAnnContent: $.ComponentSpec[] = [
  new $.ComponentSpec('oldWithNew', false, $.hasAnyTag, undefined, undefined),
  new $.ComponentSpec('newWithOld', false, $.hasAnyTag, undefined, undefined),
  new $.ComponentSpec('newWithNew', false, $.hasAnyTag, undefined, undefined),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CAKeyUpdAnnContent */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CAKeyUpdAnnContent */
/**
 * @summary The Trailing Root Component Types of CAKeyUpdAnnContent
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CAKeyUpdAnnContent: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CAKeyUpdAnnContent */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CAKeyUpdAnnContent */
/**
 * @summary The Extension Addition Component Types of CAKeyUpdAnnContent
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CAKeyUpdAnnContent: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CAKeyUpdAnnContent */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CAKeyUpdAnnContent */
let _cached_decoder_for_CAKeyUpdAnnContent: $.ASN1Decoder<CAKeyUpdAnnContent> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CAKeyUpdAnnContent */

/* START_OF_SYMBOL_DEFINITION _decode_CAKeyUpdAnnContent */
/**
 * @summary Decodes an ASN.1 element into a(n) CAKeyUpdAnnContent
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CAKeyUpdAnnContent} The decoded data structure.
 */
export function _decode_CAKeyUpdAnnContent(el: _Element) {
  if (!_cached_decoder_for_CAKeyUpdAnnContent) {
    _cached_decoder_for_CAKeyUpdAnnContent = function (
      el: _Element
    ): CAKeyUpdAnnContent {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 3) {
        throw new _ConstructionError(
          'CAKeyUpdAnnContent contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'oldWithNew';
      sequence[1].name = 'newWithOld';
      sequence[2].name = 'newWithNew';
      let oldWithNew!: CMPCertificate;
      let newWithOld!: CMPCertificate;
      let newWithNew!: CMPCertificate;
      oldWithNew = _decode_CMPCertificate(sequence[0]);
      newWithOld = _decode_CMPCertificate(sequence[1]);
      newWithNew = _decode_CMPCertificate(sequence[2]);
      return new CAKeyUpdAnnContent(oldWithNew, newWithOld, newWithNew);
    };
  }
  return _cached_decoder_for_CAKeyUpdAnnContent(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CAKeyUpdAnnContent */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CAKeyUpdAnnContent */
let _cached_encoder_for_CAKeyUpdAnnContent: $.ASN1Encoder<CAKeyUpdAnnContent> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CAKeyUpdAnnContent */

/* START_OF_SYMBOL_DEFINITION _encode_CAKeyUpdAnnContent */
/**
 * @summary Encodes a(n) CAKeyUpdAnnContent into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CAKeyUpdAnnContent, encoded as an ASN.1 Element.
 */
export function _encode_CAKeyUpdAnnContent(
  value: CAKeyUpdAnnContent,
  elGetter: $.ASN1Encoder<CAKeyUpdAnnContent>
) {
  if (!_cached_encoder_for_CAKeyUpdAnnContent) {
    _cached_encoder_for_CAKeyUpdAnnContent = function (
      value: CAKeyUpdAnnContent    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_CMPCertificate(value.oldWithNew, $.BER),
            /* REQUIRED   */ _encode_CMPCertificate(value.newWithOld, $.BER),
            /* REQUIRED   */ _encode_CMPCertificate(value.newWithNew, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_CAKeyUpdAnnContent(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CAKeyUpdAnnContent */

/* eslint-enable */
