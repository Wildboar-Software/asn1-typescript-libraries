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
} from '@wildboar/asn1';
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
  AttributeId,
  _decode_AttributeId,
  _encode_AttributeId,
} from '../CMIP-1/AttributeId.ta.mjs';
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
    Scope_namedNumbers_baseObject,
} from '../CMIP-1/Scope-namedNumbers.ta.mjs';
import {
  _root_component_type_list_1_spec_for_BaseManagedObjectId,
} from '../CMIP-1/BaseManagedObjectId.ta.mjs';


/**
 * @summary GetArgument
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GetArgument ::= SEQUENCE {
 *   COMPONENTS OF BaseManagedObjectId,
 *   accessControl    [5]  AccessControl OPTIONAL,
 *   synchronization  [6] IMPLICIT CMISSync DEFAULT bestEffort,
 *   scope            [7]  Scope DEFAULT namedNumbers:baseObject,
 *   filter           CMISFilter DEFAULT and:{},
 *   attributeIdList  [12] IMPLICIT SET OF AttributeId OPTIONAL,
 *   ...
 * }
 * ```
 *
 * @class
 */
export class GetArgument implements BaseManagedObjectId {
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
     * @summary `attributeIdList`.
     * @public
     * @readonly
     */
    readonly attributeIdList: OPTIONAL<AttributeId[]>,
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[] = []
  ) {}

  /**
   * @summary Restructures an object into a GetArgument
   * @description
   *
   * This takes an `object` and converts it to a `GetArgument`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `GetArgument`.
   * @returns {GetArgument}
   */
  public static _from_object(
    _o: { [_K in keyof GetArgument]: GetArgument[_K] }
  ): GetArgument {
    return new GetArgument(
      _o.baseManagedObjectClass,
      _o.baseManagedObjectInstance,
      _o.accessControl,
      _o.synchronization,
      _o.scope,
      _o.filter,
      _o.attributeIdList,
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
 * @summary The Leading Root Component Types of GetArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_GetArgument: $.ComponentSpec[] = [
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
    'attributeIdList',
    true,
    $.hasTag(_TagClass.context, 12)
  ),
];


/**
 * @summary The Trailing Root Component Types of GetArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_GetArgument: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of GetArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_GetArgument: $.ComponentSpec[] = [];


let _cached_decoder_for_GetArgument: $.ASN1Decoder<GetArgument> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) GetArgument
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {GetArgument} The decoded data structure.
 */
export function _decode_GetArgument(el: _Element): GetArgument {
  if (!_cached_decoder_for_GetArgument) {
    _cached_decoder_for_GetArgument = function (el: _Element): GetArgument {
      let baseManagedObjectClass!: ObjectClass;
      let baseManagedObjectInstance!: ObjectInstance;
      let accessControl: OPTIONAL<AccessControl>;
      let synchronization: OPTIONAL<CMISSync> =
        GetArgument._default_value_for_synchronization;
      let scope: OPTIONAL<Scope> = GetArgument._default_value_for_scope;
      let filter: OPTIONAL<CMISFilter> = GetArgument._default_value_for_filter;
      let attributeIdList: OPTIONAL<AttributeId[]>;
      let _unrecognizedExtensionsList: _Element[] = [];
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
        attributeIdList: (_el: _Element): void => {
          attributeIdList = $._decode_implicit<AttributeId[]>(() =>
            $._decodeSetOf<AttributeId>(() => _decode_AttributeId)
          )(_el);
        },
      };
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_GetArgument,
        _extension_additions_list_spec_for_GetArgument,
        _root_component_type_list_2_spec_for_GetArgument,
        (ext: _Element): void => {
          _unrecognizedExtensionsList.push(ext);
        }
      );
      return new GetArgument (
        baseManagedObjectClass,
        baseManagedObjectInstance,
        accessControl,
        synchronization,
        scope,
        filter,
        attributeIdList,
        _unrecognizedExtensionsList
      );
    };
  }
  return _cached_decoder_for_GetArgument(el);
}


let _cached_encoder_for_GetArgument: $.ASN1Encoder<GetArgument> | null = null;


/**
 * @summary Encodes a(n) GetArgument into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetArgument, encoded as an ASN.1 Element.
 */
export function _encode_GetArgument(
  value: GetArgument,
  elGetter: $.ASN1Encoder<GetArgument>
): _Element {
  if (!_cached_encoder_for_GetArgument) {
    _cached_encoder_for_GetArgument = function (
      value: GetArgument    ): _Element {
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
                GetArgument._default_value_for_synchronization
              )
                ? undefined
                : $._encode_implicit(
                    _TagClass.context,
                    6,
                    () => _encode_CMISSync,
                    $.BER
                  )(value.synchronization, $.BER),
              /* IF_DEFAULT */ value.scope === undefined ||
              $.deepEq(value.scope, GetArgument._default_value_for_scope)
                ? undefined
                : $._encode_explicit(
                    _TagClass.context,
                    7,
                    () => _encode_Scope,
                    $.BER
                  )(value.scope, $.BER),
              /* IF_DEFAULT */ value.filter === undefined ||
              $.deepEq(value.filter, GetArgument._default_value_for_filter)
                ? undefined
                : _encode_CMISFilter(value.filter, $.BER),
              /* IF_ABSENT  */ value.attributeIdList === undefined
                ? undefined
                : $._encode_implicit(
                    _TagClass.context,
                    12,
                    () =>
                      $._encodeSetOf<AttributeId>(
                        () => _encode_AttributeId,
                        $.BER
                      ),
                    $.BER
                  )(value.attributeIdList, $.BER),
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
  return _cached_encoder_for_GetArgument(value, elGetter);
}


/* eslint-enable */
