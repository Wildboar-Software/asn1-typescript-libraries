/* eslint-disable */
import {
    BOOLEAN,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { OPTIONALLY_PROTECTED, _get_decoder_for_OPTIONALLY_PROTECTED, _get_encoder_for_OPTIONALLY_PROTECTED } from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.mjs";
// export { OPTIONALLY_PROTECTED, _get_decoder_for_OPTIONALLY_PROTECTED, _get_encoder_for_OPTIONALLY_PROTECTED } from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.mjs";
import { InformationToSend, _decode_InformationToSend, _encode_InformationToSend } from "../IN-SCF-SCF-datatypes/InformationToSend.ta.mjs";
// export { InformationToSend, _decode_InformationToSend, _encode_InformationToSend } from "../IN-SCF-SCF-datatypes/InformationToSend.ta.mjs";
import { Language, _decode_Language, _encode_Language } from "../IN-SCF-SRF-datatypes/Language.ta.mjs";
// export { Language, _decode_Language, _encode_Language } from "../IN-SCF-SRF-datatypes/Language.ta.mjs";
import { SecurityParameters, _decode_SecurityParameters, _encode_SecurityParameters } from "../DirectoryAbstractService/SecurityParameters.ta.mjs";
// export { SecurityParameters, _decode_SecurityParameters, _encode_SecurityParameters } from "../DirectoryAbstractService/SecurityParameters.ta.mjs";
import { CalledPartyNumber, _decode_CalledPartyNumber, _encode_CalledPartyNumber } from "../IN-SSF-SCF-datatypes/CalledPartyNumber.ta.mjs";
// export { CalledPartyNumber, _decode_CalledPartyNumber, _encode_CalledPartyNumber } from "../IN-SSF-SCF-datatypes/CalledPartyNumber.ta.mjs";
import { UserToConnect, _decode_UserToConnect, _encode_UserToConnect } from "../IN-SCF-SCF-datatypes/UserToConnect.ta.mjs";
// export { UserToConnect, _enum_for_UserToConnect, UserToConnect_first /* IMPORTED_LONG_ENUMERATION_ITEM */, first /* IMPORTED_SHORT_ENUMERATION_ITEM */, UserToConnect_nofirst /* IMPORTED_LONG_ENUMERATION_ITEM */, nofirst /* IMPORTED_SHORT_ENUMERATION_ITEM */, UserToConnect_newone /* IMPORTED_LONG_ENUMERATION_ITEM */, newone /* IMPORTED_SHORT_ENUMERATION_ITEM */, UserToConnect_previous /* IMPORTED_LONG_ENUMERATION_ITEM */, previous /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_UserToConnect, _encode_UserToConnect } from "../IN-SCF-SCF-datatypes/UserToConnect.ta.mjs";
import { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-common-datatypes/Extensions.ta.mjs";
// export { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-common-datatypes/Extensions.ta.mjs";


/**
 * @summary ProvideAnnouncementRequestArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProvideAnnouncementRequestArg  ::= 
 *   OPTIONALLY-PROTECTED
 *     {SEQUENCE {infoToSend                   [0]  InformationToSend,
 *                preferredLanguage            [1]  Language OPTIONAL,
 *                securityParameters           [2]  SecurityParameters OPTIONAL,
 *                srfAddress                   [3]  CalledPartyNumber OPTIONAL,
 *                userToConnect                [4]  UserToConnect OPTIONAL,
 *                requestAnnouncementComplete  [5]  BOOLEAN DEFAULT TRUE,
 *                extensions                   [6]  Extensions OPTIONAL,
 *                ...}}
 * ```
 */
export
type ProvideAnnouncementRequestArg = OPTIONALLY_PROTECTED<{ infoToSend: OPTIONAL<InformationToSend>; preferredLanguage: Language; securityParameters: SecurityParameters; srfAddress: CalledPartyNumber; userToConnect: UserToConnect; requestAnnouncementComplete: BOOLEAN; extensions: Extensions }>; // DefinedType

let _cached_decoder_for_ProvideAnnouncementRequestArg: $.ASN1Decoder<ProvideAnnouncementRequestArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProvideAnnouncementRequestArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ProvideAnnouncementRequestArg (el: _Element): ProvideAnnouncementRequestArg {
    if (!_cached_decoder_for_ProvideAnnouncementRequestArg) { _cached_decoder_for_ProvideAnnouncementRequestArg = _get_decoder_for_OPTIONALLY_PROTECTED<{ infoToSend: OPTIONAL<InformationToSend>; preferredLanguage: Language; securityParameters: SecurityParameters; srfAddress: CalledPartyNumber; userToConnect: UserToConnect; requestAnnouncementComplete: BOOLEAN; extensions: Extensions }>(function (el: _Element): OPTIONALLY_PROTECTED {
    let infoToSend!: InformationToSend;
    let preferredLanguage: OPTIONAL<Language>;
    let securityParameters: OPTIONAL<SecurityParameters>;
    let srfAddress: OPTIONAL<CalledPartyNumber>;
    let userToConnect: OPTIONAL<UserToConnect>;
    let requestAnnouncementComplete: OPTIONAL<BOOLEAN> = OPTIONALLY_PROTECTED._default_value_for_requestAnnouncementComplete;
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
        _root_component_type_list_1_spec_for_OPTIONALLY_PROTECTED,
        _extension_additions_list_spec_for_OPTIONALLY_PROTECTED,
        _root_component_type_list_2_spec_for_OPTIONALLY_PROTECTED,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new OPTIONALLY_PROTECTED(
        infoToSend,
        preferredLanguage,
        securityParameters,
        srfAddress,
        userToConnect,
        requestAnnouncementComplete,
        extensions,
        _unrecognizedExtensionsList
    );
}); }
    return _cached_decoder_for_ProvideAnnouncementRequestArg(el);
}

let _cached_encoder_for_ProvideAnnouncementRequestArg: $.ASN1Encoder<ProvideAnnouncementRequestArg> | null = null;

/**
 * @summary Encodes a(n) ProvideAnnouncementRequestArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProvideAnnouncementRequestArg, encoded as an ASN.1 Element.
 */
export
function _encode_ProvideAnnouncementRequestArg (value: ProvideAnnouncementRequestArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ProvideAnnouncementRequestArg) { _cached_encoder_for_ProvideAnnouncementRequestArg = _get_encoder_for_OPTIONALLY_PROTECTED<{ infoToSend: OPTIONAL<InformationToSend>; preferredLanguage: Language; securityParameters: SecurityParameters; srfAddress: CalledPartyNumber; userToConnect: UserToConnect; requestAnnouncementComplete: BOOLEAN; extensions: Extensions }>(function (value: OPTIONALLY_PROTECTED, elGetter: $.ASN1Encoder<OPTIONALLY_PROTECTED>): _Element {
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
    if (value.requestAnnouncementComplete !== undefined && !$.deepEq(value.requestAnnouncementComplete, OPTIONALLY_PROTECTED._default_value_for_requestAnnouncementComplete)) {
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
}); }
    return _cached_encoder_for_ProvideAnnouncementRequestArg(value, elGetter);
}


/* eslint-enable */
