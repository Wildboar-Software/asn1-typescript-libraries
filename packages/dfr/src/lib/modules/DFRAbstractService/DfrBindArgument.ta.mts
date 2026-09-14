/* eslint-disable */
import {
    OPTIONAL,
    BOOLEAN,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DistinguishedName, _decode_DistinguishedName, _encode_DistinguishedName } from "../InformationFramework/DistinguishedName.ta.mjs";
// export { DistinguishedName, _decode_DistinguishedName, _encode_DistinguishedName } from "../InformationFramework/DistinguishedName.ta.mjs";
import { Credentials, _decode_Credentials, _encode_Credentials } from "../DFRAbstractService/Credentials.ta.mjs";
// export { Credentials, _decode_Credentials, _encode_Credentials } from "../DFRAbstractService/Credentials.ta.mjs";
import { Restrictions, _decode_Restrictions, _encode_Restrictions } from "../DFRAbstractService/Restrictions.ta.mjs";
// export { Restrictions, _decode_Restrictions, _encode_Restrictions } from "../DFRAbstractService/Restrictions.ta.mjs";
import { BindSecurity, _decode_BindSecurity, _encode_BindSecurity } from "../DFRAbstractService/BindSecurity.ta.mjs";
// export { BindSecurity, _decode_BindSecurity, _encode_BindSecurity } from "../DFRAbstractService/BindSecurity.ta.mjs";
import { Priority, _enum_for_Priority, Priority_medium /* IMPORTED_LONG_ENUMERATION_ITEM */, _decode_Priority, _encode_Priority } from "../DFRAbstractService/Priority.ta.mjs";
// export { Priority, _enum_for_Priority, Priority_low /* IMPORTED_LONG_ENUMERATION_ITEM */, low /* IMPORTED_SHORT_ENUMERATION_ITEM */, Priority_medium /* IMPORTED_LONG_ENUMERATION_ITEM */, medium /* IMPORTED_SHORT_ENUMERATION_ITEM */, Priority_high /* IMPORTED_LONG_ENUMERATION_ITEM */, high /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Priority, _encode_Priority } from "../DFRAbstractService/Priority.ta.mjs";


/**
 * @summary DfrBindArgument
 * @description
 *
 * Bind argument: initiator name, credentials, optional retrieve restrictions
 * (until unbind), optional configuration request, OSI bind-security, default
 * priority, and whether DORs may be produced or consumed. ISO/IEC 10166-1:1991
 * §7.1.1. Cor.1: a document type outside `allowed-document-types` is always an
 * error (ISO/IEC 10166-1:1991/Cor.1:1994 §7.1.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DfrBindArgument ::= SEQUENCE {
 *     initiator-name              [0] DistinguishedName,
 *     credentials                 [1] Credentials,
 *     retrieve-restrictions       [2] Restrictions OPTIONAL, -- default is none
 *     dfr-configuration-request   [3] BOOLEAN DEFAULT FALSE,
 *     bind-security               [4] BindSecurity OPTIONAL,
 *     priority                    [5] Priority DEFAULT medium,
 *     dor-for-produce-operations  [6] BOOLEAN DEFAULT TRUE,
 *     dor-for-consume-operations  [7] BOOLEAN DEFAULT TRUE
 * }
 * ```
 * 
 * @class
 */
export
class DfrBindArgument {
    constructor (
        /**
         * @summary `initiator_name`.
         * @description
         *
         * Directory distinguished name of the initiator.
         * @public
         * @readonly
         */
        readonly initiator_name: DistinguishedName,
        /**
         * @summary `credentials`.
         * @description
         *
         * Simple password or a PAC from authentication done outside DFR.
         * Syntax of authentication credentials is out of scope of ISO/IEC
         * 10166-1:1991. §7.1.1.
         * @public
         * @readonly
         */
        readonly credentials: Credentials,
        /**
         * @summary `retrieve_restrictions`.
         * @description
         *
         * Caps on returned document types and PDU length for the association.
         * Default: no restriction. ISO/IEC 10166-1:1991 §7.1.1; ISO/IEC
         * 10166-1:1991/Cor.1:1994.
         * @public
         * @readonly
         */
        readonly retrieve_restrictions: OPTIONAL<Restrictions>,
        /**
         * @summary `dfr_configuration_request`.
         * @description
         *
         * If true, the result reports supported constraints, document types,
         * and function-set. Default false. ISO/IEC 10166-1:1991 §7.1.1.
         * @public
         * @readonly
         */
        readonly dfr_configuration_request: OPTIONAL<BOOLEAN>,
        /**
         * @summary `bind_security`.
         * @description
         *
         * OSI security services for the bind (peer authentication,
         * confidentiality, integrity). EXTERNAL. ISO/IEC 10166-1:1991 §7.1.1.
         * @public
         * @readonly
         */
        readonly bind_security: OPTIONAL<BindSecurity>,
        /**
         * @summary `priority`.
         * @public
         * @readonly
         */
        readonly priority: OPTIONAL<Priority>,
        /**
         * @summary `dor_for_produce_operations`.
         * @description
         *
         * Request that the server be willing to return a DOR. Whether it
         * commits is in the result. Default true. ISO/IEC 10166-1:1991 §7.1.1.
         * @public
         * @readonly
         */
        readonly dor_for_produce_operations: OPTIONAL<BOOLEAN>,
        /**
         * @summary `dor_for_consume_operations`.
         * @description
         *
         * Request that the server accept a DOR in operation arguments. Default
         * true. ISO/IEC 10166-1:1991 §7.1.1.
         * @public
         * @readonly
         */
        readonly dor_for_consume_operations: OPTIONAL<BOOLEAN>
    ) {}

    /**
     * @summary Restructures an object into a DfrBindArgument
     * @description
     * 
     * This takes an `object` and converts it to a `DfrBindArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DfrBindArgument`.
     * @returns {DfrBindArgument}
     */
    public static _from_object (_o: { [_K in keyof (DfrBindArgument)]: (DfrBindArgument)[_K] }): DfrBindArgument {
        return new DfrBindArgument(_o.initiator_name, _o.credentials, _o.retrieve_restrictions, _o.dfr_configuration_request, _o.bind_security, _o.priority, _o.dor_for_produce_operations, _o.dor_for_consume_operations);
    }

    /**
     * @summary Getter that returns the default value for `dfr_configuration_request`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_dfr_configuration_request () { return false; }
    /**
     * @summary Getter that returns the default value for `priority`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_priority () { return Priority_medium; }
    /**
     * @summary Getter that returns the default value for `dor_for_produce_operations`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_dor_for_produce_operations () { return true; }
    /**
     * @summary Getter that returns the default value for `dor_for_consume_operations`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_dor_for_consume_operations () { return true; }        /**
         * @summary The enum used as the type of the component `priority`
         * @public
         * @static
         */

    public static _enum_for_priority = _enum_for_Priority;
}

/**
 * @summary The Leading Root Component Types of DfrBindArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DfrBindArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("initiator-name", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("credentials", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("retrieve-restrictions", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("dfr-configuration-request", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("bind-security", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("priority", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("dor-for-produce-operations", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("dor-for-consume-operations", true, $.hasTag(_TagClass.context, 7))
];

/**
 * @summary The Trailing Root Component Types of DfrBindArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DfrBindArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DfrBindArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DfrBindArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DfrBindArgument: $.ASN1Decoder<DfrBindArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DfrBindArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DfrBindArgument (el: _Element): DfrBindArgument {
    if (!_cached_decoder_for_DfrBindArgument) { _cached_decoder_for_DfrBindArgument = function (el: _Element): DfrBindArgument {
    let initiator_name!: DistinguishedName;
    let credentials!: Credentials;
    let retrieve_restrictions: OPTIONAL<Restrictions>;
    let dfr_configuration_request: OPTIONAL<BOOLEAN> = DfrBindArgument._default_value_for_dfr_configuration_request;
    let bind_security: OPTIONAL<BindSecurity>;
    let priority: OPTIONAL<Priority> = DfrBindArgument._default_value_for_priority;
    let dor_for_produce_operations: OPTIONAL<BOOLEAN> = DfrBindArgument._default_value_for_dor_for_produce_operations;
    let dor_for_consume_operations: OPTIONAL<BOOLEAN> = DfrBindArgument._default_value_for_dor_for_consume_operations;
    const callbacks: $.DecodingMap = {
        "initiator-name": (_el: _Element): void => { initiator_name = $._decode_implicit<DistinguishedName>(() => _decode_DistinguishedName)(_el); },
        "credentials": (_el: _Element): void => { credentials = $._decode_explicit<Credentials>(() => _decode_Credentials)(_el); },
        "retrieve-restrictions": (_el: _Element): void => { retrieve_restrictions = $._decode_implicit<Restrictions>(() => _decode_Restrictions)(_el); },
        "dfr-configuration-request": (_el: _Element): void => { dfr_configuration_request = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "bind-security": (_el: _Element): void => { bind_security = $._decode_implicit<BindSecurity>(() => _decode_BindSecurity)(_el); },
        "priority": (_el: _Element): void => { priority = $._decode_implicit<Priority>(() => _decode_Priority)(_el); },
        "dor-for-produce-operations": (_el: _Element): void => { dor_for_produce_operations = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "dor-for-consume-operations": (_el: _Element): void => { dor_for_consume_operations = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DfrBindArgument,
        _extension_additions_list_spec_for_DfrBindArgument,
        _root_component_type_list_2_spec_for_DfrBindArgument,
        undefined,
    );
    return new DfrBindArgument(
        initiator_name,
        credentials,
        retrieve_restrictions,
        dfr_configuration_request,
        bind_security,
        priority,
        dor_for_produce_operations,
        dor_for_consume_operations
    );
}; }
    return _cached_decoder_for_DfrBindArgument(el);
}

let _cached_encoder_for_DfrBindArgument: $.ASN1Encoder<DfrBindArgument> | null = null;

/**
 * @summary Encodes a(n) DfrBindArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DfrBindArgument, encoded as an ASN.1 Element.
 */
export
function _encode_DfrBindArgument (value: DfrBindArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DfrBindArgument) { _cached_encoder_for_DfrBindArgument = function (value: DfrBindArgument): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_DistinguishedName, $.BER)(value.initiator_name, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_Credentials, $.BER)(value.credentials, $.BER),
            /* IF_ABSENT  */ ((value.retrieve_restrictions === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_Restrictions, $.BER)(value.retrieve_restrictions, $.BER)),
            /* IF_DEFAULT */ (value.dfr_configuration_request === undefined || $.deepEq(value.dfr_configuration_request, DfrBindArgument._default_value_for_dfr_configuration_request) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeBoolean, $.BER)(value.dfr_configuration_request, $.BER)),
            /* IF_ABSENT  */ ((value.bind_security === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_BindSecurity, $.BER)(value.bind_security, $.BER)),
            /* IF_DEFAULT */ (value.priority === undefined || $.deepEq(value.priority, DfrBindArgument._default_value_for_priority) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_Priority, $.BER)(value.priority, $.BER)),
            /* IF_DEFAULT */ (value.dor_for_produce_operations === undefined || $.deepEq(value.dor_for_produce_operations, DfrBindArgument._default_value_for_dor_for_produce_operations) ? undefined : $._encode_implicit(_TagClass.context, 6, () => $._encodeBoolean, $.BER)(value.dor_for_produce_operations, $.BER)),
            /* IF_DEFAULT */ (value.dor_for_consume_operations === undefined || $.deepEq(value.dor_for_consume_operations, DfrBindArgument._default_value_for_dor_for_consume_operations) ? undefined : $._encode_implicit(_TagClass.context, 7, () => $._encodeBoolean, $.BER)(value.dor_for_consume_operations, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DfrBindArgument(value, elGetter);
}


/* eslint-enable */
