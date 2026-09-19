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
import { PDNPCO, _decode_PDNPCO, _encode_PDNPCO } from "../TS33128Payloads/PDNPCO.ta.mjs";
// export { PDNPCO, _decode_PDNPCO, _encode_PDNPCO } from "../TS33128Payloads/PDNPCO.ta.mjs";


/**
 * @summary PDNProtocolConfigurationOptions
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PDNProtocolConfigurationOptions ::= SEQUENCE
 * {
 *     requestPCO   [1] PDNPCO OPTIONAL,
 *     requestAPCO  [2] PDNPCO OPTIONAL,
 *     requestEPCO  [3] PDNPCO OPTIONAL,
 *     responsePCO  [4] PDNPCO OPTIONAL,
 *     responseAPCO [5] PDNPCO OPTIONAL,
 *     responseEPCO [6] PDNPCO OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class PDNProtocolConfigurationOptions {
    constructor (
        /**
         * @summary `requestPCO`.
         * @public
         * @readonly
         */
        readonly requestPCO: OPTIONAL<PDNPCO>,
        /**
         * @summary `requestAPCO`.
         * @public
         * @readonly
         */
        readonly requestAPCO: OPTIONAL<PDNPCO>,
        /**
         * @summary `requestEPCO`.
         * @public
         * @readonly
         */
        readonly requestEPCO: OPTIONAL<PDNPCO>,
        /**
         * @summary `responsePCO`.
         * @public
         * @readonly
         */
        readonly responsePCO: OPTIONAL<PDNPCO>,
        /**
         * @summary `responseAPCO`.
         * @public
         * @readonly
         */
        readonly responseAPCO: OPTIONAL<PDNPCO>,
        /**
         * @summary `responseEPCO`.
         * @public
         * @readonly
         */
        readonly responseEPCO: OPTIONAL<PDNPCO>
    ) {}

    /**
     * @summary Restructures an object into a PDNProtocolConfigurationOptions
     * @description
     * 
     * This takes an `object` and converts it to a `PDNProtocolConfigurationOptions`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PDNProtocolConfigurationOptions`.
     * @returns {PDNProtocolConfigurationOptions}
     */
    public static _from_object (_o: { [_K in keyof (PDNProtocolConfigurationOptions)]: (PDNProtocolConfigurationOptions)[_K] }): PDNProtocolConfigurationOptions {
        return new PDNProtocolConfigurationOptions(_o.requestPCO, _o.requestAPCO, _o.requestEPCO, _o.responsePCO, _o.responseAPCO, _o.responseEPCO);
    }


}

/**
 * @summary The Leading Root Component Types of PDNProtocolConfigurationOptions
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PDNProtocolConfigurationOptions: $.ComponentSpec[] = [
    new $.ComponentSpec("requestPCO", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("requestAPCO", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("requestEPCO", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("responsePCO", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("responseAPCO", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("responseEPCO", true, $.hasTag(_TagClass.context, 6))
];

/**
 * @summary The Trailing Root Component Types of PDNProtocolConfigurationOptions
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PDNProtocolConfigurationOptions: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PDNProtocolConfigurationOptions
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PDNProtocolConfigurationOptions: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PDNProtocolConfigurationOptions: $.ASN1Decoder<PDNProtocolConfigurationOptions> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PDNProtocolConfigurationOptions
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PDNProtocolConfigurationOptions (el: _Element): PDNProtocolConfigurationOptions {
    if (!_cached_decoder_for_PDNProtocolConfigurationOptions) { _cached_decoder_for_PDNProtocolConfigurationOptions = function (el: _Element): PDNProtocolConfigurationOptions {
    let requestPCO: OPTIONAL<PDNPCO>;
    let requestAPCO: OPTIONAL<PDNPCO>;
    let requestEPCO: OPTIONAL<PDNPCO>;
    let responsePCO: OPTIONAL<PDNPCO>;
    let responseAPCO: OPTIONAL<PDNPCO>;
    let responseEPCO: OPTIONAL<PDNPCO>;
    const callbacks: $.DecodingMap = {
        "requestPCO": (_el: _Element): void => { requestPCO = $._decode_implicit<PDNPCO>(() => _decode_PDNPCO)(_el); },
        "requestAPCO": (_el: _Element): void => { requestAPCO = $._decode_implicit<PDNPCO>(() => _decode_PDNPCO)(_el); },
        "requestEPCO": (_el: _Element): void => { requestEPCO = $._decode_implicit<PDNPCO>(() => _decode_PDNPCO)(_el); },
        "responsePCO": (_el: _Element): void => { responsePCO = $._decode_implicit<PDNPCO>(() => _decode_PDNPCO)(_el); },
        "responseAPCO": (_el: _Element): void => { responseAPCO = $._decode_implicit<PDNPCO>(() => _decode_PDNPCO)(_el); },
        "responseEPCO": (_el: _Element): void => { responseEPCO = $._decode_implicit<PDNPCO>(() => _decode_PDNPCO)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PDNProtocolConfigurationOptions,
        _extension_additions_list_spec_for_PDNProtocolConfigurationOptions,
        _root_component_type_list_2_spec_for_PDNProtocolConfigurationOptions,
        undefined,
    );
    return new PDNProtocolConfigurationOptions(
        requestPCO,
        requestAPCO,
        requestEPCO,
        responsePCO,
        responseAPCO,
        responseEPCO
    );
}; }
    return _cached_decoder_for_PDNProtocolConfigurationOptions(el);
}

let _cached_encoder_for_PDNProtocolConfigurationOptions: $.ASN1Encoder<PDNProtocolConfigurationOptions> | null = null;

/**
 * @summary Encodes a(n) PDNProtocolConfigurationOptions into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PDNProtocolConfigurationOptions, encoded as an ASN.1 Element.
 */
export
function _encode_PDNProtocolConfigurationOptions (value: PDNProtocolConfigurationOptions, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PDNProtocolConfigurationOptions) { _cached_encoder_for_PDNProtocolConfigurationOptions = function (value: PDNProtocolConfigurationOptions, elGetter: $.ASN1Encoder<PDNProtocolConfigurationOptions>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.requestPCO === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_PDNPCO, $.BER)(value.requestPCO, $.BER)),
            /* IF_ABSENT  */ ((value.requestAPCO === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_PDNPCO, $.BER)(value.requestAPCO, $.BER)),
            /* IF_ABSENT  */ ((value.requestEPCO === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_PDNPCO, $.BER)(value.requestEPCO, $.BER)),
            /* IF_ABSENT  */ ((value.responsePCO === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_PDNPCO, $.BER)(value.responsePCO, $.BER)),
            /* IF_ABSENT  */ ((value.responseAPCO === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_PDNPCO, $.BER)(value.responseAPCO, $.BER)),
            /* IF_ABSENT  */ ((value.responseEPCO === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_PDNPCO, $.BER)(value.responseEPCO, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PDNProtocolConfigurationOptions(value, elGetter);
}


/* eslint-enable */
