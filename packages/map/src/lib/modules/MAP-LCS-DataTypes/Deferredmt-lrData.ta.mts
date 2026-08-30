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
import { DeferredLocationEventType, DeferredLocationEventType_msAvailable /* IMPORTED_LONG_NAMED_BIT */, msAvailable /* IMPORTED_SHORT_NAMED_BIT */, DeferredLocationEventType_enteringIntoArea /* IMPORTED_LONG_NAMED_BIT */, enteringIntoArea /* IMPORTED_SHORT_NAMED_BIT */, DeferredLocationEventType_leavingFromArea /* IMPORTED_LONG_NAMED_BIT */, leavingFromArea /* IMPORTED_SHORT_NAMED_BIT */, DeferredLocationEventType_beingInsideArea /* IMPORTED_LONG_NAMED_BIT */, beingInsideArea /* IMPORTED_SHORT_NAMED_BIT */, DeferredLocationEventType_periodicLDR /* IMPORTED_LONG_NAMED_BIT */, periodicLDR /* IMPORTED_SHORT_NAMED_BIT */, _decode_DeferredLocationEventType, _encode_DeferredLocationEventType } from "../MAP-LCS-DataTypes/DeferredLocationEventType.ta.mjs";
// export { DeferredLocationEventType, DeferredLocationEventType_msAvailable /* IMPORTED_LONG_NAMED_BIT */, msAvailable /* IMPORTED_SHORT_NAMED_BIT */, DeferredLocationEventType_enteringIntoArea /* IMPORTED_LONG_NAMED_BIT */, enteringIntoArea /* IMPORTED_SHORT_NAMED_BIT */, DeferredLocationEventType_leavingFromArea /* IMPORTED_LONG_NAMED_BIT */, leavingFromArea /* IMPORTED_SHORT_NAMED_BIT */, DeferredLocationEventType_beingInsideArea /* IMPORTED_LONG_NAMED_BIT */, beingInsideArea /* IMPORTED_SHORT_NAMED_BIT */, DeferredLocationEventType_periodicLDR /* IMPORTED_LONG_NAMED_BIT */, periodicLDR /* IMPORTED_SHORT_NAMED_BIT */, _decode_DeferredLocationEventType, _encode_DeferredLocationEventType } from "../MAP-LCS-DataTypes/DeferredLocationEventType.ta.mjs";
import { TerminationCause, _enum_for_TerminationCause, TerminationCause_normal /* IMPORTED_LONG_ENUMERATION_ITEM */, normal /* IMPORTED_SHORT_ENUMERATION_ITEM */, TerminationCause_errorundefined /* IMPORTED_LONG_ENUMERATION_ITEM */, errorundefined /* IMPORTED_SHORT_ENUMERATION_ITEM */, TerminationCause_internalTimeout /* IMPORTED_LONG_ENUMERATION_ITEM */, internalTimeout /* IMPORTED_SHORT_ENUMERATION_ITEM */, TerminationCause_congestion /* IMPORTED_LONG_ENUMERATION_ITEM */, congestion /* IMPORTED_SHORT_ENUMERATION_ITEM */, TerminationCause_mt_lrRestart /* IMPORTED_LONG_ENUMERATION_ITEM */, mt_lrRestart /* IMPORTED_SHORT_ENUMERATION_ITEM */, TerminationCause_privacyViolation /* IMPORTED_LONG_ENUMERATION_ITEM */, privacyViolation /* IMPORTED_SHORT_ENUMERATION_ITEM */, TerminationCause_shapeOfLocationEstimateNotSupported /* IMPORTED_LONG_ENUMERATION_ITEM */, shapeOfLocationEstimateNotSupported /* IMPORTED_SHORT_ENUMERATION_ITEM */, TerminationCause_subscriberTermination /* IMPORTED_LONG_ENUMERATION_ITEM */, subscriberTermination /* IMPORTED_SHORT_ENUMERATION_ITEM */, TerminationCause_uETermination /* IMPORTED_LONG_ENUMERATION_ITEM */, uETermination /* IMPORTED_SHORT_ENUMERATION_ITEM */, TerminationCause_networkTermination /* IMPORTED_LONG_ENUMERATION_ITEM */, networkTermination /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_TerminationCause, _encode_TerminationCause } from "../MAP-LCS-DataTypes/TerminationCause.ta.mjs";
// export { TerminationCause, _enum_for_TerminationCause, TerminationCause_normal /* IMPORTED_LONG_ENUMERATION_ITEM */, normal /* IMPORTED_SHORT_ENUMERATION_ITEM */, TerminationCause_errorundefined /* IMPORTED_LONG_ENUMERATION_ITEM */, errorundefined /* IMPORTED_SHORT_ENUMERATION_ITEM */, TerminationCause_internalTimeout /* IMPORTED_LONG_ENUMERATION_ITEM */, internalTimeout /* IMPORTED_SHORT_ENUMERATION_ITEM */, TerminationCause_congestion /* IMPORTED_LONG_ENUMERATION_ITEM */, congestion /* IMPORTED_SHORT_ENUMERATION_ITEM */, TerminationCause_mt_lrRestart /* IMPORTED_LONG_ENUMERATION_ITEM */, mt_lrRestart /* IMPORTED_SHORT_ENUMERATION_ITEM */, TerminationCause_privacyViolation /* IMPORTED_LONG_ENUMERATION_ITEM */, privacyViolation /* IMPORTED_SHORT_ENUMERATION_ITEM */, TerminationCause_shapeOfLocationEstimateNotSupported /* IMPORTED_LONG_ENUMERATION_ITEM */, shapeOfLocationEstimateNotSupported /* IMPORTED_SHORT_ENUMERATION_ITEM */, TerminationCause_subscriberTermination /* IMPORTED_LONG_ENUMERATION_ITEM */, subscriberTermination /* IMPORTED_SHORT_ENUMERATION_ITEM */, TerminationCause_uETermination /* IMPORTED_LONG_ENUMERATION_ITEM */, uETermination /* IMPORTED_SHORT_ENUMERATION_ITEM */, TerminationCause_networkTermination /* IMPORTED_LONG_ENUMERATION_ITEM */, networkTermination /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_TerminationCause, _encode_TerminationCause } from "../MAP-LCS-DataTypes/TerminationCause.ta.mjs";
import { LCSLocationInfo, _decode_LCSLocationInfo, _encode_LCSLocationInfo } from "../MAP-LCS-DataTypes/LCSLocationInfo.ta.mjs";
// export { LCSLocationInfo, _decode_LCSLocationInfo, _encode_LCSLocationInfo } from "../MAP-LCS-DataTypes/LCSLocationInfo.ta.mjs";


/**
 * @summary Deferredmt_lrData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Deferredmt-lrData ::= SEQUENCE {
 *     deferredLocationEventType    DeferredLocationEventType,
 *     terminationCause    [0] TerminationCause    OPTIONAL,
 *     lcsLocationInfo    [1] LCSLocationInfo    OPTIONAL,
 *     ...}
 * ```
 * 
 * @class
 */
export
class Deferredmt_lrData {
    constructor (
        /**
         * @summary `deferredLocationEventType`.
         * @public
         * @readonly
         */
        readonly deferredLocationEventType: DeferredLocationEventType,
        /**
         * @summary `terminationCause`.
         * @public
         * @readonly
         */
        readonly terminationCause: OPTIONAL<TerminationCause>,
        /**
         * @summary `lcsLocationInfo`.
         * @public
         * @readonly
         */
        readonly lcsLocationInfo: OPTIONAL<LCSLocationInfo>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a Deferredmt_lrData
     * @description
     * 
     * This takes an `object` and converts it to a `Deferredmt_lrData`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Deferredmt_lrData`.
     * @returns {Deferredmt_lrData}
     */
    public static _from_object (_o: { [_K in keyof (Deferredmt_lrData)]: (Deferredmt_lrData)[_K] }): Deferredmt_lrData {
        return new Deferredmt_lrData(_o.deferredLocationEventType, _o.terminationCause, _o.lcsLocationInfo, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `terminationCause`
         * @public
         * @static
         */

    public static _enum_for_terminationCause = _enum_for_TerminationCause;
}

/**
 * @summary The Leading Root Component Types of Deferredmt_lrData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Deferredmt_lrData: $.ComponentSpec[] = [
    new $.ComponentSpec("deferredLocationEventType", false, $.hasTag(_TagClass.universal, 3), undefined, undefined),
    new $.ComponentSpec("terminationCause", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("lcsLocationInfo", true, $.hasTag(_TagClass.context, 1), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of Deferredmt_lrData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Deferredmt_lrData: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Deferredmt_lrData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Deferredmt_lrData: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Deferredmt_lrData: $.ASN1Decoder<Deferredmt_lrData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Deferredmt_lrData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Deferredmt_lrData (el: _Element): Deferredmt_lrData {
    if (!_cached_decoder_for_Deferredmt_lrData) { _cached_decoder_for_Deferredmt_lrData = function (el: _Element): Deferredmt_lrData {
    let deferredLocationEventType!: DeferredLocationEventType;
    let terminationCause: OPTIONAL<TerminationCause>;
    let lcsLocationInfo: OPTIONAL<LCSLocationInfo>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "deferredLocationEventType": (_el: _Element): void => { deferredLocationEventType = _decode_DeferredLocationEventType(_el); },
        "terminationCause": (_el: _Element): void => { terminationCause = $._decode_implicit<TerminationCause>(() => _decode_TerminationCause)(_el); },
        "lcsLocationInfo": (_el: _Element): void => { lcsLocationInfo = $._decode_implicit<LCSLocationInfo>(() => _decode_LCSLocationInfo)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Deferredmt_lrData,
        _extension_additions_list_spec_for_Deferredmt_lrData,
        _root_component_type_list_2_spec_for_Deferredmt_lrData,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new Deferredmt_lrData(
        deferredLocationEventType,
        terminationCause,
        lcsLocationInfo,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_Deferredmt_lrData(el);
}

let _cached_encoder_for_Deferredmt_lrData: $.ASN1Encoder<Deferredmt_lrData> | null = null;

/**
 * @summary Encodes a(n) Deferredmt_lrData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Deferredmt_lrData, encoded as an ASN.1 Element.
 */
export
function _encode_Deferredmt_lrData (value: Deferredmt_lrData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Deferredmt_lrData) { _cached_encoder_for_Deferredmt_lrData = function (value: Deferredmt_lrData, elGetter: $.ASN1Encoder<Deferredmt_lrData>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_DeferredLocationEventType(value.deferredLocationEventType, $.BER),
            /* IF_ABSENT  */ ((value.terminationCause === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_TerminationCause, $.BER)(value.terminationCause, $.BER)),
            /* IF_ABSENT  */ ((value.lcsLocationInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_LCSLocationInfo, $.BER)(value.lcsLocationInfo, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Deferredmt_lrData(value, elGetter);
}


/* eslint-enable */
