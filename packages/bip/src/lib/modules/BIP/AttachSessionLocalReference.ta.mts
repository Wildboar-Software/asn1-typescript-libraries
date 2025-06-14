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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
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
/* START_OF_SYMBOL_DEFINITION AttachSessionLocalReference */
/**
 * @summary AttachSessionLocalReference
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttachSessionLocalReference ::= SEQUENCE {
 *   hostingEndpointIRI  EndpointIRI,
 *   bspProductUuid      BioAPI-UUID,
 *   useBSPAccessUuid    BOOLEAN,
 *   originalBSPHandle   BioAPI-HANDLE,
 *   localBSPHandle      BioAPI-HANDLE
 * }
 * ```
 *
 * @class
 */
export class AttachSessionLocalReference {
  constructor(
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
    readonly originalBSPHandle: BioAPI_HANDLE,
    /**
     * @summary `localBSPHandle`.
     * @public
     * @readonly
     */
    readonly localBSPHandle: BioAPI_HANDLE
  ) {}

  /**
   * @summary Restructures an object into a AttachSessionLocalReference
   * @description
   *
   * This takes an `object` and converts it to a `AttachSessionLocalReference`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `AttachSessionLocalReference`.
   * @returns {AttachSessionLocalReference}
   */
  public static _from_object(
    _o: {
      [_K in keyof AttachSessionLocalReference]: AttachSessionLocalReference[_K];
    }
  ): AttachSessionLocalReference {
    return new AttachSessionLocalReference(
      _o.hostingEndpointIRI,
      _o.bspProductUuid,
      _o.useBSPAccessUuid,
      _o.originalBSPHandle,
      _o.localBSPHandle
    );
  }
}
/* END_OF_SYMBOL_DEFINITION AttachSessionLocalReference */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AttachSessionLocalReference */
/**
 * @summary The Leading Root Component Types of AttachSessionLocalReference
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AttachSessionLocalReference: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'hostingEndpointIRI',
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
    'useBSPAccessUuid',
    false,
    $.hasTag(_TagClass.context, 2),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'originalBSPHandle',
    false,
    $.hasTag(_TagClass.context, 3),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'localBSPHandle',
    false,
    $.hasTag(_TagClass.context, 4),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AttachSessionLocalReference */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AttachSessionLocalReference */
/**
 * @summary The Trailing Root Component Types of AttachSessionLocalReference
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AttachSessionLocalReference: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AttachSessionLocalReference */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AttachSessionLocalReference */
/**
 * @summary The Extension Addition Component Types of AttachSessionLocalReference
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AttachSessionLocalReference: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AttachSessionLocalReference */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AttachSessionLocalReference */
let _cached_decoder_for_AttachSessionLocalReference: $.ASN1Decoder<AttachSessionLocalReference> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AttachSessionLocalReference */

/* START_OF_SYMBOL_DEFINITION _decode_AttachSessionLocalReference */
/**
 * @summary Decodes an ASN.1 element into a(n) AttachSessionLocalReference
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttachSessionLocalReference} The decoded data structure.
 */
export function _decode_AttachSessionLocalReference(el: _Element) {
  if (!_cached_decoder_for_AttachSessionLocalReference) {
    _cached_decoder_for_AttachSessionLocalReference = function (
      el: _Element
    ): AttachSessionLocalReference {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 5) {
        throw new _ConstructionError(
          'AttachSessionLocalReference contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'hostingEndpointIRI';
      sequence[1].name = 'bspProductUuid';
      sequence[2].name = 'useBSPAccessUuid';
      sequence[3].name = 'originalBSPHandle';
      sequence[4].name = 'localBSPHandle';
      let hostingEndpointIRI!: EndpointIRI;
      let bspProductUuid!: BioAPI_UUID;
      let useBSPAccessUuid!: BOOLEAN;
      let originalBSPHandle!: BioAPI_HANDLE;
      let localBSPHandle!: BioAPI_HANDLE;
      hostingEndpointIRI = _decode_EndpointIRI(sequence[0]);
      bspProductUuid = _decode_BioAPI_UUID(sequence[1]);
      useBSPAccessUuid = $._decodeBoolean(sequence[2]);
      originalBSPHandle = _decode_BioAPI_HANDLE(sequence[3]);
      localBSPHandle = _decode_BioAPI_HANDLE(sequence[4]);
      return new AttachSessionLocalReference(
        hostingEndpointIRI,
        bspProductUuid,
        useBSPAccessUuid,
        originalBSPHandle,
        localBSPHandle
      );
    };
  }
  return _cached_decoder_for_AttachSessionLocalReference(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AttachSessionLocalReference */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AttachSessionLocalReference */
let _cached_encoder_for_AttachSessionLocalReference: $.ASN1Encoder<AttachSessionLocalReference> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AttachSessionLocalReference */

/* START_OF_SYMBOL_DEFINITION _encode_AttachSessionLocalReference */
/**
 * @summary Encodes a(n) AttachSessionLocalReference into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttachSessionLocalReference, encoded as an ASN.1 Element.
 */
export function _encode_AttachSessionLocalReference(
  value: AttachSessionLocalReference,
  elGetter: $.ASN1Encoder<AttachSessionLocalReference>
) {
  if (!_cached_encoder_for_AttachSessionLocalReference) {
    _cached_encoder_for_AttachSessionLocalReference = function (
      value: AttachSessionLocalReference    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_EndpointIRI(
              value.hostingEndpointIRI,
              $.BER
            ),
            /* REQUIRED   */ _encode_BioAPI_UUID(value.bspProductUuid, $.BER),
            /* REQUIRED   */ $._encodeBoolean(value.useBSPAccessUuid, $.BER),
            /* REQUIRED   */ _encode_BioAPI_HANDLE(
              value.originalBSPHandle,
              $.BER
            ),
            /* REQUIRED   */ _encode_BioAPI_HANDLE(value.localBSPHandle, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_AttachSessionLocalReference(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AttachSessionLocalReference */

/* eslint-enable */
