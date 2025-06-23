/* eslint-disable */
import {
  OPTIONAL,
  OCTET_STRING,
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
  LDAPString,
  _decode_LDAPString,
  _encode_LDAPString,
} from '../Lightweight-Directory-Access-Protocol-V3/LDAPString.ta.mjs';

/**
 * @summary SaslCredentials
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SaslCredentials ::= SEQUENCE {
 *   mechanism    LDAPString,
 *   credentials  OCTET STRING OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class SaslCredentials {
  constructor(
    /**
     * @summary `mechanism`.
     * @public
     * @readonly
     */
    readonly mechanism: LDAPString,
    /**
     * @summary `credentials`.
     * @public
     * @readonly
     */
    readonly credentials: OPTIONAL<OCTET_STRING>,
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[] = []
  ) {}

  /**
   * @summary Restructures an object into a SaslCredentials
   * @description
   *
   * This takes an `object` and converts it to a `SaslCredentials`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `SaslCredentials`.
   * @returns {SaslCredentials}
   */
  public static _from_object(
    _o: { [_K in keyof SaslCredentials]: SaslCredentials[_K] }
  ): SaslCredentials {
    return new SaslCredentials(
      _o.mechanism,
      _o.credentials,
      _o._unrecognizedExtensionsList
    );
  }
}


/**
 * @summary The Leading Root Component Types of SaslCredentials
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SaslCredentials: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'mechanism',
    false,
    $.hasTag(_TagClass.universal, 4)
  ),
  new $.ComponentSpec(
    'credentials',
    true,
    $.hasTag(_TagClass.universal, 4)
  ),
];


/**
 * @summary The Trailing Root Component Types of SaslCredentials
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SaslCredentials: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of SaslCredentials
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SaslCredentials: $.ComponentSpec[] = [];


/**
 * @summary Decodes an ASN.1 element into a(n) SaslCredentials
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SaslCredentials} The decoded data structure.
 */
export function _decode_SaslCredentials(el: _Element) {
    let mechanism!: LDAPString;
    let credentials: OPTIONAL<OCTET_STRING>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        mechanism: (_el: _Element): void => {
            mechanism = _decode_LDAPString(_el);
        },
        credentials: (_el: _Element): void => {
            credentials = $._decodeOctetString(_el);
        },
    };
    $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_SaslCredentials,
        _extension_additions_list_spec_for_SaslCredentials,
        _root_component_type_list_2_spec_for_SaslCredentials,
        (ext: _Element): void => {
            _unrecognizedExtensionsList.push(ext);
        }
    );
    return new SaslCredentials (
        mechanism,
        credentials,
        _unrecognizedExtensionsList
    );
}


/**
 * @summary Encodes a(n) SaslCredentials into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SaslCredentials, encoded as an ASN.1 Element.
 */
export function _encode_SaslCredentials(
  value: SaslCredentials) {
    const components: _Element[] = [
        _encode_LDAPString(value.mechanism, $.BER),
    ];
    if (value.credentials) {
        components.push($._encodeOctetString(value.credentials, $.BER));
    }
    return $._encodeSequence(components, $.BER);
}


/* eslint-enable */
