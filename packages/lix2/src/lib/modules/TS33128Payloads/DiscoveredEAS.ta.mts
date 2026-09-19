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
import { EASProfile, _decode_EASProfile, _encode_EASProfile } from "../TS33128Payloads/EASProfile.ta.mjs";
// export { EASProfile, _decode_EASProfile, _encode_EASProfile } from "../TS33128Payloads/EASProfile.ta.mjs";


/**
 * @summary DiscoveredEAS
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiscoveredEAS ::= SEQUENCE
 * {
 *     eASProfile    [1] EASProfile,
 *     lifetime      [2] INTEGER OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class DiscoveredEAS {
    constructor (
        /**
         * @summary `eASProfile`.
         * @public
         * @readonly
         */
        readonly eASProfile: EASProfile,
        /**
         * @summary `lifetime`.
         * @public
         * @readonly
         */
        readonly lifetime: OPTIONAL<INTEGER>
    ) {}

    /**
     * @summary Restructures an object into a DiscoveredEAS
     * @description
     * 
     * This takes an `object` and converts it to a `DiscoveredEAS`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DiscoveredEAS`.
     * @returns {DiscoveredEAS}
     */
    public static _from_object (_o: { [_K in keyof (DiscoveredEAS)]: (DiscoveredEAS)[_K] }): DiscoveredEAS {
        return new DiscoveredEAS(_o.eASProfile, _o.lifetime);
    }


}

/**
 * @summary The Leading Root Component Types of DiscoveredEAS
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DiscoveredEAS: $.ComponentSpec[] = [
    new $.ComponentSpec("eASProfile", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("lifetime", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of DiscoveredEAS
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DiscoveredEAS: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DiscoveredEAS
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DiscoveredEAS: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DiscoveredEAS: $.ASN1Decoder<DiscoveredEAS> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DiscoveredEAS
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DiscoveredEAS (el: _Element): DiscoveredEAS {
    if (!_cached_decoder_for_DiscoveredEAS) { _cached_decoder_for_DiscoveredEAS = function (el: _Element): DiscoveredEAS {
    let eASProfile!: EASProfile;
    let lifetime: OPTIONAL<INTEGER>;
    const callbacks: $.DecodingMap = {
        "eASProfile": (_el: _Element): void => { eASProfile = $._decode_implicit<EASProfile>(() => _decode_EASProfile)(_el); },
        "lifetime": (_el: _Element): void => { lifetime = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DiscoveredEAS,
        _extension_additions_list_spec_for_DiscoveredEAS,
        _root_component_type_list_2_spec_for_DiscoveredEAS,
        undefined,
    );
    return new DiscoveredEAS(
        eASProfile,
        lifetime
    );
}; }
    return _cached_decoder_for_DiscoveredEAS(el);
}

let _cached_encoder_for_DiscoveredEAS: $.ASN1Encoder<DiscoveredEAS> | null = null;

/**
 * @summary Encodes a(n) DiscoveredEAS into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DiscoveredEAS, encoded as an ASN.1 Element.
 */
export
function _encode_DiscoveredEAS (value: DiscoveredEAS, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DiscoveredEAS) { _cached_encoder_for_DiscoveredEAS = function (value: DiscoveredEAS, elGetter: $.ASN1Encoder<DiscoveredEAS>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_EASProfile, $.BER)(value.eASProfile, $.BER),
            /* IF_ABSENT  */ ((value.lifetime === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.lifetime, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DiscoveredEAS(value, elGetter);
}


/* eslint-enable */
