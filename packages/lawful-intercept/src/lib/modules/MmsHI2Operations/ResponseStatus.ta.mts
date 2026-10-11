/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { EncodedString, _decode_EncodedString, _encode_EncodedString } from "../MmsHI2Operations/EncodedString.ta.mjs";
// export { EncodedString, _decode_EncodedString, _encode_EncodedString } from "../MmsHI2Operations/EncodedString.ta.mjs";
import { ActualResponseStatus, _decode_ActualResponseStatus, _encode_ActualResponseStatus, _enum_for_ActualResponseStatus } from "../MmsHI2Operations/ActualResponseStatus.ta.mjs";
// export { ActualResponseStatus, _enum_for_ActualResponseStatus, ActualResponseStatus_ok /* IMPORTED_LONG_ENUMERATION_ITEM */, ok /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActualResponseStatus_errorUnspecified /* IMPORTED_LONG_ENUMERATION_ITEM */, errorUnspecified /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActualResponseStatus_errorServiceDenied /* IMPORTED_LONG_ENUMERATION_ITEM */, errorServiceDenied /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActualResponseStatus_errorMessageFormatCorrupt /* IMPORTED_LONG_ENUMERATION_ITEM */, errorMessageFormatCorrupt /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActualResponseStatus_errorSendingAddressUnresolved /* IMPORTED_LONG_ENUMERATION_ITEM */, errorSendingAddressUnresolved /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActualResponseStatus_errorMessageNotFound /* IMPORTED_LONG_ENUMERATION_ITEM */, errorMessageNotFound /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActualResponseStatus_errorNetworkProblem /* IMPORTED_LONG_ENUMERATION_ITEM */, errorNetworkProblem /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActualResponseStatus_errorContentNotAccepted /* IMPORTED_LONG_ENUMERATION_ITEM */, errorContentNotAccepted /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActualResponseStatus_errorUnsuportedMessage /* IMPORTED_LONG_ENUMERATION_ITEM */, errorUnsuportedMessage /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActualResponseStatus_errorTransientFailure /* IMPORTED_LONG_ENUMERATION_ITEM */, errorTransientFailure /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActualResponseStatus_errorTransientSendingAddressUnresolved /* IMPORTED_LONG_ENUMERATION_ITEM */, errorTransientSendingAddressUnresolved /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActualResponseStatus_errorTransientMessageNotFound /* IMPORTED_LONG_ENUMERATION_ITEM */, errorTransientMessageNotFound /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActualResponseStatus_errorTransientNetworkProblem /* IMPORTED_LONG_ENUMERATION_ITEM */, errorTransientNetworkProblem /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActualResponseStatus_errorTransientPartialSucess /* IMPORTED_LONG_ENUMERATION_ITEM */, errorTransientPartialSucess /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActualResponseStatus_errorPermanentFailure /* IMPORTED_LONG_ENUMERATION_ITEM */, errorPermanentFailure /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActualResponseStatus_errorPermanentServiceDenied /* IMPORTED_LONG_ENUMERATION_ITEM */, errorPermanentServiceDenied /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActualResponseStatus_errorPermanentMessageFormatCorrupt /* IMPORTED_LONG_ENUMERATION_ITEM */, errorPermanentMessageFormatCorrupt /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActualResponseStatus_errorPermanentSendingAddressUnresolved /* IMPORTED_LONG_ENUMERATION_ITEM */, errorPermanentSendingAddressUnresolved /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActualResponseStatus_errorPermanentMessageNotFound /* IMPORTED_LONG_ENUMERATION_ITEM */, errorPermanentMessageNotFound /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActualResponseStatus_errorPermanentContentNotAccepted /* IMPORTED_LONG_ENUMERATION_ITEM */, errorPermanentContentNotAccepted /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActualResponseStatus_errorPermanentReplyChargingLimitationsNotMet /* IMPORTED_LONG_ENUMERATION_ITEM */, errorPermanentReplyChargingLimitationsNotMet /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActualResponseStatus_errorPermanentReplyChargingRequestNotAccepted /* IMPORTED_LONG_ENUMERATION_ITEM */, errorPermanentReplyChargingRequestNotAccepted /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActualResponseStatus_errorPermanentReplyChargingForwardingDenied /* IMPORTED_LONG_ENUMERATION_ITEM */, errorPermanentReplyChargingForwardingDenied /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActualResponseStatus_errorPermanentReplyChargingNotSupported /* IMPORTED_LONG_ENUMERATION_ITEM */, errorPermanentReplyChargingNotSupported /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActualResponseStatus_errorPermanentAddressHidingNotSupported /* IMPORTED_LONG_ENUMERATION_ITEM */, errorPermanentAddressHidingNotSupported /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActualResponseStatus_errorPermanentLackOfPrepaid /* IMPORTED_LONG_ENUMERATION_ITEM */, errorPermanentLackOfPrepaid /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ActualResponseStatus, _encode_ActualResponseStatus } from "../MmsHI2Operations/ActualResponseStatus.ta.mjs";


/**
 * @summary ResponseStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ResponseStatus ::= SEQUENCE
 * {
 *     statusCount    [1]    EncodedString OPTIONAL,
 *     -- the statusCount shall only be included for the Delete event.
 *     actualResponseStatus    [2] ActualResponseStatus,
 * ...
 * }
 * ```
 * 
 * @class
 */
export
class ResponseStatus {
    /**
     * @summary `statusCount`.
     * @public
     * @readonly
     */
    readonly statusCount: OPTIONAL<EncodedString>;
    /**
     * @summary `actualResponseStatus`.
     * @public
     * @readonly
     */
    readonly actualResponseStatus: ActualResponseStatus;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        statusCount: OPTIONAL<EncodedString>,
        actualResponseStatus: ActualResponseStatus,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.statusCount = statusCount;
        this.actualResponseStatus = actualResponseStatus;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a ResponseStatus
     * @description
     * 
     * This takes an `object` and converts it to a `ResponseStatus`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ResponseStatus`.
     * @returns {ResponseStatus}
     */
    public static _from_object (_o: { [_K in keyof (ResponseStatus)]: (ResponseStatus)[_K] }): ResponseStatus {
        return new ResponseStatus(_o.statusCount, _o.actualResponseStatus, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `actualResponseStatus`
         * @public
         * @static
         */

    public static _enum_for_actualResponseStatus = _enum_for_ActualResponseStatus;
}

/**
 * @summary The Leading Root Component Types of ResponseStatus
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ResponseStatus: $.ComponentSpec[] = [
    new $.ComponentSpec("statusCount", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("actualResponseStatus", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of ResponseStatus
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ResponseStatus: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ResponseStatus
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ResponseStatus: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ResponseStatus: $.ASN1Decoder<ResponseStatus> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ResponseStatus
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ResponseStatus (el: _Element): ResponseStatus {
    if (!_cached_decoder_for_ResponseStatus) { _cached_decoder_for_ResponseStatus = function (el: _Element): ResponseStatus {
    let statusCount: OPTIONAL<EncodedString>;
    let actualResponseStatus!: ActualResponseStatus;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "statusCount": (_el: _Element): void => { statusCount = $._decode_explicit<EncodedString>(() => _decode_EncodedString)(_el); },
        "actualResponseStatus": (_el: _Element): void => { actualResponseStatus = $._decode_implicit<ActualResponseStatus>(() => _decode_ActualResponseStatus)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ResponseStatus,
        _extension_additions_list_spec_for_ResponseStatus,
        _root_component_type_list_2_spec_for_ResponseStatus,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ResponseStatus(
        statusCount,
        actualResponseStatus,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ResponseStatus(el);
}

let _cached_encoder_for_ResponseStatus: $.ASN1Encoder<ResponseStatus> | null = null;

/**
 * @summary Encodes a(n) ResponseStatus into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ResponseStatus, encoded as an ASN.1 Element.
 */
export
function _encode_ResponseStatus (value: ResponseStatus, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ResponseStatus) { _cached_encoder_for_ResponseStatus = function (value: ResponseStatus, _elGetter: $.ASN1Encoder<ResponseStatus>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.statusCount !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 1, () => _encode_EncodedString, $.BER)(value.statusCount, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_ActualResponseStatus, $.BER)(value.actualResponseStatus, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ResponseStatus(value, elGetter);
}


/* eslint-enable */
