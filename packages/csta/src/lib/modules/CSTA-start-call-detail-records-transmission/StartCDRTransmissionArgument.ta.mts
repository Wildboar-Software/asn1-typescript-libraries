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
import { CDRTransferMode, _enum_for_CDRTransferMode, CDRTransferMode_transferAtEndOfCall /* IMPORTED_LONG_ENUMERATION_ITEM */, transferAtEndOfCall /* IMPORTED_SHORT_ENUMERATION_ITEM */, CDRTransferMode_transferOnRequest /* IMPORTED_LONG_ENUMERATION_ITEM */, transferOnRequest /* IMPORTED_SHORT_ENUMERATION_ITEM */, CDRTransferMode_transferOnThresholdReached /* IMPORTED_LONG_ENUMERATION_ITEM */, transferOnThresholdReached /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_CDRTransferMode, _encode_CDRTransferMode } from "../CSTA-call-detail-record/CDRTransferMode.ta.mjs";
// export { CDRTransferMode, _enum_for_CDRTransferMode, CDRTransferMode_transferAtEndOfCall /* IMPORTED_LONG_ENUMERATION_ITEM */, transferAtEndOfCall /* IMPORTED_SHORT_ENUMERATION_ITEM */, CDRTransferMode_transferOnRequest /* IMPORTED_LONG_ENUMERATION_ITEM */, transferOnRequest /* IMPORTED_SHORT_ENUMERATION_ITEM */, CDRTransferMode_transferOnThresholdReached /* IMPORTED_LONG_ENUMERATION_ITEM */, transferOnThresholdReached /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_CDRTransferMode, _encode_CDRTransferMode } from "../CSTA-call-detail-record/CDRTransferMode.ta.mjs";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";
// export { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";


/**
 * @summary StartCDRTransmissionArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StartCDRTransmissionArgument ::= SEQUENCE
 * {    transferMode            CDRTransferMode,
 *     extensions            CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class StartCDRTransmissionArgument {
    constructor (
        /**
         * @summary `transferMode`.
         * @public
         * @readonly
         */
        readonly transferMode: CDRTransferMode,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a StartCDRTransmissionArgument
     * @description
     * 
     * This takes an `object` and converts it to a `StartCDRTransmissionArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `StartCDRTransmissionArgument`.
     * @returns {StartCDRTransmissionArgument}
     */
    public static _from_object (_o: { [_K in keyof (StartCDRTransmissionArgument)]: (StartCDRTransmissionArgument)[_K] }): StartCDRTransmissionArgument {
        return new StartCDRTransmissionArgument(_o.transferMode, _o.extensions);
    }

        /**
         * @summary The enum used as the type of the component `transferMode`
         * @public
         * @static
         */

    public static _enum_for_transferMode = _enum_for_CDRTransferMode;
}

/**
 * @summary The Leading Root Component Types of StartCDRTransmissionArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_StartCDRTransmissionArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("transferMode", false, $.hasTag(_TagClass.universal, 10), undefined, undefined),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of StartCDRTransmissionArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_StartCDRTransmissionArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of StartCDRTransmissionArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_StartCDRTransmissionArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_StartCDRTransmissionArgument: $.ASN1Decoder<StartCDRTransmissionArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) StartCDRTransmissionArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_StartCDRTransmissionArgument (el: _Element): StartCDRTransmissionArgument {
    if (!_cached_decoder_for_StartCDRTransmissionArgument) { _cached_decoder_for_StartCDRTransmissionArgument = function (el: _Element): StartCDRTransmissionArgument {
    let transferMode!: CDRTransferMode;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "transferMode": (_el: _Element): void => { transferMode = _decode_CDRTransferMode(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_StartCDRTransmissionArgument,
        _extension_additions_list_spec_for_StartCDRTransmissionArgument,
        _root_component_type_list_2_spec_for_StartCDRTransmissionArgument,
        undefined,
    );
    return new StartCDRTransmissionArgument(
        transferMode,
        extensions
    );
}; }
    return _cached_decoder_for_StartCDRTransmissionArgument(el);
}

let _cached_encoder_for_StartCDRTransmissionArgument: $.ASN1Encoder<StartCDRTransmissionArgument> | null = null;

/**
 * @summary Encodes a(n) StartCDRTransmissionArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StartCDRTransmissionArgument, encoded as an ASN.1 Element.
 */
export
function _encode_StartCDRTransmissionArgument (value: StartCDRTransmissionArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_StartCDRTransmissionArgument) { _cached_encoder_for_StartCDRTransmissionArgument = function (value: StartCDRTransmissionArgument, elGetter: $.ASN1Encoder<StartCDRTransmissionArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_CDRTransferMode(value.transferMode, $.BER),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_StartCDRTransmissionArgument(value, elGetter);
}


/* eslint-enable */
