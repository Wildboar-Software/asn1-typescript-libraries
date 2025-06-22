/* eslint-disable */
import {
  OPTIONAL,
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
  AARQ_apdu_protocol_version,
  AARQ_apdu_protocol_version_version1 /* IMPORTED_LONG_NAMED_BIT */,
  _decode_AARQ_apdu_protocol_version,
  _encode_AARQ_apdu_protocol_version,
} from '../ACSE-1/AARQ-apdu-protocol-version.ta.mjs';
import {
  ASO_context_name,
  _decode_ASO_context_name,
  _encode_ASO_context_name,
} from '../ACSE-1/ASO-context-name.ta.mjs';
import {
  AP_title,
  _decode_AP_title,
  _encode_AP_title,
} from '../ACSE-1/AP-title.ta.mjs';
import {
  AE_qualifier,
  _decode_AE_qualifier,
  _encode_AE_qualifier,
} from '../ACSE-1/AE-qualifier.ta.mjs';
import {
  AP_invocation_identifier,
  _decode_AP_invocation_identifier,
  _encode_AP_invocation_identifier,
} from '../ACSE-1/AP-invocation-identifier.ta.mjs';
import {
  AE_invocation_identifier,
  _decode_AE_invocation_identifier,
  _encode_AE_invocation_identifier,
} from '../ACSE-1/AE-invocation-identifier.ta.mjs';
import {
  ACSE_requirements,
  _decode_ACSE_requirements,
  _encode_ACSE_requirements,
} from '../ACSE-1/ACSE-requirements.ta.mjs';
import {
  Mechanism_name,
  _decode_Mechanism_name,
  _encode_Mechanism_name,
} from '../ACSE-1/Mechanism-name.ta.mjs';
import {
  Authentication_value,
  _decode_Authentication_value,
  _encode_Authentication_value,
} from '../ACSE-1/Authentication-value.ta.mjs';
import {
  ASO_context_name_list,
  _decode_ASO_context_name_list,
  _encode_ASO_context_name_list,
} from '../ACSE-1/ASO-context-name-list.ta.mjs';
import {
  Implementation_data,
  _decode_Implementation_data,
  _encode_Implementation_data,
} from '../ACSE-1/Implementation-data.ta.mjs';
import {
  Association_data,
  _decode_Association_data,
  _encode_Association_data,
} from '../ACSE-1/Association-data.ta.mjs';
import {
  Syntactic_context_list,
  _decode_Syntactic_context_list,
  _encode_Syntactic_context_list,
} from '../ACSE-1/Syntactic-context-list.ta.mjs';
import {
  ASOI_tag,
  _decode_ASOI_tag,
  _encode_ASOI_tag,
} from '../ACSE-1/ASOI-tag.ta.mjs';
/**
 * @summary AARQ_apdu
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AARQ-apdu ::= [APPLICATION 0] IMPLICIT SEQUENCE {
 *   protocol-version
 *     [0] IMPLICIT BIT STRING {version1(0)} DEFAULT {version1},
 *   aSO-context-name                  [1]  ASO-context-name,
 *   called-AP-title                   [2]  AP-title OPTIONAL,
 *   called-AE-qualifier               [3]  AE-qualifier OPTIONAL,
 *   called-AP-invocation-identifier   [4]  AP-invocation-identifier OPTIONAL,
 *   called-AE-invocation-identifier   [5]  AE-invocation-identifier OPTIONAL,
 *   calling-AP-title                  [6]  AP-title OPTIONAL,
 *   calling-AE-qualifier              [7]  AE-qualifier OPTIONAL,
 *   calling-AP-invocation-identifier  [8]  AP-invocation-identifier OPTIONAL,
 *   calling-AE-invocation-identifier  [9]  AE-invocation-identifier OPTIONAL,
 *   --  The following field shall not be present if only the Kernel is used.
 *   sender-acse-requirements          [10] IMPLICIT ACSE-requirements OPTIONAL,
 *   --  The following field shall only be present if the Authentication functional unit is selected.
 *   mechanism-name                    [11] IMPLICIT Mechanism-name OPTIONAL,
 *   --  The following field shall only be present if the Authentication functional unit is selected.
 *   calling-authentication-value      [12] EXPLICIT Authentication-value OPTIONAL,
 *   aSO-context-name-list
 *     [13] IMPLICIT ASO-context-name-list OPTIONAL,
 *   --  The above field shall only be present if the Application Context Negotiation functional unit is selected.
 *   implementation-information        [29] IMPLICIT Implementation-data OPTIONAL,
 *   ...,
 *   --  Extensions for higher level association FU
 *   p-context-definition-list         [14]  Syntactic-context-list OPTIONAL,
 *   called-asoi-tag                   [15] IMPLICIT ASOI-tag OPTIONAL,
 *   calling-asoi-tag                  [16] IMPLICIT ASOI-tag OPTIONAL,
 *   --  End of extensions for higher level association FU
 *   ...,
 *   user-information                  [30] IMPLICIT Association-data OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class AARQ_apdu {
  constructor(
    /**
     * @summary `protocol_version`.
     * @public
     * @readonly
     */
    readonly protocol_version: OPTIONAL<AARQ_apdu_protocol_version>,
    /**
     * @summary `aSO_context_name`.
     * @public
     * @readonly
     */
    readonly aSO_context_name: ASO_context_name,
    /**
     * @summary `called_AP_title`.
     * @public
     * @readonly
     */
    readonly called_AP_title: OPTIONAL<AP_title>,
    /**
     * @summary `called_AE_qualifier`.
     * @public
     * @readonly
     */
    readonly called_AE_qualifier: OPTIONAL<AE_qualifier>,
    /**
     * @summary `called_AP_invocation_identifier`.
     * @public
     * @readonly
     */
    readonly called_AP_invocation_identifier: OPTIONAL<AP_invocation_identifier>,
    /**
     * @summary `called_AE_invocation_identifier`.
     * @public
     * @readonly
     */
    readonly called_AE_invocation_identifier: OPTIONAL<AE_invocation_identifier>,
    /**
     * @summary `calling_AP_title`.
     * @public
     * @readonly
     */
    readonly calling_AP_title: OPTIONAL<AP_title>,
    /**
     * @summary `calling_AE_qualifier`.
     * @public
     * @readonly
     */
    readonly calling_AE_qualifier: OPTIONAL<AE_qualifier>,
    /**
     * @summary `calling_AP_invocation_identifier`.
     * @public
     * @readonly
     */
    readonly calling_AP_invocation_identifier: OPTIONAL<AP_invocation_identifier>,
    /**
     * @summary `calling_AE_invocation_identifier`.
     * @public
     * @readonly
     */
    readonly calling_AE_invocation_identifier: OPTIONAL<AE_invocation_identifier>,
    /**
     * @summary `sender_acse_requirements`.
     * @public
     * @readonly
     */
    readonly sender_acse_requirements: OPTIONAL<ACSE_requirements>,
    /**
     * @summary `mechanism_name`.
     * @public
     * @readonly
     */
    readonly mechanism_name: OPTIONAL<Mechanism_name>,
    /**
     * @summary `calling_authentication_value`.
     * @public
     * @readonly
     */
    readonly calling_authentication_value: OPTIONAL<Authentication_value>,
    /**
     * @summary `aSO_context_name_list`.
     * @public
     * @readonly
     */
    readonly aSO_context_name_list: OPTIONAL<ASO_context_name_list>,
    /**
     * @summary `implementation_information`.
     * @public
     * @readonly
     */
    readonly implementation_information: OPTIONAL<Implementation_data>,
    /**
     * @summary `p_context_definition_list`.
     * @public
     * @readonly
     */
    readonly p_context_definition_list: OPTIONAL<Syntactic_context_list>,
    /**
     * @summary `called_asoi_tag`.
     * @public
     * @readonly
     */
    readonly called_asoi_tag: OPTIONAL<ASOI_tag>,
    /**
     * @summary `calling_asoi_tag`.
     * @public
     * @readonly
     */
    readonly calling_asoi_tag: OPTIONAL<ASOI_tag>,
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[] = [],
    /**
     * @summary `user_information`.
     * @public
     * @readonly
     */
    readonly user_information: OPTIONAL<Association_data>
  ) {}

  /**
   * @summary Restructures an object into a AARQ_apdu
   * @description
   *
   * This takes an `object` and converts it to a `AARQ_apdu`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `AARQ_apdu`.
   * @returns {AARQ_apdu}
   */
  public static _from_object(
    _o: { [_K in keyof AARQ_apdu]: AARQ_apdu[_K] }
  ): AARQ_apdu {
    return new AARQ_apdu(
      _o.protocol_version,
      _o.aSO_context_name,
      _o.called_AP_title,
      _o.called_AE_qualifier,
      _o.called_AP_invocation_identifier,
      _o.called_AE_invocation_identifier,
      _o.calling_AP_title,
      _o.calling_AE_qualifier,
      _o.calling_AP_invocation_identifier,
      _o.calling_AE_invocation_identifier,
      _o.sender_acse_requirements,
      _o.mechanism_name,
      _o.calling_authentication_value,
      _o.aSO_context_name_list,
      _o.implementation_information,
      _o.p_context_definition_list,
      _o.called_asoi_tag,
      _o.calling_asoi_tag,
      _o._unrecognizedExtensionsList,
      _o.user_information
    );
  }

  /**
   * @summary Getter that returns the default value for `protocol_version`.
   * @public
   * @static
   * @method
   */
  public static get _default_value_for_protocol_version() {
    return (() => {
      const _ret = new Uint8ClampedArray(1);
      _ret[AARQ_apdu_protocol_version_version1] = TRUE_BIT;
      return _ret;
    })();
  }
}

/**
 * @summary The Leading Root Component Types of AARQ_apdu
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AARQ_apdu: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'protocol-version',
    true,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'aSO-context-name',
    false,
    $.hasTag(_TagClass.context, 1)
  ),
  new $.ComponentSpec(
    'called-AP-title',
    true,
    $.hasTag(_TagClass.context, 2)
  ),
  new $.ComponentSpec(
    'called-AE-qualifier',
    true,
    $.hasTag(_TagClass.context, 3)
  ),
  new $.ComponentSpec(
    'called-AP-invocation-identifier',
    true,
    $.hasTag(_TagClass.context, 4)
  ),
  new $.ComponentSpec(
    'called-AE-invocation-identifier',
    true,
    $.hasTag(_TagClass.context, 5)
  ),
  new $.ComponentSpec(
    'calling-AP-title',
    true,
    $.hasTag(_TagClass.context, 6)
  ),
  new $.ComponentSpec(
    'calling-AE-qualifier',
    true,
    $.hasTag(_TagClass.context, 7)
  ),
  new $.ComponentSpec(
    'calling-AP-invocation-identifier',
    true,
    $.hasTag(_TagClass.context, 8)
  ),
  new $.ComponentSpec(
    'calling-AE-invocation-identifier',
    true,
    $.hasTag(_TagClass.context, 9)
  ),
  new $.ComponentSpec(
    'sender-acse-requirements',
    true,
    $.hasTag(_TagClass.context, 10)
  ),
  new $.ComponentSpec(
    'mechanism-name',
    true,
    $.hasTag(_TagClass.context, 11)
  ),
  new $.ComponentSpec(
    'calling-authentication-value',
    true,
    $.hasTag(_TagClass.context, 12)
  ),
  new $.ComponentSpec(
    'aSO-context-name-list',
    true,
    $.hasTag(_TagClass.context, 13)
  ),
  new $.ComponentSpec(
    'implementation-information',
    true,
    $.hasTag(_TagClass.context, 29)
  ),
];

/**
 * @summary The Trailing Root Component Types of AARQ_apdu
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AARQ_apdu: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'user-information',
    true,
    $.hasTag(_TagClass.context, 30)
  ),
];

/**
 * @summary The Extension Addition Component Types of AARQ_apdu
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AARQ_apdu: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'p-context-definition-list',
    true,
    $.hasTag(_TagClass.context, 14)
  ),
  new $.ComponentSpec(
    'called-asoi-tag',
    true,
    $.hasTag(_TagClass.context, 15)
  ),
  new $.ComponentSpec(
    'calling-asoi-tag',
    true,
    $.hasTag(_TagClass.context, 16)
  ),
];

let _cached_decoder_for_AARQ_apdu: $.ASN1Decoder<AARQ_apdu> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AARQ_apdu
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AARQ_apdu} The decoded data structure.
 */
export function _decode_AARQ_apdu(el: _Element) {
  if (!_cached_decoder_for_AARQ_apdu) {
    _cached_decoder_for_AARQ_apdu = $._decode_implicit<AARQ_apdu>(
      () =>
        function (el: _Element): AARQ_apdu {
          /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
          let protocol_version: OPTIONAL<AARQ_apdu_protocol_version> =
            AARQ_apdu._default_value_for_protocol_version;
          let aSO_context_name!: ASO_context_name;
          let called_AP_title: OPTIONAL<AP_title>;
          let called_AE_qualifier: OPTIONAL<AE_qualifier>;
          let called_AP_invocation_identifier: OPTIONAL<AP_invocation_identifier>;
          let called_AE_invocation_identifier: OPTIONAL<AE_invocation_identifier>;
          let calling_AP_title: OPTIONAL<AP_title>;
          let calling_AE_qualifier: OPTIONAL<AE_qualifier>;
          let calling_AP_invocation_identifier: OPTIONAL<AP_invocation_identifier>;
          let calling_AE_invocation_identifier: OPTIONAL<AE_invocation_identifier>;
          let sender_acse_requirements: OPTIONAL<ACSE_requirements>;
          let mechanism_name: OPTIONAL<Mechanism_name>;
          let calling_authentication_value: OPTIONAL<Authentication_value>;
          let aSO_context_name_list: OPTIONAL<ASO_context_name_list>;
          let implementation_information: OPTIONAL<Implementation_data>;
          let p_context_definition_list: OPTIONAL<Syntactic_context_list>;
          let called_asoi_tag: OPTIONAL<ASOI_tag>;
          let calling_asoi_tag: OPTIONAL<ASOI_tag>;
          let _unrecognizedExtensionsList: _Element[] = [];
          let user_information: OPTIONAL<Association_data>;
          /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
          /* START_OF_CALLBACKS_MAP */
          const callbacks: $.DecodingMap = {
            'protocol-version': (_el: _Element): void => {
              protocol_version = $._decode_implicit<AARQ_apdu_protocol_version>(
                () => _decode_AARQ_apdu_protocol_version
              )(_el);
            },
            'aSO-context-name': (_el: _Element): void => {
              aSO_context_name = $._decode_explicit<ASO_context_name>(
                () => _decode_ASO_context_name
              )(_el);
            },
            'called-AP-title': (_el: _Element): void => {
              called_AP_title = $._decode_explicit<AP_title>(
                () => _decode_AP_title
              )(_el);
            },
            'called-AE-qualifier': (_el: _Element): void => {
              called_AE_qualifier = $._decode_explicit<AE_qualifier>(
                () => _decode_AE_qualifier
              )(_el);
            },
            'called-AP-invocation-identifier': (_el: _Element): void => {
              called_AP_invocation_identifier = $._decode_explicit<AP_invocation_identifier>(
                () => _decode_AP_invocation_identifier
              )(_el);
            },
            'called-AE-invocation-identifier': (_el: _Element): void => {
              called_AE_invocation_identifier = $._decode_explicit<AE_invocation_identifier>(
                () => _decode_AE_invocation_identifier
              )(_el);
            },
            'calling-AP-title': (_el: _Element): void => {
              calling_AP_title = $._decode_explicit<AP_title>(
                () => _decode_AP_title
              )(_el);
            },
            'calling-AE-qualifier': (_el: _Element): void => {
              calling_AE_qualifier = $._decode_explicit<AE_qualifier>(
                () => _decode_AE_qualifier
              )(_el);
            },
            'calling-AP-invocation-identifier': (_el: _Element): void => {
              calling_AP_invocation_identifier = $._decode_explicit<AP_invocation_identifier>(
                () => _decode_AP_invocation_identifier
              )(_el);
            },
            'calling-AE-invocation-identifier': (_el: _Element): void => {
              calling_AE_invocation_identifier = $._decode_explicit<AE_invocation_identifier>(
                () => _decode_AE_invocation_identifier
              )(_el);
            },
            'sender-acse-requirements': (_el: _Element): void => {
              sender_acse_requirements = $._decode_implicit<ACSE_requirements>(
                () => _decode_ACSE_requirements
              )(_el);
            },
            'mechanism-name': (_el: _Element): void => {
              mechanism_name = $._decode_implicit<Mechanism_name>(
                () => _decode_Mechanism_name
              )(_el);
            },
            'calling-authentication-value': (_el: _Element): void => {
              calling_authentication_value = $._decode_explicit<Authentication_value>(
                () => _decode_Authentication_value
              )(_el);
            },
            'aSO-context-name-list': (_el: _Element): void => {
              aSO_context_name_list = $._decode_implicit<ASO_context_name_list>(
                () => _decode_ASO_context_name_list
              )(_el);
            },
            'implementation-information': (_el: _Element): void => {
              implementation_information = $._decode_implicit<Implementation_data>(
                () => _decode_Implementation_data
              )(_el);
            },
            'user-information': (_el: _Element): void => {
              user_information = $._decode_implicit<Association_data>(
                () => _decode_Association_data
              )(_el);
            },
            'p-context-definition-list': (_el: _Element): void => {
              p_context_definition_list = $._decode_explicit<Syntactic_context_list>(
                () => _decode_Syntactic_context_list
              )(_el);
            },
            'called-asoi-tag': (_el: _Element): void => {
              called_asoi_tag = $._decode_implicit<ASOI_tag>(
                () => _decode_ASOI_tag
              )(_el);
            },
            'calling-asoi-tag': (_el: _Element): void => {
              calling_asoi_tag = $._decode_implicit<ASOI_tag>(
                () => _decode_ASOI_tag
              )(_el);
            },
          };
          /* END_OF_CALLBACKS_MAP */
          $._parse_sequence(
            el,
            callbacks,
            _root_component_type_list_1_spec_for_AARQ_apdu,
            _extension_additions_list_spec_for_AARQ_apdu,
            _root_component_type_list_2_spec_for_AARQ_apdu,
            (ext: _Element): void => {
              _unrecognizedExtensionsList.push(ext);
            }
          );
          return new AARQ_apdu /* SEQUENCE_CONSTRUCTOR_CALL */(
            protocol_version,
            aSO_context_name,
            called_AP_title,
            called_AE_qualifier,
            called_AP_invocation_identifier,
            called_AE_invocation_identifier,
            calling_AP_title,
            calling_AE_qualifier,
            calling_AP_invocation_identifier,
            calling_AE_invocation_identifier,
            sender_acse_requirements,
            mechanism_name,
            calling_authentication_value,
            aSO_context_name_list,
            implementation_information,
            p_context_definition_list,
            called_asoi_tag,
            calling_asoi_tag,
            _unrecognizedExtensionsList,
            user_information
          );
        }
    );
  }
  return _cached_decoder_for_AARQ_apdu(el);
}

let _cached_encoder_for_AARQ_apdu: $.ASN1Encoder<AARQ_apdu> | null = null;

/**
 * @summary Encodes a(n) AARQ_apdu into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AARQ_apdu, encoded as an ASN.1 Element.
 */
export function _encode_AARQ_apdu(
  value: AARQ_apdu,
  elGetter: $.ASN1Encoder<AARQ_apdu>
) {
  if (!_cached_encoder_for_AARQ_apdu) {
    _cached_encoder_for_AARQ_apdu = $._encode_implicit(
      _TagClass.application,
      0,
      () =>
        function (
          value: AARQ_apdu        ): _Element {
          return $._encodeSequence(
            ([] as (_Element | undefined)[])
              .concat(
                [
                  /* IF_DEFAULT */ value.protocol_version === undefined ||
                  $.deepEq(
                    value.protocol_version,
                    AARQ_apdu._default_value_for_protocol_version
                  )
                    ? undefined
                    : $._encode_implicit(
                        _TagClass.context,
                        0,
                        () => _encode_AARQ_apdu_protocol_version,
                        $.BER
                      )(value.protocol_version, $.BER),
                  /* REQUIRED   */ $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => _encode_ASO_context_name,
                    $.BER
                  )(value.aSO_context_name, $.BER),
                  /* IF_ABSENT  */ value.called_AP_title === undefined
                    ? undefined
                    : $._encode_explicit(
                        _TagClass.context,
                        2,
                        () => _encode_AP_title,
                        $.BER
                      )(value.called_AP_title, $.BER),
                  /* IF_ABSENT  */ value.called_AE_qualifier === undefined
                    ? undefined
                    : $._encode_explicit(
                        _TagClass.context,
                        3,
                        () => _encode_AE_qualifier,
                        $.BER
                      )(value.called_AE_qualifier, $.BER),
                  /* IF_ABSENT  */ value.called_AP_invocation_identifier ===
                  undefined
                    ? undefined
                    : $._encode_explicit(
                        _TagClass.context,
                        4,
                        () => _encode_AP_invocation_identifier,
                        $.BER
                      )(value.called_AP_invocation_identifier, $.BER),
                  /* IF_ABSENT  */ value.called_AE_invocation_identifier ===
                  undefined
                    ? undefined
                    : $._encode_explicit(
                        _TagClass.context,
                        5,
                        () => _encode_AE_invocation_identifier,
                        $.BER
                      )(value.called_AE_invocation_identifier, $.BER),
                  /* IF_ABSENT  */ value.calling_AP_title === undefined
                    ? undefined
                    : $._encode_explicit(
                        _TagClass.context,
                        6,
                        () => _encode_AP_title,
                        $.BER
                      )(value.calling_AP_title, $.BER),
                  /* IF_ABSENT  */ value.calling_AE_qualifier === undefined
                    ? undefined
                    : $._encode_explicit(
                        _TagClass.context,
                        7,
                        () => _encode_AE_qualifier,
                        $.BER
                      )(value.calling_AE_qualifier, $.BER),
                  /* IF_ABSENT  */ value.calling_AP_invocation_identifier ===
                  undefined
                    ? undefined
                    : $._encode_explicit(
                        _TagClass.context,
                        8,
                        () => _encode_AP_invocation_identifier,
                        $.BER
                      )(value.calling_AP_invocation_identifier, $.BER),
                  /* IF_ABSENT  */ value.calling_AE_invocation_identifier ===
                  undefined
                    ? undefined
                    : $._encode_explicit(
                        _TagClass.context,
                        9,
                        () => _encode_AE_invocation_identifier,
                        $.BER
                      )(value.calling_AE_invocation_identifier, $.BER),
                  /* IF_ABSENT  */ value.sender_acse_requirements === undefined
                    ? undefined
                    : $._encode_implicit(
                        _TagClass.context,
                        10,
                        () => _encode_ACSE_requirements,
                        $.BER
                      )(value.sender_acse_requirements, $.BER),
                  /* IF_ABSENT  */ value.mechanism_name === undefined
                    ? undefined
                    : $._encode_implicit(
                        _TagClass.context,
                        11,
                        () => _encode_Mechanism_name,
                        $.BER
                      )(value.mechanism_name, $.BER),
                  /* IF_ABSENT  */ value.calling_authentication_value ===
                  undefined
                    ? undefined
                    : $._encode_explicit(
                        _TagClass.context,
                        12,
                        () => _encode_Authentication_value,
                        $.BER
                      )(value.calling_authentication_value, $.BER),
                  /* IF_ABSENT  */ value.aSO_context_name_list === undefined
                    ? undefined
                    : $._encode_implicit(
                        _TagClass.context,
                        13,
                        () => _encode_ASO_context_name_list,
                        $.BER
                      )(value.aSO_context_name_list, $.BER),
                  /* IF_ABSENT  */ value.implementation_information ===
                  undefined
                    ? undefined
                    : $._encode_implicit(
                        _TagClass.context,
                        29,
                        () => _encode_Implementation_data,
                        $.BER
                      )(value.implementation_information, $.BER),
                ],
                [
                  /* IF_ABSENT  */ value.p_context_definition_list === undefined
                    ? undefined
                    : $._encode_explicit(
                        _TagClass.context,
                        14,
                        () => _encode_Syntactic_context_list,
                        $.BER
                      )(value.p_context_definition_list, $.BER),
                  /* IF_ABSENT  */ value.called_asoi_tag === undefined
                    ? undefined
                    : $._encode_implicit(
                        _TagClass.context,
                        15,
                        () => _encode_ASOI_tag,
                        $.BER
                      )(value.called_asoi_tag, $.BER),
                  /* IF_ABSENT  */ value.calling_asoi_tag === undefined
                    ? undefined
                    : $._encode_implicit(
                        _TagClass.context,
                        16,
                        () => _encode_ASOI_tag,
                        $.BER
                      )(value.calling_asoi_tag, $.BER),
                ],
                value._unrecognizedExtensionsList
                  ? value._unrecognizedExtensionsList
                  : [],
                [
                  /* IF_ABSENT  */ value.user_information === undefined
                    ? undefined
                    : $._encode_implicit(
                        _TagClass.context,
                        30,
                        () => _encode_Association_data,
                        $.BER
                      )(value.user_information, $.BER),
                ]
              )
              .filter((c: _Element | undefined): c is _Element => !!c),
            $.BER
          );
        },
      $.BER
    );
  }
  return _cached_encoder_for_AARQ_apdu(value, elGetter);
}


/* eslint-enable */
