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
import {
  MemoryAddress,
  _decode_MemoryAddress,
  _encode_MemoryAddress,
} from '../BIP/MemoryAddress.ta.mjs';

/**
 * @summary RunningBSPLocalReference
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RunningBSPLocalReference ::= SEQUENCE {
 *   hostingEndpointIRI       EndpointIRI,
 *   bspProductUuid           BioAPI-UUID,
 *   useBSPAccessUuid         BOOLEAN,
 *   unitEventHandlerAddress  MemoryAddress,
 *   unitEventHandlerContext  MemoryAddress
 * }
 * ```
 *
 */
export class RunningBSPLocalReference {
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
     * @summary `unitEventHandlerAddress`.
     * @public
     * @readonly
     */
    readonly unitEventHandlerAddress: MemoryAddress,
    /**
     * @summary `unitEventHandlerContext`.
     * @public
     * @readonly
     */
    readonly unitEventHandlerContext: MemoryAddress
  ) {}

  /**
   * @summary Restructures an object into a RunningBSPLocalReference
   * @description
   *
   * This takes an `object` and converts it to a `RunningBSPLocalReference`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `RunningBSPLocalReference`.
   * @returns {RunningBSPLocalReference}
   */
  public static _from_object(
    _o: { [_K in keyof RunningBSPLocalReference]: RunningBSPLocalReference[_K] }
  ): RunningBSPLocalReference {
    return new RunningBSPLocalReference(
      _o.hostingEndpointIRI,
      _o.bspProductUuid,
      _o.useBSPAccessUuid,
      _o.unitEventHandlerAddress,
      _o.unitEventHandlerContext
    );
  }
}


/**
 * @summary The Leading Root Component Types of RunningBSPLocalReference
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_RunningBSPLocalReference: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'hostingEndpointIRI',
    false,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'bspProductUuid',
    false,
    $.hasTag(_TagClass.context, 1)
  ),
  new $.ComponentSpec(
    'useBSPAccessUuid',
    false,
    $.hasTag(_TagClass.context, 2)
  ),
  new $.ComponentSpec(
    'unitEventHandlerAddress',
    false,
    $.hasTag(_TagClass.context, 3)
  ),
  new $.ComponentSpec(
    'unitEventHandlerContext',
    false,
    $.hasTag(_TagClass.context, 4)
  ),
];


/**
 * @summary The Trailing Root Component Types of RunningBSPLocalReference
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_RunningBSPLocalReference: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of RunningBSPLocalReference
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_RunningBSPLocalReference: $.ComponentSpec[] = [];


let _cached_decoder_for_RunningBSPLocalReference: $.ASN1Decoder<RunningBSPLocalReference> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) RunningBSPLocalReference
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RunningBSPLocalReference} The decoded data structure.
 */
export function _decode_RunningBSPLocalReference(el: _Element): RunningBSPLocalReference {
  if (!_cached_decoder_for_RunningBSPLocalReference) {
    _cached_decoder_for_RunningBSPLocalReference = function (
      el: _Element
    ): RunningBSPLocalReference {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 5) {
        throw new _ConstructionError(
          'RunningBSPLocalReference contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'hostingEndpointIRI';
      sequence[1].name = 'bspProductUuid';
      sequence[2].name = 'useBSPAccessUuid';
      sequence[3].name = 'unitEventHandlerAddress';
      sequence[4].name = 'unitEventHandlerContext';
      let hostingEndpointIRI!: EndpointIRI;
      let bspProductUuid!: BioAPI_UUID;
      let useBSPAccessUuid!: BOOLEAN;
      let unitEventHandlerAddress!: MemoryAddress;
      let unitEventHandlerContext!: MemoryAddress;
      hostingEndpointIRI = _decode_EndpointIRI(sequence[0]);
      bspProductUuid = _decode_BioAPI_UUID(sequence[1]);
      useBSPAccessUuid = $._decodeBoolean(sequence[2]);
      unitEventHandlerAddress = _decode_MemoryAddress(sequence[3]);
      unitEventHandlerContext = _decode_MemoryAddress(sequence[4]);
      return new RunningBSPLocalReference(
        hostingEndpointIRI,
        bspProductUuid,
        useBSPAccessUuid,
        unitEventHandlerAddress,
        unitEventHandlerContext
      );
    };
  }
  return _cached_decoder_for_RunningBSPLocalReference(el);
}


let _cached_encoder_for_RunningBSPLocalReference: $.ASN1Encoder<RunningBSPLocalReference> | null = null;


/**
 * @summary Encodes a(n) RunningBSPLocalReference into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RunningBSPLocalReference, encoded as an ASN.1 Element.
 */
export function _encode_RunningBSPLocalReference(
  value: RunningBSPLocalReference,
  elGetter: $.ASN1Encoder<RunningBSPLocalReference>
): _Element {
  if (!_cached_encoder_for_RunningBSPLocalReference) {
    _cached_encoder_for_RunningBSPLocalReference = function (
      value: RunningBSPLocalReference    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_EndpointIRI(
              value.hostingEndpointIRI,
              $.BER
            ),
            /* REQUIRED   */ _encode_BioAPI_UUID(value.bspProductUuid, $.BER),
            /* REQUIRED   */ $._encodeBoolean(value.useBSPAccessUuid, $.BER),
            /* REQUIRED   */ _encode_MemoryAddress(
              value.unitEventHandlerAddress,
              $.BER
            ),
            /* REQUIRED   */ _encode_MemoryAddress(
              value.unitEventHandlerContext,
              $.BER
            ),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_RunningBSPLocalReference(value, elGetter);
}


/* eslint-enable */
