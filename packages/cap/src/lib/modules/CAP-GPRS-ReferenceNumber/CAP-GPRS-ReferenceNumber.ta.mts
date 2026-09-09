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
import { Integer4, _decode_Integer4, _encode_Integer4 } from "../Core-INAP-CS1-DataTypes/Integer4.ta.mjs";
// export { Integer4, _decode_Integer4, _encode_Integer4 } from "../Core-INAP-CS1-DataTypes/Integer4.ta.mjs";


/**
 * @summary CAP_GPRS_ReferenceNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CAP-GPRS-ReferenceNumber ::= SEQUENCE {
 *     destinationReference        [0] Integer4                OPTIONAL,
 *     originationReference        [1] Integer4                OPTIONAL
 *     }
 * ```
 * 
 * @class
 */
export
class CAP_GPRS_ReferenceNumber {
    constructor (
        /**
         * @summary `destinationReference`.
         * @public
         * @readonly
         */
        readonly destinationReference: OPTIONAL<Integer4>,
        /**
         * @summary `originationReference`.
         * @public
         * @readonly
         */
        readonly originationReference: OPTIONAL<Integer4>
    ) {}

    /**
     * @summary Restructures an object into a CAP_GPRS_ReferenceNumber
     * @description
     * 
     * This takes an `object` and converts it to a `CAP_GPRS_ReferenceNumber`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CAP_GPRS_ReferenceNumber`.
     * @returns {CAP_GPRS_ReferenceNumber}
     */
    public static _from_object (_o: { [_K in keyof (CAP_GPRS_ReferenceNumber)]: (CAP_GPRS_ReferenceNumber)[_K] }): CAP_GPRS_ReferenceNumber {
        return new CAP_GPRS_ReferenceNumber(_o.destinationReference, _o.originationReference);
    }


}

/**
 * @summary The Leading Root Component Types of CAP_GPRS_ReferenceNumber
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CAP_GPRS_ReferenceNumber: $.ComponentSpec[] = [
    new $.ComponentSpec("destinationReference", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("originationReference", true, $.hasTag(_TagClass.context, 1), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of CAP_GPRS_ReferenceNumber
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CAP_GPRS_ReferenceNumber: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CAP_GPRS_ReferenceNumber
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CAP_GPRS_ReferenceNumber: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CAP_GPRS_ReferenceNumber: $.ASN1Decoder<CAP_GPRS_ReferenceNumber> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CAP_GPRS_ReferenceNumber
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CAP_GPRS_ReferenceNumber (el: _Element): CAP_GPRS_ReferenceNumber {
    if (!_cached_decoder_for_CAP_GPRS_ReferenceNumber) { _cached_decoder_for_CAP_GPRS_ReferenceNumber = function (el: _Element): CAP_GPRS_ReferenceNumber {
    let destinationReference: OPTIONAL<Integer4>;
    let originationReference: OPTIONAL<Integer4>;
    const callbacks: $.DecodingMap = {
        "destinationReference": (_el: _Element): void => { destinationReference = $._decode_explicit<Integer4>(() => _decode_Integer4)(_el); },
        "originationReference": (_el: _Element): void => { originationReference = $._decode_explicit<Integer4>(() => _decode_Integer4)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CAP_GPRS_ReferenceNumber,
        _extension_additions_list_spec_for_CAP_GPRS_ReferenceNumber,
        _root_component_type_list_2_spec_for_CAP_GPRS_ReferenceNumber,
        undefined,
    );
    return new CAP_GPRS_ReferenceNumber(
        destinationReference,
        originationReference
    );
}; }
    return _cached_decoder_for_CAP_GPRS_ReferenceNumber(el);
}

let _cached_encoder_for_CAP_GPRS_ReferenceNumber: $.ASN1Encoder<CAP_GPRS_ReferenceNumber> | null = null;

/**
 * @summary Encodes a(n) CAP_GPRS_ReferenceNumber into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CAP_GPRS_ReferenceNumber, encoded as an ASN.1 Element.
 */
export
function _encode_CAP_GPRS_ReferenceNumber (value: CAP_GPRS_ReferenceNumber, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CAP_GPRS_ReferenceNumber) { _cached_encoder_for_CAP_GPRS_ReferenceNumber = function (value: CAP_GPRS_ReferenceNumber, elGetter: $.ASN1Encoder<CAP_GPRS_ReferenceNumber>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.destinationReference === undefined) ? undefined : $._encode_explicit(_TagClass.context, 0, () => _encode_Integer4, $.BER)(value.destinationReference, $.BER)),
            /* IF_ABSENT  */ ((value.originationReference === undefined) ? undefined : $._encode_explicit(_TagClass.context, 1, () => _encode_Integer4, $.BER)(value.originationReference, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CAP_GPRS_ReferenceNumber(value, elGetter);
}


/* eslint-enable */
