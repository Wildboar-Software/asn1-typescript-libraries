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
  ObjectClass,
  _decode_ObjectClass,
  _encode_ObjectClass,
} from '../CMIP-1/ObjectClass.ta.mjs';
export {
  ObjectClass,
  _decode_ObjectClass,
  _encode_ObjectClass,
} from '../CMIP-1/ObjectClass.ta.mjs';
import {
  CreateArgument_managedOrSuperiorObjectInstance,
  _decode_CreateArgument_managedOrSuperiorObjectInstance,
  _encode_CreateArgument_managedOrSuperiorObjectInstance,
} from '../CMIP-1/CreateArgument-managedOrSuperiorObjectInstance.ta.mjs';
export {
  CreateArgument_managedOrSuperiorObjectInstance,
  _decode_CreateArgument_managedOrSuperiorObjectInstance,
  _encode_CreateArgument_managedOrSuperiorObjectInstance,
} from '../CMIP-1/CreateArgument-managedOrSuperiorObjectInstance.ta.mjs';
import {
  AccessControl,
  _decode_AccessControl,
  _encode_AccessControl,
} from '../CMIP-1/AccessControl.ta.mjs';
export {
  AccessControl,
  _decode_AccessControl,
  _encode_AccessControl,
} from '../CMIP-1/AccessControl.ta.mjs';
import {
  ObjectInstance,
  _decode_ObjectInstance,
  _encode_ObjectInstance,
} from '../CMIP-1/ObjectInstance.ta.mjs';
export {
  ObjectInstance,
  _decode_ObjectInstance,
  _encode_ObjectInstance,
} from '../CMIP-1/ObjectInstance.ta.mjs';
import {
  Attribute,
  _decode_Attribute,
  _encode_Attribute,
} from '../CMIP-1/Attribute.ta.mjs';
export {
  Attribute,
  _decode_Attribute,
  _encode_Attribute,
} from '../CMIP-1/Attribute.ta.mjs';

/* START_OF_SYMBOL_DEFINITION CreateArgument */
/**
 * @summary CreateArgument
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CreateArgument ::= SEQUENCE {
 *   managedObjectClass               ObjectClass,
 *   managedOrSuperiorObjectInstance
 *     CHOICE {managedObjectInstance   ObjectInstance,
 *             superiorObjectInstance  [8]  ObjectInstance} OPTIONAL,
 *   accessControl                    [5]  AccessControl OPTIONAL,
 *   referenceObjectInstance          [6]  ObjectInstance OPTIONAL,
 *   attributeList                    [7] IMPLICIT SET OF Attribute OPTIONAL,
 *   ...
 * }
 * ```
 *
 * @class
 */
export class CreateArgument {
  constructor(
    /**
     * @summary `managedObjectClass`.
     * @public
     * @readonly
     */
    readonly managedObjectClass: ObjectClass,
    /**
     * @summary `managedOrSuperiorObjectInstance`.
     * @public
     * @readonly
     */
    readonly managedOrSuperiorObjectInstance: OPTIONAL<CreateArgument_managedOrSuperiorObjectInstance>,
    /**
     * @summary `accessControl`.
     * @public
     * @readonly
     */
    readonly accessControl: OPTIONAL<AccessControl>,
    /**
     * @summary `referenceObjectInstance`.
     * @public
     * @readonly
     */
    readonly referenceObjectInstance: OPTIONAL<ObjectInstance>,
    /**
     * @summary `attributeList`.
     * @public
     * @readonly
     */
    readonly attributeList: OPTIONAL<Attribute[]>,
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[] = []
  ) {}

  /**
   * @summary Restructures an object into a CreateArgument
   * @description
   *
   * This takes an `object` and converts it to a `CreateArgument`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `CreateArgument`.
   * @returns {CreateArgument}
   */
  public static _from_object(
    _o: { [_K in keyof CreateArgument]: CreateArgument[_K] }
  ): CreateArgument {
    return new CreateArgument(
      _o.managedObjectClass,
      _o.managedOrSuperiorObjectInstance,
      _o.accessControl,
      _o.referenceObjectInstance,
      _o.attributeList,
      _o._unrecognizedExtensionsList
    );
  }
}
/* END_OF_SYMBOL_DEFINITION CreateArgument */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CreateArgument */
/**
 * @summary The Leading Root Component Types of CreateArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CreateArgument: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'managedObjectClass',
    false,
    $.hasAnyTag,
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'managedOrSuperiorObjectInstance',
    true,
    $.hasAnyTag,
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'accessControl',
    true,
    $.hasTag(_TagClass.context, 5),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'referenceObjectInstance',
    true,
    $.hasTag(_TagClass.context, 6),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'attributeList',
    true,
    $.hasTag(_TagClass.context, 7),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CreateArgument */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CreateArgument */
/**
 * @summary The Trailing Root Component Types of CreateArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CreateArgument: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CreateArgument */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CreateArgument */
/**
 * @summary The Extension Addition Component Types of CreateArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CreateArgument: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CreateArgument */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CreateArgument */
let _cached_decoder_for_CreateArgument: $.ASN1Decoder<CreateArgument> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CreateArgument */

/* START_OF_SYMBOL_DEFINITION _decode_CreateArgument */
/**
 * @summary Decodes an ASN.1 element into a(n) CreateArgument
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CreateArgument} The decoded data structure.
 */
export function _decode_CreateArgument(el: _Element) {
  if (!_cached_decoder_for_CreateArgument) {
    _cached_decoder_for_CreateArgument = function (
      el: _Element
    ): CreateArgument {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let managedObjectClass!: ObjectClass;
      let managedOrSuperiorObjectInstance: OPTIONAL<CreateArgument_managedOrSuperiorObjectInstance>;
      let accessControl: OPTIONAL<AccessControl>;
      let referenceObjectInstance: OPTIONAL<ObjectInstance>;
      let attributeList: OPTIONAL<Attribute[]>;
      let _unrecognizedExtensionsList: _Element[] = [];
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        managedObjectClass: (_el: _Element): void => {
          managedObjectClass = _decode_ObjectClass(_el);
        },
        managedOrSuperiorObjectInstance: (_el: _Element): void => {
          managedOrSuperiorObjectInstance = _decode_CreateArgument_managedOrSuperiorObjectInstance(
            _el
          );
        },
        accessControl: (_el: _Element): void => {
          accessControl = $._decode_explicit<AccessControl>(
            () => _decode_AccessControl
          )(_el);
        },
        referenceObjectInstance: (_el: _Element): void => {
          referenceObjectInstance = $._decode_explicit<ObjectInstance>(
            () => _decode_ObjectInstance
          )(_el);
        },
        attributeList: (_el: _Element): void => {
          attributeList = $._decode_implicit<Attribute[]>(() =>
            $._decodeSetOf<Attribute>(() => _decode_Attribute)
          )(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_CreateArgument,
        _extension_additions_list_spec_for_CreateArgument,
        _root_component_type_list_2_spec_for_CreateArgument,
        (ext: _Element): void => {
          _unrecognizedExtensionsList.push(ext);
        }
      );
      return new CreateArgument /* SEQUENCE_CONSTRUCTOR_CALL */(
        managedObjectClass,
        managedOrSuperiorObjectInstance,
        accessControl,
        referenceObjectInstance,
        attributeList,
        _unrecognizedExtensionsList
      );
    };
  }
  return _cached_decoder_for_CreateArgument(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CreateArgument */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CreateArgument */
let _cached_encoder_for_CreateArgument: $.ASN1Encoder<CreateArgument> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CreateArgument */

/* START_OF_SYMBOL_DEFINITION _encode_CreateArgument */
/**
 * @summary Encodes a(n) CreateArgument into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CreateArgument, encoded as an ASN.1 Element.
 */
export function _encode_CreateArgument(
  value: CreateArgument,
  elGetter: $.ASN1Encoder<CreateArgument>
) {
  if (!_cached_encoder_for_CreateArgument) {
    _cached_encoder_for_CreateArgument = function (
      value: CreateArgument,
      elGetter: $.ASN1Encoder<CreateArgument>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat(
            [
              /* REQUIRED   */ _encode_ObjectClass(
                value.managedObjectClass,
                $.BER
              ),
              /* IF_ABSENT  */ value.managedOrSuperiorObjectInstance ===
              undefined
                ? undefined
                : _encode_CreateArgument_managedOrSuperiorObjectInstance(
                    value.managedOrSuperiorObjectInstance,
                    $.BER
                  ),
              /* IF_ABSENT  */ value.accessControl === undefined
                ? undefined
                : $._encode_explicit(
                    _TagClass.context,
                    5,
                    () => _encode_AccessControl,
                    $.BER
                  )(value.accessControl, $.BER),
              /* IF_ABSENT  */ value.referenceObjectInstance === undefined
                ? undefined
                : $._encode_explicit(
                    _TagClass.context,
                    6,
                    () => _encode_ObjectInstance,
                    $.BER
                  )(value.referenceObjectInstance, $.BER),
              /* IF_ABSENT  */ value.attributeList === undefined
                ? undefined
                : $._encode_implicit(
                    _TagClass.context,
                    7,
                    () =>
                      $._encodeSetOf<Attribute>(() => _encode_Attribute, $.BER),
                    $.BER
                  )(value.attributeList, $.BER),
            ],
            value._unrecognizedExtensionsList
              ? value._unrecognizedExtensionsList
              : []
          )
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_CreateArgument(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CreateArgument */

/* eslint-enable */
