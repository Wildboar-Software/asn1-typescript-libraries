/* eslint-disable */
import {
    OPTIONAL,
    UTF8String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SUPI, _decode_SUPI, _encode_SUPI } from "../TS33128Payloads/SUPI.ta.mjs";
// export { SUPI, _decode_SUPI, _encode_SUPI } from "../TS33128Payloads/SUPI.ta.mjs";
import { PLMNID, _decode_PLMNID, _encode_PLMNID } from "../TS33128Payloads/PLMNID.ta.mjs";
// export { PLMNID, _decode_PLMNID, _encode_PLMNID } from "../TS33128Payloads/PLMNID.ta.mjs";
import { NWDAFEventsSubscriptionOpType, _decode_NWDAFEventsSubscriptionOpType, _encode_NWDAFEventsSubscriptionOpType, _enum_for_NWDAFEventsSubscriptionOpType } from "../TS33128Payloads/NWDAFEventsSubscriptionOpType.ta.mjs";
// export { NWDAFEventsSubscriptionOpType, _enum_for_NWDAFEventsSubscriptionOpType, NWDAFEventsSubscriptionOpType_pOST /* IMPORTED_LONG_ENUMERATION_ITEM */, pOST /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEventsSubscriptionOpType_pUT /* IMPORTED_LONG_ENUMERATION_ITEM */, pUT /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEventsSubscriptionOpType_dELETE /* IMPORTED_LONG_ENUMERATION_ITEM */, dELETE /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_NWDAFEventsSubscriptionOpType, _encode_NWDAFEventsSubscriptionOpType } from "../TS33128Payloads/NWDAFEventsSubscriptionOpType.ta.mjs";
import { NWDAFEvent, _decode_NWDAFEvent, _encode_NWDAFEvent } from "../TS33128Payloads/NWDAFEvent.ta.mjs";
// export { NWDAFEvent, _enum_for_NWDAFEvent, NWDAFEvent_serviceExperience /* IMPORTED_LONG_ENUMERATION_ITEM */, serviceExperience /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEvent_uEMobility /* IMPORTED_LONG_ENUMERATION_ITEM */, uEMobility /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEvent_uEComm /* IMPORTED_LONG_ENUMERATION_ITEM */, uEComm /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEvent_abnormalBehaviour /* IMPORTED_LONG_ENUMERATION_ITEM */, abnormalBehaviour /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEvent_dispersion /* IMPORTED_LONG_ENUMERATION_ITEM */, dispersion /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEvent_relativeProximity /* IMPORTED_LONG_ENUMERATION_ITEM */, relativeProximity /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEvent_pDUSessionTraffic /* IMPORTED_LONG_ENUMERATION_ITEM */, pDUSessionTraffic /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_NWDAFEvent, _encode_NWDAFEvent } from "../TS33128Payloads/NWDAFEvent.ta.mjs";
import { SBIType, _decode_SBIType, _encode_SBIType } from "../TS33128Payloads/SBIType.ta.mjs";
// export { SBIType, _decode_SBIType, _encode_SBIType } from "../TS33128Payloads/SBIType.ta.mjs";
import { NWDAFEventsSubscriptionResponseCode, _decode_NWDAFEventsSubscriptionResponseCode, _encode_NWDAFEventsSubscriptionResponseCode, _enum_for_NWDAFEventsSubscriptionResponseCode } from "../TS33128Payloads/NWDAFEventsSubscriptionResponseCode.ta.mjs";
// export { NWDAFEventsSubscriptionResponseCode, _enum_for_NWDAFEventsSubscriptionResponseCode, NWDAFEventsSubscriptionResponseCode_oK200 /* IMPORTED_LONG_ENUMERATION_ITEM */, oK200 /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEventsSubscriptionResponseCode_created201 /* IMPORTED_LONG_ENUMERATION_ITEM */, created201 /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEventsSubscriptionResponseCode_noContent204 /* IMPORTED_LONG_ENUMERATION_ITEM */, noContent204 /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEventsSubscriptionResponseCode_temporaryRedirect307 /* IMPORTED_LONG_ENUMERATION_ITEM */, temporaryRedirect307 /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEventsSubscriptionResponseCode_permanentRedirect308 /* IMPORTED_LONG_ENUMERATION_ITEM */, permanentRedirect308 /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEventsSubscriptionResponseCode_badRequest400 /* IMPORTED_LONG_ENUMERATION_ITEM */, badRequest400 /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEventsSubscriptionResponseCode_unauthorized401 /* IMPORTED_LONG_ENUMERATION_ITEM */, unauthorized401 /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEventsSubscriptionResponseCode_forbidden403 /* IMPORTED_LONG_ENUMERATION_ITEM */, forbidden403 /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEventsSubscriptionResponseCode_notFound404 /* IMPORTED_LONG_ENUMERATION_ITEM */, notFound404 /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEventsSubscriptionResponseCode_notAcceptable406 /* IMPORTED_LONG_ENUMERATION_ITEM */, notAcceptable406 /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEventsSubscriptionResponseCode_lengthRequired411 /* IMPORTED_LONG_ENUMERATION_ITEM */, lengthRequired411 /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEventsSubscriptionResponseCode_payloadTooLarge413 /* IMPORTED_LONG_ENUMERATION_ITEM */, payloadTooLarge413 /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEventsSubscriptionResponseCode_unsupportedMediaType415 /* IMPORTED_LONG_ENUMERATION_ITEM */, unsupportedMediaType415 /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEventsSubscriptionResponseCode_tooManyRequests429 /* IMPORTED_LONG_ENUMERATION_ITEM */, tooManyRequests429 /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEventsSubscriptionResponseCode_internalServerError500 /* IMPORTED_LONG_ENUMERATION_ITEM */, internalServerError500 /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEventsSubscriptionResponseCode_notImplemented501 /* IMPORTED_LONG_ENUMERATION_ITEM */, notImplemented501 /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEventsSubscriptionResponseCode_badGateway502 /* IMPORTED_LONG_ENUMERATION_ITEM */, badGateway502 /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEventsSubscriptionResponseCode_serviceUnavailable503 /* IMPORTED_LONG_ENUMERATION_ITEM */, serviceUnavailable503 /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_NWDAFEventsSubscriptionResponseCode, _encode_NWDAFEventsSubscriptionResponseCode } from "../TS33128Payloads/NWDAFEventsSubscriptionResponseCode.ta.mjs";


/**
 * @summary NWDAFRoamingAnalyticsSubscription
 * @description
 * 
 * The IRI-POI in the RE-NWDAF shall generate an xIRI containing an
 * NWDAFRoamingAnalyticsSubscription record when the IRI-POI present in the
 * RE-NWDAF detects that an NWDAF consumer has subscribed, updated a
 * subscription or deleted a subscription for UE related analytics events for a
 * target inbound or outbound roaming UE.
 *
 * Accordingly, the IRI-POI in the RE-NWDAF generates the xIRI when any of the
 * following events is detected (see TS 29.520 [133] clause 4.9.2.1):
 *
 * - RE-NWDAF returns a Nnwdaf_RoamingAnalytics_Subscribe Response in response
 *   to Nnwdaf_RoamingAnalytics_Subscribe Request received from a NWDAF consumer
 *   to subscribe to UE related analytics events for a target UE.
 *
 * - RE-NWDAF returns a Nnwdaf_RoamingAnalytics_Subscribe Response in response
 *   to Nnwdaf_RoamingAnalytics_Subscribe Request received from a NWDAF consumer
 *   to update a subscription to UE related analytics events for a target UE.
 *
 * - RE-NWDAF returns a Nnwdaf_ RoamingAnalytics_Unsubscribe Response in
 *   response to Nnwdaf_RoamingAnalytics_Unsubscribe Request received from a
 *   NWDAF consumer to unsubscribe from UE related analytics events
 *   notifications for a target UE.
 *
 * Table 7.16.3-1 gives the LI_HI2 IRI message type for this record as REPORT.
 *
 * 3GPP TS 33.128, clause 7.16.2.5.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NWDAFRoamingAnalyticsSubscription ::= SEQUENCE
 * {
 *     sUPI                                [1] SUPI,
 *     pLMNID                              [2] PLMNID,
 *     nWDAFEventsSubscriptionOpType       [3] NWDAFEventsSubscriptionOpType,
 *     nWDAFSubscribedEventList            [4] SEQUENCE SIZE(1..MAX) OF NWDAFEvent,
 *     nWDAFEventsSubscription             [5] SBIType,
 *     nWDAFEventsSubscriptionID           [6] UTF8String OPTIONAL,
 *     nWDAFEventsSubscriptionResponseCode [7] NWDAFEventsSubscriptionResponseCode
 * }
 * ```
 * 
 * @class
 */
export
class NWDAFRoamingAnalyticsSubscription {
    /**
     * @summary `sUPI`.
     * @description
     *
     * Identifies the SUPI of the target UE.
     *
     * 3GPP TS 33.128, clause 7.16.2.5.2.
     *
     * @public
     * @readonly
     */
    readonly sUPI: SUPI;
    /**
     * @summary `pLMNID`.
     * @description
     *
     * Identifies the PLMN ID of the consumer NWDAF.
     *
     * 3GPP TS 33.128, clause 7.16.2.5.2.
     *
     * @public
     * @readonly
     */
    readonly pLMNID: PLMNID;
    /**
     * @summary `nWDAFEventsSubscriptionOpType`.
     * @description
     *
     * Identifies the type of Nnwdaf_EventsSubscription service operation, i.e.,
     * POST to create a sbscription, PUT to update a subscription, DELETE to
     * delete a subscription.
     *
     * 3GPP TS 33.128, clause 7.16.2.5.2.
     *
     * @public
     * @readonly
     */
    readonly nWDAFEventsSubscriptionOpType: NWDAFEventsSubscriptionOpType;
    /**
     * @summary `nWDAFSubscribedEventList`.
     * @description
     *
     * Identifies the list of events the NWDAF consumer subscribes to.
     *
     * 3GPP TS 33.128, clause 7.16.2.5.2.
     *
     * @public
     * @readonly
     */
    readonly nWDAFSubscribedEventList: NWDAFEvent[];
    /**
     * @summary `nWDAFEventsSubscription`.
     * @description
     *
     * Includes the NnwdafRoamingAnalyticsSubscription resource which contains a
     * set of events and their configuration data the NWDAF consumer subscribes
     * to. Encoded according to TS 29.520 [133] table 5.8.6.2.2-1. The
     * SBIReference for this parameter shall be populated with
     * 'TS29520_Nnwdaf_EventsSubscription.yaml#/components/schemas/RoamingAnalyticsSubscription'
     * as specified in TS 29.520 [133] clause A9.
     *
     * 3GPP TS 33.128, clause 7.16.2.5.2.
     *
     * @public
     * @readonly
     */
    readonly nWDAFEventsSubscription: SBIType;
    /**
     * @summary `nWDAFEventsSubscriptionID`.
     * @description
     *
     * Identifies the subscription if the subscription is created successfully.
     * It is present in the Location header of the 201 Created response when the
     * subscription is created using the POST method as defined in TS 29.520
     * [133] table 5.8.3.2.3.1-4. It represents the resource URI of both the PUT
     * method for subscription update and DELETE method for subscription
     * deletion.
     *
     * 3GPP TS 33.128, clause 7.16.2.5.2.
     *
     * @public
     * @readonly
     */
    readonly nWDAFEventsSubscriptionID: OPTIONAL<UTF8String>;
    /**
     * @summary `nWDAFEventsSubscriptionResponseCode`.
     * @public
     * @readonly
     */
    readonly nWDAFEventsSubscriptionResponseCode: NWDAFEventsSubscriptionResponseCode;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        sUPI: SUPI,
        pLMNID: PLMNID,
        nWDAFEventsSubscriptionOpType: NWDAFEventsSubscriptionOpType,
        nWDAFSubscribedEventList: NWDAFEvent[],
        nWDAFEventsSubscription: SBIType,
        nWDAFEventsSubscriptionID: OPTIONAL<UTF8String>,
        nWDAFEventsSubscriptionResponseCode: NWDAFEventsSubscriptionResponseCode,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.sUPI = sUPI;
        this.pLMNID = pLMNID;
        this.nWDAFEventsSubscriptionOpType = nWDAFEventsSubscriptionOpType;
        this.nWDAFSubscribedEventList = nWDAFSubscribedEventList;
        this.nWDAFEventsSubscription = nWDAFEventsSubscription;
        this.nWDAFEventsSubscriptionID = nWDAFEventsSubscriptionID;
        this.nWDAFEventsSubscriptionResponseCode = nWDAFEventsSubscriptionResponseCode;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a NWDAFRoamingAnalyticsSubscription
     * @description
     * 
     * This takes an `object` and converts it to a `NWDAFRoamingAnalyticsSubscription`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NWDAFRoamingAnalyticsSubscription`.
     * @returns {NWDAFRoamingAnalyticsSubscription}
     */
    public static _from_object (_o: { [_K in keyof (NWDAFRoamingAnalyticsSubscription)]: (NWDAFRoamingAnalyticsSubscription)[_K] }): NWDAFRoamingAnalyticsSubscription {
        return new NWDAFRoamingAnalyticsSubscription(_o.sUPI, _o.pLMNID, _o.nWDAFEventsSubscriptionOpType, _o.nWDAFSubscribedEventList, _o.nWDAFEventsSubscription, _o.nWDAFEventsSubscriptionID, _o.nWDAFEventsSubscriptionResponseCode, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `nWDAFEventsSubscriptionOpType`
         * @public
         * @static
         */

    public static _enum_for_nWDAFEventsSubscriptionOpType = _enum_for_NWDAFEventsSubscriptionOpType;        /**
         * @summary The enum used as the type of the component `nWDAFEventsSubscriptionResponseCode`
         * @public
         * @static
         */

    public static _enum_for_nWDAFEventsSubscriptionResponseCode = _enum_for_NWDAFEventsSubscriptionResponseCode;
}

/**
 * @summary The Leading Root Component Types of NWDAFRoamingAnalyticsSubscription
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_NWDAFRoamingAnalyticsSubscription: $.ComponentSpec[] = [
    new $.ComponentSpec("sUPI", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("pLMNID", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("nWDAFEventsSubscriptionOpType", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("nWDAFSubscribedEventList", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("nWDAFEventsSubscription", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("nWDAFEventsSubscriptionID", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("nWDAFEventsSubscriptionResponseCode", false, $.hasTag(_TagClass.context, 7))
];

/**
 * @summary The Trailing Root Component Types of NWDAFRoamingAnalyticsSubscription
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_NWDAFRoamingAnalyticsSubscription: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of NWDAFRoamingAnalyticsSubscription
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_NWDAFRoamingAnalyticsSubscription: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_NWDAFRoamingAnalyticsSubscription: $.ASN1Decoder<NWDAFRoamingAnalyticsSubscription> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NWDAFRoamingAnalyticsSubscription
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NWDAFRoamingAnalyticsSubscription (el: _Element): NWDAFRoamingAnalyticsSubscription {
    if (!_cached_decoder_for_NWDAFRoamingAnalyticsSubscription) { _cached_decoder_for_NWDAFRoamingAnalyticsSubscription = function (el: _Element): NWDAFRoamingAnalyticsSubscription {
    let sUPI!: SUPI;
    let pLMNID!: PLMNID;
    let nWDAFEventsSubscriptionOpType!: NWDAFEventsSubscriptionOpType;
    let nWDAFSubscribedEventList!: NWDAFEvent[];
    let nWDAFEventsSubscription!: SBIType;
    let nWDAFEventsSubscriptionID: OPTIONAL<UTF8String>;
    let nWDAFEventsSubscriptionResponseCode!: NWDAFEventsSubscriptionResponseCode;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "sUPI": (_el: _Element): void => { sUPI = $._decode_explicit<SUPI>(() => _decode_SUPI)(_el); },
        "pLMNID": (_el: _Element): void => { pLMNID = $._decode_implicit<PLMNID>(() => _decode_PLMNID)(_el); },
        "nWDAFEventsSubscriptionOpType": (_el: _Element): void => { nWDAFEventsSubscriptionOpType = $._decode_implicit<NWDAFEventsSubscriptionOpType>(() => _decode_NWDAFEventsSubscriptionOpType)(_el); },
        "nWDAFSubscribedEventList": (_el: _Element): void => {
            nWDAFSubscribedEventList = $._decode_implicit<NWDAFEvent[]>(() => $._decodeSequenceOf<NWDAFEvent>(() => _decode_NWDAFEvent))(_el);
            if (nWDAFSubscribedEventList.length < 1) {
                throw new ASN1SizeError("NWDAFRoamingAnalyticsSubscription.nWDAFSubscribedEventList violates SIZE constraint");
            }
        },
        "nWDAFEventsSubscription": (_el: _Element): void => { nWDAFEventsSubscription = $._decode_implicit<SBIType>(() => _decode_SBIType)(_el); },
        "nWDAFEventsSubscriptionID": (_el: _Element): void => { nWDAFEventsSubscriptionID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "nWDAFEventsSubscriptionResponseCode": (_el: _Element): void => { nWDAFEventsSubscriptionResponseCode = $._decode_implicit<NWDAFEventsSubscriptionResponseCode>(() => _decode_NWDAFEventsSubscriptionResponseCode)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_NWDAFRoamingAnalyticsSubscription,
        _extension_additions_list_spec_for_NWDAFRoamingAnalyticsSubscription,
        _root_component_type_list_2_spec_for_NWDAFRoamingAnalyticsSubscription,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new NWDAFRoamingAnalyticsSubscription(
        sUPI,
        pLMNID,
        nWDAFEventsSubscriptionOpType,
        nWDAFSubscribedEventList,
        nWDAFEventsSubscription,
        nWDAFEventsSubscriptionID,
        nWDAFEventsSubscriptionResponseCode,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_NWDAFRoamingAnalyticsSubscription(el);
}

let _cached_encoder_for_NWDAFRoamingAnalyticsSubscription: $.ASN1Encoder<NWDAFRoamingAnalyticsSubscription> | null = null;

/**
 * @summary Encodes a(n) NWDAFRoamingAnalyticsSubscription into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NWDAFRoamingAnalyticsSubscription, encoded as an ASN.1 Element.
 */
export
function _encode_NWDAFRoamingAnalyticsSubscription (value: NWDAFRoamingAnalyticsSubscription, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NWDAFRoamingAnalyticsSubscription) { _cached_encoder_for_NWDAFRoamingAnalyticsSubscription = function (value: NWDAFRoamingAnalyticsSubscription, elGetter: $.ASN1Encoder<NWDAFRoamingAnalyticsSubscription>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(7 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_SUPI, $.BER)(value.sUPI, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_PLMNID, $.BER)(value.pLMNID, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_NWDAFEventsSubscriptionOpType, $.BER)(value.nWDAFEventsSubscriptionOpType, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => $._encodeSequenceOf<NWDAFEvent>(() => _encode_NWDAFEvent, $.BER), $.BER)(value.nWDAFSubscribedEventList, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => _encode_SBIType, $.BER)(value.nWDAFEventsSubscription, $.BER);
    if (value.nWDAFEventsSubscriptionID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeUTF8String, $.BER)(value.nWDAFEventsSubscriptionID, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 7, () => _encode_NWDAFEventsSubscriptionResponseCode, $.BER)(value.nWDAFEventsSubscriptionResponseCode, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_NWDAFRoamingAnalyticsSubscription(value, elGetter);
}


/* eslint-enable */
