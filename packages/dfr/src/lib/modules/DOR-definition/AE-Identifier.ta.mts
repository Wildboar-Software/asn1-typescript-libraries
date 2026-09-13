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
import { Locational_identifier, _decode_Locational_identifier, _encode_Locational_identifier } from "../DOR-definition/Locational-identifier.ta.mjs";
// export { Locational_identifier, _decode_Locational_identifier, _encode_Locational_identifier } from "../DOR-definition/Locational-identifier.ta.mjs";
import { DistinguishedName, _decode_DistinguishedName, _encode_DistinguishedName } from "../InformationFramework/DistinguishedName.ta.mjs";
// export { DistinguishedName, _decode_DistinguishedName, _encode_DistinguishedName } from "../InformationFramework/DistinguishedName.ta.mjs";


/**
 * @summary AE_Identifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AE-Identifier ::= SEQUENCE { -- at least one component shall be present
 *   locational-identifier        [0]  Locational-identifier OPTIONAL,
 *   direct-logical-identifier    [1]  DistinguishedName OPTIONAL,
 *   indirect-logical-identifier  [2]  DistinguishedName OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class AE_Identifier {
    constructor (
        /**
         * @summary `locational_identifier`.
         * @public
         * @readonly
         */
        readonly locational_identifier: OPTIONAL<Locational_identifier>,
        /**
         * @summary `direct_logical_identifier`.
         * @public
         * @readonly
         */
        readonly direct_logical_identifier: OPTIONAL<DistinguishedName>,
        /**
         * @summary `indirect_logical_identifier`.
         * @public
         * @readonly
         */
        readonly indirect_logical_identifier: OPTIONAL<DistinguishedName>
    ) {
        if (locational_identifier === undefined && direct_logical_identifier === undefined && indirect_logical_identifier === undefined) {
            throw new _ConstructionError("AE-Identifier shall contain at least one component");
        }
    }

    /**
     * @summary Restructures an object into a AE_Identifier
     * @description
     * 
     * This takes an `object` and converts it to a `AE_Identifier`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AE_Identifier`.
     * @returns {AE_Identifier}
     */
    public static _from_object (_o: { [_K in keyof (AE_Identifier)]: (AE_Identifier)[_K] }): AE_Identifier {
        return new AE_Identifier(_o.locational_identifier, _o.direct_logical_identifier, _o.indirect_logical_identifier);
    }


}

/**
 * @summary The Leading Root Component Types of AE_Identifier
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AE_Identifier: $.ComponentSpec[] = [
    new $.ComponentSpec("locational-identifier", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("direct-logical-identifier", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("indirect-logical-identifier", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of AE_Identifier
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AE_Identifier: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AE_Identifier
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AE_Identifier: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AE_Identifier: $.ASN1Decoder<AE_Identifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AE_Identifier
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AE_Identifier (el: _Element): AE_Identifier {
    if (!_cached_decoder_for_AE_Identifier) { _cached_decoder_for_AE_Identifier = function (el: _Element): AE_Identifier {
    let locational_identifier: OPTIONAL<Locational_identifier>;
    let direct_logical_identifier: OPTIONAL<DistinguishedName>;
    let indirect_logical_identifier: OPTIONAL<DistinguishedName>;
    const callbacks: $.DecodingMap = {
        "locational-identifier": (_el: _Element): void => { locational_identifier = $._decode_explicit<Locational_identifier>(() => _decode_Locational_identifier)(_el); },
        "direct-logical-identifier": (_el: _Element): void => { direct_logical_identifier = $._decode_explicit<DistinguishedName>(() => _decode_DistinguishedName)(_el); },
        "indirect-logical-identifier": (_el: _Element): void => { indirect_logical_identifier = $._decode_explicit<DistinguishedName>(() => _decode_DistinguishedName)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AE_Identifier,
        _extension_additions_list_spec_for_AE_Identifier,
        _root_component_type_list_2_spec_for_AE_Identifier,
        undefined,
    );
    return new AE_Identifier(
        locational_identifier,
        direct_logical_identifier,
        indirect_logical_identifier
    );
}; }
    return _cached_decoder_for_AE_Identifier(el);
}

let _cached_encoder_for_AE_Identifier: $.ASN1Encoder<AE_Identifier> | null = null;

/**
 * @summary Encodes a(n) AE_Identifier into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AE_Identifier, encoded as an ASN.1 Element.
 */
export
function _encode_AE_Identifier (value: AE_Identifier, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AE_Identifier) { _cached_encoder_for_AE_Identifier = function (value: AE_Identifier, elGetter: $.ASN1Encoder<AE_Identifier>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.locational_identifier === undefined) ? undefined : $._encode_explicit(_TagClass.context, 0, () => _encode_Locational_identifier, $.BER)(value.locational_identifier, $.BER)),
            /* IF_ABSENT  */ ((value.direct_logical_identifier === undefined) ? undefined : $._encode_explicit(_TagClass.context, 1, () => _encode_DistinguishedName, $.BER)(value.direct_logical_identifier, $.BER)),
            /* IF_ABSENT  */ ((value.indirect_logical_identifier === undefined) ? undefined : $._encode_explicit(_TagClass.context, 2, () => _encode_DistinguishedName, $.BER)(value.indirect_logical_identifier, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AE_Identifier(value, elGetter);
}


/* eslint-enable */
