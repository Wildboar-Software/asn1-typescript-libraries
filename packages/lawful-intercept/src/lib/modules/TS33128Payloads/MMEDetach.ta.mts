/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MMEDirection, _decode_MMEDirection, _encode_MMEDirection, _enum_for_MMEDirection } from "../TS33128Payloads/MMEDirection.ta.mjs";
// export { MMEDirection, _enum_for_MMEDirection, MMEDirection_networkInitiated /* IMPORTED_LONG_ENUMERATION_ITEM */, networkInitiated /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMEDirection_uEInitiated /* IMPORTED_LONG_ENUMERATION_ITEM */, uEInitiated /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MMEDirection, _encode_MMEDirection } from "../TS33128Payloads/MMEDirection.ta.mjs";
import { EPSDetachType, _decode_EPSDetachType, _encode_EPSDetachType, _enum_for_EPSDetachType } from "../TS33128Payloads/EPSDetachType.ta.mjs";
// export { EPSDetachType, _enum_for_EPSDetachType, EPSDetachType_ePSDetach /* IMPORTED_LONG_ENUMERATION_ITEM */, ePSDetach /* IMPORTED_SHORT_ENUMERATION_ITEM */, EPSDetachType_iMSIDetach /* IMPORTED_LONG_ENUMERATION_ITEM */, iMSIDetach /* IMPORTED_SHORT_ENUMERATION_ITEM */, EPSDetachType_combinedEPSIMSIDetach /* IMPORTED_LONG_ENUMERATION_ITEM */, combinedEPSIMSIDetach /* IMPORTED_SHORT_ENUMERATION_ITEM */, EPSDetachType_reAttachRequired /* IMPORTED_LONG_ENUMERATION_ITEM */, reAttachRequired /* IMPORTED_SHORT_ENUMERATION_ITEM */, EPSDetachType_reAttachNotRequired /* IMPORTED_LONG_ENUMERATION_ITEM */, reAttachNotRequired /* IMPORTED_SHORT_ENUMERATION_ITEM */, EPSDetachType_reserved /* IMPORTED_LONG_ENUMERATION_ITEM */, reserved /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_EPSDetachType, _encode_EPSDetachType } from "../TS33128Payloads/EPSDetachType.ta.mjs";
import { type IMSI, _decode_IMSI, _encode_IMSI } from "../TS33128Payloads/IMSI.ta.mjs";
// export { IMSI, _decode_IMSI, _encode_IMSI } from "../TS33128Payloads/IMSI.ta.mjs";
import { type IMEI, _decode_IMEI, _encode_IMEI } from "../TS33128Payloads/IMEI.ta.mjs";
// export { IMEI, _decode_IMEI, _encode_IMEI } from "../TS33128Payloads/IMEI.ta.mjs";
import { type MSISDN, _decode_MSISDN, _encode_MSISDN } from "../TS33128Payloads/MSISDN.ta.mjs";
// export { MSISDN, _decode_MSISDN, _encode_MSISDN } from "../TS33128Payloads/MSISDN.ta.mjs";
import { GUTI, _decode_GUTI, _encode_GUTI } from "../TS33128Payloads/GUTI.ta.mjs";
// export { GUTI, _decode_GUTI, _encode_GUTI } from "../TS33128Payloads/GUTI.ta.mjs";
import { type EMMCause, _decode_EMMCause, _encode_EMMCause } from "../TS33128Payloads/EMMCause.ta.mjs";
// export { EMMCause, _decode_EMMCause, _encode_EMMCause } from "../TS33128Payloads/EMMCause.ta.mjs";
import { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
// export { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
import { SwitchOffIndicator, _decode_SwitchOffIndicator, _encode_SwitchOffIndicator, _enum_for_SwitchOffIndicator } from "../TS33128Payloads/SwitchOffIndicator.ta.mjs";
// export { SwitchOffIndicator, _enum_for_SwitchOffIndicator, SwitchOffIndicator_normalDetach /* IMPORTED_LONG_ENUMERATION_ITEM */, normalDetach /* IMPORTED_SHORT_ENUMERATION_ITEM */, SwitchOffIndicator_switchOff /* IMPORTED_LONG_ENUMERATION_ITEM */, switchOff /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_SwitchOffIndicator, _encode_SwitchOffIndicator } from "../TS33128Payloads/SwitchOffIndicator.ta.mjs";


/**
 * @summary MMEDetach
 * @description
 * 
 * The IRI-POI in the MME shall generate an xIRI containing an MMEDetach record
 * when the IRI-POI present in the MME detects that a UE matching one of the
 * target identifiers provided via LI_X1 has deregistered from the EPS.
 * Accordingly, the IRI-POI in the MME generates the xIRI when any of the
 * following events is detected:
 *
 * - For network initiated de-registration, when the MME receives the S1: DETACH
 *   ACCEPT message from the target UE, when the MME receives an S3: DETACH
 *   NOTIFICATION about the target UE from the SGSN or when implicit
 *   deregistration timer expires; and in all cases the UE EMM state within the
 *   MME is changed to EMM-DEREGISTERED.
 *
 * - For UE initiated de-registration, when the MME sends the S1: DETACH ACCEPT
 *   message to the target UE or when the MME receives the S1: DETACH REQUEST
 *   message from the target UE with deregistration type value of "switch off";
 *   and in both cases the UE EMM state within the MME is changed to
 *   EMM-DEREGISTERED.
 *
 * NOTE: The location information was sent as a userLocation
 * (Location.locationInfo.userLocation) between versions 18.0.0 and 18.2.0 of
 * the present document. The location information may also be present in this
 * field for backwards compatibility.
 *
 * 3GPP TS 33.128, clause 6.3.2.2.4.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMEDetach ::= SEQUENCE
 * {
 *     detachDirection    [1] MMEDirection,
 *     detachType         [2] EPSDetachType,
 *     iMSI               [3] IMSI,
 *     iMEI               [4] IMEI OPTIONAL,
 *     mSISDN             [5] MSISDN OPTIONAL,
 *     gUTI               [6] GUTI OPTIONAL,
 *     cause              [7] EMMCause OPTIONAL,
 *     location           [8] Location OPTIONAL,
 *     switchOffIndicator [9] SwitchOffIndicator OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class MMEDetach {
    /**
     * @summary `detachDirection`.
     * @public
     * @readonly
     */
    readonly detachDirection: MMEDirection;
    /**
     * @summary `detachType`.
     * @description
     *
     * Indicates the type of detach as determined by the direction of the detach
     * request and the value of the DetachType information element, see table
     * 6.3.2.2.4-2.
     *
     * 3GPP TS 33.128, clause 6.3.2.2.4.
     *
     * @public
     * @readonly
     */
    readonly detachType: EPSDetachType;
    /**
     * @summary `iMSI`.
     * @description
     *
     * IMSI associated with the detach.
     *
     * 3GPP TS 33.128, clause 6.3.2.2.4.
     *
     * @public
     * @readonly
     */
    readonly iMSI: IMSI;
    /**
     * @summary `iMEI`.
     * @description
     *
     * IMEI associated with the detach, if available.
     *
     * 3GPP TS 33.128, clause 6.3.2.2.4.
     *
     * @public
     * @readonly
     */
    readonly iMEI: OPTIONAL<IMEI>;
    /**
     * @summary `mSISDN`.
     * @description
     *
     * mSISDN associated with the detach, if available.
     *
     * 3GPP TS 33.128, clause 6.3.2.2.4.
     *
     * @public
     * @readonly
     */
    readonly mSISDN: OPTIONAL<MSISDN>;
    /**
     * @summary `gUTI`.
     * @description
     *
     * GUTI associated with the detach, if available.
     *
     * 3GPP TS 33.128, clause 6.3.2.2.4.
     *
     * @public
     * @readonly
     */
    readonly gUTI: OPTIONAL<GUTI>;
    /**
     * @summary `cause`.
     * @description
     *
     * Indicates the EMM cause value for network-initiated detach, see TS 24.301
     * [51] clause 9.9.3.9.
     *
     * 3GPP TS 33.128, clause 6.3.2.2.4.
     *
     * @public
     * @readonly
     */
    readonly cause: OPTIONAL<EMMCause>;
    /**
     * @summary `location`.
     * @description
     *
     * Location information determined by the network during the deregistration
     * or known at the MME, if available. Shall include all location information
     * for the target UE available at the MME encoded as one of the following
     * (see NOTE):
     *
     * - as a Location.fourGLocationInfo.ePSLocationInformation parameter.
     *
     * - as a Location.fourGLocationInfo.ePSUserLocationInformation parameter.
     *   When Dual Connectivity is activated, the additionalCellIDs parameter
     *   (Location.fourGLocationInfo.ePSLocationInformation.mMELocationInformation.additionalCellIDs)
     *   shall also be populated, see clause 7.3.3. If available, other
     *   parameters reportable via Location shall be included. NOTE: The
     *   location information was sent as a userLocation
     *   (Location.locationInfo.userLocation) between versions 18.0.0 and 18.2.0
     *   of the present document. The location information may also be present
     *   in this field for backwards compatibility.
     *
     * 3GPP TS 33.128, clause 6.3.2.2.4.
     *
     * @public
     * @readonly
     */
    readonly location: OPTIONAL<Location>;
    /**
     * @summary `switchOffIndicator`.
     * @description
     *
     * If Bit 4 of the Detach type information element sent in the Detach
     * Request is set to 0, this parameter shall be set to "normalDetach". If
     * Bit 4 of the Detach type information element sent in the Detach Request
     * is set to 1, this parameter shall be set to "switchOff". See TS 24.301
     * [51] clause 9.9.3.7. This parameter is conditional only for backwards
     * compatibility.
     *
     * 3GPP TS 33.128, clause 6.3.2.2.4.
     *
     * @public
     * @readonly
     */
    readonly switchOffIndicator: OPTIONAL<SwitchOffIndicator>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        detachDirection: MMEDirection,
        detachType: EPSDetachType,
        iMSI: IMSI,
        iMEI?: OPTIONAL<IMEI>,
        mSISDN?: OPTIONAL<MSISDN>,
        gUTI?: OPTIONAL<GUTI>,
        cause?: OPTIONAL<EMMCause>,
        location?: OPTIONAL<Location>,
        switchOffIndicator?: OPTIONAL<SwitchOffIndicator>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.detachDirection = detachDirection;
        this.detachType = detachType;
        this.iMSI = iMSI;
        this.iMEI = iMEI;
        this.mSISDN = mSISDN;
        this.gUTI = gUTI;
        this.cause = cause;
        this.location = location;
        this.switchOffIndicator = switchOffIndicator;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a MMEDetach
     * @description
     * 
     * This takes an `object` and converts it to a `MMEDetach`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MMEDetach`.
     * @returns {MMEDetach}
     */
    public static _from_object (_o: { [_K in keyof (MMEDetach)]: (MMEDetach)[_K] }): MMEDetach {
        return new MMEDetach(_o.detachDirection, _o.detachType, _o.iMSI, _o.iMEI, _o.mSISDN, _o.gUTI, _o.cause, _o.location, _o.switchOffIndicator, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `detachDirection`
         * @public
         * @static
         */

    public static _enum_for_detachDirection: typeof _enum_for_MMEDirection = _enum_for_MMEDirection;        /**
         * @summary The enum used as the type of the component `detachType`
         * @public
         * @static
         */

    public static _enum_for_detachType: typeof _enum_for_EPSDetachType = _enum_for_EPSDetachType;        /**
         * @summary The enum used as the type of the component `switchOffIndicator`
         * @public
         * @static
         */

    public static _enum_for_switchOffIndicator: typeof _enum_for_SwitchOffIndicator = _enum_for_SwitchOffIndicator;
}

/**
 * @summary The Leading Root Component Types of MMEDetach
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MMEDetach: $.ComponentSpec[] = [
    new $.ComponentSpec("detachDirection", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("detachType", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("iMSI", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("iMEI", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("mSISDN", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("gUTI", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("cause", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("location", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("switchOffIndicator", true, $.hasTag(_TagClass.context, 9))
];

/**
 * @summary The Trailing Root Component Types of MMEDetach
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MMEDetach: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MMEDetach
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MMEDetach: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MMEDetach: $.ASN1Decoder<MMEDetach> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMEDetach
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMEDetach (el: _Element): MMEDetach {
    if (!_cached_decoder_for_MMEDetach) { _cached_decoder_for_MMEDetach = function (el: _Element): MMEDetach {
    let detachDirection!: MMEDirection;
    let detachType!: EPSDetachType;
    let iMSI!: IMSI;
    let iMEI: OPTIONAL<IMEI>;
    let mSISDN: OPTIONAL<MSISDN>;
    let gUTI: OPTIONAL<GUTI>;
    let cause: OPTIONAL<EMMCause>;
    let location: OPTIONAL<Location>;
    let switchOffIndicator: OPTIONAL<SwitchOffIndicator>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "detachDirection": (_el: _Element): void => { detachDirection = $._decode_implicit<MMEDirection>(() => _decode_MMEDirection)(_el); },
        "detachType": (_el: _Element): void => { detachType = $._decode_implicit<EPSDetachType>(() => _decode_EPSDetachType)(_el); },
        "iMSI": (_el: _Element): void => { iMSI = $._decode_implicit<IMSI>(() => _decode_IMSI)(_el); },
        "iMEI": (_el: _Element): void => { iMEI = $._decode_implicit<IMEI>(() => _decode_IMEI)(_el); },
        "mSISDN": (_el: _Element): void => { mSISDN = $._decode_implicit<MSISDN>(() => _decode_MSISDN)(_el); },
        "gUTI": (_el: _Element): void => { gUTI = $._decode_implicit<GUTI>(() => _decode_GUTI)(_el); },
        "cause": (_el: _Element): void => { cause = $._decode_implicit<EMMCause>(() => _decode_EMMCause)(_el); },
        "location": (_el: _Element): void => { location = $._decode_implicit<Location>(() => _decode_Location)(_el); },
        "switchOffIndicator": (_el: _Element): void => { switchOffIndicator = $._decode_implicit<SwitchOffIndicator>(() => _decode_SwitchOffIndicator)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MMEDetach,
        _extension_additions_list_spec_for_MMEDetach,
        _root_component_type_list_2_spec_for_MMEDetach,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new MMEDetach(
        detachDirection,
        detachType,
        iMSI,
        iMEI,
        mSISDN,
        gUTI,
        cause,
        location,
        switchOffIndicator,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_MMEDetach(el);
}

let _cached_encoder_for_MMEDetach: $.ASN1Encoder<MMEDetach> | null = null;

/**
 * @summary Encodes a(n) MMEDetach into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMEDetach, encoded as an ASN.1 Element.
 */
export
function _encode_MMEDetach (value: MMEDetach, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMEDetach) { _cached_encoder_for_MMEDetach = function (value: MMEDetach, elGetter: $.ASN1Encoder<MMEDetach>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(9 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_MMEDirection, $.BER)(value.detachDirection, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_EPSDetachType, $.BER)(value.detachType, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_IMSI, $.BER)(value.iMSI, $.BER);
    if (value.iMEI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_IMEI, $.BER)(value.iMEI, $.BER);
    }
    if (value.mSISDN !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_MSISDN, $.BER)(value.mSISDN, $.BER);
    }
    if (value.gUTI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => _encode_GUTI, $.BER)(value.gUTI, $.BER);
    }
    if (value.cause !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => _encode_EMMCause, $.BER)(value.cause, $.BER);
    }
    if (value.location !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => _encode_Location, $.BER)(value.location, $.BER);
    }
    if (value.switchOffIndicator !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => _encode_SwitchOffIndicator, $.BER)(value.switchOffIndicator, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_MMEDetach(value, elGetter);
}


/* eslint-enable */
