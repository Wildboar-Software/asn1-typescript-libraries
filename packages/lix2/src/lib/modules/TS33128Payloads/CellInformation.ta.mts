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
import { RANCGI, _decode_RANCGI, _encode_RANCGI } from "../TS33128Payloads/RANCGI.ta.mjs";
// export { RANCGI, _decode_RANCGI, _encode_RANCGI } from "../TS33128Payloads/RANCGI.ta.mjs";
import { CellSiteInformation, _decode_CellSiteInformation, _encode_CellSiteInformation } from "../TS33128Payloads/CellSiteInformation.ta.mjs";
// export { CellSiteInformation, _decode_CellSiteInformation, _encode_CellSiteInformation } from "../TS33128Payloads/CellSiteInformation.ta.mjs";
import { Timestamp, _decode_Timestamp, _encode_Timestamp } from "../TS33128Payloads/Timestamp.ta.mjs";
// export { Timestamp, _decode_Timestamp, _encode_Timestamp } from "../TS33128Payloads/Timestamp.ta.mjs";
import { CellRadioRelatedInformation, _decode_CellRadioRelatedInformation, _encode_CellRadioRelatedInformation } from "../TS33128Payloads/CellRadioRelatedInformation.ta.mjs";
// export { CellRadioRelatedInformation, _decode_CellRadioRelatedInformation, _encode_CellRadioRelatedInformation } from "../TS33128Payloads/CellRadioRelatedInformation.ta.mjs";
import { RFBand, _decode_RFBand, _encode_RFBand } from "../TS33128Payloads/RFBand.ta.mjs";
// export { RFBand, _decode_RFBand, _encode_RFBand } from "../TS33128Payloads/RFBand.ta.mjs";


/**
 * @summary CellInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CellInformation ::= SEQUENCE
 * {
 *     rANCGI                      [1] RANCGI,
 *     cellSiteinformation         [2] CellSiteInformation OPTIONAL,
 *     timeOfLocation              [3] Timestamp OPTIONAL,
 *     cellRadioRelatedInformation [4] CellRadioRelatedInformation OPTIONAL,
 *     band                        [5] RFBand OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class CellInformation {
    constructor (
        /**
         * @summary `rANCGI`.
         * @public
         * @readonly
         */
        readonly rANCGI: RANCGI,
        /**
         * @summary `cellSiteinformation`.
         * @public
         * @readonly
         */
        readonly cellSiteinformation: OPTIONAL<CellSiteInformation>,
        /**
         * @summary `timeOfLocation`.
         * @public
         * @readonly
         */
        readonly timeOfLocation: OPTIONAL<Timestamp>,
        /**
         * @summary `cellRadioRelatedInformation`.
         * @public
         * @readonly
         */
        readonly cellRadioRelatedInformation: OPTIONAL<CellRadioRelatedInformation>,
        /**
         * @summary `band`.
         * @public
         * @readonly
         */
        readonly band: OPTIONAL<RFBand>
    ) {}

    /**
     * @summary Restructures an object into a CellInformation
     * @description
     * 
     * This takes an `object` and converts it to a `CellInformation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CellInformation`.
     * @returns {CellInformation}
     */
    public static _from_object (_o: { [_K in keyof (CellInformation)]: (CellInformation)[_K] }): CellInformation {
        return new CellInformation(_o.rANCGI, _o.cellSiteinformation, _o.timeOfLocation, _o.cellRadioRelatedInformation, _o.band);
    }


}

/**
 * @summary The Leading Root Component Types of CellInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CellInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("rANCGI", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("cellSiteinformation", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("timeOfLocation", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("cellRadioRelatedInformation", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("band", true, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of CellInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CellInformation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CellInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CellInformation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CellInformation: $.ASN1Decoder<CellInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CellInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CellInformation (el: _Element): CellInformation {
    if (!_cached_decoder_for_CellInformation) { _cached_decoder_for_CellInformation = function (el: _Element): CellInformation {
    let rANCGI!: RANCGI;
    let cellSiteinformation: OPTIONAL<CellSiteInformation>;
    let timeOfLocation: OPTIONAL<Timestamp>;
    let cellRadioRelatedInformation: OPTIONAL<CellRadioRelatedInformation>;
    let band: OPTIONAL<RFBand>;
    const callbacks: $.DecodingMap = {
        "rANCGI": (_el: _Element): void => { rANCGI = $._decode_explicit<RANCGI>(() => _decode_RANCGI)(_el); },
        "cellSiteinformation": (_el: _Element): void => { cellSiteinformation = $._decode_implicit<CellSiteInformation>(() => _decode_CellSiteInformation)(_el); },
        "timeOfLocation": (_el: _Element): void => { timeOfLocation = $._decode_implicit<Timestamp>(() => _decode_Timestamp)(_el); },
        "cellRadioRelatedInformation": (_el: _Element): void => { cellRadioRelatedInformation = $._decode_explicit<CellRadioRelatedInformation>(() => _decode_CellRadioRelatedInformation)(_el); },
        "band": (_el: _Element): void => { band = $._decode_implicit<RFBand>(() => _decode_RFBand)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CellInformation,
        _extension_additions_list_spec_for_CellInformation,
        _root_component_type_list_2_spec_for_CellInformation,
        undefined,
    );
    return new CellInformation(
        rANCGI,
        cellSiteinformation,
        timeOfLocation,
        cellRadioRelatedInformation,
        band
    );
}; }
    return _cached_decoder_for_CellInformation(el);
}

let _cached_encoder_for_CellInformation: $.ASN1Encoder<CellInformation> | null = null;

/**
 * @summary Encodes a(n) CellInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CellInformation, encoded as an ASN.1 Element.
 */
export
function _encode_CellInformation (value: CellInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CellInformation) { _cached_encoder_for_CellInformation = function (value: CellInformation, elGetter: $.ASN1Encoder<CellInformation>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_RANCGI, $.BER)(value.rANCGI, $.BER),
            /* IF_ABSENT  */ ((value.cellSiteinformation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_CellSiteInformation, $.BER)(value.cellSiteinformation, $.BER)),
            /* IF_ABSENT  */ ((value.timeOfLocation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_Timestamp, $.BER)(value.timeOfLocation, $.BER)),
            /* IF_ABSENT  */ ((value.cellRadioRelatedInformation === undefined) ? undefined : $._encode_explicit(_TagClass.context, 4, () => _encode_CellRadioRelatedInformation, $.BER)(value.cellRadioRelatedInformation, $.BER)),
            /* IF_ABSENT  */ ((value.band === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_RFBand, $.BER)(value.band, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CellInformation(value, elGetter);
}


/* eslint-enable */
