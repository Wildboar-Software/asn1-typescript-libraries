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
import { DcollCrossRefID, _decode_DcollCrossRefID, _encode_DcollCrossRefID } from "../CSTA-data-collection/DcollCrossRefID.ta.mjs";
// export { DcollCrossRefID, _decode_DcollCrossRefID, _encode_DcollCrossRefID } from "../CSTA-data-collection/DcollCrossRefID.ta.mjs";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";
// export { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";


/**
 * @summary DataCollectionResumedArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DataCollectionResumedArgument ::= SEQUENCE
 * {    dcollCrossRefID            DcollCrossRefID,
 *     extensions             CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class DataCollectionResumedArgument {
    constructor (
        /**
         * @summary `dcollCrossRefID`.
         * @public
         * @readonly
         */
        readonly dcollCrossRefID: DcollCrossRefID,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a DataCollectionResumedArgument
     * @description
     * 
     * This takes an `object` and converts it to a `DataCollectionResumedArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DataCollectionResumedArgument`.
     * @returns {DataCollectionResumedArgument}
     */
    public static _from_object (_o: { [_K in keyof (DataCollectionResumedArgument)]: (DataCollectionResumedArgument)[_K] }): DataCollectionResumedArgument {
        return new DataCollectionResumedArgument(_o.dcollCrossRefID, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of DataCollectionResumedArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DataCollectionResumedArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("dcollCrossRefID", false, $.hasTag(_TagClass.universal, 4), undefined, undefined),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of DataCollectionResumedArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DataCollectionResumedArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DataCollectionResumedArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DataCollectionResumedArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DataCollectionResumedArgument: $.ASN1Decoder<DataCollectionResumedArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DataCollectionResumedArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DataCollectionResumedArgument (el: _Element): DataCollectionResumedArgument {
    if (!_cached_decoder_for_DataCollectionResumedArgument) { _cached_decoder_for_DataCollectionResumedArgument = function (el: _Element): DataCollectionResumedArgument {
    let dcollCrossRefID!: DcollCrossRefID;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "dcollCrossRefID": (_el: _Element): void => { dcollCrossRefID = _decode_DcollCrossRefID(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DataCollectionResumedArgument,
        _extension_additions_list_spec_for_DataCollectionResumedArgument,
        _root_component_type_list_2_spec_for_DataCollectionResumedArgument,
        undefined,
    );
    return new DataCollectionResumedArgument(
        dcollCrossRefID,
        extensions
    );
}; }
    return _cached_decoder_for_DataCollectionResumedArgument(el);
}

let _cached_encoder_for_DataCollectionResumedArgument: $.ASN1Encoder<DataCollectionResumedArgument> | null = null;

/**
 * @summary Encodes a(n) DataCollectionResumedArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DataCollectionResumedArgument, encoded as an ASN.1 Element.
 */
export
function _encode_DataCollectionResumedArgument (value: DataCollectionResumedArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DataCollectionResumedArgument) { _cached_encoder_for_DataCollectionResumedArgument = function (value: DataCollectionResumedArgument, elGetter: $.ASN1Encoder<DataCollectionResumedArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_DcollCrossRefID(value.dcollCrossRefID, $.BER),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DataCollectionResumedArgument(value, elGetter);
}


/* eslint-enable */
