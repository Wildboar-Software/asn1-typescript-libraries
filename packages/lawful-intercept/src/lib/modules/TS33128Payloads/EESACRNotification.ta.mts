/* eslint-disable */
import {
    type BOOLEAN,
    type OPTIONAL,
    type UTF8String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type EASID, _decode_EASID, _encode_EASID } from "../TS33128Payloads/EASID.ta.mjs";
// export { EASID, _decode_EASID, _encode_EASID } from "../TS33128Payloads/EASID.ta.mjs";
import { ACREventIDs, _decode_ACREventIDs, _encode_ACREventIDs, _enum_for_ACREventIDs } from "../TS33128Payloads/ACREventIDs.ta.mjs";
// export { ACREventIDs, _enum_for_ACREventIDs, ACREventIDs_targetInformation /* IMPORTED_LONG_ENUMERATION_ITEM */, targetInformation /* IMPORTED_SHORT_ENUMERATION_ITEM */, ACREventIDs_aCRComplete /* IMPORTED_LONG_ENUMERATION_ITEM */, aCRComplete /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ACREventIDs, _encode_ACREventIDs } from "../TS33128Payloads/ACREventIDs.ta.mjs";
import { TargetInfo, _decode_TargetInfo, _encode_TargetInfo } from "../TS33128Payloads/TargetInfo.ta.mjs";
// export { TargetInfo, _decode_TargetInfo, _encode_TargetInfo } from "../TS33128Payloads/TargetInfo.ta.mjs";


/**
 * @summary EESACRNotification
 * @description
 * 
 * The IRI-POI in the EES shall generate an xIRI containing an
 * EESACRNotification record when the IRI-POI present in the EES detects that
 * the EES has notify a previously subscribed EEC on EAS discovery information.
 * The IRI-POI present in the EES shall generate the xIRI for the following
 * events:
 *
 * - EES receives an Eees_ACREvents_Notify response from an EEC confirming that
 *   the subscribed EEC has received a notification of the ACR information
 *   events from EES (as defined in TS 24.558 [93] clause 5.4.2.2).
 *
 * Table 7.14.2.11-1 gives the LI_HI2 IRI message type for this record as
 * REPORT.
 *
 * 3GPP TS 33.128, clause 7.14.2.8.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EESACRNotification ::= SEQUENCE
 * {
 *     subscriptionID    [1] UTF8String,
 *     eASID             [2] EASID,
 *     eventID           [3] ACREventIDs,
 *     targetInfo        [4] TargetInfo OPTIONAL,
 *     aCRRes            [5] BOOLEAN OPTIONAL,
 *     failReason        [6] UTF8String OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class EESACRNotification {
    /**
     * @summary `subscriptionID`.
     * @description
     *
     * Identity of the individual subscription for which the notification is
     * delivered.
     *
     * 3GPP TS 33.128, clause 7.14.2.8.
     *
     * @public
     * @readonly
     */
    readonly subscriptionID: UTF8String;
    /**
     * @summary `eASID`.
     * @description
     *
     * Identifier of the EAS.
     *
     * 3GPP TS 33.128, clause 7.14.2.8.
     *
     * @public
     * @readonly
     */
    readonly eASID: EASID;
    /**
     * @summary `eventID`.
     * @public
     * @readonly
     */
    readonly eventID: ACREventIDs;
    /**
     * @summary `targetInfo`.
     * @description
     *
     * Details of the selected T-EAS and the T-EES. It is present when EventID
     * indicates "TARGET_INFORMATION" event.
     *
     * 3GPP TS 33.128, clause 7.14.2.8.
     *
     * @public
     * @readonly
     */
    readonly targetInfo: OPTIONAL<TargetInfo>;
    /**
     * @summary `aCRRes`.
     * @description
     *
     * Indicates whether the ACR is successful or has failed. It is present when
     * EventID indicates "ACR_COMPLETE" event.
     *
     * 3GPP TS 33.128, clause 7.14.2.8.
     *
     * @public
     * @readonly
     */
    readonly aCRRes: OPTIONAL<BOOLEAN>;
    /**
     * @summary `failReason`.
     * @description
     *
     * Indicates the cause information for the failure when the ACRRes attribute
     * is present and indicates failure, if available.
     *
     * 3GPP TS 33.128, clause 7.14.2.8.
     *
     * @public
     * @readonly
     */
    readonly failReason: OPTIONAL<UTF8String>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        subscriptionID: UTF8String,
        eASID: EASID,
        eventID: ACREventIDs,
        targetInfo?: OPTIONAL<TargetInfo>,
        aCRRes?: OPTIONAL<BOOLEAN>,
        failReason?: OPTIONAL<UTF8String>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.subscriptionID = subscriptionID;
        this.eASID = eASID;
        this.eventID = eventID;
        this.targetInfo = targetInfo;
        this.aCRRes = aCRRes;
        this.failReason = failReason;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a EESACRNotification
     * @description
     * 
     * This takes an `object` and converts it to a `EESACRNotification`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EESACRNotification`.
     * @returns {EESACRNotification}
     */
    public static _from_object (_o: { [_K in keyof (EESACRNotification)]: (EESACRNotification)[_K] }): EESACRNotification {
        return new EESACRNotification(_o.subscriptionID, _o.eASID, _o.eventID, _o.targetInfo, _o.aCRRes, _o.failReason, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `eventID`
         * @public
         * @static
         */

    public static _enum_for_eventID = _enum_for_ACREventIDs;
}

/**
 * @summary The Leading Root Component Types of EESACRNotification
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EESACRNotification: $.ComponentSpec[] = [
    new $.ComponentSpec("subscriptionID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("eASID", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("eventID", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("targetInfo", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("aCRRes", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("failReason", true, $.hasTag(_TagClass.context, 6))
];

/**
 * @summary The Trailing Root Component Types of EESACRNotification
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EESACRNotification: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EESACRNotification
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EESACRNotification: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EESACRNotification: $.ASN1Decoder<EESACRNotification> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EESACRNotification
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EESACRNotification (el: _Element): EESACRNotification {
    if (!_cached_decoder_for_EESACRNotification) { _cached_decoder_for_EESACRNotification = function (el: _Element): EESACRNotification {
    let subscriptionID!: UTF8String;
    let eASID!: EASID;
    let eventID!: ACREventIDs;
    let targetInfo: OPTIONAL<TargetInfo>;
    let aCRRes: OPTIONAL<BOOLEAN>;
    let failReason: OPTIONAL<UTF8String>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "subscriptionID": (_el: _Element): void => { subscriptionID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "eASID": (_el: _Element): void => { eASID = $._decode_implicit<EASID>(() => _decode_EASID)(_el); },
        "eventID": (_el: _Element): void => { eventID = $._decode_implicit<ACREventIDs>(() => _decode_ACREventIDs)(_el); },
        "targetInfo": (_el: _Element): void => { targetInfo = $._decode_implicit<TargetInfo>(() => _decode_TargetInfo)(_el); },
        "aCRRes": (_el: _Element): void => { aCRRes = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "failReason": (_el: _Element): void => { failReason = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EESACRNotification,
        _extension_additions_list_spec_for_EESACRNotification,
        _root_component_type_list_2_spec_for_EESACRNotification,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new EESACRNotification(
        subscriptionID,
        eASID,
        eventID,
        targetInfo,
        aCRRes,
        failReason,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_EESACRNotification(el);
}

let _cached_encoder_for_EESACRNotification: $.ASN1Encoder<EESACRNotification> | null = null;

/**
 * @summary Encodes a(n) EESACRNotification into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EESACRNotification, encoded as an ASN.1 Element.
 */
export
function _encode_EESACRNotification (value: EESACRNotification, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EESACRNotification) { _cached_encoder_for_EESACRNotification = function (value: EESACRNotification, elGetter: $.ASN1Encoder<EESACRNotification>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(6 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeUTF8String, $.BER)(value.subscriptionID, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_EASID, $.BER)(value.eASID, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_ACREventIDs, $.BER)(value.eventID, $.BER);
    if (value.targetInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_TargetInfo, $.BER)(value.targetInfo, $.BER);
    }
    if (value.aCRRes !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeBoolean, $.BER)(value.aCRRes, $.BER);
    }
    if (value.failReason !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeUTF8String, $.BER)(value.failReason, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_EESACRNotification(value, elGetter);
}


/* eslint-enable */
