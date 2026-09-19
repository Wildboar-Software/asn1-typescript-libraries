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



/**
 * @summary Service_Information
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Service-Information ::= SET
 * {
 *     high-layer-capability    [0] OCTET STRING (SIZE(1)) OPTIONAL,
 *         -- HLC (octet 4 only)
 *         -- Protocol: EN 300 403-1 [6]
 *     tMR                     [1] OCTET STRING (SIZE(1)) OPTIONAL,
 *         -- Transmission Medium Requirement
 *         -- Protocol: ISUP EN 300 356 [5]
 *     bearerServiceCode         [2] OCTET STRING (SIZE(1)) OPTIONAL,
 *     teleServiceCode            [3] OCTET STRING (SIZE(1)) OPTIONAL
 *         -- from MAP, TS GSM 09.02 [32], clause 14.7.9 and clause 14.7.10
 * }
 * ```
 * 
 * @class
 */
export
class Service_Information {
    constructor (
        /**
         * @summary `high_layer_capability`.
         * @public
         * @readonly
         */
        readonly high_layer_capability: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `tMR`.
         * @public
         * @readonly
         */
        readonly tMR: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `bearerServiceCode`.
         * @public
         * @readonly
         */
        readonly bearerServiceCode: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `teleServiceCode`.
         * @public
         * @readonly
         */
        readonly teleServiceCode: OPTIONAL<OCTET_STRING>
    ) {}

    /**
     * @summary Restructures an object into a Service_Information
     * @description
     * 
     * This takes an `object` and converts it to a `Service_Information`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Service_Information`.
     * @returns {Service_Information}
     */
    public static _from_object (_o: { [_K in keyof (Service_Information)]: (Service_Information)[_K] }): Service_Information {
        return new Service_Information(_o.high_layer_capability, _o.tMR, _o.bearerServiceCode, _o.teleServiceCode);
    }


}

/**
 * @summary The Leading Root Component Types of Service_Information
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Service_Information: $.ComponentSpec[] = [
    new $.ComponentSpec("high-layer-capability", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("tMR", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("bearerServiceCode", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("teleServiceCode", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of Service_Information
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Service_Information: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Service_Information
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Service_Information: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Service_Information: $.ASN1Decoder<Service_Information> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Service_Information
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Service_Information (el: _Element): Service_Information {
    if (!_cached_decoder_for_Service_Information) { _cached_decoder_for_Service_Information = function (el: _Element): Service_Information {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let high_layer_capability: OPTIONAL<OCTET_STRING>;
    let tMR: OPTIONAL<OCTET_STRING>;
    let bearerServiceCode: OPTIONAL<OCTET_STRING>;
    let teleServiceCode: OPTIONAL<OCTET_STRING>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "high-layer-capability": (_el: _Element): void => { high_layer_capability = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "tMR": (_el: _Element): void => { tMR = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "bearerServiceCode": (_el: _Element): void => { bearerServiceCode = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "teleServiceCode": (_el: _Element): void => { teleServiceCode = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_Service_Information,
        _extension_additions_list_spec_for_Service_Information,
        _root_component_type_list_2_spec_for_Service_Information,
        undefined,
    );
    return new Service_Information( /* SET_CONSTRUCTOR_CALL */
        high_layer_capability,
        tMR,
        bearerServiceCode,
        teleServiceCode
    );
}; }
    return _cached_decoder_for_Service_Information(el);
}

let _cached_encoder_for_Service_Information: $.ASN1Encoder<Service_Information> | null = null;

/**
 * @summary Encodes a(n) Service_Information into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Service_Information, encoded as an ASN.1 Element.
 */
export
function _encode_Service_Information (value: Service_Information, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Service_Information) { _cached_encoder_for_Service_Information = function (value: Service_Information, elGetter: $.ASN1Encoder<Service_Information>): _Element {
    return $._encodeSet(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.high_layer_capability === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER)(value.high_layer_capability, $.BER)),
            /* IF_ABSENT  */ ((value.tMR === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.tMR, $.BER)),
            /* IF_ABSENT  */ ((value.bearerServiceCode === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.bearerServiceCode, $.BER)),
            /* IF_ABSENT  */ ((value.teleServiceCode === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.teleServiceCode, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Service_Information(value, elGetter);
}


/* eslint-enable */
