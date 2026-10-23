/* eslint-disable */
import {
    BOOLEAN,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { InformationToSend, _decode_InformationToSend, _encode_InformationToSend } from "../IN-SCF-SCF-datatypes/InformationToSend.ta.mjs";
// export { InformationToSend, _decode_InformationToSend, _encode_InformationToSend } from "../IN-SCF-SCF-datatypes/InformationToSend.ta.mjs";
import { Language, _decode_Language, _encode_Language } from "../IN-SCF-SRF-datatypes/Language.ta.mjs";
// export { Language, _decode_Language, _encode_Language } from "../IN-SCF-SRF-datatypes/Language.ta.mjs";
import { SecurityParameters, _decode_SecurityParameters, _encode_SecurityParameters } from "../DirectoryAbstractService/SecurityParameters.ta.mjs";
// export { SecurityParameters, _decode_SecurityParameters, _encode_SecurityParameters } from "../DirectoryAbstractService/SecurityParameters.ta.mjs";
import { CalledPartyNumber, _decode_CalledPartyNumber, _encode_CalledPartyNumber } from "../IN-SSF-SCF-datatypes/CalledPartyNumber.ta.mjs";
// export { CalledPartyNumber, _decode_CalledPartyNumber, _encode_CalledPartyNumber } from "../IN-SSF-SCF-datatypes/CalledPartyNumber.ta.mjs";
import { UserToConnect, _decode_UserToConnect, _encode_UserToConnect, _enum_for_UserToConnect } from "../IN-SCF-SCF-datatypes/UserToConnect.ta.mjs";
// export { UserToConnect, _enum_for_UserToConnect, UserToConnect_first /* IMPORTED_LONG_ENUMERATION_ITEM */, first /* IMPORTED_SHORT_ENUMERATION_ITEM */, UserToConnect_nofirst /* IMPORTED_LONG_ENUMERATION_ITEM */, nofirst /* IMPORTED_SHORT_ENUMERATION_ITEM */, UserToConnect_newone /* IMPORTED_LONG_ENUMERATION_ITEM */, newone /* IMPORTED_SHORT_ENUMERATION_ITEM */, UserToConnect_previous /* IMPORTED_LONG_ENUMERATION_ITEM */, previous /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_UserToConnect, _encode_UserToConnect } from "../IN-SCF-SCF-datatypes/UserToConnect.ta.mjs";
import { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-common-datatypes/Extensions.ta.mjs";
// export { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-common-datatypes/Extensions.ta.mjs";


/**
 * @summary ProvideAnnouncementRequestArg_Type
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProvideAnnouncementRequestArg-Type ::=
 * SEQUENCE {
 *   infoToSend [0] InformationToSend,
 *   preferredLanguage [1] Language OPTIONAL,
 *   securityParameters [2] SecurityParameters OPTIONAL,
 *   srfAddress [3] CalledPartyNumber OPTIONAL,
 *   userToConnect [4] UserToConnect OPTIONAL,
 *   requestAnnouncementComplete [5] BOOLEAN DEFAULT TRUE,
 *   extensions [6] Extensions OPTIONAL,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class ProvideAnnouncementRequestArg_Type {
    /**
     * @summary `infoToSend`.
     * @public
     * @readonly
     */
    readonly infoToSend: InformationToSend;
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
     * @summary `srfAddress`.
     * @public
     * @readonly
     */
    readonly srfAddress: OPTIONAL<CalledPartyNumber>;
    /**
     * @summary `userToConnect`.
     * @public
     * @readonly
     */
    readonly userToConnect: OPTIONAL<UserToConnect>;
    /**
     * @summary `requestAnnouncementComplete`.
     * @public
     * @readonly
     */
    readonly requestAnnouncementComplete: OPTIONAL<BOOLEAN>;
    /**
     * @summary `extensions`.
     * @public
     * @readonly
     */
    readonly extensions: OPTIONAL<Extensions>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        infoToSend: InformationToSend,
        preferredLanguage?: OPTIONAL<Language>,
        securityParameters?: OPTIONAL<SecurityParameters>,
        srfAddress?: OPTIONAL<CalledPartyNumber>,
        userToConnect?: OPTIONAL<UserToConnect>,
        requestAnnouncementComplete?: OPTIONAL<BOOLEAN>,
        extensions?: OPTIONAL<Extensions>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.infoToSend = infoToSend;
        this.preferredLanguage = preferredLanguage;
        this.securityParameters = securityParameters;
        this.srfAddress = srfAddress;
        this.userToConnect = userToConnect;
        this.requestAnnouncementComplete = requestAnnouncementComplete;
        this.extensions = extensions;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a ProvideAnnouncementRequestArg_Type
     * @description
     * 
     * This takes an `object` and converts it to a `ProvideAnnouncementRequestArg_Type`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ProvideAnnouncementRequestArg_Type`.
     * @returns {ProvideAnnouncementRequestArg_Type}
     */
    public static _from_object (_o: { [_K in keyof (ProvideAnnouncementRequestArg_Type)]: (ProvideAnnouncementRequestArg_Type)[_K] }): ProvideAnnouncementRequestArg_Type {
        return new ProvideAnnouncementRequestArg_Type(_o.infoToSend, _o.preferredLanguage, _o.securityParameters, _o.srfAddress, _o.userToConnect, _o.requestAnnouncementComplete, _o.extensions, _o._unrecognizedExtensionsList);
    }

    /**
     * @summary Getter that returns the default value for `requestAnnouncementComplete`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_requestAnnouncementComplete () { return true; }        /**
         * @summary The enum used as the type of the component `userToConnect`
         * @public
         * @static
         */

    public static _enum_for_userToConnect = _enum_for_UserToConnect;
}

/**
 * @summary The Leading Root Component Types of ProvideAnnouncementRequestArg_Type
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ProvideAnnouncementRequestArg_Type: $.ComponentSpec[] = [
    new $.ComponentSpec("infoToSend", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("preferredLanguage", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("securityParameters", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("srfAddress", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("userToConnect", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("requestAnnouncementComplete", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 6))
];

/**
 * @summary The Trailing Root Component Types of ProvideAnnouncementRequestArg_Type
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ProvideAnnouncementRequestArg_Type: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ProvideAnnouncementRequestArg_Type
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ProvideAnnouncementRequestArg_Type: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ProvideAnnouncementRequestArg_Type: $.ASN1Decoder<ProvideAnnouncementRequestArg_Type> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProvideAnnouncementRequestArg_Type
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ProvideAnnouncementRequestArg_Type (el: _Element): ProvideAnnouncementRequestArg_Type {
    if (!_cached_decoder_for_ProvideAnnouncementRequestArg_Type) { _cached_decoder_for_ProvideAnnouncementRequestArg_Type = function (el: _Element): ProvideAnnouncementRequestArg_Type {
    let infoToSend!: InformationToSend;
    let preferredLanguage: OPTIONAL<Language>;
    let securityParameters: OPTIONAL<SecurityParameters>;
    let srfAddress: OPTIONAL<CalledPartyNumber>;
    let userToConnect: OPTIONAL<UserToConnect>;
    let requestAnnouncementComplete: OPTIONAL<BOOLEAN> = ProvideAnnouncementRequestArg_Type._default_value_for_requestAnnouncementComplete;
    let extensions: OPTIONAL<Extensions>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "infoToSend": (_el: _Element): void => { infoToSend = $._decode_explicit<InformationToSend>(() => _decode_InformationToSend)(_el); },
        "preferredLanguage": (_el: _Element): void => { preferredLanguage = $._decode_implicit<Language>(() => _decode_Language)(_el); },
        "securityParameters": (_el: _Element): void => { securityParameters = $._decode_implicit<SecurityParameters>(() => _decode_SecurityParameters)(_el); },
        "srfAddress": (_el: _Element): void => { srfAddress = $._decode_implicit<CalledPartyNumber>(() => _decode_CalledPartyNumber)(_el); },
        "userToConnect": (_el: _Element): void => { userToConnect = $._decode_implicit<UserToConnect>(() => _decode_UserToConnect)(_el); },
        "requestAnnouncementComplete": (_el: _Element): void => { requestAnnouncementComplete = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ProvideAnnouncementRequestArg_Type,
        _extension_additions_list_spec_for_ProvideAnnouncementRequestArg_Type,
        _root_component_type_list_2_spec_for_ProvideAnnouncementRequestArg_Type,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ProvideAnnouncementRequestArg_Type(
        infoToSend,
        preferredLanguage,
        securityParameters,
        srfAddress,
        userToConnect,
        requestAnnouncementComplete,
        extensions,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ProvideAnnouncementRequestArg_Type(el);
}

let _cached_encoder_for_ProvideAnnouncementRequestArg_Type: $.ASN1Encoder<ProvideAnnouncementRequestArg_Type> | null = null;

/**
 * @summary Encodes a(n) ProvideAnnouncementRequestArg_Type into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProvideAnnouncementRequestArg_Type, encoded as an ASN.1 Element.
 */
export
function _encode_ProvideAnnouncementRequestArg_Type (value: ProvideAnnouncementRequestArg_Type, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ProvideAnnouncementRequestArg_Type) { _cached_encoder_for_ProvideAnnouncementRequestArg_Type = function (value: ProvideAnnouncementRequestArg_Type, elGetter: $.ASN1Encoder<ProvideAnnouncementRequestArg_Type>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(7 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_InformationToSend, $.BER)(value.infoToSend, $.BER);
    if (value.preferredLanguage !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_Language, $.BER)(value.preferredLanguage, $.BER);
    }
    if (value.securityParameters !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_SecurityParameters, $.BER)(value.securityParameters, $.BER);
    }
    if (value.srfAddress !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_CalledPartyNumber, $.BER)(value.srfAddress, $.BER);
    }
    if (value.userToConnect !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_UserToConnect, $.BER)(value.userToConnect, $.BER);
    }
    if (value.requestAnnouncementComplete !== undefined && !$.deepEq(value.requestAnnouncementComplete, ProvideAnnouncementRequestArg_Type._default_value_for_requestAnnouncementComplete)) {
        _components[_components_i++] = /* IF_DEFAULT */ $._encode_implicit(_TagClass.context, 5, () => $._encodeBoolean, $.BER)(value.requestAnnouncementComplete, $.BER);
    }
    if (value.extensions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => _encode_Extensions, $.BER)(value.extensions, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ProvideAnnouncementRequestArg_Type(value, elGetter);
}


/* eslint-enable */
