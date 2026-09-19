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
import { MMSPeriodFormat, _enum_for_MMSPeriodFormat, MMSPeriodFormat_absolute /* IMPORTED_LONG_ENUMERATION_ITEM */, absolute /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSPeriodFormat_relative /* IMPORTED_LONG_ENUMERATION_ITEM */, relative /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MMSPeriodFormat, _encode_MMSPeriodFormat } from "../TS33128Payloads/MMSPeriodFormat.ta.mjs";
// export { MMSPeriodFormat, _enum_for_MMSPeriodFormat, MMSPeriodFormat_absolute /* IMPORTED_LONG_ENUMERATION_ITEM */, absolute /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSPeriodFormat_relative /* IMPORTED_LONG_ENUMERATION_ITEM */, relative /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MMSPeriodFormat, _encode_MMSPeriodFormat } from "../TS33128Payloads/MMSPeriodFormat.ta.mjs";


/**
 * @summary MMSExpiry
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSExpiry ::= SEQUENCE
 * {
 *     expiryPeriod [1] INTEGER,
 *     periodFormat [2] MMSPeriodFormat
 * }
 * ```
 * 
 * @class
 */
export
class MMSExpiry {
    constructor (
        /**
         * @summary `expiryPeriod`.
         * @public
         * @readonly
         */
        readonly expiryPeriod: INTEGER,
        /**
         * @summary `periodFormat`.
         * @public
         * @readonly
         */
        readonly periodFormat: MMSPeriodFormat
    ) {}

    /**
     * @summary Restructures an object into a MMSExpiry
     * @description
     * 
     * This takes an `object` and converts it to a `MMSExpiry`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MMSExpiry`.
     * @returns {MMSExpiry}
     */
    public static _from_object (_o: { [_K in keyof (MMSExpiry)]: (MMSExpiry)[_K] }): MMSExpiry {
        return new MMSExpiry(_o.expiryPeriod, _o.periodFormat);
    }

        /**
         * @summary The enum used as the type of the component `periodFormat`
         * @public
         * @static
         */

    public static _enum_for_periodFormat = _enum_for_MMSPeriodFormat;
}

/**
 * @summary The Leading Root Component Types of MMSExpiry
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MMSExpiry: $.ComponentSpec[] = [
    new $.ComponentSpec("expiryPeriod", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("periodFormat", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of MMSExpiry
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MMSExpiry: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MMSExpiry
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MMSExpiry: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MMSExpiry: $.ASN1Decoder<MMSExpiry> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMSExpiry
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMSExpiry (el: _Element): MMSExpiry {
    if (!_cached_decoder_for_MMSExpiry) { _cached_decoder_for_MMSExpiry = function (el: _Element): MMSExpiry {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("MMSExpiry contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "expiryPeriod";
    sequence[1].name = "periodFormat";
    let expiryPeriod!: INTEGER;
    let periodFormat!: MMSPeriodFormat;
    expiryPeriod = $._decode_implicit<INTEGER>(() => $._decodeInteger)(sequence[0]);
    periodFormat = $._decode_implicit<MMSPeriodFormat>(() => _decode_MMSPeriodFormat)(sequence[1]);
    return new MMSExpiry(
        expiryPeriod,
        periodFormat,

    );
}; }
    return _cached_decoder_for_MMSExpiry(el);
}

let _cached_encoder_for_MMSExpiry: $.ASN1Encoder<MMSExpiry> | null = null;

/**
 * @summary Encodes a(n) MMSExpiry into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMSExpiry, encoded as an ASN.1 Element.
 */
export
function _encode_MMSExpiry (value: MMSExpiry, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMSExpiry) { _cached_encoder_for_MMSExpiry = function (value: MMSExpiry, elGetter: $.ASN1Encoder<MMSExpiry>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.expiryPeriod, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_MMSPeriodFormat, $.BER)(value.periodFormat, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_MMSExpiry(value, elGetter);
}


/* eslint-enable */
