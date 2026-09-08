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
 * @summary StopDataPathArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StopDataPathArgument ::= SEQUENCE
 * {    ioCrossRefID            IOCrossRefID,
 *     ioRegisterReqID            IORegisterReqID                OPTIONAL,
 *     extensions             CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class StopDataPathArgument {
    constructor (
        /**
         * @summary `ioCrossRefID`.
         * @public
         * @readonly
         */
        readonly ioCrossRefID: IOCrossRefID,
        /**
         * @summary `ioRegisterReqID`.
         * @public
         * @readonly
         */
        readonly ioRegisterReqID: OPTIONAL<IORegisterReqID>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a StopDataPathArgument
     * @description
     * 
     * This takes an `object` and converts it to a `StopDataPathArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `StopDataPathArgument`.
     * @returns {StopDataPathArgument}
     */
    public static _from_object (_o: { [_K in keyof (StopDataPathArgument)]: (StopDataPathArgument)[_K] }): StopDataPathArgument {
        return new StopDataPathArgument(_o.ioCrossRefID, _o.ioRegisterReqID, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of StopDataPathArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_StopDataPathArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("ioCrossRefID", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec("ioRegisterReqID", true, $.hasTag(_TagClass.universal, 4), undefined, undefined),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of StopDataPathArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_StopDataPathArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of StopDataPathArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_StopDataPathArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_StopDataPathArgument: $.ASN1Decoder<StopDataPathArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) StopDataPathArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_StopDataPathArgument (el: _Element): StopDataPathArgument {
    if (!_cached_decoder_for_StopDataPathArgument) { _cached_decoder_for_StopDataPathArgument = function (el: _Element): StopDataPathArgument {
    let ioCrossRefID!: IOCrossRefID;
    let ioRegisterReqID: OPTIONAL<IORegisterReqID>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "ioCrossRefID": (_el: _Element): void => { ioCrossRefID = _decode_IOCrossRefID(_el); },
        "ioRegisterReqID": (_el: _Element): void => { ioRegisterReqID = _decode_IORegisterReqID(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_StopDataPathArgument,
        _extension_additions_list_spec_for_StopDataPathArgument,
        _root_component_type_list_2_spec_for_StopDataPathArgument,
        undefined,
    );
    return new StopDataPathArgument(
        ioCrossRefID,
        ioRegisterReqID,
        extensions
    );
}; }
    return _cached_decoder_for_StopDataPathArgument(el);
}

let _cached_encoder_for_StopDataPathArgument: $.ASN1Encoder<StopDataPathArgument> | null = null;

/**
 * @summary Encodes a(n) StopDataPathArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StopDataPathArgument, encoded as an ASN.1 Element.
 */
export
function _encode_StopDataPathArgument (value: StopDataPathArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_StopDataPathArgument) { _cached_encoder_for_StopDataPathArgument = function (value: StopDataPathArgument, elGetter: $.ASN1Encoder<StopDataPathArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_IOCrossRefID(value.ioCrossRefID, $.BER),
            /* IF_ABSENT  */ ((value.ioRegisterReqID === undefined) ? undefined : _encode_IORegisterReqID(value.ioRegisterReqID, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_StopDataPathArgument(value, elGetter);
}


/* eslint-enable */
