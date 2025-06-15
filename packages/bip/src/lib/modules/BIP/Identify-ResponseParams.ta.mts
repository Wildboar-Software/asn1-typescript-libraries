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
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
  BioAPI_CANDIDATE,
  _decode_BioAPI_CANDIDATE,
  _encode_BioAPI_CANDIDATE,
} from '../BIP/BioAPI-CANDIDATE.ta.mjs';
import {
  BioAPI_BIR_HANDLE,
  _decode_BioAPI_BIR_HANDLE,
  _encode_BioAPI_BIR_HANDLE,
} from '../BIP/BioAPI-BIR-HANDLE.ta.mjs';

/**
 * @summary Identify_ResponseParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Identify-ResponseParams ::= SEQUENCE {
 *   candidates
 *     SEQUENCE (SIZE (0..max-unsigned-int)) OF candidate BioAPI-CANDIDATE,
 *   auditData   BioAPI-BIR-HANDLE OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class Identify_ResponseParams {
  constructor(
    /**
     * @summary `candidates`.
     * @public
     * @readonly
     */
    readonly candidates: BioAPI_CANDIDATE[],
    /**
     * @summary `auditData`.
     * @public
     * @readonly
     */
    readonly auditData: OPTIONAL<BioAPI_BIR_HANDLE>
  ) {}

  /**
   * @summary Restructures an object into a Identify_ResponseParams
   * @description
   *
   * This takes an `object` and converts it to a `Identify_ResponseParams`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `Identify_ResponseParams`.
   * @returns {Identify_ResponseParams}
   */
  public static _from_object(
    _o: { [_K in keyof Identify_ResponseParams]: Identify_ResponseParams[_K] }
  ): Identify_ResponseParams {
    return new Identify_ResponseParams(_o.candidates, _o.auditData);
  }
}


/**
 * @summary The Leading Root Component Types of Identify_ResponseParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Identify_ResponseParams: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'candidates',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'auditData',
    true,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
];


/**
 * @summary The Trailing Root Component Types of Identify_ResponseParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Identify_ResponseParams: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of Identify_ResponseParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Identify_ResponseParams: $.ComponentSpec[] = [];


let _cached_decoder_for_Identify_ResponseParams: $.ASN1Decoder<Identify_ResponseParams> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Identify_ResponseParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Identify_ResponseParams} The decoded data structure.
 */
export function _decode_Identify_ResponseParams(el: _Element) {
  if (!_cached_decoder_for_Identify_ResponseParams) {
    _cached_decoder_for_Identify_ResponseParams = function (
      el: _Element
    ): Identify_ResponseParams {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let candidates!: BioAPI_CANDIDATE[];
      let auditData: OPTIONAL<BioAPI_BIR_HANDLE>;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        candidates: (_el: _Element): void => {
          candidates = $._decodeSequenceOf<BioAPI_CANDIDATE>(
            () => _decode_BioAPI_CANDIDATE
          )(_el);
        },
        auditData: (_el: _Element): void => {
          auditData = _decode_BioAPI_BIR_HANDLE(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_Identify_ResponseParams,
        _extension_additions_list_spec_for_Identify_ResponseParams,
        _root_component_type_list_2_spec_for_Identify_ResponseParams,
        undefined
      );
      return new Identify_ResponseParams /* SEQUENCE_CONSTRUCTOR_CALL */(
        candidates,
        auditData
      );
    };
  }
  return _cached_decoder_for_Identify_ResponseParams(el);
}


let _cached_encoder_for_Identify_ResponseParams: $.ASN1Encoder<Identify_ResponseParams> | null = null;


/**
 * @summary Encodes a(n) Identify_ResponseParams into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Identify_ResponseParams, encoded as an ASN.1 Element.
 */
export function _encode_Identify_ResponseParams(
  value: Identify_ResponseParams,
  elGetter: $.ASN1Encoder<Identify_ResponseParams>
) {
  if (!_cached_encoder_for_Identify_ResponseParams) {
    _cached_encoder_for_Identify_ResponseParams = function (
      value: Identify_ResponseParams    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ $._encodeSequenceOf<BioAPI_CANDIDATE>(
              () => _encode_BioAPI_CANDIDATE,
              $.BER
            )(value.candidates, $.BER),
            /* IF_ABSENT  */ value.auditData === undefined
              ? undefined
              : _encode_BioAPI_BIR_HANDLE(value.auditData, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_Identify_ResponseParams(value, elGetter);
}


/* eslint-enable */
