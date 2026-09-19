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
import { Volume, _decode_Volume, _encode_Volume } from "../RecordSyntax-opac/Volume.ta.mjs";
// export { Volume, _decode_Volume, _encode_Volume } from "../RecordSyntax-opac/Volume.ta.mjs";
import { CircRecord, _decode_CircRecord, _encode_CircRecord } from "../RecordSyntax-opac/CircRecord.ta.mjs";
// export { CircRecord, _decode_CircRecord, _encode_CircRecord } from "../RecordSyntax-opac/CircRecord.ta.mjs";


/**
 * @summary HoldingsAndCircData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HoldingsAndCircData ::= SEQUENCE {
 *                              -- the following elements are required to display
 *                              -- holdings in conformance with NISO standards.
 *    typeOfRecord       [1]    IMPLICIT InternationalString OPTIONAL,-- LDR 06
 *    encodingLevel      [2]    IMPLICIT InternationalString OPTIONAL, -- LDR 017
 *    format             [3]    IMPLICIT InternationalString OPTIONAL, -- 007
 *                                                                            -- 00-01
 *    receiptAcqStatus   [4]    IMPLICIT InternationalString OPTIONAL, -- 008 06
 *    generalRetention   [5]    IMPLICIT InternationalString OPTIONAL, -- 008 12
 *    completeness       [6]    IMPLICIT InternationalString OPTIONAL, -- 008 16
 *    dateOfReport       [7]    IMPLICIT InternationalString OPTIONAL, -- 008
 *                                                                            -- 26-31
 *    nucCode            [8]    IMPLICIT InternationalString OPTIONAL, -- 852 $a
 *    localLocation      [9]    IMPLICIT InternationalString OPTIONAL, -- 852 $b
 *    shelvingLocation   [10]   IMPLICIT InternationalString OPTIONAL, -- 852 $c
 *    callNumber         [11]   IMPLICIT InternationalString OPTIONAL, -- 852 $h
 *                                                                        -- and $i
 *    shelvingData       [12]   IMPLICIT InternationalString OPTIONAL, -- 852 $j
 *                                                                        -- thru $m
 *    copyNumber         [13]   IMPLICIT InternationalString OPTIONAL, -- 852 $t
 *    publicNote         [14]   IMPLICIT InternationalString OPTIONAL, -- 852 $z
 *    reproductionNote   [15]   IMPLICIT InternationalString OPTIONAL, -- 843
 *    termsUseRepro      [16]   IMPLICIT InternationalString OPTIONAL, -- 845
 *    enumAndChron       [17]   IMPLICIT InternationalString OPTIONAL, -- all 85x,
 *                                                                            --  86x
 *    volumes            [18]   IMPLICIT SEQUENCE OF Volume OPTIONAL, 
 *                                 -- repeats for each volume held
 *    circulationData    [19]   IMPLICIT SEQUENCE OF CircRecord OPTIONAL 
 *                                 -- repeats for each circulating item.
 *                   }
 * ```
 * 
 * @class
 */
export
class HoldingsAndCircData {
    constructor (
        /**
         * @summary `typeOfRecord`.
         * @public
         * @readonly
         */
        readonly typeOfRecord: OPTIONAL<InternationalString>,
        /**
         * @summary `encodingLevel`.
         * @public
         * @readonly
         */
        readonly encodingLevel: OPTIONAL<InternationalString>,
        /**
         * @summary `format`.
         * @public
         * @readonly
         */
        readonly format: OPTIONAL<InternationalString>,
        /**
         * @summary `receiptAcqStatus`.
         * @public
         * @readonly
         */
        readonly receiptAcqStatus: OPTIONAL<InternationalString>,
        /**
         * @summary `generalRetention`.
         * @public
         * @readonly
         */
        readonly generalRetention: OPTIONAL<InternationalString>,
        /**
         * @summary `completeness`.
         * @public
         * @readonly
         */
        readonly completeness: OPTIONAL<InternationalString>,
        /**
         * @summary `dateOfReport`.
         * @public
         * @readonly
         */
        readonly dateOfReport: OPTIONAL<InternationalString>,
        /**
         * @summary `nucCode`.
         * @public
         * @readonly
         */
        readonly nucCode: OPTIONAL<InternationalString>,
        /**
         * @summary `localLocation`.
         * @public
         * @readonly
         */
        readonly localLocation: OPTIONAL<InternationalString>,
        /**
         * @summary `shelvingLocation`.
         * @public
         * @readonly
         */
        readonly shelvingLocation: OPTIONAL<InternationalString>,
        /**
         * @summary `callNumber`.
         * @public
         * @readonly
         */
        readonly callNumber: OPTIONAL<InternationalString>,
        /**
         * @summary `shelvingData`.
         * @public
         * @readonly
         */
        readonly shelvingData: OPTIONAL<InternationalString>,
        /**
         * @summary `copyNumber`.
         * @public
         * @readonly
         */
        readonly copyNumber: OPTIONAL<InternationalString>,
        /**
         * @summary `publicNote`.
         * @public
         * @readonly
         */
        readonly publicNote: OPTIONAL<InternationalString>,
        /**
         * @summary `reproductionNote`.
         * @public
         * @readonly
         */
        readonly reproductionNote: OPTIONAL<InternationalString>,
        /**
         * @summary `termsUseRepro`.
         * @public
         * @readonly
         */
        readonly termsUseRepro: OPTIONAL<InternationalString>,
        /**
         * @summary `enumAndChron`.
         * @public
         * @readonly
         */
        readonly enumAndChron: OPTIONAL<InternationalString>,
        /**
         * @summary `volumes`.
         * @public
         * @readonly
         */
        readonly volumes: OPTIONAL<Volume[]>,
        /**
         * @summary `circulationData`.
         * @public
         * @readonly
         */
        readonly circulationData: OPTIONAL<CircRecord[]>
    ) {}

    /**
     * @summary Restructures an object into a HoldingsAndCircData
     * @description
     * 
     * This takes an `object` and converts it to a `HoldingsAndCircData`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `HoldingsAndCircData`.
     * @returns {HoldingsAndCircData}
     */
    public static _from_object (_o: { [_K in keyof (HoldingsAndCircData)]: (HoldingsAndCircData)[_K] }): HoldingsAndCircData {
        return new HoldingsAndCircData(_o.typeOfRecord, _o.encodingLevel, _o.format, _o.receiptAcqStatus, _o.generalRetention, _o.completeness, _o.dateOfReport, _o.nucCode, _o.localLocation, _o.shelvingLocation, _o.callNumber, _o.shelvingData, _o.copyNumber, _o.publicNote, _o.reproductionNote, _o.termsUseRepro, _o.enumAndChron, _o.volumes, _o.circulationData);
    }


}

/**
 * @summary The Leading Root Component Types of HoldingsAndCircData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_HoldingsAndCircData: $.ComponentSpec[] = [
    /* FIXME: typeOfRecord COULD_NOT_RESOLVE_TYPE_DEF */,
    /* FIXME: encodingLevel COULD_NOT_RESOLVE_TYPE_DEF */,
    /* FIXME: format COULD_NOT_RESOLVE_TYPE_DEF */,
    /* FIXME: receiptAcqStatus COULD_NOT_RESOLVE_TYPE_DEF */,
    /* FIXME: generalRetention COULD_NOT_RESOLVE_TYPE_DEF */,
    /* FIXME: completeness COULD_NOT_RESOLVE_TYPE_DEF */,
    /* FIXME: dateOfReport COULD_NOT_RESOLVE_TYPE_DEF */,
    /* FIXME: nucCode COULD_NOT_RESOLVE_TYPE_DEF */,
    /* FIXME: localLocation COULD_NOT_RESOLVE_TYPE_DEF */,
    /* FIXME: shelvingLocation COULD_NOT_RESOLVE_TYPE_DEF */,
    /* FIXME: callNumber COULD_NOT_RESOLVE_TYPE_DEF */,
    /* FIXME: shelvingData COULD_NOT_RESOLVE_TYPE_DEF */,
    /* FIXME: copyNumber COULD_NOT_RESOLVE_TYPE_DEF */,
    /* FIXME: publicNote COULD_NOT_RESOLVE_TYPE_DEF */,
    /* FIXME: reproductionNote COULD_NOT_RESOLVE_TYPE_DEF */,
    /* FIXME: termsUseRepro COULD_NOT_RESOLVE_TYPE_DEF */,
    /* FIXME: enumAndChron COULD_NOT_RESOLVE_TYPE_DEF */,
    new $.ComponentSpec("volumes", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("circulationData", true, $.hasTag(_TagClass.context, 19))
];

/**
 * @summary The Trailing Root Component Types of HoldingsAndCircData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_HoldingsAndCircData: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of HoldingsAndCircData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_HoldingsAndCircData: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_HoldingsAndCircData: $.ASN1Decoder<HoldingsAndCircData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) HoldingsAndCircData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_HoldingsAndCircData (el: _Element): HoldingsAndCircData {
    if (!_cached_decoder_for_HoldingsAndCircData) { _cached_decoder_for_HoldingsAndCircData = function (el: _Element): HoldingsAndCircData {
    let typeOfRecord: OPTIONAL<InternationalString>;
    let encodingLevel: OPTIONAL<InternationalString>;
    let format: OPTIONAL<InternationalString>;
    let receiptAcqStatus: OPTIONAL<InternationalString>;
    let generalRetention: OPTIONAL<InternationalString>;
    let completeness: OPTIONAL<InternationalString>;
    let dateOfReport: OPTIONAL<InternationalString>;
    let nucCode: OPTIONAL<InternationalString>;
    let localLocation: OPTIONAL<InternationalString>;
    let shelvingLocation: OPTIONAL<InternationalString>;
    let callNumber: OPTIONAL<InternationalString>;
    let shelvingData: OPTIONAL<InternationalString>;
    let copyNumber: OPTIONAL<InternationalString>;
    let publicNote: OPTIONAL<InternationalString>;
    let reproductionNote: OPTIONAL<InternationalString>;
    let termsUseRepro: OPTIONAL<InternationalString>;
    let enumAndChron: OPTIONAL<InternationalString>;
    let volumes: OPTIONAL<Volume[]>;
    let circulationData: OPTIONAL<CircRecord[]>;
    const callbacks: $.DecodingMap = {
        "typeOfRecord": (_el: _Element): void => { typeOfRecord = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "encodingLevel": (_el: _Element): void => { encodingLevel = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "format": (_el: _Element): void => { format = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "receiptAcqStatus": (_el: _Element): void => { receiptAcqStatus = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "generalRetention": (_el: _Element): void => { generalRetention = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "completeness": (_el: _Element): void => { completeness = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "dateOfReport": (_el: _Element): void => { dateOfReport = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "nucCode": (_el: _Element): void => { nucCode = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "localLocation": (_el: _Element): void => { localLocation = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "shelvingLocation": (_el: _Element): void => { shelvingLocation = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "callNumber": (_el: _Element): void => { callNumber = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "shelvingData": (_el: _Element): void => { shelvingData = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "copyNumber": (_el: _Element): void => { copyNumber = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "publicNote": (_el: _Element): void => { publicNote = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "reproductionNote": (_el: _Element): void => { reproductionNote = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "termsUseRepro": (_el: _Element): void => { termsUseRepro = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "enumAndChron": (_el: _Element): void => { enumAndChron = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "volumes": (_el: _Element): void => { volumes = $._decode_implicit<Volume[]>(() => $._decodeSequenceOf<Volume>(() => _decode_Volume))(_el); },
        "circulationData": (_el: _Element): void => { circulationData = $._decode_implicit<CircRecord[]>(() => $._decodeSequenceOf<CircRecord>(() => _decode_CircRecord))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_HoldingsAndCircData,
        _extension_additions_list_spec_for_HoldingsAndCircData,
        _root_component_type_list_2_spec_for_HoldingsAndCircData,
        undefined,
    );
    return new HoldingsAndCircData(
        typeOfRecord,
        encodingLevel,
        format,
        receiptAcqStatus,
        generalRetention,
        completeness,
        dateOfReport,
        nucCode,
        localLocation,
        shelvingLocation,
        callNumber,
        shelvingData,
        copyNumber,
        publicNote,
        reproductionNote,
        termsUseRepro,
        enumAndChron,
        volumes,
        circulationData
    );
}; }
    return _cached_decoder_for_HoldingsAndCircData(el);
}

let _cached_encoder_for_HoldingsAndCircData: $.ASN1Encoder<HoldingsAndCircData> | null = null;

/**
 * @summary Encodes a(n) HoldingsAndCircData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HoldingsAndCircData, encoded as an ASN.1 Element.
 */
export
function _encode_HoldingsAndCircData (value: HoldingsAndCircData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_HoldingsAndCircData) { _cached_encoder_for_HoldingsAndCircData = function (value: HoldingsAndCircData, elGetter: $.ASN1Encoder<HoldingsAndCircData>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.typeOfRecord === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_InternationalString, $.BER)(value.typeOfRecord, $.BER)),
            /* IF_ABSENT  */ ((value.encodingLevel === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_InternationalString, $.BER)(value.encodingLevel, $.BER)),
            /* IF_ABSENT  */ ((value.format === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_InternationalString, $.BER)(value.format, $.BER)),
            /* IF_ABSENT  */ ((value.receiptAcqStatus === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_InternationalString, $.BER)(value.receiptAcqStatus, $.BER)),
            /* IF_ABSENT  */ ((value.generalRetention === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_InternationalString, $.BER)(value.generalRetention, $.BER)),
            /* IF_ABSENT  */ ((value.completeness === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_InternationalString, $.BER)(value.completeness, $.BER)),
            /* IF_ABSENT  */ ((value.dateOfReport === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_InternationalString, $.BER)(value.dateOfReport, $.BER)),
            /* IF_ABSENT  */ ((value.nucCode === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_InternationalString, $.BER)(value.nucCode, $.BER)),
            /* IF_ABSENT  */ ((value.localLocation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_InternationalString, $.BER)(value.localLocation, $.BER)),
            /* IF_ABSENT  */ ((value.shelvingLocation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_InternationalString, $.BER)(value.shelvingLocation, $.BER)),
            /* IF_ABSENT  */ ((value.callNumber === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => _encode_InternationalString, $.BER)(value.callNumber, $.BER)),
            /* IF_ABSENT  */ ((value.shelvingData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => _encode_InternationalString, $.BER)(value.shelvingData, $.BER)),
            /* IF_ABSENT  */ ((value.copyNumber === undefined) ? undefined : $._encode_implicit(_TagClass.context, 13, () => _encode_InternationalString, $.BER)(value.copyNumber, $.BER)),
            /* IF_ABSENT  */ ((value.publicNote === undefined) ? undefined : $._encode_implicit(_TagClass.context, 14, () => _encode_InternationalString, $.BER)(value.publicNote, $.BER)),
            /* IF_ABSENT  */ ((value.reproductionNote === undefined) ? undefined : $._encode_implicit(_TagClass.context, 15, () => _encode_InternationalString, $.BER)(value.reproductionNote, $.BER)),
            /* IF_ABSENT  */ ((value.termsUseRepro === undefined) ? undefined : $._encode_implicit(_TagClass.context, 16, () => _encode_InternationalString, $.BER)(value.termsUseRepro, $.BER)),
            /* IF_ABSENT  */ ((value.enumAndChron === undefined) ? undefined : $._encode_implicit(_TagClass.context, 17, () => _encode_InternationalString, $.BER)(value.enumAndChron, $.BER)),
            /* IF_ABSENT  */ ((value.volumes === undefined) ? undefined : $._encode_implicit(_TagClass.context, 18, () => $._encodeSequenceOf<Volume>(() => _encode_Volume, $.BER), $.BER)(value.volumes, $.BER)),
            /* IF_ABSENT  */ ((value.circulationData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 19, () => $._encodeSequenceOf<CircRecord>(() => _encode_CircRecord, $.BER), $.BER)(value.circulationData, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_HoldingsAndCircData(value, elGetter);
}


/* eslint-enable */
