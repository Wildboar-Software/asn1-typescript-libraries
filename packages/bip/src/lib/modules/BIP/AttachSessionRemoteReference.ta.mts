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
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
  EndpointIRI,
  _decode_EndpointIRI,
  _encode_EndpointIRI,
} from '../BIP/EndpointIRI.ta.mjs';
export {
  EndpointIRI,
  _decode_EndpointIRI,
  _encode_EndpointIRI,
} from '../BIP/EndpointIRI.ta.mjs';
import {
  BioAPI_UUID,
  _decode_BioAPI_UUID,
  _encode_BioAPI_UUID,
} from '../BIP/BioAPI-UUID.ta.mjs';
export {
  BioAPI_UUID,
  _decode_BioAPI_UUID,
  _encode_BioAPI_UUID,
} from '../BIP/BioAPI-UUID.ta.mjs';
import {
  BioAPI_HANDLE,
  _decode_BioAPI_HANDLE,
  _encode_BioAPI_HANDLE,
} from '../BIP/BioAPI-HANDLE.ta.mjs';
export {
  BioAPI_HANDLE,
  _decode_BioAPI_HANDLE,
  _encode_BioAPI_HANDLE,
} from '../BIP/BioAPI-HANDLE.ta.mjs';

/* START_OF_SYMBOL_DEFINITION AttachSessionRemoteReference */
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
 * @class
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
/* END_OF_SYMBOL_DEFINITION AttachSessionRemoteReference */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AttachSessionRemoteReference */
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
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AttachSessionRemoteReference */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AttachSessionRemoteReference */
/**
 * @summary The Trailing Root Component Types of AttachSessionRemoteReference
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AttachSessionRemoteReference: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AttachSessionRemoteReference */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AttachSessionRemoteReference */
/**
 * @summary The Extension Addition Component Types of AttachSessionRemoteReference
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AttachSessionRemoteReference: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AttachSessionRemoteReference */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AttachSessionRemoteReference */
let _cached_decoder_for_AttachSessionRemoteReference: $.ASN1Decoder<AttachSessionRemoteReference> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AttachSessionRemoteReference */

/* START_OF_SYMBOL_DEFINITION _decode_AttachSessionRemoteReference */
/**
 * @summary Decodes an ASN.1 element into a(n) AttachSessionRemoteReference
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttachSessionRemoteReference} The decoded data structure.
 */
export function _decode_AttachSessionRemoteReference(el: _Element) {
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
/* END_OF_SYMBOL_DEFINITION _decode_AttachSessionRemoteReference */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AttachSessionRemoteReference */
let _cached_encoder_for_AttachSessionRemoteReference: $.ASN1Encoder<AttachSessionRemoteReference> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AttachSessionRemoteReference */

/* START_OF_SYMBOL_DEFINITION _encode_AttachSessionRemoteReference */
/**
 * @summary Encodes a(n) AttachSessionRemoteReference into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttachSessionRemoteReference, encoded as an ASN.1 Element.
 */
export function _encode_AttachSessionRemoteReference(
  value: AttachSessionRemoteReference,
  elGetter: $.ASN1Encoder<AttachSessionRemoteReference>
) {
  if (!_cached_encoder_for_AttachSessionRemoteReference) {
    _cached_encoder_for_AttachSessionRemoteReference = function (
      value: AttachSessionRemoteReference,
      elGetter: $.ASN1Encoder<AttachSessionRemoteReference>
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
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_AttachSessionRemoteReference(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AttachSessionRemoteReference */

/* eslint-enable */
