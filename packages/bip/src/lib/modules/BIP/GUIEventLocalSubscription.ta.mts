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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
  BioAPI_UUID,
  _decode_BioAPI_UUID,
  _encode_BioAPI_UUID,
} from '../BIP/BioAPI-UUID.ta.mjs';
import {
  EndpointIRI,
  _decode_EndpointIRI,
  _encode_EndpointIRI,
} from '../BIP/EndpointIRI.ta.mjs';
import {
  BioAPI_HANDLE,
  _decode_BioAPI_HANDLE,
  _encode_BioAPI_HANDLE,
} from '../BIP/BioAPI-HANDLE.ta.mjs';
import {
  MemoryAddress,
  _decode_MemoryAddress,
  _encode_MemoryAddress,
} from '../BIP/MemoryAddress.ta.mjs';

/**
 * @summary GUIEventLocalSubscription
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GUIEventLocalSubscription ::= SEQUENCE {
 *   guiEventSubscriptionUuid        BioAPI-UUID OPTIONAL,
 *   hostingEndpointIRI              EndpointIRI,
 *   bspProductUuid                  BioAPI-UUID,
 *   useBSPAccessUuid                BOOLEAN,
 *   originalBSPHandle               BioAPI-HANDLE OPTIONAL,
 *   guiSelectEventHandlerAddress    MemoryAddress,
 *   guiSelectEventHandlerContext    MemoryAddress,
 *   guiStateEventHandlerAddress     MemoryAddress,
 *   guiStateEventHandlerContext     MemoryAddress,
 *   guiProgressEventHandlerAddress  MemoryAddress,
 *   guiProgressEventHandlerContext  MemoryAddress
 * }
 * ```
 *
 * @class
 */
export class GUIEventLocalSubscription {
  constructor(
    /**
     * @summary `guiEventSubscriptionUuid`.
     * @public
     * @readonly
     */
    readonly guiEventSubscriptionUuid: OPTIONAL<BioAPI_UUID>,
    /**
     * @summary `hostingEndpointIRI`.
     * @public
     * @readonly
     */
    readonly hostingEndpointIRI: EndpointIRI,
    /**
     * @summary `bspProductUuid`.
     * @public
     * @readonly
     */
    readonly bspProductUuid: BioAPI_UUID,
    /**
     * @summary `useBSPAccessUuid`.
     * @public
     * @readonly
     */
    readonly useBSPAccessUuid: BOOLEAN,
    /**
     * @summary `originalBSPHandle`.
     * @public
     * @readonly
     */
    readonly originalBSPHandle: OPTIONAL<BioAPI_HANDLE>,
    /**
     * @summary `guiSelectEventHandlerAddress`.
     * @public
     * @readonly
     */
    readonly guiSelectEventHandlerAddress: MemoryAddress,
    /**
     * @summary `guiSelectEventHandlerContext`.
     * @public
     * @readonly
     */
    readonly guiSelectEventHandlerContext: MemoryAddress,
    /**
     * @summary `guiStateEventHandlerAddress`.
     * @public
     * @readonly
     */
    readonly guiStateEventHandlerAddress: MemoryAddress,
    /**
     * @summary `guiStateEventHandlerContext`.
     * @public
     * @readonly
     */
    readonly guiStateEventHandlerContext: MemoryAddress,
    /**
     * @summary `guiProgressEventHandlerAddress`.
     * @public
     * @readonly
     */
    readonly guiProgressEventHandlerAddress: MemoryAddress,
    /**
     * @summary `guiProgressEventHandlerContext`.
     * @public
     * @readonly
     */
    readonly guiProgressEventHandlerContext: MemoryAddress
  ) {}

  /**
   * @summary Restructures an object into a GUIEventLocalSubscription
   * @description
   *
   * This takes an `object` and converts it to a `GUIEventLocalSubscription`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `GUIEventLocalSubscription`.
   * @returns {GUIEventLocalSubscription}
   */
  public static _from_object(
    _o: {
      [_K in keyof GUIEventLocalSubscription]: GUIEventLocalSubscription[_K];
    }
  ): GUIEventLocalSubscription {
    return new GUIEventLocalSubscription(
      _o.guiEventSubscriptionUuid,
      _o.hostingEndpointIRI,
      _o.bspProductUuid,
      _o.useBSPAccessUuid,
      _o.originalBSPHandle,
      _o.guiSelectEventHandlerAddress,
      _o.guiSelectEventHandlerContext,
      _o.guiStateEventHandlerAddress,
      _o.guiStateEventHandlerContext,
      _o.guiProgressEventHandlerAddress,
      _o.guiProgressEventHandlerContext
    );
  }
}


/**
 * @summary The Leading Root Component Types of GUIEventLocalSubscription
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_GUIEventLocalSubscription: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'guiEventSubscriptionUuid',
    true,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'hostingEndpointIRI',
    false,
    $.hasTag(_TagClass.context, 1)
  ),
  new $.ComponentSpec(
    'bspProductUuid',
    false,
    $.hasTag(_TagClass.context, 2)
  ),
  new $.ComponentSpec(
    'useBSPAccessUuid',
    false,
    $.hasTag(_TagClass.context, 3)
  ),
  new $.ComponentSpec(
    'originalBSPHandle',
    true,
    $.hasTag(_TagClass.context, 4)
  ),
  new $.ComponentSpec(
    'guiSelectEventHandlerAddress',
    false,
    $.hasTag(_TagClass.context, 5)
  ),
  new $.ComponentSpec(
    'guiSelectEventHandlerContext',
    false,
    $.hasTag(_TagClass.context, 6)
  ),
  new $.ComponentSpec(
    'guiStateEventHandlerAddress',
    false,
    $.hasTag(_TagClass.context, 7)
  ),
  new $.ComponentSpec(
    'guiStateEventHandlerContext',
    false,
    $.hasTag(_TagClass.context, 8)
  ),
  new $.ComponentSpec(
    'guiProgressEventHandlerAddress',
    false,
    $.hasTag(_TagClass.context, 9)
  ),
  new $.ComponentSpec(
    'guiProgressEventHandlerContext',
    false,
    $.hasTag(_TagClass.context, 10)
  ),
];


/**
 * @summary The Trailing Root Component Types of GUIEventLocalSubscription
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_GUIEventLocalSubscription: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of GUIEventLocalSubscription
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_GUIEventLocalSubscription: $.ComponentSpec[] = [];


let _cached_decoder_for_GUIEventLocalSubscription: $.ASN1Decoder<GUIEventLocalSubscription> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) GUIEventLocalSubscription
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {GUIEventLocalSubscription} The decoded data structure.
 */
export function _decode_GUIEventLocalSubscription(el: _Element) {
  if (!_cached_decoder_for_GUIEventLocalSubscription) {
    _cached_decoder_for_GUIEventLocalSubscription = function (
      el: _Element
    ): GUIEventLocalSubscription {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let guiEventSubscriptionUuid: OPTIONAL<BioAPI_UUID>;
      let hostingEndpointIRI!: EndpointIRI;
      let bspProductUuid!: BioAPI_UUID;
      let useBSPAccessUuid!: BOOLEAN;
      let originalBSPHandle: OPTIONAL<BioAPI_HANDLE>;
      let guiSelectEventHandlerAddress!: MemoryAddress;
      let guiSelectEventHandlerContext!: MemoryAddress;
      let guiStateEventHandlerAddress!: MemoryAddress;
      let guiStateEventHandlerContext!: MemoryAddress;
      let guiProgressEventHandlerAddress!: MemoryAddress;
      let guiProgressEventHandlerContext!: MemoryAddress;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        guiEventSubscriptionUuid: (_el: _Element): void => {
          guiEventSubscriptionUuid = _decode_BioAPI_UUID(_el);
        },
        hostingEndpointIRI: (_el: _Element): void => {
          hostingEndpointIRI = _decode_EndpointIRI(_el);
        },
        bspProductUuid: (_el: _Element): void => {
          bspProductUuid = _decode_BioAPI_UUID(_el);
        },
        useBSPAccessUuid: (_el: _Element): void => {
          useBSPAccessUuid = $._decodeBoolean(_el);
        },
        originalBSPHandle: (_el: _Element): void => {
          originalBSPHandle = _decode_BioAPI_HANDLE(_el);
        },
        guiSelectEventHandlerAddress: (_el: _Element): void => {
          guiSelectEventHandlerAddress = _decode_MemoryAddress(_el);
        },
        guiSelectEventHandlerContext: (_el: _Element): void => {
          guiSelectEventHandlerContext = _decode_MemoryAddress(_el);
        },
        guiStateEventHandlerAddress: (_el: _Element): void => {
          guiStateEventHandlerAddress = _decode_MemoryAddress(_el);
        },
        guiStateEventHandlerContext: (_el: _Element): void => {
          guiStateEventHandlerContext = _decode_MemoryAddress(_el);
        },
        guiProgressEventHandlerAddress: (_el: _Element): void => {
          guiProgressEventHandlerAddress = _decode_MemoryAddress(_el);
        },
        guiProgressEventHandlerContext: (_el: _Element): void => {
          guiProgressEventHandlerContext = _decode_MemoryAddress(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_GUIEventLocalSubscription,
        _extension_additions_list_spec_for_GUIEventLocalSubscription,
        _root_component_type_list_2_spec_for_GUIEventLocalSubscription,
        undefined
      );
      return new GUIEventLocalSubscription /* SEQUENCE_CONSTRUCTOR_CALL */(
        guiEventSubscriptionUuid,
        hostingEndpointIRI,
        bspProductUuid,
        useBSPAccessUuid,
        originalBSPHandle,
        guiSelectEventHandlerAddress,
        guiSelectEventHandlerContext,
        guiStateEventHandlerAddress,
        guiStateEventHandlerContext,
        guiProgressEventHandlerAddress,
        guiProgressEventHandlerContext
      );
    };
  }
  return _cached_decoder_for_GUIEventLocalSubscription(el);
}


let _cached_encoder_for_GUIEventLocalSubscription: $.ASN1Encoder<GUIEventLocalSubscription> | null = null;


/**
 * @summary Encodes a(n) GUIEventLocalSubscription into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GUIEventLocalSubscription, encoded as an ASN.1 Element.
 */
export function _encode_GUIEventLocalSubscription(
  value: GUIEventLocalSubscription,
  elGetter: $.ASN1Encoder<GUIEventLocalSubscription>
) {
  if (!_cached_encoder_for_GUIEventLocalSubscription) {
    _cached_encoder_for_GUIEventLocalSubscription = function (
      value: GUIEventLocalSubscription    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* IF_ABSENT  */ value.guiEventSubscriptionUuid === undefined
              ? undefined
              : _encode_BioAPI_UUID(value.guiEventSubscriptionUuid, $.BER),
            /* REQUIRED   */ _encode_EndpointIRI(
              value.hostingEndpointIRI,
              $.BER
            ),
            /* REQUIRED   */ _encode_BioAPI_UUID(value.bspProductUuid, $.BER),
            /* REQUIRED   */ $._encodeBoolean(value.useBSPAccessUuid, $.BER),
            /* IF_ABSENT  */ value.originalBSPHandle === undefined
              ? undefined
              : _encode_BioAPI_HANDLE(value.originalBSPHandle, $.BER),
            /* REQUIRED   */ _encode_MemoryAddress(
              value.guiSelectEventHandlerAddress,
              $.BER
            ),
            /* REQUIRED   */ _encode_MemoryAddress(
              value.guiSelectEventHandlerContext,
              $.BER
            ),
            /* REQUIRED   */ _encode_MemoryAddress(
              value.guiStateEventHandlerAddress,
              $.BER
            ),
            /* REQUIRED   */ _encode_MemoryAddress(
              value.guiStateEventHandlerContext,
              $.BER
            ),
            /* REQUIRED   */ _encode_MemoryAddress(
              value.guiProgressEventHandlerAddress,
              $.BER
            ),
            /* REQUIRED   */ _encode_MemoryAddress(
              value.guiProgressEventHandlerContext,
              $.BER
            ),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_GUIEventLocalSubscription(value, elGetter);
}


/* eslint-enable */
