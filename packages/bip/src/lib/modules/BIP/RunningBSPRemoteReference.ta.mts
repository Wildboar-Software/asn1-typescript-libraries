/* eslint-disable */
import {
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
  EndpointIRI,
  _decode_EndpointIRI,
  _encode_EndpointIRI,
} from '../BIP/EndpointIRI.ta.mjs';
import {
  BioAPI_UUID,
  _decode_BioAPI_UUID,
  _encode_BioAPI_UUID,
} from '../BIP/BioAPI-UUID.ta.mjs';

/**
 * @summary RunningBSPRemoteReference
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RunningBSPRemoteReference ::= SEQUENCE {
 *   referrerEndpointIRI    EndpointIRI,
 *   bspProductUuid         BioAPI-UUID,
 *   unitEventSubscription  BOOLEAN
 * }
 * ```
 *
 * @class
 */
export class RunningBSPRemoteReference {
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
     * @summary `unitEventSubscription`.
     * @public
     * @readonly
     */
    readonly unitEventSubscription: BOOLEAN
  ) {}

  /**
   * @summary Restructures an object into a RunningBSPRemoteReference
   * @description
   *
   * This takes an `object` and converts it to a `RunningBSPRemoteReference`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `RunningBSPRemoteReference`.
   * @returns {RunningBSPRemoteReference}
   */
  public static _from_object(
    _o: {
      [_K in keyof RunningBSPRemoteReference]: RunningBSPRemoteReference[_K];
    }
  ): RunningBSPRemoteReference {
    return new RunningBSPRemoteReference(
      _o.referrerEndpointIRI,
      _o.bspProductUuid,
      _o.unitEventSubscription
    );
  }
}


/**
 * @summary The Leading Root Component Types of RunningBSPRemoteReference
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_RunningBSPRemoteReference: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'referrerEndpointIRI',
    false,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'bspProductUuid',
    false,
    $.hasTag(_TagClass.context, 1)
  ),
  new $.ComponentSpec(
    'unitEventSubscription',
    false,
    $.hasTag(_TagClass.context, 2)
  ),
];


/**
 * @summary The Trailing Root Component Types of RunningBSPRemoteReference
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_RunningBSPRemoteReference: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of RunningBSPRemoteReference
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_RunningBSPRemoteReference: $.ComponentSpec[] = [];


let _cached_decoder_for_RunningBSPRemoteReference: $.ASN1Decoder<RunningBSPRemoteReference> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) RunningBSPRemoteReference
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RunningBSPRemoteReference} The decoded data structure.
 */
export function _decode_RunningBSPRemoteReference(el: _Element): RunningBSPRemoteReference {
  if (!_cached_decoder_for_RunningBSPRemoteReference) {
    _cached_decoder_for_RunningBSPRemoteReference = function (
      el: _Element
    ): RunningBSPRemoteReference {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 3) {
        throw new _ConstructionError(
          'RunningBSPRemoteReference contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'referrerEndpointIRI';
      sequence[1].name = 'bspProductUuid';
      sequence[2].name = 'unitEventSubscription';
      let referrerEndpointIRI!: EndpointIRI;
      let bspProductUuid!: BioAPI_UUID;
      let unitEventSubscription!: BOOLEAN;
      referrerEndpointIRI = _decode_EndpointIRI(sequence[0]);
      bspProductUuid = _decode_BioAPI_UUID(sequence[1]);
      unitEventSubscription = $._decodeBoolean(sequence[2]);
      return new RunningBSPRemoteReference(
        referrerEndpointIRI,
        bspProductUuid,
        unitEventSubscription
      );
    };
  }
  return _cached_decoder_for_RunningBSPRemoteReference(el);
}


let _cached_encoder_for_RunningBSPRemoteReference: $.ASN1Encoder<RunningBSPRemoteReference> | null = null;


/**
 * @summary Encodes a(n) RunningBSPRemoteReference into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RunningBSPRemoteReference, encoded as an ASN.1 Element.
 */
export function _encode_RunningBSPRemoteReference(
  value: RunningBSPRemoteReference,
  elGetter: $.ASN1Encoder<RunningBSPRemoteReference>
): _Element {
  if (!_cached_encoder_for_RunningBSPRemoteReference) {
    _cached_encoder_for_RunningBSPRemoteReference = function (
      value: RunningBSPRemoteReference    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_EndpointIRI(
              value.referrerEndpointIRI,
              $.BER
            ),
            /* REQUIRED   */ _encode_BioAPI_UUID(value.bspProductUuid, $.BER),
            /* REQUIRED   */ $._encodeBoolean(
              value.unitEventSubscription,
              $.BER
            ),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_RunningBSPRemoteReference(value, elGetter);
}


/* eslint-enable */
