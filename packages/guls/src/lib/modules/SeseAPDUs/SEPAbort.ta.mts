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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
  InvocationId,
  _decode_InvocationId,
  _encode_InvocationId,
} from '../SeseAPDUs/InvocationId.ta.mjs';
import {
  ProblemCode,
  _decode_ProblemCode,
  _encode_ProblemCode,
} from '../SeseAPDUs/ProblemCode.ta.mjs';

/**
 * @summary SEPAbort
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SEPAbort{SECURITY-EXCHANGE:ValidSEs, InvocationId:InvocationIdSet} ::= SEQUENCE {
 *   invocationId    InvocationId(InvocationIdSet) OPTIONAL,
 *   itemIdentifier
 *     SECURITY-EXCHANGE.&SE-Items.&itemId({ValidSEs.&SE-Items})
 *       OPTIONAL,
 *   --  This component will only be present
 *   --  when the Abort is generated subsequent
 *   --  to receipt of a SETransfer APDU.
 *   problemCode     ProblemCode
 * }
 * ```
 *
 * @class
 */
export class SEPAbort {
  constructor(
    /**
     * @summary `invocationId`.
     * @public
     * @readonly
     */
    readonly invocationId: OPTIONAL<InvocationId>,
    /**
     * @summary `itemIdentifier`.
     * @public
     * @readonly
     */
    readonly itemIdentifier: OPTIONAL<_Element>,
    /**
     * @summary `problemCode`.
     * @public
     * @readonly
     */
    readonly problemCode: ProblemCode
  ) {}

  /**
   * @summary Restructures an object into a SEPAbort
   * @description
   *
   * This takes an `object` and converts it to a `SEPAbort`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `SEPAbort`.
   * @returns {SEPAbort}
   */
  public static _from_object(
    _o: { [_K in keyof SEPAbort]: SEPAbort[_K] }
  ): SEPAbort {
    return new SEPAbort(_o.invocationId, _o.itemIdentifier, _o.problemCode);
  }
}


/**
 * @summary The Leading Root Component Types of SEPAbort
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SEPAbort: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'invocationId',
    true,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'itemIdentifier',
    true,
    $.hasTag(_TagClass.context, 1)
  ),
  new $.ComponentSpec(
    'problemCode',
    false,
    $.hasTag(_TagClass.context, 2)
  ),
];


/**
 * @summary The Trailing Root Component Types of SEPAbort
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SEPAbort: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of SEPAbort
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SEPAbort: $.ComponentSpec[] = [];


let _cached_decoder_for_SEPAbort: $.ASN1Decoder<SEPAbort> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) SEPAbort
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SEPAbort} The decoded data structure.
 */
export function _decode_SEPAbort(el: _Element): SEPAbort {
  if (!_cached_decoder_for_SEPAbort) {
    _cached_decoder_for_SEPAbort = function (el: _Element): SEPAbort {
      let invocationId: OPTIONAL<InvocationId>;
      let itemIdentifier: OPTIONAL<_Element>;
      let problemCode!: ProblemCode;
      const callbacks: $.DecodingMap = {
        invocationId: (_el: _Element): void => {
          invocationId = _decode_InvocationId(_el);
        },
        itemIdentifier: (_el: _Element): void => {
          itemIdentifier = $._decodeAny(_el);
        },
        problemCode: (_el: _Element): void => {
          problemCode = _decode_ProblemCode(_el);
        },
      };
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_SEPAbort,
        _extension_additions_list_spec_for_SEPAbort,
        _root_component_type_list_2_spec_for_SEPAbort,
        undefined
      );
      return new SEPAbort (
        invocationId,
        itemIdentifier,
        problemCode
      );
    };
  }
  return _cached_decoder_for_SEPAbort(el);
}


let _cached_encoder_for_SEPAbort: $.ASN1Encoder<SEPAbort> | null = null;


/**
 * @summary Encodes a(n) SEPAbort into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SEPAbort, encoded as an ASN.1 Element.
 */
export function _encode_SEPAbort(
  value: SEPAbort,
  elGetter: $.ASN1Encoder<SEPAbort>
): _Element {
  if (!_cached_encoder_for_SEPAbort) {
    _cached_encoder_for_SEPAbort = function (
      value: SEPAbort    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* IF_ABSENT  */ value.invocationId === undefined
              ? undefined
              : _encode_InvocationId(value.invocationId, $.BER),
            /* IF_ABSENT  */ value.itemIdentifier === undefined
              ? undefined
              : $._encodeAny(value.itemIdentifier, $.BER),
            /* REQUIRED   */ _encode_ProblemCode(value.problemCode, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_SEPAbort(value, elGetter);
}


/* eslint-enable */
