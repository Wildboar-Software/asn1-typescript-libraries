/* eslint-disable */
import {
  OPTIONAL,
  BOOLEAN,
  INTEGER,
  TRUE_BIT,
  FALSE_BIT,
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
  Protocol_Version,
  _decode_Protocol_Version,
  _encode_Protocol_Version,
} from '../ISO8571-FTAM/Protocol-Version.ta.mjs';
import {
  Implementation_Information,
  _decode_Implementation_Information,
  _encode_Implementation_Information,
} from '../ISO8571-FTAM/Implementation-Information.ta.mjs';
import {
  Service_Class,
  _decode_Service_Class,
  _encode_Service_Class,
} from '../ISO8571-FTAM/Service-Class.ta.mjs';
import {
  Functional_Units,
  _decode_Functional_Units,
  _encode_Functional_Units,
} from '../ISO8571-FTAM/Functional-Units.ta.mjs';
import {
  Attribute_Groups,
  _decode_Attribute_Groups,
  _encode_Attribute_Groups,
} from '../ISO8571-FTAM/Attribute-Groups.ta.mjs';
import {
  Shared_ASE_Information,
  _decode_Shared_ASE_Information,
  _encode_Shared_ASE_Information,
} from '../ISO8571-FTAM/Shared-ASE-Information.ta.mjs';
import {
  FTAM_Quality_of_Service,
  _decode_FTAM_Quality_of_Service,
  _encode_FTAM_Quality_of_Service,
} from '../ISO8571-FTAM/FTAM-Quality-of-Service.ta.mjs';
import {
  Contents_Type_List,
  _decode_Contents_Type_List,
  _encode_Contents_Type_List,
} from '../ISO8571-FTAM/Contents-Type-List.ta.mjs';
import {
  User_Identity,
  _decode_User_Identity,
  _encode_User_Identity,
} from '../ISO8571-FTAM/User-Identity.ta.mjs';
import {
  Account,
  _decode_Account,
  _encode_Account,
} from '../ISO8571-FTAM/Account.ta.mjs';
import {
  Password,
  _decode_Password,
  _encode_Password,
} from '../ISO8571-FTAM/Password.ta.mjs';

/**
 * @summary F_INITIALIZE_request
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * F-INITIALIZE-request ::= SEQUENCE {
 *   protocol-Version                 Protocol-Version DEFAULT {version-1},
 *   implementation-information       Implementation-Information OPTIONAL,
 *   presentation-tontext-management  [2] IMPLICIT BOOLEAN DEFAULT FALSE,
 *   service-class                    Service-Class DEFAULT {transfer-class},
 *   -- Only the valid combinations as specified in ISO 8571-3 are allowed.
 *   functional-units                 Functional-Units,
 *   attribute-groups                 Attribute-Groups DEFAULT {},
 *   shared-ASE-information           Shared-ASE-Information OPTIONAL,
 *   ftam-quality-of-Service          FTAM-Quality-of-Service,
 *   contents-type-list               Contents-Type-List OPTIONAL,
 *   initiator-identity               User-Identity OPTIONAL,
 *   account                          Account OPTIONAL,
 *   filestore-password               Password OPTIONAL,
 *   checkpoint-window                [8] IMPLICIT INTEGER DEFAULT 1
 * }
 * ```
 *
 * @class
 */
export class F_INITIALIZE_request {
  constructor(
    /**
     * @summary `protocol_Version`.
     * @public
     * @readonly
     */
    readonly protocol_Version: OPTIONAL<Protocol_Version>,
    /**
     * @summary `implementation_information`.
     * @public
     * @readonly
     */
    readonly implementation_information: OPTIONAL<Implementation_Information>,
    /**
     * @summary `presentation_tontext_management`.
     * @public
     * @readonly
     */
    readonly presentation_tontext_management: OPTIONAL<BOOLEAN>,
    /**
     * @summary `service_class`.
     * @public
     * @readonly
     */
    readonly service_class: OPTIONAL<Service_Class>,
    /**
     * @summary `functional_units`.
     * @public
     * @readonly
     */
    readonly functional_units: Functional_Units,
    /**
     * @summary `attribute_groups`.
     * @public
     * @readonly
     */
    readonly attribute_groups: OPTIONAL<Attribute_Groups>,
    /**
     * @summary `shared_ASE_information`.
     * @public
     * @readonly
     */
    readonly shared_ASE_information: OPTIONAL<Shared_ASE_Information>,
    /**
     * @summary `ftam_quality_of_Service`.
     * @public
     * @readonly
     */
    readonly ftam_quality_of_Service: FTAM_Quality_of_Service,
    /**
     * @summary `contents_type_list`.
     * @public
     * @readonly
     */
    readonly contents_type_list: OPTIONAL<Contents_Type_List>,
    /**
     * @summary `initiator_identity`.
     * @public
     * @readonly
     */
    readonly initiator_identity: OPTIONAL<User_Identity>,
    /**
     * @summary `account`.
     * @public
     * @readonly
     */
    readonly account: OPTIONAL<Account>,
    /**
     * @summary `filestore_password`.
     * @public
     * @readonly
     */
    readonly filestore_password: OPTIONAL<Password>,
    /**
     * @summary `checkpoint_window`.
     * @public
     * @readonly
     */
    readonly checkpoint_window: OPTIONAL<INTEGER>
  ) {}

  /**
   * @summary Restructures an object into a F_INITIALIZE_request
   * @description
   *
   * This takes an `object` and converts it to a `F_INITIALIZE_request`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `F_INITIALIZE_request`.
   * @returns {F_INITIALIZE_request}
   */
  public static _from_object(
    _o: { [_K in keyof F_INITIALIZE_request]: F_INITIALIZE_request[_K] }
  ): F_INITIALIZE_request {
    return new F_INITIALIZE_request(
      _o.protocol_Version,
      _o.implementation_information,
      _o.presentation_tontext_management,
      _o.service_class,
      _o.functional_units,
      _o.attribute_groups,
      _o.shared_ASE_information,
      _o.ftam_quality_of_Service,
      _o.contents_type_list,
      _o.initiator_identity,
      _o.account,
      _o.filestore_password,
      _o.checkpoint_window
    );
  }

  /**
   * @summary Getter that returns the default value for `protocol_Version`.
   * @public
   * @static
   * @method
   */
  public static get _default_value_for_protocol_Version() {
    return new Uint8ClampedArray([ TRUE_BIT ]);
  }
  /**
   * @summary Getter that returns the default value for `presentation_tontext_management`.
   * @public
   * @static
   * @method
   */
  public static get _default_value_for_presentation_tontext_management() {
    return false;
  }
  /**
   * @summary Getter that returns the default value for `service_class`.
   * @public
   * @static
   * @method
   */
  public static get _default_value_for_service_class() {
    return new Uint8ClampedArray([
        FALSE_BIT,
        FALSE_BIT,
        TRUE_BIT,
    ]);
  }
  /**
   * @summary Getter that returns the default value for `attribute_groups`.
   * @public
   * @static
   * @method
   */
  public static get _default_value_for_attribute_groups() {
    return new Uint8ClampedArray([]);
  }
  /**
   * @summary Getter that returns the default value for `checkpoint_window`.
   * @public
   * @static
   * @method
   */
  public static get _default_value_for_checkpoint_window() {
    return 1;
  }
}


/**
 * @summary The Leading Root Component Types of F_INITIALIZE_request
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_F_INITIALIZE_request: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'protocol-Version',
    true,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'implementation-information',
    true,
    $.hasTag(_TagClass.context, 1)
  ),
  new $.ComponentSpec(
    'presentation-tontext-management',
    true,
    $.hasTag(_TagClass.context, 2)
  ),
  new $.ComponentSpec(
    'service-class',
    true,
    $.hasTag(_TagClass.context, 3)
  ),
  new $.ComponentSpec(
    'functional-units',
    false,
    $.hasTag(_TagClass.context, 4)
  ),
  new $.ComponentSpec(
    'attribute-groups',
    true,
    $.hasTag(_TagClass.context, 5)
  ),
  new $.ComponentSpec(
    'shared-ASE-information',
    true,
    $.hasTag(_TagClass.application, 20)
  ),
  new $.ComponentSpec(
    'ftam-quality-of-Service',
    false,
    $.hasTag(_TagClass.context, 6)
  ),
  new $.ComponentSpec(
    'contents-type-list',
    true,
    $.hasTag(_TagClass.context, 7)
  ),
  new $.ComponentSpec(
    'initiator-identity',
    true,
    $.hasTag(_TagClass.application, 22)
  ),
  new $.ComponentSpec(
    'account',
    true,
    $.hasTag(_TagClass.application, 4)
  ),
  new $.ComponentSpec(
    'filestore-password',
    true,
    $.hasTag(_TagClass.application, 17)
  ),
  new $.ComponentSpec(
    'checkpoint-window',
    true,
    $.hasTag(_TagClass.context, 8)
  ),
];


/**
 * @summary The Trailing Root Component Types of F_INITIALIZE_request
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_F_INITIALIZE_request: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of F_INITIALIZE_request
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_F_INITIALIZE_request: $.ComponentSpec[] = [];


let _cached_decoder_for_F_INITIALIZE_request: $.ASN1Decoder<F_INITIALIZE_request> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) F_INITIALIZE_request
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {F_INITIALIZE_request} The decoded data structure.
 */
export function _decode_F_INITIALIZE_request(el: _Element) {
  if (!_cached_decoder_for_F_INITIALIZE_request) {
    _cached_decoder_for_F_INITIALIZE_request = function (
      el: _Element
    ): F_INITIALIZE_request {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let protocol_Version: OPTIONAL<Protocol_Version> =
        F_INITIALIZE_request._default_value_for_protocol_Version;
      let implementation_information: OPTIONAL<Implementation_Information>;
      let presentation_tontext_management: OPTIONAL<BOOLEAN> =
        F_INITIALIZE_request._default_value_for_presentation_tontext_management;
      let service_class: OPTIONAL<Service_Class> =
        F_INITIALIZE_request._default_value_for_service_class;
      let functional_units!: Functional_Units;
      let attribute_groups: OPTIONAL<Attribute_Groups> =
        F_INITIALIZE_request._default_value_for_attribute_groups;
      let shared_ASE_information: OPTIONAL<Shared_ASE_Information>;
      let ftam_quality_of_Service!: FTAM_Quality_of_Service;
      let contents_type_list: OPTIONAL<Contents_Type_List>;
      let initiator_identity: OPTIONAL<User_Identity>;
      let account: OPTIONAL<Account>;
      let filestore_password: OPTIONAL<Password>;
      let checkpoint_window: OPTIONAL<INTEGER> =
        F_INITIALIZE_request._default_value_for_checkpoint_window;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        'protocol-Version': (_el: _Element): void => {
          protocol_Version = _decode_Protocol_Version(_el);
        },
        'implementation-information': (_el: _Element): void => {
          implementation_information = _decode_Implementation_Information(_el);
        },
        'presentation-tontext-management': (_el: _Element): void => {
          presentation_tontext_management = $._decode_implicit<BOOLEAN>(
            () => $._decodeBoolean
          )(_el);
        },
        'service-class': (_el: _Element): void => {
          service_class = _decode_Service_Class(_el);
        },
        'functional-units': (_el: _Element): void => {
          functional_units = _decode_Functional_Units(_el);
        },
        'attribute-groups': (_el: _Element): void => {
          attribute_groups = _decode_Attribute_Groups(_el);
        },
        'shared-ASE-information': (_el: _Element): void => {
          shared_ASE_information = _decode_Shared_ASE_Information(_el);
        },
        'ftam-quality-of-Service': (_el: _Element): void => {
          ftam_quality_of_Service = _decode_FTAM_Quality_of_Service(_el);
        },
        'contents-type-list': (_el: _Element): void => {
          contents_type_list = _decode_Contents_Type_List(_el);
        },
        'initiator-identity': (_el: _Element): void => {
          initiator_identity = _decode_User_Identity(_el);
        },
        account: (_el: _Element): void => {
          account = _decode_Account(_el);
        },
        'filestore-password': (_el: _Element): void => {
          filestore_password = _decode_Password(_el);
        },
        'checkpoint-window': (_el: _Element): void => {
          checkpoint_window = $._decode_implicit<INTEGER>(
            () => $._decodeInteger
          )(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_F_INITIALIZE_request,
        _extension_additions_list_spec_for_F_INITIALIZE_request,
        _root_component_type_list_2_spec_for_F_INITIALIZE_request,
        undefined
      );
      return new F_INITIALIZE_request /* SEQUENCE_CONSTRUCTOR_CALL */(
        protocol_Version,
        implementation_information,
        presentation_tontext_management,
        service_class,
        functional_units,
        attribute_groups,
        shared_ASE_information,
        ftam_quality_of_Service,
        contents_type_list,
        initiator_identity,
        account,
        filestore_password,
        checkpoint_window
      );
    };
  }
  return _cached_decoder_for_F_INITIALIZE_request(el);
}


let _cached_encoder_for_F_INITIALIZE_request: $.ASN1Encoder<F_INITIALIZE_request> | null = null;


/**
 * @summary Encodes a(n) F_INITIALIZE_request into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The F_INITIALIZE_request, encoded as an ASN.1 Element.
 */
export function _encode_F_INITIALIZE_request(
  value: F_INITIALIZE_request,
  elGetter: $.ASN1Encoder<F_INITIALIZE_request>
) {
  if (!_cached_encoder_for_F_INITIALIZE_request) {
    _cached_encoder_for_F_INITIALIZE_request = function (
      value: F_INITIALIZE_request    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* IF_DEFAULT */ value.protocol_Version === undefined ||
            $.deepEq(
              value.protocol_Version,
              F_INITIALIZE_request._default_value_for_protocol_Version
            )
              ? undefined
              : _encode_Protocol_Version(value.protocol_Version, $.BER),
            /* IF_ABSENT  */ value.implementation_information === undefined
              ? undefined
              : _encode_Implementation_Information(
                  value.implementation_information,
                  $.BER
                ),
            /* IF_DEFAULT */ value.presentation_tontext_management ===
              undefined ||
            $.deepEq(
              value.presentation_tontext_management,
              F_INITIALIZE_request._default_value_for_presentation_tontext_management
            )
              ? undefined
              : $._encode_implicit(
                  _TagClass.context,
                  2,
                  () => $._encodeBoolean,
                  $.BER
                )(value.presentation_tontext_management, $.BER),
            /* IF_DEFAULT */ value.service_class === undefined ||
            $.deepEq(
              value.service_class,
              F_INITIALIZE_request._default_value_for_service_class
            )
              ? undefined
              : _encode_Service_Class(value.service_class, $.BER),
            /* REQUIRED   */ _encode_Functional_Units(
              value.functional_units,
              $.BER
            ),
            /* IF_DEFAULT */ value.attribute_groups === undefined ||
            $.deepEq(
              value.attribute_groups,
              F_INITIALIZE_request._default_value_for_attribute_groups
            )
              ? undefined
              : _encode_Attribute_Groups(value.attribute_groups, $.BER),
            /* IF_ABSENT  */ value.shared_ASE_information === undefined
              ? undefined
              : _encode_Shared_ASE_Information(
                  value.shared_ASE_information,
                  $.BER
                ),
            /* REQUIRED   */ _encode_FTAM_Quality_of_Service(
              value.ftam_quality_of_Service,
              $.BER
            ),
            /* IF_ABSENT  */ value.contents_type_list === undefined
              ? undefined
              : _encode_Contents_Type_List(value.contents_type_list, $.BER),
            /* IF_ABSENT  */ value.initiator_identity === undefined
              ? undefined
              : _encode_User_Identity(value.initiator_identity, $.BER),
            /* IF_ABSENT  */ value.account === undefined
              ? undefined
              : _encode_Account(value.account, $.BER),
            /* IF_ABSENT  */ value.filestore_password === undefined
              ? undefined
              : _encode_Password(value.filestore_password, $.BER),
            /* IF_DEFAULT */ value.checkpoint_window === undefined ||
            $.deepEq(
              value.checkpoint_window,
              F_INITIALIZE_request._default_value_for_checkpoint_window
            )
              ? undefined
              : $._encode_implicit(
                  _TagClass.context,
                  8,
                  () => $._encodeInteger,
                  $.BER
                )(value.checkpoint_window, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_F_INITIALIZE_request(value, elGetter);
}


/* eslint-enable */
