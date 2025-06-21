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
  LDAPResult_resultCode,
  _enum_for_LDAPResult_resultCode,
  _decode_LDAPResult_resultCode,
  _encode_LDAPResult_resultCode,
} from '../Lightweight-Directory-Access-Protocol-V3/LDAPResult-resultCode.ta.mjs';
import {
  LDAPDN,
  _decode_LDAPDN,
  _encode_LDAPDN,
} from '../Lightweight-Directory-Access-Protocol-V3/LDAPDN.ta.mjs';
import {
  LDAPString,
  _decode_LDAPString,
  _encode_LDAPString,
} from '../Lightweight-Directory-Access-Protocol-V3/LDAPString.ta.mjs';
import {
  Referral,
  _decode_Referral,
  _encode_Referral,
} from '../Lightweight-Directory-Access-Protocol-V3/Referral.ta.mjs';


/**
 * @summary LDAPResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LDAPResult ::= SEQUENCE {
 *   resultCode
 *     ENUMERATED {success(0), operationsError(1), protocolError(2),
 *                 timeLimitExceeded(3), sizeLimitExceeded(4), compareFalse(5),
 *                 compareTrue(6), authMethodNotSupported(7),
 *                 strongerAuthRequired(8),
 *                 -- 9 reserved
 *                 referral(10), adminLimitExceeded(11),
 *                 unavailableCriticalExtension(12), confidentialityRequired(13),
 *                 saslBindInProgress(14), noSuchAttribute(16),
 *                 undefinedAttributeType(17), inappropriateMatching(18),
 *                 constraintViolation(19), attributeOrValueExists(20),
 *                 invalidAttributeSyntax(21),
 *                 -- 22-31 unused
 *                 noSuchObject(32), aliasProblem(33),
 *                 invalidDNSyntax(34),
 *                 -- 35 reserved for undefined isLeaf
 *                 aliasDereferencingProblem(36),
 *                 -- 37-47 unused
 *                 inappropriateAuthentication(48), invalidCredentials(49),
 *                 insufficientAccessRights(50), busy(51), unavailable(52),
 *                 unwillingToPerform(53),
 *                 loopDetect(54),
 *                 -- 55-63 unused
 *                 namingViolation(64), objectClassViolation(65),
 *                 notAllowedOnNonLeaf(66), notAllowedOnRDN(67),
 *                 entryAlreadyExists(68),
 *                 objectClassModsProhibited(69),
 *                 -- 70 reserved for CLDAP
 *                 affectsMultipleDSAs(71),
 *                 -- 72-79 unused
 *                 other(80), ...
 *                 },
 *   matchedDN          LDAPDN,
 *   diagnosticMessage  LDAPString,
 *   referral           [3]  Referral OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class LDAPResult {
  constructor(
    /**
     * @summary `resultCode`.
     * @public
     * @readonly
     */
    readonly resultCode: LDAPResult_resultCode,
    /**
     * @summary `matchedDN`.
     * @public
     * @readonly
     */
    readonly matchedDN: LDAPDN,
    /**
     * @summary `diagnosticMessage`.
     * @public
     * @readonly
     */
    readonly diagnosticMessage: LDAPString,
    /**
     * @summary `referral`.
     * @public
     * @readonly
     */
    readonly referral: OPTIONAL<Referral>,
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[] = []
  ) {}

  /**
   * @summary Restructures an object into a LDAPResult
   * @description
   *
   * This takes an `object` and converts it to a `LDAPResult`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `LDAPResult`.
   * @returns {LDAPResult}
   */
  public static _from_object(
    _o: { [_K in keyof LDAPResult]: LDAPResult[_K] }
  ): LDAPResult {
    return new LDAPResult(
      _o.resultCode,
      _o.matchedDN,
      _o.diagnosticMessage,
      _o.referral,
      _o._unrecognizedExtensionsList
    );
  }

  /**
   * @summary The enum used as the type of the component `resultCode`
   * @public
   * @static
   */

  public static _enum_for_resultCode = _enum_for_LDAPResult_resultCode;
}


/**
 * @summary The Leading Root Component Types of LDAPResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_LDAPResult: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'resultCode',
    false,
    $.hasTag(_TagClass.universal, 10)
  ),
  new $.ComponentSpec(
    'matchedDN',
    false,
    $.hasTag(_TagClass.universal, 4)
  ),
  new $.ComponentSpec(
    'diagnosticMessage',
    false,
    $.hasTag(_TagClass.universal, 4)
  ),
  new $.ComponentSpec(
    'referral',
    true,
    $.hasTag(_TagClass.context, 3)
  ),
];


/**
 * @summary The Trailing Root Component Types of LDAPResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_LDAPResult: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of LDAPResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_LDAPResult: $.ComponentSpec[] = [];


/**
 * @summary Decodes an ASN.1 element into a(n) LDAPResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LDAPResult} The decoded data structure.
 */
export function _decode_LDAPResult(el: _Element) {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let resultCode!: LDAPResult_resultCode;
    let matchedDN!: LDAPDN;
    let diagnosticMessage!: LDAPString;
    let referral: OPTIONAL<Referral>;
    let _unrecognizedExtensionsList: _Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        resultCode: (_el: _Element): void => {
            resultCode = _decode_LDAPResult_resultCode(_el);
        },
        matchedDN: (_el: _Element): void => {
            matchedDN = _decode_LDAPDN(_el);
        },
        diagnosticMessage: (_el: _Element): void => {
            diagnosticMessage = _decode_LDAPString(_el);
        },
        referral: (_el: _Element): void => {
            referral = $._decode_implicit<Referral>(() => _decode_Referral)(_el);
        },
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_LDAPResult,
        _extension_additions_list_spec_for_LDAPResult,
        _root_component_type_list_2_spec_for_LDAPResult,
        (ext: _Element): void => {
            _unrecognizedExtensionsList.push(ext);
        }
    );
    return new LDAPResult /* SEQUENCE_CONSTRUCTOR_CALL */(
        resultCode,
        matchedDN,
        diagnosticMessage,
        referral,
        _unrecognizedExtensionsList
    );
}


/**
 * @summary Encodes a(n) LDAPResult into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LDAPResult, encoded as an ASN.1 Element.
 */
export function _encode_LDAPResult(
  value: LDAPResult) {
    const components: _Element[] = [
        _encode_LDAPResult_resultCode(value.resultCode, $.BER),
        _encode_LDAPDN(value.matchedDN, $.BER),
        _encode_LDAPString(value.diagnosticMessage, $.BER),
    ];
    if (value.referral) {
        const c = $._encode_implicit(
            _TagClass.context,
            3,
            () => _encode_Referral,
            $.BER
        )(value.referral, $.BER);
        components.push(c);
    }
    components.push(...value._unrecognizedExtensionsList ?? []);
    return $._encodeSequence(components, $.BER);
}


/* eslint-enable */
