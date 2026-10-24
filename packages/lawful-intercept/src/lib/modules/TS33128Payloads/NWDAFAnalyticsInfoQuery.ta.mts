/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SUPI, _decode_SUPI, _encode_SUPI } from "../TS33128Payloads/SUPI.ta.mjs";
// export { SUPI, _decode_SUPI, _encode_SUPI } from "../TS33128Payloads/SUPI.ta.mjs";
import { NWDAFEvent, _decode_NWDAFEvent, _encode_NWDAFEvent, _enum_for_NWDAFEvent } from "../TS33128Payloads/NWDAFEvent.ta.mjs";
// export { NWDAFEvent, _enum_for_NWDAFEvent, NWDAFEvent_serviceExperience /* IMPORTED_LONG_ENUMERATION_ITEM */, serviceExperience /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEvent_uEMobility /* IMPORTED_LONG_ENUMERATION_ITEM */, uEMobility /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEvent_uEComm /* IMPORTED_LONG_ENUMERATION_ITEM */, uEComm /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEvent_abnormalBehaviour /* IMPORTED_LONG_ENUMERATION_ITEM */, abnormalBehaviour /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEvent_dispersion /* IMPORTED_LONG_ENUMERATION_ITEM */, dispersion /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEvent_relativeProximity /* IMPORTED_LONG_ENUMERATION_ITEM */, relativeProximity /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEvent_pDUSessionTraffic /* IMPORTED_LONG_ENUMERATION_ITEM */, pDUSessionTraffic /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_NWDAFEvent, _encode_NWDAFEvent } from "../TS33128Payloads/NWDAFEvent.ta.mjs";
import { SBIType, _decode_SBIType, _encode_SBIType } from "../TS33128Payloads/SBIType.ta.mjs";
// export { SBIType, _decode_SBIType, _encode_SBIType } from "../TS33128Payloads/SBIType.ta.mjs";
import { NWDAFAnalyticsInfoResponseCode, _decode_NWDAFAnalyticsInfoResponseCode, _encode_NWDAFAnalyticsInfoResponseCode, _enum_for_NWDAFAnalyticsInfoResponseCode } from "../TS33128Payloads/NWDAFAnalyticsInfoResponseCode.ta.mjs";
// export { NWDAFAnalyticsInfoResponseCode, _enum_for_NWDAFAnalyticsInfoResponseCode, NWDAFAnalyticsInfoResponseCode_oK200 /* IMPORTED_LONG_ENUMERATION_ITEM */, oK200 /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFAnalyticsInfoResponseCode_noContent204 /* IMPORTED_LONG_ENUMERATION_ITEM */, noContent204 /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFAnalyticsInfoResponseCode_badRequest400 /* IMPORTED_LONG_ENUMERATION_ITEM */, badRequest400 /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFAnalyticsInfoResponseCode_unauthorized401 /* IMPORTED_LONG_ENUMERATION_ITEM */, unauthorized401 /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFAnalyticsInfoResponseCode_forbidden403 /* IMPORTED_LONG_ENUMERATION_ITEM */, forbidden403 /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFAnalyticsInfoResponseCode_notFound404 /* IMPORTED_LONG_ENUMERATION_ITEM */, notFound404 /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFAnalyticsInfoResponseCode_notAcceptable406 /* IMPORTED_LONG_ENUMERATION_ITEM */, notAcceptable406 /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFAnalyticsInfoResponseCode_uRITooLong414 /* IMPORTED_LONG_ENUMERATION_ITEM */, uRITooLong414 /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFAnalyticsInfoResponseCode_tooManyRequests429 /* IMPORTED_LONG_ENUMERATION_ITEM */, tooManyRequests429 /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFAnalyticsInfoResponseCode_internalServerError500 /* IMPORTED_LONG_ENUMERATION_ITEM */, internalServerError500 /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFAnalyticsInfoResponseCode_badGateway502 /* IMPORTED_LONG_ENUMERATION_ITEM */, badGateway502 /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFAnalyticsInfoResponseCode_serviceUnavailable503 /* IMPORTED_LONG_ENUMERATION_ITEM */, serviceUnavailable503 /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_NWDAFAnalyticsInfoResponseCode, _encode_NWDAFAnalyticsInfoResponseCode } from "../TS33128Payloads/NWDAFAnalyticsInfoResponseCode.ta.mjs";


/**
 * @summary NWDAFAnalyticsInfoQuery
 * @description
 * 
 * The IRI-POI in the NWDAF shall generate an xIRI containing an
 * NWDAFAnalyticsInfoQuery record when the IRI-POI present in the NWDAF detects
 * that an authorized NF consumer queries an UE-related analytics for a target
 * UE.
 *
 * Accordingly, the IRI-POI in the NWDAF generates the xIRI when any of the
 * following events is detected (see TS 29.520 [133] clause 4.3.2.1):
 *
 * - NWDAF returns a Nnwdaf_AnalyticsInfo_Request Response in response to
 *   Nnwdaf_AnalyticsInfo_Request Request received from an authorized NF
 *   consumer to get analytics data for an UE related analytics event for a
 *   target UE.
 *
 * Table 7.16.3-1 gives the LI_HI2 IRI message type for this record as REPORT.
 *
 * 3GPP TS 33.128, clause 7.16.2.4.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NWDAFAnalyticsInfoQuery ::= SEQUENCE
 * {
 *     sUPI                           [1] SUPI,
 *     nWDAFEvent                     [2] NWDAFEvent,
 *     nWDAFEventReportingRequirement [3] SBIType OPTIONAL,
 *     nWDAFEventFilter               [4] SBIType OPTIONAL,
 *     nWDAFAnalyticsData             [5] SBIType OPTIONAL,
 *     nWDAFAnalyticsInfoResponseCode [6] NWDAFAnalyticsInfoResponseCode
 * }
 * ```
 * 
 * @class
 */
export
class NWDAFAnalyticsInfoQuery {
    /**
     * @summary `sUPI`.
     * @description
     *
     * Identifies the SUPI of the target UE.
     *
     * 3GPP TS 33.128, clause 7.16.2.4.
     *
     * @public
     * @readonly
     */
    readonly sUPI: SUPI;
    /**
     * @summary `nWDAFEvent`.
     * @description
     *
     * Identifies the analytics event being requested.
     *
     * 3GPP TS 33.128, clause 7.16.2.4.
     *
     * @public
     * @readonly
     */
    readonly nWDAFEvent: NWDAFEvent;
    /**
     * @summary `nWDAFEventReportingRequirement`.
     * @description
     *
     * Includes an EventReportingRequirement resource associated to the
     * requested event to identify the type of reporting required. The
     * EventReportingRequirement is encoded according to TS 29.520 [133] table
     * 5.1.6.2.7-1. The SBIReference for this parameter shall be populated with
     * 'TS29520_Nnwdaf_AnalyticsInfo.yaml#/components/schemas/EventReportingRequirement'
     * as specified in TS 29.520 [133] clause A3.
     *
     * 3GPP TS 33.128, clause 7.16.2.4.
     *
     * @public
     * @readonly
     */
    readonly nWDAFEventReportingRequirement: OPTIONAL<SBIType>;
    /**
     * @summary `nWDAFEventFilter`.
     * @description
     *
     * Includes an EventFilter resource associated to the requested event to
     * identify the requested analytics. The EventFilter is encoded according to
     * TS 29.520 [133] table 5.2.6.2.3-1. The SBIReference for this parameter
     * shall be populated with
     * 'TS29520_Nnwdaf_AnalyticsInfo.yaml#/components/schemas/EventFilter' as
     * specified in TS 29.520 [133] clause A3.
     *
     * 3GPP TS 33.128, clause 7.16.2.4.
     *
     * @public
     * @readonly
     */
    readonly nWDAFEventFilter: OPTIONAL<SBIType>;
    /**
     * @summary `nWDAFAnalyticsData`.
     * @description
     *
     * Includes an AnalyticsData resource present in the response when the
     * response code is 200 OK. The AnalyticsData is encoded according to TS
     * 29.520 [133] table 5.2.6.2.2-1. The SBIReference for this parameter shall
     * be populated with
     * 'TS29520_Nnwdaf_AnalyticsInfo.yaml#/components/schemas/AnalyticsData' as
     * specified in TS 29.520 [133] clause A3.
     *
     * 3GPP TS 33.128, clause 7.16.2.4.
     *
     * @public
     * @readonly
     */
    readonly nWDAFAnalyticsData: OPTIONAL<SBIType>;
    /**
     * @summary `nWDAFAnalyticsInfoResponseCode`.
     * @description
     *
     * Identifies the response code associated with the
     * Nnwdaf_AnalyticsInfo_Request service operation (i.e., GET) executed by
     * the NWDAF.
     *
     * 3GPP TS 33.128, clause 7.16.2.4.
     *
     * @public
     * @readonly
     */
    readonly nWDAFAnalyticsInfoResponseCode: NWDAFAnalyticsInfoResponseCode;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        sUPI: SUPI,
        nWDAFEvent: NWDAFEvent,
        nWDAFEventReportingRequirement: OPTIONAL<SBIType>,
        nWDAFEventFilter: OPTIONAL<SBIType>,
        nWDAFAnalyticsData: OPTIONAL<SBIType>,
        nWDAFAnalyticsInfoResponseCode: NWDAFAnalyticsInfoResponseCode,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.sUPI = sUPI;
        this.nWDAFEvent = nWDAFEvent;
        this.nWDAFEventReportingRequirement = nWDAFEventReportingRequirement;
        this.nWDAFEventFilter = nWDAFEventFilter;
        this.nWDAFAnalyticsData = nWDAFAnalyticsData;
        this.nWDAFAnalyticsInfoResponseCode = nWDAFAnalyticsInfoResponseCode;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a NWDAFAnalyticsInfoQuery
     * @description
     * 
     * This takes an `object` and converts it to a `NWDAFAnalyticsInfoQuery`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NWDAFAnalyticsInfoQuery`.
     * @returns {NWDAFAnalyticsInfoQuery}
     */
    public static _from_object (_o: { [_K in keyof (NWDAFAnalyticsInfoQuery)]: (NWDAFAnalyticsInfoQuery)[_K] }): NWDAFAnalyticsInfoQuery {
        return new NWDAFAnalyticsInfoQuery(_o.sUPI, _o.nWDAFEvent, _o.nWDAFEventReportingRequirement, _o.nWDAFEventFilter, _o.nWDAFAnalyticsData, _o.nWDAFAnalyticsInfoResponseCode, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `nWDAFEvent`
         * @public
         * @static
         */

    public static _enum_for_nWDAFEvent = _enum_for_NWDAFEvent;        /**
         * @summary The enum used as the type of the component `nWDAFAnalyticsInfoResponseCode`
         * @public
         * @static
         */

    public static _enum_for_nWDAFAnalyticsInfoResponseCode = _enum_for_NWDAFAnalyticsInfoResponseCode;
}

/**
 * @summary The Leading Root Component Types of NWDAFAnalyticsInfoQuery
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_NWDAFAnalyticsInfoQuery: $.ComponentSpec[] = [
    new $.ComponentSpec("sUPI", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("nWDAFEvent", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("nWDAFEventReportingRequirement", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("nWDAFEventFilter", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("nWDAFAnalyticsData", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("nWDAFAnalyticsInfoResponseCode", false, $.hasTag(_TagClass.context, 6))
];

/**
 * @summary The Trailing Root Component Types of NWDAFAnalyticsInfoQuery
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_NWDAFAnalyticsInfoQuery: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of NWDAFAnalyticsInfoQuery
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_NWDAFAnalyticsInfoQuery: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_NWDAFAnalyticsInfoQuery: $.ASN1Decoder<NWDAFAnalyticsInfoQuery> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NWDAFAnalyticsInfoQuery
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NWDAFAnalyticsInfoQuery (el: _Element): NWDAFAnalyticsInfoQuery {
    if (!_cached_decoder_for_NWDAFAnalyticsInfoQuery) { _cached_decoder_for_NWDAFAnalyticsInfoQuery = function (el: _Element): NWDAFAnalyticsInfoQuery {
    let sUPI!: SUPI;
    let nWDAFEvent!: NWDAFEvent;
    let nWDAFEventReportingRequirement: OPTIONAL<SBIType>;
    let nWDAFEventFilter: OPTIONAL<SBIType>;
    let nWDAFAnalyticsData: OPTIONAL<SBIType>;
    let nWDAFAnalyticsInfoResponseCode!: NWDAFAnalyticsInfoResponseCode;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "sUPI": (_el: _Element): void => { sUPI = $._decode_explicit<SUPI>(() => _decode_SUPI)(_el); },
        "nWDAFEvent": (_el: _Element): void => { nWDAFEvent = $._decode_implicit<NWDAFEvent>(() => _decode_NWDAFEvent)(_el); },
        "nWDAFEventReportingRequirement": (_el: _Element): void => { nWDAFEventReportingRequirement = $._decode_implicit<SBIType>(() => _decode_SBIType)(_el); },
        "nWDAFEventFilter": (_el: _Element): void => { nWDAFEventFilter = $._decode_implicit<SBIType>(() => _decode_SBIType)(_el); },
        "nWDAFAnalyticsData": (_el: _Element): void => { nWDAFAnalyticsData = $._decode_implicit<SBIType>(() => _decode_SBIType)(_el); },
        "nWDAFAnalyticsInfoResponseCode": (_el: _Element): void => { nWDAFAnalyticsInfoResponseCode = $._decode_implicit<NWDAFAnalyticsInfoResponseCode>(() => _decode_NWDAFAnalyticsInfoResponseCode)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_NWDAFAnalyticsInfoQuery,
        _extension_additions_list_spec_for_NWDAFAnalyticsInfoQuery,
        _root_component_type_list_2_spec_for_NWDAFAnalyticsInfoQuery,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new NWDAFAnalyticsInfoQuery(
        sUPI,
        nWDAFEvent,
        nWDAFEventReportingRequirement,
        nWDAFEventFilter,
        nWDAFAnalyticsData,
        nWDAFAnalyticsInfoResponseCode,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_NWDAFAnalyticsInfoQuery(el);
}

let _cached_encoder_for_NWDAFAnalyticsInfoQuery: $.ASN1Encoder<NWDAFAnalyticsInfoQuery> | null = null;

/**
 * @summary Encodes a(n) NWDAFAnalyticsInfoQuery into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NWDAFAnalyticsInfoQuery, encoded as an ASN.1 Element.
 */
export
function _encode_NWDAFAnalyticsInfoQuery (value: NWDAFAnalyticsInfoQuery, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NWDAFAnalyticsInfoQuery) { _cached_encoder_for_NWDAFAnalyticsInfoQuery = function (value: NWDAFAnalyticsInfoQuery, elGetter: $.ASN1Encoder<NWDAFAnalyticsInfoQuery>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(6 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_SUPI, $.BER)(value.sUPI, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_NWDAFEvent, $.BER)(value.nWDAFEvent, $.BER);
    if (value.nWDAFEventReportingRequirement !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_SBIType, $.BER)(value.nWDAFEventReportingRequirement, $.BER);
    }
    if (value.nWDAFEventFilter !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_SBIType, $.BER)(value.nWDAFEventFilter, $.BER);
    }
    if (value.nWDAFAnalyticsData !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_SBIType, $.BER)(value.nWDAFAnalyticsData, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => _encode_NWDAFAnalyticsInfoResponseCode, $.BER)(value.nWDAFAnalyticsInfoResponseCode, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_NWDAFAnalyticsInfoQuery(value, elGetter);
}


/* eslint-enable */
