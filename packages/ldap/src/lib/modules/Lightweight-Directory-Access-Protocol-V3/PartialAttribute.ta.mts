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
  BERElement,
  ASN1TagClass,
  ASN1Construction,
  ASN1UniversalType,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
  AttributeDescription,
  _decode_AttributeDescription,
  _encode_AttributeDescription,
} from '../Lightweight-Directory-Access-Protocol-V3/AttributeDescription.ta.mjs';
import {
  AttributeValue,
  _decode_AttributeValue,
  _encode_AttributeValue,
} from '../Lightweight-Directory-Access-Protocol-V3/AttributeValue.ta.mjs';

/**
 * @summary PartialAttribute
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PartialAttribute ::= SEQUENCE {
 *   type  AttributeDescription,
 *   vals  SET OF value AttributeValue
 * }
 * ```
 *
 */
export class PartialAttribute {
  constructor(
    /**
     * @summary `type_`.
     * @public
     * @readonly
     */
    readonly type_: AttributeDescription,
    /**
     * @summary `vals`.
     * @public
     * @readonly
     */
    readonly vals: AttributeValue[],
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[] = []
  ) {}

  /**
   * @summary Restructures an object into a PartialAttribute
   * @description
   *
   * This takes an `object` and converts it to a `PartialAttribute`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `PartialAttribute`.
   * @returns {PartialAttribute}
   */
  public static _from_object(
    _o: { [_K in keyof PartialAttribute]: PartialAttribute[_K] }
  ): PartialAttribute {
    return new PartialAttribute(
      _o.type_,
      _o.vals,
      _o._unrecognizedExtensionsList
    );
  }
}


/**
 * @summary The Leading Root Component Types of PartialAttribute
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PartialAttribute: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'type',
    false,
    $.hasTag(_TagClass.universal, 4)
  ),
  new $.ComponentSpec(
    'vals',
    false,
    $.hasTag(_TagClass.universal, 17)
  ),
];


/**
 * @summary The Trailing Root Component Types of PartialAttribute
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PartialAttribute: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of PartialAttribute
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PartialAttribute: $.ComponentSpec[] = [];


/**
 * @summary Decodes an ASN.1 element into a(n) PartialAttribute
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PartialAttribute} The decoded data structure.
 */
export function _decode_PartialAttribute(el: _Element): PartialAttribute {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError(
            'PartialAttribute contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
    }
    sequence[0].name = 'type';
    sequence[1].name = 'vals';
    let type_!: AttributeDescription;
    let vals!: AttributeValue[];
    type_ = _decode_AttributeDescription(sequence[0]);
    vals = $._decodeSetOf<AttributeValue>(() => _decode_AttributeValue)(sequence[1]);
    return new PartialAttribute(type_, vals, sequence.slice(2));
}


/**
 * @summary Encodes a(n) PartialAttribute into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PartialAttribute, encoded as an ASN.1 Element.
 */
export function _encode_PartialAttribute(
  value: PartialAttribute,
  _elGetter: $.ASN1Encoder<PartialAttribute>
): _Element {
    const vals = value.vals.map((v) => _encode_AttributeValue(v, $.BER));
    const valsEl = new BERElement(
        ASN1TagClass.universal,
        ASN1Construction.constructed,
        ASN1UniversalType.set,
    );
    valsEl.setOf = vals;
    const components: _Element[] = [
        _encode_AttributeDescription(value.type_, $.BER),
        valsEl,
        ...value._unrecognizedExtensionsList ?? [],
    ];
    return $._encodeSequence(components, $.BER);
}


/* eslint-enable */
