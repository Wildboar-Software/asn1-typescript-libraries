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
  InvocationId,
  _decode_InvocationId,
  _encode_InvocationId,
} from '../SeseAPDUs/InvocationId.ta.mjs';
import { noInvocationId } from '../SeseAPDUs/noInvocationId.va.mjs';
import {
    Identifier,
    _decode_Identifier,
    _encode_Identifier,
} from '../Notation/Identifier.ta.mjs';

/* START_OF_SYMBOL_DEFINITION SETransfer */
/**
 * @summary SETransfer
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SETransfer{SECURITY-EXCHANGE:ValidSEs, InvocationId:InvocationIdSet} ::= SEQUENCE {
 *   seIdentifier    SECURITY-EXCHANGE.&sE-Identifier({ValidSEs}),
 *   -- This identifies one of the security-
 *   -- exchanges supported by the particular SESE
 *   -- abstract syntax
 *   itemIdentifier
 *     SECURITY-EXCHANGE.&SE-Items.&itemId({ValidSEs}{@seIdentifier}),
 *   -- This identifies one of the security-
 *   -- exchange-items of the security exchange
 *   -- indicated by "seIdentifier"
 *   seItem
 *     SECURITY-EXCHANGE.&SE-Items.&ItemType
 *       ({ValidSEs}{@seIdentifier, @itemIdentifier}),
 *   invocationId
 *     InvocationId(InvocationIdSet)
 *       (CONSTRAINED BY {-- Must be the same as the--
 *       -- invocationId on an active security exchange--
 *
 *          -- if start flag is not true -- }) DEFAULT noInvocationId,
 *   startFlag       BOOLEAN DEFAULT FALSE,
 *   -- This field is set only as the first security-
 *   -- exchange-item of a security-exchange is
 *   -- transferred.
 *   endFlag         BOOLEAN DEFAULT FALSE -- This field is set as the last security-exchange-
 * -- item of a security-exchange is transferred. It is
 * -- needed to accommodate those mechanisms requiring
 * -- n exchanges, where n is not known a priori
 * }
 * ```
 *
 * @class
 */
export class SETransfer {
  constructor(
    /**
     * @summary `seIdentifier`.
     * @public
     * @readonly
     */
    readonly seIdentifier: Identifier,
    /**
     * @summary `itemIdentifier`.
     * @public
     * @readonly
     */
    readonly itemIdentifier: _Element,
    /**
     * @summary `seItem`.
     * @public
     * @readonly
     */
    readonly seItem: _Element,
    /**
     * @summary `invocationId`.
     * @public
     * @readonly
     */
    readonly invocationId: OPTIONAL<InvocationId>,
    /**
     * @summary `startFlag`.
     * @public
     * @readonly
     */
    readonly startFlag: OPTIONAL<BOOLEAN>,
    /**
     * @summary `endFlag`.
     * @public
     * @readonly
     */
    readonly endFlag: OPTIONAL<BOOLEAN>
  ) {}

  /**
   * @summary Restructures an object into a SETransfer
   * @description
   *
   * This takes an `object` and converts it to a `SETransfer`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `SETransfer`.
   * @returns {SETransfer}
   */
  public static _from_object(
    _o: { [_K in keyof SETransfer]: SETransfer[_K] }
  ): SETransfer {
    return new SETransfer(
      _o.seIdentifier,
      _o.itemIdentifier,
      _o.seItem,
      _o.invocationId,
      _o.startFlag,
      _o.endFlag
    );
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
  /**
   * @summary Getter that returns the default value for `startFlag`.
   * @public
   * @static
   * @method
   */
  public static get _default_value_for_startFlag() {
    return false;
  }
  /**
   * @summary Getter that returns the default value for `endFlag`.
   * @public
   * @static
   * @method
   */
  public static get _default_value_for_endFlag() {
    return false;
  }
}
/* END_OF_SYMBOL_DEFINITION SETransfer */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SETransfer */
/**
 * @summary The Leading Root Component Types of SETransfer
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SETransfer: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'seIdentifier',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'itemIdentifier',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'seItem',
    false,
    $.hasTag(_TagClass.context, 2),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'invocationId',
    true,
    $.hasTag(_TagClass.context, 3),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'startFlag',
    true,
    $.hasTag(_TagClass.context, 4),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'endFlag',
    true,
    $.hasTag(_TagClass.context, 5),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SETransfer */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SETransfer */
/**
 * @summary The Trailing Root Component Types of SETransfer
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SETransfer: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SETransfer */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SETransfer */
/**
 * @summary The Extension Addition Component Types of SETransfer
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SETransfer: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SETransfer */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SETransfer */
let _cached_decoder_for_SETransfer: $.ASN1Decoder<SETransfer> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SETransfer */

/* START_OF_SYMBOL_DEFINITION _decode_SETransfer */
/**
 * @summary Decodes an ASN.1 element into a(n) SETransfer
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SETransfer} The decoded data structure.
 */
export function _decode_SETransfer(el: _Element) {
  if (!_cached_decoder_for_SETransfer) {
    _cached_decoder_for_SETransfer = function (el: _Element): SETransfer {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let seIdentifier!: Identifier;
      let itemIdentifier!: _Element;
      let seItem!: _Element;
      let invocationId: OPTIONAL<InvocationId> =
        SETransfer._default_value_for_invocationId;
      let startFlag: OPTIONAL<BOOLEAN> =
        SETransfer._default_value_for_startFlag;
      let endFlag: OPTIONAL<BOOLEAN> = SETransfer._default_value_for_endFlag;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        seIdentifier: (_el: _Element): void => {
          seIdentifier = _decode_Identifier(_el);
        },
        itemIdentifier: (_el: _Element): void => {
          itemIdentifier = $._decodeAny(_el);
        },
        seItem: (_el: _Element): void => {
          seItem = $._decodeAny(_el);
        },
        invocationId: (_el: _Element): void => {
          invocationId = _decode_InvocationId(_el);
        },
        startFlag: (_el: _Element): void => {
          startFlag = $._decodeBoolean(_el);
        },
        endFlag: (_el: _Element): void => {
          endFlag = $._decodeBoolean(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_SETransfer,
        _extension_additions_list_spec_for_SETransfer,
        _root_component_type_list_2_spec_for_SETransfer,
        undefined
      );
      return new SETransfer /* SEQUENCE_CONSTRUCTOR_CALL */(
        seIdentifier,
        itemIdentifier,
        seItem,
        invocationId,
        startFlag,
        endFlag
      );
    };
  }
  return _cached_decoder_for_SETransfer(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SETransfer */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SETransfer */
let _cached_encoder_for_SETransfer: $.ASN1Encoder<SETransfer> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SETransfer */

/* START_OF_SYMBOL_DEFINITION _encode_SETransfer */
/**
 * @summary Encodes a(n) SETransfer into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SETransfer, encoded as an ASN.1 Element.
 */
export function _encode_SETransfer(
  value: SETransfer,
  elGetter: $.ASN1Encoder<SETransfer>
) {
  if (!_cached_encoder_for_SETransfer) {
    _cached_encoder_for_SETransfer = function (
      value: SETransfer    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_Identifier(value.seIdentifier, $.BER),
            /* REQUIRED   */ $._encodeAny(value.itemIdentifier, $.BER),
            /* REQUIRED   */ $._encodeAny(value.seItem, $.BER),
            /* IF_DEFAULT */ value.invocationId === undefined ||
            $.deepEq(
              value.invocationId,
              SETransfer._default_value_for_invocationId
            )
              ? undefined
              : _encode_InvocationId(value.invocationId, $.BER),
            /* IF_DEFAULT */ value.startFlag === undefined ||
            $.deepEq(value.startFlag, SETransfer._default_value_for_startFlag)
              ? undefined
              : $._encodeBoolean(value.startFlag, $.BER),
            /* IF_DEFAULT */ value.endFlag === undefined ||
            $.deepEq(value.endFlag, SETransfer._default_value_for_endFlag)
              ? undefined
              : $._encodeBoolean(value.endFlag, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_SETransfer(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SETransfer */

/* eslint-enable */
