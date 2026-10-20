/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { OPTIONALLY_PROTECTED, _get_decoder_for_OPTIONALLY_PROTECTED, _get_encoder_for_OPTIONALLY_PROTECTED } from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.mjs";
// export { OPTIONALLY_PROTECTED, _get_decoder_for_OPTIONALLY_PROTECTED, _get_encoder_for_OPTIONALLY_PROTECTED } from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.mjs";
import { Notification, _decode_Notification, _encode_Notification } from "../IN-SCF-SCF-datatypes/Notification.ta.mjs";
// export { Notification, _enum_for_Notification, Notification_userAbandon /* IMPORTED_LONG_ENUMERATION_ITEM */, userAbandon /* IMPORTED_SHORT_ENUMERATION_ITEM */, Notification_callFailure /* IMPORTED_LONG_ENUMERATION_ITEM */, callFailure /* IMPORTED_SHORT_ENUMERATION_ITEM */, Notification_noReply /* IMPORTED_LONG_ENUMERATION_ITEM */, noReply /* IMPORTED_SHORT_ENUMERATION_ITEM */, Notification_callRelease /* IMPORTED_LONG_ENUMERATION_ITEM */, callRelease /* IMPORTED_SHORT_ENUMERATION_ITEM */, Notification_ssInvocation /* IMPORTED_LONG_ENUMERATION_ITEM */, ssInvocation /* IMPORTED_SHORT_ENUMERATION_ITEM */, Notification_creditLimitReached /* IMPORTED_LONG_ENUMERATION_ITEM */, creditLimitReached /* IMPORTED_SHORT_ENUMERATION_ITEM */, Notification_callDuration /* IMPORTED_LONG_ENUMERATION_ITEM */, callDuration /* IMPORTED_SHORT_ENUMERATION_ITEM */, Notification_calledNumber /* IMPORTED_LONG_ENUMERATION_ITEM */, calledNumber /* IMPORTED_SHORT_ENUMERATION_ITEM */, Notification_answeredCall /* IMPORTED_LONG_ENUMERATION_ITEM */, answeredCall /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Notification, _encode_Notification } from "../IN-SCF-SCF-datatypes/Notification.ta.mjs";
import { NotificationInformation, _decode_NotificationInformation, _encode_NotificationInformation } from "../IN-SCF-SCF-datatypes/NotificationInformation.ta.mjs";
// export { NotificationInformation, _decode_NotificationInformation, _encode_NotificationInformation } from "../IN-SCF-SCF-datatypes/NotificationInformation.ta.mjs";
import { SecurityParameters, _decode_SecurityParameters, _encode_SecurityParameters } from "../DirectoryAbstractService/SecurityParameters.ta.mjs";
// export { SecurityParameters, _decode_SecurityParameters, _encode_SecurityParameters } from "../DirectoryAbstractService/SecurityParameters.ta.mjs";
import { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-common-datatypes/Extensions.ta.mjs";
// export { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-common-datatypes/Extensions.ta.mjs";
import { PartyID, _decode_PartyID, _encode_PartyID } from "../IN-SCF-SCF-datatypes/PartyID.ta.mjs";
// export { PartyID, _decode_PartyID, _encode_PartyID } from "../IN-SCF-SCF-datatypes/PartyID.ta.mjs";


/**
 * @summary NotificationProvidedArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NotificationProvidedArg  ::= 
 *   OPTIONALLY-PROTECTED
 *     {SEQUENCE {notification             [0]  Notification,
 *                notificationInformation
 *                  [1]  NotificationInformation OPTIONAL,
 *                securityParameters       [2]  SecurityParameters OPTIONAL,
 *                extensions               [3]  Extensions OPTIONAL,
 *                partyID                  [4]  PartyID OPTIONAL,
 *                ...}}
 * ```
 */
export
type NotificationProvidedArg = OPTIONALLY_PROTECTED<{ notification: OPTIONAL<Notification>; notificationInformation: NotificationInformation; securityParameters: SecurityParameters; extensions: Extensions; partyID: PartyID }>; // DefinedType

let _cached_decoder_for_NotificationProvidedArg: $.ASN1Decoder<NotificationProvidedArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NotificationProvidedArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NotificationProvidedArg (el: _Element): NotificationProvidedArg {
    if (!_cached_decoder_for_NotificationProvidedArg) { _cached_decoder_for_NotificationProvidedArg = _get_decoder_for_OPTIONALLY_PROTECTED<{ notification: OPTIONAL<Notification>; notificationInformation: NotificationInformation; securityParameters: SecurityParameters; extensions: Extensions; partyID: PartyID }>(function (el: _Element): OPTIONALLY_PROTECTED {
    let notification!: Notification;
    let notificationInformation: OPTIONAL<NotificationInformation>;
    let securityParameters: OPTIONAL<SecurityParameters>;
    let extensions: OPTIONAL<Extensions>;
    let partyID: OPTIONAL<PartyID>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "notification": (_el: _Element): void => { notification = $._decode_implicit<Notification>(() => _decode_Notification)(_el); },
        "notificationInformation": (_el: _Element): void => { notificationInformation = $._decode_explicit<NotificationInformation>(() => _decode_NotificationInformation)(_el); },
        "securityParameters": (_el: _Element): void => { securityParameters = $._decode_implicit<SecurityParameters>(() => _decode_SecurityParameters)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); },
        "partyID": (_el: _Element): void => { partyID = $._decode_implicit<PartyID>(() => _decode_PartyID)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_OPTIONALLY_PROTECTED,
        _extension_additions_list_spec_for_OPTIONALLY_PROTECTED,
        _root_component_type_list_2_spec_for_OPTIONALLY_PROTECTED,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new OPTIONALLY_PROTECTED(
        notification,
        notificationInformation,
        securityParameters,
        extensions,
        partyID,
        _unrecognizedExtensionsList
    );
}); }
    return _cached_decoder_for_NotificationProvidedArg(el);
}

let _cached_encoder_for_NotificationProvidedArg: $.ASN1Encoder<NotificationProvidedArg> | null = null;

/**
 * @summary Encodes a(n) NotificationProvidedArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NotificationProvidedArg, encoded as an ASN.1 Element.
 */
export
function _encode_NotificationProvidedArg (value: NotificationProvidedArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NotificationProvidedArg) { _cached_encoder_for_NotificationProvidedArg = _get_encoder_for_OPTIONALLY_PROTECTED<{ notification: OPTIONAL<Notification>; notificationInformation: NotificationInformation; securityParameters: SecurityParameters; extensions: Extensions; partyID: PartyID }>(function (value: OPTIONALLY_PROTECTED, elGetter: $.ASN1Encoder<OPTIONALLY_PROTECTED>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(5 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_Notification, $.BER)(value.notification, $.BER);
    if (value.notificationInformation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 1, () => _encode_NotificationInformation, $.BER)(value.notificationInformation, $.BER);
    }
    if (value.securityParameters !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_SecurityParameters, $.BER)(value.securityParameters, $.BER);
    }
    if (value.extensions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_Extensions, $.BER)(value.extensions, $.BER);
    }
    if (value.partyID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_PartyID, $.BER)(value.partyID, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}); }
    return _cached_encoder_for_NotificationProvidedArg(value, elGetter);
}


/* eslint-enable */
