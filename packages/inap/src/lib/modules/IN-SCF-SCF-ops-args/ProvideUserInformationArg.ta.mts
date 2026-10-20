/* eslint-disable */
import {
    INTEGER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { OPTIONALLY_PROTECTED, _get_decoder_for_OPTIONALLY_PROTECTED, _get_encoder_for_OPTIONALLY_PROTECTED } from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.mjs";
// export { OPTIONALLY_PROTECTED, _get_decoder_for_OPTIONALLY_PROTECTED, _get_encoder_for_OPTIONALLY_PROTECTED } from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.mjs";
import { CollectedInfo, _decode_CollectedInfo, _encode_CollectedInfo } from "../IN-SCF-SCF-datatypes/CollectedInfo.ta.mjs";
// export { CollectedInfo, _decode_CollectedInfo, _encode_CollectedInfo } from "../IN-SCF-SCF-datatypes/CollectedInfo.ta.mjs";
import { InformationToSend, _decode_InformationToSend, _encode_InformationToSend } from "../IN-SCF-SCF-datatypes/InformationToSend.ta.mjs";
// export { InformationToSend, _decode_InformationToSend, _encode_InformationToSend } from "../IN-SCF-SCF-datatypes/InformationToSend.ta.mjs";
import { InfoType, _decode_InfoType, _encode_InfoType } from "../IN-SCF-SCF-datatypes/InfoType.ta.mjs";
// export { InfoType, _enum_for_InfoType, InfoType_numericString /* IMPORTED_LONG_ENUMERATION_ITEM */, numericString /* IMPORTED_SHORT_ENUMERATION_ITEM */, InfoType_characterString /* IMPORTED_LONG_ENUMERATION_ITEM */, characterString /* IMPORTED_SHORT_ENUMERATION_ITEM */, InfoType_iA5String /* IMPORTED_LONG_ENUMERATION_ITEM */, iA5String /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_InfoType, _encode_InfoType } from "../IN-SCF-SCF-datatypes/InfoType.ta.mjs";
import { Actions, _decode_Actions, _encode_Actions } from "../IN-SCF-SCF-datatypes/Actions.ta.mjs";
// export { Actions, _enum_for_Actions, Actions_play /* IMPORTED_LONG_ENUMERATION_ITEM */, play /* IMPORTED_SHORT_ENUMERATION_ITEM */, Actions_playandcollect /* IMPORTED_LONG_ENUMERATION_ITEM */, playandcollect /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Actions, _encode_Actions } from "../IN-SCF-SCF-datatypes/Actions.ta.mjs";
import { Language, _decode_Language, _encode_Language } from "../IN-SCF-SRF-datatypes/Language.ta.mjs";
// export { Language, _decode_Language, _encode_Language } from "../IN-SCF-SRF-datatypes/Language.ta.mjs";
import { SecurityParameters, _decode_SecurityParameters, _encode_SecurityParameters } from "../DirectoryAbstractService/SecurityParameters.ta.mjs";
// export { SecurityParameters, _decode_SecurityParameters, _encode_SecurityParameters } from "../DirectoryAbstractService/SecurityParameters.ta.mjs";
import { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-common-datatypes/Extensions.ta.mjs";
// export { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-common-datatypes/Extensions.ta.mjs";
import { CalledPartyNumber, _decode_CalledPartyNumber, _encode_CalledPartyNumber } from "../IN-SSF-SCF-datatypes/CalledPartyNumber.ta.mjs";
// export { CalledPartyNumber, _decode_CalledPartyNumber, _encode_CalledPartyNumber } from "../IN-SSF-SCF-datatypes/CalledPartyNumber.ta.mjs";
import { UserToConnect, _decode_UserToConnect, _encode_UserToConnect } from "../IN-SCF-SCF-datatypes/UserToConnect.ta.mjs";
// export { UserToConnect, _enum_for_UserToConnect, UserToConnect_first /* IMPORTED_LONG_ENUMERATION_ITEM */, first /* IMPORTED_SHORT_ENUMERATION_ITEM */, UserToConnect_nofirst /* IMPORTED_LONG_ENUMERATION_ITEM */, nofirst /* IMPORTED_SHORT_ENUMERATION_ITEM */, UserToConnect_newone /* IMPORTED_LONG_ENUMERATION_ITEM */, newone /* IMPORTED_SHORT_ENUMERATION_ITEM */, UserToConnect_previous /* IMPORTED_LONG_ENUMERATION_ITEM */, previous /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_UserToConnect, _encode_UserToConnect } from "../IN-SCF-SCF-datatypes/UserToConnect.ta.mjs";


/**
 * @summary ProvideUserInformationArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProvideUserInformationArg  ::= 
 *   OPTIONALLY-PROTECTED
 *     {SEQUENCE {constraints             [0]  CollectedInfo,
 *                infoToSend              [1]  InformationToSend,
 *                errorInfo               [2]  InformationToSend OPTIONAL,
 *                typeOfRequestedInfo     [3]  InfoType DEFAULT numericString,
 *                numberOfAllowedRetries  [4]  INTEGER(0..127) DEFAULT 0,
 *                actions                 [5]  Actions OPTIONAL,
 *                preferredLanguage       [6]  Language OPTIONAL,
 *                securityParameters      [7]  SecurityParameters OPTIONAL,
 *                extensions              [8]  Extensions OPTIONAL,
 *                srfAddress              [10]  CalledPartyNumber OPTIONAL,
 *                userToConnect           [11]  UserToConnect OPTIONAL,
 *                ...}}
 * ```
 */
export
interface ProvideUserInformationArg_sequence {
    constraints: CollectedInfo;
    infoToSend: InformationToSend;
    errorInfo?: OPTIONAL<InformationToSend>;
    typeOfRequestedInfo?: OPTIONAL<InfoType>;
    numberOfAllowedRetries?: OPTIONAL<INTEGER>;
    actions?: OPTIONAL<Actions>;
    preferredLanguage?: OPTIONAL<Language>;
    securityParameters?: OPTIONAL<SecurityParameters>;
    extensions?: OPTIONAL<Extensions>;
    srfAddress?: OPTIONAL<CalledPartyNumber>;
    userToConnect?: OPTIONAL<UserToConnect>;
    _unrecognizedExtensionsList: _Element[];
}

export
type ProvideUserInformationArg = OPTIONALLY_PROTECTED<ProvideUserInformationArg_sequence>; // DefinedType

const _default_value_for_typeOfRequestedInfo: InfoType = InfoType.numericString;
const _default_value_for_numberOfAllowedRetries: INTEGER = 0;

const _root_component_type_list_1_spec_for_OPTIONALLY_PROTECTED: $.ComponentSpec[] = [
    new $.ComponentSpec("constraints", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("infoToSend", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("errorInfo", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("typeOfRequestedInfo", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("numberOfAllowedRetries", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("actions", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("preferredLanguage", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("securityParameters", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("srfAddress", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("userToConnect", true, $.hasTag(_TagClass.context, 11)),
];

const _extension_additions_list_spec_for_OPTIONALLY_PROTECTED: $.ComponentSpec[] = [];

const _root_component_type_list_2_spec_for_OPTIONALLY_PROTECTED: $.ComponentSpec[] = [];

let _cached_decoder_for_ProvideUserInformationArg: $.ASN1Decoder<ProvideUserInformationArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProvideUserInformationArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ProvideUserInformationArg (el: _Element): ProvideUserInformationArg {
    if (!_cached_decoder_for_ProvideUserInformationArg) { _cached_decoder_for_ProvideUserInformationArg = _get_decoder_for_OPTIONALLY_PROTECTED<ProvideUserInformationArg_sequence>(function (el: _Element): ProvideUserInformationArg_sequence {
    let constraints!: CollectedInfo;
    let infoToSend!: InformationToSend;
    let errorInfo: OPTIONAL<InformationToSend>;
    let typeOfRequestedInfo: OPTIONAL<InfoType> = _default_value_for_typeOfRequestedInfo;
    let numberOfAllowedRetries: OPTIONAL<INTEGER> = _default_value_for_numberOfAllowedRetries;
    let actions: OPTIONAL<Actions>;
    let preferredLanguage: OPTIONAL<Language>;
    let securityParameters: OPTIONAL<SecurityParameters>;
    let extensions: OPTIONAL<Extensions>;
    let srfAddress: OPTIONAL<CalledPartyNumber>;
    let userToConnect: OPTIONAL<UserToConnect>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "constraints": (_el: _Element): void => { constraints = $._decode_explicit<CollectedInfo>(() => _decode_CollectedInfo)(_el); },
        "infoToSend": (_el: _Element): void => { infoToSend = $._decode_explicit<InformationToSend>(() => _decode_InformationToSend)(_el); },
        "errorInfo": (_el: _Element): void => { errorInfo = $._decode_explicit<InformationToSend>(() => _decode_InformationToSend)(_el); },
        "typeOfRequestedInfo": (_el: _Element): void => { typeOfRequestedInfo = $._decode_implicit<InfoType>(() => _decode_InfoType)(_el); },
        "numberOfAllowedRetries": (_el: _Element): void => { numberOfAllowedRetries = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "actions": (_el: _Element): void => { actions = $._decode_implicit<Actions>(() => _decode_Actions)(_el); },
        "preferredLanguage": (_el: _Element): void => { preferredLanguage = $._decode_implicit<Language>(() => _decode_Language)(_el); },
        "securityParameters": (_el: _Element): void => { securityParameters = $._decode_implicit<SecurityParameters>(() => _decode_SecurityParameters)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); },
        "srfAddress": (_el: _Element): void => { srfAddress = $._decode_implicit<CalledPartyNumber>(() => _decode_CalledPartyNumber)(_el); },
        "userToConnect": (_el: _Element): void => { userToConnect = $._decode_implicit<UserToConnect>(() => _decode_UserToConnect)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_OPTIONALLY_PROTECTED,
        _extension_additions_list_spec_for_OPTIONALLY_PROTECTED,
        _root_component_type_list_2_spec_for_OPTIONALLY_PROTECTED,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return { constraints, infoToSend, errorInfo, typeOfRequestedInfo, numberOfAllowedRetries, actions, preferredLanguage, securityParameters, extensions, srfAddress, userToConnect, _unrecognizedExtensionsList };
}); }
    return _cached_decoder_for_ProvideUserInformationArg(el);
}

let _cached_encoder_for_ProvideUserInformationArg: $.ASN1Encoder<ProvideUserInformationArg> | null = null;

/**
 * @summary Encodes a(n) ProvideUserInformationArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProvideUserInformationArg, encoded as an ASN.1 Element.
 */
export
function _encode_ProvideUserInformationArg (value: ProvideUserInformationArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ProvideUserInformationArg) { _cached_encoder_for_ProvideUserInformationArg = _get_encoder_for_OPTIONALLY_PROTECTED<ProvideUserInformationArg_sequence>(function (value: ProvideUserInformationArg_sequence, elGetter: $.ASN1Encoder<ProvideUserInformationArg_sequence>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(11 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_CollectedInfo, $.BER)(value.constraints, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_InformationToSend, $.BER)(value.infoToSend, $.BER);
    if (value.errorInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 2, () => _encode_InformationToSend, $.BER)(value.errorInfo, $.BER);
    }
    if (value.typeOfRequestedInfo !== undefined && !$.deepEq(value.typeOfRequestedInfo, _default_value_for_typeOfRequestedInfo)) {
        _components[_components_i++] = /* IF_DEFAULT */ $._encode_implicit(_TagClass.context, 3, () => _encode_InfoType, $.BER)(value.typeOfRequestedInfo, $.BER);
    }
    if (value.numberOfAllowedRetries !== undefined && !$.deepEq(value.numberOfAllowedRetries, _default_value_for_numberOfAllowedRetries)) {
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
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => _encode_Extensions, $.BER)(value.extensions, $.BER);
    }
    if (value.srfAddress !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => _encode_CalledPartyNumber, $.BER)(value.srfAddress, $.BER);
    }
    if (value.userToConnect !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => _encode_UserToConnect, $.BER)(value.userToConnect, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}); }
    return _cached_encoder_for_ProvideUserInformationArg(value, elGetter);
}


/* eslint-enable */
