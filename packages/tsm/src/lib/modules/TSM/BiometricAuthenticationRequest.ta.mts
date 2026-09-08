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
import { BiometricMethod, _decode_BiometricMethod, _encode_BiometricMethod } from "../TSM/BiometricMethod.ta.mjs";
// export { BiometricMethod, _decode_BiometricMethod, _encode_BiometricMethod } from "../TSM/BiometricMethod.ta.mjs";
import { BioAPI_FMR, _decode_BioAPI_FMR, _encode_BioAPI_FMR } from "../BIP/BioAPI-FMR.ta.mjs";
// export { BioAPI_FMR, _decode_BioAPI_FMR, _encode_BioAPI_FMR } from "../BIP/BioAPI-FMR.ta.mjs";
import { Quality, _decode_Quality, _encode_Quality } from "../TSM/Quality.ta.mjs";
// export { Quality, _decode_Quality, _encode_Quality } from "../TSM/Quality.ta.mjs";
import { XtsmTemplate, _decode_XtsmTemplate, _encode_XtsmTemplate } from "../TSM/XtsmTemplate.ta.mjs";
// export { XtsmTemplate, _decode_XtsmTemplate, _encode_XtsmTemplate } from "../TSM/XtsmTemplate.ta.mjs";


/**
 * @summary BiometricAuthenticationRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BiometricAuthenticationRequest ::= SEQUENCE {
 * biometricMethod     BiometricMethod,
 * requestFMR             BioAPI-FMR,
 *                 -- (32-bit integer value:requestFMR/231-1)
 * requestTrialNumber     INTEGER(1..15),
 * requestQuality         Quality,
 * requestTemplateData    XtsmTemplate OPTIONAL
 *                        -- for download model (no value available)
 * }
 * ```
 * 
 * @class
 */
export
class BiometricAuthenticationRequest {
    constructor (
        /**
         * @summary `biometricMethod`.
         * @public
         * @readonly
         */
        readonly biometricMethod: BiometricMethod,
        /**
         * @summary `requestFMR`.
         * @public
         * @readonly
         */
        readonly requestFMR: BioAPI_FMR,
        /**
         * @summary `requestTrialNumber`.
         * @public
         * @readonly
         */
        readonly requestTrialNumber: INTEGER,
        /**
         * @summary `requestQuality`.
         * @public
         * @readonly
         */
        readonly requestQuality: Quality,
        /**
         * @summary `requestTemplateData`.
         * @public
         * @readonly
         */
        readonly requestTemplateData: OPTIONAL<XtsmTemplate>
    ) {}

    /**
     * @summary Restructures an object into a BiometricAuthenticationRequest
     * @description
     * 
     * This takes an `object` and converts it to a `BiometricAuthenticationRequest`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BiometricAuthenticationRequest`.
     * @returns {BiometricAuthenticationRequest}
     */
    public static _from_object (_o: { [_K in keyof (BiometricAuthenticationRequest)]: (BiometricAuthenticationRequest)[_K] }): BiometricAuthenticationRequest {
        return new BiometricAuthenticationRequest(_o.biometricMethod, _o.requestFMR, _o.requestTrialNumber, _o.requestQuality, _o.requestTemplateData);
    }


}

/**
 * @summary The Leading Root Component Types of BiometricAuthenticationRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_BiometricAuthenticationRequest: $.ComponentSpec[] = [
    new $.ComponentSpec("biometricMethod", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("requestFMR", false, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("requestTrialNumber", false, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("requestQuality", false, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("requestTemplateData", true, $.hasTag(_TagClass.context, 4), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of BiometricAuthenticationRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_BiometricAuthenticationRequest: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of BiometricAuthenticationRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_BiometricAuthenticationRequest: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_BiometricAuthenticationRequest: $.ASN1Decoder<BiometricAuthenticationRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BiometricAuthenticationRequest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BiometricAuthenticationRequest (el: _Element): BiometricAuthenticationRequest {
    if (!_cached_decoder_for_BiometricAuthenticationRequest) { _cached_decoder_for_BiometricAuthenticationRequest = function (el: _Element): BiometricAuthenticationRequest {
    let biometricMethod!: BiometricMethod;
    let requestFMR!: BioAPI_FMR;
    let requestTrialNumber!: INTEGER;
    let requestQuality!: Quality;
    let requestTemplateData: OPTIONAL<XtsmTemplate>;
    const callbacks: $.DecodingMap = {
        "biometricMethod": (_el: _Element): void => { biometricMethod = _decode_BiometricMethod(_el); },
        "requestFMR": (_el: _Element): void => { requestFMR = _decode_BioAPI_FMR(_el); },
        "requestTrialNumber": (_el: _Element): void => { requestTrialNumber = $._decodeInteger(_el); },
        "requestQuality": (_el: _Element): void => { requestQuality = _decode_Quality(_el); },
        "requestTemplateData": (_el: _Element): void => { requestTemplateData = _decode_XtsmTemplate(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_BiometricAuthenticationRequest,
        _extension_additions_list_spec_for_BiometricAuthenticationRequest,
        _root_component_type_list_2_spec_for_BiometricAuthenticationRequest,
        undefined,
    );
    return new BiometricAuthenticationRequest(
        biometricMethod,
        requestFMR,
        requestTrialNumber,
        requestQuality,
        requestTemplateData
    );
}; }
    return _cached_decoder_for_BiometricAuthenticationRequest(el);
}

let _cached_encoder_for_BiometricAuthenticationRequest: $.ASN1Encoder<BiometricAuthenticationRequest> | null = null;

/**
 * @summary Encodes a(n) BiometricAuthenticationRequest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BiometricAuthenticationRequest, encoded as an ASN.1 Element.
 */
export
function _encode_BiometricAuthenticationRequest (value: BiometricAuthenticationRequest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BiometricAuthenticationRequest) { _cached_encoder_for_BiometricAuthenticationRequest = function (value: BiometricAuthenticationRequest, elGetter: $.ASN1Encoder<BiometricAuthenticationRequest>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_BiometricMethod(value.biometricMethod, $.BER),
            /* REQUIRED   */ _encode_BioAPI_FMR(value.requestFMR, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.requestTrialNumber, $.BER),
            /* REQUIRED   */ _encode_Quality(value.requestQuality, $.BER),
            /* IF_ABSENT  */ ((value.requestTemplateData === undefined) ? undefined : _encode_XtsmTemplate(value.requestTemplateData, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_BiometricAuthenticationRequest(value, elGetter);
}


/* eslint-enable */
