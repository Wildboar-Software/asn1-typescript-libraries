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
import * as $ from 'asn1-ts/dist/node/functional';
import {
  ModifyRequest_changes_change_operation,
  _enum_for_ModifyRequest_changes_change_operation,
  ModifyRequest_changes_change_operation_add /* IMPORTED_LONG_ENUMERATION_ITEM */,
  add /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  ModifyRequest_changes_change_operation_delete_ /* IMPORTED_LONG_ENUMERATION_ITEM */,
  delete_ /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  ModifyRequest_changes_change_operation_replace /* IMPORTED_LONG_ENUMERATION_ITEM */,
  replace /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_ModifyRequest_changes_change_operation,
  _encode_ModifyRequest_changes_change_operation,
} from '../Lightweight-Directory-Access-Protocol-V3/ModifyRequest-changes-change-operation.ta';
export {
  ModifyRequest_changes_change_operation,
  _enum_for_ModifyRequest_changes_change_operation,
  ModifyRequest_changes_change_operation_add /* IMPORTED_LONG_ENUMERATION_ITEM */,
  add /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  ModifyRequest_changes_change_operation_delete_ /* IMPORTED_LONG_ENUMERATION_ITEM */,
  delete_ /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  ModifyRequest_changes_change_operation_replace /* IMPORTED_LONG_ENUMERATION_ITEM */,
  replace /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_ModifyRequest_changes_change_operation,
  _encode_ModifyRequest_changes_change_operation,
} from '../Lightweight-Directory-Access-Protocol-V3/ModifyRequest-changes-change-operation.ta';
import {
  PartialAttribute,
  _decode_PartialAttribute,
  _encode_PartialAttribute,
} from '../Lightweight-Directory-Access-Protocol-V3/PartialAttribute.ta';
export {
  PartialAttribute,
  _decode_PartialAttribute,
  _encode_PartialAttribute,
} from '../Lightweight-Directory-Access-Protocol-V3/PartialAttribute.ta';

/* START_OF_SYMBOL_DEFINITION ModifyRequest_changes_change */
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
/* END_OF_SYMBOL_DEFINITION ModifyRequest_changes_change */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ModifyRequest_changes_change */
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
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ModifyRequest_changes_change */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ModifyRequest_changes_change */
/**
 * @summary The Trailing Root Component Types of ModifyRequest_changes_change
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ModifyRequest_changes_change: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ModifyRequest_changes_change */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ModifyRequest_changes_change */
/**
 * @summary The Extension Addition Component Types of ModifyRequest_changes_change
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ModifyRequest_changes_change: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ModifyRequest_changes_change */

/* START_OF_SYMBOL_DEFINITION _decode_ModifyRequest_changes_change */
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
/* END_OF_SYMBOL_DEFINITION _decode_ModifyRequest_changes_change */

/* START_OF_SYMBOL_DEFINITION _encode_ModifyRequest_changes_change */
/**
 * @summary Encodes a(n) ModifyRequest_changes_change into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ModifyRequest_changes_change, encoded as an ASN.1 Element.
 */
export function _encode_ModifyRequest_changes_change(
  value: ModifyRequest_changes_change,
  elGetter: $.ASN1Encoder<ModifyRequest_changes_change>
) {
    const components: _Element[] = [
        _encode_ModifyRequest_changes_change_operation(value.operation, $.BER),
        _encode_PartialAttribute(value.modification, $.BER),
        ...value._unrecognizedExtensionsList ?? [],
    ];
    return $._encodeSequence(components, $.BER);
}

/* END_OF_SYMBOL_DEFINITION _encode_ModifyRequest_changes_change */

/* eslint-enable */
