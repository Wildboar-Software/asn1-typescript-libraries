/* eslint-disable */
import {
    INTEGER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1OverflowError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CollectedInfo, _decode_CollectedInfo, _encode_CollectedInfo } from "../IN-CS2-SCF-SCF-ops-args/CollectedInfo.ta.mjs";
// export { CollectedInfo, _decode_CollectedInfo, _encode_CollectedInfo } from "../IN-CS2-SCF-SCF-ops-args/CollectedInfo.ta.mjs";
import { InfoType, _decode_InfoType, _encode_InfoType, _enum_for_InfoType, numericString /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../IN-CS2-datatypes/InfoType.ta.mjs";
// export { InfoType, _enum_for_InfoType, InfoType_numericString /* IMPORTED_LONG_ENUMERATION_ITEM */, numericString /* IMPORTED_SHORT_ENUMERATION_ITEM */, InfoType_characterString /* IMPORTED_LONG_ENUMERATION_ITEM */, characterString /* IMPORTED_SHORT_ENUMERATION_ITEM */, InfoType_iA5String /* IMPORTED_LONG_ENUMERATION_ITEM */, iA5String /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_InfoType, _encode_InfoType } from "../IN-CS2-datatypes/InfoType.ta.mjs";
import { Actions, _decode_Actions, _encode_Actions, _enum_for_Actions } from "../IN-CS2-SCF-SCF-ops-args/Actions.ta.mjs";
// export { Actions, _enum_for_Actions, Actions_play /* IMPORTED_LONG_ENUMERATION_ITEM */, play /* IMPORTED_SHORT_ENUMERATION_ITEM */, Actions_playandcollect /* IMPORTED_LONG_ENUMERATION_ITEM */, playandcollect /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Actions, _encode_Actions } from "../IN-CS2-SCF-SCF-ops-args/Actions.ta.mjs";
import { Language, _decode_Language, _encode_Language } from "../IN-CS2-datatypes/Language.ta.mjs";
// export { Language, _decode_Language, _encode_Language } from "../IN-CS2-datatypes/Language.ta.mjs";
import { SecurityParameters, _decode_SecurityParameters, _encode_SecurityParameters } from "../DirectoryAbstractService/SecurityParameters.ta.mjs";
// export { SecurityParameters, _decode_SecurityParameters, _encode_SecurityParameters } from "../DirectoryAbstractService/SecurityParameters.ta.mjs";
import { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../IN-CS2-datatypes/ExtensionField.ta.mjs";
// export { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../IN-CS2-datatypes/ExtensionField.ta.mjs";


/**
 * @summary ProvideUserInformationArg_Type
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProvideUserInformationArg-Type ::=
 * SEQUENCE {
 *   constraints [0] CollectedInfo,
 *   -- infoToSend			[1] InformationToSend {bound},
 *   -- errorInfo			[2] InformationToSend {bound}	OPTIONAL,
 *   typeOfRequestedInfo [3] InfoType DEFAULT numericString,
 *   numberOfAllowedRetries [4] INTEGER(0..127) DEFAULT 0,
 *   actions [5] Actions OPTIONAL,
 *   preferredLanguage [6] Language OPTIONAL,
 *   securityParameters [7] SecurityParameters OPTIONAL,
 *   extensions [8] SEQUENCE OF ExtensionField OPTIONAL,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class ProvideUserInformationArg_Type {
    /**
     * @summary `constraints`.
     * @public
     * @readonly
     */
    readonly constraints: CollectedInfo;
    /**
     * @summary `typeOfRequestedInfo`.
     * @public
     * @readonly
     */
    readonly typeOfRequestedInfo: OPTIONAL<InfoType>;
    /**
     * @summary `numberOfAllowedRetries`.
     * @public
     * @readonly
     */
    readonly numberOfAllowedRetries: OPTIONAL<INTEGER>;
    /**
     * @summary `actions`.
     * @public
     * @readonly
     */
    readonly actions: OPTIONAL<Actions>;
    /**
     * @summary `preferredLanguage`.
     * @public
     * @readonly
     */
    readonly preferredLanguage: OPTIONAL<Language>;
    /**
     * @summary `securityParameters`.
     * @public
     * @readonly
     */
    readonly securityParameters: OPTIONAL<SecurityParameters>;
    /**
     * @summary `extensions`.
     * @public
     * @readonly
     */
    readonly extensions: OPTIONAL<ExtensionField[]>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        constraints: CollectedInfo,
        typeOfRequestedInfo?: OPTIONAL<InfoType>,
        numberOfAllowedRetries?: OPTIONAL<INTEGER>,
        actions?: OPTIONAL<Actions>,
        preferredLanguage?: OPTIONAL<Language>,
        securityParameters?: OPTIONAL<SecurityParameters>,
        extensions?: OPTIONAL<ExtensionField[]>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.constraints = constraints;
        this.typeOfRequestedInfo = typeOfRequestedInfo;
        this.numberOfAllowedRetries = numberOfAllowedRetries;
        this.actions = actions;
        this.preferredLanguage = preferredLanguage;
        this.securityParameters = securityParameters;
        this.extensions = extensions;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a ProvideUserInformationArg_Type
     * @description
     * 
     * This takes an `object` and converts it to a `ProvideUserInformationArg_Type`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ProvideUserInformationArg_Type`.
     * @returns {ProvideUserInformationArg_Type}
     */
    public static _from_object (_o: { [_K in keyof (ProvideUserInformationArg_Type)]: (ProvideUserInformationArg_Type)[_K] }): ProvideUserInformationArg_Type {
        return new ProvideUserInformationArg_Type(_o.constraints, _o.typeOfRequestedInfo, _o.numberOfAllowedRetries, _o.actions, _o.preferredLanguage, _o.securityParameters, _o.extensions, _o._unrecognizedExtensionsList);
    }

    /**
     * @summary Getter that returns the default value for `typeOfRequestedInfo`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_typeOfRequestedInfo () { return numericString; }
    /**
     * @summary Getter that returns the default value for `numberOfAllowedRetries`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_numberOfAllowedRetries () { return 0; }        /**
         * @summary The enum used as the type of the component `typeOfRequestedInfo`
         * @public
         * @static
         */

    public static _enum_for_typeOfRequestedInfo = _enum_for_InfoType;        /**
         * @summary The enum used as the type of the component `actions`
         * @public
         * @static
         */

    public static _enum_for_actions = _enum_for_Actions;
}

/**
 * @summary The Leading Root Component Types of ProvideUserInformationArg_Type
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ProvideUserInformationArg_Type: $.ComponentSpec[] = [
    new $.ComponentSpec("constraints", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("typeOfRequestedInfo", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("numberOfAllowedRetries", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("actions", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("preferredLanguage", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("securityParameters", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 8))
];

/**
 * @summary The Trailing Root Component Types of ProvideUserInformationArg_Type
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ProvideUserInformationArg_Type: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ProvideUserInformationArg_Type
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ProvideUserInformationArg_Type: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ProvideUserInformationArg_Type: $.ASN1Decoder<ProvideUserInformationArg_Type> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProvideUserInformationArg_Type
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ProvideUserInformationArg_Type (el: _Element): ProvideUserInformationArg_Type {
    if (!_cached_decoder_for_ProvideUserInformationArg_Type) { _cached_decoder_for_ProvideUserInformationArg_Type = function (el: _Element): ProvideUserInformationArg_Type {
    let constraints!: CollectedInfo;
    let typeOfRequestedInfo: OPTIONAL<InfoType> = ProvideUserInformationArg_Type._default_value_for_typeOfRequestedInfo;
    let numberOfAllowedRetries: OPTIONAL<INTEGER> = ProvideUserInformationArg_Type._default_value_for_numberOfAllowedRetries;
    let actions: OPTIONAL<Actions>;
    let preferredLanguage: OPTIONAL<Language>;
    let securityParameters: OPTIONAL<SecurityParameters>;
    let extensions: OPTIONAL<ExtensionField[]>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "constraints": (_el: _Element): void => { constraints = $._decode_explicit<CollectedInfo>(() => _decode_CollectedInfo)(_el); },
        "typeOfRequestedInfo": (_el: _Element): void => { typeOfRequestedInfo = $._decode_implicit<InfoType>(() => _decode_InfoType)(_el); },
        "numberOfAllowedRetries": (_el: _Element): void => {
            numberOfAllowedRetries = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el);
            if (numberOfAllowedRetries < 0 || numberOfAllowedRetries > 127) {
                throw new ASN1OverflowError("numberOfAllowedRetries violates INTEGER constraint");
            }
        },
        "actions": (_el: _Element): void => { actions = $._decode_implicit<Actions>(() => _decode_Actions)(_el); },
        "preferredLanguage": (_el: _Element): void => { preferredLanguage = $._decode_implicit<Language>(() => _decode_Language)(_el); },
        "securityParameters": (_el: _Element): void => { securityParameters = $._decode_implicit<SecurityParameters>(() => _decode_SecurityParameters)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<ExtensionField[]>(() => $._decodeSequenceOf<ExtensionField>(() => _decode_ExtensionField))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ProvideUserInformationArg_Type,
        _extension_additions_list_spec_for_ProvideUserInformationArg_Type,
        _root_component_type_list_2_spec_for_ProvideUserInformationArg_Type,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ProvideUserInformationArg_Type(
        constraints,
        typeOfRequestedInfo,
        numberOfAllowedRetries,
        actions,
        preferredLanguage,
        securityParameters,
        extensions,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ProvideUserInformationArg_Type(el);
}

let _cached_encoder_for_ProvideUserInformationArg_Type: $.ASN1Encoder<ProvideUserInformationArg_Type> | null = null;

/**
 * @summary Encodes a(n) ProvideUserInformationArg_Type into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProvideUserInformationArg_Type, encoded as an ASN.1 Element.
 */
export
function _encode_ProvideUserInformationArg_Type (value: ProvideUserInformationArg_Type, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ProvideUserInformationArg_Type) { _cached_encoder_for_ProvideUserInformationArg_Type = function (value: ProvideUserInformationArg_Type, elGetter: $.ASN1Encoder<ProvideUserInformationArg_Type>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(7 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_CollectedInfo, $.BER)(value.constraints, $.BER);
    if (value.typeOfRequestedInfo !== undefined && !$.deepEq(value.typeOfRequestedInfo, ProvideUserInformationArg_Type._default_value_for_typeOfRequestedInfo)) {
        _components[_components_i++] = /* IF_DEFAULT */ $._encode_implicit(_TagClass.context, 3, () => _encode_InfoType, $.BER)(value.typeOfRequestedInfo, $.BER);
    }
    if (value.numberOfAllowedRetries !== undefined && !$.deepEq(value.numberOfAllowedRetries, ProvideUserInformationArg_Type._default_value_for_numberOfAllowedRetries)) {
        _components[_components_i++] = /* IF_DEFAULT */ $._encode_implicit(_TagClass.context, 4, () => $._encodeInteger, $.BER)(value.numberOfAllowedRetries, $.BER);
    }
    if (value.actions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_Actions, $.BER)(value.actions, $.BER);
    }
    if (value.preferredLanguage !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => _encode_Language, $.BER)(value.preferredLanguage, $.BER);
    }
    if (value.securityParameters !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => _encode_SecurityParameters, $.BER)(value.securityParameters, $.BER);
    }
    if (value.extensions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => $._encodeSequenceOf<ExtensionField>(() => _encode_ExtensionField, $.BER), $.BER)(value.extensions, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ProvideUserInformationArg_Type(value, elGetter);
}


/* eslint-enable */
