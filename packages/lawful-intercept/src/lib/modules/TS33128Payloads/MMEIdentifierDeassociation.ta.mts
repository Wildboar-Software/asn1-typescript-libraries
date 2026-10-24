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


/**
 * @summary MMEIdentifierDeassociation
 * @description
 * 
 * The IRI-POI present in the MME generating an xIRI containing an
 * MMEIdentifierAssociation record shall set the Payload Direction field in the
 * PDU header to not applicable (Direction Value 5, see ETSI TS 103 221-2 [8]
 * clause 5.2.6).
 *
 * When transmitting the xIRI, the IRI-POI present in the MME shall set the
 * payload format to 2, and provide the payload as a BER-encoded
 * TS33128Payloads.XIRIPayloads structure.
 *
 * In the case where the IRI-POI present in the MME detects that an ATTACH
 * ACCEPT, TRACKING AREA UPDATE ACCEPT (including a GUTI) or GUTI REALLOCATION
 * COMMAND message as defined in TS 24.301 [51] has been sent by the MME towards
 * a target UE, the IRI-POI present at the MME shall immediately generate a
 * MMEIdentifierAssociation xIRI. This xIRI shall be generated regardless of
 * whether the ATTACH ACCEPT, TRACKING AREA UPDATE ACCEPT or GUTI REALLOCATION
 * COMMAND procedure is subsequently successfully completed or not.
 *
 * The IRI-POI present in the MME shall generate an xIRI containing an
 * MMEIdentifierDeassociation record when the IRI-POI present in the MME detects
 * an identifier deassociation without a new association within the same UE
 * context inside the same MME for a UE matching one of the target identifiers
 * provided via LI_X1. Generation of this record is subject to this record type
 * being enabled for a specific target (see clause 6.3.2.2.1).
 *
 * NOTE 1: IMSI shall always be provided, in addition to the warrant target
 * identifier if different to IMSI. Other identifiers shall be provided if
 * available.
 *
 * NOTE 2: The location information was sent in the MMEIdentifierAssociation as
 * a userLocation (Location.locationInfo.userLocation) between versions 18.0.0
 * and 18.2.0 of the present document. The location information may also be
 * present in this field for backwards compatibility.
 *
 * 3GPP TS 33.128, clause 6.3.2.2.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMEIdentifierDeassociation ::= SEQUENCE
 * {
 *     iMSI        [1] IMSI,
 *     iMEI        [2] IMEI OPTIONAL,
 *     mSISDN      [3] MSISDN OPTIONAL,
 *     gUTI        [4] GUTI,
 *     location    [5] Location OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class MMEIdentifierDeassociation {
    /**
     * @summary `iMSI`.
     * @description
     *
     * IMSI associated with the procedure. (see NOTE 1). NOTE 1: IMSI shall
     * always be provided, in addition to the warrant target identifier if
     * different to IMSI. Other identifiers shall be provided if available.
     *
     * 3GPP TS 33.128, clause 6.3.2.2.2.
     *
     * @public
     * @readonly
     */
    readonly iMSI: IMSI;
    /**
     * @summary `iMEI`.
     * @description
     *
     * IMEI used in the procedure, if available (see NOTE 1). NOTE 1: IMSI shall
     * always be provided, in addition to the warrant target identifier if
     * different to IMSI. Other identifiers shall be provided if available.
     *
     * 3GPP TS 33.128, clause 6.3.2.2.2.
     *
     * @public
     * @readonly
     */
    readonly iMEI: OPTIONAL<IMEI>;
    /**
     * @summary `mSISDN`.
     * @description
     *
     * MSISDN used in the procedure, if available (see NOTE 1). NOTE 1: IMSI
     * shall always be provided, in addition to the warrant target identifier if
     * different to IMSI. Other identifiers shall be provided if available.
     *
     * 3GPP TS 33.128, clause 6.3.2.2.2.
     *
     * @public
     * @readonly
     */
    readonly mSISDN: OPTIONAL<MSISDN>;
    /**
     * @summary `gUTI`.
     * @description
     *
     * LTE GUTI used in the procedure.
     *
     * 3GPP TS 33.128, clause 6.3.2.2.2.
     *
     * @public
     * @readonly
     */
    readonly gUTI: GUTI;
    /**
     * @summary `location`.
     * @description
     *
     * Location information available when identifier deassociation occurs, sent
     * only if it is the current location. Shall include all location
     * information for the target UE available at the MME encoded as one of the
     * following (see NOTE 2):
     *
     * - as a Location.fourGLocationInfo.ePSLocationInformation parameter.
     *
     * - as a Location.fourGLocationInfo.ePSUserLocationInformation parameter.
     *   When Dual Connectivity is activated, the additionalCellIDs parameter
     *   (Location.fourGLocationInfo.ePSLocationInformation.mMELocationInformation.additionalCellIDs)
     *   shall also be populated, see clause 7.3.3. If available, other
     *   parameters reportable via Location shall be included. NOTE 2: The
     *   location information was sent in the MMEIdentifierAssociation as a
     *   userLocation (Location.locationInfo.userLocation) between versions
     *   18.0.0 and 18.2.0 of the present document. The location information may
     *   also be present in this field for backwards compatibility.
     *
     * 3GPP TS 33.128, clause 6.3.2.2.2.
     *
     * @public
     * @readonly
     */
    readonly location: OPTIONAL<Location>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        iMSI: IMSI,
        iMEI: OPTIONAL<IMEI>,
        mSISDN: OPTIONAL<MSISDN>,
        gUTI: GUTI,
        location?: OPTIONAL<Location>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.iMSI = iMSI;
        this.iMEI = iMEI;
        this.mSISDN = mSISDN;
        this.gUTI = gUTI;
        this.location = location;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a MMEIdentifierDeassociation
     * @description
     * 
     * This takes an `object` and converts it to a `MMEIdentifierDeassociation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MMEIdentifierDeassociation`.
     * @returns {MMEIdentifierDeassociation}
     */
    public static _from_object (_o: { [_K in keyof (MMEIdentifierDeassociation)]: (MMEIdentifierDeassociation)[_K] }): MMEIdentifierDeassociation {
        return new MMEIdentifierDeassociation(_o.iMSI, _o.iMEI, _o.mSISDN, _o.gUTI, _o.location, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of MMEIdentifierDeassociation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MMEIdentifierDeassociation: $.ComponentSpec[] = [
    new $.ComponentSpec("iMSI", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("iMEI", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("mSISDN", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("gUTI", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("location", true, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of MMEIdentifierDeassociation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MMEIdentifierDeassociation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MMEIdentifierDeassociation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MMEIdentifierDeassociation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MMEIdentifierDeassociation: $.ASN1Decoder<MMEIdentifierDeassociation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMEIdentifierDeassociation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMEIdentifierDeassociation (el: _Element): MMEIdentifierDeassociation {
    if (!_cached_decoder_for_MMEIdentifierDeassociation) { _cached_decoder_for_MMEIdentifierDeassociation = function (el: _Element): MMEIdentifierDeassociation {
    let iMSI!: IMSI;
    let iMEI: OPTIONAL<IMEI>;
    let mSISDN: OPTIONAL<MSISDN>;
    let gUTI!: GUTI;
    let location: OPTIONAL<Location>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "iMSI": (_el: _Element): void => { iMSI = $._decode_implicit<IMSI>(() => _decode_IMSI)(_el); },
        "iMEI": (_el: _Element): void => { iMEI = $._decode_implicit<IMEI>(() => _decode_IMEI)(_el); },
        "mSISDN": (_el: _Element): void => { mSISDN = $._decode_implicit<MSISDN>(() => _decode_MSISDN)(_el); },
        "gUTI": (_el: _Element): void => { gUTI = $._decode_implicit<GUTI>(() => _decode_GUTI)(_el); },
        "location": (_el: _Element): void => { location = $._decode_implicit<Location>(() => _decode_Location)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MMEIdentifierDeassociation,
        _extension_additions_list_spec_for_MMEIdentifierDeassociation,
        _root_component_type_list_2_spec_for_MMEIdentifierDeassociation,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new MMEIdentifierDeassociation(
        iMSI,
        iMEI,
        mSISDN,
        gUTI,
        location,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_MMEIdentifierDeassociation(el);
}

let _cached_encoder_for_MMEIdentifierDeassociation: $.ASN1Encoder<MMEIdentifierDeassociation> | null = null;

/**
 * @summary Encodes a(n) MMEIdentifierDeassociation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMEIdentifierDeassociation, encoded as an ASN.1 Element.
 */
export
function _encode_MMEIdentifierDeassociation (value: MMEIdentifierDeassociation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMEIdentifierDeassociation) { _cached_encoder_for_MMEIdentifierDeassociation = function (value: MMEIdentifierDeassociation, elGetter: $.ASN1Encoder<MMEIdentifierDeassociation>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(5 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_IMSI, $.BER)(value.iMSI, $.BER);
    if (value.iMEI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_IMEI, $.BER)(value.iMEI, $.BER);
    }
    if (value.mSISDN !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_MSISDN, $.BER)(value.mSISDN, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_GUTI, $.BER)(value.gUTI, $.BER);
    if (value.location !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_Location, $.BER)(value.location, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_MMEIdentifierDeassociation(value, elGetter);
}


/* eslint-enable */
