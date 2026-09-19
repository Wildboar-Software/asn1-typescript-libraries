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
import { ExternalChargingASN, _decode_ExternalChargingASN, _encode_ExternalChargingASN } from "../TS33128Payloads/ExternalChargingASN.ta.mjs";
// export { ExternalChargingASN, _decode_ExternalChargingASN, _encode_ExternalChargingASN } from "../TS33128Payloads/ExternalChargingASN.ta.mjs";


/**
 * @summary TranslatedChargingData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TranslatedChargingData ::= SEQUENCE
 * {
 *     releaseID           [1] INTEGER (0..7),
 *     versonID            [2] INTEGER (0..31),
 *     specificationNumber [3] INTEGER (0..31),
 *     releaseIDExtension  [4] INTEGER (0..255) OPTIONAL,
 *     recordData          [5] ExternalChargingASN
 * }
 * ```
 * 
 * @class
 */
export
class TranslatedChargingData {
    constructor (
        /**
         * @summary `releaseID`.
         * @public
         * @readonly
         */
        readonly releaseID: INTEGER,
        /**
         * @summary `versonID`.
         * @public
         * @readonly
         */
        readonly versonID: INTEGER,
        /**
         * @summary `specificationNumber`.
         * @public
         * @readonly
         */
        readonly specificationNumber: INTEGER,
        /**
         * @summary `releaseIDExtension`.
         * @public
         * @readonly
         */
        readonly releaseIDExtension: OPTIONAL<INTEGER>,
        /**
         * @summary `recordData`.
         * @public
         * @readonly
         */
        readonly recordData: ExternalChargingASN
    ) {}

    /**
     * @summary Restructures an object into a TranslatedChargingData
     * @description
     * 
     * This takes an `object` and converts it to a `TranslatedChargingData`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TranslatedChargingData`.
     * @returns {TranslatedChargingData}
     */
    public static _from_object (_o: { [_K in keyof (TranslatedChargingData)]: (TranslatedChargingData)[_K] }): TranslatedChargingData {
        return new TranslatedChargingData(_o.releaseID, _o.versonID, _o.specificationNumber, _o.releaseIDExtension, _o.recordData);
    }


}

/**
 * @summary The Leading Root Component Types of TranslatedChargingData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TranslatedChargingData: $.ComponentSpec[] = [
    new $.ComponentSpec("releaseID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("versonID", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("specificationNumber", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("releaseIDExtension", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("recordData", false, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of TranslatedChargingData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TranslatedChargingData: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TranslatedChargingData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TranslatedChargingData: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TranslatedChargingData: $.ASN1Decoder<TranslatedChargingData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TranslatedChargingData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TranslatedChargingData (el: _Element): TranslatedChargingData {
    if (!_cached_decoder_for_TranslatedChargingData) { _cached_decoder_for_TranslatedChargingData = function (el: _Element): TranslatedChargingData {
    let releaseID!: INTEGER;
    let versonID!: INTEGER;
    let specificationNumber!: INTEGER;
    let releaseIDExtension: OPTIONAL<INTEGER>;
    let recordData!: ExternalChargingASN;
    const callbacks: $.DecodingMap = {
        "releaseID": (_el: _Element): void => { releaseID = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "versonID": (_el: _Element): void => { versonID = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "specificationNumber": (_el: _Element): void => { specificationNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "releaseIDExtension": (_el: _Element): void => { releaseIDExtension = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "recordData": (_el: _Element): void => { recordData = $._decode_implicit<ExternalChargingASN>(() => _decode_ExternalChargingASN)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TranslatedChargingData,
        _extension_additions_list_spec_for_TranslatedChargingData,
        _root_component_type_list_2_spec_for_TranslatedChargingData,
        undefined,
    );
    return new TranslatedChargingData(
        releaseID,
        versonID,
        specificationNumber,
        releaseIDExtension,
        recordData
    );
}; }
    return _cached_decoder_for_TranslatedChargingData(el);
}

let _cached_encoder_for_TranslatedChargingData: $.ASN1Encoder<TranslatedChargingData> | null = null;

/**
 * @summary Encodes a(n) TranslatedChargingData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TranslatedChargingData, encoded as an ASN.1 Element.
 */
export
function _encode_TranslatedChargingData (value: TranslatedChargingData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TranslatedChargingData) { _cached_encoder_for_TranslatedChargingData = function (value: TranslatedChargingData, elGetter: $.ASN1Encoder<TranslatedChargingData>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.releaseID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.versonID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeInteger, $.BER)(value.specificationNumber, $.BER),
            /* IF_ABSENT  */ ((value.releaseIDExtension === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeInteger, $.BER)(value.releaseIDExtension, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => _encode_ExternalChargingASN, $.BER)(value.recordData, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TranslatedChargingData(value, elGetter);
}


/* eslint-enable */
