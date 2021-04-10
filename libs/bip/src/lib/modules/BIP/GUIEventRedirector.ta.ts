/* eslint-disable */
import {
  itu_t,
  itu_r,
  ccitt,
  iso,
  joint_iso_itu_t,
  joint_iso_ccitt,
  OPTIONAL,
  BOOLEAN,
  INTEGER,
  BIT_STRING,
  OCTET_STRING,
  NULL,
  OBJECT_IDENTIFIER,
  ObjectDescriptor,
  EXTERNAL,
  REAL,
  INSTANCE_OF,
  ENUMERATED,
  EMBEDDED_PDV,
  UTF8String,
  RELATIVE_OID,
  SEQUENCE,
  SEQUENCE_OF,
  SET,
  SET_OF,
  GraphicString,
  NumericString,
  VisibleString,
  PrintableString,
  ISO646String,
  TeletexString,
  GeneralString,
  T61String,
  UniversalString,
  VideotexString,
  BMPString,
  IA5String,
  CharacterString,
  UTCTime,
  GeneralizedTime,
  TIME,
  DATE,
  TIME_OF_DAY,
  DATE_TIME,
  DURATION,
  OID_IRI,
  RELATIVE_OID_IRI,
  TRUE,
  FALSE,
  TRUE_BIT,
  FALSE_BIT,
  PLUS_INFINITY,
  MINUS_INFINITY,
  NOT_A_NUMBER,
  TYPE_IDENTIFIER,
  ABSTRACT_SYNTAX,
  ASN1Element as _Element,
  ASN1TagClass as _TagClass,
  ASN1Construction as _Construction,
  ASN1UniversalType as _UniversalType,
  ObjectIdentifier as _OID,
  External as _External,
  EmbeddedPDV as _PDV,
  ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/node/functional';
import {
  EndpointIRI,
  _decode_EndpointIRI,
  _encode_EndpointIRI,
} from '../BIP/EndpointIRI.ta';
export {
  EndpointIRI,
  _decode_EndpointIRI,
  _encode_EndpointIRI,
} from '../BIP/EndpointIRI.ta';
import {
  BioAPI_UUID,
  _decode_BioAPI_UUID,
  _encode_BioAPI_UUID,
} from '../BIP/BioAPI-UUID.ta';
export {
  BioAPI_UUID,
  _decode_BioAPI_UUID,
  _encode_BioAPI_UUID,
} from '../BIP/BioAPI-UUID.ta';
import {
  BioAPI_HANDLE,
  _decode_BioAPI_HANDLE,
  _encode_BioAPI_HANDLE,
} from '../BIP/BioAPI-HANDLE.ta';
export {
  BioAPI_HANDLE,
  _decode_BioAPI_HANDLE,
  _encode_BioAPI_HANDLE,
} from '../BIP/BioAPI-HANDLE.ta';

/* START_OF_SYMBOL_DEFINITION GUIEventRedirector */
/**
 * @summary GUIEventRedirector
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GUIEventRedirector ::= SEQUENCE {
 *   referrerEndpointIRI         EndpointIRI,
 *   bspProductUuid              BioAPI-UUID,
 *   originalBSPHandle           BioAPI-HANDLE,
 *   subscriberEndpointIRI       EndpointIRI,
 *   guiEventSubscriptionUuid    BioAPI-UUID,
 *   guiSelectEventRedirected    BOOLEAN,
 *   guiStateEventRedirected     BOOLEAN,
 *   guiProgressEventRedirected  BOOLEAN
 * }
 * ```
 *
 * @class
 */
export class GUIEventRedirector {
  constructor(
    /**
     * @summary `referrerEndpointIRI`.
     * @public
     * @readonly
     */
    readonly referrerEndpointIRI: EndpointIRI,
    /**
     * @summary `bspProductUuid`.
     * @public
     * @readonly
     */
    readonly bspProductUuid: BioAPI_UUID,
    /**
     * @summary `originalBSPHandle`.
     * @public
     * @readonly
     */
    readonly originalBSPHandle: BioAPI_HANDLE,
    /**
     * @summary `subscriberEndpointIRI`.
     * @public
     * @readonly
     */
    readonly subscriberEndpointIRI: EndpointIRI,
    /**
     * @summary `guiEventSubscriptionUuid`.
     * @public
     * @readonly
     */
    readonly guiEventSubscriptionUuid: BioAPI_UUID,
    /**
     * @summary `guiSelectEventRedirected`.
     * @public
     * @readonly
     */
    readonly guiSelectEventRedirected: BOOLEAN,
    /**
     * @summary `guiStateEventRedirected`.
     * @public
     * @readonly
     */
    readonly guiStateEventRedirected: BOOLEAN,
    /**
     * @summary `guiProgressEventRedirected`.
     * @public
     * @readonly
     */
    readonly guiProgressEventRedirected: BOOLEAN
  ) {}

  /**
   * @summary Restructures an object into a GUIEventRedirector
   * @description
   *
   * This takes an `object` and converts it to a `GUIEventRedirector`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `GUIEventRedirector`.
   * @returns {GUIEventRedirector}
   */
  public static _from_object(
    _o: { [_K in keyof GUIEventRedirector]: GUIEventRedirector[_K] }
  ): GUIEventRedirector {
    return new GUIEventRedirector(
      _o.referrerEndpointIRI,
      _o.bspProductUuid,
      _o.originalBSPHandle,
      _o.subscriberEndpointIRI,
      _o.guiEventSubscriptionUuid,
      _o.guiSelectEventRedirected,
      _o.guiStateEventRedirected,
      _o.guiProgressEventRedirected
    );
  }
}
/* END_OF_SYMBOL_DEFINITION GUIEventRedirector */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_GUIEventRedirector */
/**
 * @summary The Leading Root Component Types of GUIEventRedirector
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_GUIEventRedirector: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'referrerEndpointIRI',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'bspProductUuid',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'originalBSPHandle',
    false,
    $.hasTag(_TagClass.context, 2),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'subscriberEndpointIRI',
    false,
    $.hasTag(_TagClass.context, 3),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'guiEventSubscriptionUuid',
    false,
    $.hasTag(_TagClass.context, 4),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'guiSelectEventRedirected',
    false,
    $.hasTag(_TagClass.context, 5),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'guiStateEventRedirected',
    false,
    $.hasTag(_TagClass.context, 6),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'guiProgressEventRedirected',
    false,
    $.hasTag(_TagClass.context, 7),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_GUIEventRedirector */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_GUIEventRedirector */
/**
 * @summary The Trailing Root Component Types of GUIEventRedirector
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_GUIEventRedirector: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_GUIEventRedirector */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_GUIEventRedirector */
/**
 * @summary The Extension Addition Component Types of GUIEventRedirector
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_GUIEventRedirector: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_GUIEventRedirector */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_GUIEventRedirector */
let _cached_decoder_for_GUIEventRedirector: $.ASN1Decoder<GUIEventRedirector> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_GUIEventRedirector */

/* START_OF_SYMBOL_DEFINITION _decode_GUIEventRedirector */
/**
 * @summary Decodes an ASN.1 element into a(n) GUIEventRedirector
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {GUIEventRedirector} The decoded data structure.
 */
export function _decode_GUIEventRedirector(el: _Element) {
  if (!_cached_decoder_for_GUIEventRedirector) {
    _cached_decoder_for_GUIEventRedirector = function (
      el: _Element
    ): GUIEventRedirector {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 8) {
        throw new _ConstructionError(
          'GUIEventRedirector contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'referrerEndpointIRI';
      sequence[1].name = 'bspProductUuid';
      sequence[2].name = 'originalBSPHandle';
      sequence[3].name = 'subscriberEndpointIRI';
      sequence[4].name = 'guiEventSubscriptionUuid';
      sequence[5].name = 'guiSelectEventRedirected';
      sequence[6].name = 'guiStateEventRedirected';
      sequence[7].name = 'guiProgressEventRedirected';
      let referrerEndpointIRI!: EndpointIRI;
      let bspProductUuid!: BioAPI_UUID;
      let originalBSPHandle!: BioAPI_HANDLE;
      let subscriberEndpointIRI!: EndpointIRI;
      let guiEventSubscriptionUuid!: BioAPI_UUID;
      let guiSelectEventRedirected!: BOOLEAN;
      let guiStateEventRedirected!: BOOLEAN;
      let guiProgressEventRedirected!: BOOLEAN;
      referrerEndpointIRI = _decode_EndpointIRI(sequence[0]);
      bspProductUuid = _decode_BioAPI_UUID(sequence[1]);
      originalBSPHandle = _decode_BioAPI_HANDLE(sequence[2]);
      subscriberEndpointIRI = _decode_EndpointIRI(sequence[3]);
      guiEventSubscriptionUuid = _decode_BioAPI_UUID(sequence[4]);
      guiSelectEventRedirected = $._decodeBoolean(sequence[5]);
      guiStateEventRedirected = $._decodeBoolean(sequence[6]);
      guiProgressEventRedirected = $._decodeBoolean(sequence[7]);
      return new GUIEventRedirector(
        referrerEndpointIRI,
        bspProductUuid,
        originalBSPHandle,
        subscriberEndpointIRI,
        guiEventSubscriptionUuid,
        guiSelectEventRedirected,
        guiStateEventRedirected,
        guiProgressEventRedirected
      );
    };
  }
  return _cached_decoder_for_GUIEventRedirector(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_GUIEventRedirector */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_GUIEventRedirector */
let _cached_encoder_for_GUIEventRedirector: $.ASN1Encoder<GUIEventRedirector> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_GUIEventRedirector */

/* START_OF_SYMBOL_DEFINITION _encode_GUIEventRedirector */
/**
 * @summary Encodes a(n) GUIEventRedirector into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GUIEventRedirector, encoded as an ASN.1 Element.
 */
export function _encode_GUIEventRedirector(
  value: GUIEventRedirector,
  elGetter: $.ASN1Encoder<GUIEventRedirector>
) {
  if (!_cached_encoder_for_GUIEventRedirector) {
    _cached_encoder_for_GUIEventRedirector = function (
      value: GUIEventRedirector,
      elGetter: $.ASN1Encoder<GUIEventRedirector>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_EndpointIRI(
              value.referrerEndpointIRI,
              $.BER
            ),
            /* REQUIRED   */ _encode_BioAPI_UUID(value.bspProductUuid, $.BER),
            /* REQUIRED   */ _encode_BioAPI_HANDLE(
              value.originalBSPHandle,
              $.BER
            ),
            /* REQUIRED   */ _encode_EndpointIRI(
              value.subscriberEndpointIRI,
              $.BER
            ),
            /* REQUIRED   */ _encode_BioAPI_UUID(
              value.guiEventSubscriptionUuid,
              $.BER
            ),
            /* REQUIRED   */ $._encodeBoolean(
              value.guiSelectEventRedirected,
              $.BER
            ),
            /* REQUIRED   */ $._encodeBoolean(
              value.guiStateEventRedirected,
              $.BER
            ),
            /* REQUIRED   */ $._encodeBoolean(
              value.guiProgressEventRedirected,
              $.BER
            ),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_GUIEventRedirector(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_GUIEventRedirector */

/* eslint-enable */
