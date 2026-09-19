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
import { ApplicationIndicator, _decode_ApplicationIndicator, _encode_ApplicationIndicator } from "../AIN-Parameters/ApplicationIndicator.ta.mjs";
// export { ApplicationIndicator, _decode_ApplicationIndicator, _encode_ApplicationIndicator } from "../AIN-Parameters/ApplicationIndicator.ta.mjs";
import { ServiceContext, _decode_ServiceContext, _encode_ServiceContext } from "../AIN-Parameters/ServiceContext.ta.mjs";
// export { ServiceContext, _decode_ServiceContext, _encode_ServiceContext } from "../AIN-Parameters/ServiceContext.ta.mjs";
import { ExtensionParameter, _decode_ExtensionParameter, _encode_ExtensionParameter } from "../AIN-Parameters/ExtensionParameter.ta.mjs";
// export { ExtensionParameter, _decode_ExtensionParameter, _encode_ExtensionParameter } from "../AIN-Parameters/ExtensionParameter.ta.mjs";


/**
 * @summary EchoRequestArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EchoRequestArg ::= SEQUENCE{
 *             applicationIndicator            ApplicationIndicator OPTIONAL,
 *             serviceContext                  ServiceContext OPTIONAL,
 *             extensionParameter              [84] IMPLICIT ExtensionParameter OPTIONAL
 *         }
 * ```
 * 
 * @class
 */
export
class EchoRequestArg {
    constructor (
        /**
         * @summary `applicationIndicator`.
         * @public
         * @readonly
         */
        readonly applicationIndicator: OPTIONAL<ApplicationIndicator>,
        /**
         * @summary `serviceContext`.
         * @public
         * @readonly
         */
        readonly serviceContext: OPTIONAL<ServiceContext>,
        /**
         * @summary `extensionParameter`.
         * @public
         * @readonly
         */
        readonly extensionParameter: OPTIONAL<ExtensionParameter>
    ) {}

    /**
     * @summary Restructures an object into a EchoRequestArg
     * @description
     * 
     * This takes an `object` and converts it to a `EchoRequestArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EchoRequestArg`.
     * @returns {EchoRequestArg}
     */
    public static _from_object (_o: { [_K in keyof (EchoRequestArg)]: (EchoRequestArg)[_K] }): EchoRequestArg {
        return new EchoRequestArg(_o.applicationIndicator, _o.serviceContext, _o.extensionParameter);
    }


}

/**
 * @summary The Leading Root Component Types of EchoRequestArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EchoRequestArg: $.ComponentSpec[] = [
    new $.ComponentSpec("applicationIndicator", true, $.hasTag(_TagClass.context, 90)),
    new $.ComponentSpec("serviceContext", true, $.hasTag(_TagClass.context, 83)),
    new $.ComponentSpec("extensionParameter", true, $.hasTag(_TagClass.context, 84))
];

/**
 * @summary The Trailing Root Component Types of EchoRequestArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EchoRequestArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EchoRequestArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EchoRequestArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EchoRequestArg: $.ASN1Decoder<EchoRequestArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EchoRequestArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EchoRequestArg (el: _Element): EchoRequestArg {
    if (!_cached_decoder_for_EchoRequestArg) { _cached_decoder_for_EchoRequestArg = function (el: _Element): EchoRequestArg {
    let applicationIndicator: OPTIONAL<ApplicationIndicator>;
    let serviceContext: OPTIONAL<ServiceContext>;
    let extensionParameter: OPTIONAL<ExtensionParameter>;
    const callbacks: $.DecodingMap = {
        "applicationIndicator": (_el: _Element): void => { applicationIndicator = _decode_ApplicationIndicator(_el); },
        "serviceContext": (_el: _Element): void => { serviceContext = _decode_ServiceContext(_el); },
        "extensionParameter": (_el: _Element): void => { extensionParameter = $._decode_implicit<ExtensionParameter>(() => _decode_ExtensionParameter)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EchoRequestArg,
        _extension_additions_list_spec_for_EchoRequestArg,
        _root_component_type_list_2_spec_for_EchoRequestArg,
        undefined,
    );
    return new EchoRequestArg(
        applicationIndicator,
        serviceContext,
        extensionParameter
    );
}; }
    return _cached_decoder_for_EchoRequestArg(el);
}

let _cached_encoder_for_EchoRequestArg: $.ASN1Encoder<EchoRequestArg> | null = null;

/**
 * @summary Encodes a(n) EchoRequestArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EchoRequestArg, encoded as an ASN.1 Element.
 */
export
function _encode_EchoRequestArg (value: EchoRequestArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EchoRequestArg) { _cached_encoder_for_EchoRequestArg = function (value: EchoRequestArg, elGetter: $.ASN1Encoder<EchoRequestArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.applicationIndicator === undefined) ? undefined : _encode_ApplicationIndicator(value.applicationIndicator, $.BER)),
            /* IF_ABSENT  */ ((value.serviceContext === undefined) ? undefined : _encode_ServiceContext(value.serviceContext, $.BER)),
            /* IF_ABSENT  */ ((value.extensionParameter === undefined) ? undefined : $._encode_implicit(_TagClass.context, 84, () => _encode_ExtensionParameter, $.BER)(value.extensionParameter, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EchoRequestArg(value, elGetter);
}


/* eslint-enable */
