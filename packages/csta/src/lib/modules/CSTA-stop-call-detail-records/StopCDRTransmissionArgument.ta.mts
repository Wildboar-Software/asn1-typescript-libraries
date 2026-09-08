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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { CDRCrossRefID, _decode_CDRCrossRefID, _encode_CDRCrossRefID } from "../CSTA-call-detail-record/CDRCrossRefID.ta.mjs";
// export { CDRCrossRefID, _decode_CDRCrossRefID, _encode_CDRCrossRefID } from "../CSTA-call-detail-record/CDRCrossRefID.ta.mjs";
import { CDRTermReason, _enum_for_CDRTermReason, CDRTermReason_endOfDataDetected /* IMPORTED_LONG_ENUMERATION_ITEM */, endOfDataDetected /* IMPORTED_SHORT_ENUMERATION_ITEM */, CDRTermReason_errorDetected /* IMPORTED_LONG_ENUMERATION_ITEM */, errorDetected /* IMPORTED_SHORT_ENUMERATION_ITEM */, CDRTermReason_thresholdReached /* IMPORTED_LONG_ENUMERATION_ITEM */, thresholdReached /* IMPORTED_SHORT_ENUMERATION_ITEM */, CDRTermReason_other /* IMPORTED_LONG_ENUMERATION_ITEM */, other /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_CDRTermReason, _encode_CDRTermReason } from "../CSTA-call-detail-record/CDRTermReason.ta.mjs";
// export { CDRTermReason, _enum_for_CDRTermReason, CDRTermReason_endOfDataDetected /* IMPORTED_LONG_ENUMERATION_ITEM */, endOfDataDetected /* IMPORTED_SHORT_ENUMERATION_ITEM */, CDRTermReason_errorDetected /* IMPORTED_LONG_ENUMERATION_ITEM */, errorDetected /* IMPORTED_SHORT_ENUMERATION_ITEM */, CDRTermReason_thresholdReached /* IMPORTED_LONG_ENUMERATION_ITEM */, thresholdReached /* IMPORTED_SHORT_ENUMERATION_ITEM */, CDRTermReason_other /* IMPORTED_LONG_ENUMERATION_ITEM */, other /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_CDRTermReason, _encode_CDRTermReason } from "../CSTA-call-detail-record/CDRTermReason.ta.mjs";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";
// export { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";


/**
 * @summary StopCDRTransmissionArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StopCDRTransmissionArgument ::= SEQUENCE
 * {    cdrCrossRefID            CDRCrossRefID,           --corrected 06/2001
 *     cdrTermReason            CDRTermReason                OPTIONAL,
 *     extensions            CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class StopCDRTransmissionArgument {
    constructor (
        /**
         * @summary `cdrCrossRefID`.
         * @public
         * @readonly
         */
        readonly cdrCrossRefID: CDRCrossRefID,
        /**
         * @summary `cdrTermReason`.
         * @public
         * @readonly
         */
        readonly cdrTermReason: OPTIONAL<CDRTermReason>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a StopCDRTransmissionArgument
     * @description
     * 
     * This takes an `object` and converts it to a `StopCDRTransmissionArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `StopCDRTransmissionArgument`.
     * @returns {StopCDRTransmissionArgument}
     */
    public static _from_object (_o: { [_K in keyof (StopCDRTransmissionArgument)]: (StopCDRTransmissionArgument)[_K] }): StopCDRTransmissionArgument {
        return new StopCDRTransmissionArgument(_o.cdrCrossRefID, _o.cdrTermReason, _o.extensions);
    }

        /**
         * @summary The enum used as the type of the component `cdrTermReason`
         * @public
         * @static
         */

    public static _enum_for_cdrTermReason = _enum_for_CDRTermReason;
}

/**
 * @summary The Leading Root Component Types of StopCDRTransmissionArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_StopCDRTransmissionArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("cdrCrossRefID", false, $.hasTag(_TagClass.universal, 4), undefined, undefined),
    new $.ComponentSpec("cdrTermReason", true, $.hasTag(_TagClass.universal, 10), undefined, undefined),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of StopCDRTransmissionArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_StopCDRTransmissionArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of StopCDRTransmissionArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_StopCDRTransmissionArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_StopCDRTransmissionArgument: $.ASN1Decoder<StopCDRTransmissionArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) StopCDRTransmissionArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_StopCDRTransmissionArgument (el: _Element): StopCDRTransmissionArgument {
    if (!_cached_decoder_for_StopCDRTransmissionArgument) { _cached_decoder_for_StopCDRTransmissionArgument = function (el: _Element): StopCDRTransmissionArgument {
    let cdrCrossRefID!: CDRCrossRefID;
    let cdrTermReason: OPTIONAL<CDRTermReason>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "cdrCrossRefID": (_el: _Element): void => { cdrCrossRefID = _decode_CDRCrossRefID(_el); },
        "cdrTermReason": (_el: _Element): void => { cdrTermReason = _decode_CDRTermReason(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_StopCDRTransmissionArgument,
        _extension_additions_list_spec_for_StopCDRTransmissionArgument,
        _root_component_type_list_2_spec_for_StopCDRTransmissionArgument,
        undefined,
    );
    return new StopCDRTransmissionArgument(
        cdrCrossRefID,
        cdrTermReason,
        extensions
    );
}; }
    return _cached_decoder_for_StopCDRTransmissionArgument(el);
}

let _cached_encoder_for_StopCDRTransmissionArgument: $.ASN1Encoder<StopCDRTransmissionArgument> | null = null;

/**
 * @summary Encodes a(n) StopCDRTransmissionArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StopCDRTransmissionArgument, encoded as an ASN.1 Element.
 */
export
function _encode_StopCDRTransmissionArgument (value: StopCDRTransmissionArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_StopCDRTransmissionArgument) { _cached_encoder_for_StopCDRTransmissionArgument = function (value: StopCDRTransmissionArgument, elGetter: $.ASN1Encoder<StopCDRTransmissionArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_CDRCrossRefID(value.cdrCrossRefID, $.BER),
            /* IF_ABSENT  */ ((value.cdrTermReason === undefined) ? undefined : _encode_CDRTermReason(value.cdrTermReason, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_StopCDRTransmissionArgument(value, elGetter);
}


/* eslint-enable */
