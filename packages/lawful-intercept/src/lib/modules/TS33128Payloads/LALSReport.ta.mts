/* eslint-disable */
import {
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type SUPI, _decode_SUPI, _encode_SUPI } from "../TS33128Payloads/SUPI.ta.mjs";
// export { SUPI, _decode_SUPI, _encode_SUPI } from "../TS33128Payloads/SUPI.ta.mjs";
import { type PEI, _decode_PEI, _encode_PEI } from "../TS33128Payloads/PEI.ta.mjs";
// export { PEI, _decode_PEI, _encode_PEI } from "../TS33128Payloads/PEI.ta.mjs";
import { type GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
// export { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
import { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
// export { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
import { type IMPU, _decode_IMPU, _encode_IMPU } from "../TS33128Payloads/IMPU.ta.mjs";
// export { IMPU, _decode_IMPU, _encode_IMPU } from "../TS33128Payloads/IMPU.ta.mjs";
import { type IMSI, _decode_IMSI, _encode_IMSI } from "../TS33128Payloads/IMSI.ta.mjs";
// export { IMSI, _decode_IMSI, _encode_IMSI } from "../TS33128Payloads/IMSI.ta.mjs";
import { type MSISDN, _decode_MSISDN, _encode_MSISDN } from "../TS33128Payloads/MSISDN.ta.mjs";
// export { MSISDN, _decode_MSISDN, _encode_MSISDN } from "../TS33128Payloads/MSISDN.ta.mjs";


/**
 * @summary LALSReport
 * @description
 * 
 * The IRI-POI provided by the LI-LCS client shall deliver the target location
 * reports to respective MDF(s) as xIRI over the LI_X2 interface.
 *
 * NOTE: One and only one of SUPI, GPSI, IMSI, MSISDN, IMPU shall be present and
 * it shall correspond to the target identifier included in the respective
 * ActivateTask message for the LI-LCS Client.
 *
 * 3GPP TS 33.128, clause 7.3.1.4.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LALSReport ::= SEQUENCE
 * {
 *     sUPI                [1] SUPI OPTIONAL,
 *     -- deprecatedPEI was deprecated in r16(16) version6(6).
 *     deprecatedPEI       [2] PEI OPTIONAL,
 *     gPSI                [3] GPSI OPTIONAL,
 *     location            [4] Location OPTIONAL,
 *     iMPU                [5] IMPU OPTIONAL,
 *     iMSI                [7] IMSI OPTIONAL,
 *     mSISDN              [8] MSISDN OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class LALSReport {
    /**
     * @summary `sUPI`.
     * @description
     *
     * SUPI of the target, if used for the service (see NOTE). NOTE: One and
     * only one of SUPI, GPSI, IMSI, MSISDN, IMPU shall be present and it shall
     * correspond to the target identifier included in the respective
     * ActivateTask message for the LI-LCS Client.
     *
     * 3GPP TS 33.128, clause 7.3.1.4.
     *
     * @public
     * @readonly
     */
    readonly sUPI: OPTIONAL<SUPI>;
    /**
     * @summary `deprecatedPEI`.
     * @description
     *
     * No longer used in present version of this specification.
     *
     * 3GPP TS 33.128, clause 7.3.1.4.
     *
     * @public
     * @readonly
     */
    readonly deprecatedPEI: OPTIONAL<PEI>;
    /**
     * @summary `gPSI`.
     * @description
     *
     * GPSI of the target, if used for the service (see NOTE). NOTE: One and
     * only one of SUPI, GPSI, IMSI, MSISDN, IMPU shall be present and it shall
     * correspond to the target identifier included in the respective
     * ActivateTask message for the LI-LCS Client.
     *
     * 3GPP TS 33.128, clause 7.3.1.4.
     *
     * @public
     * @readonly
     */
    readonly gPSI: OPTIONAL<GPSI>;
    /**
     * @summary `location`.
     * @description
     *
     * Location of the target, if obtained successfully. Encoded as a
     * Location.positioningInfo parameter. Both the
     * Location.positioningInfo.positionInfo parameter and the
     * Location.positioningInfo.rawMLPResponse.mLPPositionData parameter are
     * present in the case of successful positioning. In the case of positioning
     * failure only the Location.positioningInfo.rawMLPResponse.mLPErrorCode
     * parameter is present.
     *
     * 3GPP TS 33.128, clause 7.3.1.4.
     *
     * @public
     * @readonly
     */
    readonly location: OPTIONAL<Location>;
    /**
     * @summary `iMPU`.
     * @description
     *
     * IMPU of the target, if used for the service (see NOTE). NOTE: One and
     * only one of SUPI, GPSI, IMSI, MSISDN, IMPU shall be present and it shall
     * correspond to the target identifier included in the respective
     * ActivateTask message for the LI-LCS Client.
     *
     * 3GPP TS 33.128, clause 7.3.1.4.
     *
     * @public
     * @readonly
     */
    readonly iMPU: OPTIONAL<IMPU>;
    /**
     * @summary `iMSI`.
     * @description
     *
     * IMSI of the target, if used for the service (see NOTE). NOTE: One and
     * only one of SUPI, GPSI, IMSI, MSISDN, IMPU shall be present and it shall
     * correspond to the target identifier included in the respective
     * ActivateTask message for the LI-LCS Client.
     *
     * 3GPP TS 33.128, clause 7.3.1.4.
     *
     * @public
     * @readonly
     */
    readonly iMSI: OPTIONAL<IMSI>;
    /**
     * @summary `mSISDN`.
     * @description
     *
     * MSISDN of the target, if used for the service (see NOTE). NOTE: One and
     * only one of SUPI, GPSI, IMSI, MSISDN, IMPU shall be present and it shall
     * correspond to the target identifier included in the respective
     * ActivateTask message for the LI-LCS Client.
     *
     * 3GPP TS 33.128, clause 7.3.1.4.
     *
     * @public
     * @readonly
     */
    readonly mSISDN: OPTIONAL<MSISDN>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        sUPI?: OPTIONAL<SUPI>,
        deprecatedPEI?: OPTIONAL<PEI>,
        gPSI?: OPTIONAL<GPSI>,
        location?: OPTIONAL<Location>,
        iMPU?: OPTIONAL<IMPU>,
        iMSI?: OPTIONAL<IMSI>,
        mSISDN?: OPTIONAL<MSISDN>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.sUPI = sUPI;
        this.deprecatedPEI = deprecatedPEI;
        this.gPSI = gPSI;
        this.location = location;
        this.iMPU = iMPU;
        this.iMSI = iMSI;
        this.mSISDN = mSISDN;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a LALSReport
     * @description
     * 
     * This takes an `object` and converts it to a `LALSReport`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LALSReport`.
     * @returns {LALSReport}
     */
    public static _from_object (_o: { [_K in keyof (LALSReport)]: (LALSReport)[_K] }): LALSReport {
        return new LALSReport(_o.sUPI, _o.deprecatedPEI, _o.gPSI, _o.location, _o.iMPU, _o.iMSI, _o.mSISDN, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of LALSReport
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_LALSReport: $.ComponentSpec[] = [
    new $.ComponentSpec("sUPI", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("deprecatedPEI", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("gPSI", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("location", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("iMPU", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("iMSI", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("mSISDN", true, $.hasTag(_TagClass.context, 8))
];

/**
 * @summary The Trailing Root Component Types of LALSReport
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_LALSReport: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of LALSReport
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_LALSReport: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_LALSReport: $.ASN1Decoder<LALSReport> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LALSReport
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LALSReport (el: _Element): LALSReport {
    if (!_cached_decoder_for_LALSReport) { _cached_decoder_for_LALSReport = function (el: _Element): LALSReport {
    let sUPI: OPTIONAL<SUPI>;
    let deprecatedPEI: OPTIONAL<PEI>;
    let gPSI: OPTIONAL<GPSI>;
    let location: OPTIONAL<Location>;
    let iMPU: OPTIONAL<IMPU>;
    let iMSI: OPTIONAL<IMSI>;
    let mSISDN: OPTIONAL<MSISDN>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "sUPI": (_el: _Element): void => { sUPI = $._decode_explicit<SUPI>(() => _decode_SUPI)(_el); },
        "deprecatedPEI": (_el: _Element): void => { deprecatedPEI = $._decode_explicit<PEI>(() => _decode_PEI)(_el); },
        "gPSI": (_el: _Element): void => { gPSI = $._decode_explicit<GPSI>(() => _decode_GPSI)(_el); },
        "location": (_el: _Element): void => { location = $._decode_implicit<Location>(() => _decode_Location)(_el); },
        "iMPU": (_el: _Element): void => { iMPU = $._decode_explicit<IMPU>(() => _decode_IMPU)(_el); },
        "iMSI": (_el: _Element): void => { iMSI = $._decode_implicit<IMSI>(() => _decode_IMSI)(_el); },
        "mSISDN": (_el: _Element): void => { mSISDN = $._decode_implicit<MSISDN>(() => _decode_MSISDN)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_LALSReport,
        _extension_additions_list_spec_for_LALSReport,
        _root_component_type_list_2_spec_for_LALSReport,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new LALSReport(
        sUPI,
        deprecatedPEI,
        gPSI,
        location,
        iMPU,
        iMSI,
        mSISDN,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_LALSReport(el);
}

let _cached_encoder_for_LALSReport: $.ASN1Encoder<LALSReport> | null = null;

/**
 * @summary Encodes a(n) LALSReport into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LALSReport, encoded as an ASN.1 Element.
 */
export
function _encode_LALSReport (value: LALSReport, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LALSReport) { _cached_encoder_for_LALSReport = function (value: LALSReport, elGetter: $.ASN1Encoder<LALSReport>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(7 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.sUPI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 1, () => _encode_SUPI, $.BER)(value.sUPI, $.BER);
    }
    if (value.deprecatedPEI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 2, () => _encode_PEI, $.BER)(value.deprecatedPEI, $.BER);
    }
    if (value.gPSI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 3, () => _encode_GPSI, $.BER)(value.gPSI, $.BER);
    }
    if (value.location !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_Location, $.BER)(value.location, $.BER);
    }
    if (value.iMPU !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 5, () => _encode_IMPU, $.BER)(value.iMPU, $.BER);
    }
    if (value.iMSI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => _encode_IMSI, $.BER)(value.iMSI, $.BER);
    }
    if (value.mSISDN !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => _encode_MSISDN, $.BER)(value.mSISDN, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_LALSReport(value, elGetter);
}


/* eslint-enable */
