/* eslint-disable */
import {
  OPTIONAL,
  BOOLEAN,
  OCTET_STRING,
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
  LDAPOID,
  _decode_LDAPOID,
  _encode_LDAPOID,
} from '../Lightweight-Directory-Access-Protocol-V3/LDAPOID.ta.mjs';

/**
 * @summary Control
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Control ::= SEQUENCE {
 *   controlType   LDAPOID,
 *   criticality   BOOLEAN DEFAULT FALSE,
 *   controlValue  OCTET STRING OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class Control {
  constructor(
    /**
     * @summary `controlType`.
     * @public
     * @readonly
     */
    readonly controlType: LDAPOID,
    /**
     * @summary `criticality`.
     * @public
     * @readonly
     */
    readonly criticality: OPTIONAL<BOOLEAN>,
    /**
     * @summary `controlValue`.
     * @public
     * @readonly
     */
    readonly controlValue: OPTIONAL<OCTET_STRING>,
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[] = []
  ) {}

  /**
   * @summary Restructures an object into a Control
   * @description
   *
   * This takes an `object` and converts it to a `Control`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `Control`.
   * @returns {Control}
   */
  public static _from_object(
    _o: { [_K in keyof Control]: Control[_K] }
  ): Control {
    return new Control(
      _o.controlType,
      _o.criticality,
      _o.controlValue,
      _o._unrecognizedExtensionsList
    );
  }

  /**
   * @summary Getter that returns the default value for `criticality`.
   * @public
   * @static
   * @method
   */
  public static get _default_value_for_criticality() {
    return false;
  }
}


/**
 * @summary The Leading Root Component Types of Control
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Control: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'controlType',
    false,
    $.hasTag(_TagClass.universal, 4),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'criticality',
    true,
    $.hasTag(_TagClass.universal, 1),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'controlValue',
    true,
    $.hasTag(_TagClass.universal, 4),
    undefined,
    undefined
  ),
];


/**
 * @summary The Trailing Root Component Types of Control
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Control: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of Control
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Control: $.ComponentSpec[] = [];


/**
 * @summary Decodes an ASN.1 element into a(n) Control
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Control} The decoded data structure.
 */
export function _decode_Control(el: _Element) {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let controlType!: LDAPOID;
    let criticality: OPTIONAL<BOOLEAN> = Control._default_value_for_criticality;
    let controlValue: OPTIONAL<OCTET_STRING>;
    let _unrecognizedExtensionsList: _Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        controlType: (_el: _Element): void => {
            controlType = _decode_LDAPOID(_el);
        },
        criticality: (_el: _Element): void => {
            criticality = $._decodeBoolean(_el);
        },
        controlValue: (_el: _Element): void => {
            controlValue = $._decodeOctetString(_el);
        },
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_Control,
        _extension_additions_list_spec_for_Control,
        _root_component_type_list_2_spec_for_Control,
        (ext: _Element): void => {
            _unrecognizedExtensionsList.push(ext);
        }
    );
    return new Control /* SEQUENCE_CONSTRUCTOR_CALL */(
        controlType,
        criticality,
        controlValue,
        _unrecognizedExtensionsList
    );
}




/**
 * @summary Encodes a(n) Control into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Control, encoded as an ASN.1 Element.
 */
export function _encode_Control(
  value: Control) {
    const components: _Element[] = [
        _encode_LDAPOID(value.controlType, $.BER),
    ];
    if (value.criticality) {
        components.push($._encodeBoolean(value.criticality, $.BER));
    }
    if (value.controlValue) {
        components.push($._encodeOctetString(value.controlValue, $.BER));
    }
    return $._encodeSequence(components, $.BER);
}


/* eslint-enable */
