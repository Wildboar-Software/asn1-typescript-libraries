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
import { IOCrossRefID, _decode_IOCrossRefID, _encode_IOCrossRefID } from "../CSTA-device-feature-types/IOCrossRefID.ta.mjs";
// export { IOCrossRefID, _decode_IOCrossRefID, _encode_IOCrossRefID } from "../CSTA-device-feature-types/IOCrossRefID.ta.mjs";
import { IORegisterReqID, _decode_IORegisterReqID, _encode_IORegisterReqID } from "../CSTA-device-feature-types/IORegisterReqID.ta.mjs";
// export { IORegisterReqID, _decode_IORegisterReqID, _encode_IORegisterReqID } from "../CSTA-device-feature-types/IORegisterReqID.ta.mjs";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";
// export { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";


/**
 * @summary DataPathSuspendedArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DataPathSuspendedArgument ::= SEQUENCE
 * {    ioCrossRefID            IOCrossRefID,
 *     ioReqRegisterID            IORegisterReqID                OPTIONAL,
 *     extensions            CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class DataPathSuspendedArgument {
    constructor (
        /**
         * @summary `ioCrossRefID`.
         * @public
         * @readonly
         */
        readonly ioCrossRefID: IOCrossRefID,
        /**
         * @summary `ioReqRegisterID`.
         * @public
         * @readonly
         */
        readonly ioReqRegisterID: OPTIONAL<IORegisterReqID>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a DataPathSuspendedArgument
     * @description
     * 
     * This takes an `object` and converts it to a `DataPathSuspendedArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DataPathSuspendedArgument`.
     * @returns {DataPathSuspendedArgument}
     */
    public static _from_object (_o: { [_K in keyof (DataPathSuspendedArgument)]: (DataPathSuspendedArgument)[_K] }): DataPathSuspendedArgument {
        return new DataPathSuspendedArgument(_o.ioCrossRefID, _o.ioReqRegisterID, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of DataPathSuspendedArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DataPathSuspendedArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("ioCrossRefID", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec("ioReqRegisterID", true, $.hasTag(_TagClass.universal, 4), undefined, undefined),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of DataPathSuspendedArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DataPathSuspendedArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DataPathSuspendedArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DataPathSuspendedArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DataPathSuspendedArgument: $.ASN1Decoder<DataPathSuspendedArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DataPathSuspendedArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DataPathSuspendedArgument (el: _Element): DataPathSuspendedArgument {
    if (!_cached_decoder_for_DataPathSuspendedArgument) { _cached_decoder_for_DataPathSuspendedArgument = function (el: _Element): DataPathSuspendedArgument {
    let ioCrossRefID!: IOCrossRefID;
    let ioReqRegisterID: OPTIONAL<IORegisterReqID>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "ioCrossRefID": (_el: _Element): void => { ioCrossRefID = _decode_IOCrossRefID(_el); },
        "ioReqRegisterID": (_el: _Element): void => { ioReqRegisterID = _decode_IORegisterReqID(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DataPathSuspendedArgument,
        _extension_additions_list_spec_for_DataPathSuspendedArgument,
        _root_component_type_list_2_spec_for_DataPathSuspendedArgument,
        undefined,
    );
    return new DataPathSuspendedArgument(
        ioCrossRefID,
        ioReqRegisterID,
        extensions
    );
}; }
    return _cached_decoder_for_DataPathSuspendedArgument(el);
}

let _cached_encoder_for_DataPathSuspendedArgument: $.ASN1Encoder<DataPathSuspendedArgument> | null = null;

/**
 * @summary Encodes a(n) DataPathSuspendedArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DataPathSuspendedArgument, encoded as an ASN.1 Element.
 */
export
function _encode_DataPathSuspendedArgument (value: DataPathSuspendedArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DataPathSuspendedArgument) { _cached_encoder_for_DataPathSuspendedArgument = function (value: DataPathSuspendedArgument, elGetter: $.ASN1Encoder<DataPathSuspendedArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_IOCrossRefID(value.ioCrossRefID, $.BER),
            /* IF_ABSENT  */ ((value.ioReqRegisterID === undefined) ? undefined : _encode_IORegisterReqID(value.ioReqRegisterID, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DataPathSuspendedArgument(value, elGetter);
}


/* eslint-enable */
