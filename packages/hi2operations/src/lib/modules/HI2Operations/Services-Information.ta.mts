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
import { ISUP_parameters, _decode_ISUP_parameters, _encode_ISUP_parameters } from "../HI2Operations/ISUP-parameters.ta.mjs";
// export { ISUP_parameters, _decode_ISUP_parameters, _encode_ISUP_parameters } from "../HI2Operations/ISUP-parameters.ta.mjs";
import { DSS1_parameters_codeset_0, _decode_DSS1_parameters_codeset_0, _encode_DSS1_parameters_codeset_0 } from "../HI2Operations/DSS1-parameters-codeset-0.ta.mjs";
// export { DSS1_parameters_codeset_0, _decode_DSS1_parameters_codeset_0, _encode_DSS1_parameters_codeset_0 } from "../HI2Operations/DSS1-parameters-codeset-0.ta.mjs";
import { MAP_parameters, _decode_MAP_parameters, _encode_MAP_parameters } from "../HI2Operations/MAP-parameters.ta.mjs";
// export { MAP_parameters, _decode_MAP_parameters, _encode_MAP_parameters } from "../HI2Operations/MAP-parameters.ta.mjs";


/**
 * @summary Services_Information
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Services-Information ::= SEQUENCE
 * {
 *     iSUP-parameters                [1] ISUP-parameters OPTIONAL,
 *     dSS1-parameters-codeset-0    [2] DSS1-parameters-codeset-0 OPTIONAL,
 *     ...,
 *     mAP-parameters                [3] MAP-parameters OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class Services_Information {
    constructor (
        /**
         * @summary `iSUP_parameters`.
         * @public
         * @readonly
         */
        readonly iSUP_parameters: OPTIONAL<ISUP_parameters>,
        /**
         * @summary `dSS1_parameters_codeset_0`.
         * @public
         * @readonly
         */
        readonly dSS1_parameters_codeset_0: OPTIONAL<DSS1_parameters_codeset_0>,
        /**
         * @summary `mAP_parameters`.
         * @public
         * @readonly
         */
        readonly mAP_parameters: OPTIONAL<MAP_parameters>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a Services_Information
     * @description
     * 
     * This takes an `object` and converts it to a `Services_Information`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Services_Information`.
     * @returns {Services_Information}
     */
    public static _from_object (_o: { [_K in keyof (Services_Information)]: (Services_Information)[_K] }): Services_Information {
        return new Services_Information(_o.iSUP_parameters, _o.dSS1_parameters_codeset_0, _o.mAP_parameters, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of Services_Information
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Services_Information: $.ComponentSpec[] = [
    new $.ComponentSpec("iSUP-parameters", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("dSS1-parameters-codeset-0", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of Services_Information
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Services_Information: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Services_Information
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Services_Information: $.ComponentSpec[] = [
    new $.ComponentSpec("mAP-parameters", true, $.hasTag(_TagClass.context, 3))
];

let _cached_decoder_for_Services_Information: $.ASN1Decoder<Services_Information> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Services_Information
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Services_Information (el: _Element): Services_Information {
    if (!_cached_decoder_for_Services_Information) { _cached_decoder_for_Services_Information = function (el: _Element): Services_Information {
    let iSUP_parameters: OPTIONAL<ISUP_parameters>;
    let dSS1_parameters_codeset_0: OPTIONAL<DSS1_parameters_codeset_0>;
    let mAP_parameters: OPTIONAL<MAP_parameters>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "iSUP-parameters": (_el: _Element): void => { iSUP_parameters = $._decode_implicit<ISUP_parameters>(() => _decode_ISUP_parameters)(_el); },
        "dSS1-parameters-codeset-0": (_el: _Element): void => { dSS1_parameters_codeset_0 = $._decode_implicit<DSS1_parameters_codeset_0>(() => _decode_DSS1_parameters_codeset_0)(_el); },
        "mAP-parameters": (_el: _Element): void => { mAP_parameters = $._decode_implicit<MAP_parameters>(() => _decode_MAP_parameters)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Services_Information,
        _extension_additions_list_spec_for_Services_Information,
        _root_component_type_list_2_spec_for_Services_Information,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new Services_Information(
        iSUP_parameters,
        dSS1_parameters_codeset_0,
        mAP_parameters,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_Services_Information(el);
}

let _cached_encoder_for_Services_Information: $.ASN1Encoder<Services_Information> | null = null;

/**
 * @summary Encodes a(n) Services_Information into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Services_Information, encoded as an ASN.1 Element.
 */
export
function _encode_Services_Information (value: Services_Information, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Services_Information) { _cached_encoder_for_Services_Information = function (value: Services_Information, elGetter: $.ASN1Encoder<Services_Information>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.iSUP_parameters === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_ISUP_parameters, $.BER)(value.iSUP_parameters, $.BER)),
            /* IF_ABSENT  */ ((value.dSS1_parameters_codeset_0 === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_DSS1_parameters_codeset_0, $.BER)(value.dSS1_parameters_codeset_0, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.mAP_parameters === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_MAP_parameters, $.BER)(value.mAP_parameters, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Services_Information(value, elGetter);
}


/* eslint-enable */
