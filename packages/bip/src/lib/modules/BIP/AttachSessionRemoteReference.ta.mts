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
import {
  BioAPI_HANDLE,
  _decode_BioAPI_HANDLE,
  _encode_BioAPI_HANDLE,
} from '../BIP/BioAPI-HANDLE.ta.mjs';

/**
 * @summary AttachSessionRemoteReference
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttachSessionRemoteReference ::= SEQUENCE {
 *   referrerEndpointIRI  EndpointIRI,
 *   bspProductUuid       BioAPI-UUID,
 *   originalBSPHandle    BioAPI-HANDLE
 * }
 * ```
 *
 */
export class AttachSessionRemoteReference {
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
    readonly originalBSPHandle: BioAPI_HANDLE
  ) {}

  /**
   * @summary Restructures an object into a AttachSessionRemoteReference
   * @description
   *
   * This takes an `object` and converts it to a `AttachSessionRemoteReference`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `AttachSessionRemoteReference`.
   * @returns {AttachSessionRemoteReference}
   */
  public static _from_object(
    _o: {
      [_K in keyof AttachSessionRemoteReference]: AttachSessionRemoteReference[_K];
    }
  ): AttachSessionRemoteReference {
    return new AttachSessionRemoteReference(
      _o.referrerEndpointIRI,
      _o.bspProductUuid,
      _o.originalBSPHandle
    );
  }
}


/**
 * @summary The Leading Root Component Types of AttachSessionRemoteReference
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AttachSessionRemoteReference: $.ComponentSpec[] = [
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
    'originalBSPHandle',
    false,
    $.hasTag(_TagClass.context, 2)
  ),
];


/**
 * @summary The Trailing Root Component Types of AttachSessionRemoteReference
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AttachSessionRemoteReference: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of AttachSessionRemoteReference
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AttachSessionRemoteReference: $.ComponentSpec[] = [];


let _cached_decoder_for_AttachSessionRemoteReference: $.ASN1Decoder<AttachSessionRemoteReference> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) AttachSessionRemoteReference
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttachSessionRemoteReference} The decoded data structure.
 */
export function _decode_AttachSessionRemoteReference(el: _Element): AttachSessionRemoteReference {
  if (!_cached_decoder_for_AttachSessionRemoteReference) {
    _cached_decoder_for_AttachSessionRemoteReference = function (
      el: _Element
    ): AttachSessionRemoteReference {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 3) {
        throw new _ConstructionError(
          'AttachSessionRemoteReference contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'referrerEndpointIRI';
      sequence[1].name = 'bspProductUuid';
      sequence[2].name = 'originalBSPHandle';
      let referrerEndpointIRI!: EndpointIRI;
      let bspProductUuid!: BioAPI_UUID;
      let originalBSPHandle!: BioAPI_HANDLE;
      referrerEndpointIRI = _decode_EndpointIRI(sequence[0]);
      bspProductUuid = _decode_BioAPI_UUID(sequence[1]);
      originalBSPHandle = _decode_BioAPI_HANDLE(sequence[2]);
      return new AttachSessionRemoteReference(
        referrerEndpointIRI,
        bspProductUuid,
        originalBSPHandle
      );
    };
  }
  return _cached_decoder_for_AttachSessionRemoteReference(el);
}


let _cached_encoder_for_AttachSessionRemoteReference: $.ASN1Encoder<AttachSessionRemoteReference> | null = null;


/**
 * @summary Encodes a(n) AttachSessionRemoteReference into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttachSessionRemoteReference, encoded as an ASN.1 Element.
 */
export function _encode_AttachSessionRemoteReference(
  value: AttachSessionRemoteReference,
  elGetter: $.ASN1Encoder<AttachSessionRemoteReference>
): _Element {
  if (!_cached_encoder_for_AttachSessionRemoteReference) {
    _cached_encoder_for_AttachSessionRemoteReference = function (
      value: AttachSessionRemoteReference    ): _Element {
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
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_AttachSessionRemoteReference(value, elGetter);
}


/* eslint-enable */
