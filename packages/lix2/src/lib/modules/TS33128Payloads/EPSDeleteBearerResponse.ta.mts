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
import { EPSBearerDeletionCauseValue, _decode_EPSBearerDeletionCauseValue, _encode_EPSBearerDeletionCauseValue } from "../TS33128Payloads/EPSBearerDeletionCauseValue.ta.mjs";
// export { EPSBearerDeletionCauseValue, _decode_EPSBearerDeletionCauseValue, _encode_EPSBearerDeletionCauseValue } from "../TS33128Payloads/EPSBearerDeletionCauseValue.ta.mjs";
import { EPSBearerID, _decode_EPSBearerID, _encode_EPSBearerID } from "../TS33128Payloads/EPSBearerID.ta.mjs";
// export { EPSBearerID, _decode_EPSBearerID, _encode_EPSBearerID } from "../TS33128Payloads/EPSBearerID.ta.mjs";
import { EPSDeleteBearerContext, _decode_EPSDeleteBearerContext, _encode_EPSDeleteBearerContext } from "../TS33128Payloads/EPSDeleteBearerContext.ta.mjs";
// export { EPSDeleteBearerContext, _decode_EPSDeleteBearerContext, _encode_EPSDeleteBearerContext } from "../TS33128Payloads/EPSDeleteBearerContext.ta.mjs";
import { PDNProtocolConfigurationOptions, _decode_PDNProtocolConfigurationOptions, _encode_PDNProtocolConfigurationOptions } from "../TS33128Payloads/PDNProtocolConfigurationOptions.ta.mjs";
// export { PDNProtocolConfigurationOptions, _decode_PDNProtocolConfigurationOptions, _encode_PDNProtocolConfigurationOptions } from "../TS33128Payloads/PDNProtocolConfigurationOptions.ta.mjs";


/**
 * @summary EPSDeleteBearerResponse
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSDeleteBearerResponse ::= SEQUENCE
 * {
 *     cause                        [1] EPSBearerDeletionCauseValue,
 *     linkedEPSBearerID            [2] EPSBearerID OPTIONAL,
 *     bearerContexts               [3] SEQUENCE OF EPSDeleteBearerContext OPTIONAL,
 *     protocolConfigurationOptions [4] PDNProtocolConfigurationOptions OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class EPSDeleteBearerResponse {
    constructor (
        /**
         * @summary `cause`.
         * @public
         * @readonly
         */
        readonly cause: EPSBearerDeletionCauseValue,
        /**
         * @summary `linkedEPSBearerID`.
         * @public
         * @readonly
         */
        readonly linkedEPSBearerID: OPTIONAL<EPSBearerID>,
        /**
         * @summary `bearerContexts`.
         * @public
         * @readonly
         */
        readonly bearerContexts: OPTIONAL<EPSDeleteBearerContext[]>,
        /**
         * @summary `protocolConfigurationOptions`.
         * @public
         * @readonly
         */
        readonly protocolConfigurationOptions: OPTIONAL<PDNProtocolConfigurationOptions>
    ) {}

    /**
     * @summary Restructures an object into a EPSDeleteBearerResponse
     * @description
     * 
     * This takes an `object` and converts it to a `EPSDeleteBearerResponse`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EPSDeleteBearerResponse`.
     * @returns {EPSDeleteBearerResponse}
     */
    public static _from_object (_o: { [_K in keyof (EPSDeleteBearerResponse)]: (EPSDeleteBearerResponse)[_K] }): EPSDeleteBearerResponse {
        return new EPSDeleteBearerResponse(_o.cause, _o.linkedEPSBearerID, _o.bearerContexts, _o.protocolConfigurationOptions);
    }


}

/**
 * @summary The Leading Root Component Types of EPSDeleteBearerResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EPSDeleteBearerResponse: $.ComponentSpec[] = [
    new $.ComponentSpec("cause", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("linkedEPSBearerID", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("bearerContexts", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("protocolConfigurationOptions", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of EPSDeleteBearerResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EPSDeleteBearerResponse: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EPSDeleteBearerResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EPSDeleteBearerResponse: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EPSDeleteBearerResponse: $.ASN1Decoder<EPSDeleteBearerResponse> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EPSDeleteBearerResponse
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EPSDeleteBearerResponse (el: _Element): EPSDeleteBearerResponse {
    if (!_cached_decoder_for_EPSDeleteBearerResponse) { _cached_decoder_for_EPSDeleteBearerResponse = function (el: _Element): EPSDeleteBearerResponse {
    let cause!: EPSBearerDeletionCauseValue;
    let linkedEPSBearerID: OPTIONAL<EPSBearerID>;
    let bearerContexts: OPTIONAL<EPSDeleteBearerContext[]>;
    let protocolConfigurationOptions: OPTIONAL<PDNProtocolConfigurationOptions>;
    const callbacks: $.DecodingMap = {
        "cause": (_el: _Element): void => { cause = $._decode_implicit<EPSBearerDeletionCauseValue>(() => _decode_EPSBearerDeletionCauseValue)(_el); },
        "linkedEPSBearerID": (_el: _Element): void => { linkedEPSBearerID = $._decode_implicit<EPSBearerID>(() => _decode_EPSBearerID)(_el); },
        "bearerContexts": (_el: _Element): void => { bearerContexts = $._decode_implicit<EPSDeleteBearerContext[]>(() => $._decodeSequenceOf<EPSDeleteBearerContext>(() => _decode_EPSDeleteBearerContext))(_el); },
        "protocolConfigurationOptions": (_el: _Element): void => { protocolConfigurationOptions = $._decode_implicit<PDNProtocolConfigurationOptions>(() => _decode_PDNProtocolConfigurationOptions)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EPSDeleteBearerResponse,
        _extension_additions_list_spec_for_EPSDeleteBearerResponse,
        _root_component_type_list_2_spec_for_EPSDeleteBearerResponse,
        undefined,
    );
    return new EPSDeleteBearerResponse(
        cause,
        linkedEPSBearerID,
        bearerContexts,
        protocolConfigurationOptions
    );
}; }
    return _cached_decoder_for_EPSDeleteBearerResponse(el);
}

let _cached_encoder_for_EPSDeleteBearerResponse: $.ASN1Encoder<EPSDeleteBearerResponse> | null = null;

/**
 * @summary Encodes a(n) EPSDeleteBearerResponse into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EPSDeleteBearerResponse, encoded as an ASN.1 Element.
 */
export
function _encode_EPSDeleteBearerResponse (value: EPSDeleteBearerResponse, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EPSDeleteBearerResponse) { _cached_encoder_for_EPSDeleteBearerResponse = function (value: EPSDeleteBearerResponse, elGetter: $.ASN1Encoder<EPSDeleteBearerResponse>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_EPSBearerDeletionCauseValue, $.BER)(value.cause, $.BER),
            /* IF_ABSENT  */ ((value.linkedEPSBearerID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_EPSBearerID, $.BER)(value.linkedEPSBearerID, $.BER)),
            /* IF_ABSENT  */ ((value.bearerContexts === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeSequenceOf<EPSDeleteBearerContext>(() => _encode_EPSDeleteBearerContext, $.BER), $.BER)(value.bearerContexts, $.BER)),
            /* IF_ABSENT  */ ((value.protocolConfigurationOptions === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_PDNProtocolConfigurationOptions, $.BER)(value.protocolConfigurationOptions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EPSDeleteBearerResponse(value, elGetter);
}


/* eslint-enable */
