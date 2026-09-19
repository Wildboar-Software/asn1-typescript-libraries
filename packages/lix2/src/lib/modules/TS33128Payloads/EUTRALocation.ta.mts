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
import { ECGI, _decode_ECGI, _encode_ECGI } from "../TS33128Payloads/ECGI.ta.mjs";
// export { ECGI, _decode_ECGI, _encode_ECGI } from "../TS33128Payloads/ECGI.ta.mjs";
import { AgeOfLocation, _decode_AgeOfLocation, _encode_AgeOfLocation } from "../TS33128Payloads/AgeOfLocation.ta.mjs";
// export { AgeOfLocation, _decode_AgeOfLocation, _encode_AgeOfLocation } from "../TS33128Payloads/AgeOfLocation.ta.mjs";
import { Timestamp, _decode_Timestamp, _encode_Timestamp } from "../TS33128Payloads/Timestamp.ta.mjs";
// export { Timestamp, _decode_Timestamp, _encode_Timestamp } from "../TS33128Payloads/Timestamp.ta.mjs";
import { GlobalRANNodeID, _decode_GlobalRANNodeID, _encode_GlobalRANNodeID } from "../TS33128Payloads/GlobalRANNodeID.ta.mjs";
// export { GlobalRANNodeID, _decode_GlobalRANNodeID, _encode_GlobalRANNodeID } from "../TS33128Payloads/GlobalRANNodeID.ta.mjs";
import { CellSiteInformation, _decode_CellSiteInformation, _encode_CellSiteInformation } from "../TS33128Payloads/CellSiteInformation.ta.mjs";
// export { CellSiteInformation, _decode_CellSiteInformation, _encode_CellSiteInformation } from "../TS33128Payloads/CellSiteInformation.ta.mjs";
import { CellRadioRelatedInformation, _decode_CellRadioRelatedInformation, _encode_CellRadioRelatedInformation } from "../TS33128Payloads/CellRadioRelatedInformation.ta.mjs";
// export { CellRadioRelatedInformation, _decode_CellRadioRelatedInformation, _encode_CellRadioRelatedInformation } from "../TS33128Payloads/CellRadioRelatedInformation.ta.mjs";


/**
 * @summary EUTRALocation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EUTRALocation ::= SEQUENCE
 * {
 *     tAI                         [1] TAI,
 *     eCGI                        [2] ECGI,
 *     ageOfLocationInfo           [3] AgeOfLocation OPTIONAL,
 *     uELocationTimestamp         [4] Timestamp OPTIONAL,
 *     geographicalInformation     [5] UTF8String OPTIONAL,
 *     geodeticInformation         [6] UTF8String OPTIONAL,
 *     globalNGENbID               [7] GlobalRANNodeID OPTIONAL,
 *     cellSiteInformation         [8] CellSiteInformation OPTIONAL,
 *     globalENbID                 [9] GlobalRANNodeID OPTIONAL,
 *     ignoreTAI                   [10] BOOLEAN OPTIONAL,
 *     ignoreECGI                  [11] BOOLEAN OPTIONAL,
 *     cellRadioRelatedInformation [12] SEQUENCE OF CellRadioRelatedInformation OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class EUTRALocation {
    constructor (
        /**
         * @summary `tAI`.
         * @public
         * @readonly
         */
        readonly tAI: TAI,
        /**
         * @summary `eCGI`.
         * @public
         * @readonly
         */
        readonly eCGI: ECGI,
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
         * @summary `globalNGENbID`.
         * @public
         * @readonly
         */
        readonly globalNGENbID: OPTIONAL<GlobalRANNodeID>,
        /**
         * @summary `cellSiteInformation`.
         * @public
         * @readonly
         */
        readonly cellSiteInformation: OPTIONAL<CellSiteInformation>,
        /**
         * @summary `globalENbID`.
         * @public
         * @readonly
         */
        readonly globalENbID: OPTIONAL<GlobalRANNodeID>,
        /**
         * @summary `ignoreTAI`.
         * @public
         * @readonly
         */
        readonly ignoreTAI: OPTIONAL<BOOLEAN>,
        /**
         * @summary `ignoreECGI`.
         * @public
         * @readonly
         */
        readonly ignoreECGI: OPTIONAL<BOOLEAN>,
        /**
         * @summary `cellRadioRelatedInformation`.
         * @public
         * @readonly
         */
        readonly cellRadioRelatedInformation: OPTIONAL<CellRadioRelatedInformation[]>
    ) {}

    /**
     * @summary Restructures an object into a EUTRALocation
     * @description
     * 
     * This takes an `object` and converts it to a `EUTRALocation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EUTRALocation`.
     * @returns {EUTRALocation}
     */
    public static _from_object (_o: { [_K in keyof (EUTRALocation)]: (EUTRALocation)[_K] }): EUTRALocation {
        return new EUTRALocation(_o.tAI, _o.eCGI, _o.ageOfLocationInfo, _o.uELocationTimestamp, _o.geographicalInformation, _o.geodeticInformation, _o.globalNGENbID, _o.cellSiteInformation, _o.globalENbID, _o.ignoreTAI, _o.ignoreECGI, _o.cellRadioRelatedInformation);
    }


}

/**
 * @summary The Leading Root Component Types of EUTRALocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EUTRALocation: $.ComponentSpec[] = [
    new $.ComponentSpec("tAI", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("eCGI", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("ageOfLocationInfo", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("uELocationTimestamp", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("geographicalInformation", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("geodeticInformation", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("globalNGENbID", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("cellSiteInformation", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("globalENbID", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("ignoreTAI", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("ignoreECGI", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("cellRadioRelatedInformation", true, $.hasTag(_TagClass.context, 12))
];

/**
 * @summary The Trailing Root Component Types of EUTRALocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EUTRALocation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EUTRALocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EUTRALocation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EUTRALocation: $.ASN1Decoder<EUTRALocation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EUTRALocation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EUTRALocation (el: _Element): EUTRALocation {
    if (!_cached_decoder_for_EUTRALocation) { _cached_decoder_for_EUTRALocation = function (el: _Element): EUTRALocation {
    let tAI!: TAI;
    let eCGI!: ECGI;
    let ageOfLocationInfo: OPTIONAL<AgeOfLocation>;
    let uELocationTimestamp: OPTIONAL<Timestamp>;
    let geographicalInformation: OPTIONAL<UTF8String>;
    let geodeticInformation: OPTIONAL<UTF8String>;
    let globalNGENbID: OPTIONAL<GlobalRANNodeID>;
    let cellSiteInformation: OPTIONAL<CellSiteInformation>;
    let globalENbID: OPTIONAL<GlobalRANNodeID>;
    let ignoreTAI: OPTIONAL<BOOLEAN>;
    let ignoreECGI: OPTIONAL<BOOLEAN>;
    let cellRadioRelatedInformation: OPTIONAL<CellRadioRelatedInformation[]>;
    const callbacks: $.DecodingMap = {
        "tAI": (_el: _Element): void => { tAI = $._decode_implicit<TAI>(() => _decode_TAI)(_el); },
        "eCGI": (_el: _Element): void => { eCGI = $._decode_implicit<ECGI>(() => _decode_ECGI)(_el); },
        "ageOfLocationInfo": (_el: _Element): void => { ageOfLocationInfo = $._decode_implicit<AgeOfLocation>(() => _decode_AgeOfLocation)(_el); },
        "uELocationTimestamp": (_el: _Element): void => { uELocationTimestamp = $._decode_implicit<Timestamp>(() => _decode_Timestamp)(_el); },
        "geographicalInformation": (_el: _Element): void => { geographicalInformation = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "geodeticInformation": (_el: _Element): void => { geodeticInformation = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "globalNGENbID": (_el: _Element): void => { globalNGENbID = $._decode_implicit<GlobalRANNodeID>(() => _decode_GlobalRANNodeID)(_el); },
        "cellSiteInformation": (_el: _Element): void => { cellSiteInformation = $._decode_implicit<CellSiteInformation>(() => _decode_CellSiteInformation)(_el); },
        "globalENbID": (_el: _Element): void => { globalENbID = $._decode_implicit<GlobalRANNodeID>(() => _decode_GlobalRANNodeID)(_el); },
        "ignoreTAI": (_el: _Element): void => { ignoreTAI = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "ignoreECGI": (_el: _Element): void => { ignoreECGI = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "cellRadioRelatedInformation": (_el: _Element): void => { cellRadioRelatedInformation = $._decode_implicit<CellRadioRelatedInformation[]>(() => $._decodeSequenceOf<CellRadioRelatedInformation>(() => _decode_CellRadioRelatedInformation))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EUTRALocation,
        _extension_additions_list_spec_for_EUTRALocation,
        _root_component_type_list_2_spec_for_EUTRALocation,
        undefined,
    );
    return new EUTRALocation(
        tAI,
        eCGI,
        ageOfLocationInfo,
        uELocationTimestamp,
        geographicalInformation,
        geodeticInformation,
        globalNGENbID,
        cellSiteInformation,
        globalENbID,
        ignoreTAI,
        ignoreECGI,
        cellRadioRelatedInformation
    );
}; }
    return _cached_decoder_for_EUTRALocation(el);
}

let _cached_encoder_for_EUTRALocation: $.ASN1Encoder<EUTRALocation> | null = null;

/**
 * @summary Encodes a(n) EUTRALocation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EUTRALocation, encoded as an ASN.1 Element.
 */
export
function _encode_EUTRALocation (value: EUTRALocation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EUTRALocation) { _cached_encoder_for_EUTRALocation = function (value: EUTRALocation, elGetter: $.ASN1Encoder<EUTRALocation>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_TAI, $.BER)(value.tAI, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_ECGI, $.BER)(value.eCGI, $.BER),
            /* IF_ABSENT  */ ((value.ageOfLocationInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_AgeOfLocation, $.BER)(value.ageOfLocationInfo, $.BER)),
            /* IF_ABSENT  */ ((value.uELocationTimestamp === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_Timestamp, $.BER)(value.uELocationTimestamp, $.BER)),
            /* IF_ABSENT  */ ((value.geographicalInformation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => $._encodeUTF8String, $.BER)(value.geographicalInformation, $.BER)),
            /* IF_ABSENT  */ ((value.geodeticInformation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => $._encodeUTF8String, $.BER)(value.geodeticInformation, $.BER)),
            /* IF_ABSENT  */ ((value.globalNGENbID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_GlobalRANNodeID, $.BER)(value.globalNGENbID, $.BER)),
            /* IF_ABSENT  */ ((value.cellSiteInformation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_CellSiteInformation, $.BER)(value.cellSiteInformation, $.BER)),
            /* IF_ABSENT  */ ((value.globalENbID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_GlobalRANNodeID, $.BER)(value.globalENbID, $.BER)),
            /* IF_ABSENT  */ ((value.ignoreTAI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => $._encodeBoolean, $.BER)(value.ignoreTAI, $.BER)),
            /* IF_ABSENT  */ ((value.ignoreECGI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => $._encodeBoolean, $.BER)(value.ignoreECGI, $.BER)),
            /* IF_ABSENT  */ ((value.cellRadioRelatedInformation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => $._encodeSequenceOf<CellRadioRelatedInformation>(() => _encode_CellRadioRelatedInformation, $.BER), $.BER)(value.cellRadioRelatedInformation, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EUTRALocation(value, elGetter);
}


/* eslint-enable */
