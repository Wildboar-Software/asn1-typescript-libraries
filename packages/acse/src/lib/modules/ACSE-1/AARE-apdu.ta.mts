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
  AARE_apdu_protocol_version,
  AARE_apdu_protocol_version_version1 /* IMPORTED_LONG_NAMED_BIT */,
  version1 /* IMPORTED_SHORT_NAMED_BIT */,
  _decode_AARE_apdu_protocol_version,
  _encode_AARE_apdu_protocol_version,
} from '../ACSE-1/AARE-apdu-protocol-version.ta.mjs';
export {
  AARE_apdu_protocol_version,
  AARE_apdu_protocol_version_version1 /* IMPORTED_LONG_NAMED_BIT */,
  version1 /* IMPORTED_SHORT_NAMED_BIT */,
  _decode_AARE_apdu_protocol_version,
  _encode_AARE_apdu_protocol_version,
} from '../ACSE-1/AARE-apdu-protocol-version.ta.mjs';
import {
  ASO_context_name,
  _decode_ASO_context_name,
  _encode_ASO_context_name,
} from '../ACSE-1/ASO-context-name.ta.mjs';
export {
  ASO_context_name,
  _decode_ASO_context_name,
  _encode_ASO_context_name,
} from '../ACSE-1/ASO-context-name.ta.mjs';
import {
  Associate_result,
  Associate_result_accepted /* IMPORTED_LONG_NAMED_INTEGER */,
  accepted /* IMPORTED_SHORT_NAMED_INTEGER */,
  Associate_result_rejected_permanent /* IMPORTED_LONG_NAMED_INTEGER */,
  rejected_permanent /* IMPORTED_SHORT_NAMED_INTEGER */,
  Associate_result_rejected_transient /* IMPORTED_LONG_NAMED_INTEGER */,
  rejected_transient /* IMPORTED_SHORT_NAMED_INTEGER */,
  _decode_Associate_result,
  _encode_Associate_result,
} from '../ACSE-1/Associate-result.ta.mjs';
export {
  Associate_result,
  Associate_result_accepted /* IMPORTED_LONG_NAMED_INTEGER */,
  accepted /* IMPORTED_SHORT_NAMED_INTEGER */,
  Associate_result_rejected_permanent /* IMPORTED_LONG_NAMED_INTEGER */,
  rejected_permanent /* IMPORTED_SHORT_NAMED_INTEGER */,
  Associate_result_rejected_transient /* IMPORTED_LONG_NAMED_INTEGER */,
  rejected_transient /* IMPORTED_SHORT_NAMED_INTEGER */,
  _decode_Associate_result,
  _encode_Associate_result,
} from '../ACSE-1/Associate-result.ta.mjs';
import {
  Associate_source_diagnostic,
  _decode_Associate_source_diagnostic,
  _encode_Associate_source_diagnostic,
} from '../ACSE-1/Associate-source-diagnostic.ta.mjs';
export {
  Associate_source_diagnostic,
  _decode_Associate_source_diagnostic,
  _encode_Associate_source_diagnostic,
} from '../ACSE-1/Associate-source-diagnostic.ta.mjs';
import {
  AP_title,
  _decode_AP_title,
  _encode_AP_title,
} from '../ACSE-1/AP-title.ta.mjs';
export {
  AP_title,
  _decode_AP_title,
  _encode_AP_title,
} from '../ACSE-1/AP-title.ta.mjs';
import {
  AE_qualifier,
  _decode_AE_qualifier,
  _encode_AE_qualifier,
} from '../ACSE-1/AE-qualifier.ta.mjs';
export {
  AE_qualifier,
  _decode_AE_qualifier,
  _encode_AE_qualifier,
} from '../ACSE-1/AE-qualifier.ta.mjs';
import {
  AP_invocation_identifier,
  _decode_AP_invocation_identifier,
  _encode_AP_invocation_identifier,
} from '../ACSE-1/AP-invocation-identifier.ta.mjs';
export {
  AP_invocation_identifier,
  _decode_AP_invocation_identifier,
  _encode_AP_invocation_identifier,
} from '../ACSE-1/AP-invocation-identifier.ta.mjs';
import {
  AE_invocation_identifier,
  _decode_AE_invocation_identifier,
  _encode_AE_invocation_identifier,
} from '../ACSE-1/AE-invocation-identifier.ta.mjs';
export {
  AE_invocation_identifier,
  _decode_AE_invocation_identifier,
  _encode_AE_invocation_identifier,
} from '../ACSE-1/AE-invocation-identifier.ta.mjs';
import {
  ACSE_requirements,
  ACSE_requirements_authentication /* IMPORTED_LONG_NAMED_BIT */,
  authentication /* IMPORTED_SHORT_NAMED_BIT */,
  ACSE_requirements_aSO_context_negotiation /* IMPORTED_LONG_NAMED_BIT */,
  aSO_context_negotiation /* IMPORTED_SHORT_NAMED_BIT */,
  ACSE_requirements_higher_level_association /* IMPORTED_LONG_NAMED_BIT */,
  higher_level_association /* IMPORTED_SHORT_NAMED_BIT */,
  ACSE_requirements_nested_association /* IMPORTED_LONG_NAMED_BIT */,
  nested_association /* IMPORTED_SHORT_NAMED_BIT */,
  _decode_ACSE_requirements,
  _encode_ACSE_requirements,
} from '../ACSE-1/ACSE-requirements.ta.mjs';
export {
  ACSE_requirements,
  ACSE_requirements_authentication /* IMPORTED_LONG_NAMED_BIT */,
  authentication /* IMPORTED_SHORT_NAMED_BIT */,
  ACSE_requirements_aSO_context_negotiation /* IMPORTED_LONG_NAMED_BIT */,
  aSO_context_negotiation /* IMPORTED_SHORT_NAMED_BIT */,
  ACSE_requirements_higher_level_association /* IMPORTED_LONG_NAMED_BIT */,
  higher_level_association /* IMPORTED_SHORT_NAMED_BIT */,
  ACSE_requirements_nested_association /* IMPORTED_LONG_NAMED_BIT */,
  nested_association /* IMPORTED_SHORT_NAMED_BIT */,
  _decode_ACSE_requirements,
  _encode_ACSE_requirements,
} from '../ACSE-1/ACSE-requirements.ta.mjs';
import {
  Mechanism_name,
  _decode_Mechanism_name,
  _encode_Mechanism_name,
} from '../ACSE-1/Mechanism-name.ta.mjs';
export {
  Mechanism_name,
  _decode_Mechanism_name,
  _encode_Mechanism_name,
} from '../ACSE-1/Mechanism-name.ta.mjs';
import {
  Authentication_value,
  _decode_Authentication_value,
  _encode_Authentication_value,
} from '../ACSE-1/Authentication-value.ta.mjs';
export {
  Authentication_value,
  _decode_Authentication_value,
  _encode_Authentication_value,
} from '../ACSE-1/Authentication-value.ta.mjs';
import {
  ASO_context_name_list,
  _decode_ASO_context_name_list,
  _encode_ASO_context_name_list,
} from '../ACSE-1/ASO-context-name-list.ta.mjs';
export {
  ASO_context_name_list,
  _decode_ASO_context_name_list,
  _encode_ASO_context_name_list,
} from '../ACSE-1/ASO-context-name-list.ta.mjs';
import {
  Implementation_data,
  _decode_Implementation_data,
  _encode_Implementation_data,
} from '../ACSE-1/Implementation-data.ta.mjs';
export {
  Implementation_data,
  _decode_Implementation_data,
  _encode_Implementation_data,
} from '../ACSE-1/Implementation-data.ta.mjs';
import {
  Association_data,
  _decode_Association_data,
  _encode_Association_data,
} from '../ACSE-1/Association-data.ta.mjs';
export {
  Association_data,
  _decode_Association_data,
  _encode_Association_data,
} from '../ACSE-1/Association-data.ta.mjs';
import {
  P_context_result_list,
  _decode_P_context_result_list,
  _encode_P_context_result_list,
} from '../ACSE-1/P-context-result-list.ta.mjs';
export {
  P_context_result_list,
  _decode_P_context_result_list,
  _encode_P_context_result_list,
} from '../ACSE-1/P-context-result-list.ta.mjs';
import {
  ASOI_tag,
  _decode_ASOI_tag,
  _encode_ASOI_tag,
} from '../ACSE-1/ASOI-tag.ta.mjs';
export {
  ASOI_tag,
  _decode_ASOI_tag,
  _encode_ASOI_tag,
} from '../ACSE-1/ASOI-tag.ta.mjs';

/* START_OF_SYMBOL_DEFINITION AARE_apdu */
/**
 * @summary AARE_apdu
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AARE-apdu ::= [APPLICATION 1] IMPLICIT SEQUENCE {
 *   protocol-version
 *     [0] IMPLICIT BIT STRING {version1(0)} DEFAULT {version1},
 *   aSO-context-name                     [1]  ASO-context-name,
 *   result                               [2]  Associate-result,
 *   result-source-diagnostic             [3]  Associate-source-diagnostic,
 *   responding-AP-title                  [4]  AP-title OPTIONAL,
 *   responding-AE-qualifier              [5]  AE-qualifier OPTIONAL,
 *   responding-AP-invocation-identifier  [6]  AP-invocation-identifier OPTIONAL,
 *   responding-AE-invocation-identifier  [7]  AE-invocation-identifier OPTIONAL,
 *   --  The following field shall not be present if only the Kernel is used.
 *   responder-acse-requirements          [8] IMPLICIT ACSE-requirements OPTIONAL,
 *   --  The following field shall only be present if the Authentication functional unit is selected.
 *   mechanism-name                       [9] IMPLICIT Mechanism-name OPTIONAL,
 *   --  This following field shall only be present if the Authentication functional unit is selected.
 *   responding-authentication-value
 *     [10] EXPLICIT Authentication-value OPTIONAL,
 *   aSO-context-name-list
 *     [11] IMPLICIT ASO-context-name-list OPTIONAL,
 *   --  The above field shall only be present if the Application Context Negotiation functional unit is selected.
 *   implementation-information
 *     [29] IMPLICIT Implementation-data OPTIONAL,
 *   ...,
 *   --  Extensions for higher level association FU
 *   p-context-result-list
 *     [12] IMPLICIT P-context-result-list OPTIONAL,
 *   called-asoi-tag                      [13] IMPLICIT ASOI-tag OPTIONAL,
 *   calling-asoi-tag                     [14] IMPLICIT ASOI-tag OPTIONAL,
 *   --  End of extensions for higher level association FU
 *   ...,
 *   user-information                     [30] IMPLICIT Association-data OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class AARE_apdu {
  constructor(
    /**
     * @summary `protocol_version`.
     * @public
     * @readonly
     */
    readonly protocol_version: OPTIONAL<AARE_apdu_protocol_version>,
    /**
     * @summary `aSO_context_name`.
     * @public
     * @readonly
     */
    readonly aSO_context_name: ASO_context_name,
    /**
     * @summary `result`.
     * @public
     * @readonly
     */
    readonly result: Associate_result,
    /**
     * @summary `result_source_diagnostic`.
     * @public
     * @readonly
     */
    readonly result_source_diagnostic: Associate_source_diagnostic,
    /**
     * @summary `responding_AP_title`.
     * @public
     * @readonly
     */
    readonly responding_AP_title: OPTIONAL<AP_title>,
    /**
     * @summary `responding_AE_qualifier`.
     * @public
     * @readonly
     */
    readonly responding_AE_qualifier: OPTIONAL<AE_qualifier>,
    /**
     * @summary `responding_AP_invocation_identifier`.
     * @public
     * @readonly
     */
    readonly responding_AP_invocation_identifier: OPTIONAL<AP_invocation_identifier>,
    /**
     * @summary `responding_AE_invocation_identifier`.
     * @public
     * @readonly
     */
    readonly responding_AE_invocation_identifier: OPTIONAL<AE_invocation_identifier>,
    /**
     * @summary `responder_acse_requirements`.
     * @public
     * @readonly
     */
    readonly responder_acse_requirements: OPTIONAL<ACSE_requirements>,
    /**
     * @summary `mechanism_name`.
     * @public
     * @readonly
     */
    readonly mechanism_name: OPTIONAL<Mechanism_name>,
    /**
     * @summary `responding_authentication_value`.
     * @public
     * @readonly
     */
    readonly responding_authentication_value: OPTIONAL<Authentication_value>,
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
     * @summary `p_context_result_list`.
     * @public
     * @readonly
     */
    readonly p_context_result_list: OPTIONAL<P_context_result_list>,
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
   * @summary Restructures an object into a AARE_apdu
   * @description
   *
   * This takes an `object` and converts it to a `AARE_apdu`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `AARE_apdu`.
   * @returns {AARE_apdu}
   */
  public static _from_object(
    _o: { [_K in keyof AARE_apdu]: AARE_apdu[_K] }
  ): AARE_apdu {
    return new AARE_apdu(
      _o.protocol_version,
      _o.aSO_context_name,
      _o.result,
      _o.result_source_diagnostic,
      _o.responding_AP_title,
      _o.responding_AE_qualifier,
      _o.responding_AP_invocation_identifier,
      _o.responding_AE_invocation_identifier,
      _o.responder_acse_requirements,
      _o.mechanism_name,
      _o.responding_authentication_value,
      _o.aSO_context_name_list,
      _o.implementation_information,
      _o.p_context_result_list,
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
      _ret[AARE_apdu_protocol_version_version1] = TRUE_BIT;
      return _ret;
    })();
  }
}
/* END_OF_SYMBOL_DEFINITION AARE_apdu */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AARE_apdu */
/**
 * @summary The Leading Root Component Types of AARE_apdu
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AARE_apdu: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'protocol-version',
    true,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'aSO-context-name',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'result',
    false,
    $.hasTag(_TagClass.context, 2),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'result-source-diagnostic',
    false,
    $.hasTag(_TagClass.context, 3),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'responding-AP-title',
    true,
    $.hasTag(_TagClass.context, 4),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'responding-AE-qualifier',
    true,
    $.hasTag(_TagClass.context, 5),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'responding-AP-invocation-identifier',
    true,
    $.hasTag(_TagClass.context, 6),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'responding-AE-invocation-identifier',
    true,
    $.hasTag(_TagClass.context, 7),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'responder-acse-requirements',
    true,
    $.hasTag(_TagClass.context, 8),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'mechanism-name',
    true,
    $.hasTag(_TagClass.context, 9),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'responding-authentication-value',
    true,
    $.hasTag(_TagClass.context, 10),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'aSO-context-name-list',
    true,
    $.hasTag(_TagClass.context, 11),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'implementation-information',
    true,
    $.hasTag(_TagClass.context, 29),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AARE_apdu */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AARE_apdu */
/**
 * @summary The Trailing Root Component Types of AARE_apdu
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AARE_apdu: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'user-information',
    true,
    $.hasTag(_TagClass.context, 30),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AARE_apdu */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AARE_apdu */
/**
 * @summary The Extension Addition Component Types of AARE_apdu
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AARE_apdu: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'p-context-result-list',
    true,
    $.hasTag(_TagClass.context, 12),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'called-asoi-tag',
    true,
    $.hasTag(_TagClass.context, 13),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'calling-asoi-tag',
    true,
    $.hasTag(_TagClass.context, 14),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AARE_apdu */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AARE_apdu */
let _cached_decoder_for_AARE_apdu: $.ASN1Decoder<AARE_apdu> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AARE_apdu */

/* START_OF_SYMBOL_DEFINITION _decode_AARE_apdu */
/**
 * @summary Decodes an ASN.1 element into a(n) AARE_apdu
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AARE_apdu} The decoded data structure.
 */
export function _decode_AARE_apdu(el: _Element) {
  if (!_cached_decoder_for_AARE_apdu) {
    _cached_decoder_for_AARE_apdu = $._decode_implicit<AARE_apdu>(
      () =>
        function (el: _Element): AARE_apdu {
          /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
          let protocol_version: OPTIONAL<AARE_apdu_protocol_version> =
            AARE_apdu._default_value_for_protocol_version;
          let aSO_context_name!: ASO_context_name;
          let result!: Associate_result;
          let result_source_diagnostic!: Associate_source_diagnostic;
          let responding_AP_title: OPTIONAL<AP_title>;
          let responding_AE_qualifier: OPTIONAL<AE_qualifier>;
          let responding_AP_invocation_identifier: OPTIONAL<AP_invocation_identifier>;
          let responding_AE_invocation_identifier: OPTIONAL<AE_invocation_identifier>;
          let responder_acse_requirements: OPTIONAL<ACSE_requirements>;
          let mechanism_name: OPTIONAL<Mechanism_name>;
          let responding_authentication_value: OPTIONAL<Authentication_value>;
          let aSO_context_name_list: OPTIONAL<ASO_context_name_list>;
          let implementation_information: OPTIONAL<Implementation_data>;
          let p_context_result_list: OPTIONAL<P_context_result_list>;
          let called_asoi_tag: OPTIONAL<ASOI_tag>;
          let calling_asoi_tag: OPTIONAL<ASOI_tag>;
          let _unrecognizedExtensionsList: _Element[] = [];
          let user_information: OPTIONAL<Association_data>;
          /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
          /* START_OF_CALLBACKS_MAP */
          const callbacks: $.DecodingMap = {
            'protocol-version': (_el: _Element): void => {
              protocol_version = $._decode_implicit<AARE_apdu_protocol_version>(
                () => _decode_AARE_apdu_protocol_version
              )(_el);
            },
            'aSO-context-name': (_el: _Element): void => {
              aSO_context_name = $._decode_explicit<ASO_context_name>(
                () => _decode_ASO_context_name
              )(_el);
            },
            result: (_el: _Element): void => {
              result = $._decode_explicit<Associate_result>(
                () => _decode_Associate_result
              )(_el);
            },
            'result-source-diagnostic': (_el: _Element): void => {
              result_source_diagnostic = $._decode_explicit<Associate_source_diagnostic>(
                () => _decode_Associate_source_diagnostic
              )(_el);
            },
            'responding-AP-title': (_el: _Element): void => {
              responding_AP_title = $._decode_explicit<AP_title>(
                () => _decode_AP_title
              )(_el);
            },
            'responding-AE-qualifier': (_el: _Element): void => {
              responding_AE_qualifier = $._decode_explicit<AE_qualifier>(
                () => _decode_AE_qualifier
              )(_el);
            },
            'responding-AP-invocation-identifier': (_el: _Element): void => {
              responding_AP_invocation_identifier = $._decode_explicit<AP_invocation_identifier>(
                () => _decode_AP_invocation_identifier
              )(_el);
            },
            'responding-AE-invocation-identifier': (_el: _Element): void => {
              responding_AE_invocation_identifier = $._decode_explicit<AE_invocation_identifier>(
                () => _decode_AE_invocation_identifier
              )(_el);
            },
            'responder-acse-requirements': (_el: _Element): void => {
              responder_acse_requirements = $._decode_implicit<ACSE_requirements>(
                () => _decode_ACSE_requirements
              )(_el);
            },
            'mechanism-name': (_el: _Element): void => {
              mechanism_name = $._decode_implicit<Mechanism_name>(
                () => _decode_Mechanism_name
              )(_el);
            },
            'responding-authentication-value': (_el: _Element): void => {
              responding_authentication_value = $._decode_explicit<Authentication_value>(
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
            'p-context-result-list': (_el: _Element): void => {
              p_context_result_list = $._decode_implicit<P_context_result_list>(
                () => _decode_P_context_result_list
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
            _root_component_type_list_1_spec_for_AARE_apdu,
            _extension_additions_list_spec_for_AARE_apdu,
            _root_component_type_list_2_spec_for_AARE_apdu,
            (ext: _Element): void => {
              _unrecognizedExtensionsList.push(ext);
            }
          );
          return new AARE_apdu /* SEQUENCE_CONSTRUCTOR_CALL */(
            protocol_version,
            aSO_context_name,
            result,
            result_source_diagnostic,
            responding_AP_title,
            responding_AE_qualifier,
            responding_AP_invocation_identifier,
            responding_AE_invocation_identifier,
            responder_acse_requirements,
            mechanism_name,
            responding_authentication_value,
            aSO_context_name_list,
            implementation_information,
            p_context_result_list,
            called_asoi_tag,
            calling_asoi_tag,
            _unrecognizedExtensionsList,
            user_information
          );
        }
    );
  }
  return _cached_decoder_for_AARE_apdu(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AARE_apdu */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AARE_apdu */
let _cached_encoder_for_AARE_apdu: $.ASN1Encoder<AARE_apdu> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AARE_apdu */

/* START_OF_SYMBOL_DEFINITION _encode_AARE_apdu */
/**
 * @summary Encodes a(n) AARE_apdu into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AARE_apdu, encoded as an ASN.1 Element.
 */
export function _encode_AARE_apdu(
  value: AARE_apdu,
  elGetter: $.ASN1Encoder<AARE_apdu>
) {
  if (!_cached_encoder_for_AARE_apdu) {
    _cached_encoder_for_AARE_apdu = $._encode_implicit(
      _TagClass.application,
      1,
      () =>
        function (
          value: AARE_apdu,
          elGetter: $.ASN1Encoder<AARE_apdu>
        ): _Element {
          return $._encodeSequence(
            ([] as (_Element | undefined)[])
              .concat(
                [
                  /* IF_DEFAULT */ value.protocol_version === undefined ||
                  $.deepEq(
                    value.protocol_version,
                    AARE_apdu._default_value_for_protocol_version
                  )
                    ? undefined
                    : $._encode_implicit(
                        _TagClass.context,
                        0,
                        () => _encode_AARE_apdu_protocol_version,
                        $.BER
                      )(value.protocol_version, $.BER),
                  /* REQUIRED   */ $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => _encode_ASO_context_name,
                    $.BER
                  )(value.aSO_context_name, $.BER),
                  /* REQUIRED   */ $._encode_explicit(
                    _TagClass.context,
                    2,
                    () => _encode_Associate_result,
                    $.BER
                  )(value.result, $.BER),
                  /* REQUIRED   */ $._encode_explicit(
                    _TagClass.context,
                    3,
                    () => _encode_Associate_source_diagnostic,
                    $.BER
                  )(value.result_source_diagnostic, $.BER),
                  /* IF_ABSENT  */ value.responding_AP_title === undefined
                    ? undefined
                    : $._encode_explicit(
                        _TagClass.context,
                        4,
                        () => _encode_AP_title,
                        $.BER
                      )(value.responding_AP_title, $.BER),
                  /* IF_ABSENT  */ value.responding_AE_qualifier === undefined
                    ? undefined
                    : $._encode_explicit(
                        _TagClass.context,
                        5,
                        () => _encode_AE_qualifier,
                        $.BER
                      )(value.responding_AE_qualifier, $.BER),
                  /* IF_ABSENT  */ value.responding_AP_invocation_identifier ===
                  undefined
                    ? undefined
                    : $._encode_explicit(
                        _TagClass.context,
                        6,
                        () => _encode_AP_invocation_identifier,
                        $.BER
                      )(value.responding_AP_invocation_identifier, $.BER),
                  /* IF_ABSENT  */ value.responding_AE_invocation_identifier ===
                  undefined
                    ? undefined
                    : $._encode_explicit(
                        _TagClass.context,
                        7,
                        () => _encode_AE_invocation_identifier,
                        $.BER
                      )(value.responding_AE_invocation_identifier, $.BER),
                  /* IF_ABSENT  */ value.responder_acse_requirements ===
                  undefined
                    ? undefined
                    : $._encode_implicit(
                        _TagClass.context,
                        8,
                        () => _encode_ACSE_requirements,
                        $.BER
                      )(value.responder_acse_requirements, $.BER),
                  /* IF_ABSENT  */ value.mechanism_name === undefined
                    ? undefined
                    : $._encode_implicit(
                        _TagClass.context,
                        9,
                        () => _encode_Mechanism_name,
                        $.BER
                      )(value.mechanism_name, $.BER),
                  /* IF_ABSENT  */ value.responding_authentication_value ===
                  undefined
                    ? undefined
                    : $._encode_explicit(
                        _TagClass.context,
                        10,
                        () => _encode_Authentication_value,
                        $.BER
                      )(value.responding_authentication_value, $.BER),
                  /* IF_ABSENT  */ value.aSO_context_name_list === undefined
                    ? undefined
                    : $._encode_implicit(
                        _TagClass.context,
                        11,
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
                  /* IF_ABSENT  */ value.p_context_result_list === undefined
                    ? undefined
                    : $._encode_implicit(
                        _TagClass.context,
                        12,
                        () => _encode_P_context_result_list,
                        $.BER
                      )(value.p_context_result_list, $.BER),
                  /* IF_ABSENT  */ value.called_asoi_tag === undefined
                    ? undefined
                    : $._encode_implicit(
                        _TagClass.context,
                        13,
                        () => _encode_ASOI_tag,
                        $.BER
                      )(value.called_asoi_tag, $.BER),
                  /* IF_ABSENT  */ value.calling_asoi_tag === undefined
                    ? undefined
                    : $._encode_implicit(
                        _TagClass.context,
                        14,
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
  return _cached_encoder_for_AARE_apdu(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AARE_apdu */

/* eslint-enable */
