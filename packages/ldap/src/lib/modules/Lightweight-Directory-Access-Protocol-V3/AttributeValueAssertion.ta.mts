/* eslint-disable */
import {
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
  AttributeDescription,
  _decode_AttributeDescription,
  _encode_AttributeDescription,
} from '../Lightweight-Directory-Access-Protocol-V3/AttributeDescription.ta.mjs';
import {
  AssertionValue,
  _decode_AssertionValue,
  _encode_AssertionValue,
} from '../Lightweight-Directory-Access-Protocol-V3/AssertionValue.ta.mjs';

/**
 * @summary AttributeValueAssertion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeValueAssertion ::= SEQUENCE {
 *   attributeDesc   AttributeDescription,
 *   assertionValue  AssertionValue
 * }
 * ```
 *
 * @class
 */
export class AttributeValueAssertion {
  constructor(
    /**
     * @summary `attributeDesc`.
     * @public
     * @readonly
     */
    readonly attributeDesc: AttributeDescription,
    /**
     * @summary `assertionValue`.
     * @public
     * @readonly
     */
    readonly assertionValue: AssertionValue,
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[] = []
  ) {}

  /**
   * @summary Restructures an object into a AttributeValueAssertion
   * @description
   *
   * This takes an `object` and converts it to a `AttributeValueAssertion`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `AttributeValueAssertion`.
   * @returns {AttributeValueAssertion}
   */
  public static _from_object(
    _o: { [_K in keyof AttributeValueAssertion]: AttributeValueAssertion[_K] }
  ): AttributeValueAssertion {
    return new AttributeValueAssertion(
      _o.attributeDesc,
      _o.assertionValue,
      _o._unrecognizedExtensionsList
    );
  }
}


/**
 * @summary The Leading Root Component Types of AttributeValueAssertion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AttributeValueAssertion: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'attributeDesc',
    false,
    $.hasTag(_TagClass.universal, 4)
  ),
  new $.ComponentSpec(
    'assertionValue',
    false,
    $.hasTag(_TagClass.universal, 4)
  ),
];


/**
 * @summary The Trailing Root Component Types of AttributeValueAssertion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AttributeValueAssertion: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of AttributeValueAssertion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AttributeValueAssertion: $.ComponentSpec[] = [];


/**
 * @summary Decodes an ASN.1 element into a(n) AttributeValueAssertion
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeValueAssertion} The decoded data structure.
 */
export function _decode_AttributeValueAssertion(el: _Element) {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError(
            'AttributeValueAssertion contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
    }
    sequence[0].name = 'attributeDesc';
    sequence[1].name = 'assertionValue';
    let attributeDesc!: AttributeDescription;
    let assertionValue!: AssertionValue;
    attributeDesc = _decode_AttributeDescription(sequence[0]);
    assertionValue = _decode_AssertionValue(sequence[1]);
    return new AttributeValueAssertion(
        attributeDesc,
        assertionValue,
        sequence.slice(2)
    );
}


/**
 * @summary Encodes a(n) AttributeValueAssertion into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeValueAssertion, encoded as an ASN.1 Element.
 */
export function _encode_AttributeValueAssertion(
  value: AttributeValueAssertion,
  _elGetter: $.ASN1Encoder<AttributeValueAssertion>
) {
    const components: _Element[] = [
        _encode_AttributeDescription(value.attributeDesc, $.BER),
        _encode_AssertionValue(value.assertionValue, $.BER),
        ...value._unrecognizedExtensionsList ?? [],
    ];
    return $._encodeSequence(components, $.BER);
}


/* eslint-enable */
