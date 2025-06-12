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

/* START_OF_SYMBOL_DEFINITION RunningBSPRemoteReference */
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
/* END_OF_SYMBOL_DEFINITION RunningBSPRemoteReference */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_RunningBSPRemoteReference */
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
    'unitEventSubscription',
    false,
    $.hasTag(_TagClass.context, 2),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_RunningBSPRemoteReference */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_RunningBSPRemoteReference */
/**
 * @summary The Trailing Root Component Types of RunningBSPRemoteReference
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_RunningBSPRemoteReference: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_RunningBSPRemoteReference */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_RunningBSPRemoteReference */
/**
 * @summary The Extension Addition Component Types of RunningBSPRemoteReference
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_RunningBSPRemoteReference: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_RunningBSPRemoteReference */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RunningBSPRemoteReference */
let _cached_decoder_for_RunningBSPRemoteReference: $.ASN1Decoder<RunningBSPRemoteReference> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RunningBSPRemoteReference */

/* START_OF_SYMBOL_DEFINITION _decode_RunningBSPRemoteReference */
/**
 * @summary Decodes an ASN.1 element into a(n) RunningBSPRemoteReference
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RunningBSPRemoteReference} The decoded data structure.
 */
export function _decode_RunningBSPRemoteReference(el: _Element) {
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
/* END_OF_SYMBOL_DEFINITION _decode_RunningBSPRemoteReference */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RunningBSPRemoteReference */
let _cached_encoder_for_RunningBSPRemoteReference: $.ASN1Encoder<RunningBSPRemoteReference> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RunningBSPRemoteReference */

/* START_OF_SYMBOL_DEFINITION _encode_RunningBSPRemoteReference */
/**
 * @summary Encodes a(n) RunningBSPRemoteReference into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RunningBSPRemoteReference, encoded as an ASN.1 Element.
 */
export function _encode_RunningBSPRemoteReference(
  value: RunningBSPRemoteReference,
  elGetter: $.ASN1Encoder<RunningBSPRemoteReference>
) {
  if (!_cached_encoder_for_RunningBSPRemoteReference) {
    _cached_encoder_for_RunningBSPRemoteReference = function (
      value: RunningBSPRemoteReference,
      elGetter: $.ASN1Encoder<RunningBSPRemoteReference>
    ): _Element {
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

/* END_OF_SYMBOL_DEFINITION _encode_RunningBSPRemoteReference */

/* eslint-enable */
