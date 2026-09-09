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
import { RequestedInformationList, _decode_RequestedInformationList, _encode_RequestedInformationList } from "../Core-INAP-CS1-DataTypes/RequestedInformationList.ta.mjs";
// export { RequestedInformationList, _decode_RequestedInformationList, _encode_RequestedInformationList } from "../Core-INAP-CS1-DataTypes/RequestedInformationList.ta.mjs";
import { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../Core-INAP-CS1-DataTypes/ExtensionField.ta.mjs";
// export { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../Core-INAP-CS1-DataTypes/ExtensionField.ta.mjs";


/**
 * @summary CallInformationReportArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallInformationReportArg ::= SEQUENCE {
 *      requestedInformationList     [0] RequestedInformationList,     
 *      extensions     [2] SEQUENCE SIZE(1..numOfExtensions) OF ExtensionField     OPTIONAL
 * --  ...
 *      }
 * ```
 * 
 * @class
 */
export
class CallInformationReportArg {
    constructor (
        /**
         * @summary `requestedInformationList`.
         * @public
         * @readonly
         */
        readonly requestedInformationList: RequestedInformationList,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<ExtensionField[]>
    ) {}

    /**
     * @summary Restructures an object into a CallInformationReportArg
     * @description
     * 
     * This takes an `object` and converts it to a `CallInformationReportArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CallInformationReportArg`.
     * @returns {CallInformationReportArg}
     */
    public static _from_object (_o: { [_K in keyof (CallInformationReportArg)]: (CallInformationReportArg)[_K] }): CallInformationReportArg {
        return new CallInformationReportArg(_o.requestedInformationList, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of CallInformationReportArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CallInformationReportArg: $.ComponentSpec[] = [
    new $.ComponentSpec("requestedInformationList", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 2), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of CallInformationReportArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CallInformationReportArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CallInformationReportArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CallInformationReportArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CallInformationReportArg: $.ASN1Decoder<CallInformationReportArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CallInformationReportArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CallInformationReportArg (el: _Element): CallInformationReportArg {
    if (!_cached_decoder_for_CallInformationReportArg) { _cached_decoder_for_CallInformationReportArg = function (el: _Element): CallInformationReportArg {
    let requestedInformationList!: RequestedInformationList;
    let extensions: OPTIONAL<ExtensionField[]>;
    const callbacks: $.DecodingMap = {
        "requestedInformationList": (_el: _Element): void => { requestedInformationList = $._decode_implicit<RequestedInformationList>(() => _decode_RequestedInformationList)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<ExtensionField[]>(() => $._decodeSequenceOf<ExtensionField>(() => _decode_ExtensionField))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CallInformationReportArg,
        _extension_additions_list_spec_for_CallInformationReportArg,
        _root_component_type_list_2_spec_for_CallInformationReportArg,
        undefined,
    );
    return new CallInformationReportArg(
        requestedInformationList,
        extensions
    );
}; }
    return _cached_decoder_for_CallInformationReportArg(el);
}

let _cached_encoder_for_CallInformationReportArg: $.ASN1Encoder<CallInformationReportArg> | null = null;

/**
 * @summary Encodes a(n) CallInformationReportArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallInformationReportArg, encoded as an ASN.1 Element.
 */
export
function _encode_CallInformationReportArg (value: CallInformationReportArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CallInformationReportArg) { _cached_encoder_for_CallInformationReportArg = function (value: CallInformationReportArg, elGetter: $.ASN1Encoder<CallInformationReportArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_RequestedInformationList, $.BER)(value.requestedInformationList, $.BER),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<ExtensionField>(() => _encode_ExtensionField, $.BER), $.BER)(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CallInformationReportArg(value, elGetter);
}


/* eslint-enable */
