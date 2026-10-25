/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { EventTypeBCSM, _decode_EventTypeBCSM, _encode_EventTypeBCSM, _enum_for_EventTypeBCSM } from "../IN-SSF-SCF-datatypes/EventTypeBCSM.ta.mjs";
// export { EventTypeBCSM, _enum_for_EventTypeBCSM, EventTypeBCSM_origAttemptAuthorized /* IMPORTED_LONG_ENUMERATION_ITEM */, origAttemptAuthorized /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_collectedInfo /* IMPORTED_LONG_ENUMERATION_ITEM */, collectedInfo /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_analysedInformation /* IMPORTED_LONG_ENUMERATION_ITEM */, analysedInformation /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_routeSelectFailure /* IMPORTED_LONG_ENUMERATION_ITEM */, routeSelectFailure /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oCalledPartyBusy /* IMPORTED_LONG_ENUMERATION_ITEM */, oCalledPartyBusy /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oNoAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, oNoAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, oAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oMidCall /* IMPORTED_LONG_ENUMERATION_ITEM */, oMidCall /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oDisconnect /* IMPORTED_LONG_ENUMERATION_ITEM */, oDisconnect /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oAbandon /* IMPORTED_LONG_ENUMERATION_ITEM */, oAbandon /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_termAttemptAuthorized /* IMPORTED_LONG_ENUMERATION_ITEM */, termAttemptAuthorized /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_tBusy /* IMPORTED_LONG_ENUMERATION_ITEM */, tBusy /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_tNoAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, tNoAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_tAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, tAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_tMidCall /* IMPORTED_LONG_ENUMERATION_ITEM */, tMidCall /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_tDisconnect /* IMPORTED_LONG_ENUMERATION_ITEM */, tDisconnect /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_tAbandon /* IMPORTED_LONG_ENUMERATION_ITEM */, tAbandon /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oTermSeized /* IMPORTED_LONG_ENUMERATION_ITEM */, oTermSeized /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oSuspend /* IMPORTED_LONG_ENUMERATION_ITEM */, oSuspend /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_tSuspend /* IMPORTED_LONG_ENUMERATION_ITEM */, tSuspend /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_origAttempt /* IMPORTED_LONG_ENUMERATION_ITEM */, origAttempt /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_termAttempt /* IMPORTED_LONG_ENUMERATION_ITEM */, termAttempt /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oReAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, oReAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_tReAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, tReAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_facilitySelectedAndAvailable /* IMPORTED_LONG_ENUMERATION_ITEM */, facilitySelectedAndAvailable /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_callAccepted /* IMPORTED_LONG_ENUMERATION_ITEM */, callAccepted /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_authorizeRouteFailure /* IMPORTED_LONG_ENUMERATION_ITEM */, authorizeRouteFailure /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_originationAttemptDenied /* IMPORTED_LONG_ENUMERATION_ITEM */, originationAttemptDenied /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_terminationAttemptDenied /* IMPORTED_LONG_ENUMERATION_ITEM */, terminationAttemptDenied /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oModifyRequest /* IMPORTED_LONG_ENUMERATION_ITEM */, oModifyRequest /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oModifyResult /* IMPORTED_LONG_ENUMERATION_ITEM */, oModifyResult /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_tModifyRequest /* IMPORTED_LONG_ENUMERATION_ITEM */, tModifyRequest /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_tModifyResult /* IMPORTED_LONG_ENUMERATION_ITEM */, tModifyResult /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_EventTypeBCSM, _encode_EventTypeBCSM } from "../IN-SSF-SCF-datatypes/EventTypeBCSM.ta.mjs";
import { type ProfileIdentifier, _decode_ProfileIdentifier, _encode_ProfileIdentifier } from "../IN-SSF-SCF-datatypes/ProfileIdentifier.ta.mjs";
// export { ProfileIdentifier, _decode_ProfileIdentifier, _encode_ProfileIdentifier } from "../IN-SSF-SCF-datatypes/ProfileIdentifier.ta.mjs";
import { type Extensions, _decode_Extensions, _encode_Extensions } from "../IN-common-datatypes/Extensions.ta.mjs";
// export { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-common-datatypes/Extensions.ta.mjs";


/**
 * @summary TriggerDataIdentifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TriggerDataIdentifier ::= SEQUENCE {
 *   triggerID   [0]  EventTypeBCSM,
 *   profile     [1]  ProfileIdentifier,
 *   extensions  [2]  Extensions OPTIONAL,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class TriggerDataIdentifier {
    /**
     * @summary `triggerID`.
     * @public
     * @readonly
     */
    readonly triggerID: EventTypeBCSM;
    /**
     * @summary `profile`.
     * @public
     * @readonly
     */
    readonly profile: ProfileIdentifier;
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
        triggerID: EventTypeBCSM,
        profile: ProfileIdentifier,
        extensions?: OPTIONAL<Extensions>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.triggerID = triggerID;
        this.profile = profile;
        this.extensions = extensions;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a TriggerDataIdentifier
     * @description
     * 
     * This takes an `object` and converts it to a `TriggerDataIdentifier`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TriggerDataIdentifier`.
     * @returns {TriggerDataIdentifier}
     */
    public static _from_object (_o: { [_K in keyof (TriggerDataIdentifier)]: (TriggerDataIdentifier)[_K] }): TriggerDataIdentifier {
        return new TriggerDataIdentifier(_o.triggerID, _o.profile, _o.extensions, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `triggerID`
         * @public
         * @static
         */

    public static _enum_for_triggerID = _enum_for_EventTypeBCSM;
}

/**
 * @summary The Leading Root Component Types of TriggerDataIdentifier
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TriggerDataIdentifier: $.ComponentSpec[] = [
    new $.ComponentSpec("triggerID", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("profile", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of TriggerDataIdentifier
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TriggerDataIdentifier: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TriggerDataIdentifier
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TriggerDataIdentifier: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TriggerDataIdentifier: $.ASN1Decoder<TriggerDataIdentifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TriggerDataIdentifier
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TriggerDataIdentifier (el: _Element): TriggerDataIdentifier {
    if (!_cached_decoder_for_TriggerDataIdentifier) { _cached_decoder_for_TriggerDataIdentifier = function (el: _Element): TriggerDataIdentifier {
    let triggerID!: EventTypeBCSM;
    let profile!: ProfileIdentifier;
    let extensions: OPTIONAL<Extensions>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "triggerID": (_el: _Element): void => { triggerID = $._decode_implicit<EventTypeBCSM>(() => _decode_EventTypeBCSM)(_el); },
        "profile": (_el: _Element): void => { profile = $._decode_explicit<ProfileIdentifier>(() => _decode_ProfileIdentifier)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TriggerDataIdentifier,
        _extension_additions_list_spec_for_TriggerDataIdentifier,
        _root_component_type_list_2_spec_for_TriggerDataIdentifier,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new TriggerDataIdentifier(
        triggerID,
        profile,
        extensions,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_TriggerDataIdentifier(el);
}

let _cached_encoder_for_TriggerDataIdentifier: $.ASN1Encoder<TriggerDataIdentifier> | null = null;

/**
 * @summary Encodes a(n) TriggerDataIdentifier into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TriggerDataIdentifier, encoded as an ASN.1 Element.
 */
export
function _encode_TriggerDataIdentifier (value: TriggerDataIdentifier, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TriggerDataIdentifier) { _cached_encoder_for_TriggerDataIdentifier = function (value: TriggerDataIdentifier, elGetter: $.ASN1Encoder<TriggerDataIdentifier>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(3 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_EventTypeBCSM, $.BER)(value.triggerID, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_ProfileIdentifier, $.BER)(value.profile, $.BER);
    if (value.extensions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_Extensions, $.BER)(value.extensions, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_TriggerDataIdentifier(value, elGetter);
}


/* eslint-enable */
