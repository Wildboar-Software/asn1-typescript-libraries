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
import * as $ from '@wildboar/asn1/functional';
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
  CMISFilter,
  _decode_CMISFilter,
  _encode_CMISFilter,
} from '../CMIP-1/CMISFilter.ta.mjs';
import {
  ActionInfo,
  _decode_ActionInfo,
  _encode_ActionInfo,
} from '../CMIP-1/ActionInfo.ta.mjs';
import {
  ObjectClass,
  _decode_ObjectClass,
  _encode_ObjectClass,
} from '../CMIP-1/ObjectClass.ta.mjs';
import {
  _root_component_type_list_1_spec_for_BaseManagedObjectId,
} from '../CMIP-1/BaseManagedObjectId.ta.mjs';
import {
  ObjectInstance,
  _decode_ObjectInstance,
  _encode_ObjectInstance,
} from '../CMIP-1/ObjectInstance.ta.mjs';
import {
    Scope_namedNumbers_baseObject,
} from '../CMIP-1/Scope-namedNumbers.ta.mjs';


/**
 * @summary ActionArgument
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ActionArgument ::= SEQUENCE {
 *   COMPONENTS OF BaseManagedObjectId,
 *   accessControl    [5]  AccessControl OPTIONAL,
 *   synchronization  [6] IMPLICIT CMISSync DEFAULT bestEffort,
 *   scope            [7]  Scope DEFAULT namedNumbers:baseObject,
 *   filter           CMISFilter DEFAULT and:{},
 *   actionInfo       [12] IMPLICIT ActionInfo,
 *   ...
 * }
 * ```
 *
 * @class
 */
export class ActionArgument implements BaseManagedObjectId {
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
     * @summary `actionInfo`.
     * @public
     * @readonly
     */
    readonly actionInfo: ActionInfo,
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[] = []
  ) {}

  /**
   * @summary Restructures an object into a ActionArgument
   * @description
   *
   * This takes an `object` and converts it to a `ActionArgument`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `ActionArgument`.
   * @returns {ActionArgument}
   */
  public static _from_object(
    _o: { [_K in keyof ActionArgument]: ActionArgument[_K] }
  ): ActionArgument {
    return new ActionArgument(
      _o.baseManagedObjectClass,
      _o.baseManagedObjectInstance,
      _o.accessControl,
      _o.synchronization,
      _o.scope,
      _o.filter,
      _o.actionInfo,
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


/**
 * @summary The Leading Root Component Types of ActionArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ActionArgument: $.ComponentSpec[] = [
  ..._root_component_type_list_1_spec_for_BaseManagedObjectId,
  new $.ComponentSpec(
    'accessControl',
    true,
    $.hasTag(_TagClass.context, 5)
  ),
  new $.ComponentSpec(
    'synchronization',
    true,
    $.hasTag(_TagClass.context, 6)
  ),
  new $.ComponentSpec(
    'scope',
    true,
    $.hasTag(_TagClass.context, 7)
  ),
  new $.ComponentSpec('filter', true, $.hasAnyTag),
  new $.ComponentSpec(
    'actionInfo',
    false,
    $.hasTag(_TagClass.context, 12)
  ),
];


/**
 * @summary The Trailing Root Component Types of ActionArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ActionArgument: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of ActionArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ActionArgument: $.ComponentSpec[] = [];


let _cached_decoder_for_ActionArgument: $.ASN1Decoder<ActionArgument> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ActionArgument
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ActionArgument} The decoded data structure.
 */
export function _decode_ActionArgument(el: _Element) {
  if (!_cached_decoder_for_ActionArgument) {
    _cached_decoder_for_ActionArgument = function (
      el: _Element
    ): ActionArgument {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let baseManagedObjectClass!: ObjectClass;
      let baseManagedObjectInstance!: ObjectInstance;
      let accessControl: OPTIONAL<AccessControl>;
      let synchronization: OPTIONAL<CMISSync> =
        ActionArgument._default_value_for_synchronization;
      let scope: OPTIONAL<Scope> = ActionArgument._default_value_for_scope;
      let filter: OPTIONAL<CMISFilter> =
        ActionArgument._default_value_for_filter;
      let actionInfo!: ActionInfo;
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
        actionInfo: (_el: _Element): void => {
          actionInfo = $._decode_implicit<ActionInfo>(() => _decode_ActionInfo)(
            _el
          );
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_ActionArgument,
        _extension_additions_list_spec_for_ActionArgument,
        _root_component_type_list_2_spec_for_ActionArgument,
        (ext: _Element): void => {
          _unrecognizedExtensionsList.push(ext);
        }
      );
      return new ActionArgument /* SEQUENCE_CONSTRUCTOR_CALL */(
        baseManagedObjectClass,
        baseManagedObjectInstance,
        accessControl,
        synchronization,
        scope,
        filter,
        actionInfo,
        _unrecognizedExtensionsList
      );
    };
  }
  return _cached_decoder_for_ActionArgument(el);
}


let _cached_encoder_for_ActionArgument: $.ASN1Encoder<ActionArgument> | null = null;


/**
 * @summary Encodes a(n) ActionArgument into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ActionArgument, encoded as an ASN.1 Element.
 */
export function _encode_ActionArgument(
  value: ActionArgument,
  elGetter: $.ASN1Encoder<ActionArgument>
) {
  if (!_cached_encoder_for_ActionArgument) {
    _cached_encoder_for_ActionArgument = function (
      value: ActionArgument    ): _Element {
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
                ActionArgument._default_value_for_synchronization
              )
                ? undefined
                : $._encode_implicit(
                    _TagClass.context,
                    6,
                    () => _encode_CMISSync,
                    $.BER
                  )(value.synchronization, $.BER),
              /* IF_DEFAULT */ value.scope === undefined ||
              $.deepEq(value.scope, ActionArgument._default_value_for_scope)
                ? undefined
                : $._encode_explicit(
                    _TagClass.context,
                    7,
                    () => _encode_Scope,
                    $.BER
                  )(value.scope, $.BER),
              /* IF_DEFAULT */ value.filter === undefined ||
              $.deepEq(value.filter, ActionArgument._default_value_for_filter)
                ? undefined
                : _encode_CMISFilter(value.filter, $.BER),
              /* REQUIRED   */ $._encode_implicit(
                _TagClass.context,
                12,
                () => _encode_ActionInfo,
                $.BER
              )(value.actionInfo, $.BER),
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
  return _cached_encoder_for_ActionArgument(value, elGetter);
}


/* eslint-enable */
