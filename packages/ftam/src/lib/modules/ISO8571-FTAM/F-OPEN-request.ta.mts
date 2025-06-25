/* eslint-disable */
import {
  OPTIONAL,
  BOOLEAN,
  INTEGER,
  TRUE_BIT,
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
  F_OPEN_request_processing_mode,
  F_OPEN_request_processing_mode_f_read /* IMPORTED_LONG_NAMED_BIT */,
  _decode_F_OPEN_request_processing_mode,
  _encode_F_OPEN_request_processing_mode,
} from '../ISO8571-FTAM/F-OPEN-request-processing-mode.ta.mjs';
import {
  F_OPEN_request_contents_type,
  _decode_F_OPEN_request_contents_type,
  _encode_F_OPEN_request_contents_type,
} from '../ISO8571-FTAM/F-OPEN-request-contents-type.ta.mjs';
import {
  Concurrency_Control,
  _decode_Concurrency_Control,
  _encode_Concurrency_Control,
} from '../ISO8571-FTAM/Concurrency-Control.ta.mjs';
import {
  Shared_ASE_Information,
  _decode_Shared_ASE_Information,
  _encode_Shared_ASE_Information,
} from '../ISO8571-FTAM/Shared-ASE-Information.ta.mjs';
import {
  Activity_Identifier,
  _decode_Activity_Identifier,
  _encode_Activity_Identifier,
} from '../ISO8571-FTAM/Activity-Identifier.ta.mjs';
import {
  F_OPEN_request_recovery_mode,
  none /* IMPORTED_SHORT_NAMED_INTEGER */,
  _decode_F_OPEN_request_recovery_mode,
  _encode_F_OPEN_request_recovery_mode,
} from '../ISO8571-FTAM/F-OPEN-request-recovery-mode.ta.mjs';
import {
  Abstract_Syntax_Name,
  _decode_Abstract_Syntax_Name,
  _encode_Abstract_Syntax_Name,
} from '../ISO8571-FTAM/Abstract-Syntax-Name.ta.mjs';
import {
  Degree_Of_Overlap,
  _decode_Degree_Of_Overlap,
  _encode_Degree_Of_Overlap,
} from '../ISO8571-FTAM/Degree-Of-Overlap.ta.mjs';

/**
 * @summary F_OPEN_request
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * F-OPEN-request ::= SEQUENCE {
 *   processing-mode
 *     [0] IMPLICIT BIT STRING {f-read(0), f-insert(1), f-replace(2), f-extend(3),
 *                              f-erase(4)} DEFAULT {f-read},
 *   contents-type
 *     [1]  CHOICE {unknown   [0] IMPLICIT NULL,
 *                  proposed  [1]  Contents-Type-Attribute},
 *   concurrency-control     Concurrency-Control OPTIONAL,
 *   shared-ASE-information  Shared-ASE-Information OPTIONAL,
 *   enable-fadu-locking     [2] IMPLICIT BOOLEAN DEFAULT FALSE,
 *   activity-identifier     Activity-Identifier OPTIONAL,
 *   -- Only used in the recovery functional unit.
 *   recovery-mode
 *     [3] IMPLICIT INTEGER {none(0), at-start-of-file(1),
 *                           at-any-active-Checkpoint(2)} DEFAULT none,
 *   remove-contexts         [4] IMPLICIT SET OF Abstract-Syntax-Name OPTIONAL,
 *   define-contexts         [5] IMPLICIT SET OF Abstract-Syntax-Name OPTIONAL,
 *   -- The following are conditional on the negotiation of the consecutive overlap or
 *   -- concurrent overlap functional units.
 *   degree-of-overlap       Degree-Of-Overlap OPTIONAL,
 *   transfer-window         [7] IMPLICIT INTEGER OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class F_OPEN_request {
  constructor(
    /**
     * @summary `processing_mode`.
     * @public
     * @readonly
     */
    readonly processing_mode: OPTIONAL<F_OPEN_request_processing_mode>,
    /**
     * @summary `contents_type`.
     * @public
     * @readonly
     */
    readonly contents_type: F_OPEN_request_contents_type,
    /**
     * @summary `concurrency_control`.
     * @public
     * @readonly
     */
    readonly concurrency_control: OPTIONAL<Concurrency_Control>,
    /**
     * @summary `shared_ASE_information`.
     * @public
     * @readonly
     */
    readonly shared_ASE_information: OPTIONAL<Shared_ASE_Information>,
    /**
     * @summary `enable_fadu_locking`.
     * @public
     * @readonly
     */
    readonly enable_fadu_locking: OPTIONAL<BOOLEAN>,
    /**
     * @summary `activity_identifier`.
     * @public
     * @readonly
     */
    readonly activity_identifier: OPTIONAL<Activity_Identifier>,
    /**
     * @summary `recovery_mode`.
     * @public
     * @readonly
     */
    readonly recovery_mode: OPTIONAL<F_OPEN_request_recovery_mode>,
    /**
     * @summary `remove_contexts`.
     * @public
     * @readonly
     */
    readonly remove_contexts: OPTIONAL<Abstract_Syntax_Name[]>,
    /**
     * @summary `define_contexts`.
     * @public
     * @readonly
     */
    readonly define_contexts: OPTIONAL<Abstract_Syntax_Name[]>,
    /**
     * @summary `degree_of_overlap`.
     * @public
     * @readonly
     */
    readonly degree_of_overlap: OPTIONAL<Degree_Of_Overlap>,
    /**
     * @summary `transfer_window`.
     * @public
     * @readonly
     */
    readonly transfer_window: OPTIONAL<INTEGER>
  ) {}

  /**
   * @summary Restructures an object into a F_OPEN_request
   * @description
   *
   * This takes an `object` and converts it to a `F_OPEN_request`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `F_OPEN_request`.
   * @returns {F_OPEN_request}
   */
  public static _from_object(
    _o: { [_K in keyof F_OPEN_request]: F_OPEN_request[_K] }
  ): F_OPEN_request {
    return new F_OPEN_request(
      _o.processing_mode,
      _o.contents_type,
      _o.concurrency_control,
      _o.shared_ASE_information,
      _o.enable_fadu_locking,
      _o.activity_identifier,
      _o.recovery_mode,
      _o.remove_contexts,
      _o.define_contexts,
      _o.degree_of_overlap,
      _o.transfer_window
    );
  }

  /**
   * @summary Getter that returns the default value for `processing_mode`.
   * @public
   * @static
   * @method
   */
  public static get _default_value_for_processing_mode() {
    return (() => {
      const _ret = new Uint8ClampedArray(5);
      _ret[F_OPEN_request_processing_mode_f_read] = TRUE_BIT;
      return _ret;
    })();
  }
  /**
   * @summary Getter that returns the default value for `enable_fadu_locking`.
   * @public
   * @static
   * @method
   */
  public static get _default_value_for_enable_fadu_locking() {
    return false;
  }
  /**
   * @summary Getter that returns the default value for `recovery_mode`.
   * @public
   * @static
   * @method
   */
  public static get _default_value_for_recovery_mode() {
    return none;
  }
}


/**
 * @summary The Leading Root Component Types of F_OPEN_request
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_F_OPEN_request: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'processing-mode',
    true,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'contents-type',
    false,
    $.hasTag(_TagClass.context, 1)
  ),
  new $.ComponentSpec(
    'concurrency-control',
    true,
    $.hasTag(_TagClass.application, 10)
  ),
  new $.ComponentSpec(
    'shared-ASE-information',
    true,
    $.hasTag(_TagClass.application, 20)
  ),
  new $.ComponentSpec(
    'enable-fadu-locking',
    true,
    $.hasTag(_TagClass.context, 2)
  ),
  new $.ComponentSpec(
    'activity-identifier',
    true,
    $.hasTag(_TagClass.application, 6)
  ),
  new $.ComponentSpec(
    'recovery-mode',
    true,
    $.hasTag(_TagClass.context, 3)
  ),
  new $.ComponentSpec(
    'remove-contexts',
    true,
    $.hasTag(_TagClass.context, 4)
  ),
  new $.ComponentSpec(
    'define-contexts',
    true,
    $.hasTag(_TagClass.context, 5)
  ),
  new $.ComponentSpec(
    'degree-of-overlap',
    true,
    $.hasTag(_TagClass.application, 30)
  ),
  new $.ComponentSpec(
    'transfer-window',
    true,
    $.hasTag(_TagClass.context, 7)
  ),
];


/**
 * @summary The Trailing Root Component Types of F_OPEN_request
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_F_OPEN_request: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of F_OPEN_request
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_F_OPEN_request: $.ComponentSpec[] = [];


let _cached_decoder_for_F_OPEN_request: $.ASN1Decoder<F_OPEN_request> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) F_OPEN_request
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {F_OPEN_request} The decoded data structure.
 */
export function _decode_F_OPEN_request(el: _Element): F_OPEN_request {
  if (!_cached_decoder_for_F_OPEN_request) {
    _cached_decoder_for_F_OPEN_request = function (
      el: _Element
    ): F_OPEN_request {
      let processing_mode: OPTIONAL<F_OPEN_request_processing_mode> =
        F_OPEN_request._default_value_for_processing_mode;
      let contents_type!: F_OPEN_request_contents_type;
      let concurrency_control: OPTIONAL<Concurrency_Control>;
      let shared_ASE_information: OPTIONAL<Shared_ASE_Information>;
      let enable_fadu_locking: OPTIONAL<BOOLEAN> =
        F_OPEN_request._default_value_for_enable_fadu_locking;
      let activity_identifier: OPTIONAL<Activity_Identifier>;
      let recovery_mode: OPTIONAL<F_OPEN_request_recovery_mode> =
        F_OPEN_request._default_value_for_recovery_mode;
      let remove_contexts: OPTIONAL<Abstract_Syntax_Name[]>;
      let define_contexts: OPTIONAL<Abstract_Syntax_Name[]>;
      let degree_of_overlap: OPTIONAL<Degree_Of_Overlap>;
      let transfer_window: OPTIONAL<INTEGER>;
      const callbacks: $.DecodingMap = {
        'processing-mode': (_el: _Element): void => {
          processing_mode = $._decode_implicit<F_OPEN_request_processing_mode>(
            () => _decode_F_OPEN_request_processing_mode
          )(_el);
        },
        'contents-type': (_el: _Element): void => {
          contents_type = $._decode_explicit<F_OPEN_request_contents_type>(
            () => _decode_F_OPEN_request_contents_type
          )(_el);
        },
        'concurrency-control': (_el: _Element): void => {
          concurrency_control = _decode_Concurrency_Control(_el);
        },
        'shared-ASE-information': (_el: _Element): void => {
          shared_ASE_information = _decode_Shared_ASE_Information(_el);
        },
        'enable-fadu-locking': (_el: _Element): void => {
          enable_fadu_locking = $._decode_implicit<BOOLEAN>(
            () => $._decodeBoolean
          )(_el);
        },
        'activity-identifier': (_el: _Element): void => {
          activity_identifier = _decode_Activity_Identifier(_el);
        },
        'recovery-mode': (_el: _Element): void => {
          recovery_mode = $._decode_implicit<F_OPEN_request_recovery_mode>(
            () => _decode_F_OPEN_request_recovery_mode
          )(_el);
        },
        'remove-contexts': (_el: _Element): void => {
          remove_contexts = $._decode_implicit<Abstract_Syntax_Name[]>(() =>
            $._decodeSetOf<Abstract_Syntax_Name>(
              () => _decode_Abstract_Syntax_Name
            )
          )(_el);
        },
        'define-contexts': (_el: _Element): void => {
          define_contexts = $._decode_implicit<Abstract_Syntax_Name[]>(() =>
            $._decodeSetOf<Abstract_Syntax_Name>(
              () => _decode_Abstract_Syntax_Name
            )
          )(_el);
        },
        'degree-of-overlap': (_el: _Element): void => {
          degree_of_overlap = _decode_Degree_Of_Overlap(_el);
        },
        'transfer-window': (_el: _Element): void => {
          transfer_window = $._decode_implicit<INTEGER>(() => $._decodeInteger)(
            _el
          );
        },
      };
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_F_OPEN_request,
        _extension_additions_list_spec_for_F_OPEN_request,
        _root_component_type_list_2_spec_for_F_OPEN_request,
        undefined
      );
      return new F_OPEN_request (
        processing_mode,
        contents_type,
        concurrency_control,
        shared_ASE_information,
        enable_fadu_locking,
        activity_identifier,
        recovery_mode,
        remove_contexts,
        define_contexts,
        degree_of_overlap,
        transfer_window
      );
    };
  }
  return _cached_decoder_for_F_OPEN_request(el);
}


let _cached_encoder_for_F_OPEN_request: $.ASN1Encoder<F_OPEN_request> | null = null;


/**
 * @summary Encodes a(n) F_OPEN_request into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The F_OPEN_request, encoded as an ASN.1 Element.
 */
export function _encode_F_OPEN_request(
  value: F_OPEN_request,
  elGetter: $.ASN1Encoder<F_OPEN_request>
): _Element {
  if (!_cached_encoder_for_F_OPEN_request) {
    _cached_encoder_for_F_OPEN_request = function (
      value: F_OPEN_request    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* IF_DEFAULT */ value.processing_mode === undefined ||
            $.deepEq(
              value.processing_mode,
              F_OPEN_request._default_value_for_processing_mode
            )
              ? undefined
              : $._encode_implicit(
                  _TagClass.context,
                  0,
                  () => _encode_F_OPEN_request_processing_mode,
                  $.BER
                )(value.processing_mode, $.BER),
            /* REQUIRED   */ $._encode_explicit(
              _TagClass.context,
              1,
              () => _encode_F_OPEN_request_contents_type,
              $.BER
            )(value.contents_type, $.BER),
            /* IF_ABSENT  */ value.concurrency_control === undefined
              ? undefined
              : _encode_Concurrency_Control(value.concurrency_control, $.BER),
            /* IF_ABSENT  */ value.shared_ASE_information === undefined
              ? undefined
              : _encode_Shared_ASE_Information(
                  value.shared_ASE_information,
                  $.BER
                ),
            /* IF_DEFAULT */ value.enable_fadu_locking === undefined ||
            $.deepEq(
              value.enable_fadu_locking,
              F_OPEN_request._default_value_for_enable_fadu_locking
            )
              ? undefined
              : $._encode_implicit(
                  _TagClass.context,
                  2,
                  () => $._encodeBoolean,
                  $.BER
                )(value.enable_fadu_locking, $.BER),
            /* IF_ABSENT  */ value.activity_identifier === undefined
              ? undefined
              : _encode_Activity_Identifier(value.activity_identifier, $.BER),
            /* IF_DEFAULT */ value.recovery_mode === undefined ||
            $.deepEq(
              value.recovery_mode,
              F_OPEN_request._default_value_for_recovery_mode
            )
              ? undefined
              : $._encode_implicit(
                  _TagClass.context,
                  3,
                  () => _encode_F_OPEN_request_recovery_mode,
                  $.BER
                )(value.recovery_mode, $.BER),
            /* IF_ABSENT  */ value.remove_contexts === undefined
              ? undefined
              : $._encode_implicit(
                  _TagClass.context,
                  4,
                  () =>
                    $._encodeSetOf<Abstract_Syntax_Name>(
                      () => _encode_Abstract_Syntax_Name,
                      $.BER
                    ),
                  $.BER
                )(value.remove_contexts, $.BER),
            /* IF_ABSENT  */ value.define_contexts === undefined
              ? undefined
              : $._encode_implicit(
                  _TagClass.context,
                  5,
                  () =>
                    $._encodeSetOf<Abstract_Syntax_Name>(
                      () => _encode_Abstract_Syntax_Name,
                      $.BER
                    ),
                  $.BER
                )(value.define_contexts, $.BER),
            /* IF_ABSENT  */ value.degree_of_overlap === undefined
              ? undefined
              : _encode_Degree_Of_Overlap(value.degree_of_overlap, $.BER),
            /* IF_ABSENT  */ value.transfer_window === undefined
              ? undefined
              : $._encode_implicit(
                  _TagClass.context,
                  7,
                  () => $._encodeInteger,
                  $.BER
                )(value.transfer_window, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_F_OPEN_request(value, elGetter);
}


/* eslint-enable */
