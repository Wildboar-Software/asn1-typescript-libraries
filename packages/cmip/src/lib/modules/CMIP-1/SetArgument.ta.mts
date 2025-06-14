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
  BaseManagedObjectId,
  _decode_BaseManagedObjectId,
  _encode_BaseManagedObjectId,
} from '../CMIP-1/BaseManagedObjectId.ta.mjs';
import {
  AccessControl,
  _decode_AccessControl,
  _encode_AccessControl,
} from '../CMIP-1/AccessControl.ta.mjs';
import {
  CMISSync,
  _enum_for_CMISSync,
  CMISSync_bestEffort /* IMPORTED_LONG_ENUMERATION_ITEM */,
  _decode_CMISSync,
  _encode_CMISSync,
} from '../CMIP-1/CMISSync.ta.mjs';
import { Scope, _decode_Scope, _encode_Scope } from '../CMIP-1/Scope.ta.mjs';
import {
    Scope_namedNumbers_baseObject,
} from '../CMIP-1/Scope-namedNumbers.ta.mjs';
import {
  CMISFilter,
  _decode_CMISFilter,
  _encode_CMISFilter,
} from '../CMIP-1/CMISFilter.ta.mjs';
import {
  SetArgument_modificationList_Item,
  _decode_SetArgument_modificationList_Item,
  _encode_SetArgument_modificationList_Item,
} from '../CMIP-1/SetArgument-modificationList-Item.ta.mjs';
import {
  ObjectClass,
  _decode_ObjectClass,
  _encode_ObjectClass,
} from '../CMIP-1/ObjectClass.ta.mjs';
import {
  ObjectInstance,
  _decode_ObjectInstance,
  _encode_ObjectInstance,
} from '../CMIP-1/ObjectInstance.ta.mjs';
import {
  _root_component_type_list_1_spec_for_BaseManagedObjectId,
} from '../CMIP-1/BaseManagedObjectId.ta.mjs';

/* START_OF_SYMBOL_DEFINITION SetArgument */
/**
 * @summary SetArgument
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SetArgument ::= SEQUENCE {
 *   COMPONENTS OF BaseManagedObjectId,
 *   accessControl     [5]  AccessControl OPTIONAL,
 *   synchronization   [6] IMPLICIT CMISSync DEFAULT bestEffort,
 *   scope             [7]  Scope DEFAULT namedNumbers:baseObject,
 *   filter            CMISFilter DEFAULT and:{},
 *   modificationList
 *     [12] IMPLICIT SET OF
 *                     SEQUENCE {modifyOperator
 *                                 [2] IMPLICIT ModifyOperator DEFAULT replace,
 *                               attributeId
 *                                 CMIP-ATTRIBUTE.&id({AttributeSet}),
 *                               attributeValue
 *                                 CMIP-ATTRIBUTE.&Value
 *                                   ({AttributeSet}{@.attributeId}) OPTIONAL
 *                     },
 *   -- value is absent for setToDefault
 *   ...
 * }
 * ```
 *
 * @class
 */
export class SetArgument implements BaseManagedObjectId {
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
     * @summary `modificationList`.
     * @public
     * @readonly
     */
    readonly modificationList: SetArgument_modificationList_Item[],
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[] = []
  ) {}

  /**
   * @summary Restructures an object into a SetArgument
   * @description
   *
   * This takes an `object` and converts it to a `SetArgument`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `SetArgument`.
   * @returns {SetArgument}
   */
  public static _from_object(
    _o: { [_K in keyof SetArgument]: SetArgument[_K] }
  ): SetArgument {
    return new SetArgument(
      _o.baseManagedObjectClass,
      _o.baseManagedObjectInstance,
      _o.accessControl,
      _o.synchronization,
      _o.scope,
      _o.filter,
      _o.modificationList,
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
/* END_OF_SYMBOL_DEFINITION SetArgument */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SetArgument */
/**
 * @summary The Leading Root Component Types of SetArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SetArgument: $.ComponentSpec[] = [
  ..._root_component_type_list_1_spec_for_BaseManagedObjectId,
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
  new $.ComponentSpec(
    'modificationList',
    false,
    $.hasTag(_TagClass.context, 12),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SetArgument */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SetArgument */
/**
 * @summary The Trailing Root Component Types of SetArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SetArgument: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SetArgument */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SetArgument */
/**
 * @summary The Extension Addition Component Types of SetArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SetArgument: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SetArgument */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SetArgument */
let _cached_decoder_for_SetArgument: $.ASN1Decoder<SetArgument> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SetArgument */

/* START_OF_SYMBOL_DEFINITION _decode_SetArgument */
/**
 * @summary Decodes an ASN.1 element into a(n) SetArgument
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SetArgument} The decoded data structure.
 */
export function _decode_SetArgument(el: _Element) {
  if (!_cached_decoder_for_SetArgument) {
    _cached_decoder_for_SetArgument = function (el: _Element): SetArgument {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let baseManagedObjectClass!: ObjectClass;
      let baseManagedObjectInstance!: ObjectInstance;
      let accessControl: OPTIONAL<AccessControl>;
      let synchronization: OPTIONAL<CMISSync> =
        SetArgument._default_value_for_synchronization;
      let scope: OPTIONAL<Scope> = SetArgument._default_value_for_scope;
      let filter: OPTIONAL<CMISFilter> = SetArgument._default_value_for_filter;
      let modificationList!: SetArgument_modificationList_Item[];
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
        modificationList: (_el: _Element): void => {
          modificationList = $._decode_implicit<
            SetArgument_modificationList_Item[]
          >(() =>
            $._decodeSetOf<SetArgument_modificationList_Item>(
              () => _decode_SetArgument_modificationList_Item
            )
          )(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_SetArgument,
        _extension_additions_list_spec_for_SetArgument,
        _root_component_type_list_2_spec_for_SetArgument,
        (ext: _Element): void => {
          _unrecognizedExtensionsList.push(ext);
        }
      );
      return new SetArgument /* SEQUENCE_CONSTRUCTOR_CALL */(
        baseManagedObjectClass,
        baseManagedObjectInstance,
        accessControl,
        synchronization,
        scope,
        filter,
        modificationList,
        _unrecognizedExtensionsList
      );
    };
  }
  return _cached_decoder_for_SetArgument(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SetArgument */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SetArgument */
let _cached_encoder_for_SetArgument: $.ASN1Encoder<SetArgument> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SetArgument */

/* START_OF_SYMBOL_DEFINITION _encode_SetArgument */
/**
 * @summary Encodes a(n) SetArgument into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SetArgument, encoded as an ASN.1 Element.
 */
export function _encode_SetArgument(
  value: SetArgument,
  elGetter: $.ASN1Encoder<SetArgument>
) {
  if (!_cached_encoder_for_SetArgument) {
    _cached_encoder_for_SetArgument = function (
      value: SetArgument    ): _Element {
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
                SetArgument._default_value_for_synchronization
              )
                ? undefined
                : $._encode_implicit(
                    _TagClass.context,
                    6,
                    () => _encode_CMISSync,
                    $.BER
                  )(value.synchronization, $.BER),
              /* IF_DEFAULT */ value.scope === undefined ||
              $.deepEq(value.scope, SetArgument._default_value_for_scope)
                ? undefined
                : $._encode_explicit(
                    _TagClass.context,
                    7,
                    () => _encode_Scope,
                    $.BER
                  )(value.scope, $.BER),
              /* IF_DEFAULT */ value.filter === undefined ||
              $.deepEq(value.filter, SetArgument._default_value_for_filter)
                ? undefined
                : _encode_CMISFilter(value.filter, $.BER),
              /* REQUIRED   */ $._encode_implicit(
                _TagClass.context,
                12,
                () =>
                  $._encodeSetOf<SetArgument_modificationList_Item>(
                    () => _encode_SetArgument_modificationList_Item,
                    $.BER
                  ),
                $.BER
              )(value.modificationList, $.BER),
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
  return _cached_encoder_for_SetArgument(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SetArgument */

/* eslint-enable */
