/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IMSI, _decode_IMSI, _encode_IMSI } from "../TS33128Payloads/IMSI.ta.mjs";
// export { IMSI, _decode_IMSI, _encode_IMSI } from "../TS33128Payloads/IMSI.ta.mjs";
import { IMEI, _decode_IMEI, _encode_IMEI } from "../TS33128Payloads/IMEI.ta.mjs";
// export { IMEI, _decode_IMEI, _encode_IMEI } from "../TS33128Payloads/IMEI.ta.mjs";
import { MSISDN, _decode_MSISDN, _encode_MSISDN } from "../TS33128Payloads/MSISDN.ta.mjs";
// export { MSISDN, _decode_MSISDN, _encode_MSISDN } from "../TS33128Payloads/MSISDN.ta.mjs";
import { GUTI, _decode_GUTI, _encode_GUTI } from "../TS33128Payloads/GUTI.ta.mjs";
// export { GUTI, _decode_GUTI, _encode_GUTI } from "../TS33128Payloads/GUTI.ta.mjs";
import { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
// export { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
import { EPSSMSServiceStatus, _decode_EPSSMSServiceStatus, _encode_EPSSMSServiceStatus, _enum_for_EPSSMSServiceStatus } from "../TS33128Payloads/EPSSMSServiceStatus.ta.mjs";
// export { EPSSMSServiceStatus, _enum_for_EPSSMSServiceStatus, EPSSMSServiceStatus_sMSServicesNotAvailable /* IMPORTED_LONG_ENUMERATION_ITEM */, sMSServicesNotAvailable /* IMPORTED_SHORT_ENUMERATION_ITEM */, EPSSMSServiceStatus_sMSServicesNotAvailableInThisPLMN /* IMPORTED_LONG_ENUMERATION_ITEM */, sMSServicesNotAvailableInThisPLMN /* IMPORTED_SHORT_ENUMERATION_ITEM */, EPSSMSServiceStatus_networkFailure /* IMPORTED_LONG_ENUMERATION_ITEM */, networkFailure /* IMPORTED_SHORT_ENUMERATION_ITEM */, EPSSMSServiceStatus_congestion /* IMPORTED_LONG_ENUMERATION_ITEM */, congestion /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_EPSSMSServiceStatus, _encode_EPSSMSServiceStatus } from "../TS33128Payloads/EPSSMSServiceStatus.ta.mjs";


/**
 * @summary MMELocationUpdate
 * @description
 * 
 * When the reporting of location information is authorised, the IRI-POI in the
 * MME shall generate an xIRI containing an MMELocationUpdate record each time
 * the IRI-POI present in an MME detects that the target UE location is updated
 * due to target UE mobility or as a part of an MME service procedure. The
 * generation of such separate xIRI is not required if the updated UE location
 * information is obtained as a part of a procedure producing some other xIRIs
 * (e.g. mobility registration). In that case the location information is
 * included into the respective xIRI.
 *
 * In addition to the Tracking Area Update described in TS 23.401 [50] clause
 * 5.3.3, the UE mobility events resulting in generation of an MMELocationUpdate
 * xIRI include the S1 Path Switch Request (intra E-UTRAN handover X2 based
 * handover procedure described in TS 23.401 [50] clause 5.5.1.1) and the S1
 * Handover Notify (Intra E-UTRAN S1 based handover procedure described in TS
 * 23.401 [50] clause 5.5.1.2).
 *
 * The MMELocationUpdate xIRI is also generated when the MME receives an E-UTRAN
 * S1AP ERAB Modification Indication message as a result of Dual Connectivity
 * activation/release for the target UE, as described in TS 37.340 [37] clause
 * 10.
 *
 * Based on regulatory requirements and operator policy, the location
 * information obtained by the MME from E-UTRAN or the E-SMLC in the course of
 * some service operations may result in the generation of the MMELocationUpdate
 * xIRI record. Additionally, the IRI-POI in the MME shall capture the location
 * information in the scenarios described in TS 23.271 [52] clause 4.4.2. Also,
 * in the case of Mobile Originated LCS service invoked by the target, the
 * location information may be derived from the Location Service Response sent
 * to the target UE via the MME (see TS 23.271 [52] clause 9.2.6).
 *
 * Optionally, based on regulatory and operator policy, other MME messages that
 * do not generate separate xIRI but carry location information such as
 * emergency services or LCS may trigger the generation of an MMELocationUpdate
 * xIRI record.
 *
 * The MMELocationUpdate record is also used by LARF to deliver location
 * information responses to MDF2, as described in clause 7.3.5.6. For the
 * responses to location information requests initiated by LARF, as described in
 * TS 33.127 [5] the MMELocationUpdate xIRIs shall not be generated.
 *
 * 3GPP TS 33.128, clause 6.3.2.2.5.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMELocationUpdate ::= SEQUENCE
 * {
 *     iMSI             [1] IMSI,
 *     iMEI             [2] IMEI OPTIONAL,
 *     mSISDN           [3] MSISDN OPTIONAL,
 *     gUTI             [4] GUTI OPTIONAL,
 *     location         [5] Location OPTIONAL,
 *     oldGUTI          [6] GUTI OPTIONAL,
 *     sMSServiceStatus [7] EPSSMSServiceStatus OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class MMELocationUpdate {
    /**
     * @summary `iMSI`.
     * @description
     *
     * iMSI associated with the location update.
     *
     * 3GPP TS 33.128, clause 6.3.2.2.5.
     *
     * @public
     * @readonly
     */
    readonly iMSI: IMSI;
    /**
     * @summary `iMEI`.
     * @description
     *
     * iMEI associated with the location update, if available.
     *
     * 3GPP TS 33.128, clause 6.3.2.2.5.
     *
     * @public
     * @readonly
     */
    readonly iMEI: OPTIONAL<IMEI>;
    /**
     * @summary `mSISDN`.
     * @description
     *
     * mSISDN associated with the location update, if available as part of the
     * subscription profile.
     *
     * 3GPP TS 33.128, clause 6.3.2.2.5.
     *
     * @public
     * @readonly
     */
    readonly mSISDN: OPTIONAL<MSISDN>;
    /**
     * @summary `gUTI`.
     * @description
     *
     * GUTI assigned during the location update, if available, see TS 24.301
     * [50].
     *
     * 3GPP TS 33.128, clause 6.3.2.2.5.
     *
     * @public
     * @readonly
     */
    readonly gUTI: OPTIONAL<GUTI>;
    /**
     * @summary `location`.
     * @description
     *
     * Updated location information determined by the network. Depending on the
     * service or message type from which the location information is extracted,
     * it may be encoded in several forms (Annex A).
     *
     * 3GPP TS 33.128, clause 6.3.2.2.5.
     *
     * @public
     * @readonly
     */
    readonly location: OPTIONAL<Location>;
    /**
     * @summary `oldGUTI`.
     * @description
     *
     * GUTI used to initiate the location update, if available, see TS 24.301
     * [50].
     *
     * 3GPP TS 33.128, clause 6.3.2.2.5.
     *
     * @public
     * @readonly
     */
    readonly oldGUTI: OPTIONAL<GUTI>;
    /**
     * @summary `sMSServiceStatus`.
     * @description
     *
     * Indicates the availability of SMS Services. Shall be provided if present
     * in the TRACKING AREA UPDATE ACCEPT.
     *
     * 3GPP TS 33.128, clause 6.3.2.2.5.
     *
     * @public
     * @readonly
     */
    readonly sMSServiceStatus: OPTIONAL<EPSSMSServiceStatus>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        iMSI: IMSI,
        iMEI?: OPTIONAL<IMEI>,
        mSISDN?: OPTIONAL<MSISDN>,
        gUTI?: OPTIONAL<GUTI>,
        location?: OPTIONAL<Location>,
        oldGUTI?: OPTIONAL<GUTI>,
        sMSServiceStatus?: OPTIONAL<EPSSMSServiceStatus>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.iMSI = iMSI;
        this.iMEI = iMEI;
        this.mSISDN = mSISDN;
        this.gUTI = gUTI;
        this.location = location;
        this.oldGUTI = oldGUTI;
        this.sMSServiceStatus = sMSServiceStatus;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a MMELocationUpdate
     * @description
     * 
     * This takes an `object` and converts it to a `MMELocationUpdate`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MMELocationUpdate`.
     * @returns {MMELocationUpdate}
     */
    public static _from_object (_o: { [_K in keyof (MMELocationUpdate)]: (MMELocationUpdate)[_K] }): MMELocationUpdate {
        return new MMELocationUpdate(_o.iMSI, _o.iMEI, _o.mSISDN, _o.gUTI, _o.location, _o.oldGUTI, _o.sMSServiceStatus, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `sMSServiceStatus`
         * @public
         * @static
         */

    public static _enum_for_sMSServiceStatus = _enum_for_EPSSMSServiceStatus;
}

/**
 * @summary The Leading Root Component Types of MMELocationUpdate
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MMELocationUpdate: $.ComponentSpec[] = [
    new $.ComponentSpec("iMSI", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("iMEI", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("mSISDN", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("gUTI", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("location", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("oldGUTI", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("sMSServiceStatus", true, $.hasTag(_TagClass.context, 7))
];

/**
 * @summary The Trailing Root Component Types of MMELocationUpdate
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MMELocationUpdate: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MMELocationUpdate
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MMELocationUpdate: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MMELocationUpdate: $.ASN1Decoder<MMELocationUpdate> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMELocationUpdate
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMELocationUpdate (el: _Element): MMELocationUpdate {
    if (!_cached_decoder_for_MMELocationUpdate) { _cached_decoder_for_MMELocationUpdate = function (el: _Element): MMELocationUpdate {
    let iMSI!: IMSI;
    let iMEI: OPTIONAL<IMEI>;
    let mSISDN: OPTIONAL<MSISDN>;
    let gUTI: OPTIONAL<GUTI>;
    let location: OPTIONAL<Location>;
    let oldGUTI: OPTIONAL<GUTI>;
    let sMSServiceStatus: OPTIONAL<EPSSMSServiceStatus>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "iMSI": (_el: _Element): void => { iMSI = $._decode_implicit<IMSI>(() => _decode_IMSI)(_el); },
        "iMEI": (_el: _Element): void => { iMEI = $._decode_implicit<IMEI>(() => _decode_IMEI)(_el); },
        "mSISDN": (_el: _Element): void => { mSISDN = $._decode_implicit<MSISDN>(() => _decode_MSISDN)(_el); },
        "gUTI": (_el: _Element): void => { gUTI = $._decode_implicit<GUTI>(() => _decode_GUTI)(_el); },
        "location": (_el: _Element): void => { location = $._decode_implicit<Location>(() => _decode_Location)(_el); },
        "oldGUTI": (_el: _Element): void => { oldGUTI = $._decode_implicit<GUTI>(() => _decode_GUTI)(_el); },
        "sMSServiceStatus": (_el: _Element): void => { sMSServiceStatus = $._decode_implicit<EPSSMSServiceStatus>(() => _decode_EPSSMSServiceStatus)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MMELocationUpdate,
        _extension_additions_list_spec_for_MMELocationUpdate,
        _root_component_type_list_2_spec_for_MMELocationUpdate,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new MMELocationUpdate(
        iMSI,
        iMEI,
        mSISDN,
        gUTI,
        location,
        oldGUTI,
        sMSServiceStatus,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_MMELocationUpdate(el);
}

let _cached_encoder_for_MMELocationUpdate: $.ASN1Encoder<MMELocationUpdate> | null = null;

/**
 * @summary Encodes a(n) MMELocationUpdate into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMELocationUpdate, encoded as an ASN.1 Element.
 */
export
function _encode_MMELocationUpdate (value: MMELocationUpdate, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMELocationUpdate) { _cached_encoder_for_MMELocationUpdate = function (value: MMELocationUpdate, elGetter: $.ASN1Encoder<MMELocationUpdate>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(7 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_IMSI, $.BER)(value.iMSI, $.BER);
    if (value.iMEI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_IMEI, $.BER)(value.iMEI, $.BER);
    }
    if (value.mSISDN !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_MSISDN, $.BER)(value.mSISDN, $.BER);
    }
    if (value.gUTI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_GUTI, $.BER)(value.gUTI, $.BER);
    }
    if (value.location !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_Location, $.BER)(value.location, $.BER);
    }
    if (value.oldGUTI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => _encode_GUTI, $.BER)(value.oldGUTI, $.BER);
    }
    if (value.sMSServiceStatus !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => _encode_EPSSMSServiceStatus, $.BER)(value.sMSServiceStatus, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_MMELocationUpdate(value, elGetter);
}


/* eslint-enable */
