/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CGI, _decode_CGI, _encode_CGI } from "../TS33128Payloads/CGI.ta.mjs";
// export { CGI, _decode_CGI, _encode_CGI } from "../TS33128Payloads/CGI.ta.mjs";
import { SAI, _decode_SAI, _encode_SAI } from "../TS33128Payloads/SAI.ta.mjs";
// export { SAI, _decode_SAI, _encode_SAI } from "../TS33128Payloads/SAI.ta.mjs";
import { LAI, _decode_LAI, _encode_LAI } from "../TS33128Payloads/LAI.ta.mjs";
// export { LAI, _decode_LAI, _encode_LAI } from "../TS33128Payloads/LAI.ta.mjs";
import { RAI, _decode_RAI, _encode_RAI } from "../TS33128Payloads/RAI.ta.mjs";
// export { RAI, _decode_RAI, _encode_RAI } from "../TS33128Payloads/RAI.ta.mjs";
import { Timestamp, _decode_Timestamp, _encode_Timestamp } from "../TS33128Payloads/Timestamp.ta.mjs";
// export { Timestamp, _decode_Timestamp, _encode_Timestamp } from "../TS33128Payloads/Timestamp.ta.mjs";
import { CellSiteInformation, _decode_CellSiteInformation, _encode_CellSiteInformation } from "../TS33128Payloads/CellSiteInformation.ta.mjs";
// export { CellSiteInformation, _decode_CellSiteInformation, _encode_CellSiteInformation } from "../TS33128Payloads/CellSiteInformation.ta.mjs";


/**
 * @summary UTRALocation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UTRALocation ::= SEQUENCE
 * {
 *     cGI                         [1] CGI OPTIONAL,
 *     sAI                         [2] SAI OPTIONAL,
 *     lAI                         [3] LAI OPTIONAL,
 *     rAI                         [4] RAI OPTIONAL,
 *     ageOfLocationInfo           [5] INTEGER OPTIONAL,
 *     uELocationTimestamp         [6] Timestamp OPTIONAL,
 *     geographicalInformation     [7] UTF8String OPTIONAL,
 *     geodeticInformation         [8] UTF8String OPTIONAL,
 *     cellSiteInformation         [9] CellSiteInformation OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class UTRALocation {
    constructor (
        /**
         * @summary `cGI`.
         * @public
         * @readonly
         */
        readonly cGI: OPTIONAL<CGI>,
        /**
         * @summary `sAI`.
         * @public
         * @readonly
         */
        readonly sAI: OPTIONAL<SAI>,
        /**
         * @summary `lAI`.
         * @public
         * @readonly
         */
        readonly lAI: OPTIONAL<LAI>,
        /**
         * @summary `rAI`.
         * @public
         * @readonly
         */
        readonly rAI: OPTIONAL<RAI>,
        /**
         * @summary `ageOfLocationInfo`.
         * @public
         * @readonly
         */
        readonly ageOfLocationInfo: OPTIONAL<INTEGER>,
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
         * @summary `cellSiteInformation`.
         * @public
         * @readonly
         */
        readonly cellSiteInformation: OPTIONAL<CellSiteInformation>
    ) {}

    /**
     * @summary Restructures an object into a UTRALocation
     * @description
     * 
     * This takes an `object` and converts it to a `UTRALocation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UTRALocation`.
     * @returns {UTRALocation}
     */
    public static _from_object (_o: { [_K in keyof (UTRALocation)]: (UTRALocation)[_K] }): UTRALocation {
        return new UTRALocation(_o.cGI, _o.sAI, _o.lAI, _o.rAI, _o.ageOfLocationInfo, _o.uELocationTimestamp, _o.geographicalInformation, _o.geodeticInformation, _o.cellSiteInformation);
    }


}

/**
 * @summary The Leading Root Component Types of UTRALocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_UTRALocation: $.ComponentSpec[] = [
    new $.ComponentSpec("cGI", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("sAI", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("lAI", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("rAI", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("ageOfLocationInfo", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("uELocationTimestamp", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("geographicalInformation", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("geodeticInformation", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("cellSiteInformation", true, $.hasTag(_TagClass.context, 9))
];

/**
 * @summary The Trailing Root Component Types of UTRALocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_UTRALocation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of UTRALocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_UTRALocation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_UTRALocation: $.ASN1Decoder<UTRALocation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UTRALocation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UTRALocation (el: _Element): UTRALocation {
    if (!_cached_decoder_for_UTRALocation) { _cached_decoder_for_UTRALocation = function (el: _Element): UTRALocation {
    let cGI: OPTIONAL<CGI>;
    let sAI: OPTIONAL<SAI>;
    let lAI: OPTIONAL<LAI>;
    let rAI: OPTIONAL<RAI>;
    let ageOfLocationInfo: OPTIONAL<INTEGER>;
    let uELocationTimestamp: OPTIONAL<Timestamp>;
    let geographicalInformation: OPTIONAL<UTF8String>;
    let geodeticInformation: OPTIONAL<UTF8String>;
    let cellSiteInformation: OPTIONAL<CellSiteInformation>;
    const callbacks: $.DecodingMap = {
        "cGI": (_el: _Element): void => { cGI = $._decode_implicit<CGI>(() => _decode_CGI)(_el); },
        "sAI": (_el: _Element): void => { sAI = $._decode_implicit<SAI>(() => _decode_SAI)(_el); },
        "lAI": (_el: _Element): void => { lAI = $._decode_implicit<LAI>(() => _decode_LAI)(_el); },
        "rAI": (_el: _Element): void => { rAI = $._decode_implicit<RAI>(() => _decode_RAI)(_el); },
        "ageOfLocationInfo": (_el: _Element): void => { ageOfLocationInfo = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "uELocationTimestamp": (_el: _Element): void => { uELocationTimestamp = $._decode_implicit<Timestamp>(() => _decode_Timestamp)(_el); },
        "geographicalInformation": (_el: _Element): void => { geographicalInformation = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "geodeticInformation": (_el: _Element): void => { geodeticInformation = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "cellSiteInformation": (_el: _Element): void => { cellSiteInformation = $._decode_implicit<CellSiteInformation>(() => _decode_CellSiteInformation)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_UTRALocation,
        _extension_additions_list_spec_for_UTRALocation,
        _root_component_type_list_2_spec_for_UTRALocation,
        undefined,
    );
    return new UTRALocation(
        cGI,
        sAI,
        lAI,
        rAI,
        ageOfLocationInfo,
        uELocationTimestamp,
        geographicalInformation,
        geodeticInformation,
        cellSiteInformation
    );
}; }
    return _cached_decoder_for_UTRALocation(el);
}

let _cached_encoder_for_UTRALocation: $.ASN1Encoder<UTRALocation> | null = null;

/**
 * @summary Encodes a(n) UTRALocation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UTRALocation, encoded as an ASN.1 Element.
 */
export
function _encode_UTRALocation (value: UTRALocation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UTRALocation) { _cached_encoder_for_UTRALocation = function (value: UTRALocation, elGetter: $.ASN1Encoder<UTRALocation>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.cGI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_CGI, $.BER)(value.cGI, $.BER)),
            /* IF_ABSENT  */ ((value.sAI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_SAI, $.BER)(value.sAI, $.BER)),
            /* IF_ABSENT  */ ((value.lAI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_LAI, $.BER)(value.lAI, $.BER)),
            /* IF_ABSENT  */ ((value.rAI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_RAI, $.BER)(value.rAI, $.BER)),
            /* IF_ABSENT  */ ((value.ageOfLocationInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => $._encodeInteger, $.BER)(value.ageOfLocationInfo, $.BER)),
            /* IF_ABSENT  */ ((value.uELocationTimestamp === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_Timestamp, $.BER)(value.uELocationTimestamp, $.BER)),
            /* IF_ABSENT  */ ((value.geographicalInformation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => $._encodeUTF8String, $.BER)(value.geographicalInformation, $.BER)),
            /* IF_ABSENT  */ ((value.geodeticInformation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => $._encodeUTF8String, $.BER)(value.geodeticInformation, $.BER)),
            /* IF_ABSENT  */ ((value.cellSiteInformation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_CellSiteInformation, $.BER)(value.cellSiteInformation, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_UTRALocation(value, elGetter);
}


/* eslint-enable */
