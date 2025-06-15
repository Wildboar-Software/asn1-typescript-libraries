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
  Pathname_Attribute,
  _decode_Pathname_Attribute,
  _encode_Pathname_Attribute,
} from '../ISO8571-FTAM/Pathname-Attribute.ta.mjs';
import {
  Account_Attribute,
  _decode_Account_Attribute,
  _encode_Account_Attribute,
} from '../ISO8571-FTAM/Account-Attribute.ta.mjs';
import {
  Object_Availability_Attribute,
  _decode_Object_Availability_Attribute,
  _encode_Object_Availability_Attribute,
} from '../ISO8571-FTAM/Object-Availability-Attribute.ta.mjs';
import {
  Object_Size_Attribute,
  _decode_Object_Size_Attribute,
  _encode_Object_Size_Attribute,
} from '../ISO8571-FTAM/Object-Size-Attribute.ta.mjs';
import {
  Access_Control_Change_Attribute,
  _decode_Access_Control_Change_Attribute,
  _encode_Access_Control_Change_Attribute,
} from '../ISO8571-FTAM/Access-Control-Change-Attribute.ta.mjs';
import {
  Legal_Qualification_Attribute,
  _decode_Legal_Qualification_Attribute,
  _encode_Legal_Qualification_Attribute,
} from '../ISO8571-FTAM/Legal-Qualification-Attribute.ta.mjs';
import {
  Private_Use_Attribute,
  _decode_Private_Use_Attribute,
  _encode_Private_Use_Attribute,
} from '../ISO8571-FTAM/Private-Use-Attribute.ta.mjs';
import {
  Attribute_Extensions,
  _decode_Attribute_Extensions,
  _encode_Attribute_Extensions,
} from '../ISO8571-FTAM/Attribute-Extensions.ta.mjs';

/**
 * @summary Change_Attributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Change-Attributes ::= [APPLICATION 8] IMPLICIT SEQUENCE {
 *   -- Kerne1 Group
 *   pathname              Pathname-Attribute OPTIONAL,
 *   -- Storage group
 *   storage-account       [3]  Account-Attribute OPTIONAL,
 *   object-availability   [12]  Object-Availability-Attribute OPTIONAL,
 *   future-Object-size    [14]  Object-Size-Attribute OPTIONAL,
 *   -- Security group
 *   access-control        [15]  Access-Control-Change-Attribute OPTIONAL,
 *   path-access-control   [21]  Access-Control-Change-Attribute OPTIONAL,
 *   -- This Parameter tan only be sent when the
 *   -- enhanced-filestore-management functional unit is available.
 *   legal-qualification   [16]  Legal-Qualification-Attribute OPTIONAL,
 *   -- Private group
 *   private-use           [17]  Private-Use-Attribute OPTIONAL,
 *   -- Attribute Extensions group
 *   attribute-extensions  [22] IMPLICIT Attribute-Extensions OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class Change_Attributes {
  constructor(
    /**
     * @summary `pathname`.
     * @public
     * @readonly
     */
    readonly pathname: OPTIONAL<Pathname_Attribute>,
    /**
     * @summary `storage_account`.
     * @public
     * @readonly
     */
    readonly storage_account: OPTIONAL<Account_Attribute>,
    /**
     * @summary `object_availability`.
     * @public
     * @readonly
     */
    readonly object_availability: OPTIONAL<Object_Availability_Attribute>,
    /**
     * @summary `future_Object_size`.
     * @public
     * @readonly
     */
    readonly future_Object_size: OPTIONAL<Object_Size_Attribute>,
    /**
     * @summary `access_control`.
     * @public
     * @readonly
     */
    readonly access_control: OPTIONAL<Access_Control_Change_Attribute>,
    /**
     * @summary `path_access_control`.
     * @public
     * @readonly
     */
    readonly path_access_control: OPTIONAL<Access_Control_Change_Attribute>,
    /**
     * @summary `legal_qualification`.
     * @public
     * @readonly
     */
    readonly legal_qualification: OPTIONAL<Legal_Qualification_Attribute>,
    /**
     * @summary `private_use`.
     * @public
     * @readonly
     */
    readonly private_use: OPTIONAL<Private_Use_Attribute>,
    /**
     * @summary `attribute_extensions`.
     * @public
     * @readonly
     */
    readonly attribute_extensions: OPTIONAL<Attribute_Extensions>
  ) {}

  /**
   * @summary Restructures an object into a Change_Attributes
   * @description
   *
   * This takes an `object` and converts it to a `Change_Attributes`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `Change_Attributes`.
   * @returns {Change_Attributes}
   */
  public static _from_object(
    _o: { [_K in keyof Change_Attributes]: Change_Attributes[_K] }
  ): Change_Attributes {
    return new Change_Attributes(
      _o.pathname,
      _o.storage_account,
      _o.object_availability,
      _o.future_Object_size,
      _o.access_control,
      _o.path_access_control,
      _o.legal_qualification,
      _o.private_use,
      _o.attribute_extensions
    );
  }
}


/**
 * @summary The Leading Root Component Types of Change_Attributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Change_Attributes: $.ComponentSpec[] = [
  new $.ComponentSpec('pathname', true, $.hasAnyTag, undefined, undefined),
  new $.ComponentSpec(
    'storage-account',
    true,
    $.hasTag(_TagClass.context, 3),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'object-availability',
    true,
    $.hasTag(_TagClass.context, 12),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'future-Object-size',
    true,
    $.hasTag(_TagClass.context, 14),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'access-control',
    true,
    $.hasTag(_TagClass.context, 15),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'path-access-control',
    true,
    $.hasTag(_TagClass.context, 21),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'legal-qualification',
    true,
    $.hasTag(_TagClass.context, 16),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'private-use',
    true,
    $.hasTag(_TagClass.context, 17),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'attribute-extensions',
    true,
    $.hasTag(_TagClass.context, 22),
    undefined,
    undefined
  ),
];


/**
 * @summary The Trailing Root Component Types of Change_Attributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Change_Attributes: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of Change_Attributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Change_Attributes: $.ComponentSpec[] = [];


let _cached_decoder_for_Change_Attributes: $.ASN1Decoder<Change_Attributes> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Change_Attributes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Change_Attributes} The decoded data structure.
 */
export function _decode_Change_Attributes(el: _Element) {
  if (!_cached_decoder_for_Change_Attributes) {
    _cached_decoder_for_Change_Attributes = $._decode_implicit<Change_Attributes>(
      () =>
        function (el: _Element): Change_Attributes {
          /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
          let pathname: OPTIONAL<Pathname_Attribute>;
          let storage_account: OPTIONAL<Account_Attribute>;
          let object_availability: OPTIONAL<Object_Availability_Attribute>;
          let future_Object_size: OPTIONAL<Object_Size_Attribute>;
          let access_control: OPTIONAL<Access_Control_Change_Attribute>;
          let path_access_control: OPTIONAL<Access_Control_Change_Attribute>;
          let legal_qualification: OPTIONAL<Legal_Qualification_Attribute>;
          let private_use: OPTIONAL<Private_Use_Attribute>;
          let attribute_extensions: OPTIONAL<Attribute_Extensions>;
          /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
          /* START_OF_CALLBACKS_MAP */
          const callbacks: $.DecodingMap = {
            pathname: (_el: _Element): void => {
              pathname = _decode_Pathname_Attribute(_el);
            },
            'storage-account': (_el: _Element): void => {
              storage_account = $._decode_explicit<Account_Attribute>(
                () => _decode_Account_Attribute
              )(_el);
            },
            'object-availability': (_el: _Element): void => {
              object_availability = $._decode_explicit<Object_Availability_Attribute>(
                () => _decode_Object_Availability_Attribute
              )(_el);
            },
            'future-Object-size': (_el: _Element): void => {
              future_Object_size = $._decode_explicit<Object_Size_Attribute>(
                () => _decode_Object_Size_Attribute
              )(_el);
            },
            'access-control': (_el: _Element): void => {
              access_control = $._decode_explicit<Access_Control_Change_Attribute>(
                () => _decode_Access_Control_Change_Attribute
              )(_el);
            },
            'path-access-control': (_el: _Element): void => {
              path_access_control = $._decode_explicit<Access_Control_Change_Attribute>(
                () => _decode_Access_Control_Change_Attribute
              )(_el);
            },
            'legal-qualification': (_el: _Element): void => {
              legal_qualification = $._decode_explicit<Legal_Qualification_Attribute>(
                () => _decode_Legal_Qualification_Attribute
              )(_el);
            },
            'private-use': (_el: _Element): void => {
              private_use = $._decode_explicit<Private_Use_Attribute>(
                () => _decode_Private_Use_Attribute
              )(_el);
            },
            'attribute-extensions': (_el: _Element): void => {
              attribute_extensions = $._decode_implicit<Attribute_Extensions>(
                () => _decode_Attribute_Extensions
              )(_el);
            },
          };
          /* END_OF_CALLBACKS_MAP */
          $._parse_sequence(
            el,
            callbacks,
            _root_component_type_list_1_spec_for_Change_Attributes,
            _extension_additions_list_spec_for_Change_Attributes,
            _root_component_type_list_2_spec_for_Change_Attributes,
            undefined
          );
          return new Change_Attributes /* SEQUENCE_CONSTRUCTOR_CALL */(
            pathname,
            storage_account,
            object_availability,
            future_Object_size,
            access_control,
            path_access_control,
            legal_qualification,
            private_use,
            attribute_extensions
          );
        }
    );
  }
  return _cached_decoder_for_Change_Attributes(el);
}


let _cached_encoder_for_Change_Attributes: $.ASN1Encoder<Change_Attributes> | null = null;


/**
 * @summary Encodes a(n) Change_Attributes into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Change_Attributes, encoded as an ASN.1 Element.
 */
export function _encode_Change_Attributes(
  value: Change_Attributes,
  elGetter: $.ASN1Encoder<Change_Attributes>
) {
  if (!_cached_encoder_for_Change_Attributes) {
    _cached_encoder_for_Change_Attributes = $._encode_implicit(
      _TagClass.application,
      8,
      () =>
        function (
          value: Change_Attributes        ): _Element {
          return $._encodeSequence(
            ([] as (_Element | undefined)[])
              .concat([
                /* IF_ABSENT  */ value.pathname === undefined
                  ? undefined
                  : _encode_Pathname_Attribute(value.pathname, $.BER),
                /* IF_ABSENT  */ value.storage_account === undefined
                  ? undefined
                  : $._encode_explicit(
                      _TagClass.context,
                      3,
                      () => _encode_Account_Attribute,
                      $.BER
                    )(value.storage_account, $.BER),
                /* IF_ABSENT  */ value.object_availability === undefined
                  ? undefined
                  : $._encode_explicit(
                      _TagClass.context,
                      12,
                      () => _encode_Object_Availability_Attribute,
                      $.BER
                    )(value.object_availability, $.BER),
                /* IF_ABSENT  */ value.future_Object_size === undefined
                  ? undefined
                  : $._encode_explicit(
                      _TagClass.context,
                      14,
                      () => _encode_Object_Size_Attribute,
                      $.BER
                    )(value.future_Object_size, $.BER),
                /* IF_ABSENT  */ value.access_control === undefined
                  ? undefined
                  : $._encode_explicit(
                      _TagClass.context,
                      15,
                      () => _encode_Access_Control_Change_Attribute,
                      $.BER
                    )(value.access_control, $.BER),
                /* IF_ABSENT  */ value.path_access_control === undefined
                  ? undefined
                  : $._encode_explicit(
                      _TagClass.context,
                      21,
                      () => _encode_Access_Control_Change_Attribute,
                      $.BER
                    )(value.path_access_control, $.BER),
                /* IF_ABSENT  */ value.legal_qualification === undefined
                  ? undefined
                  : $._encode_explicit(
                      _TagClass.context,
                      16,
                      () => _encode_Legal_Qualification_Attribute,
                      $.BER
                    )(value.legal_qualification, $.BER),
                /* IF_ABSENT  */ value.private_use === undefined
                  ? undefined
                  : $._encode_explicit(
                      _TagClass.context,
                      17,
                      () => _encode_Private_Use_Attribute,
                      $.BER
                    )(value.private_use, $.BER),
                /* IF_ABSENT  */ value.attribute_extensions === undefined
                  ? undefined
                  : $._encode_implicit(
                      _TagClass.context,
                      22,
                      () => _encode_Attribute_Extensions,
                      $.BER
                    )(value.attribute_extensions, $.BER),
              ])
              .filter((c: _Element | undefined): c is _Element => !!c),
            $.BER
          );
        },
      $.BER
    );
  }
  return _cached_encoder_for_Change_Attributes(value, elGetter);
}


/* eslint-enable */
