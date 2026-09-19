/* eslint-disable */
import {
    BOOLEAN,
    OPTIONAL,
    UTF8String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TAI, _decode_TAI, _encode_TAI } from "../TS33128Payloads/TAI.ta.mjs";
// export { TAI, _decode_TAI, _encode_TAI } from "../TS33128Payloads/TAI.ta.mjs";
import { NCGI, _decode_NCGI, _encode_NCGI } from "../TS33128Payloads/NCGI.ta.mjs";
// export { NCGI, _decode_NCGI, _encode_NCGI } from "../TS33128Payloads/NCGI.ta.mjs";
import { AgeOfLocation, _decode_AgeOfLocation, _encode_AgeOfLocation } from "../TS33128Payloads/AgeOfLocation.ta.mjs";
// export { AgeOfLocation, _decode_AgeOfLocation, _encode_AgeOfLocation } from "../TS33128Payloads/AgeOfLocation.ta.mjs";
import { Timestamp, _decode_Timestamp, _encode_Timestamp } from "../TS33128Payloads/Timestamp.ta.mjs";
// export { Timestamp, _decode_Timestamp, _encode_Timestamp } from "../TS33128Payloads/Timestamp.ta.mjs";
import { GlobalRANNodeID, _decode_GlobalRANNodeID, _encode_GlobalRANNodeID } from "../TS33128Payloads/GlobalRANNodeID.ta.mjs";
// export { GlobalRANNodeID, _decode_GlobalRANNodeID, _encode_GlobalRANNodeID } from "../TS33128Payloads/GlobalRANNodeID.ta.mjs";
import { CellSiteInformation, _decode_CellSiteInformation, _encode_CellSiteInformation } from "../TS33128Payloads/CellSiteInformation.ta.mjs";
// export { CellSiteInformation, _decode_CellSiteInformation, _encode_CellSiteInformation } from "../TS33128Payloads/CellSiteInformation.ta.mjs";
import { NRNTNTAIInfo, _decode_NRNTNTAIInfo, _encode_NRNTNTAIInfo } from "../TS33128Payloads/NRNTNTAIInfo.ta.mjs";
// export { NRNTNTAIInfo, _decode_NRNTNTAIInfo, _encode_NRNTNTAIInfo } from "../TS33128Payloads/NRNTNTAIInfo.ta.mjs";
import { IABMTUserLocation, _decode_IABMTUserLocation, _encode_IABMTUserLocation } from "../TS33128Payloads/IABMTUserLocation.ta.mjs";
// export { IABMTUserLocation, _decode_IABMTUserLocation, _encode_IABMTUserLocation } from "../TS33128Payloads/IABMTUserLocation.ta.mjs";
import { CellRadioRelatedInformation, _decode_CellRadioRelatedInformation, _encode_CellRadioRelatedInformation } from "../TS33128Payloads/CellRadioRelatedInformation.ta.mjs";
// export { CellRadioRelatedInformation, _decode_CellRadioRelatedInformation, _encode_CellRadioRelatedInformation } from "../TS33128Payloads/CellRadioRelatedInformation.ta.mjs";


/**
 * @summary NRLocation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NRLocation ::= SEQUENCE
 * {
 *     tAI                         [1] TAI,
 *     nCGI                        [2] NCGI,
 *     ageOfLocationInfo           [3] AgeOfLocation OPTIONAL,
 *     uELocationTimestamp         [4] Timestamp OPTIONAL,
 *     geographicalInformation     [5] UTF8String OPTIONAL,
 *     geodeticInformation         [6] UTF8String OPTIONAL,
 *     globalGNbID                 [7] GlobalRANNodeID OPTIONAL,
 *     cellSiteInformation         [8] CellSiteInformation OPTIONAL,
 *     ignoreNCGI                  [9] BOOLEAN OPTIONAL,
 *     nRNTNTAIInfo                [10] NRNTNTAIInfo OPTIONAL,
 *     iABMTUserLocation           [11] IABMTUserLocation OPTIONAL,
 *     cellRadioRelatedInformation [12] SEQUENCE OF CellRadioRelatedInformation OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class NRLocation {
    constructor (
        /**
         * @summary `tAI`.
         * @public
         * @readonly
         */
        readonly tAI: TAI,
        /**
         * @summary `nCGI`.
         * @public
         * @readonly
         */
        readonly nCGI: NCGI,
        /**
         * @summary `ageOfLocationInfo`.
         * @public
         * @readonly
         */
        readonly ageOfLocationInfo: OPTIONAL<AgeOfLocation>,
        /**
         * @summary `uELocationTimestamp`.
         * @public
         * @readonly
         */
        readonly uELocationTimestamp: OPTIONAL<Timestamp>,
        /**
         * @summary `geographicalInformation`.
         * @public
         * @readonly
         */
        readonly geographicalInformation: OPTIONAL<UTF8String>,
        /**
         * @summary `geodeticInformation`.
         * @public
         * @readonly
         */
        readonly geodeticInformation: OPTIONAL<UTF8String>,
        /**
         * @summary `globalGNbID`.
         * @public
         * @readonly
         */
        readonly globalGNbID: OPTIONAL<GlobalRANNodeID>,
        /**
         * @summary `cellSiteInformation`.
         * @public
         * @readonly
         */
        readonly cellSiteInformation: OPTIONAL<CellSiteInformation>,
        /**
         * @summary `ignoreNCGI`.
         * @public
         * @readonly
         */
        readonly ignoreNCGI: OPTIONAL<BOOLEAN>,
        /**
         * @summary `nRNTNTAIInfo`.
         * @public
         * @readonly
         */
        readonly nRNTNTAIInfo: OPTIONAL<NRNTNTAIInfo>,
        /**
         * @summary `iABMTUserLocation`.
         * @public
         * @readonly
         */
        readonly iABMTUserLocation: OPTIONAL<IABMTUserLocation>,
        /**
         * @summary `cellRadioRelatedInformation`.
         * @public
         * @readonly
         */
        readonly cellRadioRelatedInformation: OPTIONAL<CellRadioRelatedInformation[]>
    ) {}

    /**
     * @summary Restructures an object into a NRLocation
     * @description
     * 
     * This takes an `object` and converts it to a `NRLocation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NRLocation`.
     * @returns {NRLocation}
     */
    public static _from_object (_o: { [_K in keyof (NRLocation)]: (NRLocation)[_K] }): NRLocation {
        return new NRLocation(_o.tAI, _o.nCGI, _o.ageOfLocationInfo, _o.uELocationTimestamp, _o.geographicalInformation, _o.geodeticInformation, _o.globalGNbID, _o.cellSiteInformation, _o.ignoreNCGI, _o.nRNTNTAIInfo, _o.iABMTUserLocation, _o.cellRadioRelatedInformation);
    }


}

/**
 * @summary The Leading Root Component Types of NRLocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_NRLocation: $.ComponentSpec[] = [
    new $.ComponentSpec("tAI", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("nCGI", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("ageOfLocationInfo", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("uELocationTimestamp", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("geographicalInformation", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("geodeticInformation", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("globalGNbID", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("cellSiteInformation", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("ignoreNCGI", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("nRNTNTAIInfo", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("iABMTUserLocation", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("cellRadioRelatedInformation", true, $.hasTag(_TagClass.context, 12))
];

/**
 * @summary The Trailing Root Component Types of NRLocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_NRLocation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of NRLocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_NRLocation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_NRLocation: $.ASN1Decoder<NRLocation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NRLocation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NRLocation (el: _Element): NRLocation {
    if (!_cached_decoder_for_NRLocation) { _cached_decoder_for_NRLocation = function (el: _Element): NRLocation {
    let tAI!: TAI;
    let nCGI!: NCGI;
    let ageOfLocationInfo: OPTIONAL<AgeOfLocation>;
    let uELocationTimestamp: OPTIONAL<Timestamp>;
    let geographicalInformation: OPTIONAL<UTF8String>;
    let geodeticInformation: OPTIONAL<UTF8String>;
    let globalGNbID: OPTIONAL<GlobalRANNodeID>;
    let cellSiteInformation: OPTIONAL<CellSiteInformation>;
    let ignoreNCGI: OPTIONAL<BOOLEAN>;
    let nRNTNTAIInfo: OPTIONAL<NRNTNTAIInfo>;
    let iABMTUserLocation: OPTIONAL<IABMTUserLocation>;
    let cellRadioRelatedInformation: OPTIONAL<CellRadioRelatedInformation[]>;
    const callbacks: $.DecodingMap = {
        "tAI": (_el: _Element): void => { tAI = $._decode_implicit<TAI>(() => _decode_TAI)(_el); },
        "nCGI": (_el: _Element): void => { nCGI = $._decode_implicit<NCGI>(() => _decode_NCGI)(_el); },
        "ageOfLocationInfo": (_el: _Element): void => { ageOfLocationInfo = $._decode_implicit<AgeOfLocation>(() => _decode_AgeOfLocation)(_el); },
        "uELocationTimestamp": (_el: _Element): void => { uELocationTimestamp = $._decode_implicit<Timestamp>(() => _decode_Timestamp)(_el); },
        "geographicalInformation": (_el: _Element): void => { geographicalInformation = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "geodeticInformation": (_el: _Element): void => { geodeticInformation = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "globalGNbID": (_el: _Element): void => { globalGNbID = $._decode_implicit<GlobalRANNodeID>(() => _decode_GlobalRANNodeID)(_el); },
        "cellSiteInformation": (_el: _Element): void => { cellSiteInformation = $._decode_implicit<CellSiteInformation>(() => _decode_CellSiteInformation)(_el); },
        "ignoreNCGI": (_el: _Element): void => { ignoreNCGI = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "nRNTNTAIInfo": (_el: _Element): void => { nRNTNTAIInfo = $._decode_implicit<NRNTNTAIInfo>(() => _decode_NRNTNTAIInfo)(_el); },
        "iABMTUserLocation": (_el: _Element): void => { iABMTUserLocation = $._decode_implicit<IABMTUserLocation>(() => _decode_IABMTUserLocation)(_el); },
        "cellRadioRelatedInformation": (_el: _Element): void => { cellRadioRelatedInformation = $._decode_implicit<CellRadioRelatedInformation[]>(() => $._decodeSequenceOf<CellRadioRelatedInformation>(() => _decode_CellRadioRelatedInformation))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_NRLocation,
        _extension_additions_list_spec_for_NRLocation,
        _root_component_type_list_2_spec_for_NRLocation,
        undefined,
    );
    return new NRLocation(
        tAI,
        nCGI,
        ageOfLocationInfo,
        uELocationTimestamp,
        geographicalInformation,
        geodeticInformation,
        globalGNbID,
        cellSiteInformation,
        ignoreNCGI,
        nRNTNTAIInfo,
        iABMTUserLocation,
        cellRadioRelatedInformation
    );
}; }
    return _cached_decoder_for_NRLocation(el);
}

let _cached_encoder_for_NRLocation: $.ASN1Encoder<NRLocation> | null = null;

/**
 * @summary Encodes a(n) NRLocation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NRLocation, encoded as an ASN.1 Element.
 */
export
function _encode_NRLocation (value: NRLocation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NRLocation) { _cached_encoder_for_NRLocation = function (value: NRLocation, elGetter: $.ASN1Encoder<NRLocation>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_TAI, $.BER)(value.tAI, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_NCGI, $.BER)(value.nCGI, $.BER),
            /* IF_ABSENT  */ ((value.ageOfLocationInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_AgeOfLocation, $.BER)(value.ageOfLocationInfo, $.BER)),
            /* IF_ABSENT  */ ((value.uELocationTimestamp === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_Timestamp, $.BER)(value.uELocationTimestamp, $.BER)),
            /* IF_ABSENT  */ ((value.geographicalInformation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => $._encodeUTF8String, $.BER)(value.geographicalInformation, $.BER)),
            /* IF_ABSENT  */ ((value.geodeticInformation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => $._encodeUTF8String, $.BER)(value.geodeticInformation, $.BER)),
            /* IF_ABSENT  */ ((value.globalGNbID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_GlobalRANNodeID, $.BER)(value.globalGNbID, $.BER)),
            /* IF_ABSENT  */ ((value.cellSiteInformation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_CellSiteInformation, $.BER)(value.cellSiteInformation, $.BER)),
            /* IF_ABSENT  */ ((value.ignoreNCGI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => $._encodeBoolean, $.BER)(value.ignoreNCGI, $.BER)),
            /* IF_ABSENT  */ ((value.nRNTNTAIInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_NRNTNTAIInfo, $.BER)(value.nRNTNTAIInfo, $.BER)),
            /* IF_ABSENT  */ ((value.iABMTUserLocation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => _encode_IABMTUserLocation, $.BER)(value.iABMTUserLocation, $.BER)),
            /* IF_ABSENT  */ ((value.cellRadioRelatedInformation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => $._encodeSequenceOf<CellRadioRelatedInformation>(() => _encode_CellRadioRelatedInformation, $.BER), $.BER)(value.cellRadioRelatedInformation, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_NRLocation(value, elGetter);
}


/* eslint-enable */
