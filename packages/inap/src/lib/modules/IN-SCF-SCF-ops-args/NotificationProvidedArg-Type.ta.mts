/* eslint-disable */
import {
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Notification, _decode_Notification, _encode_Notification, _enum_for_Notification } from "../IN-SCF-SCF-datatypes/Notification.ta.mjs";
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
 * @summary NotificationProvidedArg_Type
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NotificationProvidedArg-Type ::=
 * SEQUENCE {
 *   notification [0] Notification,
 *   notificationInformation [1] NotificationInformation OPTIONAL,
 *   securityParameters [2] SecurityParameters OPTIONAL,
 *   extensions [3] Extensions OPTIONAL,
 *   partyID [4] PartyID OPTIONAL,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class NotificationProvidedArg_Type {
    /**
     * @summary `notification`.
     * @public
     * @readonly
     */
    readonly notification: Notification;
    /**
     * @summary `notificationInformation`.
     * @public
     * @readonly
     */
    readonly notificationInformation: OPTIONAL<NotificationInformation>;
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
    readonly extensions: OPTIONAL<Extensions>;
    /**
     * @summary `partyID`.
     * @public
     * @readonly
     */
    readonly partyID: OPTIONAL<PartyID>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        notification: Notification,
        notificationInformation?: OPTIONAL<NotificationInformation>,
        securityParameters?: OPTIONAL<SecurityParameters>,
        extensions?: OPTIONAL<Extensions>,
        partyID?: OPTIONAL<PartyID>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.notification = notification;
        this.notificationInformation = notificationInformation;
        this.securityParameters = securityParameters;
        this.extensions = extensions;
        this.partyID = partyID;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a NotificationProvidedArg_Type
     * @description
     * 
     * This takes an `object` and converts it to a `NotificationProvidedArg_Type`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NotificationProvidedArg_Type`.
     * @returns {NotificationProvidedArg_Type}
     */
    public static _from_object (_o: { [_K in keyof (NotificationProvidedArg_Type)]: (NotificationProvidedArg_Type)[_K] }): NotificationProvidedArg_Type {
        return new NotificationProvidedArg_Type(_o.notification, _o.notificationInformation, _o.securityParameters, _o.extensions, _o.partyID, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `notification`
         * @public
         * @static
         */

    public static _enum_for_notification = _enum_for_Notification;
}

/**
 * @summary The Leading Root Component Types of NotificationProvidedArg_Type
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_NotificationProvidedArg_Type: $.ComponentSpec[] = [
    new $.ComponentSpec("notification", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("notificationInformation", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("securityParameters", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("partyID", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of NotificationProvidedArg_Type
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_NotificationProvidedArg_Type: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of NotificationProvidedArg_Type
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_NotificationProvidedArg_Type: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_NotificationProvidedArg_Type: $.ASN1Decoder<NotificationProvidedArg_Type> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NotificationProvidedArg_Type
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NotificationProvidedArg_Type (el: _Element): NotificationProvidedArg_Type {
    if (!_cached_decoder_for_NotificationProvidedArg_Type) { _cached_decoder_for_NotificationProvidedArg_Type = function (el: _Element): NotificationProvidedArg_Type {
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
        _root_component_type_list_1_spec_for_NotificationProvidedArg_Type,
        _extension_additions_list_spec_for_NotificationProvidedArg_Type,
        _root_component_type_list_2_spec_for_NotificationProvidedArg_Type,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new NotificationProvidedArg_Type(
        notification,
        notificationInformation,
        securityParameters,
        extensions,
        partyID,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_NotificationProvidedArg_Type(el);
}

let _cached_encoder_for_NotificationProvidedArg_Type: $.ASN1Encoder<NotificationProvidedArg_Type> | null = null;

/**
 * @summary Encodes a(n) NotificationProvidedArg_Type into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NotificationProvidedArg_Type, encoded as an ASN.1 Element.
 */
export
function _encode_NotificationProvidedArg_Type (value: NotificationProvidedArg_Type, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NotificationProvidedArg_Type) { _cached_encoder_for_NotificationProvidedArg_Type = function (value: NotificationProvidedArg_Type, elGetter: $.ASN1Encoder<NotificationProvidedArg_Type>): _Element {
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
}; }
    return _cached_encoder_for_NotificationProvidedArg_Type(value, elGetter);
}


/* eslint-enable */
