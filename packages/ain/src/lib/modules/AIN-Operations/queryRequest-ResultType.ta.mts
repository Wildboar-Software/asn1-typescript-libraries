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
import { Amp1, _decode_Amp1, _encode_Amp1 } from "../AIN-Parameters/Amp1.ta.mjs";
// export { Amp1, _decode_Amp1, _encode_Amp1 } from "../AIN-Parameters/Amp1.ta.mjs";
import { Amp2, _decode_Amp2, _encode_Amp2 } from "../AIN-Parameters/Amp2.ta.mjs";
// export { Amp2, _decode_Amp2, _encode_Amp2 } from "../AIN-Parameters/Amp2.ta.mjs";
import { ExtensionParameter, _decode_ExtensionParameter, _encode_ExtensionParameter } from "../AIN-Parameters/ExtensionParameter.ta.mjs";
// export { ExtensionParameter, _decode_ExtensionParameter, _encode_ExtensionParameter } from "../AIN-Parameters/ExtensionParameter.ta.mjs";
import { InfoProvided, _decode_InfoProvided, _encode_InfoProvided } from "../AIN-Parameters/InfoProvided.ta.mjs";
// export { InfoProvided, _decode_InfoProvided, _encode_InfoProvided } from "../AIN-Parameters/InfoProvided.ta.mjs";


/**
 * @summary queryRequest_ResultType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * queryRequest-ResultType ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class queryRequest_ResultType {
    constructor (
        /**
         * @summary `amp1`.
         * @public
         * @readonly
         */
        readonly amp1: OPTIONAL<Amp1>,
        /**
         * @summary `amp2`.
         * @public
         * @readonly
         */
        readonly amp2: OPTIONAL<Amp2>,
        /**
         * @summary `extensionParameter`.
         * @public
         * @readonly
         */
        readonly extensionParameter: OPTIONAL<ExtensionParameter>,
        /**
         * @summary `infoProvided`.
         * @public
         * @readonly
         */
        readonly infoProvided: OPTIONAL<InfoProvided>
    ) {}

    /**
     * @summary Restructures an object into a queryRequest_ResultType
     * @description
     * 
     * This takes an `object` and converts it to a `queryRequest_ResultType`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `queryRequest_ResultType`.
     * @returns {queryRequest_ResultType}
     */
    public static _from_object (_o: { [_K in keyof (queryRequest_ResultType)]: (queryRequest_ResultType)[_K] }): queryRequest_ResultType {
        return new queryRequest_ResultType(_o.amp1, _o.amp2, _o.extensionParameter, _o.infoProvided);
    }


}

/**
 * @summary The Leading Root Component Types of queryRequest_ResultType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_queryRequest_ResultType: $.ComponentSpec[] = [
    new $.ComponentSpec("amp1", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("amp2", true, $.hasTag(_TagClass.context, 109)),
    new $.ComponentSpec("extensionParameter", true, $.hasTag(_TagClass.context, 84)),
    new $.ComponentSpec("infoProvided", true, $.hasTag(_TagClass.context, 100))
];

/**
 * @summary The Trailing Root Component Types of queryRequest_ResultType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_queryRequest_ResultType: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of queryRequest_ResultType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_queryRequest_ResultType: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_queryRequest_ResultType: $.ASN1Decoder<queryRequest_ResultType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) queryRequest_ResultType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_queryRequest_ResultType (el: _Element): queryRequest_ResultType {
    if (!_cached_decoder_for_queryRequest_ResultType) { _cached_decoder_for_queryRequest_ResultType = function (el: _Element): queryRequest_ResultType {
    let amp1: OPTIONAL<Amp1>;
    let amp2: OPTIONAL<Amp2>;
    let extensionParameter: OPTIONAL<ExtensionParameter>;
    let infoProvided: OPTIONAL<InfoProvided>;
    const callbacks: $.DecodingMap = {
        "amp1": (_el: _Element): void => { amp1 = _decode_Amp1(_el); },
        "amp2": (_el: _Element): void => { amp2 = _decode_Amp2(_el); },
        "extensionParameter": (_el: _Element): void => { extensionParameter = $._decode_implicit<ExtensionParameter>(() => _decode_ExtensionParameter)(_el); },
        "infoProvided": (_el: _Element): void => { infoProvided = _decode_InfoProvided(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_queryRequest_ResultType,
        _extension_additions_list_spec_for_queryRequest_ResultType,
        _root_component_type_list_2_spec_for_queryRequest_ResultType,
        undefined,
    );
    return new queryRequest_ResultType(
        amp1,
        amp2,
        extensionParameter,
        infoProvided
    );
}; }
    return _cached_decoder_for_queryRequest_ResultType(el);
}

let _cached_encoder_for_queryRequest_ResultType: $.ASN1Encoder<queryRequest_ResultType> | null = null;

/**
 * @summary Encodes a(n) queryRequest_ResultType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The queryRequest_ResultType, encoded as an ASN.1 Element.
 */
export
function _encode_queryRequest_ResultType (value: queryRequest_ResultType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_queryRequest_ResultType) { _cached_encoder_for_queryRequest_ResultType = function (value: queryRequest_ResultType, elGetter: $.ASN1Encoder<queryRequest_ResultType>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.amp1 === undefined) ? undefined : _encode_Amp1(value.amp1, $.BER)),
            /* IF_ABSENT  */ ((value.amp2 === undefined) ? undefined : _encode_Amp2(value.amp2, $.BER)),
            /* IF_ABSENT  */ ((value.extensionParameter === undefined) ? undefined : $._encode_implicit(_TagClass.context, 84, () => _encode_ExtensionParameter, $.BER)(value.extensionParameter, $.BER)),
            /* IF_ABSENT  */ ((value.infoProvided === undefined) ? undefined : _encode_InfoProvided(value.infoProvided, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_queryRequest_ResultType(value, elGetter);
}


/* eslint-enable */
