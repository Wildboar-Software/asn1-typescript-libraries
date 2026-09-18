/* eslint-disable */
import {
    OPTIONAL,
    VisibleString,
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
import { Name, _decode_Name, _encode_Name } from "../InformationFramework/Name.ta.mjs";
// export { Name, _decode_Name, _encode_Name } from "../InformationFramework/Name.ta.mjs";
import { TypeProvider, _enum_for_TypeProvider, _decode_TypeProvider, _encode_TypeProvider } from "../MachineReadableBiometricTestingAndReportingTestReport/TypeProvider.ta.mjs";
// export { TypeProvider, _enum_for_TypeProvider, TypeProvider_non_profit /* IMPORTED_LONG_ENUMERATION_ITEM */, non_profit /* IMPORTED_SHORT_ENUMERATION_ITEM */, TypeProvider_university /* IMPORTED_LONG_ENUMERATION_ITEM */, university /* IMPORTED_SHORT_ENUMERATION_ITEM */, TypeProvider_corporation /* IMPORTED_LONG_ENUMERATION_ITEM */, corporation /* IMPORTED_SHORT_ENUMERATION_ITEM */, TypeProvider_individual /* IMPORTED_LONG_ENUMERATION_ITEM */, individual /* IMPORTED_SHORT_ENUMERATION_ITEM */, TypeProvider_government /* IMPORTED_LONG_ENUMERATION_ITEM */, government /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_TypeProvider, _encode_TypeProvider } from "../MachineReadableBiometricTestingAndReportingTestReport/TypeProvider.ta.mjs";
import { RoleProvider, _enum_for_RoleProvider, _decode_RoleProvider, _encode_RoleProvider } from "../MachineReadableBiometricTestingAndReportingTestReport/RoleProvider.ta.mjs";
// export { RoleProvider, _enum_for_RoleProvider, RoleProvider_manufacturer /* IMPORTED_LONG_ENUMERATION_ITEM */, manufacturer /* IMPORTED_SHORT_ENUMERATION_ITEM */, RoleProvider_reseller /* IMPORTED_LONG_ENUMERATION_ITEM */, reseller /* IMPORTED_SHORT_ENUMERATION_ITEM */, RoleProvider_integrator /* IMPORTED_LONG_ENUMERATION_ITEM */, integrator /* IMPORTED_SHORT_ENUMERATION_ITEM */, RoleProvider_other /* IMPORTED_LONG_ENUMERATION_ITEM */, other /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_RoleProvider, _encode_RoleProvider } from "../MachineReadableBiometricTestingAndReportingTestReport/RoleProvider.ta.mjs";


/**
 * @summary Provider
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Provider ::= SEQUENCE {
 *     nameProvider        Name,
 *     typeProvider        TypeProvider,
 *     roleProvider        RoleProvider,
 *     contactInformation  VisibleString OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class Provider {
    constructor (
        /**
         * @summary `nameProvider`.
         * @public
         * @readonly
         */
        readonly nameProvider: Name,
        /**
         * @summary `typeProvider`.
         * @public
         * @readonly
         */
        readonly typeProvider: TypeProvider,
        /**
         * @summary `roleProvider`.
         * @public
         * @readonly
         */
        readonly roleProvider: RoleProvider,
        /**
         * @summary `contactInformation`.
         * @public
         * @readonly
         */
        readonly contactInformation: OPTIONAL<VisibleString>
    ) {}

    /**
     * @summary Restructures an object into a Provider
     * @description
     * 
     * This takes an `object` and converts it to a `Provider`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Provider`.
     * @returns {Provider}
     */
    public static _from_object (_o: { [_K in keyof (Provider)]: (Provider)[_K] }): Provider {
        return new Provider(_o.nameProvider, _o.typeProvider, _o.roleProvider, _o.contactInformation);
    }

        /**
         * @summary The enum used as the type of the component `typeProvider`
         * @public
         * @static
         */

    public static _enum_for_typeProvider = _enum_for_TypeProvider;        /**
         * @summary The enum used as the type of the component `roleProvider`
         * @public
         * @static
         */

    public static _enum_for_roleProvider = _enum_for_RoleProvider;
}

/**
 * @summary The Leading Root Component Types of Provider
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Provider: $.ComponentSpec[] = [
    new $.ComponentSpec("nameProvider", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("typeProvider", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("roleProvider", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("contactInformation", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of Provider
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Provider: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Provider
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Provider: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Provider: $.ASN1Decoder<Provider> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Provider
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Provider (el: _Element): Provider {
    if (!_cached_decoder_for_Provider) { _cached_decoder_for_Provider = function (el: _Element): Provider {
    let nameProvider!: Name;
    let typeProvider!: TypeProvider;
    let roleProvider!: RoleProvider;
    let contactInformation: OPTIONAL<VisibleString>;
    const callbacks: $.DecodingMap = {
        "nameProvider": (_el: _Element): void => { nameProvider = $._decode_explicit<Name>(() => _decode_Name)(_el); },
        "typeProvider": (_el: _Element): void => { typeProvider = _decode_TypeProvider(_el); },
        "roleProvider": (_el: _Element): void => { roleProvider = _decode_RoleProvider(_el); },
        "contactInformation": (_el: _Element): void => { contactInformation = $._decodeVisibleString(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Provider,
        _extension_additions_list_spec_for_Provider,
        _root_component_type_list_2_spec_for_Provider,
        undefined,
    );
    return new Provider(
        nameProvider,
        typeProvider,
        roleProvider,
        contactInformation
    );
}; }
    return _cached_decoder_for_Provider(el);
}

let _cached_encoder_for_Provider: $.ASN1Encoder<Provider> | null = null;

/**
 * @summary Encodes a(n) Provider into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Provider, encoded as an ASN.1 Element.
 */
export
function _encode_Provider (value: Provider, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Provider) { _cached_encoder_for_Provider = function (value: Provider): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED  */ $._encode_explicit(_TagClass.context, 0, () => _encode_Name, $.BER)(value.nameProvider, $.BER),
            /* REQUIRED  */ $._encode_implicit(_TagClass.context, 1, () => _encode_TypeProvider, $.BER)(value.typeProvider, $.BER),
            /* REQUIRED  */ $._encode_implicit(_TagClass.context, 2, () => _encode_RoleProvider, $.BER)(value.roleProvider, $.BER),
            /* IF_ABSENT */ ((value.contactInformation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeVisibleString, $.BER)(value.contactInformation, $.BER)),
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Provider(value, elGetter);
}


/* eslint-enable */
