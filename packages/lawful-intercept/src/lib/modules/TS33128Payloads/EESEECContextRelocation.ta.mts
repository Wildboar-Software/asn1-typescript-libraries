/* eslint-disable */
import {
    type OPTIONAL,
    type UTF8String,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
// export { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
import { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
// export { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
import { ACProfiles, _decode_ACProfiles, _encode_ACProfiles } from "../TS33128Payloads/ACProfiles.ta.mjs";
// export { ACProfiles, _decode_ACProfiles, _encode_ACProfiles } from "../TS33128Payloads/ACProfiles.ta.mjs";


/**
 * @summary EESEECContextRelocation
 * @description
 * 
 * The IRI-POI in the EES shall generate an xIRI containing an
 * EESEECContextRelocation record when the IRI-POI present in the EES detects
 * that the EES has sent or received the EEC context relocation information. The
 * IRI-POI present in the EES shall generate the xIRI for the following events
 * according to its new serving EE (referred to as target EES in TS 24.558 [93]
 * or current serving EES (referred to as source EES in TS 24.558 [93]) role:
 *
 * - Target EES (T-EES) receives an Eees_EECContextRelocation_Pull response from
 *   a Source EES (S-EES) upon request from the T-EES to S-EES (as defined in TS
 *   29.558 [94] clause 5.10.2.2).
 *
 * - T-EES sends an Eees_EECContextRelocation_Push response to a S-EES upon
 *   request from the S-EES to T-EES (as defined in TS 29.558 [94] clause
 *   5.10.2.3).
 *
 * - S-EES sends an Eees_EECContextRelocation_Pull response to a T-EES.
 *
 * - S-EES receives an Eees_EECContextRelocation_Push response from a T-EES.
 *
 * - NOTE : The term target EES is used in TS 29.558[94] referring the new
 *   serving EES and the term serving EES is referring to the old serving EES.
 *
 * Table 7.14.2.11-1 gives the LI_HI2 IRI message type for this record as
 * REPORT.
 *
 * 3GPP TS 33.128, clause 7.14.2.9.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EESEECContextRelocation ::= SEQUENCE
 * {
 *     eECID           [1] UTF8String,
 *     eECContextID    [2] UTF8String,
 *     gPSI            [3] GPSI OPTIONAL,
 *     uELoc           [4] Location OPTIONAL,
 *     aCProfiles      [5] ACProfiles OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class EESEECContextRelocation {
    /**
     * @summary `eECID`.
     * @description
     *
     * Unique identifier of the EEC.
     *
     * 3GPP TS 33.128, clause 7.14.2.9.
     *
     * @public
     * @readonly
     */
    readonly eECID: UTF8String;
    /**
     * @summary `eECContextID`.
     * @public
     * @readonly
     */
    readonly eECContextID: UTF8String;
    /**
     * @summary `gPSI`.
     * @description
     *
     * GPSI of the target UE, if available.
     *
     * 3GPP TS 33.128, clause 7.14.2.9.
     *
     * @public
     * @readonly
     */
    readonly gPSI: OPTIONAL<GPSI>;
    /**
     * @summary `uELoc`.
     * @description
     *
     * Latest location information of the target UE, that is available at the
     * EES, if available.
     *
     * 3GPP TS 33.128, clause 7.14.2.9.
     *
     * @public
     * @readonly
     */
    readonly uELoc: OPTIONAL<Location>;
    /**
     * @summary `aCProfiles`.
     * @description
     *
     * Profiles of application clients (ACs) for which the EEC provides edge
     * enabling services, if available. See table 7.14.2.2-2.
     *
     * 3GPP TS 33.128, clause 7.14.2.9.
     *
     * @public
     * @readonly
     */
    readonly aCProfiles: OPTIONAL<ACProfiles>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        eECID: UTF8String,
        eECContextID: UTF8String,
        gPSI?: OPTIONAL<GPSI>,
        uELoc?: OPTIONAL<Location>,
        aCProfiles?: OPTIONAL<ACProfiles>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.eECID = eECID;
        this.eECContextID = eECContextID;
        this.gPSI = gPSI;
        this.uELoc = uELoc;
        this.aCProfiles = aCProfiles;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a EESEECContextRelocation
     * @description
     * 
     * This takes an `object` and converts it to a `EESEECContextRelocation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EESEECContextRelocation`.
     * @returns {EESEECContextRelocation}
     */
    public static _from_object (_o: { [_K in keyof (EESEECContextRelocation)]: (EESEECContextRelocation)[_K] }): EESEECContextRelocation {
        return new EESEECContextRelocation(_o.eECID, _o.eECContextID, _o.gPSI, _o.uELoc, _o.aCProfiles, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of EESEECContextRelocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EESEECContextRelocation: $.ComponentSpec[] = [
    new $.ComponentSpec("eECID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("eECContextID", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("gPSI", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("uELoc", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("aCProfiles", true, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of EESEECContextRelocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EESEECContextRelocation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EESEECContextRelocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EESEECContextRelocation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EESEECContextRelocation: $.ASN1Decoder<EESEECContextRelocation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EESEECContextRelocation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EESEECContextRelocation (el: _Element): EESEECContextRelocation {
    if (!_cached_decoder_for_EESEECContextRelocation) { _cached_decoder_for_EESEECContextRelocation = function (el: _Element): EESEECContextRelocation {
    let eECID!: UTF8String;
    let eECContextID!: UTF8String;
    let gPSI: OPTIONAL<GPSI>;
    let uELoc: OPTIONAL<Location>;
    let aCProfiles: OPTIONAL<ACProfiles>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "eECID": (_el: _Element): void => { eECID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "eECContextID": (_el: _Element): void => { eECContextID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "gPSI": (_el: _Element): void => { gPSI = $._decode_explicit<GPSI>(() => _decode_GPSI)(_el); },
        "uELoc": (_el: _Element): void => { uELoc = $._decode_implicit<Location>(() => _decode_Location)(_el); },
        "aCProfiles": (_el: _Element): void => { aCProfiles = $._decode_implicit<ACProfiles>(() => _decode_ACProfiles)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EESEECContextRelocation,
        _extension_additions_list_spec_for_EESEECContextRelocation,
        _root_component_type_list_2_spec_for_EESEECContextRelocation,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new EESEECContextRelocation(
        eECID,
        eECContextID,
        gPSI,
        uELoc,
        aCProfiles,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_EESEECContextRelocation(el);
}

let _cached_encoder_for_EESEECContextRelocation: $.ASN1Encoder<EESEECContextRelocation> | null = null;

/**
 * @summary Encodes a(n) EESEECContextRelocation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EESEECContextRelocation, encoded as an ASN.1 Element.
 */
export
function _encode_EESEECContextRelocation (value: EESEECContextRelocation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EESEECContextRelocation) { _cached_encoder_for_EESEECContextRelocation = function (value: EESEECContextRelocation, elGetter: $.ASN1Encoder<EESEECContextRelocation>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(5 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeUTF8String, $.BER)(value.eECID, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeUTF8String, $.BER)(value.eECContextID, $.BER);
    if (value.gPSI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 3, () => _encode_GPSI, $.BER)(value.gPSI, $.BER);
    }
    if (value.uELoc !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_Location, $.BER)(value.uELoc, $.BER);
    }
    if (value.aCProfiles !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_ACProfiles, $.BER)(value.aCProfiles, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_EESEECContextRelocation(value, elGetter);
}


/* eslint-enable */
