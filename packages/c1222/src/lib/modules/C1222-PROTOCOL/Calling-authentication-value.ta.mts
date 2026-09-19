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
import { Authentication_value_encoding, _decode_Authentication_value_encoding, _encode_Authentication_value_encoding } from "../C1222-PROTOCOL/Authentication-value-encoding.ta.mjs";
// export { Authentication_value_encoding, _decode_Authentication_value_encoding, _encode_Authentication_value_encoding } from "../C1222-PROTOCOL/Authentication-value-encoding.ta.mjs";


/**
 * @summary Calling_authentication_value
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Calling-authentication-value ::= [2] IMPLICIT SEQUENCE {
 *     calling-authentication-value-indirect   INTEGER DEFAULT 0,
 *     calling-authentication-value-encoding   Authentication-value-encoding
 * }
 * ```
 * 
 * @class
 */
export
class Calling_authentication_value {
    constructor (
        /**
         * @summary `calling_authentication_value_indirect`.
         * @public
         * @readonly
         */
        readonly calling_authentication_value_indirect: OPTIONAL<INTEGER>,
        /**
         * @summary `calling_authentication_value_encoding`.
         * @public
         * @readonly
         */
        readonly calling_authentication_value_encoding: Authentication_value_encoding
    ) {}

    /**
     * @summary Restructures an object into a Calling_authentication_value
     * @description
     * 
     * This takes an `object` and converts it to a `Calling_authentication_value`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Calling_authentication_value`.
     * @returns {Calling_authentication_value}
     */
    public static _from_object (_o: { [_K in keyof (Calling_authentication_value)]: (Calling_authentication_value)[_K] }): Calling_authentication_value {
        return new Calling_authentication_value(_o.calling_authentication_value_indirect, _o.calling_authentication_value_encoding);
    }

    /**
     * @summary Getter that returns the default value for `calling_authentication_value_indirect`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_calling_authentication_value_indirect () { return 0; }
}

/**
 * @summary The Leading Root Component Types of Calling_authentication_value
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Calling_authentication_value: $.ComponentSpec[] = [
    new $.ComponentSpec("calling-authentication-value-indirect", true, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("calling-authentication-value-encoding", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of Calling_authentication_value
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Calling_authentication_value: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Calling_authentication_value
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Calling_authentication_value: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Calling_authentication_value: $.ASN1Decoder<Calling_authentication_value> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Calling_authentication_value
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Calling_authentication_value (el: _Element): Calling_authentication_value {
    if (!_cached_decoder_for_Calling_authentication_value) { _cached_decoder_for_Calling_authentication_value = $._decode_implicit<Calling_authentication_value>(() => function (el: _Element): Calling_authentication_value {
    let calling_authentication_value_indirect: OPTIONAL<INTEGER> = Calling_authentication_value._default_value_for_calling_authentication_value_indirect;
    let calling_authentication_value_encoding!: Authentication_value_encoding;
    const callbacks: $.DecodingMap = {
        "calling-authentication-value-indirect": (_el: _Element): void => { calling_authentication_value_indirect = $._decodeInteger(_el); },
        "calling-authentication-value-encoding": (_el: _Element): void => { calling_authentication_value_encoding = _decode_Authentication_value_encoding(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Calling_authentication_value,
        _extension_additions_list_spec_for_Calling_authentication_value,
        _root_component_type_list_2_spec_for_Calling_authentication_value,
        undefined,
    );
    return new Calling_authentication_value(
        calling_authentication_value_indirect,
        calling_authentication_value_encoding
    );
}); }
    return _cached_decoder_for_Calling_authentication_value(el);
}

let _cached_encoder_for_Calling_authentication_value: $.ASN1Encoder<Calling_authentication_value> | null = null;

/**
 * @summary Encodes a(n) Calling_authentication_value into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Calling_authentication_value, encoded as an ASN.1 Element.
 */
export
function _encode_Calling_authentication_value (value: Calling_authentication_value, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Calling_authentication_value) { _cached_encoder_for_Calling_authentication_value = $._encode_implicit(_TagClass.context, 2, () => function (value: Calling_authentication_value, elGetter: $.ASN1Encoder<Calling_authentication_value>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_DEFAULT */ (value.calling_authentication_value_indirect === undefined || $.deepEq(value.calling_authentication_value_indirect, Calling_authentication_value._default_value_for_calling_authentication_value_indirect) ? undefined : $._encodeInteger(value.calling_authentication_value_indirect, $.BER)),
            /* REQUIRED   */ _encode_Authentication_value_encoding(value.calling_authentication_value_encoding, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_Calling_authentication_value(value, elGetter);
}


/* eslint-enable */
