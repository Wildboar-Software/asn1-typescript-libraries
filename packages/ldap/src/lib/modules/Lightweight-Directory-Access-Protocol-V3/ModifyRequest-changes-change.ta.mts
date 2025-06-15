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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
  ModifyRequest_changes_change_operation,
  _enum_for_ModifyRequest_changes_change_operation,
  _decode_ModifyRequest_changes_change_operation,
  _encode_ModifyRequest_changes_change_operation,
} from '../Lightweight-Directory-Access-Protocol-V3/ModifyRequest-changes-change-operation.ta.mjs';
import {
  PartialAttribute,
  _decode_PartialAttribute,
  _encode_PartialAttribute,
} from '../Lightweight-Directory-Access-Protocol-V3/PartialAttribute.ta.mjs';

/**
 * @summary ModifyRequest_changes_change
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ModifyRequest-changes-change ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class ModifyRequest_changes_change {
  constructor(
    /**
     * @summary `operation`.
     * @public
     * @readonly
     */
    readonly operation: ModifyRequest_changes_change_operation,
    /**
     * @summary `modification`.
     * @public
     * @readonly
     */
    readonly modification: PartialAttribute,
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[] = []
  ) {}

  /**
   * @summary Restructures an object into a ModifyRequest_changes_change
   * @description
   *
   * This takes an `object` and converts it to a `ModifyRequest_changes_change`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `ModifyRequest_changes_change`.
   * @returns {ModifyRequest_changes_change}
   */
  public static _from_object(
    _o: {
      [_K in keyof ModifyRequest_changes_change]: ModifyRequest_changes_change[_K];
    }
  ): ModifyRequest_changes_change {
    return new ModifyRequest_changes_change(
      _o.operation,
      _o.modification,
      _o._unrecognizedExtensionsList
    );
  }

  /**
   * @summary The enum used as the type of the component `operation`
   * @public
   * @static
   */

  public static _enum_for_operation = _enum_for_ModifyRequest_changes_change_operation;
}


/**
 * @summary The Leading Root Component Types of ModifyRequest_changes_change
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ModifyRequest_changes_change: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'operation',
    false,
    $.hasTag(_TagClass.universal, 10),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'modification',
    false,
    $.hasTag(_TagClass.universal, 16),
    undefined,
    undefined
  ),
];


/**
 * @summary The Trailing Root Component Types of ModifyRequest_changes_change
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ModifyRequest_changes_change: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of ModifyRequest_changes_change
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ModifyRequest_changes_change: $.ComponentSpec[] = [];


/**
 * @summary Decodes an ASN.1 element into a(n) ModifyRequest_changes_change
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ModifyRequest_changes_change} The decoded data structure.
 */
export function _decode_ModifyRequest_changes_change(el: _Element) {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError(
            'ModifyRequest-changes-change contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
    }
    sequence[0].name = 'operation';
    sequence[1].name = 'modification';
    let operation!: ModifyRequest_changes_change_operation;
    let modification!: PartialAttribute;
    operation = _decode_ModifyRequest_changes_change_operation(sequence[0]);
    modification = _decode_PartialAttribute(sequence[1]);
    return new ModifyRequest_changes_change(
        operation,
        modification,
        sequence.slice(2)
    );
}


/**
 * @summary Encodes a(n) ModifyRequest_changes_change into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ModifyRequest_changes_change, encoded as an ASN.1 Element.
 */
export function _encode_ModifyRequest_changes_change(
  value: ModifyRequest_changes_change) {
    const components: _Element[] = [
        _encode_ModifyRequest_changes_change_operation(value.operation, $.BER),
        _encode_PartialAttribute(value.modification, $.BER),
        ...value._unrecognizedExtensionsList ?? [],
    ];
    return $._encodeSequence(components, $.BER);
}


/* eslint-enable */
