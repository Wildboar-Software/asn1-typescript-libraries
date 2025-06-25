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
import { noInvocationId } from '../SeseAPDUs/noInvocationId.va.mjs';
import {
  SEerror,
  _decode_SEerror,
  _encode_SEerror,
} from '../SeseAPDUs/SEerror.ta.mjs';

/**
 * @summary SEUAbort
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SEUAbort{SECURITY-EXCHANGE:ValidSEs, InvocationId:InvocationIdSet} ::= SEQUENCE {
 *   invocationId
 *     InvocationId(InvocationIdSet)
 *       (CONSTRAINED BY {-- Must be the same as the--
 *       --  invocationId on an active or just-completed--
 *
 *          --  security exchange -- }) DEFAULT noInvocationId,
 *   itemIdentifier
 *     SECURITY-EXCHANGE.&SE-Items.&itemId({ValidSEs.&SE-Items})
 *       OPTIONAL,
 *   --  This component will only be present
 *   --  when the Abort is generated subsequent
 *   --  to receipt of a SETransfer APDU.
 *   errors          SEQUENCE OF SEerror{{ValidSEs}} OPTIONAL
 *   --  needed to handle multiple error codes
 * }
 * ```
 *
 * @class
 */
export class SEUAbort {
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
     * @summary `errors`.
     * @public
     * @readonly
     */
    readonly errors: OPTIONAL<SEerror[]>
  ) {}

  /**
   * @summary Restructures an object into a SEUAbort
   * @description
   *
   * This takes an `object` and converts it to a `SEUAbort`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `SEUAbort`.
   * @returns {SEUAbort}
   */
  public static _from_object(
    _o: { [_K in keyof SEUAbort]: SEUAbort[_K] }
  ): SEUAbort {
    return new SEUAbort(_o.invocationId, _o.itemIdentifier, _o.errors);
  }

  /**
   * @summary Getter that returns the default value for `invocationId`.
   * @public
   * @static
   * @method
   */
  public static get _default_value_for_invocationId() {
    return noInvocationId;
  }
}


/**
 * @summary The Leading Root Component Types of SEUAbort
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SEUAbort: $.ComponentSpec[] = [
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
    'errors',
    true,
    $.hasTag(_TagClass.context, 2)
  ),
];


/**
 * @summary The Trailing Root Component Types of SEUAbort
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SEUAbort: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of SEUAbort
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SEUAbort: $.ComponentSpec[] = [];


let _cached_decoder_for_SEUAbort: $.ASN1Decoder<SEUAbort> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) SEUAbort
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SEUAbort} The decoded data structure.
 */
export function _decode_SEUAbort(el: _Element): SEUAbort {
  if (!_cached_decoder_for_SEUAbort) {
    _cached_decoder_for_SEUAbort = function (el: _Element): SEUAbort {
      let invocationId: OPTIONAL<InvocationId> =
        SEUAbort._default_value_for_invocationId;
      let itemIdentifier: OPTIONAL<_Element>;
      let errors: OPTIONAL<SEerror[]>;
      const callbacks: $.DecodingMap = {
        invocationId: (_el: _Element): void => {
          invocationId = _decode_InvocationId(_el);
        },
        itemIdentifier: (_el: _Element): void => {
          itemIdentifier = $._decodeAny(_el);
        },
        errors: (_el: _Element): void => {
          errors = $._decodeSequenceOf<SEerror>(() => _decode_SEerror)(_el);
        },
      };
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_SEUAbort,
        _extension_additions_list_spec_for_SEUAbort,
        _root_component_type_list_2_spec_for_SEUAbort,
        undefined
      );
      return new SEUAbort (
        invocationId,
        itemIdentifier,
        errors
      );
    };
  }
  return _cached_decoder_for_SEUAbort(el);
}


let _cached_encoder_for_SEUAbort: $.ASN1Encoder<SEUAbort> | null = null;


/**
 * @summary Encodes a(n) SEUAbort into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SEUAbort, encoded as an ASN.1 Element.
 */
export function _encode_SEUAbort(
  value: SEUAbort,
  elGetter: $.ASN1Encoder<SEUAbort>
): _Element {
  if (!_cached_encoder_for_SEUAbort) {
    _cached_encoder_for_SEUAbort = function (
      value: SEUAbort    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* IF_DEFAULT */ value.invocationId === undefined ||
            $.deepEq(
              value.invocationId,
              SEUAbort._default_value_for_invocationId
            )
              ? undefined
              : _encode_InvocationId(value.invocationId, $.BER),
            /* IF_ABSENT  */ value.itemIdentifier === undefined
              ? undefined
              : $._encodeAny(value.itemIdentifier, $.BER),
            /* IF_ABSENT  */ value.errors === undefined
              ? undefined
              : $._encodeSequenceOf<SEerror>(() => _encode_SEerror, $.BER)(
                  value.errors,
                  $.BER
                ),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_SEUAbort(value, elGetter);
}


/* eslint-enable */
