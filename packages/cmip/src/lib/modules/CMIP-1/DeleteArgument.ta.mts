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
  BaseManagedObjectId,
  _decode_BaseManagedObjectId,
  _encode_BaseManagedObjectId,
} from '../CMIP-1/BaseManagedObjectId.ta.mjs';
export {
  BaseManagedObjectId,
  _decode_BaseManagedObjectId,
  _encode_BaseManagedObjectId,
} from '../CMIP-1/BaseManagedObjectId.ta.mjs';
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
  CMISSync,
  _enum_for_CMISSync,
  CMISSync_bestEffort /* IMPORTED_LONG_ENUMERATION_ITEM */,
  bestEffort /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  CMISSync_atomic /* IMPORTED_LONG_ENUMERATION_ITEM */,
  atomic /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_CMISSync,
  _encode_CMISSync,
} from '../CMIP-1/CMISSync.ta.mjs';
export {
  CMISSync,
  _enum_for_CMISSync,
  CMISSync_bestEffort /* IMPORTED_LONG_ENUMERATION_ITEM */,
  bestEffort /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  CMISSync_atomic /* IMPORTED_LONG_ENUMERATION_ITEM */,
  atomic /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_CMISSync,
  _encode_CMISSync,
} from '../CMIP-1/CMISSync.ta.mjs';
import { Scope, _decode_Scope, _encode_Scope } from '../CMIP-1/Scope.ta.mjs';
export { Scope, _decode_Scope, _encode_Scope } from '../CMIP-1/Scope.ta.mjs';
import {
  CMISFilter,
  _decode_CMISFilter,
  _encode_CMISFilter,
} from '../CMIP-1/CMISFilter.ta.mjs';
export {
  CMISFilter,
  _decode_CMISFilter,
  _encode_CMISFilter,
} from '../CMIP-1/CMISFilter.ta.mjs';
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
    Scope_namedNumbers_baseObject,
} from '../CMIP-1/Scope-namedNumbers.ta.mjs';

/* START_OF_SYMBOL_DEFINITION DeleteArgument */
/**
 * @summary DeleteArgument
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeleteArgument ::= SEQUENCE {
 *   COMPONENTS OF BaseManagedObjectId,
 *   accessControl    [5]  AccessControl OPTIONAL,
 *   synchronization  [6] IMPLICIT CMISSync DEFAULT bestEffort,
 *   scope            [7]  Scope DEFAULT namedNumbers:baseObject,
 *   filter           CMISFilter DEFAULT and:{},
 *   ...
 * }
 * ```
 *
 * @class
 */
export class DeleteArgument {
  constructor(
    /**
     * @summary `baseManagedObjectClass`.
     * @public
     * @readonly
     */
    readonly baseManagedObjectClass: ObjectClass /* REPLICATED_COMPONENT */,
    /**
     * @summary `baseManagedObjectInstance`.
     * @public
     * @readonly
     */
    readonly baseManagedObjectInstance: ObjectInstance /* REPLICATED_COMPONENT */,
    /**
     * @summary `accessControl`.
     * @public
     * @readonly
     */
    readonly accessControl: OPTIONAL<AccessControl>,
    /**
     * @summary `synchronization`.
     * @public
     * @readonly
     */
    readonly synchronization: OPTIONAL<CMISSync>,
    /**
     * @summary `scope`.
     * @public
     * @readonly
     */
    readonly scope: OPTIONAL<Scope>,
    /**
     * @summary `filter`.
     * @public
     * @readonly
     */
    readonly filter: OPTIONAL<CMISFilter>,
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[] = []
  ) {}

  /**
   * @summary Restructures an object into a DeleteArgument
   * @description
   *
   * This takes an `object` and converts it to a `DeleteArgument`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `DeleteArgument`.
   * @returns {DeleteArgument}
   */
  public static _from_object(
    _o: { [_K in keyof DeleteArgument]: DeleteArgument[_K] }
  ): DeleteArgument {
    return new DeleteArgument(
      _o.baseManagedObjectClass,
      _o.baseManagedObjectInstance,
      _o.accessControl,
      _o.synchronization,
      _o.scope,
      _o.filter,
      _o._unrecognizedExtensionsList
    );
  }

  /**
   * @summary Getter that returns the default value for `synchronization`.
   * @public
   * @static
   * @method
   */
  public static get _default_value_for_synchronization() {
    return CMISSync_bestEffort;
  }
  /**
   * @summary Getter that returns the default value for `scope`.
   * @public
   * @static
   * @method
   */
  public static get _default_value_for_scope() {
    return { namedNumbers: Scope_namedNumbers_baseObject };
  }
  /**
   * @summary Getter that returns the default value for `filter`.
   * @public
   * @static
   * @method
   */
  public static get _default_value_for_filter(): CMISFilter {
    return { and: [] };
  }
  /**
   * @summary The enum used as the type of the component `synchronization`
   * @public
   * @static
   */

  public static _enum_for_synchronization = _enum_for_CMISSync;
}
/* END_OF_SYMBOL_DEFINITION DeleteArgument */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_DeleteArgument */
/**
 * @summary The Leading Root Component Types of DeleteArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DeleteArgument: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'baseManagedObjectClass',
    false,
    $.hasAnyTag,
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'baseManagedObjectInstance',
    false,
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
    'synchronization',
    true,
    $.hasTag(_TagClass.context, 6),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'scope',
    true,
    $.hasTag(_TagClass.context, 7),
    undefined,
    undefined
  ),
  new $.ComponentSpec('filter', true, $.hasAnyTag, undefined, undefined),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_DeleteArgument */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_DeleteArgument */
/**
 * @summary The Trailing Root Component Types of DeleteArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DeleteArgument: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_DeleteArgument */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_DeleteArgument */
/**
 * @summary The Extension Addition Component Types of DeleteArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DeleteArgument: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_DeleteArgument */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DeleteArgument */
let _cached_decoder_for_DeleteArgument: $.ASN1Decoder<DeleteArgument> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DeleteArgument */

/* START_OF_SYMBOL_DEFINITION _decode_DeleteArgument */
/**
 * @summary Decodes an ASN.1 element into a(n) DeleteArgument
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DeleteArgument} The decoded data structure.
 */
export function _decode_DeleteArgument(el: _Element) {
  if (!_cached_decoder_for_DeleteArgument) {
    _cached_decoder_for_DeleteArgument = function (
      el: _Element
    ): DeleteArgument {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let baseManagedObjectClass!: ObjectClass;
      let baseManagedObjectInstance!: ObjectInstance;
      let accessControl: OPTIONAL<AccessControl>;
      let synchronization: OPTIONAL<CMISSync> =
        DeleteArgument._default_value_for_synchronization;
      let scope: OPTIONAL<Scope> = DeleteArgument._default_value_for_scope;
      let filter: OPTIONAL<CMISFilter> =
        DeleteArgument._default_value_for_filter;
      let _unrecognizedExtensionsList: _Element[] = [];
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        baseManagedObjectClass: (_el: _Element): void => {
          baseManagedObjectClass = _decode_ObjectClass(_el);
        },
        baseManagedObjectInstance: (_el: _Element): void => {
          baseManagedObjectInstance = _decode_ObjectInstance(_el);
        },
        accessControl: (_el: _Element): void => {
          accessControl = $._decode_explicit<AccessControl>(
            () => _decode_AccessControl
          )(_el);
        },
        synchronization: (_el: _Element): void => {
          synchronization = $._decode_implicit<CMISSync>(
            () => _decode_CMISSync
          )(_el);
        },
        scope: (_el: _Element): void => {
          scope = $._decode_explicit<Scope>(() => _decode_Scope)(_el);
        },
        filter: (_el: _Element): void => {
          filter = _decode_CMISFilter(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_DeleteArgument,
        _extension_additions_list_spec_for_DeleteArgument,
        _root_component_type_list_2_spec_for_DeleteArgument,
        (ext: _Element): void => {
          _unrecognizedExtensionsList.push(ext);
        }
      );
      return new DeleteArgument /* SEQUENCE_CONSTRUCTOR_CALL */(
        baseManagedObjectClass,
        baseManagedObjectInstance,
        accessControl,
        synchronization,
        scope,
        filter,
        _unrecognizedExtensionsList
      );
    };
  }
  return _cached_decoder_for_DeleteArgument(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DeleteArgument */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DeleteArgument */
let _cached_encoder_for_DeleteArgument: $.ASN1Encoder<DeleteArgument> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DeleteArgument */

/* START_OF_SYMBOL_DEFINITION _encode_DeleteArgument */
/**
 * @summary Encodes a(n) DeleteArgument into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeleteArgument, encoded as an ASN.1 Element.
 */
export function _encode_DeleteArgument(
  value: DeleteArgument,
  elGetter: $.ASN1Encoder<DeleteArgument>
) {
  if (!_cached_encoder_for_DeleteArgument) {
    _cached_encoder_for_DeleteArgument = function (
      value: DeleteArgument,
      elGetter: $.ASN1Encoder<DeleteArgument>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat(
            [
              /* REQUIRED   */ _encode_ObjectClass(
                value.baseManagedObjectClass,
                $.BER
              ),
              /* REQUIRED   */ _encode_ObjectInstance(
                value.baseManagedObjectInstance,
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
              /* IF_DEFAULT */ value.synchronization === undefined ||
              $.deepEq(
                value.synchronization,
                DeleteArgument._default_value_for_synchronization
              )
                ? undefined
                : $._encode_implicit(
                    _TagClass.context,
                    6,
                    () => _encode_CMISSync,
                    $.BER
                  )(value.synchronization, $.BER),
              /* IF_DEFAULT */ value.scope === undefined ||
              $.deepEq(value.scope, DeleteArgument._default_value_for_scope)
                ? undefined
                : $._encode_explicit(
                    _TagClass.context,
                    7,
                    () => _encode_Scope,
                    $.BER
                  )(value.scope, $.BER),
              /* IF_DEFAULT */ value.filter === undefined ||
              $.deepEq(value.filter, DeleteArgument._default_value_for_filter)
                ? undefined
                : _encode_CMISFilter(value.filter, $.BER),
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
  return _cached_encoder_for_DeleteArgument(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DeleteArgument */

/* eslint-enable */
